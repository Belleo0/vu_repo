import React, { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import convertDistance from '@utils/convertDistance';
import convertDuration from '@utils/convertDuration';
import api from '@api';
import { css } from '@emotion/react';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

interface IVendorTable {
  data: any[];
  revalidate: any;
}

export default ({ data: propData = [], revalidate }: IVendorTable) => {
  const navigate = useNavigate();

  const [isHideView, setIsHideView] = useState(false);

  const data = useMemo(() => {
    return propData.filter((v) => v?.is_hide === isHideView);
  }, [propData, isHideView]);

  const hideCount = useMemo(() => {
    return propData.filter((v) => v?.is_hide).length;
  }, [propData]);
  const notHideCount = useMemo(() => {
    return propData.filter((v) => !v?.is_hide).length;
  }, [propData]);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const [loading, setLoading] = useState(false);

  const handleClickAll = async () => {
    if (loading) return;
    try {
      setLoading(true);
      if (selectedIds.length === data.length) {
        setSelectedIds([]);
      } else {
        setSelectedIds(data.map((v) => v.id));
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleHide = async () => {
    if (loading) return;
    try {
      setLoading(true);
      await Promise.all(
        selectedIds.map(
          async (v) =>
            await api[isHideView ? 'delete' : 'post'](`/estimations/${v}/hide`),
        ),
      );
      await revalidate();
      setSelectedIds([]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async () => {
    if (loading) return;
    try {
      setLoading(true);
      await Promise.all(
        selectedIds.map(async (v) => await api.delete(`/estimations/${v}`)),
      );
      await revalidate();
      setSelectedIds([]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
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
      // setIsNotJoinChatRoomModalOpen(true);
    }
  };

  return (
    <>
      <TopWrap>
        <TopMenu
          active={isHideView === false}
          onClick={() => setIsHideView(false)}
        >
          거래 현장 ({notHideCount})
        </TopMenu>
        <TopMenu
          active={isHideView === true}
          onClick={() => setIsHideView(true)}
        >
          숨김 거래 현장 ({hideCount})
        </TopMenu>
      </TopWrap>
      <Container>
        <CellWrap>
          <LabelCell style={{ maxWidth: 130, minWidth: 130 }}>
            <DeleteButton
              disabled={selectedIds.length !== data.length || data.length === 0}
              onClick={handleClickAll}
            >
              전체
            </DeleteButton>
          </LabelCell>
          <LabelCell>건설현장</LabelCell>
          <LabelCell>발주처(건설사)</LabelCell>
          <LabelCell>공사기간</LabelCell>
          <LabelCell>계약 담당자</LabelCell>
          <LabelCell>영업 담당자</LabelCell>
          <LabelCell>단가율</LabelCell>
          <LabelCell>누적주문량</LabelCell>
          <LabelCell />
        </CellWrap>
        {data.map((v) => (
          <CellWrap key={v.id}>
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
              <FactoryCompanyName>{v?.field_space?.name}</FactoryCompanyName>
              <FactoryAddress>{v?.field_space?.basic_address}</FactoryAddress>
            </ValueCell>
            <ValueCell>{v?.field_space?.company?.name}</ValueCell>
            <ValueCell>
              <RangeText>
                {moment(v?.field_space?.start_at).format('YYYY.MM')} ~{' '}
                {moment(v?.field_space?.end_at).format('YYYY.MM')}
              </RangeText>
            </ValueCell>
            <ValueCell>
              <SaleUserName>{v?.manager_user?.name}</SaleUserName>
            </ValueCell>
            <ValueCell>
              <SaleUserName>{v?.field_space?.site_user?.name}</SaleUserName>
            </ValueCell>
            <ValueCell>
              <PercentText>{v?.percent}%</PercentText>
            </ValueCell>
            <ValueCell>
              <TotalAmount>2차 범위</TotalAmount>
            </ValueCell>
            <ValueCell>
              <ChatButton
                active={v?.is_chat_room_joined}
                onClick={() =>
                  handleOrder(v?.chat_room_id, v?.is_chat_room_joined)
                }
              >
                <ChatIcon
                  src={getAssetURL(
                    `../assets/ic-chat${
                      v?.is_chat_room_joined ? '' : '-grey'
                    }.svg`,
                  )}
                />
                채팅
              </ChatButton>
            </ValueCell>
          </CellWrap>
        ))}
      </Container>
      <ButtonWrap>
        <DeleteButton
          style={{ marginRight: 10 }}
          disabled={selectedIds.length === 0}
          onClick={selectedIds.length === 0 ? () => null : handleRemove}
        >
          삭제
        </DeleteButton>
        <DeleteButton
          style={isHideView ? { padding: '8px 5px' } : {}}
          disabled={selectedIds.length === 0}
          onClick={selectedIds.length === 0 ? () => null : handleHide}
        >
          {isHideView ? '숨김해제' : '숨김'}
        </DeleteButton>
      </ButtonWrap>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c7c7c7;
  background-color: white;
  margin-bottom: 10px;
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

const DeleteButton = styled.span<{ disabled: boolean }>`
  padding: 8px 20px;
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

const RangeText = styled.span`
  font-size: 15px;
  letter-spacing: -0.3px;
  text-align: left;
  color: #222;
  font-weight: normal;
`;

const PercentText = styled(RangeText)``;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  padding-left: 32px;
`;

const TopWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const TopMenu = styled.span<{ active: boolean }>`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: right;

  ${({ active }) =>
    active
      ? css`
          color: #222;
        `
      : css`
          color: #999;
        `}

  &:not(:last-child) {
    margin-right: 40px;
  }

  cursor: pointer;
  user-select: none;
`;
