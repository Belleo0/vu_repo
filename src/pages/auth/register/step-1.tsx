import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import AuthLayout from '@layout/AuthLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import getAssetURL from '@utils/getAssetURL';
import { css } from '@emotion/react';

import useWindowSize from '@hooks/useWindowSize';
import { mobile } from '@utils/responsive';



enum ButtonType {
  'ABLE',
  'INABLE',
}
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
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 가로 화면 사이즈
  const { width } = useWindowSize();

  const companyName: string = '동양건설';

  const nxtStepHandler = () => {
    if (isValid) {
      navigate('/auth/register/step-2', {
        state: {
          ...(location.state as any),
        },
      });
    }
  };

  const backStepHandler = () => {
    navigate('/auth/register/step-0');
  }

  const [isAllChk, setIsAllChk] = useState<boolean>(false); // 전체동의
  const [chkList, setChkList] = useState<any>([]); // usr가 선택한 리스트를 넣어둔다
  const [isValid, setIsValid] = useState<boolean>(false); //require값이 모두 chkList에 들어가 있는지 확인

  const allChkHandler = (chk: boolean) => {
    setIsAllChk(!isAllChk);

    if (chk) {
      setChkList([...chkList, 'require1', 'require2', 'other1', 'other2']);
    }

    if (
      chkList.includes('require1') ||
      chkList.includes('require2') ||
      chkList.includes('other1') ||
      chkList.includes('other2')
    ) {
      setChkList([]);
      setIsAllChk(false);
    }
  };

  const chkHandler = (type: string, chk: boolean) => {
    if (isAllChk && !chk) {
      setIsAllChk(false);
    }
    if (
      !isAllChk &&
      chkList.includes('require1') &&
      chkList.includes('require2') &&
      chkList.includes('other1') &&
      chkList.includes('other2')
    ) {
      setIsAllChk(true);
    }
    if (chk) {
      setChkList([...chkList, type]);
    } else if (!chk && chkList.includes(type)) {
      setChkList(chkList.filter((e: string) => e !== type));
    }
  };

  useEffect(() => {
    if (chkList.includes('require1') && chkList.includes('require2')) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    if (
      !isAllChk &&
      chkList.includes('require1') &&
      chkList.includes('require2') &&
      chkList.includes('other1') &&
      chkList.includes('other2')
    ) {
      setIsAllChk(true);
    }
  }, [chkList]);

  return (
    <AuthLayout>
      <Container>
        <MainTitlePc>
          {!companyName ? companyName : 'CONAZ에 오신 것을 환영합니다'}
        </MainTitlePc>
        <TermsWrapper>
          <ProgressBar>
            <ProgressCircle>1</ProgressCircle>
            <ProgressDashed src={getAssetURL('../assets/ic-dashed.svg')} />
            <ProgressCircleOff>2</ProgressCircleOff>
            <ProgressDashed src={getAssetURL('../assets/ic-dashed.svg')} />
            <ProgressCircleOff>3</ProgressCircleOff>
          </ProgressBar>
          <MainTitleMobile>
          {!companyName ? companyName : 'CONAZ에 오신 것을 환영합니다'}
          </MainTitleMobile>
          <MiddleTitle>약관동의</MiddleTitle>
          <MainContentBox>
            <LineWrapper>
              <TextWrapper
                onClick={() => {
                  allChkHandler(!isAllChk);
                }}
              >
                <DistanceIcon
                  src={
                    isAllChk
                      ? getAssetURL('../assets/check_01_ic_on.svg')
                      : getAssetURL('../assets/check_01_ic_off.svg')
                  }
                />
                <RepeatTitle>약관 전체동의</RepeatTitle>
              </TextWrapper>
            </LineWrapper>

            <LineGuard />

            <LineWrapper>
              <TextWrapper
                onClick={() =>
                  chkHandler(
                    'require1',
                    chkList.includes('require1') ? false : true,
                  )
                }
              >
                {chkList.includes('require1') ? (
                  <DistanceIcon
                    src={getAssetURL('../assets/check_01_ic_on.svg')}
                  />
                ) : (
                  <DistanceIcon
                    src={getAssetURL('../assets/check_01_ic_off.svg')}
                  />
                )}
                <RepeatTitle>{width > 360 ? '서비스 이용약관에 동의합니다.' : '서비스 이용약관 동의'}</RepeatTitle>
                <RequireTitle>(필수)</RequireTitle>
              </TextWrapper>
              <MoreTitle>내용보기</MoreTitle>
            </LineWrapper>

            <LineWrapper>
              <TextWrapper
                onClick={() =>
                  chkHandler(
                    'require2',
                    chkList.includes('require2') ? false : true,
                  )
                }
              >
                {chkList.includes('require2') ? (
                  <DistanceIcon
                    src={getAssetURL('../assets/check_01_ic_on.svg')}
                  />
                ) : (
                  <DistanceIcon
                    src={getAssetURL('../assets/check_01_ic_off.svg')}
                  />
                )}
                <RepeatTitle>{width > 360 ? '개인정보 수집 및 이용에 동의합니다.' : '개인정보 수집 및 이용 동의'}</RepeatTitle>
                <RequireTitle style={{ marginRight: '27px' }}>
                  (필수)
                </RequireTitle>
              </TextWrapper>
              <MoreTitle>내용보기</MoreTitle>
            </LineWrapper>

            <LineWrapper>
              <TextWrapper
                onClick={() =>
                  chkHandler(
                    'other1',
                    chkList.includes('other1') ? false : true,
                  )
                }
              >
                {chkList.includes('other1') ? (
                  <DistanceIcon
                    src={getAssetURL('../assets/check_01_ic_on.svg')}
                  />
                ) : (
                  <DistanceIcon
                    src={getAssetURL('../assets/check_01_ic_off.svg')}
                  />
                )}
                <RepeatTitle>{width > 360 ? '이벤트/마케팅 수신에 동의합니다.' : '이벤트/마케팅 수신 동의'}</RepeatTitle>
                <NoRequireTitle>(선택)</NoRequireTitle>
              </TextWrapper>
            </LineWrapper>

            <LineWrapper>
              <TextWrapper
                onClick={() =>
                  chkHandler(
                    'other2',
                    chkList.includes('other2') ? false : true,
                  )
                }
              >
                {chkList.includes('other2') ? (
                  <DistanceIcon
                    src={getAssetURL('../assets/check_01_ic_on.svg')}
                  />
                ) : (
                  <DistanceIcon
                    src={getAssetURL('../assets/check_01_ic_off.svg')}
                  />
                )}
                <RepeatTitle>{width > 360 ? '내용이 들어갑니다.' : '내용'}</RepeatTitle>
                <NoRequireTitle>(선택)</NoRequireTitle>
              </TextWrapper>
            </LineWrapper>
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
            <GoButtonR
              type={isValid ? ButtonType.ABLE : ButtonType.INABLE}
              onClick={() => nxtStepHandler()}
            >
              다음
            </GoButtonR>
          </ButtonWrapper>
        </TermsWrapper>
      </Container>
    </AuthLayout>
  );
};

