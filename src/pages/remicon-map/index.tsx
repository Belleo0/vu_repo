import React, { useMemo, useState } from 'react';
import SpaceMapLayout from '@layout/SpaceMapLayout';
import NaverMap from '@components/NaverMap';
import NaverMapSpaceMarker from '@components/NaverMapSpaceMarker';

import styled from '@emotion/styled';
import SpaceMapSidebar from '@components/SpaceMapSidebar';
import Footer from '@components/Footer';
import useFactoryMaps from '@api/useFactoryMaps';
import SpaceMarkerContent from '@components/SpaceMarkerContent';
import getAssetURL from '@utils/getAssetURL';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import NaverMapPolyline from '@components/NaverMapPolyline';
import { setPolylineInfo } from '@data/map';
import NaverMapImageMarker from '@components/NaverMapImageMarker';
import NaverMapDirectionMarker from '@components/NaverMapDirectionMarker';
import DirectionMarkerContent from '@components/DirectionMarkerContent';
import MapSpaceInfoModal from '@components/MapSpaceInfoModal';
import TextModal from '@components/TextModal';

export default () => {
  const dispatch = useDispatch();

  const { polylineInfo } = useSelector((s: any) => s.map, shallowEqual);

  const centerPaths = useMemo(() => {
    if (!polylineInfo) return null;
    return polylineInfo?.path[Math.floor(polylineInfo?.path.length / 2)];
  }, [polylineInfo]);

  const [duration, setDuration] = useState<string>('null');

  const [selectedFieldInfo, setSelectedFieldInfo] = useState<any>(null);

  const selectedFieldId = useMemo(() => {
    if (!selectedFieldInfo) return null;
    return selectedFieldInfo.id;
  }, [selectedFieldInfo]);

  const { data: factories } = useFactoryMaps(selectedFieldId, duration);

  const [selectedFactoryIds, setSelectedFactoryIds] = useState<number[]>([]);

  const [selectedSpaceInfo, setSelectedSpaceInfo] = useState(null);

  const [order, setOrder] = useState('거리순');

  return (
    <SpaceMapLayout>
      <SpaceMapSidebar
        factories={factories}
        order={order}
        setOrder={setOrder}
        duration={duration}
        setDuration={setDuration}
        selectedFieldInfo={selectedFieldInfo}
        setSelectedFieldInfo={setSelectedFieldInfo}
        selectedFactoryIds={selectedFactoryIds}
        setSelectedFactoryIds={setSelectedFactoryIds}
      />
      <ContentWrap>
        <Content>
          <NaverMap
            lat={37.557733}
            lng={126.9253985}
            zoom={15}
            style={{ width: '100%', height: 'calc(100vh - 80px)' }}
          >
            {polylineInfo?.path && (
              <NaverMapPolyline paths={polylineInfo?.path} />
            )}
            {centerPaths && (
              <NaverMapDirectionMarker
                lat={centerPaths[1]}
                lng={centerPaths[0]}
                content={
                  <DirectionMarkerContent
                    distance={polylineInfo.distance}
                    duration={polylineInfo.duration}
                  />
                }
              />
            )}
            {selectedFieldInfo && (
              <NaverMapImageMarker
                lat={selectedFieldInfo.latitude}
                lng={selectedFieldInfo.longitude}
                content={
                  <img
                    src={getAssetURL('../assets/ic-field-marker.png')}
                    style={{ width: 119, height: 72 }}
                  />
                }
              />
            )}

            {factories &&
              factories.map((v, i) => (
                <NaverMapSpaceMarker
                  lat={v.latitude}
                  lng={v.longitude}
                  content={
                    <SpaceMarkerContent
                      index={i}
                      name={v?.name}
                      address={v?.basic_address}
                      distance={v?.direction?.distance}
                      duration={v?.direction?.duration}
                      onInfo={() => {
                        setSelectedSpaceInfo(v);
                      }}
                      onChangePath={() => {
                        dispatch(setPolylineInfo(v?.direction));
                      }}
                      selected={
                        v.direction === polylineInfo ||
                        selectedFactoryIds.includes(v.id)
                      }
                    />
                  }
                />
              ))}
          </NaverMap>
          <MapSpaceInfoModal
            data={selectedSpaceInfo}
            setSelectedSpaceInfo={setSelectedSpaceInfo}
          />
        </Content>
        <Footer />
      </ContentWrap>
    </SpaceMapLayout>
  );
};

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  overflow-y: scroll;
`;

const Content = styled.div`
  flex: 1;
  position: relative;
`;
