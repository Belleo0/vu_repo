import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import Input from '@components/Input';
import { useNavigate, useLocation } from 'react-router-dom';
import FieldCreateLayout from '@layout/FieldCreateLayout';
import Modal from '@components/Modal';
import DaumPostcode from 'react-daum-postcode';
import api from '@api';
import NaverMap from '@components/NaverMap';
import NaverMapImageMarker from '@components/NaverMapImageMarker';
import getAssetURL from '@utils/getAssetURL';
import { useLocalStorage } from '@hooks/useLocalStorage';

import TextModal from '@components/TextModal';
import BlackSelect from '@components/BlackSelect';
import Button, { ButtonType } from '@components/Button';
import AreaButton, { IArea } from '@components/AreaButton';
import ScrollBox from '@components/ScrollBox';

// @ts-ignore
const { naver } = window;

export default () => {
  const [fieldNm, setFieldNm] = useState('');
  const [fieldAddr, setFieldAddr] = useState('');
  const [secFieldAddr, setSecFieldAddr] = useState('');
  const [isPostcodeModalOpened, setIsPostcodeModalOpened] = useState(false);
  const [position, setPosition] = useState<any>();
  const [searchItem, setSearchItem] = useState<any>();

  const [areas, setAreas] = useState<IArea[]>([]);

  const [stateId, setStateId] = useState(null);
  const [cityId, setCityId] = useState(null);
  const [dongId, setDongId] = useState(null);
  const [jibun, setJibun] = useState('');

  const [stateOptions, setStateOptions] = useState<any>([]);
  const [cityOptions, setCityOptions] = useState<any>([]);
  const [dongOptions, setDongOptions] = useState<any>([]);

  const [searchedAreas, setSearchedAreas] = useState<any>([]);
  const [searchedJibun, setSearchedJibun] = useState<any>([]);
  const [resultMessage, setResultMessage] = useState('');

  const [state, setState] = useLocalStorage('@add-construction-field', {
    fieldNm,
    fieldAddr,
    secFieldAddr,
    position,
    searchItem,
  });

  const navigate = useNavigate();

  const nxtStepHandler = () => {
    navigate('/add-construction-field/step-2', {
      state: {
        fieldNm: fieldNm,
        fieldAddr: fieldAddr,
        secFieldAddr: secFieldAddr ? secFieldAddr : '',
        position: position,
      },
    });
  };

  const step = fieldNm && fieldAddr ? true : false;

  const getAddressCode = async (parentId: any) => {
    const { data } = await api.get(`/codes/addresses`, {
      params: { parent_id: parentId },
    });

    const result = data?.result.map((v: any) => {
      return {
        code: v.code,
        label: v.name,
        value: v.id,
      };
    });

    return result;
  };

  const handleAddArea = () => {
    if (stateId === null && cityId === null) return;

    const state = stateOptions.find((v: any) => v.value === stateId);
    const city = cityOptions.find((v: any) => v.value === cityId);
    const dong = dongOptions.find((v: any) => v.value === dongId);

    if (areas !== null) setAreas([]);

    if (stateId !== null && cityId !== null) {
      const baseArea = state.label.concat(' ', city.label);
      const areaList = dongOptions.map((v: any) =>
        baseArea.concat(' ', v.label),
      );
      setSearchedAreas(areaList);
      setJibun('');
    }
    if (!dongId) {
      setResultMessage('검색된 결과가 없습니다.');
    }

    setStateId(null);
    setCityId(null);
    setDongId(null);

    setSearchedJibun([]);
    setCityOptions([]);
    setDongOptions([]);
  };

  const handleSearchJibun = () => {
    if (!jibun) return;
    if (jibun) {
      naver.maps.Service.geocode(
        {
          query: jibun,
        },
        (status: any, response: any) => {
          if (status !== naver.maps.Service.Status.OK) {
            return alert('문제가 발생했습니다.');
          }
          if (!response.v2.addresses[0]) {
            setResultMessage('주소를 찾을 수 없습니다.');
            setJibun('');
          }
          const result = response.v2.addresses;
          console.log('result', result);
          setSearchedJibun(result);
        },
      );
    }
    setStateId(null);
    setCityId(null);
    setDongId(null);

    setSearchedAreas([]);
    setCityOptions([]);
    setDongOptions([]);
  };

  const handleCloseAddrModal = () => {
    setSearchedAreas([]);
    setSearchedJibun([]);
    setJibun('');
    setIsPostcodeModalOpened(false);
  };

  useEffect(() => {
    window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      e.returnValue = '';
    });
  }, []);

  useEffect(() => {
    setState((prev: any) => ({ ...prev, fieldAddr }));
  }, [fieldAddr]);
  useEffect(() => {
    setState((prev: any) => ({ ...prev, position }));
  }, [position]);
  useEffect(() => {
    setState((prev: any) => ({ ...prev, fieldNm }));
  }, [fieldNm]);
  useEffect(() => {
    setState((prev: any) => ({ ...prev, secFieldAddr }));
  }, [secFieldAddr]);

  useEffect(() => {
    if (state?.fieldAddr) setFieldAddr(state.fieldAddr);
    if (state?.position) setPosition(state.position);
    if (state?.fieldNm) setFieldNm(state.fieldNm);
    if (state?.secFieldAddr) setSecFieldAddr(state.secFieldAddr);
    if (state?.searchItem) setSearchItem(state.searchItem);
  }, [state]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/geocodes/addresses', {
        params: { address: fieldAddr },
      });
      setPosition(data?.result);
    })();
  }, [fieldAddr]);

  useEffect(() => {
    (async () => {
      const data = await getAddressCode(undefined);
      setStateOptions(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!stateId) return;
      const data = await getAddressCode(stateId);
      setCityOptions(data);
    })();
  }, [stateId]);

  useEffect(() => {
    (async () => {
      if (!cityId) return;
      const data = await getAddressCode(cityId);
      setDongOptions(data);
    })();
  }, [cityId]);

  useEffect(() => {
    if (jibun === '') {
      setSearchedJibun([]);
    }
    return;
  }, [jibun]);

  return (
    <FieldCreateLayout>
      <Container>
        <TopTitleWrapper>
          <BorderNumberWrapper>
            <BorderNumber>1</BorderNumber>
          </BorderNumberWrapper>
          <TopTitleBox>현장정보</TopTitleBox>
        </TopTitleWrapper>
        <InputItemWrapper>
          <FieldName>현장명</FieldName>
          <Input
            type="text"
            placeholder="현장명을 입력해 주세요"
            value={fieldNm}
            onChange={(e) => {
              setFieldNm(e.target.value);
            }}
            containerStyle={{
              width: '540px',
              height: '42px',
            }}
            style={{ height: '42px', padding: '11px 20px' }}
            errorMessage={fieldNm == '' ? '현장명 입력은 필수항목입니다.' : ''}
          />
        </InputItemWrapper>
        <InputItemWrapper style={{ height: '132px', marginTop: '19px' }}>
          <FieldName>현장주소</FieldName>
          <FindInputBtnWrapper>
            <Input
              type="text"
              placeholder="현장주소를 입력해 주세요"
              disabled
              value={fieldAddr}
              onChange={(e) => {
                setFieldAddr(e.target.value);
              }}
              containerStyle={{
                width: '430px',
                height: '42px',
                cursor: 'pointer',
              }}
              style={{
                height: '42px',
                padding: '11px 20px',
                cursor: 'pointer',
              }}
              onClick={() => setIsPostcodeModalOpened(true)}
            />
            <FindBtn onClick={() => setIsPostcodeModalOpened(true)}>
              찾기
            </FindBtn>
          </FindInputBtnWrapper>
          <Input
            type="text"
            placeholder="상세주소를 입력해 주세요 (선택)"
            value={secFieldAddr}
            onChange={(e) => {
              setSecFieldAddr(e.target.value);
            }}
            containerStyle={{
              width: '540px',
              height: '42px',
              marginTop: '14px',
            }}
            style={{ height: '42px', padding: '11px 20px' }}
          />
        </InputItemWrapper>
        <MapContentWrapper>
          <NaverMap
            lat={37.557733}
            lng={126.9253985}
            style={{ width: 540, height: 260 }}
            zoom={12}
          >
            {position && (
              <NaverMapImageMarker
                lat={position?.latitude}
                lng={position?.longitude}
                content={
                  <img
                    src={getAssetURL('../assets/ic-field-marker.png')}
                    style={{ width: 119, height: 72 }}
                  />
                }
              />
            )}
          </NaverMap>
        </MapContentWrapper>

        <BottomBtnWrapper>
          <InActiveBtn>이전</InActiveBtn>
          {step ? (
            <ActiveBtn onClick={() => nxtStepHandler()}>다음</ActiveBtn>
          ) : (
            <InActiveBtn>다음</InActiveBtn>
          )}
        </BottomBtnWrapper>
      </Container>
      {/* <Modal
        open={isPostcodeModalOpened}
        onClose={() => setIsPostcodeModalOpened(false)}
      >
        <PostContainer style={{ width: 400, height: 600 }}>
          <DaumPostcode
            onComplete={(v: any) => {
              setFieldAddr(v?.jibunAddress || v?.autoJibunAddress);
              setIsPostcodeModalOpened(false);
            }}
            defaultQuery={searchItem || ''}
            autoClose={true}
          />
        </PostContainer>
      </Modal> */}
      <Modal open={isPostcodeModalOpened} onClose={handleCloseAddrModal}>
        <SearchAddressContainer>
          <XIcon
            src={getAssetURL('../assets/ic-del-02.svg')}
            onClick={handleCloseAddrModal}
          />
          <TopBox>
            <ModalTitle>지번검색</ModalTitle>
          </TopBox>
          <SelectWrap>
            <BlackSelect
              placeholder="광역시도"
              width={150}
              value={stateId}
              onChange={(v: any) => setStateId(v)}
              options={stateOptions}
              absoluteStyle={{ border: 'solid 1px #c7c7c7' }}
            />
            <BlackSelect
              placeholder="시군구"
              value={cityId}
              width={150}
              onChange={(v: any) => setCityId(v)}
              options={cityOptions}
              absoluteStyle={{ border: 'solid 1px #c7c7c7' }}
              containerStyle={{ marginLeft: 10 }}
            />
            {/* <BlackSelect
              placeholder="읍면동"
              width={98}
              value={dongId}
              onChange={(v: any) => setDongId(v)}
              options={dongOptions}
              absoluteStyle={{ border: 'solid 1px #c7c7c7' }}
            /> */}
          </SelectWrap>
          <Input
            placeholder="읍면동 검색"
            value={jibun}
            onChange={(e) => {
              setJibun(e.target.value);
            }}
            style={{ height: 37 }}
          />
          <Button
            type={
              (stateId !== null && cityId !== null) || jibun
                ? ButtonType.PRIMARY
                : ButtonType.GRAY
            }
            containerStyle={{
              marginBottom: areas.length > 0 ? 20 : 30,
              height: 40,
            }}
            onClick={
              stateId !== null && cityId !== null
                ? handleAddArea
                : jibun
                ? handleSearchJibun
                : () => {}
            }
          >
            검색
          </Button>
          <TableBox>
            {searchedJibun.length > 0
              ? searchedJibun?.map((v: any, i: number) => (
                  <TableRow
                    key={i}
                    onClick={() => {
                      setFieldAddr(v.jibunAddress);
                      setIsPostcodeModalOpened(false);
                      setSearchedJibun([]);
                      setSearchedAreas([]);
                    }}
                  >
                    {v.jibunAddress}
                  </TableRow>
                ))
              : searchedAreas?.map((v: any, i: number) => (
                  <TableRow
                    key={i}
                    onClick={() => {
                      setFieldAddr(v);
                      setIsPostcodeModalOpened(false);
                      setSearchedAreas([]);
                      setSearchedJibun([]);
                    }}
                  >
                    {v}
                  </TableRow>
                ))}
            {resultMessage &&
              !searchedAreas?.length &&
              !searchedJibun?.length && <Message>{resultMessage}</Message>}
          </TableBox>
        </SearchAddressContainer>
      </Modal>
    </FieldCreateLayout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 0 60px 60px;

  user-select: none;
`;

const TopTitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const BorderNumberWrapper = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid #258fff;
  border-radius: 50%;
  text-align: -webkit-center;
`;

const BorderNumber = styled.div`
  width: 9px;
  height: 24px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  color: #258fff;
  line-height: 1.5;
`;

const TopTitleBox = styled.div`
  width: 80px;
  height: 29px;
  margin: 0 0 0 6px;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.4px;
  text-align: left;
  color: #222;
  line-height: 1.6;
`;

const FieldName = styled.div`
  height: 24px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000000;
  line-height: 1.4;
  margin-bottom: 10px;
`;

const InputItemWrapper = styled.div`
  width: 540px;
  height: 97px;
  margin: 45px 0 0 0;
`;

const FindBtn = styled.div`
  width: 100px;
  height: 42px;
  margin: 0 0 0 10px;
  border-radius: 6px;
  background-color: #000;
  padding: 13px 0 13px 0;
  cursor: pointer;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  color: #fff;
`;

const FindInputBtnWrapper = styled.div`
  display: flex;
  height: 42px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MapContentWrapper = styled.div`
  width: 540px;
  height: 260px;
  margin: 30px 0 70px 0;
  background-color: black;

  color: white;
  text-align: center;
  line-height: 14.5;
`;

const BottomBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 540px;
  height: 50px;
  flex-direction: row;
`;

const InActiveBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 50px;
  background-color: #f2f2f2;
  border-radius: 6px;

  font-size: 16px;
  font-weight: 500;
  color: #999;
`;

const ActiveBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 50px;
  background-color: #258fff;
  border-radius: 6px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

const PostContainer = styled.div``;

// search addr modal styles
const SearchAddressContainer = styled.div`
  width: 370px;
  height: 520px;

  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;
  background-color: #fff;
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;

  padding: 20px 0;
`;

const ModalTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #444;
`;

const XIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
  cursor: pointer;
`;

const SelectWrap = styled.div`
  display: flex;

  margin: 14px 0px;
`;

const TableBox = styled(ScrollBox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
`;

const TableRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  &:hover {
    color: #258fff;
  }
`;

const Message = styled.div`
  color: #999;
  font-size: 14px;
  font-weight: 500;
`;
