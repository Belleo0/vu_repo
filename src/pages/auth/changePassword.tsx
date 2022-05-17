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

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isPasswordValidated = useMemo(() => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/; // 비밀번호 정규식
    return regex.test(newPassword);
  }, [newPassword]);

  const isConfirmPasswordValidated = useMemo(() => {
    if (newPassword === confirmPassword) return true;
    else return false;
  }, [newPassword, confirmPassword]);

  const isFormValidated = useMemo(() => {
    return isPasswordValidated && isConfirmPasswordValidated;
  }, [isPasswordValidated, isConfirmPasswordValidated]);

  const handlePasswordEdit = async () => {
    try {
      await api.put('/auth/login', {
        password: newPassword,
      });
      window.alert('저장완료');
      navigate('/auth/login');
    } catch (error) {
      window.alert('저장 실패');
    }
  };

  return (
    <AuthLayout>
      <Container>
        <Title>비밀번호 재설정</Title>
        <Box>
          <Input
            label="새 비밀번호"
            type="password"
            placeholder="영문과 숫자, 특수문자 포함 8자 이상 입력해 주세요"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            containerStyle={{ marginBottom: 34 }}
            errorMessage={
              newPassword === ''
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
            onClick={handlePasswordEdit}
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

  min-height: calc(100vh - 80px);

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
