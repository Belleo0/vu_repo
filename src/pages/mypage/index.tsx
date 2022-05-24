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
import FileUpload from '@components/FileUpload';

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
  const [veryfyPhoneCode, setVeryfyPhoneCode] = useState('');
  const [image, setImage] = useState('');

  const { name, companyName, position, department, tel } = userData;

  const [isEmailEdit, setIsEmailEdit] = useState(false);
  const [isEmailCode, setIsEmailCode] = useState(false);
  const [isEmailDone, setIsEmailDone] = useState(false);
  const [isEmailDoneFail, setIsEmailDoneFail] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isErrorEmailModalOpen, setIsErrorEmailModalOpen] = useState(false);

  const [isPassword, setIsPassword] = useState(false);

  const [isPhoneEdit, setIsPhoneEdit] = useState(false);
  const [isPhoneCode, setIsPhoneCode] = useState(false);
  const [isPhoneDone, setIsPhoneDone] = useState(false);
  const [isPhoneDoneFail, setIsPhoneDoneFail] = useState(false);

  const [isWithdrawal, setIsWithdrawal] = useState(false);
  const [isBlocking, setIsBlocking] = useState(false);
  const [isSubmittedForm, setIsSubmittedForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  //validation
  const isEmailValidated = useMemo(() => {
    const regex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,10}$/;
    return regex.test(email);
  }, [email]);

  const isEmailVerifyCode = useMemo(() => {
    const regex = /^[0-9]/;
    return regex.test(verifyEmailCode);
  }, [verifyEmailCode]);

  const isPasswordValidated = useMemo(() => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/; // 비밀번호 정규식
    return regex.test(newPassword);
  }, [newPassword]);

  const isPhoneValidated = useMemo(() => {
    const regex = /^[0-9]{10,11}$/;
    return regex.test(phone);
  }, [phone]);

  const isPhoneVerifyCode = useMemo(() => {
    const regex = /^[0-9]/;
    return regex.test(veryfyPhoneCode);
  }, [veryfyPhoneCode]);

  const isConfirmPasswordValidated = useMemo(() => {
    if (newPassword.length > 0 && newPassword === confirmPassword) {
      setIsEditing(false);
      return true;
    }
  }, [newPassword, confirmPassword]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //modal&handler
  const handleEmailEdit = () => {
    setIsEmailEdit(true);
  };

  const handlePhoneEdit = () => {
    setIsPhoneEdit(true);
  };

  const handlePassword = () => {
    setIsPassword(!isPassword);
  };

  const handleWithdrawalModal = () => {
    setIsWithdrawal(!isWithdrawal);
  };

  const handleBlocking = () => {
    setIsBlocking(!isBlocking);
  };

  const handleSubmittedForm = () => {
    setIsSubmittedForm(!isSubmittedForm);
    navigate(0);
  };

  //api
  const handleRequestEmailCode = async () => {
    try {
      const { data } = await api.post('/verifications/email', {
        email: email,
      });
      if (data?.result === true) {
        setIsEmailModalOpen(true);
        setIsEmailCode(true);
      }
    } catch (error) {
      setIsErrorEmailModalOpen(true);
    }
  };

  const handleVerifyEmailCode = async () => {
    try {
      const { data } = await api.post('/verifications/email/verify', {
        email: email,
        key: verifyEmailCode,
      });
      if (data?.result === true) {
        setIsEmailDone(true);
        setIsEditing(false);
        window.alert('인증성공!');
      }
    } catch (error) {
      setIsEmailDoneFail(true);
      window.alert('인증실패!');
    }
  };

  const handleRequestPhone = async () => {
    const tempPh = phone.replace(/-/g, '');
    try {
      const { data } = await api.post('/verifications/phone', {
        phone: tempPh,
      });
      if (data?.result === true) {
        setIsPhoneCode(true);
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
        key: veryfyPhoneCode,
      });
      if (data?.result) {
        setIsPhoneDone(true);
        setIsEditing(false);
        window.alert('인증성공!');
      }
    } catch (error) {
      console.log(error);
      setIsPhoneDoneFail(true);
      window.alert('인증실패!');
    }
  };

  const handleEdit = async () => {
    if (email && phone) {
      try {
        await api.put('/auth/login', {
          ...userData,
          signname: email,
          password: confirmPassword,
          phone: phone,
        });
        setIsSubmittedForm(true);
      } catch (error) {
        window.alert('저장 실패');
      }
    } else {
      return window.alert('이메일, 비밀번호, 핸드폰번호를 입력해주세요');
    }
  };

  useEffect(() => {
    if (isEmailCode || isPhoneCode || isPassword) {
      setIsEditing(true);
    }
  }, [isEmailCode, isPhoneCode, isPassword]);

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
              <FileUpload
                label={'이미지수정'}
                image={image}
                setImage={setImage}
              />
            </ProfileImageBox>
            <MyInfoFormBox>
              {/* 이름 */}
              <LinedInput
                label="이름"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                xIcon={false}
              />

              {/* 이메일 */}
              <ButtonInputBox>
                <Input
                  label="이메일"
                  redStar="*"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  containerStyle={{ marginBottom: 5, height: 75 }}
                  inputStyle={
                    isEmailEdit ? emailEditInputStyle : emailInputStyle
                  }
                  errorMessage={
                    email === ''
                      ? ''
                      : isEmailValidated
                      ? ''
                      : '이메일 형식이 올바르지 않습니다.'
                  }
                  disabled={!isEmailEdit}
                />
                <Button
                  type={
                    isEmailValidated ? ButtonType.BLACK_WHITE : ButtonType.GRAY
                  }
                  onClick={
                    isEmailEdit ? handleRequestEmailCode : handleEmailEdit
                  }
                  containerStyle={buttonStyle}
                >
                  {isEmailEdit ? '이메일 인증' : '이메일 변경'}
                </Button>
              </ButtonInputBox>

              {/* 이메일 인증 */}
              {isEmailCode && (
                <ButtonInputBox>
                  <Input
                    type="email"
                    name="verifyEmailCode"
                    value={verifyEmailCode}
                    placeholder={'인증번호를 입력해 주세요.'}
                    onChange={(e) => setVerifyEmailCode(e.target.value)}
                    containerStyle={{
                      marginTop: 10,
                      marginBottom: 5,
                    }}
                    inputStyle={{
                      backgroundColor: '#fff',
                      borderRadius: '6px',
                    }}
                    errorMessage={
                      isEmailDone
                        ? '인증번호가 일치합니다.'
                        : isEmailDoneFail
                        ? '인증번호가 일치하지 않습니다.'
                        : ''
                    }
                    errorMessageStyle={
                      isEmailDone ? { color: '#00b448' } : { color: '#ef0000' }
                    }
                  />
                  <Button
                    type={
                      isEmailVerifyCode
                        ? ButtonType.BLACK_WHITE
                        : ButtonType.GRAY
                    }
                    onClick={handleVerifyEmailCode}
                    containerStyle={buttonStyle2}
                  >
                    {isEmailDone ? '확인완료' : '확인'}
                  </Button>
                </ButtonInputBox>
              )}
              <Divider style={{ marginTop: 20 }} />

              {/* 회사명 */}
              <LinedInput
                label="회사명"
                type="text"
                name="companyName"
                value={companyName}
                errorMessage={'회사변경은 탈퇴 후 재가입 하시기 바랍니다.'}
                containerStyle={{ marginBottom: '8px' }}
                xIcon={false}
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

              {/* 비밀번호 */}
              {!isPassword && (
                <ButtonInputBox>
                  <Input
                    label="비밀번호"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    containerStyle={{ marginBottom: 5 }}
                    inputStyle={{
                      backgroundColor: '#f2f2f2',
                      borderRadius: '6px',
                    }}
                    disabled={!isPassword}
                  />
                  <Button
                    type={ButtonType.BLACK_WHITE}
                    containerStyle={buttonStyle2}
                    onClick={handlePassword}
                  >
                    비밀번호 변경
                  </Button>
                </ButtonInputBox>
              )}

              {/* 비밀번호 변경 */}
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
                    containerStyle={{ marginBottom: 5 }}
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

              {/* 휴대폰번호 */}
              <ButtonInputBox>
                <Input
                  label="휴대폰번호"
                  redStar="*"
                  type="text"
                  name="phone"
                  placeholder="'-' 입력 제외(번호만 입력해 주세요)"
                  containerStyle={{ marginBottom: 5, height: 75 }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  inputStyle={
                    isPhoneEdit ? emailEditInputStyle : emailInputStyle
                  }
                  maxLength={11}
                  disabled={!isPhoneEdit}
                />
                <Button
                  type={
                    isPhoneValidated ? ButtonType.BLACK_WHITE : ButtonType.GRAY
                  }
                  containerStyle={buttonStyle}
                  onClick={isPhoneEdit ? handleRequestPhone : handlePhoneEdit}
                >
                  {isPhoneEdit ? '인증번호 전송' : '휴대폰번호 변경'}
                </Button>
              </ButtonInputBox>

              {/* 휴대폰번호 인증 */}
              {isPhoneCode && (
                <ButtonInputBox>
                  <Input
                    type="text"
                    name="verificationNumber"
                    placeholder="인증번호 6자리 입력"
                    value={veryfyPhoneCode}
                    onChange={(e) => setVeryfyPhoneCode(e.target.value)}
                    containerStyle={{
                      marginTop: 10,
                      marginBottom: 5,
                    }}
                    inputStyle={{
                      backgroundColor: '#fff',
                      borderRadius: '6px',
                    }}
                    errorMessage={
                      isPhoneDone
                        ? '인증번호가 일치합니다.'
                        : isPhoneDoneFail
                        ? '인증번호가 일치하지 않습니다.'
                        : ''
                    }
                    errorMessageStyle={
                      isPhoneDone ? { color: '#00b448' } : { color: '#ef0000' }
                    }
                  />
                  <Button
                    type={
                      isPhoneVerifyCode
                        ? ButtonType.BLACK_WHITE
                        : ButtonType.GRAY
                    }
                    containerStyle={buttonStyle2}
                    onClick={handlePhoneVerifyCode}
                  >
                    {isPhoneDone ? '확인완료' : '확인'}
                  </Button>
                </ButtonInputBox>
              )}
            </MyInfoFormBox>
          </MyInfoWrapper>
          <ButtonBox>
            <Button
              type={ButtonType.GRAY_BLACK}
              containerStyle={{ marginRight: '20px' }}
              onClick={handleBlocking}
            >
              취소
            </Button>
            <Button
              type={isEditing ? ButtonType.GRAY : ButtonType.PRIMARY}
              onClick={() => (isEditing ? null : handleEdit())}
            >
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
        content={' 으로 \n 이메일 인증 주소가 발송되었어요.'}
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
        open={isSubmittedForm}
        onClose={() => handleSubmittedForm()}
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
      <TextModal
        open={isBlocking}
        onClose={() => setIsBlocking(false)}
        submitText="나가기"
        content={
          '페이지를 나가시겠습니까? \n 변경사항이 저장되지 않을 수 있습니다.'
        }
        onSubmit={() => navigate(0)}
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
  display: flex;
  flex-direction: row;
  align-items: flex-end;
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
  // marginBottom: '5px',
  '&: focus': {
    backgroundColor: '#ffffff',
  },
};

const emailEditInputStyle = {
  backgroundColor: '#ffffff',
};

const buttonStyle = {
  width: '45%',
  height: '40px',
  fontSize: '14px',
  fontWeight: '500',
  padding: '11px 0',
  marginLeft: '10px',
  marginBottom: '15px',
};

const buttonStyle2 = {
  width: '45%',
  height: '40px',
  fontSize: '14px',
  fontWeight: '500',
  padding: '11px 0',
  marginLeft: '10px',
  marginBottom: '24px',
};
