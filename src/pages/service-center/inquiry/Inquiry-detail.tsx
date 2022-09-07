import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '@api';
import getAssetUrl from '@utils/getAssetURL';
import ServiceCenterLayout from '@layout/ServiceCenterLayout';
import { temp_data } from '../test';
import Button, { ButtonType } from '@components/Button';
import getAssetURL from '@utils/getAssetURL';
import useQuestionsInfo from '@api/useQuestionsInfo';

interface LocationState {
  questionId: number
}

export default () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState<number>(1);
  console.log(currentPage);

  const question_data = location.state as LocationState;
  const { questionId } = question_data;
  const { data: qustion_list = [] } = useQuestionsInfo(questionId.toString());
  console.log(qustion_list);
  
  useEffect(() => {
    setCurrentPage(questionId);
  }, []);

  return (
    <ServiceCenterLayout>
      <Container>
        <TopList>1:1문의</TopList>
        <TitleWrap>
          <Title>휴대폰 인증이 안되는 이유와 해결방법은 무엇인가요?</Title>
          <TitleRightWrap>
            <PublishedDate>2022.05.25</PublishedDate>
            <Button
              type={ButtonType.OUTLINE}
              containerStyle={ButtonStyle}
              onClick={() => navigate('/service-center/inquiry')}
            >
              목록으로
            </Button>
          </TitleRightWrap>
        </TitleWrap>
        <ContentWrap>
          <Content>휴대폰 인증이 되지 않습니다. 해결방안 부탁드립니다.</Content>
          <ImageListWrap>
            <ImageContent src={getAssetURL('../assets/img/img_inquiry.png')} />
            <ImageContent
              src={getAssetURL('../assets/img/img_inquiry_2.png')}
            />
            <ImageContent
              src={getAssetURL('../assets/img/img_inquiry_3.png')}
            />
          </ImageListWrap>
          <AnswerBox>
            안녕하세요. 코나즈입니다. 이미 인증된 정보가 있는 경우, 휴대폰
            인증단계에서 ‘이미 콘박스에 가입되어 있는 휴대폰 번호입니다’라는
            안내가 보인다면, 해당 명의자의 정보로 인증된 다른 계정이 존재한다는
            의미입니다. 더욱 편리하고 안정적인 서비스 제공을 위해
            노력하겠습니다. 감사합니다.
          </AnswerBox>
        </ContentWrap>
      </Container>
    </ServiceCenterLayout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 60px 97px 60px;

  user-select: none;
`;

const TopList = styled.div`
  width: 1420px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 31px;

  font-size: 18px;
  font-weight: bold;
  color: #222;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  height: 72px;
  border-bottom: 1px solid #c7c7c7;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: center;
  color: #222;

  padding-left: 40px;
`;

const TitleRightWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
`;

const PublishedDate = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #777;
  letter-spacing: -0.28px;
  margin-right: 30px;
`;

const ButtonStyle = {
  width: 96,
  height: 42,
  fontSize: '14px',
  fontWeight: '500',
};

const ContentWrap = styled.div`
  background-color: #fff;
  padding: 40px;
  line-height: 1.73;
`;

const Content = styled.div`
  font-size: 15px;
  font-weight: normal;
  line-height: 1.73;
  letter-spacing: -0.3px;
  text-align: left;
  color: #222;
`;

const ImageListWrap = styled.div`
  display: flex;
`;

const ImageContent = styled.img`
  width: 120px;
  height: 120px;

  margin: 30px 20px 50px 0;

  border-radius: 12px;
  background-color: #eff7ff;
`;

const AnswerBox = styled.div`
  padding: 30px 180px 30px 30px;
  background-color: #f2f2f2;

  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: -0.3px;
  text-align: left;
  color: #222;

  margin-bottom: 110px;
`;
