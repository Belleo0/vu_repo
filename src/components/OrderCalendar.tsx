import useFieldSpaceWeathers from '@api/useFieldSpaceWeathers';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import useSelectedSpaceInfo from '@hooks/useSelectedSpaceInfo';
import SpaceLayout from '@layout/SpaceLayout';
import {
  CalendarTypeState,
  convertString,
  days,
  generateWeekData,
  generateWeekInfo,
  isDateToday,
} from '@utils/calendar';
import { convertTime } from '@utils/date';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import CalendarModal from './CalendarModal';
import Checkbox from './Checkbox';

export default ({
  dates,
  setDates,
  assignments,
  mutate,
  mutateMessages,
}: any) => {
  const isFieldUser = useIsFieldUser();

  const spaceInfo = useSelectedSpaceInfo();

  const { data: weatherInfo } = useFieldSpaceWeathers();

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [selectedBarInfo, setSelectedBarInfo] = useState(null);

  const weekInfo = useMemo(() => {
    return generateWeekInfo(CalendarTypeState.WEEK, dates);
  }, [dates]);

  const handlePrev = () => {
    const date = dates[0];
    const prevWeek = new Date(date.valueOf() - 604800000);
    setDates(generateWeekData(prevWeek));
  };

  const handleNext = () => {
    const date = dates[0];
    const nextWeek = new Date(date.valueOf() + 604800000);
    setDates(generateWeekData(nextWeek));
  };

  const handleToday = () => {
    setDates(generateWeekData(new Date()));
  };

  useEffect(() => {
    handleToday();
  }, []);

  const handleCalendarModalClose = () => {
    setIsModalOpened(false);
    setSelectedBarInfo(null);
    setModalPosition({ x: 0, y: 0 });
  };

  return (
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
        </RightWrap>
      </FilterContainer>
      <CalendarContainer>
        {dates.map((v: any) => {
          const date = moment(v).format('YYYY-MM-DD');
          const data = assignments?.[date] || [];

          const isAvaildableVisibleWeather = weatherInfo?.[date];
          const iconType = weatherInfo?.[date]?.weather?.[0]?.icon?.slice?.(
            0,
            2,
          );
          const icon = `../assets/${iconType}.svg`;

          return (
            <DayContainer key={v.toISOString()}>
              <DayText className="day-text">{days[v.getDay()]}</DayText>
              <DayContents>
                <DayAmountWrap
                  style={
                    isAvaildableVisibleWeather
                      ? {}
                      : { justifyContent: 'center' }
                  }
                >
                  {isAvaildableVisibleWeather ? (
                    <DayIcon style={{ opacity: 0 }} />
                  ) : null}
                  <DayAmount active={isDateToday(v)}>
                    {convertString(v.getDate())}
                  </DayAmount>
                  {isAvaildableVisibleWeather ? (
                    <DayIcon src={getAssetURL(icon)} />
                  ) : null}
                </DayAmountWrap>
                <BarContainer>
                  {data?.map((v: any) => (
                    <Bar
                      style={
                        v?.status === 'REQUESTED'
                          ? RequestedBarStyle
                          : { backgroundColor: v?.estimation?.color }
                      }
                      onClick={(e) => {
                        setSelectedBarInfo(v);
                        setIsModalOpened(true);
                        setModalPosition({ x: e.clientX, y: e.clientY });
                      }}
                    >
                      <BarTime>{convertTime(v?.start_time, true)}</BarTime>
                      <BarName>
                        {
                          v?.estimation?.[
                            isFieldUser ? 'factory_space' : 'field_space'
                          ]?.name
                        }
                      </BarName>
                      <BarAmount>
                        {v?.total?.toLocaleString?.('ko')}m³
                      </BarAmount>
                    </Bar>
                  ))}
                </BarContainer>
              </DayContents>
            </DayContainer>
          );
        })}
      </CalendarContainer>
      <CalendarModal
        open={isModalOpened}
        onClose={handleCalendarModalClose}
        info={selectedBarInfo}
        position={modalPosition}
        revalidate={() => {
          mutate();
          mutateMessages();
        }}
        weatherInfo={weatherInfo}
        setIsModalOpened={setIsModalOpened}
        setModalPosition={setModalPosition}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 22px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.4px;
  text-align: left;
  color: #000;
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

const CalendarContainer = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #c7c7c7;
  background-color: white;
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid #f2f2f2;

  max-width: calc(100% / 7);

  &:first-of-type {
    .day-text {
      color: #ff5517;
    }
  }
`;

const DayText = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 0px;
  border-bottom: 1px solid #f2f2f2;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;

  color: #000;
`;

const DayContents = styled.div`
  min-height: 128px;
  border-bottom: 1px solid #f2f2f2;
`;

const DayAmountWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  padding: 10px 14px;
`;

const DayIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const DayAmount = styled.span<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;

  border-radius: 15px;

  ${({ active }) =>
    active
      ? css`
          background-color: #258fff;
          color: #fff;
        `
      : css`
          background-color: #fff;
          color: #1f1d1d;
        `}
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 6px;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 10px;
  border-radius: 6px;
  background-color: #ffd6cc;
  margin-bottom: 2px;
  cursor: pointer;
`;

const BarTime = styled.span`
  display: block;
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #777;
  margin-right: 4px;
  word-break: keep-all;
`;

const BarName = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
  margin-right: 8px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* max-width: calc(100% - 150px); */

  /* max-width: 56px; */
`;

const BarAmount = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  text-align: left;
  color: #000;
  margin-left: auto;
`;

const RequestedBarStyle = {
  backgroundColor: '#ffffff',
  backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23c7c7c7' stroke-width='3' stroke-dasharray='2%2c7' stroke-dashoffset='57' stroke-linecap='square'/%3e%3c/svg%3e")`,
  borderRadius: ' 6px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '8px 10px',
  marginBottom: '2px',
  cursor: 'pointer',
};
