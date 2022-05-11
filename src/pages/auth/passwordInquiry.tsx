import React, { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import AuthLayout from '@layout/AuthLayout';
import Input from '@components/Input';
import Button, { ButtonType } from '@components/Button';
import api, { setToken } from '@api';
import { useDispatch } from 'react-redux';
import { me } from '@data/auth';
import { useNavigate } from 'react-router-dom';
import TextModal from '@components/TextModal';
import HelperTxt from '@components/HelperTxt';
import ImgModal from '@components/ImgModal';

export default () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [username, setUsername] = useState('');

  const isEmailValidated = useMemo(() => {
    const regex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,10}$/;
    return regex.test(username);
  }, [username]);

  const isFormValidated = useMemo(() => {
    return isEmailValidated;
  }, [isEmailValidated]);

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleSuccessModal = () => {
    setIsSuccessModalOpen(!isSuccessModalOpen);
  };
  const handleErrorModal = () => {
    setIsErrorModalOpen(!isErrorModalOpen);
  };

  return (
    <AuthLayout>
      <Container>
        <Title>비밀번호 찾기</Title>
        <Box>
          <Input
            label="이메일"
            type="email"
            placeholder="이메일을 입력해 주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            containerStyle={{ marginBottom: 14 }}
            errorMessage={
              username === ''
                ? ''
                : isEmailValidated
                ? ''
                : '이메일 형식이 올바르지 않습니다.'
            }
          />
          <HelperTxt
            helperTxt={
              '가입 시 등록하신 이메일 주소를 입력해 주세요. \n 비밀번호 재설정 링크를 보내드립니다.'
            }
            containerStyle={{ marginBottom: 30 }}
          />
          <Button
            type={isFormValidated ? ButtonType.PRIMARY : ButtonType.GRAY}
            onClick={isFormValidated ? handleSuccessModal : handleErrorModal}
          >
            비밀번호 변경 URL 전송
          </Button>
        </Box>
      </Container>
      <ImgModal
        open={isSuccessModalOpen}
        onClose={handleSuccessModal}
        email={username}
        content={' 으로 \n 비밀번호 재설정 링크가 발송되었어요.'}
        redContent={'메일을 받지 못하셨다면 스팸 폴더를 확인해주세요.'}
        imgUrl="../assets/img-email.png"
      />
      <ImgModal
        open={isErrorModalOpen}
        onClose={handleErrorModal}
        title={'회원 정보 없음'}
        redContent={'회원가입을 하시면 이용이 가능합니다.'}
        imgUrl="../assets/img-check.png"
        submitText={'다시 입력하기'}
      />
    </AuthLayout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.44px;
  text-align: left;
  color: #000;
  margin-bottom: 30px;
`;

const Box = styled.div`
  width: 100%;
  max-width: 440px;
  padding: 50px 30px;
  border-radius: 20px;
  background-color: #fff;
`;
