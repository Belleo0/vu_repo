import api from '@api';
import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import { useScroll } from '@hooks/useScroll';
import { convertTime } from '@utils/date';
import getAssetURL from '@utils/getAssetURL';
import { weatherData } from '@utils/weatherData';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import Button, { ButtonType } from './Button';
import Checkbox from './Checkbox';
import OrderAssignmentButton from './OrderAssignmentButton';
import OrderAssignmentModal from './OrderAssignmentModal';
import TextModal from './TextModal';

interface ICalendarModal {
  open: boolean;
  onClose: () => any;
  revalidate: () => any;
  info: any;
  position: {
    x: number;
    y: number;
  };
  weatherInfo: any;
  setIsModalOpened: any;
  setModalPosition: any;
}

export default ({
  open,
  onClose,
  info,
  position,
  revalidate,
  weatherInfo,
  setIsModalOpened,
  setModalPosition,
}: ICalendarModal) => {
  const isFieldUser = useIsFieldUser();

  const { scrollY } = useScroll();

  const [clickedScrollY, setClickedScrollY] = useState(scrollY);
  const [clickedPosition, setClickedPosition] = useState<{
    x: number;
    y: number;
  }>({ x: -1000000, y: -1000000 });
  const [realPosition, setRealPosition] = useState<{
    x: number;
    y: number;
  }>({ x: -1000000, y: -1000000 });

  const [isRemoveModalOpened, setIsRemoveModalOpened] = useState(false);
  const [isRemoveLoading, setIsRemoveLoading] = useState(false);

  const [isEditModalOpened, setIsEditModalOpened] = useState(false);

  const weatherIcon = useMemo(() => {
    const date = moment(info?.date).format('YYYY-MM-DD');

    const data = weatherInfo?.[date];
    const iconType = weatherInfo?.[date]?.weather?.[0]?.icon?.slice?.(0, 2);
    const icon = `../assets/${iconType}.svg`;

    return {
      isAvaildableVisibleWeather: !!data,
      icon,
      data,
    };
  }, [weatherInfo, info]);

  useEffect(() => {
    if (position.x === 0 && position.y === 0) {
      setRealPosition({ x: -1000000, y: -1000000 });
    } else {
      setClickedScrollY(scrollY);
      setRealPosition({ x: position.x - 100, y: position.y });
      setClickedPosition({ x: position.x - 100, y: position.y });
    }
  }, [position]);

  const handleRemoveAssignment = async () => {
    if (isRemoveLoading === false) {
      setIsRemoveLoading(true);
      try {
        await api.delete(`/assignments/${info.id}`);
        setIsRemoveModalOpened(false);
        await revalidate();
        onClose();
      } catch (err) {
        console.log(err);
      } finally {
        setIsRemoveLoading(false);
      }
    }
  };

  useEffect(() => {
    const gap = clickedScrollY - scrollY;
    setRealPosition((prev) => ({ ...prev, y: clickedPosition.y + gap }));
  }, [scrollY]);

  return open && realPosition !== null
    ? ReactDOM.createPortal(
        <Container style={{ top: realPosition.y, left: realPosition.x }}>
          <Header>
            {weatherIcon.isAvaildableVisibleWeather && (
              <>
                <DayIcon src={getAssetURL(weatherIcon.icon)} />
                <DayLabel>
                  {(weatherData as any)?.[weatherIcon?.data?.weather?.[0]?.id]}{' '}
                  <b>{(weatherIcon?.data?.temp?.day / 10).toFixed(1)}°</b>
                </DayLabel>
              </>
            )}

            <XIcon
              src={getAssetURL('../assets/ic-del-02.svg')}
              onClick={onClose}
            />
          </Header>
          <Title>
            {
              info?.estimation?.[isFieldUser ? 'factory_space' : 'field_space']
                ?.name
            }
          </Title>
          <Day>
            {moment(info?.date).format('YYYY년 M월 D일')}{' '}
            {convertTime(info?.start_time)}~{convertTime(info?.end_time)}
          </Day>
          <UserNameWrap>
            <UserNameLabel>영업사원</UserNameLabel>
            <UserNameValue>
              {info?.estimation?.manager_user?.name}
            </UserNameValue>
          </UserNameWrap>
          <Divider />
          <SpecWrap>
            {(info?.specs || []).map((v: any, i: number) => (
              <BoxRow
                key={i}
                style={{
                  marginBottom: (info?.specs || []).length - 1 === i ? 0 : 10,
                }}
              >
                <BoxLabel>{i === 0 ? '발주내역' : ''}</BoxLabel>
                <BoxValue>
                  {v?.value}-{v?.norminal_strength}-{v?.slump}
                </BoxValue>
                <BoxAmount>{v?.quantity?.toLocaleString?.('ko')}m³</BoxAmount>
              </BoxRow>
            ))}
          </SpecWrap>
          {/* <BottomDivider /> */}
          <CheckboxWrap>
            <Checkbox
              value={info?.mulcha}
              onChange={() => null}
              label="물차"
              containerStyle={{ marginRight: 24 }}
            />
            <Checkbox
              value={info?.multal}
              onChange={() => null}
              label="물탈"
              containerStyle={{ marginRight: 24 }}
            />
            <Checkbox
              value={info?.inducer}
              onChange={() => null}
              label="유도제"
              containerStyle={{ marginRight: 24 }}
            />
          </CheckboxWrap>
          <InfoBoxRow>
            <BoxLabel style={{ marginRight: 75 }}>특기사항</BoxLabel>
            <BoxValue>{info?.remark}</BoxValue>
          </InfoBoxRow>
          <BottomDivider />
          <TotalAmountWrap>
            <TotalAmountLabel>총 주문합계</TotalAmountLabel>
            <TotalAmountValue>
              {info?.total?.toLocaleString?.('ko')}m³
            </TotalAmountValue>
          </TotalAmountWrap>
          {/* <ButtonWrap>
            <Button
              type={ButtonType.GRAY_BLACK}
              containerStyle={{ marginRight: 20 }}
              onClick={() => setIsRemoveModalOpened(true)}
            >
              주문 삭제
            </Button>
            <Button
              type={ButtonType.PRIMARY}
              onClick={() => {
                setIsEditModalOpened(true);
                setModalPosition({ x: 0, y: 0 });
              }}
            >
              주문 변경
            </Button>
          </ButtonWrap> */}
          <OrderAssignmentButton
            id={info?.id}
            type={info?.type}
            onModify={() => {
              setIsEditModalOpened(true);
              setModalPosition({ x: 0, y: 0 });
            }}
            onRemove={() => setIsRemoveModalOpened(true)}
            mutate={() => revalidate()}
          />
          <TextModal
            open={isRemoveModalOpened}
            onClose={() => setIsRemoveModalOpened(false)}
            onSubmit={handleRemoveAssignment}
            content="주문을 삭제하시겠습니까?"
          />
          {isEditModalOpened && (
            <OrderAssignmentModal
              isEditModal
              open={isEditModalOpened}
              onClose={() => setIsEditModalOpened(false)}
              name={
                info?.estimation?.[
                  isFieldUser ? 'factory_space' : 'field_space'
                ]?.name || ''
              }
              address={
                info?.estimation?.[
                  isFieldUser ? 'factory_space' : 'field_space'
                ]?.basic_address || ''
              }
              percent={info?.estimation?.percent || 0}
              revalidate={async () => await revalidate()}
              initialInfo={info}
            />
          )}
        </Container>,
        document.getElementById('root') as HTMLElement,
      )
    : null;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 380px;
  margin: 21px 30px 0 0;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 500;
  transition: top 0.1s linear, left 0.1s linear;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const DayIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 8px;
`;

const XIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
  cursor: pointer;
`;

const DayLabel = styled.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #777;
  & > b {
    font-weight: bold;
  }
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.4px;
  text-align: left;
  color: #1f1d1d;
  margin-bottom: 8px;
`;

const Day = styled.span`
  font-size: 15px;
  letter-spacing: -0.3px;
  text-align: left;
  color: #444;
  margin-bottom: 14px;
`;

const UserNameWrap = styled.div`
  display: flex;
  align-items: center;
`;

const UserNameLabel = styled.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #999;
  margin-right: 10px;
`;

const UserNameValue = styled.span`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.3px;
  text-align: left;
  color: #000;
`;

const BoxRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const InfoBoxRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 8px;
`;

const BoxLabel = styled.span`
  min-width: 47px;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #999;
`;

const BoxValue = styled.span`
  min-width: 90px;
  font-size: 14px;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;

const BoxAmount = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: right;
  color: #1f1d1d;
`;

const Divider = styled.div`
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid #c7c7c7;
  margin-bottom: 12px;
`;

const SpecWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BottomDivider = styled(Divider)`
  border-color: #f2f2f2;
  margin-bottom: 14px;
`;

const TotalAmountLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const TotalAmountValue = styled.span`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: right;
  color: #258fff;
`;

const TotalAmountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxWrap = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 16px;
  margin-top: 16px;
`;
