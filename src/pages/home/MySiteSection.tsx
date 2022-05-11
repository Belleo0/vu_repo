import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import SearchInput from '@components/SearchInput';
import getAssetURL from '@utils/getAssetURL';
import Button, { ButtonType } from '@components/Button';

export default () => {
  const navigate = useNavigate();

  return (
    <MySiteSection>
      <MySiteContent>
        <TitleBox>
          <Box style={{ paddingRight: '137px' }}>{''}</Box>
          <Box>
            <Typography1>건설현장</Typography1>
            <Typography2>
              건설현장을 등록하고 레미콘 공장을 만나보세요
            </Typography2>
          </Box>
          <Box>
            <MiniSiteAddButton onClick={() => navigate('/my-field')}>
              MY 건설현장
              <Icon src={getAssetURL(`../assets/ic-arrow-right.svg`)} />
            </MiniSiteAddButton>
          </Box>
        </TitleBox>
        <SiteListContainer>
          {/* {list &&
            list.map((item: any) => (
              <MySiteButton key={item.id} onClick={() => navigate(item.path)}>{item.name}</MySiteButton>
            ))} */}
          <MySiteButton>중앙동 일동더마린</MySiteButton>
          <MySiteButton>중앙동 일동더마린</MySiteButton>
          <MySiteButton>중앙동 일동더마린</MySiteButton>
          <MySiteButton>중앙동 일동더마린</MySiteButton>
          <MySiteButton>중앙동 일동더마린</MySiteButton>
          <SiteAddButton>
            <BtnIcon src={getAssetURL(`../assets/ic-plus-blue.svg`)} />
            건설현장 등록하기
          </SiteAddButton>
        </SiteListContainer>
      </MySiteContent>
    </MySiteSection>
  );
};

const MySiteSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 100px;
  background-color: #fff;
`;

const TitleBox = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-content: center;
`;

const Box = styled.div`
  align-content: center;
  margin: auto 0;
`;

const SiteListContainer = styled.div`
  margin: 50px auto 0 auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
`;
const MySiteContent = styled.div`
  width: 1230px;
  margin: auto;
`;
const SiteAddButton = styled.div`
  width: 380px;
  height: 100px;
  border: 2px dashed #c7c7c7;
  border-radius: 6px;
  background-color: #fff;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.2;
  color: #258fff;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  margin: 10px 15px;
`;

const MySiteButton = styled.div`
  width: 380px;
  height: 100px;
  padding: 30px;
  border: 2px solid #e6e6e6;
  border-radius: 6px;
  background-color: #fff;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.2;
  color: #000;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  margin: 10px 15px;
`;

const MiniSiteAddButton = styled.div`
  width: auto;
  height: 36px;
  padding: 30px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 18px;
  border: 1px solid #c7c7c7;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  padding: 8px 8px 8px 15px;
  margin-right: 15px;
`;

const BtnIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;

const Typography1 = styled.div`
  font-size: 28px;
  color: #000;
  line-height: 1.56;
`;

const Typography2 = styled.div`
  font-size: 16px;
  color: #777;
  margin-top: 8px;
  line-height: 1.56;
`;

const Icon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 10px;
`;
