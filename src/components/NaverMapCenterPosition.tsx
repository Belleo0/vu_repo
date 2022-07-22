import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';

import { MapContext } from './NaverMap';

// @ts-ignore
const { naver } = window;

export interface IMarker {
  lat: number;
  lng: number;
  onClick?: (lat: number, lng: number) => void;
  disableCenter?: boolean;
}

export default ({ lat, lng, disableCenter = false }: IMarker) => {
  const map = useContext(MapContext);

  useEffect(() => {
    if (lng !== undefined && lat !== undefined && !disableCenter) {
      const position = new naver.maps.LatLng(lat, lng);

      (map as any).setCenter(position);
    }

    return () => {};
  }, [map, lat, lng, disableCenter]);

  return <div />;
};
