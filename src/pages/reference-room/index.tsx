import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import FieldCreateLayout from '@layout/FieldCreateLayout';
import api from '@api';
import _01 from '../../assets/01_img.png';
import _02 from '../../assets/02_img.png';
import _03 from '../../assets/03_img.png';
import _04 from '../../assets/04_img.png';
import _05 from '../../assets/05_img.png';
import ReferenceRoomLayout from '@layout/ReferenceRoomLayout';

export default () => {
  const [item, setItem] = useState('');
  const navigate = useNavigate();

  const nxtStepHandler = (type: string) => {
    setItem(type);
  };

  useEffect(() => {
    if (item?.length > 0) {
      navigate('/reference-room/info', {
        state: {
          select: item,
        },
      });
    }
  }, [item]);

  return (
    <ReferenceRoomLayout>
      <Container>
        <TopListText>업체리스트</TopListText>
        <SubListText>업체선택</SubListText>
        <ContentCardWrap>
          <ContentCard
            onClick={(e) => {
              nxtStepHandler('레미콘');
            }}
          >
            <CardLeftWrap>
              <CardTitleKR>레미콘</CardTitleKR>
              <CardTitleEN>
                Ready - mix
                <br />
                Concrete
              </CardTitleEN>
            </CardLeftWrap>
            <CardImage src={_01} />
          </ContentCard>
          <ContentCard
            onClick={(e) => {
              nxtStepHandler('아스콘');
            }}
          >
            <CardLeftWrap>
              <CardTitleKR>아스콘</CardTitleKR>
              <CardTitleEN>Asphalt Concrete</CardTitleEN>
            </CardLeftWrap>
            <CardImage src={_02} />
          </ContentCard>
          <ContentCard
            onClick={(e) => {
              nxtStepHandler('파일');
            }}
          >
            <CardLeftWrap>
              <CardTitleKR>파일</CardTitleKR>
              <CardTitleEN>PHC Piles</CardTitleEN>
            </CardLeftWrap>
            <CardImage src={_03} />
          </ContentCard>
          <ContentCard
            onClick={(e) => {
              nxtStepHandler('골재');
            }}
          >
            <CardLeftWrap>
              <CardTitleKR>골재</CardTitleKR>
              <CardTitleEN>
                Aggregate
                <br />
                and Stone
              </CardTitleEN>
            </CardLeftWrap>
            <CardImage src={_04} />
          </ContentCard>
          <ContentCard
            onClick={(e) => {
              nxtStepHandler('펌프카');
            }}
          >
            <CardLeftWrap>
              <CardTitleKR>펌프카</CardTitleKR>
              <CardTitleEN>Concrete pump cars</CardTitleEN>
            </CardLeftWrap>
            <CardImage src={_05} />
          </ContentCard>
        </ContentCardWrap>
      </Container>
    </ReferenceRoomLayout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 60px 255px 60px;

  user-select: none;
`;

const TopListText = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #222;
`;

const SubListText = styled.div`
  margin-top: 40px;

  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #444;
`;

const ContentCardWrap = styled.div`
  /* width: 1420px; */
  /* height: 420px; */
  display: flex;
  margin-top: 24px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const ContentCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 460px;
  height: 200px;

  margin-right: 20px;
  margin-bottom: 20px;
  border: 2px solid #fff;
  border-radius: 12px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
  cursor: pointer;

  &:hover {
    border: 2px solid #258fff;
  }
`;

const CardLeftWrap = styled.div``;

const CardTitleKR = styled.div`
  width: 54px;
  height: 29px;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  color: #000;
`;

const CardTitleEN = styled.div`
  width: 83px;
  height: 46px;
  font-size: 16px;
  font-weight: normal;
  text-align: left;
`;

const CardImage = styled.img`
  width: 226px;
  height: 140px;
  object-fit: contain;
`;
