import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import ServiceCenterLayout from '@layout/ServiceCenterLayout';
import BlackSelect from '@components/BlackSelect';
import Input from '@components/Input';
import FileUpload from '@components/FileUpload';
import getAssetURL from '@utils/getAssetURL';
import Button, { ButtonType } from '@components/Button';
import TextModal from '@components/TextModal';
import ImgModal from '@components/ImgModal';
import Textarea from '@components/Textarea';

const typeOptions = [
  {
    label: '회원정보',
    value: '1',
  },
  { label: '주문', value: '2' },
  { label: '채팅', value: '3' },
  { label: '알림', value: '4' },
];

export default () => {
  const navigate = useNavigate();

  const [inquiryType, setInquiryType] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [isBlocking, setIsBlocking] = useState(false);
  const [isSubmittedForm, setIsSubmittedForm] = useState(false);

  const handleBlocking = () => {
    setIsBlocking(!isBlocking);
  };
  const handleSubmittedForm = () => {
    setIsSubmittedForm(!isSubmittedForm);
    navigate(0);
  };

  return (
    <ServiceCenterLayout>
      <Container>
        <TopList>1:1문의</TopList>
        <InquiryFormWrap>
          <SubTitle>상담유형</SubTitle>
          <BlackSelect
            absoluteStyle={{ border: 'solid 1px #c7c7c7' }}
            placeholder="- - - - - - - - -"
            options={typeOptions}
            value={inquiryType}
            onChange={(v) => setInquiryType(v)}
          />
          <SubTitle>제목</SubTitle>
          <Textarea
            placeholder="제목을 입력해 주세요"
            inputStyle={{ height: 42 }}
            withoutErrorMessage={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <SubTitle>내용</SubTitle>
          <Textarea
            placeholder="내용을 입력해 주세요"
            withoutErrorMessage={true}
            inputStyle={{ height: 200 }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <SubTitle>
            첨부파일<HelpText>(최대 5장까지 등록 가능합니다.)</HelpText>
          </SubTitle>
          <FileUploadWrap>
            <FileUpload
              image={image}
              setImage={setImage}
              buttonStyle={UploadButton}
              icon={'ic-plus'}
            />
          </FileUploadWrap>
          <ButtonBox>
            <Button
              type={ButtonType.GRAY_BLACK}
              containerStyle={{ marginRight: '20px' }}
              onClick={handleBlocking}
            >
              취소
            </Button>
            <Button
              type={ButtonType.PRIMARY}
              onClick={() => setIsSubmittedForm(true)}
            >
              저장
            </Button>
          </ButtonBox>
        </InquiryFormWrap>
      </Container>
      <ImgModal
        open={isBlocking}
        onClose={() => setIsBlocking(false)}
        content={'페이지를 나가시겠습니까?'}
        redContent={
          '지금까지 입력한 정보는 임시저장되어 \n다음에 이어서 입력하실 수 있습니다.'
        }
        submitText="나가기"
        onSubmit={() => navigate(0)}
      />
      <TextModal
        open={isSubmittedForm}
        onClose={() => handleSubmittedForm()}
        submitText={'확인'}
        content={'1:1문의 등록이 완료되었습니다.'}
      />
    </ServiceCenterLayout>
  );
};

const Container = styled.div`
  height: 100%;
  padding: 60px 60px 97px 60px;

  user-select: none;
`;

const TopList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 18px;
  font-weight: bold;
  color: #222;
`;

const InquiryFormWrap = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;

  margin-top: 10px;
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #222;

  margin-top: 30px;
  margin-bottom: 10px;
`;

const HelpText = styled.span`
  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  color: #999;

  margin-left: 4px;
`;

const FileUploadWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: auto;
`;

const UploadButton = {
  width: '120px',
  height: '120px',
  display: 'flex',
  justifyContent: 'center',

  alignItems: 'center',
  margin: '20 0',

  borderRadius: '12px',
  border: 'solid 1px #000',
  backgroundColor: '#fff',
};

const Icon = styled.img`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: flex-end;

  margin-left: auto;
  margin-right: 38px;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 60px;
`;
