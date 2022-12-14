import React, { useEffect, useState } from 'react';

import api from '@api';
import styled from '@emotion/styled';
import AuthLayout from '@layout/AuthLayout';
import Input from '@components/Input';
import { useNavigate, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import getAssetURL from '@utils/getAssetURL';
import Modal from '@components/RegisterTextModal';
import useWindowSize from '@hooks/useWindowSize';
import { mobile } from '@utils/responsive';

enum ButtonType {
  'ABLE',
  'INABLE',
}

enum AbleType {
  'ABLE',
  'INABLE',
}

const backgroundColors = {
  [ButtonType.ABLE]: '#258fff',
  [ButtonType.INABLE]: '#f2f2f2',
};

const ableBackgroundColors = {
  [AbleType.ABLE]: '#000000',
  [AbleType.INABLE]: '#f2f2f2',
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

  const nxtStepHandler = () => {
    navigate('/auth/register/step-3', {
      state: {
        ...(location.state as any),
        signname: email,
        password: password,
        name: name,
        phone: phone,
      },
    });
  };

  const backStepHandler = () => {
    navigate('/auth/register/step-1');
  };

  const companyName: string = ''; //추후 초대받은 회사가 있다면 분기에 따라 val 변경

  const validItem = {
    // 정규식 모음
    chkEmail:
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    chkPhone: /^[0-9\b -]{0,13}$/,
    chkPw: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
  };

  const [email, setEmail] = useState(''); // 이메일
  const [emailCode, setEmailCode] = useState(''); // 이메일 인증번호
  const [emailValid, setEmailValid] = useState(false); // 이메일 유효성 확인
  const [emailCodeVisible, setEmailCodeVisible] = useState(false); // 이메일 인증 view controller
  const [isEmailDone, setIsEmailDone] = useState(false); // 이메일 및 인증번호 유효성 확인

  const [password, setPassword] = useState(''); // 비밀번호
  const [password2, setPassword2] = useState(''); // 비밀번호 재입력
  const [isPasswordDone, setIsPassWordDone] = useState(false); // 비밀번호 유효성 확인
  const [isPasswordDone2, setIsPassWordDone2] = useState(false); // 비밀번호 재입력 유효성 확인

  const [name, setName] = useState(''); // 이름

  const [phone, setPhone] = useState(''); // 휴대폰
  const [phoneCode, setPhoneCode] = useState(''); // 휴대폰 인증번호
  const [phoneValid, setPhoneValid] = useState(false); // 휴대폰 유효성 확인
  const [phoneCodeRecent, setPhoneCodeRecent] = useState(false); // 휴대폰 인증번호 재전송
  const [phoneCodeVisible, setPhoneCodeVisible] = useState(false); // 휴대폰 인증 view controller
  const [isPhoneDone, setIsPhoneDone] = useState(false); // 휴대폰 및 인증번호 유효성 확인

  const [errorEmailMsg, setErrorEmailMsg] = useState('1'); // 이메일 관련 에러처리 1: 미입력 상태, 2: 입력값 유효하지 않은 상태, 3: 유효상태
  const [errorPhoneMsg, setErrorPhoneMsg] = useState('1'); // 휴대폰 관련 에러처리 1: 미입력 상태, 2: 입력값 유효하지 않은 상태, 3: 유효상태

  const [isValid, setIsValid] = useState(false); // 전체 유효성 확인

  const [emailDupModal, setEmailDupModal] = useState(false); // 이메일 중복검사

  const isValidHandler = (e: any, type: string) => {
    switch (type) {
      case 'email':
        setEmail(e);
        if (email.length > 0 && validItem.chkEmail.test(email)) {
          setEmailValid(true);
        }
        break;

      case 'emailCode':
        setEmailCode(e);
        break;

      case 'name':
        setName(e);
        break;

      case 'password':
        setPassword(e);
        if (validItem.chkPw.test(e)) {
          setIsPassWordDone(true);
        }
        break;

      case 'password2':
        setPassword2(e);
        if (isPasswordDone && password === e) {
          setIsPassWordDone2(true);
        }
        break;

      case 'phone':
        setPhone(e);
        if (validItem.chkPhone.test(e)) {
          if (e.length < 11) {
            setPhoneValid(false);
          } else {
            setPhone(
              e.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
            );
            setPhoneValid(true);
          }
        }
        break;
      case 'phoneCode':
        setPhoneCode(e);
        break;
    }
  };

  const requestPhoneValidateHandler = async () => {
    const tempPh = phone.replace(/-/g, '');
    setIsPhoneDone(true);
    setPhoneCodeVisible(true);
    await api
      .post('/verifications/phone', {
        phone: tempPh,
      })
      .then((res) => {
        if (res.data.result) {
          setPhoneCodeRecent(true);
          setPhoneCodeVisible(true);
        }
      });
  };

  const requestPhoneCodeValidateHandler = async () => {
    const tempPh = phone.replace(/-/g, '');
    await api
      .post('/verifications/phone/verify', {
        phone: tempPh,
        key: phoneCode,
      })
      .then((res) => {
        if (res.data.result) {
          setIsPhoneDone(true);
          setErrorPhoneMsg('3');
        }
      })
      .catch(() => {
        setErrorPhoneMsg('2');
      });
  };

  const requestEmailValidateHandler = async () => {
    const chkDupEmail = await dupEmailCheck();
    if (chkDupEmail) {
      setEmailDupModal(true);
    } else {
      setEmailCodeVisible(true);
      await api
        .post('/verifications/email', {
          email: email,
        })
        .then((res) => {
          if (res.data.result) {
            setEmailCodeVisible(true);
          }
        });
    }
  };

  const requestEmailCodeValidateHandler = async () => {
    await api
      .post('/verifications/email/verify', {
        email: email,
        key: emailCode,
      })
      .then((res) => {
        if (res.data.result) {
          setIsEmailDone(true);
          setErrorEmailMsg('3');
        }
      })
      .catch(() => {
        setErrorEmailMsg('2');
      });
  };

  useEffect(() => {
    if (email.length <= 0 || !email.includes('@') || !email.includes('.')) {
      setIsEmailDone(false);
      setEmailValid(false);
    }
  }, [email, isEmailDone]);

  useEffect(() => {
    setPhone(
      phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
    );
  }, [phone, phoneCode]);

  useEffect(() => {
    if (password.length >= 1 && password === password2) {
      setIsPassWordDone2(true);
    } else {
      setIsPassWordDone2(false);
    }
  }, [password, password2]);

  useEffect(() => {
    isPhoneDone && isEmailDone && isPasswordDone2 && name && setIsValid(true);
  }, [isPhoneDone, isEmailDone, isPasswordDone, isPasswordDone2, name]);

  const successCloseModal = () => {
    setEmailDupModal(false);
  };

  const dupEmailCheck = async () => {
    let data = false;
    await api
      .get('/users/check-duplicated-email', {
        params: { email: email },
      })
      .then((res) => {
        data = res?.data.result;
      });
    return data;
  };

  return (
    <AuthLayout>
      <Container>
        {emailDupModal ? (
          <Modal
            open={emailDupModal}
            onClose={() => {
              successCloseModal();
            }}
            submitText={'확인'}
            content={'이미 가입된 이메일입니다.'}
            wrapperStyle={{ height: '240px' }}
          />
        ) : null}
        <MainTitlePc>
          {companyName ? companyName : 'CONAZ에 오신 것을 환영합니다'}
        </MainTitlePc>
        <TermsWrapper>
          <ProgressBar>
            <ProgressCircle>1</ProgressCircle>
            <ProgressDashed src={getAssetURL('../assets/ic-dashed.svg')} />
            <ProgressCircle>2</ProgressCircle>
            <ProgressDashed src={getAssetURL('../assets/ic-dashed.svg')} />
            <ProgressCircleOff>3</ProgressCircleOff>
          </ProgressBar>
          <MainTitleMobile>
            {companyName ? companyName : 'CONAZ에 오신 것을 환영합니다'}
          </MainTitleMobile>
          <MainContentBox>
            <LineWrapper
              style={
                emailCodeVisible
                  ? {}
                  : { marginBottom: '13px' } && width > 360
                  ? { marginBottom: 13 }
                  : { marginBottom: 4 }
              }
            >
              <RepeatTitle>이메일</RepeatTitle>
              <TextWrapper>
                <Input
                  containerStyle={{
                    width: '250px',
                    margin: 0,
                  }}
                  style={{ padding: '11px 20px' }}
                  type="text"
                  onChange={(e) => {
                    isValidHandler(e.target.value, 'email');
                  }}
                  value={email}
                  placeholder={'이메일을 입력해 주세요'}
                  errorMessage={
                    !emailValid && email.length > 0
                      ? '이메일 형식이 올바르지 않습니다'
                      : ''
                  }
                  errorMessageStyle={
                    !emailValid && email.length > 0 ? { marginBottom: 16 } : {}
                  }
                />
                <SendButton
                  type={
                    isEmailDone || !emailValid ? AbleType.INABLE : AbleType.ABLE
                  }
                  onClick={() => {
                    emailValid ? requestEmailValidateHandler() : null;
                  }}
                  style={
                    !emailValid && email.length > 0 ? { marginBottom: 33 } : {}
                  }
                >
                  {isEmailDone ? '인증완료' : '이메일 인증'}
                </SendButton>
              </TextWrapper>
            </LineWrapper>

            {emailCodeVisible ? (
              <LineWrapper>
                <TextWrapper
                  style={
                    width > 360
                      ? { margin: '0 0 14px' }
                      : { marginTop: '-10px', marginBottom: '4px' }
                  }
                >
                  <Input
                    containerStyle={{
                      width: '250px',
                      margin: 0,
                    }}
                    style={{ padding: '11px 20px' }}
                    type="text"
                    onChange={(e) => {
                      isValidHandler(e.target.value, 'emailCode');
                    }}
                    value={emailCode}
                    errorMessageStyle={
                      errorEmailMsg == '2'
                        ? { color: '#ef0000' }
                        : errorEmailMsg == '3'
                        ? { color: '#00b448' }
                        : {}
                    }
                    placeholder={'인증번호 6자리 입력'}
                    errorMessage={
                      errorEmailMsg === '2'
                        ? '인증번호가 일치하지 않습니다.'
                        : errorEmailMsg === '3'
                        ? '인증이 완료되었습니다.'
                        : ''
                    }
                  />
                  <SendButton
                    type={
                      emailCode.length >= 1 && !isEmailDone
                        ? AbleType.ABLE
                        : AbleType.INABLE
                    }
                    onClick={() =>
                      !isEmailDone ? requestEmailCodeValidateHandler() : null
                    }
                  >
                    확인
                  </SendButton>
                </TextWrapper>
              </LineWrapper>
            ) : null}

            <LineWrapper>
              <RepeatTitle>이름</RepeatTitle>
              <TextWrapper>
                <Input
                  containerStyle={{
                    width: '380px',
                    margin: 0,
                    marginBottom: 4,
                  }}
                  style={{ padding: '11px 20px' }}
                  type="text"
                  onChange={(e) => {
                    isValidHandler(e.target.value, 'name');
                  }}
                  value={name}
                  placeholder={'이름을 입력해 주세요'}
                />
              </TextWrapper>
            </LineWrapper>

            <LineWrapper style={{ marginBottom: 13 }}>
              <RepeatTitle>비밀번호</RepeatTitle>
              <TextWrapper style={{ flexDirection: 'column' }}>
                <Input
                  containerStyle={
                    width > 360
                      ? {
                          width: '380px',
                          margin: 0,
                          height: '42px',
                        }
                      : { width: '320px', marginBottom: 2 }
                  }
                  errorMessageStyle={{ display: 'none' }}
                  style={{ padding: '11px 20px' }}
                  type="password"
                  onChange={(e) => {
                    isValidHandler(e.target.value, 'password');
                  }}
                  value={password}
                  placeholder={
                    '영문과 숫자, 특수문자 포함 8자 이상 입력해 주세요'
                  }
                />
                <Input
                  containerStyle={
                    width > 360
                      ? {
                          width: '380px',
                          marginTop: '13px',
                        }
                      : { width: '320px', marginBottom: '4px' }
                  }
                  style={{ padding: '11px 20px' }}
                  type="password"
                  onChange={(e) => {
                    isValidHandler(e.target.value, 'password2');
                  }}
                  value={password2}
                  placeholder={'비밀번호를 한번 더 입력해 주세요'}
                  errorMessage={
                    !isPasswordDone2 && password2.length > 0
                      ? '비밀번호가 일치하지 않습니다'
                      : ''
                  }
                  errorMessageStyle={
                    !isPasswordDone2 && password2.length > 0
                      ? { height: 17 }
                      : { display: 'none' }
                  }
                />
              </TextWrapper>
            </LineWrapper>

            <LineWrapper
              style={width > 360 ? { marginBottom: 0 } : { height: 72.5 }}
            >
              <RepeatTitle>휴대폰 번호</RepeatTitle>
              <TextWrapper>
                <Input
                  containerStyle={{
                    width: '250px',
                    margin: 0,
                  }}
                  style={{ padding: '11px 20px' }}
                  type="text"
                  onChange={(e) => {
                    isValidHandler(e.target.value, 'phone');
                  }}
                  value={phone}
                  placeholder={
                    width > 360
                      ? " '-' 입력 제외(번호만 입력해 주세요)"
                      : " '-' 입력 제외(숫자만 입력)"
                  }
                />
                <SendButton
                  type={phoneValid ? AbleType.ABLE : AbleType.INABLE}
                  onClick={() =>
                    phoneValid ? requestPhoneValidateHandler() : null
                  }
                >
                  {phoneCodeRecent ? '재인증받기' : '인증번호 전송'}
                </SendButton>
              </TextWrapper>
            </LineWrapper>

            {phoneCodeVisible ? (
              <LineWrapper>
                <TextWrapper style={{ margin: 0 }}>
                  <Input
                    containerStyle={{
                      width: '250px',
                      margin: 0,
                    }}
                    style={
                      width > 360
                        ? { padding: '11px 20px' }
                        : { padding: '11px 20px' }
                    }
                    type="text"
                    onChange={(e) => {
                      isValidHandler(e.target.value, 'phoneCode');
                    }}
                    value={phoneCode}
                    placeholder={'인증번호 6자리 입력'}
                    errorMessageStyle={
                      errorPhoneMsg === '2'
                        ? { color: '#ef0000' }
                        : errorPhoneMsg === '3'
                        ? { color: '#00b448' }
                        : {}
                    }
                    errorMessage={
                      errorPhoneMsg === '2'
                        ? '인증번호가 일치하지 않습니다.'
                        : errorPhoneMsg === '3'
                        ? '인증이 완료되었습니다.'
                        : ''
                    }
                  />
                  <SendButton
                    type={
                      phoneCode?.length >= 1 && !isPhoneDone
                        ? AbleType.ABLE
                        : AbleType.INABLE
                    }
                    onClick={() =>
                      !isPhoneDone ? requestPhoneCodeValidateHandler() : null
                    }
                  >
                    확인
                  </SendButton>
                </TextWrapper>
              </LineWrapper>
            ) : null}
          </MainContentBox>
          <ButtonWrapper>
            <BackButtonL
              type={ButtonType.INABLE}
              onClick={() => backStepHandler()}
              style={
                width > 360 ? { display: 'none' } : { display: 'inline-block' }
              }
            >
              이전
            </BackButtonL>
            <GoButtonR
              // type={isValid ? ButtonType.ABLE : ButtonType.INABLE}
              type={
                name && email && password && password2 && phone
                  ? ButtonType.ABLE
                  : ButtonType.INABLE
              }
              // onClick={() => (isValid ? nxtStepHandler() : null)}
              onClick={() =>
                name && email && password && password2 && phone
                  ? nxtStepHandler()
                  : null
              }
            >
              다음
            </GoButtonR>
          </ButtonWrapper>
        </TermsWrapper>
      </Container>
    </AuthLayout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 150px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mobile({
    maxWidth: '360px',
    height: '640px',
    marginBottom: '0',
    marginTop: '0px',
  })}
`;

const MainTitleMobile = styled.div`
  display: none;
  ${mobile({
    display: 'block',
    width: '260px',
    height: '29px',
    float: 'left',
    fontSize: '20px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: '-0.44px',
    color: '#000',
    margin: '12px 70px 46px 20px',
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

  ${mobile({ display: 'none' })}
`;

const TermsWrapper = styled.div`
  width: 440px;
  margin-top: 30px;
  padding: 30px 30px 50px 30px;
  border-radius: 20px;
  background-color: #fff;
  ${mobile({
    maxWidth: '360px',
    height: '100%',
    marginTop: '0px',
    padding: '1px',
  })}
`;

const ProgressBar = styled.span`
  height: 24px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  ${mobile({ float: 'left', margin: '22px 200px 0px 20px' })}
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

  ${mobile({
    width: '18px',
    height: '18px',
    padding: '4px 6px 1px 6px',
    fontSize: '10px',
  })}
`;

const ProgressDashed = styled.img`
  width: 14px;
  height: 1px;
  margin: 0 6px;
`;

const MainContentBox = styled.div`
  width: 380px;
  margin-bottom: 50px;
  border-radius: 6px;
  background-color: #fff;

  ${mobile({ maxWidth: '320px', margin: '22px 20px 52px 20px' })}
`;

const RepeatTitle = styled.span`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: center;
  color: #444;
  ${mobile({ display: 'block', float: 'left', marginBottom: '10px' })}
`;

const LineWrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const Button = styled.div<{ type: ButtonType }>`
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
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 4px;
`;

const SendButton = styled.div<{ type: AbleType }>`
  width: 120px;
  height: 42px;
  margin-top: -5px;
  margin-left: 10px;
  margin-bottom: 16px;
  padding: 11px 0;
  border-radius: 6px;
  background-color: #f2f2f2;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: center;
  line-height: 1.5;

  ${({ type }) => css`
    background-color: ${ableBackgroundColors[type]};
    color: ${textColors[type]};
    cursor: ${cursor[type]};
  `}
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

  ${mobile({
    width: '18px',
    height: '18px',
    fontSize: '10px',
    padding: '3px 5px 3px 5px',
  })}
`;

const ButtonWrapper = styled.div`
  ${mobile({
    width: '100%',
    height: '66px',
    display: 'flex',
    borderTop: '1px solid #e3e3e3',
  })}
`;

const BackButtonL = styled.div<{ type: ButtonType }>`
  width: 150px;
  height: 46px;
  margin: 10px 20px 10px 20px;
  border-radius: 6px;
  color: #222222;
  padding-top: 14px;
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

  ${mobile({ width: '150px', height: '46px', margin: '10px 0px 10px 0px' })}
`;
