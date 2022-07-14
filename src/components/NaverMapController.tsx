import styled from '@emotion/styled';
import useGeolocation from '@hooks/useGeolocation';
import getAssetURL from '@utils/getAssetURL';
import { useContext } from 'react';
import { MapContext } from './NaverMap';
import NaverMapImageMarker from './NaverMapImageMarker';

// @ts-ignore
const { naver } = window;

export default () => {
  const map: any = useContext(MapContext);
  const { loaded, coordinates, error } = useGeolocation();

  const handleUp = () => {
    map.setZoom(map.getZoom() + 1, true);
  };

  const handleDown = () => {
    map.setZoom(map.getZoom() - 1, true);
  };

  const handleGps = () => {
    if (error) {
      return window.alert('위치정보를 읽어올 수 없습니다.');
    }

    const position = new naver.maps.LatLng(coordinates?.lat, coordinates?.lng);

    (map as any).setCenter(position);
  };

  return (
    <Container>
      {loaded === true && error === undefined && (
        <NaverMapImageMarker
          disableCenter
          lat={coordinates!.lat}
          lng={coordinates!.lng}
          content={
            // <img
            //   src={getAssetURL('../assets/ic-my-position@3x.png')}
            //   style={{ width: 51, height: 75 }}
            // />
            <></>
          }
        />
      )}
      <ZoomWrap>
        <GpsIcon
          src={getAssetURL(
            `../assets/ic-local-${
              loaded && error === undefined ? 'on' : 'off'
            }@3x.png`,
          )}
          draggable={false}
          onClick={handleGps}
        />
        <Icon
          src={getAssetURL('../assets/ic-plus-03@3x.png')}
          draggable={false}
          onClick={handleUp}
        />
        <Icon
          src={getAssetURL('../assets/ic-minus-03@3x.png')}
          draggable={false}
          onClick={handleDown}
        />
      </ZoomWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  right: 40px;
  bottom: 50px;
`;

const ZoomWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const GpsIcon = styled.img`
  width: 67px;
  height: 67px;
  margin-bottom: -10px;
  cursor: pointer;
  user-select: none;
`;

const Icon = styled.img`
  width: 67px;
  height: 58px;
  cursor: pointer;
  user-select: none;
`;
