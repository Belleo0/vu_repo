import React, { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import convertDistance from '@utils/convertDistance';
import convertDuration from '@utils/convertDuration';
import { css } from '@emotion/react';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import TextModal from './TextModal';
import { useNavigate } from 'react-router-dom';
import EstimationSubmitModal from './EstimationSubmitModal';
import EstimationFieldInfoModal from './EstimationFieldInfoModal';
import UserInfoModal from './UserInfoModal';
import EstimationInfoModal from './EstimationInfoModal';

interface IVendorTable {
  data: any[];
  revalidate: any;
}

export default ({ data = [], revalidate }: IVendorTable) => {
  const navigate = useNavigate();

  const [estimationInfo, setEstimationInfo] = useState<any>(null);
  const [isNotJoinChatRoomModalOpen, setIsNotJoinChatRoomModalOpen] =
    useState<boolean>(false);

  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [selectedSubmitInfo, setSelectedSubmitInfo] = useState(null);

  const [selectedSpaceInfo, setSelectedSpaceInfo] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false);
  const [isEstimationModalOpen, setIsEstimationModalOpen] =
    useState<boolean>(false);

  const selectedEstimation = (id: any) => {
    if (id && data) {
      const selectedEstimationInfo = data.find((v: any) => v.id === id);
      return selectedEstimationInfo;
    }
  };

  const handleOrder = (id: number, isChatRoomJoined: number) => {
    if (Boolean(isChatRoomJoined)) {
      navigate('/order', { state: { id } });
    } else {
      setIsNotJoinChatRoomModalOpen(true);
    }
  };

  const handleClickSubmitButton = (v: any) => {
    setSelectedSubmitInfo(v);
    setIsSubmitModalOpen(true);
  };

  const sortedDescData = useMemo(() => {
    if (data) {
      const sortedData = data.sort((a: any, b: any) => {
        return b.id - a.id;
      });
      return sortedData;
    }
    return;
  }, [data]);

  return (
    <Container>
      <CellWrap>
        <LabelCell style={{ maxWidth: 120 }}>일자</LabelCell>
        <LabelCell style={{ maxWidth: 180 }}>건설사</LabelCell>
        <LabelCell>건설현장</LabelCell>
        <LabelCell style={{ maxWidth: 180 }}>거리/시간</LabelCell>
        <LabelCell style={{ maxWidth: 120 }}>건설사 담당자</LabelCell>
        <LabelCell style={{ maxWidth: 180 }}>견적</LabelCell>
        <LabelCell style={{ maxWidth: 130 }}>상태</LabelCell>
        <LabelCell style={{ maxWidth: 120 }}>예상물량</LabelCell>
        <LabelCell style={{ maxWidth: 120 }}>레미콘사 담당자</LabelCell>
        <LabelCell style={{ maxWidth: 120 }} />
      </CellWrap>
      {sortedDescData?.map((v: any) => (
        <CellWrap key={v?.id}>
          <ValueCell style={{ maxWidth: 120 }}>
            <DateValue>{moment(v?.created_at).format('YYYY.MM.DD')}</DateValue>
          </ValueCell>
          <ValueCell style={{ flexDirection: 'column', maxWidth: 180 }}>
            <FactoryCompanyName
              onClick={() => {
                setSelectedSpaceInfo(v?.field_space?.company);
                setTimeout(() => {
                  setIsInfoModalOpen(true);
                }, 250);
              }}
            >
              {v?.field_space?.company.name}
            </FactoryCompanyName>
          </ValueCell>
          <ValueCell style={{ flexDirection: 'column' }}>
            <FactoryCompanyName>{v?.field_space?.name}</FactoryCompanyName>
            <FactoryAddress>{v?.field_space?.basic_address}</FactoryAddress>
          </ValueCell>
          <ValueCell style={{ maxWidth: 180 }}>
            <Distance>{convertDistance(v?.direction?.distance)}km</Distance>
            <DistanceDivider />
            <Duration>{convertDuration(v?.direction?.duration)}분</Duration>
          </ValueCell>
          <ValueCell style={{ maxWidth: 120 }}>
            <SaleUserName
              onClick={() => {
                setCompanyName(v?.field_space?.company?.name);
                setSelectedSpaceInfo(v?.field_space?.site_user);
                setTimeout(() => {
                  setIsUserModalOpen(true);
                }, 250);
              }}
            >
              {v?.field_space?.site_user?.name}{' '}
              {v?.field_space?.site_user?.position}
            </SaleUserName>
          </ValueCell>
          <ValueCell style={{ maxWidth: 180 }}>
            {v.status === 'REQUESTED' ? (
              <SubmitButton
                disabled={false}
                onClick={() => handleClickSubmitButton(v)}
              >
                견적제출
              </SubmitButton>
            ) : (
              <TotalAmount>{v?.percent}%</TotalAmount>
            )}
          </ValueCell>
          <ValueCell style={{ maxWidth: 130 }}>
            {['REQUESTED', 'RESPONDED'].includes(v.status) ? (
              <RequestedAtWrap>
                {v.status === 'REQUESTED' ? null : (
                  <PriceRateIcon
                    src={getAssetURL('../assets/ic-price-rate.svg')}
                    onClick={() => {
                      setSelectedSpaceInfo(v);
                      setEstimationInfo(selectedEstimation(v.id));
                      setIsEstimationModalOpen(true);
                    }}
                  />
                )}
                <RequestedAtLabel>
                  견적{v.status === 'REQUESTED' ? '요청 접수' : '제출'}
                </RequestedAtLabel>
                <RequestedAtValue>
                  {moment(v.created_at).format('YYYY.MM.DD')}
                </RequestedAtValue>
              </RequestedAtWrap>
            ) : (
              <RequestedAtWrap>
                <PriceRateIcon
                  src={getAssetURL('../assets/ic-price-rate.svg')}
                  onClick={() => {
                    setSelectedSpaceInfo(v);
                    setEstimationInfo(selectedEstimation(v.id));
                    setIsEstimationModalOpen(true);
                  }}
                />
                <RequestedAtLabel
                  style={{
                    color: '#ff5517',
                    fontSize: 15,
                  }}
                >
                  납품사 등록완료
                </RequestedAtLabel>
                <RequestedAtValue>
                  {moment(v.created_at).format('YYYY.MM.DD')}
                </RequestedAtValue>
              </RequestedAtWrap>
            )}
          </ValueCell>
          <ValueCell style={{ maxWidth: 120 }}>
            <Total>
              {v?.field_space?.field_info?.need_amount?.toLocaleString?.('ko')}
              m³
            </Total>
          </ValueCell>
          {v.status !== 'REQUESTED' ? (
            <ValueCell style={{ flexDirection: 'column', maxWidth: 120 }}>
              <UserName>
                {v?.manager_user?.name} {v?.manager_user?.position}
              </UserName>
              <ChangeButton>변경</ChangeButton>
            </ValueCell>
          ) : (
            <ValueCell style={{ maxWidth: 120 }} />
          )}
          <ValueCell style={{ maxWidth: 120 }}>
            <ChatButton
              active={v?.chat_room_id}
              onClick={() => handleOrder(v?.id, v?.chat_room_id)}
            >
              <ChatIcon
                src={getAssetURL(
                  `../assets/ic-chat${v?.chat_room_id ? '' : '-grey'}.svg`,
                )}
              />
              채팅
            </ChatButton>
          </ValueCell>
        </CellWrap>
      ))}
      <TextModal
        open={isNotJoinChatRoomModalOpen}
        onClose={() => setIsNotJoinChatRoomModalOpen(false)}
        content={`채팅방에 입장하려면 먼저 초대를 받아야 합니다.`}
      />
      <EstimationSubmitModal
        open={isSubmitModalOpen}
        onClose={() => {
          setIsSubmitModalOpen(false);
          setSelectedSubmitInfo(null);
        }}
        data={selectedSubmitInfo}
        revalidate={revalidate}
      />
      <EstimationFieldInfoModal
        open={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        data={selectedSpaceInfo}
      />
      <EstimationInfoModal
        open={isEstimationModalOpen}
        onClose={() => setIsEstimationModalOpen(false)}
        data={selectedSpaceInfo}
        estimation={estimationInfo}
      />
      <UserInfoModal
        open={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        data={selectedSpaceInfo}
        companyName={companyName}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c7c7c7;
  background-color: white;
  margin-bottom: 15px;
`;

const CellWrap = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
`;

const LabelCell = styled.div`
  flex: 1;
  padding: 17px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;
  color: #444;
`;

const ValueCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
  padding: 18px;

  font-size: 15px;
  font-weight: 600;

  letter-spacing: -0.5px;
  text-align: left;
  color: #222;
`;

const FactoryCompanyName = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: center;
  color: #222;
  margin-bottom: 6px;

  cursor: pointer;
`;

const FactoryAddress = styled.span`
  display: block;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: center;
  color: #777;
`;

const Distance = styled.span`
  font-size: 15px;
  font-weight: 600;

  letter-spacing: -0.5px;
  text-align: left;
  color: #000;
`;

const DistanceDivider = styled.span`
  display: block;
  width: 1px;
  height: 10px;
  background-color: #c7c7c7;
  margin: 0px 10px;
`;

const Duration = styled.span`
  font-size: 15px;
  letter-spacing: -0.5px;
  text-align: left;
  color: #000;
`;

const SaleUserName = styled.span`
  display: block;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: center;
  color: #258fff;
  text-decoration: underline;
  cursor: pointer;
  user-select: none;
`;

const TotalAmount = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;

  letter-spacing: -0.36px;
  text-align: left;
  color: #1084ff;
`;

const SubmitButton = styled.div<{ disabled: boolean }>`
  width: 80px;
  padding: 12px 15px;
  border-radius: 20px;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: center;

  cursor: pointer;

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: #f2f2f2;
          color: #222;
        `
      : css`
          background-color: #258fff;
          color: #fff;
        `}
`;

const RequestedAtWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RequestedAtLabel = styled.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #9d9d9d;
  margin-bottom: 8px;
`;

const RequestedAtValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const DateValue = styled.span`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;
  color: #222;
`;

const Total = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const UserName = styled.span`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.3px;
  text-align: center;
  color: #222;
  margin-bottom: 6px;
`;

const ChangeButton = styled.span`
  padding: 6px 14px 6px;
  border-radius: 20px;
  border: solid 1px #c7c7c7;
  background-color: #fff;

  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  text-align: center;
  color: #000;
`;

const ChatButton = styled.span<{ active: boolean }>`
  display: flex;
  align-items: center;

  padding: 8px 15px;
  border-radius: 20px;
  background-color: #fff;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: center;

  cursor: pointer;
  user-select: none;

  ${({ active }) =>
    active
      ? css`
          border: solid 1px #222;
          color: #222;
        `
      : css`
          border: solid 1px #c7c7c7;
          color: #c7c7c7;
        `}
`;

const ChatIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 4px 0 0;
`;

const PriceRateIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 7px;
  cursor: pointer;
`;
