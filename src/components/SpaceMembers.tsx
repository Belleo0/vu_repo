import React from 'react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import ScrollBox from './ScrollBox';
import useUserInfo from '@hooks/useUserInfo';

interface IMembers {
  data: any[];
}

export default ({ data = [] }: IMembers) => {
  const userInfo = useUserInfo();

  return (
    <Container>
      {data.map((v: any, i: number) => (
        <ProfileWrap key={v.id}>
          <ProfileImage src={getAssetURL('../assets/default-profile.jpeg')} />
          <ProfileInfoWrap>
            <CompanyName>{v?.company?.name}</CompanyName>
            <NameRoleWrap>
              <Name>{v?.name}</Name>
              <Role>{v?.position}</Role>
              {userInfo.id === v.id ? <IsUserCircle>나</IsUserCircle> : null}
            </NameRoleWrap>
          </ProfileInfoWrap>
          {userInfo.id !== v.id ? (
            <ProfileChatWrap onClick={() => null}>
              <ChatIcon src={getAssetURL('../assets/ic-chat.svg')} />
              <ChatLabel>1:1 채팅</ChatLabel>
            </ProfileChatWrap>
          ) : null}
        </ProfileWrap>
      ))}
    </Container>
  );
};

const Container = styled(ScrollBox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: 100%;
  max-height: 360px;
  overflow-y: scroll;
  overflow-y: overlay;
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

const IsUserCircle = styled.div`
  width: 18px;
  height: 18px;
  padding: 4px 4px;

  color: #ffffff;

  font-size: 11px;
  font-weight: 500;
  letter-spacing: -0.22px;

  border-radius: 9px;
  background-color: #000;

  margin-left: 6px;
`;
