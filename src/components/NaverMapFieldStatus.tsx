import { css } from '@emotion/react';
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

  return (
    <Container>
      <Title>현장</Title>
      <MapFieldHelperWrap>
        <MapFieldHelperContent>
          <Circle color="#00b448" /> 허가된 현장
        </MapFieldHelperContent>
        <MapFieldHelperContent>
          <Circle color="#9241e4" /> 착공중인 현장
        </MapFieldHelperContent>
        <MapFieldHelperContent>
          <Circle color="#253bff" /> 승인된 현장
        </MapFieldHelperContent>
      </MapFieldHelperWrap>
      <Title>공장</Title>
      <MapFieldHelperContent>
        <Circle color="#ff7d00" /> 레미콘 공장
      </MapFieldHelperContent>
    </Container>
  );
};

const Container = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;

  padding: 10px 14px;
  background-color: #fff;
  border-radius: 12px;

  right: 112px;
  bottom: 24px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #000;
`;

const MapFieldHelperWrap = styled.div`
  margin-bottom: 14px;
`;

const MapFieldHelperContent = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  color: #000;
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;
  margin: 10px 8px 7px 0;

  border-radius: 16px;

  background-color: ${(props) => props.color};
`;
