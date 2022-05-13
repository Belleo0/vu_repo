import React, { useState } from 'react';
import styled from '@emotion/styled';
import SearchInput from '@components/SearchInput';
import getAssetURL from '@utils/getAssetURL';

export default () => {
  return (
    <PartnerSection>
      <Typography1>CON-BOX와 함께하는</Typography1>
      <Typography2>건설현장을 등록하고 레미콘 공장을 만나보세요</Typography2>
      <PartnerImgContainer>
        <PartnerImgBox>
          <PartnerImg src={getAssetURL(`../assets/img/img_Daewoo.png`)} />
          <PartnerImg src={getAssetURL(`../assets/img/img_Hyundai.png`)} />
          <PartnerImg src={getAssetURL(`../assets/img/img_Tongyang.png`)} />
          <PartnerImg src={getAssetURL(`../assets/img/img_GS.png`)} />
        </PartnerImgBox>
        <PartnerImgBox>
          <PartnerImg src={getAssetURL(`../assets/img/img_Tongyang.png`)} />
          <PartnerImg src={getAssetURL(`../assets/img/img_GS.png`)} />
          <PartnerImg src={getAssetURL(`../assets/img/img_Daewoo.png`)} />
          <PartnerImg src={getAssetURL(`../assets/img/img_Hyundai.png`)} />
        </PartnerImgBox>
      </PartnerImgContainer>
    </PartnerSection>
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

const PartnerSection = styled.div`
  padding: 100px 0;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const PartnerImgContainer = styled.div`
  margin: 100px auto 0px;
`;
const PartnerImgBox = styled.div`
  display: flex;
  margin: 30px auto;
`;

const PartnerImg = styled.img`
  width: 300px;
  height: 120px;
`;
