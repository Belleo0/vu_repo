import useAssignments from '@api/useAssignments';
import CalendarColumn from '@components/CalendarColumn';
import CalendarModal from '@components/CalendarModal';
import Select from '@components/Select';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useSelectedSpaceInfo from '@hooks/useSelectedSpaceInfo';
import SpaceLayout from '@layout/SpaceLayout';
import {
  CalendarTypeState,
  generateWeekData,
  generateWeekInfo,
} from '@utils/calendar';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import pickCalendarModal from '@components/CalendarModal';
const calendarTypeOptions = [
  { label: '일', value: CalendarTypeState.DAY },
  { label: '주', value: CalendarTypeState.WEEK },
  { label: '월', value: CalendarTypeState.MONTH },
];

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { pick } from 'lodash';
import useFieldSpaceWeathers from '@api/useFieldSpaceWeathers';

const hours = [
  4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
];

export default () => {
  const spaceInfo = useSelectedSpaceInfo();

  const { data: weatherInfo } = useFieldSpaceWeathers(spaceInfo?.id);

  const [type, setType] = useState(CalendarTypeState.WEEK);
  const [dates, setDates] = useState<any>([]);

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [selectedBarInfo, setSelectedBarInfo] = useState(null);

  const [pickCalendar, setPickCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<any>();

  const { data: assignments, mutate } = useAssignments(
    dates?.[0],
    dates?.[dates.length - 1],
  );

  const weekInfo = useMemo(() => {
    return generateWeekInfo(type, dates);
  }, [type, dates]);

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

  const handlePickCalendar = (v: any) => {
    setSelectedDate(v);
    if (type === CalendarTypeState.DAY) {
      const date = v;
      const nextDate = new Date(new Date(date).setDate(date.getDate()));
      setDates([nextDate]);
    } else {
      const date = v;
      const nextWeek = new Date(date.valueOf());
      setDates(generateWeekData(nextWeek));
    }
  };

  const handleCalendarModalClose = () => {
    setIsModalOpened(false);
    setSelectedBarInfo(null);
    setModalPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    handleCalendarModalClose();
  }, [type, dates]);

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
              <WeekText
                onClick={() => {
                  setPickCalendar(!pickCalendar);
                }}
              >
                {weekInfo}
              </WeekText>
              <WeekIcon
                src={getAssetURL('../assets/ic-arrow-right.svg')}
                onClick={handleNext}
              />
            </WeekWrap>
            {pickCalendar && (
              <CalendarWrapper>
                <Calendar
                  onChange={(v: any) => {
                    handlePickCalendar(v);
                    setPickCalendar(false);
                  }}
                  closeCalendar={pickCalendar}
                  locale={'en-US'}
                  calendarType={'Hebrew'}
                  value={selectedDate}
                />
              </CalendarWrapper>
            )}
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
              <TimeWrap key={v}>
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
              <CalendarColumn
                data={
                  assignments?.[moment(dates[0]).format('YYYY-MM-DD')] || []
                }
                type={type}
                mutate={mutate}
                setIsModalOpened={setIsModalOpened}
                setModalPosition={setModalPosition}
                setSelectedBarInfo={setSelectedBarInfo}
                weatherInfo={weatherInfo}
              />
            ) : (
              dates.map((v: any) => (
                <CalendarColumn
                  date={v}
                  data={assignments?.[moment(v).format('YYYY-MM-DD')] || []}
                  type={type}
                  mutate={mutate}
                  setIsModalOpened={setIsModalOpened}
                  setModalPosition={setModalPosition}
                  setSelectedBarInfo={setSelectedBarInfo}
                  weatherInfo={weatherInfo}
                />
              ))
            )}
          </BarContainer>
        </CalendarContainer>
        <CalendarModal
          open={isModalOpened}
          onClose={handleCalendarModalClose}
          info={selectedBarInfo}
          position={modalPosition}
          revalidate={() => {
            mutate();
          }}
        />
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
  cursor: pointer;

  position: relative;
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

const CalendarWrapper = styled.div`
  position: absolute;
  z-index: 9999;
  margin-top: 5px;
  top: 180px;
  right: 203px;

  .react-calendar {
    border-radius: 18px;
    border: 1px solid #e3e3e3;
    width: 261px;
    height: 283px;
    overflow: hidden;
  }

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    text-decoration: none;
  }
  .react-calendar__month-view__weekdays__weekday {
    background-color: #f2f2f2;
  }

  .react-calendar__navigation button {
    width: 40px;
    height: 40px;
  }

  .react-calendar__tile:enabled:hover {
    background-color: #e6f0ff;
    border-radius: 8px;
  }

  .react-calendar__tile:enabled:focus {
    background-color: #e6f0ff;
    border-radius: 8px;
  }

  .react-calendar__tile--now {
    background-color: #258fff;
    color: #ffffff !important;
    border-radius: 8px;
  }
  .react-calendar__tile {
    height: 40px;
    padding: 0px;
    flex: 0;
  }

  .react-calendar__tile--active {
    background-color: #94c8ff;
    color: #ffffff !important;
    border-radius: 8px;
  }

  .react-calendar__navigation button:enabled:hover {
    background-color: #e6f0ff;
    border-radius: 8px;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #000;
  }

  .react-calendar__navigation {
    background-color: #e3e3e3;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    margin: 0;
    height: 42px;
  }

  .react-calendar__month-view__weekdays__weekday {
    width: 37px;
    height: 33px;
  }

  .react-calendar
    .react-calendar
    *
    .react-calendar
    *:before
    .react-calendar
    *:after {
    width: 23px;
    height: 23px;
  }
`;
