import React, {
  createContext,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

// @ts-ignore
const { naver } = window;

interface IProps {
  // lat: number;
  // lng: number;
  lat: any;
  lng: any;
  zoomChange?: (v: any) => void;
  boundChange?: (v: any) => void;
  style: React.CSSProperties;
  children?: React.ReactNode;
  zoom?: number;
}

// @ts-ignore
export const MapContext = createContext();

export default ({
  lat,
  lng,
  zoomChange,
  boundChange,
  zoom = 3,
  style,
  children,
}: IProps) => {
  const [map, setMap] = useState<any>();
  const [isMount, setIsMount] = useState(false);
  const [isMapRendered, setIsMapRendered] = useState<boolean>(false);

  const MapRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (isMount) {
      const container = MapRef.current;
      const options = {
        center: new naver.maps.LatLng(lat, lng),
        zoom: zoom || 3,
      };
      const tempMap = new naver.maps.Map(container, options);

      setMap(tempMap);

      if (zoomChange) {
        naver.maps.Event.addListener(tempMap, 'zoom_changed', zoomChange);
      }

      if (boundChange) {
        naver.maps.Event.addListener(tempMap, 'bounds_changed', boundChange);
        boundChange(tempMap.getBounds());
      }

      setIsMapRendered(true);
    }
  }, [isMount]);

  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    <MapContext.Provider value={map}>
      {isMapRendered ? children : null}
      <div id="map" ref={MapRef} style={{ ...style, background: 'none' }} />
    </MapContext.Provider>
  );
};
