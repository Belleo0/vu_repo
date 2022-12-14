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
import Footer from '@components/Footer';
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
import FieldMapSidebar from '@components/FieldMapSidebar';
import NaverMapFieldStatus from '@components/NaverMapFieldStatus';
import NaverMapFieldAddress from '@components/NaverMapFieldAddress';
import useGeolocation from '@hooks/useGeolocation';
import { IArea } from '@components/AreaButton';
import useFieldMaps from '@api/useFieldMaps';
import FieldMarkerContent from '@components/FieldMarkerContent';
import MapFieldInfoModal from '@components/MapFieldInfoModal';
import NaverMapCenterPosition from '@components/NaverMapCenterPosition';
import useSpaces from '@api/useSpaces';

// @ts-ignore
const { naver } = window;

export default () => {
  const dispatch = useDispatch();

  const { error, coordinates, loaded } = useGeolocation();

  const { polylineInfo } = useSelector((s: any) => s.map, shallowEqual);

  const centerPaths = useMemo(() => {
    if (!polylineInfo) return null;
    return polylineInfo?.path[Math.floor(polylineInfo?.path.length / 2)];
  }, [polylineInfo]);

  const [duration, setDuration] = useState<string>('60');

  const { data: spaces } = useSpaces('N');

  const [selectedFieldInfo, setSelectedFieldInfo] = useState<any>(null);
  const [selectedFactoryId, setSelectedFactoryId] = useState<string | null>(
    null,
  );

  const selectedFactoryInfo = useMemo(() => {
    if (!spaces || selectedFactoryId === null) return null;
    return spaces.find((v: any) => v.id === selectedFactoryId);
  }, [spaces, selectedFactoryId]);

  const selectedFieldId = useMemo(() => {
    if (!selectedFieldInfo) return null;
    return selectedFieldInfo.id;
  }, [selectedFieldInfo]);

  const [bounds, setBounds] = useState<any>(null);

  const [address, setAddress] = useState('');
  const [realAddress, setRealAddress] = useState('');

  const [areas, setAreas] = useState<IArea[]>([]);

  const areaQuery = useMemo(() => {
    if (areas.length === 0) return '';
    return areas
      .map((area) => `${area.state.code}_${area.city.code}_${area.dong.code}`)
      .join(',');
  }, [areas]);

  const [currentZoomLevel, setCurrentZoomLevel] = useState(18);

  const { data: fieldsData, isLoading } = useFieldMaps(
    areaQuery,
    bounds,
    currentZoomLevel,
  );

  const previousFields = usePrevious(fieldsData);

  const fields = useMemo(() => {
    if (fieldsData) return fieldsData;
    return previousFields;
  }, [fieldsData]);

  const [selectedFactoryIds, setSelectedFactoryIds] = useState<number[]>([]);

  const [selectedSpaceInfo, setSelectedSpaceInfo] = useState<any>(null);

  const [order, setOrder] = useState('?????????');

  const delayedUpdateCall = useRef(debounce((q) => setBounds(q), 1000)).current;

  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const handleClickFactoryCard = useCallback(
    (id: number) => {
      setSelectedFactoryIds((prev: number[]) => {
        if (prev.includes(id)) {
          const result = prev.filter((v: any) => v !== id);
          return result;
        } else {
          const result = prev.concat(id);
          return result;
        }
      });
    },
    [selectedFactoryIds],
  );

  const [currentAddress, setCurrentAddress] = useState<any>('');
  const [currentAddrDetail, setCurrentAddrDetail] = useState({
    sido: '',
    sigugun: '',
  });

  // reversegeocode ?????? ?????? -> ?????????
  useEffect(() => {
    if (coordinates?.lat !== 0 && coordinates?.lng !== 0) {
      console.log('coordinates', coordinates);

      naver.maps.Service.reverseGeocode(
        {
          location: new naver.maps.LatLng(coordinates?.lat, coordinates?.lng),
        },
        function (status: any, response: any) {
          if (status !== naver.maps.Service.Status.OK) {
            return alert('????????? ??????????????????.');
          }

          let result = response.result; // ?????? ????????? ????????????
          let items = result.items; // ?????? ????????? ??????

          // do Something
          console.log('?????? ??????', items);
          console.log('?????? ?????? ??????::::', items?.[0].address);
          setCurrentAddress(items?.[0].address);

          const sido = items?.[0].addrdetail.sido;
          const sigugun = items?.[0].addrdetail.sigugun;
          setCurrentAddrDetail({
            sido: sido,
            sigugun: sigugun,
          });
          console.log('currentAddrDetail', currentAddrDetail);
        },
      );

      console.log('???????????? currentAddress', currentAddress);
      setRealAddress(currentAddress);
      setAddress(currentAddress);
    }
  }, [coordinates, currentAddress]);

  useEffect(() => {
    console.log('changed selectedFactoryIds', selectedFactoryIds);
  }, [selectedFactoryIds]);

  useEffect(() => {
    if (selectedSpaceInfo) {
      setAddress(selectedFieldInfo?.basic_address);
    }
  }, [selectedFieldInfo]);

  useEffect(() => {
    if (fieldsData?.message === '?????? ????????? ?????? ??? ????????????.') {
      window.alert('?????? ????????? ?????? ??? ????????????.');
      setRealAddress('');
    }
  }, [fieldsData]);

  return (
    <SpaceMapLayout>
      <FieldMapSidebar
        spaces={spaces}
        fields={fields}
        order={order}
        setOrder={setOrder}
        duration={duration}
        setDuration={setDuration}
        selectedFactoryId={selectedFactoryId}
        setSelectedFactoryId={setSelectedFactoryId}
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
        areas={areas}
        setAreas={setAreas}
      />
      <ContentWrap>
        <Content>
          <NaverMap
            lat={37.557733}
            lng={126.9253985}
            zoom={17}
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
            zoomChange={(zoom) => {
              setCurrentZoomLevel(zoom);
            }}
          >
            <NaverMapCenterPosition
              lat={selectedFactoryInfo?.latitude as any}
              lng={selectedFactoryInfo?.longitude as any}
              disableCenter={false}
            />
            <NaverMapCenterPosition
              lat={selectedSpaceInfo?.latitude as any}
              lng={selectedSpaceInfo?.longitude as any}
              disableCenter={selectedSpaceInfo?.disableCenter as boolean}
            />
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
            {!!fields?.field_position && (
              <NaverMapImageMarker
                lat={fields?.field_position.latitude}
                lng={fields?.field_position.longitude}
                content={
                  <img
                    src={getAssetURL('../assets/ic-field-marker.png')}
                    style={{ width: 119, height: 72 }}
                  />
                }
              />
            )}

            {fields &&
              fields.data?.map((v: any, i: number) => (
                <NaverMapSpaceMarker
                  key={v.id}
                  lat={v.latitude}
                  lng={v.longitude}
                  content={
                    <FieldMarkerContent
                      index={i}
                      name={v?.main_purps_cd_nm}
                      data={v}
                      address={v?.basic_address}
                      distance={v?.direction?.distance}
                      duration={v?.direction?.duration}
                      onClick={() => {
                        if (selectedFieldId !== null) {
                          handleClickFactoryCard(v.id);
                        }
                      }}
                      onInfo={() => {
                        setIsInfoModalOpen(false);
                        setSelectedSpaceInfo({ ...v, disableCenter: true });
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
                      hideWithoutName={true}
                    />
                  }
                />
              ))}
            <NaverMapFieldAddress currentAddrDetail={currentAddrDetail} />

            <NaverMapController />
            <NaverMapFieldStatus />
          </NaverMap>
          <MapFieldInfoModal
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
