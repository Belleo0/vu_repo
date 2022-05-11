import CalendarColumn from '@components/CalendarColumn';
import Select from '@components/Select';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useSelectedSpaceInfo from '@hooks/useSelectedSpaceInfo';
import SpaceLayout from '@layout/SpaceLayout';
import getAssetURL from '@utils/getAssetURL';
import { useEffect, useMemo, useState } from 'react';

export enum CalendarTypeState {
  DAY,
  WEEK,
}

const calendarTypeOptions = [
  { label: '일', value: CalendarTypeState.DAY },
  { label: '주', value: CalendarTypeState.WEEK },
];

const hours = [
  4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
];

const data = [
  {
    name: '(주)표주레미콘',
    amount: 120,
    start_time: '2022-05-05T03:00:00.000Z',
    end_time: '2022-05-05T04:00:00.000Z',
  },
  {
    name: '(주)동서산업',
    amount: 72,
    start_time: '2022-05-05T03:50:00.000Z',
    end_time: '2022-05-05T05:50:00.000Z',
  },
  {
    name: '(주)표주레미콘',
    amount: 120,
    start_time: '2022-05-05T07:00:00.000Z',
    end_time: '2022-05-05T09:00:00.000Z',
  },
];

export default () => {
  const spaceInfo = useSelectedSpaceInfo();

  const [type, setType] = useState(CalendarTypeState.DAY);
  const [dates, setDates] = useState<any>([]);

  const getWeekNumber = (date = new Date()) => {
    const dateFrom = new Date(date);
    const currentDate = dateFrom.getDate();
    const startOfMonth = new Date(dateFrom.setDate(1));
    const weekDay = startOfMonth.getDay();
    return parseInt(((weekDay - 1 + currentDate) / 7) as unknown as string) + 1;
  };

  const getWeekCountOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const lastDate = new Date(year, month + 1, 0);

    return getWeekNumber(lastDate);
  };

  const convertString = (v: any) => v.toString().padStart(2, '0');

  const weekInfo = useMemo(() => {
    if (!dates || dates.length === 0) return null;

    const year = dates[0].getFullYear();
    const realMonth = dates[0].getMonth() + 1;
    const day = dates[0].getDate();

    if (type === CalendarTypeState.DAY) {
      return `${year}년 ${convertString(realMonth)}월 ${convertString(day)}일`;
    } else {
      const realWeekNum = getWeekNumber(dates[0]);
      const maxWeekNum = getWeekCountOfMonth(dates[0]);
      console.log('maxWeekNum', dates[0], maxWeekNum);

      const weekNum = realWeekNum === maxWeekNum ? 1 : realWeekNum;
      const month = realWeekNum === maxWeekNum ? realMonth + 1 : realMonth;

      return `${year}년 ${convertString(month)}월 ${weekNum}주차`;
    }
  }, [dates, type]);

  const generateWeekData = (date: Date) => {
    const day = date.getDay();

    const week = new Array(7)
      .fill(null)
      .map((v, i) => new Date(date.valueOf() + 86400000 * (i - day)));
    console.log(week);
    return week;
  };

  const handleToday = () => {
    if (type === CalendarTypeState.DAY) {
      setDates([new Date()]);
    } else {
      setDates(generateWeekData(new Date()));
    }
  };

  useEffect(() => {
    handleToday();
  }, [type]);

  const handlePrev = () => {
    if (type === CalendarTypeState.DAY) {
      const date = dates[0];
      const prevDate = new Date(new Date(date).setDate(date.getDate() - 1));
      setDates([prevDate]);
    } else {
      const date = dates[0];
      const prevWeek = new Date(date.valueOf() - 604800000);
      setDates(generateWeekData(prevWeek));
    }
  };

  const handleNext = () => {
    if (type === CalendarTypeState.DAY) {
      const date = dates[0];
      const nextDate = new Date(new Date(date).setDate(date.getDate() + 1));
      setDates([nextDate]);
    } else {
      const date = dates[0];
      const nextWeek = new Date(date.valueOf() + 604800000);
      setDates(generateWeekData(nextWeek));
    }
  };

  return (
    <SpaceLayout>
      <Container>
        <FilterContainer>
          <Name>{spaceInfo?.name}</Name>
          <RightWrap>
            <WeekWrap>
              <WeekIcon
                src={getAssetURL('../assets/ic-arrow-left.svg')}
                onClick={handlePrev}
              />
              <WeekText>{weekInfo}</WeekText>
              <WeekIcon
                src={getAssetURL('../assets/ic-arrow-right.svg')}
                onClick={handleNext}
              />
            </WeekWrap>
            <TodayButton onClick={handleToday}>오늘</TodayButton>
            <Select
              width={64}
              options={calendarTypeOptions}
              value={type}
              onChange={(v) => setType(v)}
            />
          </RightWrap>
        </FilterContainer>
        <CalendarContainer type={type}>
          <TimeContainer type={type}>
            {hours.map((v) => (
              <TimeWrap>
                <TimeText>
                  {v >= 12 ? '오후' : '오전'} {v > 12 ? v - 12 : v}시
                </TimeText>
                <TimeDivider />
              </TimeWrap>
            ))}
          </TimeContainer>
          <BarBackground />
          <BarContainer>
            {type === CalendarTypeState.DAY ? (
              <CalendarColumn data={data} type={type} />
            ) : (
              dates.map((v: any) => (
                <CalendarColumn date={v} data={data} type={type} />
              ))
            )}
          </BarContainer>
        </CalendarContainer>
      </Container>
    </SpaceLayout>
  );
};

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  margin-left: 52px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.4px;
  text-align: left;
  color: #000;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  padding: 60px 60px 100px;
`;

const CalendarContainer = styled.div<{ type: CalendarTypeState }>`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;

  ${({ type }) =>
    type === CalendarTypeState.WEEK
      ? css`
          min-height: 1032px;
        `
      : css`
          min-height: 966px;
        `}
`;

const TimeContainer = styled.div<{ type: CalendarTypeState }>`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;

  ${({ type }) =>
    type === CalendarTypeState.WEEK
      ? css`
          margin-top: 110px;
        `
      : css`
          margin-top: 42px;
        `}
`;

const TimeWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 34px;
`;

const TimeText = styled.span`
  display: block;
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: right;
  color: #444;
  margin-right: 6px;
  width: 48px;
`;

const TimeDivider = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #e3e3e3;
`;

const BarBackground = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100%;
  margin-left: 52px;
  z-index: 100;
  border-bottom: 1px solid #e3e3e3;
`;

const BarContainer = styled.div`
  display: flex;
  position: absolute;
  width: calc(100% - 52px);
  height: 100%;
  margin-left: 52px;
  z-index: 300;
`;

const RightWrap = styled.div`
  display: flex;
`;

const WeekWrap = styled.div`
  display: flex;
  align-items: center;
`;

const WeekText = styled.span`
  font-size: 18px;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
`;

const WeekIcon = styled.img`
  width: 14px;
  height: 14px;
  margin: 0px 10px 2px 10px;
  cursor: pointer;
  user-select: none;
`;

const TodayButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 24px;
  border-radius: 6px;
  border: solid 1px #c7c7c7;
  background-color: #fff;
  margin: 0px 10px;
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
  cursor: pointer;
  user-select: none;
`;
