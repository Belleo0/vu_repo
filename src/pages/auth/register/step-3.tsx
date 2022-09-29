import React, { useEffect, useRef, useState } from 'react';

import api, { setToken } from '@api';
import styled from '@emotion/styled';
import AuthLayout from '@layout/AuthLayout';
import Input from '@components/Input';
import SearchInput from '@components/SearchInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import getAssetURL from '@utils/getAssetURL';
import Modal from '@components/RegisterTextModal';
import PostModal from '@components/Modal';
import SearchCompanyModal from '@components/SearchCompanyModal';
import { useDispatch } from 'react-redux';
import { me } from '@data/auth';
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';
import useWindowSize from '@hooks/useWindowSize';
import { mobile } from '@utils/responsive';

enum ButtonType {
  'ABLE',
  'INABLE',
}
enum MainHeightType {
  'ABLE',
  'INABLE',
}
const heightPixel = {
  [MainHeightType.INABLE]: '631px',
  [MainHeightType.ABLE]: '797px',
};
const paddingPixel = {
  [MainHeightType.INABLE]: '30px 30px 50px',
  [MainHeightType.ABLE]: '40px 30px 50px 30px',
};
const backgroundColors = {
  [ButtonType.ABLE]: '#258fff',
  [ButtonType.INABLE]: '#f2f2f2',
};
const borderColors = {
  [ButtonType.ABLE]: '#258fff',
  [ButtonType.INABLE]: '#f2f2f2',
};
const textColors = {
  [ButtonType.ABLE]: '#fff',
  [ButtonType.INABLE]: '#999999',
};
const cursor = {
  [ButtonType.ABLE]: 'pointer',
  [ButtonType.INABLE]: 'default',
};

