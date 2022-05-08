import React from 'react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { css } from '@emotion/react';

interface IOrderSpaceCard {
  name?: string;
  address?: string;
  selected: boolean;
  onClick?: () => any;
}

export default ({ name, address, selected, onClick }: IOrderSpaceCard) => {
  return (
    <Container onClick={onClick} selected={selected}>
      <InfoContainer>
        <InfoWrap>
          <Title>{name}</Title>
          <Address>{address}</Address>
        </InfoWrap>
        <Icon
          src={
            selected
              ? getAssetURL('../assets/ic-check-on.svg')
              : getAssetURL('../assets/ic-check.svg')
          }
        />
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  border-radius: 12px;
  background-color: white;

  user-select: none;

  /* border: solid 1px #258fff; */

  margin-bottom: 16px;

  &:hover {
    border-color: #258fff;
  }

  ${({ selected }) =>
    selected
      ? css`
          border: 1px solid #258fff;
        `
      : css`
          border: 1px solid #e3e3e3;
        `}

  transition: border 0.1s linear, max-height 0.05s linear;

  overflow: hidden;

  user-select: none;
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