const Test = styled.input`
  label {
    cursor: pointer;
    padding-left: 23px;
    background-repeat: no-repeat;
    background-image: url('../assets/check_01_ic_off.svg');
  }
`;

const Container = styled.div`
  width: 100%;

  min-height: calc(100vh - 80px);

  display: flex;
  flex-direction: column;
  justify-content: center;
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
    margin: '12px 80px 46px 20px'
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

const TermsWrapper = styled.div`
  width: 440px;
  height: 482px;
  margin-top: 30px;
  padding: 30px 30px 50px 30px;
  border-radius: 20px;
  background-color: #fff;

  ${mobile({ maxWidth: '360px' , height:'100%', marginTop:'0' , padding : '0px'})}
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
  text-align: center;
  color: #fff;

  ${mobile({ width: '18px', height: '18px' , padding: '4px 6px 1px 6px' , fontSize: '10px'})}
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

const ProgressDashed = styled.img`
  width: 14px;
  height: 1px;
  margin: 0 6px;
`;

const MiddleTitle = styled.div`
  margin: 40px 0 8px 0;
  display: 'block';
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #444;

  ${mobile({ fontSize: '14px', marginBottom: '10px', marginLeft:'20px'})}
`;

const MainContentBox = styled.div`
  width: 380px;
  height: 211px;
  margin-bottom: 50px;
  padding: 20px;
  border-radius: 6px;
  border: solid 1px #c7c7c7;
  background-color: #fff;

  ${mobile({ maxWidth: '320px', margin: '0px 20px 223px 20px'})}
`;

const DistanceIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  cursor: pointer;
`;

const RepeatTitle = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;

  ${mobile({ display :'block' , float:'left' })}
`;

const LineWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 14px;
`;

const LineGuard = styled.div`
  width: 340px;
  height: 1px;
  border-top: 1px solid #f2f2f2;
  margin: 14px 0;

  ${mobile({ width: '280px'})}
`;

const RequireTitle = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #ef0000;
  margin-left: 4px;
`;
const NoRequireTitle = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
  margin-left: 4px;
`;

const MoreTitle = styled.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  text-decoration: underline;
  cursor: pointer;
  word-break: keep-all;
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
  color: #999999;
  padding-top:14px;
  background-color: #f2f2f2;
  border-color: #f2f2f2;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: center;
`;

const GoButtonR = styled.div<{ type: ButtonType }>`
  width: 380px;
  height: 50px;
  padding: 15px 0;
  border-radius: 6px;

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
  align-items: center;
  cursor: pointer;
`;
