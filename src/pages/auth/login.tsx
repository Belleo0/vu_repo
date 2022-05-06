import React, { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import AuthLayout from '@layout/AuthLayout';
import Input from '@components/Input';
import Button, { ButtonType } from '@components/Button';
import api, { setToken } from '@api';
import { useDispatch } from 'react-redux';
import { me } from '@data/auth';
import { useNavigate } from 'react-router-dom';
import Modal from '@components/Modal';

export default () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValidated = useMemo(() => {
    const regex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,10}$/;
    return regex.test(username);
  }, [username]);

  const isFormValidated = useMemo(() => {
    return true;
    return isEmailValidated && password.length > 0;
  }, [isEmailValidated, password]);

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleLogin = async () => {
    try {
      const { data } = await api.post('/auth/login', {
        username,
        password,
      });
      setToken(data);
      dispatch(me());
      navigate('/my-field');
    } catch (err) {
      console.log(err);
      setIsErrorModalOpen(true);
    }
  };

  return (
    <AuthLayout>
      <Container>
        <Title>로그인</Title>
        <Box>
          <Input
            label="이메일"
            type="email"
            placeholder="이메일을 입력해 주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            containerStyle={{ marginBottom: 34 }}
            errorMessage={
              username === ''
                ? ''
                : isEmailValidated
                ? ''
                : '이메일 형식이 올바르지 않습니다.'
            }
          />
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해 주세요"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            containerStyle={{ marginBottom: 50 }}
          />
          <Button
            type={isFormValidated ? ButtonType.PRIMARY : ButtonType.GRAY}
            onClick={() => (isFormValidated ? handleLogin() : null)}
            containerStyle={{ marginBottom: 28 }}
          >
            로그인
          </Button>
          <TextButtonWrap>
            <TextButton>이메일 찾기</TextButton>
            <TextButtonDivider />
            <TextButton>비밀번호 찾기</TextButton>
            <TextButtonDivider />
            <TextButton>회원가입</TextButton>
          </TextButtonWrap>
        </Box>
      </Container>
      <Modal open={isErrorModalOpen} onClose={() => setIsErrorModalOpen(false)}>
        <ModalContainer>
          <ModalText>
            로그인에 실패하였습니다.
            <br />
            계정 정보를 다시 확인해 주세요.
          </ModalText>
          <Button onClick={() => setIsErrorModalOpen(false)}>확인</Button>
        </ModalContainer>
      </Modal>
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

const TextButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TextButton = styled.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  color: #444;
`;

const TextButtonDivider = styled.span`
  display: block;
  width: 1px;
  height: 8px;
  margin: 0px 10px;
  background-color: #e3e3e3;
`;

const ModalContainer = styled.div`
  min-width: 400px;
  padding: 30px 40px;
  border-radius: 20px;
  background-color: #fff;
`;

const ModalText = styled.span`
  display: block;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.32px;
  text-align: center;
  color: #000;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;
