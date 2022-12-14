import React, { useState } from 'react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import useIsFieldUser from '@hooks/useIsFieldUser';
import TextModal from './TextModal';
import api from '@api';

interface IOrderSpaceCard {
  draggable?: boolean;
  id: string;
  name?: string;
  address?: string;
  mutate?: any;
  setIsOrderChangeModalOpen?: any;
}

export default ({
  draggable,
  id,
  name,
  address,
  mutate,
  setIsOrderChangeModalOpen,
}: IOrderSpaceCard) => {
  const isFieldUser = useIsFieldUser();

  const [loading, setLoading] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleRemove = async () => {
    if (loading) return;
    if (!id) return;
    try {
      setLoading(true);
      await api.delete(`/factory-spaces/${id}`);
      await mutate();
      setIsRemoveModalOpen(false);
      setIsOrderChangeModalOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <InfoContainer>
        <InfoWrap>
          <Title>{name}</Title>
          <Address>{address}</Address>
        </InfoWrap>
        <IconWrap>
          {isFieldUser ? null : (
            <Icon
              onClick={() => setIsRemoveModalOpen(true)}
              src={getAssetURL('../assets/ic-trash.svg')}
            />
          )}
          <Icon src={getAssetURL('../assets/ic-move.svg')} />
        </IconWrap>
      </InfoContainer>
      <TextModal
        open={isRemoveModalOpen}
        onSubmit={handleRemove}
        onClose={() => setIsRemoveModalOpen(false)}
        content={`해당 공장을 삭제하시겠습니까?\n삭제 시 관련된 현장, 거래, 멤버 및 모든 정보가\n삭제됩니다.`}
        submitText="삭제"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  border-radius: 12px;
  background-color: white;

  user-select: none;

  /* border: solid 1px #258fff; */
  border: solid 1px #e3e3e3;

  margin-bottom: 16px;

  &:hover {
    border-color: #258fff;
  }

  transition: border 0.1s linear, max-height 0.05s linear;

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
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconWrap = styled.div`
  display: flex;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 14px;
`;
