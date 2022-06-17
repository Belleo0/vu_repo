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

export default () => {
  const userInfo = useUserInfo();
  const navigate = useNavigate();

  return (
    <MypageLayout>
      <Container>
        <Title>조직관리</Title>
        <MemberSideBar />
      </Container>
    </MypageLayout>
  );
};

const Container = styled.div`
  width: 650px;
  height: 100%;
  padding: 60px;
`;

const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyInfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyInfoFormBox = styled.div`
  width: 370px;
`;

const ProfileImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
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

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;
`;

const Divider = styled.span`
  display: block;
  width: 100%;
  border-bottom: solid 1px #e3e3e3;
  margin-bottom: 28px;
`;

const ButtonInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 60px;
  margin-bottom: 50px;
`;

const Withdrawal = styled.span`
  width: 51px;
  height: 20px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.28px;
  text-align: left;
  color: #999;
  border-bottom: 1px solid #999;
  cursor: pointer;
`;

const emailInputStyle = {
  backgroundColor: '#f2f2f2',
  borderRadius: '6px',
  '&: focus': {
    backgroundColor: '#ffffff',
  },
};

const emailEditInputStyle = {
  backgroundColor: '#ffffff',
};

const buttonStyle = {
  width: '45%',
  height: '40px',
  fontSize: '14px',
  fontWeight: '500',
  padding: '11px 0',
  marginLeft: '10px',
  marginTop: '5px',
};

const buttonStyle2 = {
  width: '45%',
  height: '40px',
  fontSize: '14px',
  fontWeight: '500',
  padding: '11px 0',
  marginLeft: '10px',
  marginBottom: '20px',
};
