import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import SpaceLayout from '@layout/SpaceLayout';
import { CalendarTypeState, days, isDateToday } from '@utils/calendar';
import getAssetURL from '@utils/getAssetURL';
import { useMemo, useState } from 'react';

const hours = [
  4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
];

const hourHeight = 46;

export default ({
  date,
  data,
  type,
  setIsModalOpened,
  setModalPosition,
  setSelectedBarInfo,
}: any) => {
  const isFieldUser = useIsFieldUser();
  const defaultTopMargin = useMemo(() => {
    return type === CalendarTypeState.WEEK ? 8 : 8;
  }, []);
  const defaultLeftWidth = useMemo(() => {
    return type === CalendarTypeState.WEEK ? 27 : 248;
  }, [type]);

  const defaultLeftMargin = useMemo(() => {
    return type === CalendarTypeState.WEEK ? 4 : 0;
  }, [type]);

  const transformedData = useMemo(() => {
    const filteredData = data.filter((v: any) => {
      return (
        new Date(v.start_time).getHours() >= 3 &&
        new Date(v.start_time).getHours() <= 12
      );
    });
    const sortedData = filteredData.sort(
      (a: any, b: any) =>
        new Date(a.start_time).getTime() - new Date(b.start_time).getTime(),
    );
    const tempData = sortedData.map((v: any, i: number) => {
      const isFirstBar = i === 0;

      const thisStartTime = new Date(v.start_time);
      const thisStartTimeHour = thisStartTime.getHours();

      const thisEndTime = new Date(v.end_time);
      const thisEndTimeHour = thisEndTime.getHours();

      const beforeStartTime = isFirstBar
        ? null
        : new Date(data[i - 1].start_time);
      const beforeEndTime = isFirstBar
        ? null
        : new Date(sortedData[i - 1].end_time);

      const isDuplicated = isFirstBar
        ? false
        : beforeStartTime! < thisStartTime && thisStartTime < beforeEndTime!;

      const time = `${thisStartTimeHour >= 12 ? '오후' : '오전'} ${
        thisStartTimeHour > 12 ? thisStartTimeHour - 12 : thisStartTimeHour
      }시 ~ ${thisEndTimeHour > 12 ? thisEndTimeHour - 12 : thisEndTimeHour}시`;

      return {
        ...v,
        time,
        top:
          (thisStartTime.getHours() -
            hours[0] +
            thisStartTime.getMinutes() / 60) *
            46 +
          defaultTopMargin,
        height: Math.abs(
          ((thisStartTime.getTime() - thisEndTime.getTime()) / 1000 / 60 / 60) *
            hourHeight,
        ),
        isDuplicated,
        left: isFirstBar ? 0 : isDuplicated ? defaultLeftWidth : 0,
      };
    });

    let beforeLeft = 0;

    return tempData.map((v: any, i: number) => {
      const isFirstBar = i === 0;

      const left = isFirstBar
        ? 0
        : v.isDuplicated
        ? tempData[i - 1].left + v.left
        : 0;

      beforeLeft = left;

      return { ...v, left };
    });
  }, [data, defaultLeftWidth, defaultTopMargin]);

  return (
    <Container>
      {type === CalendarTypeState.WEEK ? (
        <CalendarTop type={type} className="calendar-top-text">
          {days[date.getDay()]}
        </CalendarTop>
      ) : (
        <CalendarTop type={type} />
      )}
      {type === CalendarTypeState.WEEK && (
        <CalendarDay>
          <CalendarTopWrap>
            <CalendarTopIcon
              src={getAssetURL('../assets/ic-sunny.svg')}
              style={{ opacity: 0 }}
            />
            <CalendarTopDay active={isDateToday(date)}>
              {date.getDate().toString().padStart(2, '0')}
            </CalendarTopDay>
            <CalendarTopIcon src={getAssetURL('../assets/ic-sunny.svg')} />
          </CalendarTopWrap>
        </CalendarDay>
      )}
      <BarContainer>
        {transformedData.map((v: any, i: number) =>
          type === CalendarTypeState.WEEK ? (
            <Bar
              key={i}
              type={type}
              top={v.top}
              left={v.left + defaultLeftMargin}
              height={Math.abs(v.height)}
              style={
                v?.estimation?.status === 'REQUESTED'
                  ? RequestedBarStyle
                  : { backgroundColor: v?.estimation?.color }
              }
              onClick={(e) => {
                setSelectedBarInfo(v);
                setIsModalOpened(true);
                setModalPosition({ x: e.clientX, y: e.clientY });
              }}
            >
              <WeekInfoRow>
                <Name>
                  {
                    v?.estimation?.[
                      isFieldUser ? 'factory_space' : 'field_space'
                    ]?.name
                  }
                </Name>
                <Amount>{v?.total?.toLocaleString?.('ko')}m³</Amount>
              </WeekInfoRow>
              <Time>{v.time}</Time>
            </Bar>
          ) : (
            <Bar
              key={i}
              type={type}
              top={v.top}
              left={v.left + defaultLeftMargin}
              height={Math.abs(v.height)}
              style={
                v?.estimation?.status === 'REQUESTED'
                  ? RequestedBarStyle
                  : { backgroundColor: v?.estimation?.color }
              }
              onClick={(e) => {
                setSelectedBarInfo(v);
                setIsModalOpened(true);
                setModalPosition({ x: e.clientX, y: e.clientY });
              }}
            >
              <Name>
                {
                  v?.estimation?.[isFieldUser ? 'factory_space' : 'field_space']
                    ?.name
                }
              </Name>
              <Time>{v.time}</Time>
              <Amount>{v?.total?.toLocaleString?.('ko')}m³</Amount>
            </Bar>
          ),
        )}
      </BarContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  &:not(:last-child) {
    border-right: 1px solid #e3e3e3;
  }

  &:first-of-type {
    .calendar-top-text {
      color: #ff5517;
    }
  }
`;

const BarContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
  margin-bottom: 4px;
`;

const Time = styled.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #777;
  margin-bottom: 8px;
`;

const Amount = styled.span`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.24px;
  text-align: left;
  color: #000;
`;

const WeekInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CalendarTop = styled.div<{ type: CalendarTypeState }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  background-color: white;
  border-top: 1px solid #c7c7c7;

  ${({ type }) =>
    type === CalendarTypeState.WEEK
      ? css`
          height: 44px;
        `
      : css`
          height: 42px;
        `}

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;
  color: #000;
  /* color: #ff5517; */
`;

const CalendarDay = styled.div`
  display: flex;
  align-items: flex-start;

  width: 100%;
  height: 76px;
  border-top: 1px solid #e3e3e3;
  /* background-color: red; */

  /* border-bottom: 1px solid #e3e3e3; */
`;

const CalendarTopWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 8px 14px;
`;

const CalendarTopIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const CalendarTopDay = styled.span<{ active: boolean }>`
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

const Bar = styled.div<{
  type: CalendarTypeState;
  top: number;
  left: number;
  height: number;
}>`
  display: flex;
  flex-direction: column;

  position: absolute;
  border-radius: 6px;
  background-color: #dbeafb;
  z-index: 300;

  cursor: pointer;

  ${({ top }) =>
    css`
      top: ${top}px;
    `}

  ${({ left, type }) =>
    css`
      left: ${left}px;
      width: calc(
        100% - ${left}px ${type === CalendarTypeState.WEEK ? '- 4px' : ''}
      );
      padding: ${type === CalendarTypeState.WEEK ? '6px 8px' : '8px 20px'};
    `}

  ${({ height }) =>
    css`
      min-height: ${height}px;
    `}
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
