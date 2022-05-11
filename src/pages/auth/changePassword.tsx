import React, { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import AuthLayout from '@layout/AuthLayout';
import Input from '@components/Input';
import Button, { ButtonType } from '@components/Button';
import api, { setToken } from '@api';
import { useDispatch } from 'react-redux';
import { me } from '@data/auth';
import { useNavigate } from 'react-router-dom';
import ImgModal from '@components/ImgModal';
import HelperTxt from '@components/HelperTxt';

export default () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isPasswordValidated = useMemo(() => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/; // 비밀번호 정규식
    return regex.test(password);
  }, [password]);

  const isConfirmPasswordValidated = useMemo(() => {
    if (password === confirmPassword) return true;
    else return false;
  }, [password, confirmPassword]);

  const isFormValidated = useMemo(() => {
    return isPasswordValidated && isConfirmPasswordValidated;
  }, [isPasswordValidated, isConfirmPasswordValidated]);

  return (
    <AuthLayout>
      <Container>
        <Title>비밀번호 재설정</Title>
        <Box>
          <Input
            label="새 비밀번호"
            type="password"
            placeholder="영문과 숫자, 특수문자 포함 8자 이상 입력해 주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            containerStyle={{ marginBottom: 34 }}
            errorMessage={
              password === ''
                ? ''
                : isPasswordValidated
                ? ''
                : '영문, 숫자, 특수문자 포함 8자 이상 입력해 주세요'
            }
          />
          <Input
            label="새 비밀번호 확인"
            placeholder="새 비밀번호를 다시 입력해 주세요"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            containerStyle={{ marginBottom: 14 }}
            errorMessage={
              confirmPassword === ''
                ? ''
                : isConfirmPasswordValidated
                ? ''
                : '비밀번호가 일치하지 않습니다'
            }
          />
          <Button
            type={isFormValidated ? ButtonType.PRIMARY : ButtonType.GRAY}
            onClick={() => (isFormValidated ? true : false)}
            containerStyle={{ marginTop: 30 }}
          >
            재설정 완료
          </Button>
        </Box>
      </Container>
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
