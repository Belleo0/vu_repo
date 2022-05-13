import React, { useState } from 'react';
import styled from '@emotion/styled';
import SearchInput from '@components/SearchInput';
import getAssetURL from '@utils/getAssetURL';

export default () => {
  return (
    <GuideSection>
      <Typography1>이용가이드</Typography1>
      <Typography2>이용 가이드를 확인하고 사이트를 이용해 보세요!</Typography2>
      <GuideImg src={getAssetURL(`../assets/img/img_guide.png`)} />
    </GuideSection>
  );
};

const Typography1 = styled.div`
  font-size: 28px;
  color: #000;
  line-height: 1.56;
`;

const Typography2 = styled.div`
  font-size: 16px;
  color: #777;
  margin-top: 14px;
  line-height: 1.56;
`;

const Typography3 = styled.div`
  font-size: 22px;
  margin-top: 10px;
  text-align: left;
  color: #258fff;
  line-height: 1.56;
  font-weight: bold;
`;

const Typography4 = styled.div`
  font-size: 18px;
  color: #222;
  margin-top: 12px;
  text-align: left;
  line-height: 1.56;
`;

const Typography5 = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
`;

const GuideSection = styled.div`
  padding: 100px 0;
  background-color: #fafafa;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const GuideImg = styled.img`
  width: 1078px;
  height: 678px;
  margin: 80px auto 0px auto;
`;
