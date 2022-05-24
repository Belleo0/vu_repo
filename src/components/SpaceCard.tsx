import api from '@api';
import { setSelectedSpaceInfo } from '@data/space';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import getAssetURL from '@utils/getAssetURL';
import React, { useMemo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import TextModal from './TextModal';

interface ISpaceCard {
  info: any;
  id: number;
  name: string;
  address: string;
  revalidate: () => any;
  isHide: boolean;
  setSelectedIdWithFirstId: any;
}

export default ({
  info,
  id,
  name,
  address,
  revalidate,
  isHide,
  setSelectedIdWithFirstId,
}: ISpaceCard) => {
  const isFieldUser = useIsFieldUser();

  const dispatch = useDispatch();
  const selectedSpaceId = useSelectedSpaceId();

  const [isHideModalOpen, setIsHideModalOpen] = useState<boolean>(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState<boolean>(false);

  const [hideLoading, setIsHideLoading] = useState(false);
  const [removeLoading, setIsRemoveLoading] = useState(false);

  const isActive = useMemo(() => {
    return selectedSpaceId === id;
  }, [selectedSpaceId]);

  const [isOpen, setIsOpen] = useState(false);

  const handleHideSpace = async () => {
    if (hideLoading) return;
    setIsHideLoading(true);
    try {
      await api[isHide ? 'delete' : 'post'](`/field-spaces/${id}/hide`);
    } catch (err) {
      console.log(err);
    } finally {
      revalidate();
      setSelectedIdWithFirstId();
      setIsHideModalOpen(false);
    }
  };

  const handleRemoveSpace = async () => {
    if (removeLoading) return;
    setIsRemoveLoading(true);
    try {
      await api.delete(
        `${isFieldUser ? '/field-spaces' : '/factory-spaces'}/${id}`,
      );
    } catch (err) {
      console.log(err);
    } finally {
      revalidate();
      setSelectedIdWithFirstId();
      setIsRemoveModalOpen(false);
    }
  };

  return (
    <Container isActive={isActive} isOpen={isOpen}>
      <InfoContainer onClick={() => dispatch(setSelectedSpaceInfo(info))}>
        <InfoWrap>
          <Title>{name}</Title>
          <Address>{address}</Address>
        </InfoWrap>
        <Icon
          src={getAssetURL('../assets/ic-arrow-gray.svg')}
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </InfoContainer>
      {isOpen && (
        <ButtonContainer>
          <BottomButton onClick={() => setIsHideModalOpen(true)}>
            {isHide ? '숨김 해제' : '숨김'}
          </BottomButton>
          <BottomButton
            style={{ color: '#ef0000' }}
            onClick={() => setIsRemoveModalOpen(true)}
          >
            삭제
          </BottomButton>
        </ButtonContainer>
      )}
      <TextModal
        open={isHideModalOpen}
        onClose={() => setIsHideModalOpen(false)}
        onSubmit={handleHideSpace}
        content={
          isHide
            ? `건설현장을 숨김해제 하실 경우\n언제든지 다시 숨김처리 하실 수 있습니다.`
            : `건설현장을 숨김 처리할 경우\n언제든지 다시 숨김해제 하실 수 있습니다.`
        }
      />
      <TextModal
        open={isRemoveModalOpen}
        onClose={() => setIsRemoveModalOpen(false)}
        onSubmit={handleRemoveSpace}
        content={`건설현장을 삭제할 경우 해당 건설현장의\n주문내역 등 거래정보도 함께 삭제됩니다.`}
      />
    </Container>
  );
};

const Container = styled.div<{ isActive: boolean; isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.06);
  background-color: white;

  user-select: none;

  border: solid 1px #258fff;

  margin-bottom: 16px;

  ${({ isOpen }) =>
    isOpen
      ? css`
          min-height: 118px;
        `
      : css`
          min-height: 78px;
        `}

  ${({ isActive }) =>
    isActive
      ? css`
          border-color: #258fff;
        `
      : css`
          border-color: white;
        `}

  &:hover {
    border-color: #258fff;
  }

  transition: border 0.1s linear, min-height 0.05s linear;

  overflow: hidden;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
  margin-bottom: 8px;

  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Address = styled.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #999;

  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 16px;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img<{ isOpen: boolean }>`
  width: 20px;
  height: 20px;
  margin-left: 24px;

  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: rotate(180deg);
        `
      : css`
          transform: rotate(0deg);
        `}
`;

const ButtonContainer = styled.div`
  display: flex;
  border-top: 1px solid #f2f2f2;
`;

const BottomButton = styled.span`
  flex: 1;
  padding: 12px;

  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: center;
  color: #000;

  &:first-of-type {
    border-right: 1px solid #f2f2f2;
  }
`;
