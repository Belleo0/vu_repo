import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useGeolocation from '@hooks/useGeolocation';
import getAssetURL from '@utils/getAssetURL';
import { useContext, useState } from 'react';
import BlackSelect from './BlackSelect';
import FilterSelect from './FilterSelect';
import { MapContext } from './NaverMap';
import NaverMapImageMarker from './NaverMapImageMarker';

// @ts-ignore
const { naver } = window;

export default () => {
  const map: any = useContext(MapContext);
  const { loaded, coordinates, error } = useGeolocation();

  const [mapFilter, setMapFilter] = useState('일반지도');

  return (
    <Container>
      <NaverMapAddressWrap>
        <District>부산광역시</District>
        <Icon src={getAssetURL('../assets/ic-arrow-right.svg')} />
        <District>동구</District>
      </NaverMapAddressWrap>
      <NaverMapSelectWrap>
        <BlackSelect
          options={[
            { label: '일반지도', value: '일반지도' },
            { label: '항공지도', value: '항공지도' },
          ]}
          value={mapFilter}
          onChange={(v) => setMapFilter(v)}
          width={120}
          absoluteStyle={{ border: 0 }}
        />
      </NaverMapSelectWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  /* flex-direction: row; */
  position: absolute;
  z-index: 100;

  right: 40px;
  top: 54px;
`;

const NaverMapAddressWrap = styled.div`
  display: flex;
  align-items: center;

  padding: 11px 20px;
  border-radius: 6px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);

  background-color: #fff;
`;

const NaverMapSelectWrap = styled.div`
  margin-left: 24px;
`;

const District = styled.div`
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.32px;
  color: #000;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin: 2px;
`;
