import React, { useContext, useEffect } from 'react';

import { MapContext } from './NaverMap';

// @ts-ignore
const { naver } = window;

export interface IPolyline {
  paths: number[][];
}

export default ({ paths }: IPolyline) => {
  const map = useContext(MapContext);

  useEffect(() => {
    const polyline = new naver.maps.Polyline({
      map,
      path: paths.map((v: any) => new naver.maps.LatLng(v[1], v[0])),
      strokeWeight: 5,
      strokeColor: '#ef0000',
    });

    return () => {
      polyline.setMap(null);
    };
  }, [map, paths]);

  return <div />;
};
