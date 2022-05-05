import React from 'react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';

interface IMember {
  companyName: string;
  name: string;
  role: string;
}

interface IMembers {
  data: IMember[];
}

export default ({ data }: IMembers) => {
  return (
    <Container>
      {data.map((v, i) => (
        <ProfileWrap>
          <ProfileImage src={getAssetURL('../assets/default-profile.jpeg')} />
          <ProfileInfoWrap>
            <CompanyName>{v.companyName}</CompanyName>
            <NameRoleWrap>
              <Name>{v.name}</Name>
              <Role>{v.role}</Role>
            </NameRoleWrap>
          </ProfileInfoWrap>
          <ProfileChatWrap onClick={() => null}>
            <ChatIcon src={getAssetURL('../assets/ic-chat.svg')} />
            <ChatLabel>1:1 채팅</ChatLabel>
          </ProfileChatWrap>
        </ProfileWrap>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: 100%;
  max-height: 360px;
  overflow-y: scroll;
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-bottom: 1px solid #f2f2f2;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;
  margin-right: 14px;
`;

const ProfileInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.span`
  display: block;
  font-size: 12px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #222;
  margin-bottom: 6px;
`;

const NameRoleWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Name = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: left;
  color: #000;
`;

const Role = styled.span`
  display: block;
  font-size: 14px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #444;
  margin-left: 4px;
`;

const ProfileChatWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`;

const ChatIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 4px;
`;

const ChatLabel = styled.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: center;
  color: #444;
`;
