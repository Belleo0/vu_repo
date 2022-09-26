import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import SearchInput from '@components/SearchInput';
import getAssetURL from '@utils/getAssetURL';

export default () => {
  const navigate = useNavigate();

  return (
    <SiteSection>
      <Typography1>건설현장</Typography1>
      <Typography2>건설현장을 등록하고 레미콘 공장을 만나보세요</Typography2>
      <AddBtnContainer>
        <SiteAddButton onClick={() => navigate('/my-space')}>
          <BtnIcon src={getAssetURL(`../assets/ic-plus-blue.svg`)} />
          건설현장등록
        </SiteAddButton>
      </AddBtnContainer>
    </SiteSection>
  );
};

const SiteSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 100px;
  background-color: #fff;
`;

const AddBtnContainer = styled.div`
  margin-top: 50px;
  margin: 0 auto;
`;

const SiteAddButton = styled.div`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23c7c7c7' stroke-width='3' stroke-dasharray='2%2c7' stroke-dashoffset='57' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 6px;
  width: 380px;
  height: 160px;
  background-color: #fff;
  font-size: 18px;
  margin-top: 50px;
  line-height: 1.2;
  color: #258fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const BtnIcon = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 auto 12px auto;
`;

const Typography1 = styled.div`
  font-size: 28px;
  color: #000;
  line-height: 1.56;
`;

const Typography2 = styled.div`
  font-size: 16px;
  color: #777;
  margin-top: 10px;
  line-height: 1.56;
`;
