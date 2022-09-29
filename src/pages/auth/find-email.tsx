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
import useWindowSize from '@hooks/useWindowSize';
import { mobile } from '@utils/responsive';

export default () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // 현재 가로 화면 사이즈
  const { width } = useWindowSize();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const isFormValidated = useMemo(() => {
    return name && phone;
  }, [name, phone]);

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleSuccessModal = () => {
    setIsSuccessModalOpen(!isSuccessModalOpen);
  };
  const handleErrorModal = () => {
    setIsErrorModalOpen(!isErrorModalOpen);
  };
  const handleSubmit = () => {
    navigate('/auth/login');
  };

  return (
    <AuthLayout>
      <Container>
        <Title style={
          width > 360 ? {} : {display:'none'}
        }>이메일 찾기</Title>
        <Box>
          <HelperTxt
            helperTxt={
              '본인인증 받으신 정보를 입력해 주세요. \n SMS로 이메일 주소를 보내드립니다.'
            }
            containerStyle={
              width > 360 ? { display: 'none'} : { marginBottom: 20 }
            }
          />
          <Input
            label="이름"
            type="text"
            placeholder="이름을 입력해 주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            containerStyle={
              width > 360 ? { marginBottom: 34 } : {marginBottom: 24}}
            // errorMessage={}
            inputStyle={
              width > 360 ? {marginBottom :8} : {marginBottom :0}
            }
            errorMessageStyle={{display:'none'}}
          />
          <Input
            label="휴대폰 번호"
            placeholder="휴대폰 번호를 입력해 주세요 (번호만 입력)"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            containerStyle={{ marginBottom: 14 }}
            // errorMessage={}
          />
          <HelperTxt
            helperTxt={
              '본인인증 받으신 정보를 입력해 주세요. \n SMS로 이메일 주소를 보내드립니다.'
            }
            containerStyle={
              width > 360 ? { marginBottom: 30 } : { display: 'none'}
            }
          />
          <Button
            type={isFormValidated ? ButtonType.PRIMARY : ButtonType.GRAY}
            onClick={isFormValidated ? handleSuccessModal : handleErrorModal}
          >
            SMS로 이메일 주소 전송
          </Button>
        </Box>
      </Container>
      <ImgModal
        open={isSuccessModalOpen}
        onClose={handleSuccessModal}
        title={'전송완료'}
        redContent={'SMS로 가입하신 이메일주소를 발송하였습니다.'}
        imgUrl="../assets/img-check.png"
        submitText={'로그인하기'}
        onSubmit={handleSubmit}
      />
      <ImgModal
        open={isErrorModalOpen}
        onClose={handleErrorModal}
        title={'회원 정보 없음'}
        redContent={'회원가입을 하시면 이용이 가능합니다.'}
        imgUrl="../assets/img-warning.png"
        submitText={'다시 입력하기'}
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
   ${mobile({ maxWidth: '360px' , height: '100%' , padding: '40px 20px' })}
`;
