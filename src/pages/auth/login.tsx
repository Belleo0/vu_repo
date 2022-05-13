import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import AuthLayout from '@layout/AuthLayout';
import Input from '@components/Input';
import Button, { ButtonType } from '@components/Button';
import api, { setToken } from '@api';
import { useDispatch } from 'react-redux';
import { clearPrincipal, me } from '@data/auth';
import { useNavigate } from 'react-router-dom';
import TextModal from '@components/TextModal';

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
      await dispatch(me());
      await navigate('/my-field');
    } catch (err) {
      console.log(err);
      setIsErrorModalOpen(true);
    }
  };

  useEffect(() => {
    dispatch(clearPrincipal());
  }, []);

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
            <TextButton onClick={() => navigate('/auth/email')}>
              이메일 찾기
            </TextButton>
            <TextButtonDivider />
            <TextButton onClick={() => navigate('/auth/pw')}>
              비밀번호 찾기
            </TextButton>
            <TextButtonDivider />
            <TextButton onClick={() => navigate('')}>회원가입</TextButton>
          </TextButtonWrap>
        </Box>
      </Container>
      <TextModal
        open={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
        content={`로그인에 실패하였습니다.\n계정 정보를 다시 확인해 주세요.`}
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

const TextButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TextButton = styled.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  color: #444;
  cursor: pointer;
`;

const TextButtonDivider = styled.span`
  display: block;
  width: 1px;
  height: 8px;
  margin: 0px 10px;
  background-color: #e3e3e3;
`;
