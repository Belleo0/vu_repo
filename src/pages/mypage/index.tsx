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
import useWindowSize from '../../hooks/useWindowSize';
import MobileScreen from './Displaymobile/Components/index';
export default () => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const isMobile = width <= 360 ? true : false;
  const userInfo = useUserInfo();
  console.log(userInfo)
  
  let initialState = {
    name: userInfo ? userInfo?.name : '',
    email: userInfo ? userInfo?.signname : '',
    companyName: userInfo ? userInfo?.company.name : '',
    position: userInfo ? userInfo?.position : '',
    department: userInfo ? userInfo?.department : '',
    tel: userInfo ? userInfo?.tel : '',
    password: userInfo ? userInfo?.password : '',
    phone: userInfo ? userInfo?.phone : '',
    company:userInfo?userInfo?.company:{},
    likeCount:userInfo?userInfo?.likeCount:{},
  };

  interface userData {
    name: string;
    email: string;
    companyName: string;
    position: string;
    department: string;
    tel: string;
    password: string;
    phone: string;
  }

  const [userData, setUserData] = useState(initialState);

  const [email, setEmail] = useState(initialState.email);
  const [password, setPassword] = useState(initialState.password);
  const [phone, setPhone] = useState(initialState.phone);
  const [verifyEmailCode, setVerifyEmailCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [veryfyPhoneCode, setVeryfyPhoneCode] = useState('');
  const [images, setImages] = useState([]);
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
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/; // ???????????? ?????????
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
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/; // ???????????? ?????????
    if (
      newPassword.length > 0 &&
      regex.test(confirmPassword) &&
      newPassword === confirmPassword
    ) {
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
      const { data } = await api.get('/users/check-duplicated-email', {
        params: { email: email },
      });
      if (data?.result === false) {
        const { data } = await api.post('/verifications/email', {
          email: email,
        });
        if (data?.result === true) {
          setIsEmailModalOpen(true);
          setIsEmailCode(true);
          setVerifyEmailCode('');
          setIsEmailDone(false);
          setIsEditing(true);
        } else {
          window.alert('????????????');
        }
      } else if (data?.result === true) {
        setIsErrorEmailModalOpen(true);
        setIsEmailCode(false);
        setVerifyEmailCode('');
        setIsEmailDone(false);
        setIsEditing(true);
      }
    } catch (error) {
      window.alert('????????????');
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
        window.alert('????????????!');
      }
    } catch (error) {
      setIsEmailDoneFail(true);
      window.alert('????????????!');
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
        setVeryfyPhoneCode('');
        setIsPhoneDone(false);
        setIsEditing(true);
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
        window.alert('????????????!');
      }
    } catch (error) {
      console.log(error);
      setIsPhoneDoneFail(true);
      window.alert('????????????!');
    }
  };

  const handleEdit = async () => {
    if (email && phone) {
      try {
        if (confirmPassword !== '' && confirmPassword) {
          await api.put('/auth/login', {
            ...userData,
            signname: email,
            phone: phone,
            password: confirmPassword,
          });
          setIsSubmittedForm(true);
        } else {
          await api.put('/auth/login', {
            ...userData,
            signname: email,
            phone: phone,
          });
          setIsSubmittedForm(true);
        }
      } catch (error) {
        window.alert('?????? ??????');
      }
    } else {
      return window.alert('?????????, ????????????, ?????????????????? ??????????????????');
    }
  };

  useEffect(() => {
    if (isEmailCode && isPhoneCode && isPassword) {
      setIsEditing(true);
    } else if (isEmailCode || isPhoneCode || isPassword) {
      setIsEditing(true);
    }
  }, [isEmailCode, isPhoneCode, isPassword]);

  if (isMobile == true) {
    return <MobileScreen userData={userData}></MobileScreen>;
  } else
    return (
      <MypageLayout>
        <Container>
          <Title>???????????? ??????</Title>
          <MyInfoSection>
            <MyInfoWrapper>
              <ProfileImageBox>
                <ProfileImage
                  src={getAssetURL('../assets/default-profile.jpeg')}
                />
                <FileUpload
                  label={'???????????????'}
                  images={images}
                  setImages={setImages}
                  limit={1}
                  disabledPreview={true}
                  buttonStyle={uploadButton}
                />
              </ProfileImageBox>
              <MyInfoFormBox>
                {/* ?????? */}
                <LinedInput
                  label="??????"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  xIcon={false}
                />

                {/* ????????? */}
                <ButtonInputBox>
                  <Input
                    label="?????????"
                    redStar="*"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    inputStyle={
                      isEmailEdit ? emailEditInputStyle : emailInputStyle
                    }
                    errorMessage={
                      email === ''
                        ? ''
                        : isEmailValidated
                        ? ''
                        : '????????? ????????? ???????????? ????????????.'
                    }
                    disabled={!isEmailEdit}
                  />
                  <Button
                    type={
                      (isEmailValidated && !isEmailCode) ||
                      (isEmailDone && isEmailEdit)
                        ? ButtonType.BLACK_WHITE
                        : isEmailValidated && isEmailCode
                        ? ButtonType.GRAY
                        : ButtonType.GRAY
                    }
                    onClick={
                      isEmailEdit ? handleRequestEmailCode : handleEmailEdit
                    }
                    containerStyle={buttonStyle}
                  >
                    {isEmailEdit && !isEmailDone
                      ? '????????? ??????'
                      : isEmailEdit && isEmailDone
                      ? '???????????????'
                      : '????????? ??????'}
                  </Button>
                </ButtonInputBox>

                {/* ????????? ?????? */}
                {isEmailCode && (
                  <ButtonInputBox style={{ marginTop: '8px' }}>
                    <Input
                      type="email"
                      name="verifyEmailCode"
                      value={verifyEmailCode}
                      placeholder={'??????????????? ????????? ?????????.'}
                      onChange={(e) => setVerifyEmailCode(e.target.value)}
                      inputStyle={{
                        backgroundColor: '#fff',
                        borderRadius: '6px',
                      }}
                      errorMessage={
                        isEmailDone
                          ? '??????????????? ???????????????.'
                          : isEmailDoneFail
                          ? '??????????????? ???????????? ????????????.'
                          : ''
                      }
                      errorMessageStyle={
                        isEmailDone
                          ? { color: '#00b448' }
                          : { color: '#ef0000' }
                      }
                    />
                    <Button
                      type={
                        isEmailVerifyCode && !isEmailDone
                          ? ButtonType.BLACK_WHITE
                          : ButtonType.GRAY
                      }
                      onClick={handleVerifyEmailCode}
                      containerStyle={buttonStyle2}
                    >
                      {isEmailDone ? '????????????' : '??????'}
                    </Button>
                  </ButtonInputBox>
                )}
                <Divider style={{ marginTop: '8px' }} />

                {/* ????????? */}
                <LinedInput
                  label="?????????"
                  type="text"
                  name="companyName"
                  value={companyName}
                  helperMessage={'??????????????? ?????? ??? ????????? ????????? ????????????.'}
                  xIcon={false}
                />

                {/* ??????/?????? */}
                <LinedInput
                  label="??????/??????"
                  type="text"
                  name="position"
                  value={position}
                  onChange={handleChange}
                  xIcon={false}
                />

                {/* ?????? */}
                <LinedInput
                  label="??????(??????)"
                  type="text"
                  name="department"
                  value={department}
                  onChange={handleChange}
                  xIcon={false}
                />

                {/* ???????????? */}
                <LinedInput
                  label="????????????"
                  type="text"
                  name="tel"
                  value={tel}
                  onChange={handleChange}
                  xIcon={false}
                />

                {/* ???????????? */}
                {!isPassword && (
                  <ButtonInputBox>
                    <Input
                      label="????????????"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      inputStyle={{
                        backgroundColor: '#f2f2f2',
                        borderRadius: '6px',
                      }}
                      disabled={!isPassword}
                      errorMessage={''}
                    />
                    <Button
                      type={ButtonType.BLACK_WHITE}
                      containerStyle={buttonStyle}
                      onClick={handlePassword}
                    >
                      ???????????? ??????
                    </Button>
                  </ButtonInputBox>
                )}

                {/* ???????????? ?????? */}
                {isPassword && (
                  <>
                    <Input
                      label="?????? ????????????"
                      redStar="*"
                      type="password"
                      placeholder="??????????????? ????????? ?????????"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      containerStyle={{ marginBottom: 8 }}
                    />
                    <Divider />
                    <Input
                      label="??? ????????????"
                      redStar="*"
                      type="password"
                      name="newPassword"
                      placeholder="????????? ??????, ???????????? ?????? 8??? ?????? ????????? ?????????"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      containerStyle={{ marginBottom: 8 }}
                      errorMessage={
                        newPassword === ''
                          ? ''
                          : isPasswordValidated
                          ? ''
                          : '??????, ??????, ???????????? ?????? 8??? ?????? ????????? ?????????'
                      }
                    />
                    <Divider />
                    <Input
                      label="??? ???????????? ??????"
                      redStar="*"
                      type="password"
                      name="passwordConfirm"
                      placeholder="??? ??????????????? ?????? ????????? ?????????"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      containerStyle={{ marginBottom: 8 }}
                      errorMessage={
                        confirmPassword === ''
                          ? ''
                          : isConfirmPasswordValidated
                          ? ''
                          : '??????????????? ???????????? ????????????'
                      }
                    />
                  </>
                )}
                <Divider style={{ marginTop: '8px' }} />

                {/* ??????????????? */}
                <ButtonInputBox>
                  <Input
                    label="???????????????"
                    redStar="*"
                    type="text"
                    name="phone"
                    placeholder="'-' ?????? ??????(????????? ????????? ?????????)"
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
                      (isPhoneValidated && !isPhoneCode) ||
                      (isPhoneDone && isPhoneEdit)
                        ? ButtonType.BLACK_WHITE
                        : isPhoneValidated && isPhoneCode
                        ? ButtonType.GRAY
                        : ButtonType.GRAY
                    }
                    onClick={isPhoneEdit ? handleRequestPhone : handlePhoneEdit}
                    containerStyle={buttonStyle}
                  >
                    {isPhoneEdit && !isPhoneDone
                      ? '???????????? ??????'
                      : isPhoneEdit && isPhoneDone
                      ? '???????????????'
                      : '??????????????? ??????'}
                  </Button>
                </ButtonInputBox>

                {/* ??????????????? ?????? */}
                {isPhoneCode && (
                  <ButtonInputBox style={{ marginTop: '8px' }}>
                    <Input
                      type="text"
                      name="verificationNumber"
                      placeholder="???????????? 6?????? ??????"
                      value={veryfyPhoneCode}
                      onChange={(e) => setVeryfyPhoneCode(e.target.value)}
                      inputStyle={{
                        backgroundColor: '#fff',
                        borderRadius: '6px',
                      }}
                      errorMessage={
                        isPhoneDone
                          ? '??????????????? ???????????????.'
                          : isPhoneDoneFail
                          ? '??????????????? ???????????? ????????????.'
                          : ''
                      }
                      errorMessageStyle={
                        isPhoneDone
                          ? { color: '#00b448' }
                          : { color: '#ef0000' }
                      }
                    />
                    <Button
                      type={
                        isPhoneVerifyCode && !isPhoneDone
                          ? ButtonType.BLACK_WHITE
                          : ButtonType.GRAY
                      }
                      containerStyle={buttonStyle2}
                      onClick={handlePhoneVerifyCode}
                    >
                      {isPhoneDone ? '????????????' : '??????'}
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
                ??????
              </Button>
              <Button
                type={isEditing ? ButtonType.GRAY : ButtonType.PRIMARY}
                onClick={() => (isEditing ? null : handleEdit())}
              >
                ??????
              </Button>
            </ButtonBox>
            <Withdrawal onClick={handleWithdrawalModal}>????????????</Withdrawal>
          </MyInfoSection>
        </Container>
        <ImgModal
          open={isEmailModalOpen}
          onClose={() => setIsEmailModalOpen(false)}
          email={email}
          content={' ?????? \n ????????? ?????? ????????? ??????????????????.'}
          redContent={'????????? ?????? ??????????????? ?????? ????????? ??????????????????.'}
          imgUrl="../assets/img-email.png"
        />
        <TextModal
          open={isErrorEmailModalOpen}
          onClose={() => setIsErrorEmailModalOpen(false)}
          submitText={'??????'}
          content={'?????? ????????? ???????????????.'}
        />
        <TextModal
          open={isSubmittedForm}
          onClose={() => handleSubmittedForm()}
          submitText={'??????'}
          content={'????????? ?????????????????????.'}
        />
        <TextModal
          open={isWithdrawal}
          onClose={() => setIsWithdrawal(false)}
          submitText="????????????"
          content={'?????? ????????????????????????? \n ?????? ??? ????????? ??? ????????????.'}
          onSubmit={() => setIsWithdrawal(false)}
        />
        <TextModal
          open={isBlocking}
          onClose={() => setIsBlocking(false)}
          submitText="?????????"
          content={
            '???????????? ?????????????????????? \n ??????????????? ???????????? ?????? ??? ????????????.'
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
  border-bottom: solid 1px #e3e3e3;
  margin-bottom: 28px;
`;

const ButtonInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  marginTop: '5px',
};

const buttonStyle2 = {
  width: '45%',
  height: '40px',
  fontSize: '14px',
  fontWeight: '500',
  padding: '11px 0',
  marginLeft: '10px',
  marginBottom: '20px',
};

const uploadButton = {
  backgroundColor: '#ffffff',
  padding: '8px 11px',
  marginTop: '14px',
};
