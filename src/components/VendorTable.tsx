import React, { useState } from 'react';
import styled from '@emotion/styled';
import convertDistance from '@utils/convertDistance';
import convertDuration from '@utils/convertDuration';
import { css } from '@emotion/react';
import getAssetURL from '@utils/getAssetURL';
import EstimationStatusValue from './EstimationStatusValue';
import moment from 'moment';
import TextModal from './TextModal';
import api from '@api';
import { useNavigate } from 'react-router-dom';
import SupplySpaceInfoModal from './SupplySpaceInfoModal';
import UserInfoModal from './UserInfoModal';
import EstimationInfoModal from './EstimationInfoModal';

interface IVendorTable {
  data: any[];
  estimations: any[];
  revalidate: any;
}

export default ({ data = [], estimations = [], revalidate }: IVendorTable) => {
  const navigate = useNavigate();

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [estimationInfo, setEstimationInfo] = useState<any>(null);

  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState<boolean>(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const [registerEstimationInfo, setRegisterSpaceInfo] = useState<any>(null);

  const [isAlreadyRegisterModalOpen, setIsAlreadyRegisterModalOpen] =
    useState<boolean>(false);
  const [isNotJoinChatRoomModalOpen, setIsNotJoinChatRoomModalOpen] =
    useState<boolean>(false);
  const [isNotRegisterModalOpen, setIsNotRegisterModalOpen] =
    useState<boolean>(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [selectedSpaceInfo, setSelectedSpaceInfo] = useState(null);
  const [companyName, setCompanyName] = useState(null);

  const [
    isNotRegisterEstimationModalOpen,
    setIsNotRegisterEstimationModalOpen,
  ] = useState<boolean>(false);

  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false);
  const [isEstimationModalOpen, setIsEstimationModalOpen] =
    useState<boolean>(false);

  const selectedEstimation = (id: any) => {
    if (id && estimations) {
      const selectedEstimationInfo = estimations.find((v) => v.id === id);
      console.log('selectedEstimationInfo!!!!!!', selectedEstimationInfo);
      return selectedEstimationInfo;
    }
  };

  const handleClickRadio = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds((prev) => prev.filter((v) => v !== id));
    } else {
      setSelectedIds((prev) => prev.concat(id));
    }
  };

  const handleOrder = (id: number, isChatRoomJoined: number) => {
    if (Boolean(isChatRoomJoined)) {
      navigate('/order', { state: { id } });
    } else {
      setIsNotJoinChatRoomModalOpen(true);
    }
  };

  const handleSubmit = async () => {
    await api.post(`/estimations/${registerEstimationInfo?.id}/register`);
    revalidate();
    setIsRegisterModalOpen(false);
  };

  const handleRemove = async () => {
    await Promise.all(
      selectedIds.map(async (v) => await api.delete(`/estimations/${v}`)),
    );
    await revalidate();
    setSelectedIds([]);
    setIsDeleteModalOpen(false);
  };

  console.log('selectedSpaceInfo', selectedSpaceInfo);
  console.log('data', data);
  console.log('estimationInfo', estimationInfo);

  return (
    <Container>
      <CellWrap>
        <LabelCell style={{ maxWidth: 130 }}>
          <DeleteButton
            disabled={selectedIds.length === 0}
            onClick={
              selectedIds.length === 0
                ? () => null
                : () => setIsDeleteModalOpen(true)
            }
          >
            삭제
          </DeleteButton>
        </LabelCell>
        <LabelCell>레미콘 공장</LabelCell>
        <LabelCell>상태</LabelCell>
        <LabelCell>거리/시간</LabelCell>
        <LabelCell>생산설비</LabelCell>
        <LabelCell>영업사원</LabelCell>
        <LabelCell>단가율</LabelCell>
        <LabelCell>납품사 등록</LabelCell>
        <LabelCell>주문</LabelCell>
      </CellWrap>
      {data.map((v) => (
        <CellWrap key={v?.id}>
          <ValueCell style={{ maxWidth: 130 }}>
            <DeleteRadio
              active={selectedIds.includes(v?.id)}
              onClick={() => handleClickRadio(v?.id)}
            >
              <DeleteIcon
                src={
                  selectedIds.includes(v?.id)
                    ? getAssetURL('../assets/ic-check-only-ic-white.svg')
                    : getAssetURL('../assets/ic-check-only-ic-grey.svg')
                }
              />
            </DeleteRadio>
          </ValueCell>
          <ValueCell style={{ flexDirection: 'column' }}>
            <FactoryCompanyName
              onClick={() => {
                setSelectedSpaceInfo(v);
                setTimeout(() => {
                  setIsInfoModalOpen(true);
                }, 250);
              }}
            >
              {v?.factory_space?.name}
            </FactoryCompanyName>
            <FactoryAddress>{v?.factory_space?.basic_address}</FactoryAddress>
          </ValueCell>
          <ValueCell style={{ flexDirection: 'column' }}>
            <EstimationStatusValue status={v?.status} />
          </ValueCell>
          <ValueCell>
            <Distance>{convertDistance(v?.direction?.distance)}km</Distance>
            <DistanceDivider />
            <Duration>{convertDuration(v?.direction?.duration)}분</Duration>
          </ValueCell>
          <ValueCell>B/P 210m³/h x 2</ValueCell>
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
              {v?.factory_space?.site_user?.name}{' '}
              {v?.factory_space?.site_user?.position}
            </SaleUserName>
          </ValueCell>
          <ValueCell>
            {v.status === 'REQUESTED' ? (
              <RequestedAtWrap>
                <RequestedAtLabel>견적요청 일시</RequestedAtLabel>
                <RequestedAtValue>
                  {moment(v.created_at).format('YYYY.MM.DD')}
                </RequestedAtValue>
              </RequestedAtWrap>
            ) : (
              <PriceRateWrap>
                <PriceRateIcon
                  src={getAssetURL('../assets/ic-price-rate.svg')}
                  onClick={() => {
                    setSelectedSpaceInfo(v);
                    setEstimationInfo(selectedEstimation(v.id));
                    setIsEstimationModalOpen(true);
                  }}
                />
                <PriceRateValue>{v?.percent}%</PriceRateValue>
              </PriceRateWrap>
            )}
          </ValueCell>

          <ValueCell>
            <TotalAmount>
              <SubmitButton
                disabled={v.status === 'REGISTERED' || v.status === 'REQUESTED'}
                onClick={
                  v.status === 'REGISTERED'
                    ? () => setIsAlreadyRegisterModalOpen(true)
                    : v.status === 'REQUESTED'
                    ? () => setIsNotRegisterEstimationModalOpen(true)
                    : () => {
                        setIsRegisterModalOpen(true);
                        setRegisterSpaceInfo(v);
                      }
                }
              >
                {v.status === 'REGISTERED'
                  ? '등록완료'
                  : v.status === 'REQUESTED'
                  ? '등록불가'
                  : '등록하기'}
              </SubmitButton>
            </TotalAmount>
          </ValueCell>
          <ValueCell>
            <OrderButton
              disabled={v.status !== 'REGISTERED'}
              onClick={
                v.status !== 'REGISTERED'
                  ? () => setIsNotRegisterModalOpen(true)
                  : () => handleOrder(v.id, v?.is_chat_room_joined)
              }
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
      <TextModal
        open={isNotRegisterModalOpen}
        onClose={() => setIsNotRegisterModalOpen(false)}
        content={`주문을 진행하려면\n먼저 거래업체로 등록해야 합니다.`}
      />
      <TextModal
        open={isAlreadyRegisterModalOpen}
        onClose={() => setIsAlreadyRegisterModalOpen(false)}
        content={`이미 등록이 완료된 거래업체입니다.`}
      />
      <TextModal
        open={isNotRegisterEstimationModalOpen}
        onClose={() => setIsNotRegisterEstimationModalOpen(false)}
        content={`레미콘사에서 견적이 등록되어야\n레미콘 공장 등록이 가능합니다.`}
      />
      <TextModal
        open={isRegisterModalOpen}
        onSubmit={handleSubmit}
        onClose={() => setIsRegisterModalOpen(false)}
        content={`레미콘 공장을 등록하시겠습니까?`}
        submitText="공장 등록하기"
      />
      <TextModal
        open={isDeleteModalOpen}
        onSubmit={handleRemove}
        onClose={() => setIsDeleteModalOpen(false)}
        content={`납품사를 삭제하시겠습니까?`}
        submitText="삭제"
      />
      <SupplySpaceInfoModal
        open={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        data={selectedSpaceInfo}
      />
      <UserInfoModal
        open={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        data={selectedSpaceInfo}
        companyName={companyName}
      />
      <EstimationInfoModal
        open={isEstimationModalOpen}
        onClose={() => setIsEstimationModalOpen(false)}
        data={selectedSpaceInfo}
        estimation={estimationInfo}
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

const OrderButton = styled.span<{ disabled: boolean }>`
  padding: 8px 27px;
  border-radius: 18px;

  background-color: #fff;

  ${({ disabled }) =>
    disabled
      ? css`
          border: solid 1px #c7c7c7;
          color: #c7c7c7;
        `
      : css`
          border: solid 1px #258fff;
          color: #258fff;
        `}

  font-size: 14px;
  font-weight: 600;

  letter-spacing: -0.28px;
  text-align: center;

  cursor: pointer;
  user-select: none;
`;

const DeleteButton = styled.span<{ disabled: boolean }>`
  padding: 5px 20px;
  border-radius: 6px;
  background-color: #000;

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: #f2f2f2;
          color: #999;
        `
      : css`
          background-color: #000;
          color: #fff;
        `}

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;

  transition: background-color 0.2s ease-in-out;

  cursor: pointer;
  user-select: none;
`;

const DeleteRadio = styled.span<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: #fff;

  ${({ active }) =>
    active
      ? css`
          background-color: #222;
          border: solid 1px #222;
        `
      : css`
          background-color: #fff;
          border: solid 1px #c7c7c7;
        `}

  transition: background-color 0.2s ease-in-out;
`;

const DeleteIcon = styled.img`
  width: 12px;
`;

const PriceRateWrap = styled.div`
  display: flex;
  align-items: center;
`;

const PriceRateIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 7px;
  cursor: pointer;
`;

const PriceRateValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;

const SubmitButton = styled.div<{ disabled: boolean }>`
  width: 100%;
  padding: 8px 15px;
  border-radius: 18px;

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
