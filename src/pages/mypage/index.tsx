import React, { useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import getAssetURL from '@utils/getAssetURL';

import MypageLayout from '@layout/MypageLayout';

import LinedInput from '@components/LinedInput';
import Input from '@components/Input';
import Button, { ButtonType } from '@components/Button';
import ImgModal from '@components/ImgModal';
import TextModal from '@components/TextModal';
import useUserInfo from '@hooks/useUserInfo';
import api from '@api';

export default () => {
  const userInfo = useUserInfo();
  const navigate = useNavigate();

  let initialState = {
    name: userInfo ? userInfo.name : '',
    email: userInfo ? userInfo.signname : '',
    companyName: userInfo ? userInfo.company.name : '',
    position: userInfo ? userInfo.position : '',
    department: userInfo ? userInfo.department : '',
    tel: userInfo ? userInfo.tel : '',
    password: userInfo ? userInfo.password : '',
    phone: userInfo ? userInfo.phone : '',
  };

  const [userData, setUserData] = useState(initialState);

  const [email, setEmail] = useState(initialState.email);
  const [password, setPassword] = useState(initialState.password);
  const [phone, setPhone] = useState(initialState.phone);
  const [verifyEmailCode, setVerifyEmailCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneVerificationNumber, setPhoneVerificationNumber] = useState('');

  const { name, companyName, position, department, tel } = userData;

  //modal
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isSuccessEmailModalOpen, setIsSuccessEmailModalOpen] = useState(false);
  const [isConfirmedEmail, setIsConfirmedEmail] = useState(false);
  const [isErrorEmailModalOpen, setIsErrorEmailModalOpen] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isSMS, setIsSMS] = useState(false);
  const [isSMSConfirm, setIsSMSConfirm] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isWithdrawal, setIsWithdrawal] = useState(false);
  const [isSubmittedForm, setIsSubmittedForm] = useState(false);

  //validation
  const isEmailValidated = useMemo(() => {
    const regex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,10}$/;
    return regex.test(email);
  }, [email]);

  const isPasswordValidated = useMemo(() => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/; // 비밀번호 정규식
    return regex.test(newPassword);
  }, [newPassword]);

  const isConfirmPasswordValidated = useMemo(() => {
    if (newPassword === confirmPassword) return true;
    else return false;
  }, [newPassword, confirmPassword]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePassword = () => {
    setIsPassword(!isPassword);
  };

  const handleWithdrawalModal = () => {
    setIsWithdrawal(!isWithdrawal);
  };

  //api
  const handleRequestEmail = async () => {
    try {
      const { data } = await api.post('/verifications/email', {
        email: email,
      });
      if (data?.result === true) {
        setIsEmailModalOpen(true);
        setIsEmail(true);
      }
    } catch (error) {
      setIsErrorEmailModalOpen(true);
    }
  };

  const handleVerifyEmail = async () => {
    try {
      const { data } = await api.post('/verifications/email/verify', {
        email: email,
        key: verifyEmailCode,
      });
      if (data?.result === true) {
        setIsSuccessEmailModalOpen(true);
        setIsConfirmedEmail(true);
        setIsEmail(false);
      }
    } catch (error) {
      setIsErrorEmailModalOpen(true);
    }
  };

  const handleRequestPhone = async () => {
    try {
      const tempPh = phone.replace(/-/g, '');
      const { data } = await api.post('/verifications/phone', {
        phone: tempPh,
      });
      if (data?.result) {
        setIsSMS(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePhoneVerifyCode = async () => {
    try {
      const tempPh = phone.replace(/-/g, '');
      const { data } = await api.post('/verifications/phone/verify', {
        phone: tempPh,
        key: phoneVerificationNumber,
      });
      if (data?.result) {
        window.alert('인증성공!');
        setIsSMSConfirm(true);
        setIsSMS(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async () => {
    try {
      await api.put('/auth/login', {
        ...userData,
        signname: email,
        password: newPassword,
        phone: phone,
      });
      setIsSubmittedForm(true);
      navigate('/mypage');
    } catch (error) {
      window.alert('저장 실패');
    }
  };

  return (
    <MypageLayout>
      <Container>
        <Title>회원정보 수정</Title>
        <MyInfoSection>
          <MyInfoWrapper>
            <ProfileImageBox>
              <ProfileImage
                src={getAssetURL('../assets/default-profile.jpeg')}
              />
              <EditButton>이미지 수정</EditButton>
            </ProfileImageBox>
            <MyInfoFormBox>
              <LinedInput
                label="이름"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
              {!isEmail && (
                <ButtonInputBox>
                  <Input
                    label="이메일"
                    redStar="*"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    containerStyle={{ marginBottom: 5 }}
                    inputStyle={emailInputStyle}
                    errorMessage={
                      email === ''
                        ? ''
                        : isEmailValidated
                        ? ''
                        : '이메일 형식이 올바르지 않습니다.'
                    }
                  />
                  <Button
                    type={
                      isEmailValidated
                        ? ButtonType.BLACK_WHITE
                        : ButtonType.GRAY
                    }
                    onClick={handleRequestEmail}
                    containerStyle={buttonStyle}
                  >
                    이메일 변경
                  </Button>
                </ButtonInputBox>
              )}
              {isEmail && (
                <ButtonInputBox>
                  <Input
                    label="이메일"
                    redStar="*"
                    type="email"
                    name="verifyEmailCode"
                    value={verifyEmailCode}
                    placeholder={'인증번호를 입력해 주세요.'}
                    onChange={(e) => setVerifyEmailCode(e.target.value)}
                    inputStyle={{
                      backgroundColor: '#fff',
                      borderRadius: '6px',
                    }}
                  />
                  <Button
                    type={
                      isConfirmedEmail
                        ? ButtonType.GRAY
                        : ButtonType.BLACK_WHITE
                    }
                    onClick={handleVerifyEmail}
                    containerStyle={buttonStyle}
                  >
                    {isConfirmedEmail ? '인증완료' : '이메일 변경'}
                  </Button>
                </ButtonInputBox>
              )}
              <Divider />
              <LinedInput
                label="회사명"
                type="text"
                name="companyName"
                value={companyName}
                onChange={handleChange}
              />
              <LinedInput
                label="직위/직급"
                type="text"
                name="position"
                value={position}
                onChange={handleChange}
              />
              <LinedInput
                label="부서(선택)"
                type="text"
                name="department"
                value={department}
                onChange={handleChange}
              />
              <LinedInput
                label="사내번호"
                type="text"
                name="tel"
                value={tel}
                onChange={handleChange}
              />
              {!isPassword && (
                <ButtonInputBox>
                  <Input
                    label="비밀번호"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    inputStyle={{
                      backgroundColor: '#f2f2f2',
                      borderRadius: '6px',
                    }}
                  />
                  <Button
                    type={ButtonType.BLACK_WHITE}
                    containerStyle={buttonStyle}
                    onClick={handlePassword}
                  >
                    비밀번호 변경
                  </Button>
                </ButtonInputBox>
              )}
              {isPassword && (
                <>
                  <Input
                    label="현재 비밀번호"
                    redStar="*"
                    type="password"
                    placeholder="비밀번호를 입력해 주세요"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Divider />
                  <Input
                    label="새 비밀번호"
                    redStar="*"
                    type="password"
                    name="newPassword"
                    placeholder="영문과 숫자, 특수문자 포함 8자 이상 입력해 주세요"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    containerStyle={{ marginBottom: 5 }}
                    errorMessage={
                      newPassword === ''
                        ? ''
                        : isPasswordValidated
                        ? ''
                        : '영문, 숫자, 특수문자 포함 8자 이상 입력해 주세요'
                    }
                  />
                  <Divider />
                  <Input
                    label="새 비밀번호 확인"
                    redStar="*"
                    type="password"
                    name="passwordConfirm"
                    placeholder="새 비밀번호를 다시 입력해 주세요"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    containerStyle={{ marginBottom: 5 }}
                    errorMessage={
                      confirmPassword === ''
                        ? ''
                        : isConfirmPasswordValidated
                        ? ''
                        : '비밀번호가 일치하지 않습니다'
                    }
                  />
                </>
              )}
              <Divider />
              {!isSMS && (
                <ButtonInputBox>
                  <Input
                    label="휴대폰번호"
                    redStar="*"
                    type="text"
                    name="phone"
                    placeholder="'-' 입력 제외(번호만 입력해 주세요)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    inputStyle={{
                      backgroundColor: '#f2f2f2',
                      borderRadius: '6px',
                    }}
                  />
                  <Button
                    type={ButtonType.BLACK_WHITE}
                    containerStyle={buttonStyle}
                    onClick={handleRequestPhone}
                  >
                    휴대폰번호 변경
                  </Button>
                </ButtonInputBox>
              )}
              {isSMS && (
                <ButtonInputBox>
                  <Input
                    label="휴대폰번호"
                    redStar="*"
                    type="text"
                    name="verificationNumber"
                    placeholder="인증번호 6자리 입력"
                    value={phoneVerificationNumber}
                    onChange={(e) => setPhoneVerificationNumber(e.target.value)}
                    inputStyle={{
                      backgroundColor: '#fff',
                      borderRadius: '6px',
                    }}
                  />
                  <Button
                    type={
                      isSMSConfirm ? ButtonType.GRAY : ButtonType.BLACK_WHITE
                    }
                    containerStyle={buttonStyle}
                    onClick={handlePhoneVerifyCode}
                  >
                    {isSMSConfirm ? '인증 완료' : '인증번호 전송'}
                  </Button>
                </ButtonInputBox>
              )}
            </MyInfoFormBox>
          </MyInfoWrapper>
          <ButtonBox>
            <Button
              type={ButtonType.GRAY_BLACK}
              containerStyle={{ marginRight: '20px' }}
            >
              취소
            </Button>
            <Button type={ButtonType.PRIMARY} onClick={handleEdit}>
              확인
            </Button>
          </ButtonBox>
          <Withdrawal onClick={handleWithdrawalModal}>회원탈퇴</Withdrawal>
        </MyInfoSection>
      </Container>
      <ImgModal
        open={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        email={email}
        content={' 으로 \n 이메일 인증 링크가 발송되었어요.'}
        redContent={'메일을 받지 못하셨다면 스팸 폴더를 확인해주세요.'}
        imgUrl="../assets/img-email.png"
      />
      <TextModal
        open={isErrorEmailModalOpen}
        onClose={() => setIsErrorEmailModalOpen(false)}
        submitText={'확인'}
        content={'이미 가입한 회원입니다.'}
      />
      <TextModal
        open={isSuccessEmailModalOpen}
        onClose={() => setIsSuccessEmailModalOpen(false)}
        submitText={'확인'}
        content={'인증에 성공하였습니다.'}
      />
      <TextModal
        open={isSubmittedForm}
        onClose={() => setIsSubmittedForm(false)}
        submitText={'확인'}
        content={'저장이 완료되었습니다.'}
      />
      <TextModal
        open={isWithdrawal}
        onClose={() => setIsWithdrawal(false)}
        submitText="탈퇴하기"
        content={'정말 탈퇴하시겠습니까? \n 탈퇴 후 되돌릴 수 없습니다.'}
        onSubmit={() => setIsWithdrawal(false)}
      />
    </MypageLayout>
  );
};

const Container = styled.div`
  width: 650px;
  height: 100%;
  padding: 60px;
`;

const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyInfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyInfoFormBox = styled.div`
  width: 370px;
`;

const ProfileImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
`;

const Title = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 40px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;
`;

const Divider = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  margin-bottom: 20px;
  background-color: #e3e3e3;
`;

const ButtonInputBox = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const EditButton = styled.span`
  width: 84px;
  height: 36px;
  font-size: 13px;
  padding: 9px 0;
  margin: 14px 0;
  border-radius: 6px;
  border: solid 1px #000;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
  letter-spacing: -0.26px;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 60px;
  margin-bottom: 50px;
`;

const Withdrawal = styled.span`
  width: 51px;
  height: 20px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.28px;
  text-align: left;
  color: #999;
  border-bottom: 1px solid #999;
  cursor: pointer;
`;

const emailInputStyle = {
  backgroundColor: '#f2f2f2',
  borderRadius: '6px',
  '&: focus': {
    backgroundColor: '#ffffff',
  },
};

const buttonStyle = {
  width: '45%',
  height: '40px',
  fontSize: '14px',
  fontWeight: '500',
  padding: '11px 0',
  marginLeft: '10px',
  marginTop: '5px',
};
