import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import FieldCreateLayout from '@layout/FieldCreateLayout';
import Input from '@components/Input';
import { useLocation, useNavigate } from 'react-router-dom';
import getAssetURL from '@utils/getAssetURL';
import { css } from '@emotion/react';

enum ButtonType {
  'ABLE',
  'INABLE',
}

enum OptionType {
  'ABLE',
  'INABLE',
}

const optionBackgroundColors = {
  [OptionType.ABLE]: '#000',
  [OptionType.INABLE]: '#fff',
};

const optionTextColors = {
  [OptionType.ABLE]: '#fff',
  [OptionType.INABLE]: '#000000',
};

const optionBorderColors = {
  [OptionType.ABLE]: 'transparent',
  [OptionType.INABLE]: '#c7c7c7',
};
const borderColors = {
  [ButtonType.ABLE]: '#258fff',
  [ButtonType.INABLE]: '#c7c7c7',
};

const textColors = {
  [ButtonType.ABLE]: '#258fff',
  [ButtonType.INABLE]: '#c7c7c7',
};

export default () => {
  const [step, setStep] = useState<number>(0);
  const location = useLocation();

  const [maturity, setMaturity] = useState<string>();
  const [maturityInput, setMaturityInput] = useState<string>();
  const [paymentDate, setPaymentDate] = useState<string>();
  const [paymentDateInput, setPaymentDateInput] = useState<string>();
  const [paymentType, setPaymentType] = useState<string>('CASH');

  const [isValid, setIsValid] = useState<boolean>(false);

  const navigate = useNavigate();

  const nxtPageHandler = () => {
    navigate('/add-construction-field/step-5', {
      state: {
        ...(location.state as any),
        maturity: maturity,
        maturityInput: maturityInput,
        paymentDate: paymentDate,
        paymentDateInput: paymentDateInput,
        paymentType: paymentType,
      },
    });
  };

  const prvPageHandler = () => {
    navigate('/add-construction-field/step-3');
  };

  const paymentOptionHandler = (idx: number) => {
    console.log(idx);
    if (idx == 1) {
      setIsValid(true);
      setStep(1);
    } else {
      setIsValid(false);
      setStep(2);
    }
  };

  const dateOptionHandler = (v: string) => {
    setMaturity(v);
  };
  const dateInputHandler = (v: string) => {
    setMaturityInput(v);
  };
  const paymentDateOptionHandler = (v: string) => {
    setPaymentDate(v);
  };
  const paymentDateInputHandler = (v: string) => {
    setPaymentDateInput(v);
  };

  return (
    <FieldCreateLayout>
      <Container>
        <TopTitleWrapper>
          <BorderNumberWrapper>
            <BorderNumber>4</BorderNumber>
          </BorderNumberWrapper>
          <TopTitleBox>결제조건</TopTitleBox>
        </TopTitleWrapper>

        <InputItemWrapper>
          <FieldName>결제조건 선택</FieldName>
          <BottomContentWrapper>
            <Button
              type={step == 1 ? ButtonType.ABLE : ButtonType.INABLE}
              onClick={() => paymentOptionHandler(1)}
            >
              추후협의
            </Button>
            <Button
              type={step >= 2 ? ButtonType.ABLE : ButtonType.INABLE}
              onClick={() => paymentOptionHandler(2)}
            >
              결제조건 변경
            </Button>
          </BottomContentWrapper>
        </InputItemWrapper>
        <HideContentWrapper>
          {step == 2 ? (
            <>
              <InputItemWrapper style={{ marginTop: '40px' }}>
                <FieldName>결제수단</FieldName>
                <BottomContentWrapper>
                  <SelectWrapper placeholder="선택해 주세요" />
                </BottomContentWrapper>
              </InputItemWrapper>

              <InputItemWrapper
                style={{ marginTop: '40px', width: '530px', height: '116px' }}
              >
                <FieldName>만기</FieldName>
                <OptionWrapper>
                  <DateSelectBorder
                    type={
                      maturity == '30' ? OptionType.ABLE : OptionType.INABLE
                    }
                    onClick={() => dateOptionHandler('30')}
                  >
                    30일
                  </DateSelectBorder>
                  <DateSelectBorder
                    type={
                      maturity == '60' ? OptionType.ABLE : OptionType.INABLE
                    }
                    onClick={() => dateOptionHandler('60')}
                  >
                    60일
                  </DateSelectBorder>
                  <DateSelectBorder
                    type={
                      maturity == '90' ? OptionType.ABLE : OptionType.INABLE
                    }
                    onClick={() => dateOptionHandler('90')}
                  >
                    90일
                  </DateSelectBorder>
                  <DateSelectBorder
                    type={
                      maturity == '120' ? OptionType.ABLE : OptionType.INABLE
                    }
                    onClick={() => dateOptionHandler('120')}
                  >
                    120일
                  </DateSelectBorder>
                  <DateSelectBorder
                    type={
                      maturity == '150' ? OptionType.ABLE : OptionType.INABLE
                    }
                    onClick={() => dateOptionHandler('150')}
                  >
                    150일
                  </DateSelectBorder>
                  <DateSelectBorder
                    type={
                      maturity == 'other' ? OptionType.ABLE : OptionType.INABLE
                    }
                    onClick={() => dateOptionHandler('other')}
                  >
                    기타
                  </DateSelectBorder>
                </OptionWrapper>
                <InputStyle
                  placeholder="숫자만 입력해 주세요"
                  value={maturityInput}
                  onChange={(e) => dateInputHandler(e.target.value)}
                />
              </InputItemWrapper>

              <InputItemWrapper
                style={{ marginTop: '40px', width: '350px', height: '116px' }}
              >
                <FieldName>
                  지급시기
                  <OptionTitle>청구일(세금계산서 발행일)로부터</OptionTitle>
                </FieldName>
                <OptionWrapper style={{ width: '350px' }}>
                  <DateSelectBorder
                    type={
                      paymentDate == '30' ? OptionType.ABLE : OptionType.INABLE
                    }
                    onClick={() => paymentDateOptionHandler('30')}
                  >
                    30일
                  </DateSelectBorder>
                  <DateSelectBorder
                    type={
                      paymentDate == '60' ? OptionType.ABLE : OptionType.INABLE
                    }
                    onClick={() => paymentDateOptionHandler('60')}
                  >
                    60일
                  </DateSelectBorder>
                  <DateSelectBorder
                    type={
                      paymentDate == '90' ? OptionType.ABLE : OptionType.INABLE
                    }
                    onClick={() => paymentDateOptionHandler('90')}
                  >
                    90일
                  </DateSelectBorder>
                  <DateSelectBorder
                    type={
                      paymentDate == 'other'
                        ? OptionType.ABLE
                        : OptionType.INABLE
                    }
                    onClick={() => paymentDateOptionHandler('other')}
                  >
                    기타
                  </DateSelectBorder>
                </OptionWrapper>
                <InputStyle
                  placeholder="숫자만 입력해 주세요"
                  value={paymentDateInput}
                  onChange={(e) => paymentDateInputHandler(e.target.value)}
                />
              </InputItemWrapper>
              <Caption>
                • 거래처가 세금계산서를 발행 후 60일 뒤, 어음(30일)을
                지급합니다.
              </Caption>
            </>
          ) : (
            <></>
          )}
        </HideContentWrapper>

        <BottomBtnWrapper>
          <InActiveBtn onClick={() => prvPageHandler()}>이전</InActiveBtn>
          {isValid ||
          (maturity && maturityInput && paymentDateInput && paymentDate) ? (
            <ActiveBtn onClick={() => nxtPageHandler()}>다음</ActiveBtn>
          ) : (
            <InActiveBtn>다음</InActiveBtn>
          )}
        </BottomBtnWrapper>
      </Container>
    </FieldCreateLayout>
  );
};

