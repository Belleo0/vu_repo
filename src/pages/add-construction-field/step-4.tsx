import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import FieldCreateLayout from '@layout/FieldCreateLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import BlackSelect from '@components/BlackSelect';
import { useLocalStorage } from '@hooks/useLocalStorage';

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
  const location = useLocation();
  const [step, setStep] = useState<number>(0);

  const [maturity, setMaturity] = useState('');
  const [maturityInput, setMaturityInput] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [paymentDateInput, setPaymentDateInput] = useState('');
  const [paymentType, setPaymentType] = useState<string | null>(null);
  const [state, setState] = useLocalStorage('@add-construction-field', {
    maturity,
    maturityInput,
    paymentDate,
    paymentDateInput,
    paymentType,
  });

  const [isValid, setIsValid] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    setMaturity(state.maturity);
    setMaturityInput(state.maturityInput);
    setPaymentDate(state.paymentDate);
    setPaymentDateInput(state.paymentDateInput);
    setPaymentType(state.paymentType);
    setStep(state.step);
  }, []);

  useEffect(() => {
    setState((prev: any) => ({ ...prev, maturity }));
  }, [maturity]);

  useEffect(() => {
    setState((prev: any) => ({
      ...prev,
      maturityInput,
    }));
  }, [maturityInput]);

  useEffect(() => {
    setState((prev: any) => ({ ...prev, paymentDate }));
  }, [paymentDate]);

  useEffect(() => {
    setState((prev: any) => ({ ...prev, step }));
  }, [step]);

  useEffect(() => {
    setState((prev: any) => ({
      ...prev,
      paymentDateInput,
    }));
  }, [paymentDateInput]);

  useEffect(() => {
    setState((prev: any) => ({
      ...prev,
      paymentType,
    }));
  }, [paymentType]);

  const nxtPageHandler = () => {
    navigate('/add-construction-field/step-5', {
      state: {
        ...(location.state as any),
        maturity: paymentType === 'CASH' ? '' : maturity,
        maturityInput: maturity ? null : maturityInput,
        paymentDate: paymentDate,
        paymentDateInput: paymentDate ? null : paymentDateInput,
        paymentType: paymentType,
      },
    });
  };

  const prvPageHandler = () => {
    navigate('/add-construction-field/step-3');
  };

  const paymentOptionHandler = (idx: number) => {
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

  const paymentOptions = [
    { label: '??????', value: 'CASH' },
    { label: '??????', value: 'NOTE' },
    { label: '????????????', value: 'BOND' },
    { label: '????????????', value: 'CARD' },
  ];

  useEffect(() => {
    window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      e.returnValue = '';
    });
  }, []);

  useEffect(() => {
    if (step === 2) {
      if (paymentType === 'CASH') {
        if (paymentDate !== '') {
          setIsValid(true);
        }
      } else {
        if (paymentDate !== '' && maturity !== '') {
          setIsValid(true);
        }
      }
    }
  }, [maturity, paymentDate]);

  useEffect(() => {
    if (step === 2) {
      if (
        paymentType !== 'CASH' &&
        paymentDateInput !== '' &&
        maturityInput !== ''
      ) {
        setIsValid(true);
      }
    }
  }, [maturityInput, paymentDateInput]);

  return (
    <FieldCreateLayout>
      <Container>
        <TopTitleWrapper>
          <BorderNumberWrapper>
            <BorderNumber>4</BorderNumber>
          </BorderNumberWrapper>
          <TopTitleBox>????????????</TopTitleBox>
        </TopTitleWrapper>

        <InputItemWrapper>
          <FieldName>???????????? ??????</FieldName>
          <BottomContentWrapper>
            <Button
              type={step == 1 ? ButtonType.ABLE : ButtonType.INABLE}
              onClick={() => paymentOptionHandler(1)}
            >
              ????????????
            </Button>
            <Button
              type={step >= 2 ? ButtonType.ABLE : ButtonType.INABLE}
              onClick={() => paymentOptionHandler(2)}
            >
              ???????????? ??????
            </Button>
          </BottomContentWrapper>
        </InputItemWrapper>

        <HideContentWrapper>
          {step == 2 ? (
            <>
              <FieldName>????????????</FieldName>
              <BlackSelect
                absoluteStyle={{ border: 'solid 1px #c7c7c7' }}
                placeholder="????????? ?????????."
                width={260}
                options={paymentOptions}
                value={paymentType}
                onChange={(v: any) => setPaymentType(v)}
              />
              {paymentType !== 'CASH' && paymentType !== null ? (
                <InputItemWrapper
                  style={{ marginTop: '40px', width: '530px', height: '116px' }}
                >
                  <FieldName>??????</FieldName>
                  <OptionWrapper>
                    <DateSelectBorder
                      type={
                        maturity == '30' ? OptionType.ABLE : OptionType.INABLE
                      }
                      onClick={() => dateOptionHandler('30')}
                    >
                      30???
                    </DateSelectBorder>
                    <DateSelectBorder
                      type={
                        maturity == '60' ? OptionType.ABLE : OptionType.INABLE
                      }
                      onClick={() => dateOptionHandler('60')}
                    >
                      60???
                    </DateSelectBorder>
                    <DateSelectBorder
                      type={
                        maturity == '90' ? OptionType.ABLE : OptionType.INABLE
                      }
                      onClick={() => dateOptionHandler('90')}
                    >
                      90???
                    </DateSelectBorder>
                    <DateSelectBorder
                      type={
                        maturity == '120' ? OptionType.ABLE : OptionType.INABLE
                      }
                      onClick={() => dateOptionHandler('120')}
                    >
                      120???
                    </DateSelectBorder>
                    <DateSelectBorder
                      type={
                        maturity == '150' ? OptionType.ABLE : OptionType.INABLE
                      }
                      onClick={() => dateOptionHandler('150')}
                    >
                      150???
                    </DateSelectBorder>
                    <DateSelectBorder
                      type={
                        maturity == '??????' ? OptionType.ABLE : OptionType.INABLE
                      }
                      onClick={() => dateOptionHandler('??????')}
                    >
                      ??????
                    </DateSelectBorder>
                  </OptionWrapper>
                  <InputStyle
                    placeholder={
                      maturity === '??????' ? '????????? ????????? ?????????' : ''
                    }
                    value={maturity === '??????' ? maturityInput : ''}
                    disabled={maturity !== '??????' ? true : false}
                    type={'number'}
                    onChange={(e) => dateInputHandler(e.target.value)}
                  />
                </InputItemWrapper>
              ) : null}
              <InputItemWrapper
                style={{ marginTop: '40px', width: '350px', height: '116px' }}
              >
                <FieldName>
                  ????????????
                  <OptionTitle>?????????(??????????????? ?????????)?????????</OptionTitle>
                </FieldName>
                <OptionWrapper style={{ width: '350px' }}>
                  <DateSelectBorder
                    type={
                      paymentDate == '30' ? OptionType.ABLE : OptionType.INABLE
                    }
                    onClick={() => paymentDateOptionHandler('30')}
                  >
                    30???
                  </DateSelectBorder>
                  <DateSelectBorder
                    type={
                      paymentDate == '60' ? OptionType.ABLE : OptionType.INABLE
                    }
                    onClick={() => paymentDateOptionHandler('60')}
                  >
                    60???
                  </DateSelectBorder>
                  <DateSelectBorder
                    type={
                      paymentDate == '90' ? OptionType.ABLE : OptionType.INABLE
                    }
                    onClick={() => paymentDateOptionHandler('90')}
                  >
                    90???
                  </DateSelectBorder>
                  <DateSelectBorder
                    type={
                      paymentDate == '??????'
                        ? OptionType.ABLE
                        : OptionType.INABLE
                    }
                    onClick={() => paymentDateOptionHandler('??????')}
                  >
                    ??????
                  </DateSelectBorder>
                </OptionWrapper>
                <InputStyle
                  placeholder={
                    paymentDate === '??????' ? '????????? ????????? ?????????' : ''
                  }
                  type={'number'}
                  value={paymentDate === '??????' ? paymentDateInput : ''}
                  disabled={paymentDate !== '??????' ? true : false}
                  onChange={(e) => paymentDateInputHandler(e.target.value)}
                />
              </InputItemWrapper>
              {paymentType !== 'CASH' ? (
                <Caption>
                  ??? ???????????? ?????????????????? ?????? ???{' '}
                  {paymentDate !== '??????'
                    ? paymentDate
                    : paymentDateInput || '??????'}
                  ??? ???,{' '}
                  {(() => {
                    switch (paymentType) {
                      case 'NOTE':
                        return '??????';
                      case 'BOND':
                        return '????????????';
                      case 'CARD':
                        return '????????????';
                    }
                  })()}
                  ({maturity !== '??????' ? maturity : maturityInput || '??????'}
                  ???){paymentType !== 'CARD' ? '???' : '???'} ???????????????.
                </Caption>
              ) : null}
              {paymentType === 'CASH' ? (
                paymentDate === '' ? (
                  <NonSelectCaption>
                    ??????????????? ?????? ??????????????????.
                  </NonSelectCaption>
                ) : null
              ) : paymentDate === '' || maturity === '' ? (
                <NonSelectCaption>
                  ??????????????? ?????? ??????????????????.
                </NonSelectCaption>
              ) : null}
            </>
          ) : (
            <></>
          )}
        </HideContentWrapper>

        <BottomBtnWrapper>
          <InActiveBtn
            style={{ color: '#222222', cursor: 'pointer' }}
            onClick={() => prvPageHandler()}
          >
            ??????
          </InActiveBtn>
          {isValid ? (
            <ActiveBtn onClick={() => nxtPageHandler()}>??????</ActiveBtn>
          ) : (
            <InActiveBtn>??????</InActiveBtn>
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 36px;
  cursor: pointer;
  border-radius: 18px;

  font-size: 14px;
  font-weight: 500;

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
  color: #ff4d4d;
`;
const NonSelectCaption = styled.div`
  height: 19px;
  margin-top: 10px;

  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #ef0000;
`;
