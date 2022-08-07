import styled from '@emotion/styled';
import useLine from '@hooks/useLine';
import getAssetURL from '@utils/getAssetURL';

const X_GAP = 30;
const Y_GAP = 50;

export const WEATHER_CHART_PER_WIDTH = 82;
export const WEATHER_CHART_HEIGHT = 40;
const WEATHER_CHART_CONTAINER_HEIGHT = WEATHER_CHART_HEIGHT * 5;

const WEATHER_ICON_Y_GAP = 120;
const WEATHER_TIME_Y_GAP = WEATHER_ICON_Y_GAP + 30 + 10;

export default ({ points, isToday }: any) => {
  const [lines] = useLine(points);

  return (
    <Container>
      <Svg
        viewBox={`0 0 ${
          points.length * WEATHER_CHART_PER_WIDTH
        } ${WEATHER_CHART_CONTAINER_HEIGHT}`}
        style={{ width: points.length * WEATHER_CHART_PER_WIDTH }}
      >
        {lines.map(({ x1, x2, y1, y2 }: any, index: number) => (
          <GraphLine
            x1={x1 + X_GAP}
            x2={x2 + X_GAP}
            y1={y1 + Y_GAP}
            y2={y2 + Y_GAP}
            key={index}
          />
        ))}

        {points.map(({ x, y, temp, weather, time }: any, index: number) => {
          return (
            <>
              <GraphCircle cx={x + X_GAP} cy={y + Y_GAP} r="4" key={index} />
              <Text x={x - 9 + X_GAP} y={y - 12 + Y_GAP}>
                {temp}°
              </Text>
              <image
                x={x - 17.5 + X_GAP}
                y={WEATHER_ICON_Y_GAP}
                width={40}
                href={getAssetURL(
                  `../assets/${weather?.icon?.slice?.(0, 2)}.svg`,
                )}
              />
              <Text x={x - 9 + X_GAP} y={y - 12 + Y_GAP}>
                {temp}°
              </Text>
              {index === 0 && isToday ? (
                <g>
                  <ActiveTimeWrap
                    x={x - 24 + X_GAP}
                    y={WEATHER_TIME_Y_GAP}
                    rx="14"
                    ry="14"
                    width="48"
                    height="28"
                  />
                  <ActiveTimeText
                    x={x + X_GAP - 13.5}
                    y={WEATHER_TIME_Y_GAP + 19}
                  >
                    {time}
                  </ActiveTimeText>
                </g>
              ) : (
                <g>
                  <TimeWrap
                    x={x - 24 + X_GAP}
                    y={WEATHER_TIME_Y_GAP}
                    rx="14"
                    ry="14"
                    width="48"
                    height="28"
                  />
                  <TimeText x={x + X_GAP - 13.5} y={WEATHER_TIME_Y_GAP + 19}>
                    {time}
                  </TimeText>
                </g>
              )}
            </>
          );
        })}
      </Svg>
    </Container>
  );
};

const Container = styled.div`
  width: 380px;
  height: ${WEATHER_CHART_CONTAINER_HEIGHT + 20}px;
  overflow-x: scroll;

  /* 스크롤바 설정*/
  &::-webkit-scrollbar {
    width: 17px;
  }

  /* 스크롤바 막대 설정*/
  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #c7c7c7;
    /* 스크롤바 둥글게 설정    */
    border-radius: 10px;

    background-clip: padding-box;
    border: 6px solid transparent;
  }

  /* 스크롤바 뒷 배경 설정*/
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
    margin: 14px 0;
  }
`;

const Svg = styled.svg`
  width: 100%;
`;

const GraphLine = styled.line`
  stroke: #e1e5eb;
  stroke-width: 4;
  stroke-linecap: round;
`;

const GraphCircle = styled.circle`
  fill: #e1e5eb;
`;

const Text = styled.text`
  fill: #444;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  letter-spacing: -0.32px;
  text-align: left;
  color: #444;
`;

const ActiveTimeWrap = styled.rect`
  fill: #444;
`;

const ActiveTimeText = styled.text`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  fill: #fff;
`;

const TimeWrap = styled.rect`
  fill: #fff;
`;

const TimeText = styled.text`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  fill: #444;
`;