const Button = styled.div<{ type: ButtonType }>`
  width: 120px;
  height: 42px;
  background-color: #fff;
  padding: 13px 0;
  border-radius: 6px;
  cursor: pointer;

  font-family: Noto Sans KR;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: center;
  ${({ type }) => css`
    color: ${textColors[type]};
    border: 1px solid ${borderColors[type]};
  `}
`;

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
  margin-bottom: 45px;
`;

const BorderNumberWrapper = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid #258fff;
  border-radius: 50%;
  text-align: -webkit-center;
`;

const BorderNumber = styled.div`
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
  width: 260px;
  height: 76px;
`;

const BottomBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 540px;
  height: 50px;
  flex-direction: row;
  // margin-top: 71px;
`;

const HideContentWrapper = styled.div`
  height: 421px;
  margin-top: 40px;
  margin-bottom: 71px;
`;

const InActiveBtn = styled.div`
  width: 260px;
  height: 50px;
  background-color: #f2f2f2;
  padding: 15px 0;
  border-radius: 6px;
  cursor: pointer;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: center;
  color: #999;
`;

const ActiveBtn = styled.div`
  width: 260px;
  height: 50px;
  background-color: #258fff;
  padding: 15px 0;
  border-radius: 6px;
  cursor: pointer;

  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: center;
  color: #fff;
`;

const BottomContentWrapper = styled.div`
  width: 260px;
  height: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InputStyle = styled.input`
  width: 260px;
  height: 36px;
  margin: 10px 0 0 0;
  padding: 8px 14px;
  border-radius: 6px;
  border: solid 1px #c7c7c7;
  background-color: #fff;

  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.28px;
    text-align: left;
    color: #c7c7c7;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :focus::placeholder {
    color: transparent;
  }
`;

const SelectWrapper = styled.select`
  width: 260px;
  height: 42px;
  padding: 11px 14px 11px 20px;
  border-radius: 6px;
  border: solid 1px #c7c7c7;
  background-color: #fff;

  :placeholder {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }

  :focus {
    outline: none;
  }
`;

const OptionWrapper = styled.div`
  width: 530px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DateSelectBorder = styled.div<{ type: OptionType }>`
  width: 80px;
  height: 36px;
  cursor: pointer;
  border-radius: 18px;
  padding: 8px 0;

  line-height: 1.3
  font-size: 14px;
  font-weight: 500;
  text-align: center;

  ${({ type }) => css`
    background-color: ${optionBackgroundColors[type]};
    border: 1px solid ${optionBorderColors[type]};
    color: ${optionTextColors[type]};
  `};
`;

const OptionTitle = styled.span`
  height: 19px;
  margin: 3px 0 12px 14px;

  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #999;
`;

const Caption = styled.div`
  height: 19px;
  margin-top: 14px;

  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #ef0000;
`;
