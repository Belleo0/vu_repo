import React, { useState } from 'react';
import styled from '@emotion/styled';
import SearchInput from '@components/SearchInput';
import getAssetURL from '@utils/getAssetURL';

export default () => {
  return (
    <InfoSection>
      <Typography1>레미콘 공장 계약하면 특별한 혜택이 가능!</Typography1>
      <Typography2>건설현장을 등록하고 레미콘 공장을 만나보세요</Typography2>
      <InfoContents>
        <InfoRow>
          <InfoIcon src={getAssetURL(`../assets/img/delivery_img.png`)} />
          <InfoCell>
            <Typography3> 최적의 건설사/레미콘사 등록</Typography3>
            <Typography4>
              건설현장 위치를 기반으로 현장에 적합한 레미콘사의 견적을 제안받고
              직접 거래처 등록에서 주문까지
            </Typography4>
          </InfoCell>
        </InfoRow>
        <Divider />
        <InfoRow>
          <InfoIcon src={getAssetURL(`../assets/img/calender_img.png`)} />
          <InfoCell>
            <Typography3>레미콘 물량배정 시스템 일정 관리</Typography3>
            <Typography4>
              건설사 레미콘사 담당자의 채팅을 통해 레미콘 물량배정 후 현장별
              등록된 일정관리를 캘린더에서
            </Typography4>
          </InfoCell>
        </InfoRow>
        <Divider />
        <InfoRow>
          <InfoIcon src={getAssetURL(`../assets/img/list_img.png`)} />
          <InfoCell>
            <Typography3> 간편한 물량 등록/수정</Typography3>
            <Typography4>
              각 현장의 날씨정보 제공으로 배정된 레미콘물량의 연기와 수정까지
              한번에 가능!
            </Typography4>
          </InfoCell>
        </InfoRow>
      </InfoContents>
    </InfoSection>
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

const InfoSection = styled.div`
  padding-top: 100px;
  background-color: #fafafa;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const InfoContents = styled.div`
  margin: 100px auto;
  padding: 0 40px;
`;

const InfoRow = styled.div`
  display: flex;
`;
const InfoCell = styled.div`
  width: 426px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoIcon = styled.img`
  width: 140px;
  height: 140px;
  margin: 0 50px;
`;

const Divider = styled.span`
  display: block;
  width: 720px;
  height: 1px;
  margin: 50px 0px;
  background-color: #c7c7c7;
`;
