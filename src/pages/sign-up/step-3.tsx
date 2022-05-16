import React, { useEffect, useState } from 'react';

import api from '@api';
import styled from '@emotion/styled';
import AuthLayout from '@layout/AuthLayout';
import Input from '@components/Input';
import SearchInput from '@components/SearchInput';
import { useLocation, useNavigate } from 'react-router-dom';
import getAssetURL from '@utils/getAssetURL';
import { css } from '@emotion/react';

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

  const userInviteType: boolean = false;
  const companyName: string = '동양건설';
  const companyType: string = 'cns';

  const requestSignUpHandler = async () => {
    const data = await api.post('/auth/register', {
      signname: location.state?.email,
      password: location.state?.password,
      name: location.state?.name,
      phone: location.state?.phone,
      position: input.rank,
      tel: input.inPhone,
    });
    console.log('requestSignUpHandler => ', data);
  };

  const [input, setInput] = useState<any>({
    company: '',
    rank: '',
    department: '',
    inPhone: '',
    zipCode: '',
    companyAdress: '',
    companyAdress2: '',
  });

  const [isUserInsert, setIsUserInsert] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const isValidHandler = (e: any, type: string) => {
    // console.log('isValidHandler => ', e, ' || ', type);
    switch (type) {
      case 'company':
        setInput({ ...input, company: e });
        if (!isUserInsert) {
          setIsValid(() => true);
        }
        break;
      case 'zipCode':
        setInput({ ...input, zipCode: e });
        break;
      case 'companyAdress':
        setInput({ ...input, companyAdress: e });
        break;
      case 'companyAdress2':
        setInput({ ...input, companyAdress2: e });
        break;
      case 'rank':
        setInput({ ...input, rank: e });
        break;

      case 'department':
        setInput({ ...input, department: e });
        break;

      case 'inPhone':
        setInput({ ...input, inPhone: e });
        break;
    }
  };

  const insertUserCompany = () => {
    setIsUserInsert(true);
    setIsValid(false);
    setInput(['', '', '', '', '']);
  };

  useEffect(() => {
    if (
      isUserInsert &&
      input.zipCode &&
      input.company &&
      input.companyAdress &&
      input.companyAdress2
    ) {
      setIsValid(true);
    }
    console.log(
      isUserInsert,
      input.zipCode,
      input.company,
      input.companyAdress,
      input.companyAdress2,
      isValid,
    );
  });

  return (
    <AuthLayout>
      <Container>
        <MainTitle>
          {!companyName ? companyName : 'CONAZ에 오신 것을 환영합니다'}
        </MainTitle>
        <TermsWrapper
          type={isUserInsert ? MainHeightType.ABLE : MainHeightType.INABLE}
        >
          <ProgressBar>
            <ProgressCircle>1</ProgressCircle>
            <ProgressDashed />
            <ProgressCircle>2</ProgressCircle>
            <ProgressDashed />
            <ProgressCircle>3</ProgressCircle>
          </ProgressBar>
          <MainContentBox>
            {isUserInsert ? (
              <>
                <LineWrapper style={{ margin: 0 }}>
                  <RepeatTitle>
                    {companyType == 'cns' ? '회사명' : '레미콘 공장 상호명'}
                  </RepeatTitle>
                  <Input
                    style={{ padding: '11px 14px', height: '42px' }}
                    onChange={(e) => {
                      isValidHandler(e.target.value, 'company');
                    }}
                    value={input.company}
                    containerStyle={{ marginTop: '8px' }}
                    placeholder={
                      companyType == 'cns'
                        ? '회사명을 입력해 주세요'
                        : '레미콘 공장명을 입력해 주세요'
                    }
                  />
                </LineWrapper>
                <LineWrapper>
                  <RepeatTitle>
                    {companyType == 'cns' ? '회사 주소' : '공장 주소'}
                  </RepeatTitle>
                  <TextWrapper>
                    <Input
                      containerStyle={{
                        width: '250px',
                        height: '42px',
                        margin: 0,
                      }}
                      type="text"
                      onChange={(e) => {
                        isValidHandler(e.target.value, 'zipCode');
                      }}
                      value={input.zipCode}
                      placeholder={'우편번호 검색'}
                    />
                    <SendButton
                      onClick={() => {
                        ('');
                      }}
                    >
                      우편번호 조회
                    </SendButton>
                  </TextWrapper>
                  <Input
                    containerStyle={{
                      height: '42px',
                      marginTop: '12px',
                    }}
                    type="text"
                    onChange={(e) => {
                      isValidHandler(e.target.value, 'companyAdress');
                    }}
                    value={input.companyAdress}
                    placeholder={
                      companyType == 'cns'
                        ? '회사 주소를 입력해 주세요'
                        : '공장 주소를 입력해 주세요'
                    }
                  />
                  <Input
                    containerStyle={{
                      height: '42px',
                      marginTop: '12px',
                    }}
                    type="text"
                    onChange={(e) => {
                      isValidHandler(e.target.value, 'companyAdress2');
                    }}
                    value={input.companyAdress2}
                    placeholder={'상세 주소를 입력해 주세요'}
                  />
                </LineWrapper>

                <LineWrapper>
                  <RepeatTitle>직위/직급 (선택)</RepeatTitle>
                  <TextWrapper>
                    <Input
                      containerStyle={{
                        width: '380px',
                        height: '42px',
                        margin: 0,
                      }}
                      onChange={(e) => {
                        isValidHandler(e.target.value, 'rank');
                      }}
                      value={input.rank}
                      placeholder={'직위/직급을 입력해 주세요'}
                    />
                  </TextWrapper>
                </LineWrapper>

                <LineWrapper>
                  <RepeatTitle>부서 (선택)</RepeatTitle>
                  <TextWrapper>
                    <Input
                      containerStyle={{
                        width: '380px',
                        height: '42px',
                        margin: 0,
                      }}
                      onChange={(e) => {
                        isValidHandler(e.target.value, 'department');
                      }}
                      value={input.department}
                      placeholder={'부서를 입력해 주세요'}
                    />
                  </TextWrapper>
                </LineWrapper>

                <LineWrapper style={{ marginBottom: 0 }}>
                  <RepeatTitle>사내 전화번호 (선택) 번호</RepeatTitle>
                  <TextWrapper>
                    <Input
                      containerStyle={{ height: '42px', margin: 0 }}
                      onChange={(e) => {
                        isValidHandler(e.target.value, 'inPhone');
                      }}
                      value={input.inPhone}
                      placeholder={
                        '사내 전화번호를 입력해 주세요 (숫자만 입력)'
                      }
                    />
                  </TextWrapper>
                </LineWrapper>
              </>
            ) : (
              <>
                <LineWrapper style={{ marginBottom: '31px' }}>
                  <RepeatTitle>
                    {companyType == 'cns' ? '회사 주소' : '레미콘 공장 상호명'}
                  </RepeatTitle>
                  <SearchInput
                    containerStyle={{
                      border: '1px solid #c7c7c7',
                      backgroundColor: '#fff',
                      marginTop: '8px',
                    }}
                    style={{ padding: '11px 14px', height: '42px' }}
                    onChange={(e) => {
                      isValidHandler(e.target.value, 'company');
                    }}
                    value={input.company}
                    placeholder={
                      companyType == 'cns'
                        ? '회사 주소'
                        : '레미콘 공장을 검색해 주세요'
                    }
                  />
                  {userInviteType ? (
                    <></>
                  ) : (
                    <CaptionWrapper>
                      <Caption>
                        {companyType == 'cns'
                          ? '등록된 회사가 없다면 직접 등록해 주세요.'
                          : '공장이 아닌 본사(사무소) 소속인 경우 직접 등록해 주세요.'}
                      </Caption>
                      <InsertCompany onClick={() => insertUserCompany()}>
                        직접 등록하기
                      </InsertCompany>
                    </CaptionWrapper>
                  )}
                </LineWrapper>

                <LineWrapper style={{ marginTop: '31px' }}>
                  <RepeatTitle>직위/직급 (선택)</RepeatTitle>
                  <TextWrapper>
                    <Input
                      containerStyle={{
                        width: '380px',
                        height: '42px',
                        margin: 0,
                      }}
                      onChange={(e) => {
                        isValidHandler(e.target.value, 'rank');
                      }}
                      value={input.rank}
                      placeholder={'직위/직급을 입력해 주세요'}
                    />
                  </TextWrapper>
                </LineWrapper>

                <LineWrapper>
                  <RepeatTitle>부서 (선택)</RepeatTitle>
                  <TextWrapper>
                    <Input
                      containerStyle={{
                        width: '380px',
                        height: '42px',
                        margin: 0,
                      }}
                      onChange={(e) => {
                        isValidHandler(e.target.value, 'department');
                      }}
                      value={input.department}
                      placeholder={'부서를 입력해 주세요'}
                    />
                  </TextWrapper>
                </LineWrapper>

                <LineWrapper style={{ marginBottom: 0 }}>
                  <RepeatTitle>사내 전화번호 (선택) 번호</RepeatTitle>
                  <TextWrapper>
                    <Input
                      containerStyle={{ height: '42px', margin: 0 }}
                      onChange={(e) => {
                        isValidHandler(e.target.value, 'inPhone');
                      }}
                      value={input.inPhone}
                      placeholder={
                        '사내 전화번호를 입력해 주세요 (숫자만 입력)'
                      }
                    />
                  </TextWrapper>
                </LineWrapper>
              </>
            )}
          </MainContentBox>
          <Button
            type={isValid ? ButtonType.ABLE : ButtonType.INABLE}
            onClick={() => requestSignUpHandler()}
          >
            회원가입
          </Button>
        </TermsWrapper>
      </Container>
    </AuthLayout>
  );
};

const Container = styled.div`
  width: 1920px;
  height: 100%;
  padding: 150px 740px 158px 740px;

  user-select: none;
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

const TermsWrapper = styled.div<{ type: MainHeightType }>`
  width: 440px;
  margin-top: 30px;
  padding: 30px 30px 50px;
  border-radius: 20px;
  background-color: #fff;

  ${({ type }) => css`
    height: ${heightPixel[type]};
  `}
}
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
  margin-bottom: 24px;
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
