import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import AuthLayout from '@layout/AuthLayout';
import Input from '@components/Input';
import Button, { ButtonType } from '@components/Button';
import api, { setToken } from '@api';
import { useDispatch } from 'react-redux';
import { clearPrincipal, me } from '@data/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import TextModal from '@components/TextModal';
import { mobile } from '@utils/responsive';
import useWindowSize from '@hooks/useWindowSize';

export default () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  // 현재 가로 화면 사이즈
  const { width } = useWindowSize();

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
      await navigate((location?.state as any)?.redirect_to || '/my-space');
    } catch (err) {
      console.log(err);
      setIsErrorModalOpen(true);
    }
  };

  console.log(width);

  useEffect(() => {
    dispatch(clearPrincipal());
  }, []);

  return (
    <AuthLayout>
      <Container>
        <Title style={
          width > 360 ? {} : {display:'none'}
        }>로그인</Title>
        <Box>
          <Input
            label="이메일"
            type="email"
            placeholder="이메일을 입력해 주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            // inline 스타일의 경우
            containerStyle={
              width > 360 ? { marginBottom: 34 } : { marginBottom: 16 }
            }
            errorMessage={
              username === ''
                ? ''
                : isEmailValidated
                ? ''
                : '이메일 형식이 올바르지 않습니다.'
            }
            errorMessageStyle={
              username === ''
                ? {display: 'none'}
                : isEmailValidated
                ? {display: 'none'}
                : {height : 17}
            }
          />
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해 주세요"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            inputStyle={
              width > 360 ? {marginBottom: 8 } : {marginBottom : 0}
            }
            containerStyle={
              width > 360 ? { marginBottom: 50 } : {marginBottom : 22}
            }            
          />
          <Button
            type={isFormValidated ? ButtonType.PRIMARY : ButtonType.GRAY}
            onClick={() => (isFormValidated ? handleLogin() : null)}
            containerStyle={
              width > 360 ? { marginBottom: 28 } : {marginBottom : 12}
            }
          >
            로그인
          </Button>
          <TextButtonWrap>
            <TextButton onClick={() => navigate('/auth/find-email')}>
              이메일 찾기
            </TextButton>
            <TextButtonDivider />
            <TextButton onClick={() => navigate('/auth/find-password')}>
              비밀번호 찾기
            </TextButton>
            <TextButtonDivider />
            <TextButton onClick={() => navigate('/auth/register/step-0')}>
              회원가입
            </TextButton>
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

  /* emotion styled의 경우 */
  ${mobile({ maxWidth: '360px' , height: '100%' , padding: '100px 20px' })}
`;

const TextButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  user-select: none;
`;

const TextButton = styled.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  color: #444;
  cursor: pointer;
  user-select: none;
`;

const TextButtonDivider = styled.span`
  display: block;
  width: 1px;
  height: 8px;
  margin: 0px 10px;
  background-color: #e3e3e3;
`;
