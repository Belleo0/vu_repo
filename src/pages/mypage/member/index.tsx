import React, { useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import getAssetURL from '@utils/getAssetURL';

import MypageLayout from '@layout/MypageLayout';

import LinedInput from '@components/LinedInput';
import Input from '@components/Input';
import Button, { ButtonType } from '@components/Button';
import ImgModal from '@components/ImgModal';
import TextModal from '@components/TextModal';
import useUserInfo from '@hooks/useUserInfo';
import api from '@api';
import FileUpload from '@components/FileUpload';
import useSWR from 'swr';
import MemberSideBar from '@components/MemberSideBar';
import TransactionSpaceBar from '@components/TransactionSpaceBar';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useMySpaceInfo from '@api/useMySpaceInfo';
import MemberSpaceBar from '@components/MemberSpaceBar';

export default () => {
  const userInfo = useUserInfo();
  const navigate = useNavigate();
  const selectedSpaceId = useSelectedSpaceId();

  const {
    data: { info, suppliers },
    isLoading,
    supplierMutate,
  } = useMySpaceInfo(selectedSpaceId);

  return (
    <MypageLayout>
      <Container>
        <Title>조직관리</Title>
        <MemberWrap>
          <SideBarSection>
            <MemberSideBar />
          </SideBarSection>
          <RightSection>
            <MemberSpaceBar
              id={info?.id}
              name={info?.name}
              address={info?.basic_address}
            />
            <MemberListBox>
              <MemberCell>
                <ProfileImage
                  src={getAssetURL('../assets/default-profile.jpeg')}
                />
              </MemberCell>
            </MemberListBox>
          </RightSection>
        </MemberWrap>
      </Container>
    </MypageLayout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px;
`;

const Title = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 40px;
`;

const MemberWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const MemberListBox = styled.div`
  background-color: #fff;
  border-left: 1px solid #e3e3e3;
`;

const SideBarSection = styled.div`
  width: 360px;
`;

const RightSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MemberCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 148px;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
  padding: 0px 40px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;
`;
