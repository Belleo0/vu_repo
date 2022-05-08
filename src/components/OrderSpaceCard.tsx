import React from 'react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface IOrderSpaceCard {
  draggable?: boolean;
  id: string;
  name?: string;
  address?: string;
}

export default ({ draggable, id, name, address }: IOrderSpaceCard) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Container ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <InfoContainer>
        <InfoWrap>
          <Title>{name}</Title>
          <Address>{address}</Address>
        </InfoWrap>
        <Icon src={getAssetURL('../assets/ic-move.svg')} />
      </InfoContainer>
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

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 24px;
`;
