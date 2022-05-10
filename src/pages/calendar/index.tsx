import { css } from '@emotion/react';
import styled from '@emotion/styled';
import SpaceLayout from '@layout/SpaceLayout';
import { useMemo } from 'react';

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
    name: '(주)동양레미콘',
    amount: 150,
    start_time: '2022-05-05T03:30:00.000Z',
    end_time: '2022-05-05T04:30:00.000Z',
  },
  {
    name: '(주)표주레미콘',
    amount: 120,
    start_time: '2022-05-05T04:00:00.000Z',
    end_time: '2022-05-05T05:00:00.000Z',
  },
  {
    name: '(주)동양레미콘',
    amount: 210,
    start_time: '2022-05-05T04:30:00.000Z',
    end_time: '2022-05-05T05:30:00.000Z',
  },
];

const hourHeight = 46;

export default () => {
  const transformedData = useMemo(() => {
    const tempData = data.map((v, i) => {
      const isFirstBar = i === 0;

      const thisStartTime = new Date(v.start_time);
      const thisStartTimeHour = thisStartTime.getHours();

      const thisEndTime = new Date(v.end_time);
      const thisEndTimeHour = thisStartTime.getHours();

      const beforeStartTime = isFirstBar
        ? null
        : new Date(data[i - 1].start_time);
      const beforeEndTime = isFirstBar ? null : new Date(data[i - 1].end_time);

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
            (hours[0] - 1) +
            thisStartTime.getMinutes() / 60) *
          46,
        height: Math.abs(
          ((thisStartTime.getTime() - thisEndTime.getTime()) / 1000 / 60 / 60) *
            hourHeight,
        ),
        isDuplicated,
        left: isFirstBar ? 0 : isDuplicated ? 248 : 0,
      };
    });

    console.log(tempData);

    let beforeLeft = 0;

    return tempData.map((v, i) => {
      const isFirstBar = i === 0;

      const left = isFirstBar ? 0 : v.left + beforeLeft;

      beforeLeft = isFirstBar ? 0 : tempData[i - 1].left + v.left;

      return { ...v, left };
    });
  }, [data]);

  return (
    <SpaceLayout>
      <Container>
        <CalendarContainer>
          <TimeContainer>
            <TimeWrap>
              <TimeText></TimeText>
              <TimeDivider />
            </TimeWrap>
            {hours.map((v) => (
              <TimeWrap>
                <TimeText>
                  {v >= 12 ? '오후' : '오전'}
                  {v > 12 ? v - 12 : v}시
                </TimeText>
                <TimeDivider />
              </TimeWrap>
            ))}
          </TimeContainer>
          <BarBackground />
          <BarContainer>
            {transformedData.map((v, i) => (
              <Bar
                top={v.top}
                left={v.left}
                height={Math.abs(v.height)}
                style={{ backgroundColor: i % 2 !== 0 ? '#fff5df' : '#dbeafb' }}
              >
                <Name>{v.name}</Name>
                <Time>{v.time}</Time>
                <Amount>{v.amount}m³</Amount>
              </Bar>
            ))}
          </BarContainer>
        </CalendarContainer>
      </Container>
    </SpaceLayout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  padding: 60px 60px 100px;
`;

const CalendarContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 966px;
`;

const TimeContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
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
`;

const Bar = styled.div<{ top: number; left: number; height: number }>`
  display: flex;
  flex-direction: column;

  position: absolute;
  border-radius: 6px;
  background-color: #dbeafb;
  z-index: 300;

  padding: 8px 20px;

  ${({ top }) =>
    css`
      top: ${top}px;
    `}

  ${({ left }) =>
    css`
      left: ${left}px;
      width: calc(100% - ${left}px);
    `}

  ${({ height }) =>
    css`
      min-height: ${height}px;
    `}
`;

const BarContainer = styled.div`
  display: flex;
  position: absolute;
  width: calc(100% - 52px);
  height: 100%;
  margin-left: 52px;
  z-index: 300;
`;

const Name = styled.span`
  font-size: 14px;
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
