import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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

import { debounce } from 'lodash';
import { usePrevious } from '@hooks/usePrevious';
import NaverMapController from '@components/NaverMapController';
import useGeolocation from '@hooks/useGeolocation';

export default () => {
  const dispatch = useDispatch();

  const { polylineInfo } = useSelector((s: any) => s.map, shallowEqual);

  const centerPaths = useMemo(() => {
    if (!polylineInfo) return null;
    return polylineInfo?.path[Math.floor(polylineInfo?.path.length / 2)];
  }, [polylineInfo]);

  const [duration, setDuration] = useState<string>('60');

  const [selectedFieldInfo, setSelectedFieldInfo] = useState<any>(null);

  const selectedFieldId = useMemo(() => {
    if (!selectedFieldInfo) return null;
    return selectedFieldInfo.id;
  }, [selectedFieldInfo]);

  const selectedFieldAddress = useMemo(() => {
    if (!selectedFieldInfo) return null;
    return selectedFieldInfo.basic_address;
  }, [selectedFieldInfo]);

  const [bounds, setBounds] = useState<any>(null);

  const [address, setAddress] = useState('');
  const [realAddress, setRealAddress] = useState('');

  const { data: factoriesData, isLoading } = useFactoryMaps(
    selectedFieldId,
    duration,
    bounds,
    realAddress,
  );

  const previousFactories = usePrevious(factoriesData);

  const factories = useMemo(() => {
    if (factoriesData) return factoriesData;
    return previousFactories;
  }, [factoriesData]);

  const [selectedFactoryIds, setSelectedFactoryIds] = useState<number[]>([]);

  const [selectedSpaceInfo, setSelectedSpaceInfo] = useState(null);

  const [order, setOrder] = useState('거리순');

  const delayedUpdateCall = useRef(debounce((q) => setBounds(q), 1000)).current;

  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const handleClickFactoryCard = useCallback(
    (id: number) => {
      setSelectedFactoryIds((prev: number[]) => {
        if (prev.includes(id)) {
          const result = prev.filter((v) => v !== id);
          return result;
        } else {
          const result = prev.concat(id);
          return result;
        }
      });
    },
    [selectedFactoryIds],
  );

  useEffect(() => {
    if (selectedFieldAddress !== null) {
      setAddress(selectedFieldAddress);
    }
  }, [selectedFieldAddress]);

  useEffect(() => {
    if (factoriesData?.message === '주소 위치를 찾을 수 없습니다.') {
      window.alert('주소 위치를 찾을 수 없습니다.');
      setRealAddress('');
    }
  }, [factoriesData]);

  const orderByFactories = useMemo(() => {
    if (factories) {
      const data = factories?.data;
      if (order === '거리순') {
        const sortedData = data.sort((a: any, b: any) => {
          return a.direction?.distance - b.direction?.distance;
        });
        return sortedData;
      } else if (order === '시간순') {
        const sortedData = data.sort((a: any, b: any) => {
          return a.direction?.duration - b.direction?.duration;
        });
        return sortedData;
      }
    } else return;
  }, [factories, order]);

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
        selectedFieldId={selectedFieldId}
        setSelectedSpaceInfo={setSelectedSpaceInfo}
        setIsInfoModalOpen={setIsInfoModalOpen}
        handleClickFactoryCard={handleClickFactoryCard}
        address={address}
        setAddress={setAddress}
        setRealAddress={setRealAddress}
        orderByFactories={orderByFactories}
      />
      <ContentWrap>
        <Content>
          <NaverMap
            lat={37.557733}
            lng={126.9253985}
            zoom={15}
            style={{ width: '100%', height: 'calc(100vh - 80px)' }}
            boundChange={({ _min, _max }) => {
              const data = {
                min_lat: _min._lat,
                min_lng: _min._lng,
                max_lat: _max._lat,
                max_lng: _max._lng,
              };
              delayedUpdateCall(data);
            }}
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
            {!!factories?.field_position && (
              <NaverMapImageMarker
                lat={factories?.field_position.latitude}
                lng={factories?.field_position.longitude}
                content={
                  <img
                    src={getAssetURL('../assets/ic-field-marker.png')}
                    style={{ width: 119, height: 72 }}
                  />
                }
                disableCenter={false}
              />
            )}

            {factories &&
              orderByFactories?.map((v: any, i: number) => (
                <NaverMapSpaceMarker
                  key={v.id}
                  lat={v.latitude}
                  lng={v.longitude}
                  content={
                    <SpaceMarkerContent
                      index={i}
                      name={v?.name}
                      address={v?.basic_address}
                      distance={v?.direction?.distance}
                      duration={v?.direction?.duration}
                      // onClick={() => {
                      //   if (selectedFieldId !== null) {
                      //     handleClickFactoryCard(v.id);
                      //   }
                      // }}
                      onClick={() => {
                        if (!!factories?.field_position) {
                          handleClickFactoryCard(v.id);
                        }
                      }}
                      onInfo={() => {
                        setIsInfoModalOpen(false);
                        setSelectedSpaceInfo(v);
                        setTimeout(() => {
                          setIsInfoModalOpen(true);
                        }, 250);
                      }}
                      onChangePath={() => {
                        dispatch(setPolylineInfo(v?.direction));
                      }}
                      selected={
                        (!!v.direction && v.direction === polylineInfo) ||
                        selectedFactoryIds.includes(v.id)
                      }
                      hideWithoutName={!!factories?.field_position}
                    />
                  }
                />
              ))}
            <NaverMapController />
          </NaverMap>
          <MapSpaceInfoModal
            open={isInfoModalOpen}
            onClose={() => setIsInfoModalOpen(false)}
            data={selectedSpaceInfo}
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
