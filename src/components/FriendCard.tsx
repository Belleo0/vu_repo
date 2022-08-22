import api from '@api';
import { setSelectedSpaceInfo } from '@data/space';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import getAssetURL from '@utils/getAssetURL';
import React, { useMemo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

interface ISpaceCard {
  info: any;
  id: number;
  name: string;
  position: string;
  revalidate: () => any;
  isHide: boolean;
  active: boolean;
  onClick: any;
}

export default ({
  info,
  id,
  name,
  active,
  position,
  revalidate,
  isHide,
  onClick,
}: ISpaceCard) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container isActive={active} isOpen={isOpen}>
      <InfoContainer onClick={onClick}>
        <InfoWrap>
          <ProfileImage src={getAssetURL('../assets/default-profile.jpeg')} />
        </InfoWrap>
        <PeopleCountWrap>
          <Title>{name}</Title>
          <Position>{position}</Position>
        </PeopleCountWrap>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div<{
  isActive: boolean;
  isOpen: boolean;
}>`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  width: 100%;
  min-height: 88px;
  border-radius: 12px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.06);
  background-color: white;

  user-select: none;

  border: solid 1px #258fff;

  margin-bottom: 16px;
  justify-content: center;

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
  align-items: center;

  padding: 20px;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;

  margin-right: 4px;

  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Position = styled.div`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #444;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img<{ isOpen: boolean }>`
  width: 22px;
  height: 22px;

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

const PeopleCountWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PeopleCountText = styled.div`
  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  text-align: center;
  color: #000;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;

  margin-right: 14px;
`;
