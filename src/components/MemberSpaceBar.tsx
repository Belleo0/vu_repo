import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import getAssetURL from '@utils/getAssetURL';
import React, { useState } from 'react';
import InviteModal from './InviteModal';

interface ISpaceBar {
  id: number;
  name: string;
  adminUserName: string;
  siteUserName: string;
  address: string;
  setInviteModalOpen: any;
}

export default ({
  id,
  name,
  adminUserName,
  siteUserName,
  address,
  setInviteModalOpen,
}: ISpaceBar) => {
  const isFieldUser = useIsFieldUser();

  return (
    <SpaceBar>
      <Icon src={getAssetURL('../assets/ic-field.svg')} />
      <InfoContainer>
        <InfoRow style={{ marginBottom: 12 }}>
          <SpaceName>{name}</SpaceName>
        </InfoRow>
        {isFieldUser ? (
          <InfoRow>
            <PersonWrap>
              <PersonLabel>구매계약 담당자</PersonLabel>
              <PersonName>{adminUserName}</PersonName>
            </PersonWrap>
            <PersonWrap>
              <PersonLabel>주문담당자(현장)</PersonLabel>
              <PersonName>{siteUserName}</PersonName>
            </PersonWrap>
          </InfoRow>
        ) : (
          <InfoRow>
            <PersonWrap>
              <PersonLabel>공장주소</PersonLabel>
              <PersonName>{address}</PersonName>
            </PersonWrap>
          </InfoRow>
        )}
      </InfoContainer>
      <ButtonWrap>
        <Button onClick={() => setInviteModalOpen(true)}>
          <ButtonIcon src={getAssetURL('../assets/ic-more.svg')} /> 이{' '}
          {isFieldUser ? '현장' : '공장'}에 멤버 초대하기
        </Button>
      </ButtonWrap>
    </SpaceBar>
  );
};

const SpaceBar = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 137px;

  padding: 20px;
  background-color: #fff;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
`;

const Icon = styled.img`
  width: 90px;
  height: 90px;
  margin-right: 30px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: auto;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
`;

const SpaceName = styled.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.4px;
  text-align: left;
  color: #000;
`;

const PersonWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

const PersonLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #999;
  margin-right: 10px;
`;

const PersonName = styled.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: center;
  color: #000;
`;

// const Button = styled.span`
//   padding: 10px 27px;
//   border-radius: 18px;
//   border: solid 1px #c7c7c7;
//   background-color: #fff;
//   cursor: pointer;
//   margin-left: 30px;

//   font-size: 14px;
//   font-weight: 500;
//   letter-spacing: -0.28px;
//   text-align: center;
//   color: #000;
// `;

const ButtonWrap = styled.div``;

const Button = styled.span`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 11px 18px;
  border-radius: 6px;
  border: solid 2px #4490f7;
  background-color: #fff;
  color: #4490f7;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
`;

const ButtonIcon = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 6px;
`;
