import useFieldSpaceWeathers from '@api/useFieldSpaceWeathers';
import useSpaceInfo from '@api/useSpaceInfo';
import CalendarBarColors from '@constance/CalendarBarColors';
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
import OrderCalendarDay from './OrderCalendarDay';
import WeatherModal from './WeatherModal';

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
        {dates.map((v: any) => (
          <OrderCalendarDay
            key={v.toString()}
            v={v}
            assignments={assignments}
            weatherInfo={weatherInfo}
            setSelectedBarInfo={setSelectedBarInfo}
            setIsModalOpened={setIsModalOpened}
            setModalPosition={setModalPosition}
          />
        ))}
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
