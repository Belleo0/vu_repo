import React, { useState } from 'react';
import styled from '@emotion/styled';
import convertDistance from '@utils/convertDistance';
import convertDuration from '@utils/convertDuration';
import { useNavigate } from 'react-router-dom';
import TextModal from './TextModal';
import UserInfoModal from './UserInfoModal';

interface IVendorTable {
  data: any[];
}

export default ({ data = [] }: IVendorTable) => {
  const navigate = useNavigate();

  const [isNotJoinChatRoomModalOpen, setIsNotJoinChatRoomModalOpen] =
    useState<boolean>(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false);
  const [companyName, setCompanyName] = useState(null);
  const [selectedSpaceInfo, setSelectedSpaceInfo] = useState(null);

  const handleOrder = (id: number, isChatRoomJoined: number) => {
    if (Boolean(isChatRoomJoined)) {
      navigate('/order', { state: { id } });
    } else {
      setIsNotJoinChatRoomModalOpen(true);
    }
  };

  return (
    <Container>
      <CellWrap>
        <LabelCell>레미콘 공장</LabelCell>
        <LabelCell>거리/시간</LabelCell>
        <LabelCell>영업사원</LabelCell>
        <LabelCell>누적주문량</LabelCell>
        <LabelCell />
      </CellWrap>
      {data.map((v) => (
        <CellWrap key={v.id}>
          <ValueCell style={{ flexDirection: 'column' }}>
            <FactoryCompanyName>{v?.factory_space?.name}</FactoryCompanyName>
            <FactoryAddress>{v?.factory_space?.address}</FactoryAddress>
          </ValueCell>
          <ValueCell>
            <Distance>{convertDistance(v?.direction?.distance)}km</Distance>
            <DistanceDivider />
            <Duration>{convertDuration(v?.direction?.duration)}분</Duration>
          </ValueCell>
          <ValueCell>
            <SaleUserName
              onClick={() => {
                setSelectedSpaceInfo(v?.factory_space?.site_user);
                setCompanyName(v?.factory_space?.company?.name);
                setTimeout(() => {
                  setIsUserModalOpen(true);
                }, 250);
              }}
            >
              {v?.factory_space?.site_user?.name}
            </SaleUserName>
          </ValueCell>
          <ValueCell>
            {/* <TotalAmount>{v.total_amount?.toLocaleString('ko')}m³</TotalAmount> */}
            <TotalAmount>2차 범위</TotalAmount>
          </ValueCell>
          <ValueCell>
            <OrderButton
              onClick={() => handleOrder(v?.id, v?.is_chat_room_joined)}
            >
              주문
            </OrderButton>
          </ValueCell>
        </CellWrap>
      ))}
      <TextModal
        open={isNotJoinChatRoomModalOpen}
        onClose={() => setIsNotJoinChatRoomModalOpen(false)}
        content={`채팅방에 입장하려면 먼저 초대를 받아야 합니다.`}
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
`;

const CellWrap = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
`;

const LabelCell = styled.div`
  flex: 1;
  min-width: 180px;
  padding: 17px;

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

  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
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
`;

const FactoryAddress = styled.span`
  display: block;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: center;
  color: #777;
`;

const Distance = styled.span`
  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
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
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const SaleUserName = styled.span`
  display: block;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #258fff;
  text-decoration: underline;
  cursor: pointer;
`;

const TotalAmount = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;

  letter-spacing: -0.36px;
  text-align: left;
  color: #1084ff;
`;

const OrderButton = styled.span`
  padding: 8px 27px;
  border-radius: 18px;
  border: solid 1px #258fff;
  background-color: #fff;

  font-size: 14px;
  font-weight: 600;

  letter-spacing: -0.28px;
  text-align: center;
  color: #258fff;

  cursor: pointer;
`;