export default () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 현재 가로 화면 사이즈
  const { width } = useWindowSize();

  const backStepHandler = () => {
    navigate('/auth/register/step-2');
  }

  // # Basic State
  const [company, setCompany] = useState<any>(); // 회사이름
  const [position, setPosition] = useState<string>(''); // 직위 / 직급
  const [department, setDepartment] = useState<string>(''); // 부서
  const [tel, setTel] = useState<string>(''); // 사내 전화번호
  const [zoneCode, setZoneCode] = useState<string>(''); // 우편번호 (직접입력 시)
  const [companyAdress, setCompanyAdress] = useState<string>(''); // 기본주소  (직접입력 시)
  const [companyAdress2, setCompanyAdress2] = useState<string>(''); // 상세주소  (직접입력 시)

  const [isValid, setIsValid] = useState<boolean>(false); // 전체 유효성 확인

  const [isUserInsert, setIsUserInsert] = useState<boolean>(true); // 회사 직접등록

  const [isPostcodeModalOpened, setIsPostcodeModalOpened] = useState(false); //주소검색

  // #Modal
  const [successOpenModal, setSuccessOpenModal] = useState(false); // 완료 modal controller
  const [searchCompanyOpenModal, setSearchCompanyOpenModal] = useState(false); // 회사검색 modal controller

  const [constructionCompanyId, setConstructionCompanyId] = useState<any>(); // 건설사 직접입력 회원가입

  const userInviteType: boolean = false;
  const companyName: string = '동양건설'; //추후 초대받은 회사가 있다면 분기에 따라 val 변경
  const companyType: string =
    (location.state as any)?.userType === 1 ? 'con' : 'rem'; // 유저 소속에 따른 타입 1: 건설사, 2: 레미콘사

  // const temp1 = 'cc';
  // const temp2 = 'qwe123@@';

  const requestSignUpHandler = async () => {
    if (companyType === 'con') {
      await axios
        .post('http://52.78.198.181:9998/company_reg.php', {
          company_type: 'CONSTRUCTION',
          name: companyName,
          address: companyAdress,
        })
        .then((res: any) => setConstructionCompanyId(res?.data?.rsult?.id));
    }

    await api
      .post('/auth/register', {
        company_id: companyType === 'con' ? constructionCompanyId : company?.id,
        signname: (location.state as any)?.signname,
        password: (location.state as any)?.password,
        name: '11' || (location.state as any)?.name,
        phone: '01000000001' || (location.state as any)?.phone,
        position: position || '',
        tel: tel || '',
      })
      .then(async () => {
        setSuccessOpenModal(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const isValidHandler = (e: any, type: string) => {
    switch (type) {
      case 'company':
        if (!isUserInsert && company !== undefined) {
          setCompany(e);
          setIsValid(() => true);
        } else {
          setCompany(e);
        }
        break;
      case 'zoneCode':
        setZoneCode(e);
        break;
      case 'companyAdress':
        setCompanyAdress(e);
        break;
      case 'companyAdress2':
        setCompanyAdress2(e);
        break;
      case 'rank':
        setPosition(e);
        break;

      case 'department':
        setDepartment(e);
        break;

      case 'inPhone':
        setTel(e);
        break;
    }
  };

  useEffect(() => {
    if (isUserInsert) {
      setCompany('');
    }
  }, []);

  const insertUserCompany = () => {
    setIsUserInsert(true);
    setIsValid(false);
    setCompany('');
    setPosition('');
    setDepartment('');
    setTel('');
    setZoneCode('');
    setCompanyAdress('');
    setCompanyAdress2('');
  };

  useEffect(() => {
    if (isUserInsert) {
      if (company?.length >= 1 && companyAdress?.length >= 1) {
        setIsValid(true);
        console.log();
      } else {
        setIsValid(false);
      }
    }
  }, [zoneCode, companyAdress]);

  const successCloseModal = async () => {
    await api
      .post('/auth/login', {
        username: (location?.state as any)?.signname,
        password: (location?.state as any)?.password,
      })
      .then(async (res) => {
        setToken(res.data);
        await dispatch(me());
        navigate('/my-space');
      });
  };

  const searchCompanyClose = () => {
    setSearchCompanyOpenModal(false);
  };

  useEffect(() => {
    company?.name && setIsValid(true);
  }, [company]);

  return (
    <AuthLayout>
      <SearchCompanyModal
        open={searchCompanyOpenModal}
        onClose={() => {
          searchCompanyClose();
        }}
        setChkCompany={setCompany}
        companyType={companyType}
      />
      <Modal
        open={successOpenModal}
        onClose={() => successCloseModal()}
        submitText={'확인'}
        content={'회원가입이 완료되었습니다.'}
      />
      <Container>
        <MainTitlePc>
          {!companyName ? companyName : 'CONAZ에 오신 것을 환영합니다'}
        </MainTitlePc>
        <TermsWrapper
          type={isUserInsert ? MainHeightType.ABLE : MainHeightType.INABLE}
        >
          <ProgressBar>
            <ProgressCircle>1</ProgressCircle>
            <ProgressDashed src={getAssetURL('../assets/ic-dashed.svg')} />
            <ProgressCircle>2</ProgressCircle>
            <ProgressDashed src={getAssetURL('../assets/ic-dashed.svg')} />
            <ProgressCircle>3</ProgressCircle>
          </ProgressBar>
          <MainTitleMobile>
          {!companyName ? companyName : 'CONAZ에 오신 것을 환영합니다'}
          </MainTitleMobile>
          <MainContentBox>
            {isUserInsert && companyType === 'con' ? (
              <>
                <PostModal
                  open={isPostcodeModalOpened}
                  onClose={() => setIsPostcodeModalOpened(false)}
                >
                  <PostContainer style={{ width: 400, height: 600 }}>
                    <DaumPostcode
                      onComplete={(v: any) => {
                        console.log(v);
                        setZoneCode(v.zonecode);
                        setCompanyAdress(v.autoRoadAddress || v.roadAddress);
                        setIsPostcodeModalOpened(false);
                      }}
                    />
                  </PostContainer>
                </PostModal>
                <LineWrapper style={{ margin: 0 }}>
                  <RepeatTitle>
                    {companyType == 'con' ? '회사명' : '레미콘 공장 상호명'}
                  </RepeatTitle>
                  <Input
                    style={{ padding: '11px 20px', height: '42px' }}
                    onChange={(e) => {
                      isValidHandler(e.target.value, 'company');
                    }}
                    value={company}
                    containerStyle={{ marginTop: '8px' }}
                    placeholder={
                      companyType == 'con'
                        ? '회사명을 입력해 주세요'
                        : '레미콘 공장명을 검색해 주세요'
                    }
                  />
                </LineWrapper>
                <LineWrapper>
                  <RepeatTitle>
                    {companyType == 'con' ? '회사 주소' : '공장 주소'}
                  </RepeatTitle>
                  <TextWrapper>
                    <Input
                      style={{ padding: '11px 20px', height: '42px' }}
                      containerStyle={{
                        width: '250px',
                        height: '42px',
                        margin: 0,
                      }}
                      type="text"
                      value={zoneCode}
                      disabled={true}
                      placeholder={'우편번호 검색'}
                    />
                    <SendButton
                      onClick={() => {
                        setIsPostcodeModalOpened(true);
                      }}
                    >
                      우편번호 조회
                    </SendButton>
                  </TextWrapper>
                  <Input
                    style={{ padding: '11px 20px', height: '42px' }}
                    containerStyle={{
                      height: '42px',
                      marginTop: '12px',
                    }}
                    type="text"
                    onChange={(e) => {
                      isValidHandler(e.target.value, 'companyAdress');
                    }}
                    value={companyAdress}
                    placeholder={
                      companyType == 'con'
                        ? '회사 주소를 입력해 주세요'
                        : '공장 주소를 입력해 주세요'
                    }
                  />
                  <Input
                    style={{ padding: '11px 20px', height: '42px' }}
                    containerStyle={{
                      height: '42px',
                      marginTop: '12px',
                    }}
                    type="text"
                    onChange={(e) => {
                      isValidHandler(e.target.value, 'companyAdress2');
                    }}
                    value={companyAdress2}
                    placeholder={'상세 주소를 입력해 주세요'}
                  />
                </LineWrapper>

                <LineWrapper>
                  <RepeatTitle>직위/직급 (선택)</RepeatTitle>
                  <TextWrapper>
                    <Input
                      style={{ padding: '11px 20px', height: '42px' }}
                      containerStyle={{
                        width: '380px',
                        height: '42px',
                        margin: 0,
                      }}
                      onChange={(e) => {
                        isValidHandler(e.target.value, 'rank');
                      }}
                      value={position || ''}
                      placeholder={'직위/직급을 입력해 주세요'}
                    />
                  </TextWrapper>
                </LineWrapper>

                <LineWrapper>
                  <RepeatTitle>부서 (선택)</RepeatTitle>
                  <TextWrapper>
                    <Input
                      style={{ padding: '11px 20px', height: '42px' }}
                      containerStyle={{
                        width: '380px',
                        height: '42px',
                        margin: 0,
                      }}
                      onChange={(e) => {
                        isValidHandler(e.target.value, 'department');
                      }}
                      value={department || ''}
                      placeholder={'부서를 입력해 주세요'}
                    />
                  </TextWrapper>
                </LineWrapper>

                <LineWrapper style={{ marginBottom: 0 }}>
                  <RepeatTitle>사내 전화번호 (선택)</RepeatTitle>
                  <TextWrapper>
                    <Input
                      style={{ padding: '11px 20px', height: '42px' }}
                      containerStyle={{ height: '42px', margin: 0 }}
                      onChange={(e) => {
                        isValidHandler(e.target.value, 'inPhone');
                      }}
                      value={tel || ''}
                      placeholder={
                        '사내 전화번호를 입력해 주세요 (숫자만 입력)'
                      }
                    />
                  </TextWrapper>
                </LineWrapper>
              </>
            ) : (
              <>
                <LineWrapper style={width > 360 ? { marginBottom: '31px' } : {marginBottom : '25px'}}>
                  <RepeatTitle>
                    {companyType == 'con' ? '회사명' : '레미콘 공장 상호명'}
                  </RepeatTitle>
                  <div
                    onClick={() => {
                      setSearchCompanyOpenModal(true);
                    }}
                  >
                    <SearchInput
                      containerStyle={{
                        border: '1px solid #c7c7c7',
                        backgroundColor: '#fff',
                        marginTop: '8px',
                      }}
                      disabled={true}
                      style={{ padding: '11px 20px', height: '42px' }}
                      onChange={(e) => {
                        isValidHandler(e.target.value, 'company');
                      }}
                      value={company?.name}
                      placeholder={
                        companyType == 'con'
                          ? '회사명을 검색해 주세요'
                          : '레미콘 공장을 검색해 주세요'
                      }
                      onClick={() => {
                        setSearchCompanyOpenModal(true);
                      }}
                    />
                  </div>
                  {userInviteType ? (
                    <></>
                  ) : (
                    <CaptionWrapper>
                      <Caption>
                        {companyType == 'con'
                          ? '등록된 회사가 없다면 직접 등록해 주세요.'
                          : '공장이 아닌 본사(사무소) 소속인 경우 직접 등록해 주세요.'}
                      </Caption>
                      <InsertCompany onClick={() => insertUserCompany()}>
                        {width > 360 ? '직접 등록하기' : '직접 등록'}
                      </InsertCompany>
                    </CaptionWrapper>
                  )}
                </LineWrapper>

                <LineWrapper style={width > 360 ? { marginTop: '31px' } : {marginTop:'0px'}}>
                  <RepeatTitle>직위/직급 (선택)</RepeatTitle>
                  <TextWrapper>
                    <Input
                      style={{ padding: '11px 20px', height: '42px' }}
                      containerStyle={{
                        width: '380px',
                        height: '42px',
                        margin: 0,
                      }}
                      onChange={(e) => {
                        isValidHandler(e.target.value, 'rank');
                      }}
                      value={position || ''}
                      placeholder={'직위/직급을 입력해 주세요'}
                    />
                  </TextWrapper>
                </LineWrapper>

                <LineWrapper>
                  <RepeatTitle>부서 (선택)</RepeatTitle>
                  <TextWrapper>
                    <Input
                      style={{ padding: '11px 20px', height: '42px' }}
                      containerStyle={{
                        width: '380px',
                        height: '42px',
                        margin: 0,
                      }}
                      onChange={(e) => {
                        isValidHandler(e.target.value, 'department');
                      }}
                      value={department || ''}
                      placeholder={'부서를 입력해 주세요'}
                    />
                  </TextWrapper>
                </LineWrapper>

                <LineWrapper style={{ marginBottom: 0 }}>
                  <RepeatTitle>사내 전화번호 (선택)</RepeatTitle>
                  <TextWrapper>
                    <Input
                      style={{ padding: '11px 20px', height: '42px' }}
                      containerStyle={{ height: '42px', margin: 0 }}
                      onChange={(e) => {
                        isValidHandler(e.target.value, 'inPhone');
                      }}
                      value={tel || ''}
                      placeholder={
                        '사내 전화번호를 입력해 주세요 (숫자만 입력)'
                      }
                    />
                  </TextWrapper>
                </LineWrapper>
              </>
            )}
          </MainContentBox>
            <ButtonWrapper>
              <BackButtonL
                  type={ButtonType.INABLE}
                  onClick={()=> backStepHandler()}
                  style={
                    width > 360? {display:'none'} : {display:'inline-block'}
                  }
                >
                  이전
              </BackButtonL>
              {isValid ? (
                <RegistButton
                  type={ButtonType.ABLE}
                  onClick={() => {
                    requestSignUpHandler();
                  }}
                >
                  회원가입
                </RegistButton>
              ) : (
                <RegistButton type={ButtonType.INABLE}>회원가입</RegistButton>
              )}
            </ButtonWrapper>
        </TermsWrapper>
      </Container>
    </AuthLayout>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mobile({ maxWidth: '360px', marginTop:'0px'})}
`;

const MainTitleMobile = styled.div`
  display: none;
  ${mobile({ display:'block',
    height: '29px',
    float: 'left',
    fontSize: '20px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: '-0.44px',
    color: '#000',
    margin: '12px 70px 46px 20px'
  })}
`;
const MainTitlePc = styled.div`
  height: 32px;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.44px;
  text-align: center;
  color: #000;

  ${mobile({ display:'none'})}
`;

const TermsWrapper = styled.div<{ type: MainHeightType }>`
  width: 440px;
  margin-top: 30px;
  border-radius: 20px;
  background-color: #fff;
  margin-bottom: 80px;

  ${({ type }) => css`
    height: ${heightPixel[type]};
    padding: ${paddingPixel[type]};
  `}

  ${mobile({ maxWidth: '360px' , height: '100%' , marginTop: '0', marginBottom:'0' , padding : '0px'})}
`;

const ProgressBar = styled.span`
  height: 24px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  ${mobile({ float : 'left' , margin: '22px 200px 0px 20px'})}
`;

const ProgressCircle = styled.div`
  width: 24px;
  height: 24px;
  padding: 5px 0;
  background-color: #000;
  border-radius: 50%;

  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: center;
  color: #fff;

  ${mobile({ width: '18px', height: '18px' , padding: '4px 6px 1px 6px' , fontSize: '10px'})}
`;

const ProgressDashed = styled.img`
  width: 14px;
  height: 1px;
  margin: 0 6px;
`;

const ProgressCircleOff = styled.div`
  width: 24px;
  height: 24px;
  padding: 4px 0;
  background-color: #fff;
  border-radius: 50%;

  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #999999;
  border: 1px solid #999;

  ${mobile({ width: '18px', height: '18px' , fontSize: '10px', padding: '3px 5px 3px 5px'})}
`;

const MainContentBox = styled.div`
  width: 380px;
  margin-bottom: 50px;
  border-radius: 6px;
  background-color: #fff;

  ${mobile({ maxWidth: '320px' , margin: '22px 20px 76px 20px'})}
`;

const RepeatTitle = styled.span`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: center;
  color: #444;

  ${mobile({ display :'block' , float:'left' , marginBottom: '10px'})}
`;

const LineWrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.div`
  ${mobile({ width:'100%' , 
    height: '66px' , 
    display:'flex' , 
    borderTop : '1px solid #e3e3e3'})}
`;

const BackButtonL = styled.div<{ type: ButtonType}>`
  width:150px;
  height: 46px;
  margin: 10px 20px 10px 20px;
  border-radius: 6px;
  color: #222222;
  padding-top:14px;
  background-color: #f2f2f2;
  border-color: #f2f2f2;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: center;
`;

const RegistButton = styled.div<{ type: ButtonType }>`
  width: 380px;
  height: 50px;
  padding: 15px 0;
  border-radius: 6px;
  cursor: pointer;

  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: center;
  ${({ type }) => css`
    background-color: ${backgroundColors[type]};
    color: ${textColors[type]};
    border: 1px solid ${borderColors[type]};
    cursor: ${cursor[type]};
  `}

  ${mobile({ width:'150px', 
    height:'46px' ,
    margin: '10px 0px 10px 0px'})}
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 8px;
`;

const SendButton = styled.div`
  width: 120px;
  height: 39.5px;
  margin-left: 10px;
  padding: 11px 0;
  border-radius: 6px;
  background-color: #f2f2f2;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: center;
  line-height: 1.5;
  cursor: pointer;
  background-color: black;
  color: #fff;
`;

const CaptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

const Caption = styled.div`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
`;

const InsertCompany = styled.div`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: right;
  color: #222;
  text-decoration: underline;
  cursor: pointer;
`;

const PostContainer = styled.div``;
