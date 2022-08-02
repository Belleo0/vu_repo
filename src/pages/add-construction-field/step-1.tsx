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

export default () => {
  const [fieldNm, setFieldNm] = useState('');
  const [fieldAddr, setFieldAddr] = useState('');
  const [secFieldAddr, setSecFieldAddr] = useState('');
  const [isPostcodeModalOpened, setIsPostcodeModalOpened] = useState(false);
  const [position, setPosition] = useState<any>();
  const [searchItem, setSearchItem] = useState<any>();

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
      <Modal
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
