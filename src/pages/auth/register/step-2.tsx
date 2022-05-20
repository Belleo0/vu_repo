import React, { useEffect, useState } from 'react';

import api from '@api';
import styled from '@emotion/styled';
import AuthLayout from '@layout/AuthLayout';
import Input from '@components/Input';
import { useNavigate, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';

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

  const nxtStepHandler = () => {
    navigate('/auth/register/step-3', {
      state: {
        signname: email,
        password: password,
        name: name,
        phone: phone,
      },
    });
  };

  const companyName: string = '';

  const validItem = {
    chkEmail:
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    chkPhone: /^[0-9\b -]{0,13}$/,
    chkPw: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
  };

  const [email, setEmail] = useState<string>('');
  const [emailCode, setEmailCode] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [emailCodeVisible, setEmailCodeVisible] = useState<boolean>(false);
  const [isEmailDone, setIsEmailDone] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [isPasswordDone, setIsPassWordDone] = useState<boolean>(false);
  const [isPasswordDone2, setIsPassWordDone2] = useState<boolean>(false);

  const [name, setName] = useState<string>('');

  const [phone, setPhone] = useState<string>('');
  const [phoneCode, setPhoneCode] = useState<string>('');
  const [phoneValid, setPhoneValid] = useState<boolean>(false);
  const [phoneCodeRecent, setPhoneCodeRecent] = useState<boolean>(false);
  const [isPhoneDone, setIsPhoneDone] = useState<boolean>(false);
  const [phoneCodeVisible, setPhoneCodeVisible] = useState<boolean>(false);

  const [isValid, setIsValid] = useState<boolean>(false);

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
    await api
      .post('/verifications/phone', {
        phone: tempPh,
      })
      .then((res) => {
        if (res.data.result) {
          setPhoneCodeRecent(true);
          setPhoneCodeVisible(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const requestPhoneCodeValidateHandler = async () => {
    const tempPh = phone.replace(/-/g, '');
    await api
      .post('/verifications/phone', {
        phone: tempPh,
        key: phoneCode,
      })
      .then((res) => {
        if (res.data.result) {
          setIsPhoneDone(() => true);
        }
      })
      .catch((err) => console.log(err));
  };

  const requestEmailValidateHandler = async () => {
    await api
      .post('/verifications/email', {
        email: email,
      })
      .then((res) => {
        if (res.data.result) {
          setEmailCodeVisible(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const requestEmailCodeValidateHandler = async () => {
    await api
      .post('/verifications/email', {
        email: email,
        key: emailCode,
      })
      .then((res) => {
        if (res.data.result) {
          setIsEmailDone(() => true);
        }
      })
      .catch((err) => console.log(err));
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
    isPhoneDone && isEmailDone && isPasswordDone2 && setIsValid(true);
  }, [isPhoneDone, isEmailDone, isPasswordDone, isPasswordDone2]);

  return (
    <AuthLayout>
      <Container>
        <MainTitle>
          {companyName ? companyName : 'CONAZ에 오신 것을 환영합니다'}
        </MainTitle>
        <TermsWrapper>
          <ProgressBar>
            <ProgressCircle>1</ProgressCircle>
            <ProgressDashed />
            <ProgressCircle>2</ProgressCircle>
            <ProgressDashed />
            <ProgressCircleOff>3</ProgressCircleOff>
          </ProgressBar>
          <MainContentBox>
            <LineWrapper
              style={
                emailCodeVisible
                  ? { marginBottom: 0 }
                  : { marginBottom: '34px' }
              }
            >
              <RepeatTitle>이메일</RepeatTitle>
              <TextWrapper>
                <Input
                  containerStyle={{ width: '250px', height: '42px', margin: 0 }}
                  type="text"
                  onChange={(e) => {
                    isValidHandler(e.target.value, 'email');
                  }}
                  value={email}
                  placeholder={'이메일을 입력해 주세요'}
                  errorMessage={
                    !emailValid ? '이메일 형식이 올바르지 않습니다' : ''
                  }
                />
                <SendButton
                  type={
                    isEmailDone || !emailValid ? AbleType.INABLE : AbleType.ABLE
                  }
                  onClick={() => {
                    emailValid ? requestEmailValidateHandler() : null;
                  }}
                >
                  {isEmailDone ? '인증완료' : '이메일 인증'}
                </SendButton>
              </TextWrapper>
            </LineWrapper>

            {emailCodeVisible ? (
              <LineWrapper style={{ marginTop: '13px' }}>
                <TextWrapper style={{ margin: 0 }}>
                  <Input
                    containerStyle={{
                      width: '250px',
                      height: '42px',
                      margin: 0,
                    }}
                    type="text"
                    onChange={(e) => {
                      isValidHandler(e.target.value, 'emailCode');
                    }}
                    value={emailCode}
                    placeholder={'인증번호 6자리 입력'}
                    errorMessage={
                      emailCodeVisible && !isEmailDone
                        ? '인증번호가 일치하지 않습니다.'
                        : '인증이 완료되었습니다.'
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
                  containerStyle={{ width: '380px', height: '42px', margin: 0 }}
                  type="text"
                  onChange={(e) => {
                    isValidHandler(e.target.value, 'name');
                  }}
                  value={name}
                  placeholder={'이름을 입력해 주세요'}
                />
              </TextWrapper>
            </LineWrapper>

            <LineWrapper>
              <RepeatTitle>비밀번호</RepeatTitle>
              <TextWrapper style={{ flexDirection: 'column' }}>
                <Input
                  containerStyle={{ width: '380px', height: '42px', margin: 0 }}
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
                  containerStyle={{
                    width: '380px',
                    height: '42px',
                    marginTop: '8px',
                  }}
                  type="password"
                  onChange={(e) => {
                    isValidHandler(e.target.value, 'password2');
                  }}
                  value={password2}
                  placeholder={'비밀번호를 한번 더 입력해 주세요'}
                  errorMessage={
                    !isPasswordDone2 ? '비밀번호가 일치하지 않습니다' : ''
                  }
                />
              </TextWrapper>
            </LineWrapper>

            <LineWrapper style={{ marginBottom: 0 }}>
              <RepeatTitle>휴대폰 번호</RepeatTitle>
              <TextWrapper>
                <Input
                  containerStyle={{ width: '250px', height: '42px', margin: 0 }}
                  type="text"
                  onChange={(e) => {
                    isValidHandler(e.target.value, 'phone');
                  }}
                  value={phone}
                  placeholder={" '-' 입력 제외(번호만 입력해 주세요)"}
                />
                <SendButton
                  type={phoneValid ? AbleType.ABLE : AbleType.INABLE}
                  onClick={() => requestPhoneValidateHandler()}
                >
                  {phoneCodeRecent ? '재인증받기' : '인증번호 전송'}
                </SendButton>
              </TextWrapper>
            </LineWrapper>

            {phoneCodeVisible ? (
              <LineWrapper style={{ marginTop: '13px' }}>
                <TextWrapper style={{ margin: 0 }}>
                  <Input
                    containerStyle={{
                      width: '250px',
                      height: '42px',
                      margin: 0,
                    }}
                    type="text"
                    onChange={(e) => {
                      isValidHandler(e.target.value, 'phoneCode');
                    }}
                    value={phoneCode}
                    placeholder={'인증번호 6자리 입력'}
                    errorMessage={
                      phoneCodeVisible && !isPhoneDone
                        ? '인증번호가 일치하지 않습니다.'
                        : '인증이 완료되었습니다.'
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
          <Button
            type={isValid ? ButtonType.ABLE : ButtonType.INABLE}
            onClick={() => (isValid ? nxtStepHandler() : null)}
          >
            다음
          </Button>
        </TermsWrapper>
      </Container>
    </AuthLayout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  min-height: calc(100vh - 80px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.div`
  height: 32px;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.44px;
  text-align: center;
  color: #000;
`;

const TermsWrapper = styled.div`
  width: 440px;
  height: 678px;
  margin-top: 30px;
  padding: 30px 30px 50px 30px;
  border-radius: 20px;
  background-color: #fff;
`;

const ProgressBar = styled.span`
  height: 24px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
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
`;

const ProgressCircleOff = styled.div`
  width: 24px;
  height: 24px;
  padding: 4px 0;
  background-color: #fff;
  border-radius: 50%;

  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: center;
  color: #999999;
  border: 1px solid #999;
`;

const ProgressDashed = styled.div`
  border-top: 2px dashed #999999;
  width: 14px;
  hieght: 1px;
  margin: 0 6px;
`;

const MainContentBox = styled.div`
  width: 380px;
  margin-bottom: 50px;
  border-radius: 6px;
  background-color: #fff;
`;

const RepeatTitle = styled.span`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: center;
  color: #444;
`;

const LineWrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 34px;
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
`;

const SendButton = styled.div<{ type: AbleType }>`
  width: 120px;
  height: 42px;
  margin-left: 10px;
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

// const CustomInput = styled.input`
//   display: flex;
//   width: 100%;
//   border-radius: 6px;
//   background-color: white;
//   border: solid 1px #c7c7c7;
//   margin-bottom: 8px;
// `;
