import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';

import ReactDOMClient from 'react-dom/client';
import ReactDOMServer from 'react-dom/server';

import { MapContext } from './NaverMap';

// @ts-ignore
const { naver } = window;

export interface IMarker {
  lat: number;
  lng: number;
  content: React.ReactNode;
  onClick?: (lat: number, lng: number) => void;
}

export default ({ lat, lng, content }: IMarker) => {
  const { current: id } = useRef(Math.random().toString(36).slice(2));
  const [marker, setMarker] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  const convertedContent = useMemo(() => {
    return `<div id="${id}">${ReactDOMServer.renderToString(
      content as any,
    )}</div>`;
  }, [content]);

  const map = useContext(MapContext);

  useEffect(() => {
    const marker = new naver.maps.Marker({
      map,
      position: new naver.maps.LatLng(lat, lng),
      icon: {
        content: convertedContent,
        size: new naver.maps.Size(91.5, 42),
        anchor: new naver.maps.Point(45.75, 42),
      },
    });

    setMarker(marker);

    ReactDOMClient.hydrateRoot(document.getElementById(id)!, content as any);

    setIsMounted(true);

    return () => {
      marker.setMap(null);
    };
  }, [map, lat, lng]);

  useEffect(() => {
    if (isMounted) {
      marker.setIcon({
        content: convertedContent,
        size: new naver.maps.Size(22, 35),
        anchor: new naver.maps.Point(11, 35),
      });

      ReactDOMClient.hydrateRoot(document.getElementById(id)!, content as any);
    }
  }, [convertedContent]);

  return <div />;
};
