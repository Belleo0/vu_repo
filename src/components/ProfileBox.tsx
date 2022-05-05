import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import React from 'react';

interface IProfileBox {
  companyName: string;
  name: string;
  role: string;
}

export default ({ companyName, name, role }: IProfileBox) => {
  return (
    <ProfileBox>
      <ProfileImage src={getAssetURL('../assets/default-profile.jpeg')} />
      <ProfileInfoWrap>
        <CompanyName>{companyName}</CompanyName>
        <NameRoleWrap>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </NameRoleWrap>
      </ProfileInfoWrap>
    </ProfileBox>
  );
};

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 30px;
  border-bottom: 4px solid #f2f2f2;
`;

const ProfileImage = styled.img`
  width: 68px;
  height: 68px;
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
  font-size: 13px;
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
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: left;
  color: #000;
`;

const Role = styled.span`
  display: block;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #444;
  margin-left: 4px;
`;
