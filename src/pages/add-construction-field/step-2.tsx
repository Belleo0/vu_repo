import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import getAssetURL from '@utils/getAssetURL';
import FieldCreateLayout from '@layout/FieldCreateLayout';
import { Range } from 'react-range';
import moment from 'moment';

export default () => {
  let now: any = new Date();
  const [constructionStartDate, setContructionStartDate] = useState<any>(
    now.toLocaleDateString('en-CA'),
  );
  const [constructionEndDate, setConstructionEndDate] = useState<any>();
  const [xPosition, setXPosition] = useState<any>([12]);
  const [maxCalendar, setMaxCalendar] = useState<string>('');

  const location = useLocation();

  const navigate = useNavigate();
  const step = constructionStartDate && constructionEndDate ? true : false;

  const nxtStepHandler = () => {
    navigate('/add-construction-field/step-3', {
      state: {
        ...(location.state as any as any),
        constructionStartDate: `${moment(constructionStartDate).format(
          'YYYY-MM-DD',
        )}T00:00:00.000Z`,
        constructionEndDate: `${moment(constructionEndDate).format(
          'YYYY-MM-DD',
        )}T00:00:00.000Z`,
        constructionRangeDate: xPosition,
      },
    });
  };

  useEffect(() => {
    setMaxCalendar(
      moment(constructionStartDate).add(120, 'M').format('YYYY-MM-DD'),
    );
  }, [constructionStartDate]);

  const prvPageHandler = () => {
    navigate('/add-construction-field/step-1');
  };

  const onChangeXpositionVal = (e: any) => {
    const tempArr = new Array();

    if (parseInt(e) <= 120 && parseInt(e) >= 1) {
      tempArr.push(parseInt(e));
      setXPosition(tempArr);
    }
  };

  const onChangeXpositionRange = (e: any) => {
    setXPosition(e);
    const originDate = moment(constructionEndDate).date();
    let temp: any = moment(now);

    temp.set('date', originDate);
    temp = moment(temp.add(parseInt(e), 'M')).format('YYYY-MM-DD');

    setConstructionEndDate(temp);
  };

  function getRoughMonths(startDate: any, endDate: any) {
    const startYears = Number(moment(startDate).format('YYYY'));
    const endYears = Number(moment(endDate).format('YYYY'));
    const startMonths = Number(moment(startDate).format('MM'));
    const endMonths = Number(moment(endDate).format('MM'));
    const yearsDiff = endYears - startYears;
    const monthsDiff = endMonths - startMonths;
    return yearsDiff * 12 + monthsDiff;
  }

  const onChangeEndDate = (v: any) => {
    setConstructionEndDate(v);

    const start = moment(constructionStartDate).format('YYYY-MM-DD');
    const end = moment(v).format('YYYY-MM-DD');

    const temp = getRoughMonths(start, end);
    const nArr = new Array();
    nArr.push(temp);
    setXPosition(nArr);
  };

  const onChangeStartDate = (v: any) => {
    setContructionStartDate(v);

    now = moment(constructionStartDate).format('YYYY-MM-DD');
  };

  useEffect(() => {
    let year: any = now.getFullYear() + 1;
    let month: any = now.getMonth() + 1;
    let date: any = now.getDate();

    if (month < 10) {
      month = '0' + month;
    }
    const tmp_dtm = year + month + date;
    const endDate = moment(tmp_dtm).format('YYYY-MM-DD');

    setConstructionEndDate(endDate);
  }, []);

  return (
    <FieldCreateLayout>
      <Container>
        <TopTitleWrapper>
          <BorderNumberWrapper>
            <BorderNumber>2</BorderNumber>
          </BorderNumberWrapper>
          <TopTitleBox>공사기간</TopTitleBox>
        </TopTitleWrapper>
        <InputItemWrapper style={{ width: '346px', height: '76px' }}>
          <FieldName>공사기간</FieldName>
          <DateWrapper>
            <input
              type="date"
              defaultValue={now.toLocaleDateString('en-CA')}
              onChange={(e) => {
                onChangeStartDate(e.target.value);
              }}
              value={constructionStartDate || ''}
              style={{ width: '156px', height: '42px' }}
            />
            <DistanceIcon src={getAssetURL('../assets/ic-tilde.svg')} />
            <input
              type="date"
              defaultValue={constructionEndDate}
              onChange={(e) => {
                onChangeEndDate(e.target.value);
              }}
              value={constructionEndDate || ''}
              style={{ width: '156px', height: '42px' }}
              min={constructionStartDate}
              max={maxCalendar}
            />
          </DateWrapper>
        </InputItemWrapper>
        <BottomContentWrapper>
          <SlideContentBox>
            <Range
              step={1}
              min={1}
              max={120}
              values={xPosition}
              onChange={(values) => {
                onChangeXpositionRange(values);
              }}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  ref={props.ref}
                  style={{
                    ...props.style,
                    height: '10px',
                    width: '500px',
                    backgroundColor: '#fff',
                    borderRadius: '50px',
                    border: '1px solid #e3e3e3',
                    marginBottom: '7px',
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => {
                return (
                  <>
                    <div
                      {...props}
                      style={{
                        outline: 'none',
                        width: '22px',
                        height: '22px',
                        border: '3px solid #258fff',
                        boxShadow: '0 0 10px 0 rgba(30, 117, 209, 0.42)',
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                      }}
                    >
                      <SliderCircleText>{xPosition}</SliderCircleText>
                    </div>
                  </>
                );
              }}
            />
            <SliderText>1개월</SliderText>
            <SliderRightText>120개월</SliderRightText>
          </SlideContentBox>
          <SliderBottomWrapper>
            <SliderBottomText>총</SliderBottomText>
            <SliderBottomBox
              value={xPosition}
              onChange={(e) => {
                onChangeXpositionVal(e.target.value);
              }}
              min={1}
              max={120}
            />
            <SliderBottomRightText>개월</SliderBottomRightText>
          </SliderBottomWrapper>
        </BottomContentWrapper>

        <BottomBtnWrapper>
          <InActiveBtn
            style={{ color: '#222222', cursor: 'pointer' }}
            onClick={() => prvPageHandler()}
          >
            이전
          </InActiveBtn>
          {step ? (
            <ActiveBtn onClick={() => nxtStepHandler()}>다음</ActiveBtn>
          ) : (
            <InActiveBtn>다음</InActiveBtn>
          )}
        </BottomBtnWrapper>
      </Container>
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

const DateWrapper = styled.div`
  width: 346px;
  height: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BottomBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 540px;
  height: 50px;
  flex-direction: row;
  margin-top: 322px;
`;

const InActiveBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 50px;
  background-color: #f2f2f2;
  padding: 15px 0;
  border-radius: 6px;

  text-align: center;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #999;
`;

const ActiveBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 50px;
  background-color: #258fff;
  padding: 15px 0;
  border-radius: 6px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

const DistanceIcon = styled.img`
  width: 14px;
  height: 14px;
  margin: 0 10px;
`;

const BottomContentWrapper = styled.div`
  width: 540px;
  height: 180px;
  margin: 30px 0 0;
  border: 1px solid #e3e3e3;
  background-color: #fff;
  border-radius: 6px;
`;

const SlideContentBox = styled.div`
  width: 500px;
  height: 68px;
  margin: 18px 20px 24px 20px;
  padding-top: 23px;
`;

const SliderCircleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 24px;
  width: 22px;
  top: -28px;
  left: -3px;

  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #258fff;
`;

const SliderText = styled.span`
  margin-right: 428px;
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #444;
`;
const SliderRightText = styled.span`
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: right;
  color: #444;
`;

const SliderBottomWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SliderBottomBox = styled.input`
  width: 98px;
  height: 50px;
  border: 2px solid #4490f7;
  border-radius: 6px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  outline: none;

  font-size: 28px;
  font-weight: normal;
  text-align: center;
  color: #258fff;
`;
const SliderBottomText = styled.span`
  margin: 12px 24px 12px 0;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #000;
  line-height: 1.4;
`;

const SliderBottomRightText = styled.span`
  margin: 12px 0 12px 8px;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #000;
  line-height: 1.4;
`;
