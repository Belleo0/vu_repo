import React, { useState } from 'react';
import styled from '@emotion/styled';
import SearchInput from '@components/SearchInput';
import getAssetURL from '@utils/getAssetURL';
import Button, { ButtonType } from '@components/Button';

export default () => {
  return (
    <AppSection>
      <AppContent>
        <Typography5>CONAZ 서비스를</Typography5>
        <Typography5>앱에서도 사용하세요!</Typography5>
        <ButtonBox>
          <Button
            type={ButtonType.PRIMARY}
            containerStyle={{
              width: 170,
              height: 50,
              borderRadius: '25px',
              marginRight: '20px',
            }}
            icon="ic-apple"
          >
            App Store
          </Button>
          <Button
            type={ButtonType.PRIMARY}
            containerStyle={{
              width: 170,
              height: 50,
              borderRadius: '25px',
            }}
            icon="ic-google-play"
          >
            Play Store
          </Button>
        </ButtonBox>
      </AppContent>
    </AppSection>
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
  margin-top: 10px;
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

const AppSection = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  background-image: url(${getAssetURL('../assets/img/img_appbg.png')});
  background-size: cover;
  background-position: center center;
  color: #fff;
  font-size: 22px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const AppContent = styled.div`
  margin: 110px auto 106px 360px;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 30px;
`;
