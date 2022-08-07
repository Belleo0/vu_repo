import styled from '@emotion/styled';
import useSelectedSpaceInfo from '@hooks/useSelectedSpaceInfo';
import { pm10Convert, pm2Convert } from '@utils/airConditionConvert';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import { useMemo } from 'react';
import Button, { ButtonType } from './Button';
import Modal from './Modal';
import WeatherChart, {
  WEATHER_CHART_HEIGHT,
  WEATHER_CHART_PER_WIDTH,
} from './WeatherChart';

export default ({ open, onClose, data, spaceInfo }: any) => {
  const isToday = useMemo(() => {
    return moment().isSame(moment(data.dt * 1000), 'day');
  }, [data]);

  const weatherIcon = useMemo(() => {
    const iconType = data?.weather?.[0]?.icon?.slice?.(0, 2);
    const icon = `../assets/${iconType}.svg`;

    return icon;
  }, [data]);

  const airCondition = useMemo(() => {
    const pm2 = pm2Convert(data?.air?.pm2_5);

    const pm10 = pm10Convert(data?.air?.pm10);

    return { pm2, pm10 };
  }, [data]);

  const hourlyData = useMemo(() => {
    const temps: number[] = [];

    const datas = Object.values(data.hourly).map((acc: any) => {
      const date = moment(acc.dt * 1000);
      const temp = Math.round(acc.temp / 10);
      const time = date.format('HH시');
      temps.push(temp);
      return {
        date,
        time,
        temp,
        weather: acc.weather[0],
      };
    });

    const min = Math.min(...temps);
    const max = Math.max(...temps);

    const gap = max - min;

    const filteredData = datas.filter(
      (v) =>
        v.date.unix() >= moment(moment().format('YYYY-MM-DD HH:00:00')).unix(),
    );

    const sortedData = filteredData.sort(
      (a, b) => a.date.unix() - b.date.unix(),
    );

    const withPositionData = sortedData.map((v, i) => {
      const x = i * WEATHER_CHART_PER_WIDTH;
      const y =
        gap !== 0
          ? WEATHER_CHART_HEIGHT -
            WEATHER_CHART_HEIGHT * ((min - v.temp) / gap) * -1
          : WEATHER_CHART_HEIGHT / 2;

      return { ...v, x, y };
    });

    return withPositionData;
  }, [data]);

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <TopSection>
          <CloseIcon
            src={getAssetURL('../assets/ic-del.svg')}
            onClick={onClose}
          />
          <Title>날씨</Title>
        </TopSection>
        <InfoSection>
          <SelectedSpaceName>{spaceInfo?.name}</SelectedSpaceName>
          <AddressWrap>
            <Label>현장주소</Label>
            <AddressValue>{spaceInfo?.basic_address}</AddressValue>
            <Label>현장주소</Label>
          </AddressWrap>
        </InfoSection>
        <Contents>
          <ContentsInfoContainer>
            <ContentsInfoWrap>
              <Date>
                {moment(parseInt(`${data?.dt}000`, 10)).format('MM월 DD일')}
              </Date>
              <WeatherIcon src={getAssetURL(weatherIcon)} />
              <TemperatureWrap>
                <TemperatureMin>
                  {Math.ceil(data?.temp?.min / 10)}°
                </TemperatureMin>
                <TemperatureDivider>/</TemperatureDivider>
                <TemperatureMax>
                  {Math.ceil(data?.temp?.max / 10)}°
                </TemperatureMax>
              </TemperatureWrap>
              <AirContainer>
                <AirWrap>
                  <AirLabel>미세</AirLabel>
                  <AirValue style={{ color: airCondition?.pm10?.color }}>
                    {airCondition?.pm10?.label}
                  </AirValue>
                </AirWrap>
                <AirWrap>
                  <AirLabel>초미세</AirLabel>
                  <AirValue style={{ color: airCondition?.pm2?.color }}>
                    {airCondition?.pm2?.label}
                  </AirValue>
                </AirWrap>
              </AirContainer>
              {hourlyData.length > 0 && (
                <>
                  <Divider />
                  <WeatherChart points={hourlyData} isToday={isToday} />
                </>
              )}
            </ContentsInfoWrap>
          </ContentsInfoContainer>
          <Button type={ButtonType.PRIMARY} onClick={onClose}>
            확인
          </Button>
        </Contents>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 440px;
  background-color: white;
  border-radius: 20px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 24px 30px;
`;

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-left: auto;
  margin-bottom: 6px;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 24px 0px;
  background-color: #f2f2f2;
`;

const SelectedSpaceName = styled.span`
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.44px;
  text-align: center;
  color: #000;
  margin-bottom: 10px;
`;

const AddressWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  &:first-of-type {
    margin-right: 14px;
  }
  &:last-child {
    margin-left: 14px;
    opacity: 0;
  }
`;

const AddressValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 30px;
`;

const ContentsInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 14px;
`;

const ContentsInfoWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const Date = styled.span`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: left;
  color: #258fff;
  margin-bottom: 20px;
`;

const WeatherIcon = styled.img`
  width: 76px;
  height: 76px;
`;

const TemperatureWrap = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const TemperatureMin = styled.span`
  font-size: 22px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #777;
`;

const TemperatureDivider = styled.span`
  font-size: 22px;
  color: #cdcdcd;
  margin: 0 2px;
`;

const TemperatureMax = styled.span`
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.7px;
  text-align: left;
  color: #222;
`;

const AirContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const AirWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

const AirLabel = styled.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #777;
  margin-right: 6px;
`;

const AirValue = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #00b448;
`;

const Divider = styled.span`
  width: 100%;
  height: 1px;
  background-color: #e3e3e3;
  margin-bottom: 20px;
`;
