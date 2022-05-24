import React, { useEffect, useRef, useState } from 'react';

import api from '@api';
import styled from '@emotion/styled';
import AuthLayout from '@layout/AuthLayout';
import Input from '@components/Input';
import SearchInput from '@components/SearchInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { isNull } from 'lodash';
import _ from 'lodash';

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

  const userInviteType: boolean = false;
  const companyName: string = '동양건설';
  const companyType: string = 'cns';

  const requestSignUpHandler = async () => {
    const data = await api
      .post('/auth/register', {
        signname: (location.state as any)?.signname,
        password: (location.state as any)?.password,
        name: (location.state as any)?.name,
        phone: (location.state as any)?.phone,
        position: position || '',
        tel: tel || '',
        company_id: 1,
      })
      .then((res) => navigate('/auth/login'))
      .catch((err) => console.log(err));
  };

  const [company, setCompany] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [tel, setTel] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [companyAdress, setCompanyAdress] = useState<string>('');
  const [companyAdress2, setCompanyAdress2] = useState<string>('');

  const [isUserInsert, setIsUserInsert] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const isValidHandler = (e: any, type: string) => {
    // console.log('isValidHandler => ', e, ' || ', type);
    switch (type) {
      case 'company':
        setCompany(e);
        if (!isUserInsert) {
          setIsValid(() => true);
        }
        break;
      case 'zipCode':
        setZipCode(e);
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

  const insertUserCompany = () => {
    setIsUserInsert(true);
    setIsValid(false);
    setCompany('');
    setPosition('');
    setDepartment('');
    setTel('');
    setZipCode('');
    setCompanyAdress('');
    setCompanyAdress2('');
  };

  useEffect(() => {
    if (isUserInsert) {
      if (
        zipCode?.length >= 1 &&
        company?.length >= 1 &&
        companyAdress?.length >= 1 &&
        companyAdress2?.length >= 1
      ) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
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
                    style={{ padding: '11px 20px', height: '42px' }}
                    onChange={(e) => {
                      isValidHandler(e.target.value, 'company');
                    }}
                    value={company}
                    containerStyle={{ marginTop: '8px' }}
                    placeholder={
                      companyType == 'cns'
                        ? '회사명을 검색해 주세요'
                        : '레미콘 공장명을 검색해 주세요'
                    }
                  />
                </LineWrapper>
                <LineWrapper>
                  <RepeatTitle>
                    {companyType == 'cns' ? '회사 주소' : '공장 주소'}
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
                      onChange={(e) => {
                        isValidHandler(e.target.value, 'zipCode');
                      }}
                      value={zipCode || ''}
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
                      companyType == 'cns'
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
                    style={{ padding: '11px 20px', height: '42px' }}
                    onChange={(e) => {
                      isValidHandler(e.target.value, 'company');
                    }}
                    value={company}
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
                  <RepeatTitle>사내 전화 (선택)</RepeatTitle>
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
          <Button
            type={isValid ? ButtonType.ABLE : ButtonType.INABLE}
            onClick={isValid ? () => requestSignUpHandler() : isNull}
          >
            회원가입
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
