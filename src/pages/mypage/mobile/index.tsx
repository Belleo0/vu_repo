import React, { useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import infoIcon from  "../../../assets/information_ic.png"
import arrowIcon from "../../../assets/arrow_ic.png"
import candleIcon from  "../../../assets/candle_ic.png"
import settingIcon from "../../../assets/setting_ic.png"
import arrowBackIcon from "../../../assets/arrow_back_ic.png"
import teamIcon from "../../../assets/team_ic.png"
import profileImg from "../../../assets/profile.png"
import { useNavigate } from 'react-router-dom';
import LinedInput from '@components/LinedInput';
import Input from '@components/Input';
import Button, { ButtonType } from '@components/Button';
import   { CSSProperties, HTMLAttributes } from 'react';
import api from '@api';
import ImgModal from '@components/ImgModal';
interface Props{
    userData:{
    name: string,
    email: string,
    companyName: string,
    position: string,
    department: string,
    tel: string,
    password: string,
    phone: string,
    }
}
  


const MobileScreen=(props:Props)=>{

    const navigate = useNavigate();
    const [userData, setUserData] = useState(props.userData);
    //init state
    const [isEdit,setIsEdit]=useState<boolean>(false)
    const [name,setName]=useState<string>(props.userData.name)
    const [email,setEmail]=useState<string>(props.userData.email)
    const [password,setPassword]=useState<string>(props.userData.password)
    const [phone,setPhone]=useState<string>(props.userData.phone)
    const [companyname,setCompanyname]=useState<string>(props.userData.companyName)
    const [tel,setTel]=useState<string>(props.userData.tel)
    const [department,setDepartment]=useState<string>(props.userData.department)
    const [position,setPosition]=useState<string>(props.userData.position)
    const [images, setImages] = useState<object[]>([]);

    //edit state
     const [newPassword,setNewPassword]=useState<string>(``)
    const [confirmPassword,setConfirmPassword]=useState<string>(``)
    const [newPhone,setNewPhone]=useState<string>(``)


    
    const [veryfyPhoneCode, setVeryfyPhoneCode] = useState<string>('');
    const  [isPasswordEdit,setIsPasswordEdit]=useState<boolean>(false)
    const  [isPhoneEdit,setIsPhoneEdit]=useState<boolean>(false)
    const [verifyEmailCode, setVerifyEmailCode] = useState<string>('');
   
    const  [isEmailEdit,setIsEmailEdit]=useState<boolean>(false)
    const [isEmailCode, setIsEmailCode] = useState<boolean>(false);
    const [isEmailDone, setIsEmailDone] = useState<boolean>(false);
    const [isEmailDoneFail, setIsEmailDoneFail] = useState<boolean>(false);
    const [isEmailModalOpen, setIsEmailModalOpen] = useState<boolean>(false);
    const [isErrorEmailModalOpen, setIsErrorEmailModalOpen] = useState<boolean>(false);
    
    const [isPassword, setIsPassword] = useState(false);

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
    
    //handle
    const handlePhoneEdit = () => {
      setIsPhoneEdit(true);
    };
    const handlePassword = () => {
      setIsPassword(!isPassword);
      setIsEditing(true)
    };

    const handleEmailEdit = () => {
      setIsEmailEdit(true);
    };
    const isPhoneValidated = useMemo(() => {
      const regex = /^[0-9]{10,11}$/;
      return regex.test(phone);
    }, [phone]);
  
    const isPhoneVerifyCode = useMemo(() => {
      const regex = /^[0-9]/;
      return regex.test(veryfyPhoneCode);
    }, [veryfyPhoneCode]);
    
    const isPasswordValidated = useMemo(() => {
      const regex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/; // 비밀번호 정규식
      return regex.test(newPassword);
    }, [newPassword]);
  
    const isConfirmPasswordValidated = useMemo(() => {
      const regex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/; // 비밀번호 정규식
      if (
        newPassword.length > 0 &&
        regex.test(confirmPassword) &&
        newPassword === confirmPassword
      ) {
        setIsEditing(false);
        return true;
      }
    }, [newPassword, confirmPassword]);

    const handleName=(e: React.ChangeEvent<HTMLInputElement>) =>{
      setName(e.target.value)
    }
    const handleTel=(e: React.ChangeEvent<HTMLInputElement>) =>{
      setTel(e.target.value)
    }
    const handlePosition=(e: React.ChangeEvent<HTMLInputElement>) =>{
      setPosition(e.target.value)
    }
    const handleDepartment=(e: React.ChangeEvent<HTMLInputElement>) =>{
      setDepartment(e.target.value)
    }
    
    const handleBlocking = () => {
      setIsBlocking(!isBlocking);
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
        console.log(data)
        if (data?.result === true) {
          setIsEmailModalOpen(true);
          setIsEmailCode(true);
          setVerifyEmailCode('');
          setIsEmailDone(false);
          setIsEditing(true);
        } else {
          window.alert('오류발생');
        }
      } else if (data?.result === true) {
        setIsErrorEmailModalOpen(true);
        setIsEmailCode(false);
        setVerifyEmailCode('');
        setIsEmailDone(false);
        setIsEditing(true);
      }
    } catch (error) {
      window.alert('오류발생');
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
        window.alert('저장 실패');
      }
    } else {
      return window.alert('이메일, 비밀번호, 핸드폰번호를 입력해주세요');
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
        window.alert('인증성공!');
      }
    } catch (error) {
      console.log(error);
      setIsPhoneDoneFail(true);
      window.alert('인증실패!');
    }
  };
 
  


    if(isEdit)
    return (
      <MbEdit> 
        
        {
          !!isEmailModalOpen?  
         
            <ImgModal
          
          open={isEmailModalOpen}
          onClose={() => setIsEmailModalOpen(false)}
          email={email}
          content={' 으로 \n 이메일 인증 주소가 발송되었어요.'}
          redContent={'메일을 받지 못하셨다면 스팸 폴더를 확인해주세요.'}
          imgUrl="../assets/img-email.png"
        />
            
          
          :null
        }
   
          <MbEditNav>
                <MbEditNavLeft>
                  <MbEditBackIcon onClick={()=>setIsEdit(false)} src={arrowBackIcon}></MbEditBackIcon>
                </MbEditNavLeft>
                <MbEditNavRight>
                  <MbTitle  >회원정보 수정</MbTitle>
                </MbEditNavRight>
          </MbEditNav>
           <MbEditMain>
                <MbEditImg src={profileImg}></MbEditImg>
                <MbEditImgBtn>이미지 수정</MbEditImgBtn>
           </MbEditMain>
            {/* 이름 */}
           <MbEditColumn>
            <MbEditRowContent>
            <LinedInput 
                label="이름"
                type="text"
                name="name"
                value={name}
                onChange={handleName}
                xIcon={false} 
                disabled={true}
              />
              </MbEditRowContent>
           </MbEditColumn>
           <MbEditColumn>
              {/* 이메일 */}
               <ButtonInputBox>
                <Input
                 
                  label="이메일"
                  redStar="*"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  inputStyle={inputStyle}
                  errorMessage={
                    email === ''
                      ? ''
                      : isEmailValidated
                      ? ''
                      : '이메일 형식이 올바르지 않습니다.'
                  }
                  errorMessageStyle={
                    {width:"202px"}
                  }
                  disabled={!isEmailEdit}
                />
                <Button   onClick={
                    isEmailEdit ? handleRequestEmailCode : handleEmailEdit
                  }
                  type={
                    (isEmailValidated && !isEmailCode) ||
                    (isEmailDone && isEmailEdit)
                      ? ButtonType.BLACK_WHITE
                      : isEmailValidated && isEmailCode
                      ? ButtonType.GRAY
                      : ButtonType.GRAY
                  }
                 containerStyle={buttonStyle}
                > 
                    {isEmailEdit && !isEmailDone
                    ?   <BtnContent>이메일 인증  </BtnContent>
                    : isEmailEdit && isEmailDone
                    ? <BtnContent >재인증받기 </BtnContent>:
                    <BtnContent >이메일 변경</BtnContent >}
                </Button>
              </ButtonInputBox>
              </MbEditColumn>
                    
                {
                  isEmailCode && ( 
                    <MbEditColumn  >
                    <ButtonInputBox  >
                      <Input
                         autoComplete="off"
                        type="verifycode"
                        name="verifyEmailCode"
                        value={verifyEmailCode}
                        placeholder={'인증번호를 입력해 주세요.'}
                        onChange={(e) => setVerifyEmailCode(e.target.value)}
                        inputStyle={inputStyle}
                        errorMessage={
                          isEmailDone
                            ? '인증번호가 일치합니다.'
                            : isEmailDoneFail
                            ? '인증번호가 일치하지 않습니다.'
                            : ''
                        }
                        errorMessageStyle={
                          isEmailDone ? { width:"202px", color: '#00b448' } : {width:"202px", color: '#ef0000' }
                        }
                      />
                      <Button   
                        type={
                          isEmailVerifyCode && !isEmailDone
                            ? ButtonType.BLACK_WHITE
                            : ButtonType.GRAY
                        }
                        onClick={handleVerifyEmailCode}
                        containerStyle={ buttonStyleNonLabel}
                      > <BtnContent>확인</BtnContent> 
                      </Button>
                    </ButtonInputBox>
                    </MbEditColumn>
                  )
                }      
               
         
    
   
            <MbEditColumn>
            
            <MbEditRowContent> 
            {/* 회사명 */}
            <LinedInput
                label="회사명"
                type="text"
                name="companyName"
                value={companyname}
                // helperMessage={'회사변경은 탈퇴 후 재가입 하시기 바랍니다.'}
                xIcon={false}
                disabled={true}
              />
            </MbEditRowContent>
           </MbEditColumn>
      
           <MbEditColumn >
            <MbEditRowContent>
                {/* 직위/직급 */}
                <LinedInput
                label="직위/직급"
                type="text"
                name="position"
                value={position}
                onChange={handlePosition}
                xIcon={false}
                disabled={true}
              /></MbEditRowContent>
           </MbEditColumn>
             {/* 부서 */}
           <MbEditColumn>
            <MbEditRowContent>
              <LinedInput
                label="부서(선택)"
                type="text"
                name="department"
                value={department}
                onChange={handleDepartment}
                xIcon={false}
                disabled={true}
              />
              </MbEditRowContent>
           </MbEditColumn>
           {/* 사내번호 */}
           <MbEditColumn>
           <MbEditRowContent>
             <LinedInput
                label="사내번호"
                type="text"
                name="tel"
                value={tel}
                onChange={handleTel}
                xIcon={false}
              />
           </MbEditRowContent>
           </MbEditColumn>

             {/* 비밀번호 */}
             {!isPassword && (
              <MbEditColumn>
                <ButtonInputBox>
                  <Input
                    label="비밀번호"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    inputStyle={inputStyle}
                    disabled={!isPassword}
                    errorMessage={''}
                  />
                  <Button
                    type={ButtonType.BLACK_WHITE}
                    containerStyle={buttonStyle}
                    onClick={handlePassword}
                  >
                   <BtnContent>비밀번호 변경</BtnContent> 
                  </Button>
                </ButtonInputBox>
                </MbEditColumn>
              )}

           {/* 비밀번호 변경 */}
              {isPassword && (
                <>
                  <MbEditColumn>
                  <ButtonInputBox  >
                    <Input
                    label="현재 비밀번호"
                    redStar="*"
                    type="password"
                    placeholder="비밀번호를 입력해 주세요"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    containerStyle={{ marginBottom: 8,width:"85%" }}
                  />
                    </ ButtonInputBox  >
                  
                  </MbEditColumn>
                  
                  <MbEditColumn>
                  <ButtonInputBox  >
                    <Input
                    label="새 비밀번호"
                    redStar="*"
                    type="password"
                    name="newPassword"
                    placeholder="영문과 숫자, 특수문자 포함 8자 이상 입력해 주세요"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    containerStyle={{ marginBottom: 8,width:"85%" }}
                    errorMessage={
                      newPassword === ''
                        ? ''
                        : isPasswordValidated
                        ? ''
                        : '영문, 숫자, 특수문자 포함 8자 이상 입력해 주세요'
                    }
                  />
                    </ButtonInputBox>
                 
                  </MbEditColumn>
                    <MbEditColumn>
                    <ButtonInputBox  >
                  <Input
                    label="새 비밀번호 확인"
                    redStar="*"
                    type="password"
                    name="passwordConfirm"
                    placeholder="새 비밀번호를 다시 입력해 주세요"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    containerStyle={{ marginBottom: 8,width:"85%" }}
                    errorMessage={
                      confirmPassword === ''
                        ? ''
                        : isConfirmPasswordValidated
                        ? ''
                        : '비밀번호가 일치하지 않습니다'
                    }
                  />
                   </ButtonInputBox>
                  </MbEditColumn>
                </>
              )}
            
          
              <MbEditColumn>
              <ButtonInputBox>
              <Input
                label="휴대폰번호"
                redStar="*"
                type="text"
                name="phone"
                placeholder="'-' 입력 제외(번호만 입력해 주세요)"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                inputStyle={inputStyle}
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
                containerStyle={buttonStyle2}
              >
                {isPhoneEdit && !isPhoneDone
                  ?  <BtnContent>인증번호 전송</BtnContent> 
                  : isPhoneEdit && isPhoneDone
                  ? <BtnContent>재인증받기</BtnContent>
                  :  <BtnContent>휴대폰번호 변경</BtnContent>}
           </Button>
            </ButtonInputBox>
         </MbEditColumn>  
                {/* 휴대폰번호 인증 */}
              {isPhoneCode && (
                <MbEditColumn>
                <ButtonInputBox  >
                  <Input
                    type="text"
                    name="verificationNumber"
                    placeholder="인증번호 6자리 입력"
                    value={veryfyPhoneCode}
                    onChange={(e) => setVeryfyPhoneCode(e.target.value)}
                    inputStyle={{
                      backgroundColor: '#fff',
                      borderRadius: '6px',
                    }}
                    errorMessage={
                      isPhoneDone
                        ?  '인증번호가 일치합니다.'
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
                      isPhoneVerifyCode && !isPhoneDone
                        ? ButtonType.BLACK_WHITE
                        : ButtonType.GRAY
                    }
                    containerStyle={buttonStyleNonLabel}
                    onClick={handlePhoneVerifyCode}
                  >
                    {isPhoneDone ? <BtnContent>확인완료</BtnContent>  : <BtnContent>확인</BtnContent>}
                  </Button>
                </ButtonInputBox>
                </MbEditColumn>
              )}  
 
           <MbEditColumn>
             <MbEditRowTitle>회원탈퇴</MbEditRowTitle>
             <MbEditRowCenter>
             <ButtonBox>
            <Button
              type={ButtonType.GRAY_BLACK}
              containerStyle={MbEditCancel}
              onClick={handleBlocking}
            >
              취소
            </Button>
            <Button
              containerStyle={MbEditCancel}
              type={isEditing ? ButtonType.GRAY : ButtonType.PRIMARY}
              onClick={() => (isEditing ? null : handleEdit())}
            >
              저장
            </Button>
          </ButtonBox>
             </MbEditRowCenter>
           </MbEditColumn>


      </MbEdit>

                  )
    else
    return (<MbContainer>
                <MbTitle>마이</MbTitle>
                {
                    !!props.userData?  
                    <MbProfile>
                    
                    <MbAvatar src={profileImg}></MbAvatar>
                    <MbInfo>
                      <MbInfoContent>
                      <MbInfoSub>{props.userData.companyName}</MbInfoSub>
                      <MbInfoMain>{props.userData.name}</MbInfoMain>
                      </MbInfoContent>
                            
                    </MbInfo>
                    
                  </MbProfile> :
                    <MbAlertLogin>
                    <MbAlertTitle>비 로그인 시 일부 서비스가 이용 제한됩니다.</MbAlertTitle>
                    <MbAlertBtn>로그인</MbAlertBtn>
                   </MbAlertLogin>  
                }
                    <MbRow> 
                    <MbRowContent>
                      <MbContentLeft>
                          <MbRowIcon src={infoIcon}></MbRowIcon> 
                          <MbRowTitle>회원정보 수정</MbRowTitle>
                      </MbContentLeft>
                      <MbArrowIcon src={arrowIcon} onClick={()=>{
                        setIsEdit(true)
                      }}></MbArrowIcon>   
                     </MbRowContent>
                     </MbRow>
                     <MbRow> 
                      <MbRowContent>
                        <MbContentLeft>
                          <MbRowIcon src={candleIcon}></MbRowIcon> 
                          <MbRowTitle>조직관리</MbRowTitle>
                      </MbContentLeft>
                        <MbArrowIcon src={arrowIcon}></MbArrowIcon>   
                       </MbRowContent>
                      </MbRow>
                      <MbRow> 
                       <MbRowContent>
                        <MbContentLeft>
                          <MbRowIcon src={teamIcon}></MbRowIcon> 
                          <MbRowTitle>친구관리</MbRowTitle>
                       </MbContentLeft>
                        <MbArrowIcon src={arrowIcon}></MbArrowIcon>   
                       </MbRowContent>
                       </MbRow>
                       <MbRow> 
                       <MbRowContent>
                        <MbContentLeft>
                          <MbRowIcon src={settingIcon}></MbRowIcon> 
                          <MbRowTitle> 알림 설정</MbRowTitle>
                        </MbContentLeft>
                        <MbArrowIcon src={arrowIcon}></MbArrowIcon>   
                       </MbRowContent>
                      </MbRow>
           
            </MbContainer>)

    
}


//styled profile edit


const MbEdit=styled.div`
  
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const MbEditBackIcon=styled.img`
   width: 10px;
  height: 20px;
 
  object-fit: contain;
`

const MbEditNav=styled.div`
  width: 360px;
  height: 60px;
  margin-top: 42px;
   background-color: #fff;
   display: flex;
 
  align-items: center;
`
  
const MbEditNavLeft=styled.div`
   display: flex;
  width: 10%;
  align-items: center;
  justify-content: center;
   height: 100%;
`
const MbEditNavRight=styled.div`
 display: flex;
    margin-left:27%;
  
  
`
const MbEditMain=styled.div``

const MbEditImg=styled.img`
width: 86px;
height: 86px;
margin-top: 24px;
object-fit: contain;`

const MbEditImgBtn=styled.div`
 width: 76px;
  height: 32px;
  margin: 10px 14px 0px 5px;
  padding: 7px 10px 8px;
  border-radius: 6px;
  border: solid 1px #000;
  background-color: #fff;
  cursor: pointer;
  font-family: SourceHanSansKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: -0.24px;
  text-align: center;
  color: #000;
  `
const MbEditRow=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const MbEditColumn=styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
 
`
const MbEditRowCenter=styled.div`
  display: flex;
  justify-content: center;

`
 

const MbEditRowTitle=styled.span`
  margin: 0px 0px 0px 20px;
  font-family: SourceHanSansKR;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.23;
  letter-spacing: -0.26px;
  text-align: left;
  color: #444;
`

const MbEditRowContent=styled.span`
 
 margin: 0px 0px 0px 20px;
  font-family: SourceHanSansKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #222;`

 


const inputStyle:CSSProperties={
  width:"202px",
  height:"42px",
  borderRadius:"6px",
  border:"solid 1px #c7c7c7",
  backgroundColor:"#f2f2f2",
  outlineStyle:"none"
  
  

}
const inputStyleFull:CSSProperties={
  width:"320px",
  height:"42px",
  borderRadius: "6px",
  border: "solid 1px #c7c7c7",
  backgroundColor: "#fff",
  

}
  
  const BtnContent=styled.span`
   width: 91px;
  height: 20px;
  font-family: SourceHanSansKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.28px;
  text-align: center;
 
 `
 
 
 const buttonStyle2:CSSProperties={
  width: '108px',
  height: '42px',
  padding: "11px 8px 11px 9px",
  margin: "10px 20px 0px 9px",
  borderRadius:"6px", 
  backgroundColor:"black",
  color:"white",

 
 }
 const buttonStyle:CSSProperties = {
   width: '108px',
  height: '42px',
  padding:"11px 15px",
  margin:"10px 20px 0px 9px",
  borderRadius:"6px",
 

  


};
const buttonStyleNonLabel:CSSProperties={
  width: "108px",
  height: "42px",
  margin: "-15px 20px 2px 9px",
  padding: "11px 41px",
  borderRadius: "6px",  
}
 

 



const MbEditCancel:CSSProperties={
  width:"154px",
  height:"46px",
  margin:"0 12px 0 0",
  padding:"12px 63px 13px",
  borderRadius:"6px",
  fontFamily:"SourceHanSansKR",
  fontSize:"15px",
  fontStretch:"normal",
  fontStyle:"normal",
  lineHeight:"4.13",
  letterSpacing:"-0.3px",
  textAlign:"center",
  display:"flex",
  alignItems:"center"

}
  

const MbEditSave=styled.div`
width: 154px;
  height: 46px;
  margin: 0 0 0 12px;
  padding: 12px 63px 13px;
  border-radius: 6px;
  background-color: #258fff;
  font-family: SourceHanSansKR;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 4.13;
  letter-spacing: -0.3px;
  display: flex;
  align-items: center;
  color: #fff;
`
const MbEditSaveHide=styled.div`
  width: 154px;
  height: 46px;
  margin: 0 0 0 12px;
  padding: 12px 63px 13px;
  border-radius: 6px;
  background-color: #f2f2f2;
  font-family: SourceHanSansKR;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 4.13;
  letter-spacing: -0.3px;
  display: flex;
  align-items: center;
  color: #999;
`

const ButtonInputBox = styled.div`
  width: 340px;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  margin: 0px 20px 0px 20px;
   
  
`
 
const Popupcontent:CSSProperties={
  width: "300px",
  height: "230px",
  margin: "11px 30px 32px",
  padding: "20px 20px 40px 29px",
  borderRadius: "20px",
  backgroundColor: "#fff",
 
}

 
const ButtonBox = styled.div`
  display: flex;
  margin-top: 60px;
  margin-bottom: 50px;
`;


//styled mypage
 

const MbRowTitle=styled.label`
  font-family: SourceHanSansKR;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.3px;
  text-align: left;
  color: #000;
  margin: 1px 186px 2px 10px;

;
`
const MbContentLeft=styled.div`
  display: flex;
  align-items: center;
    cursor: pointer;
`

const MbRowIcon=styled.img`
   
  width: 24px;
  height: 24px;
  object-fit: contain;
`
const MbArrowIcon=styled.img`
   width: 16px;
  height: 16px;
  object-fit: contain;
  cursor: pointer;
`
const MbRow=styled.div`
  width: 100%;
  height: 62px;
  padding: 19px 20px;
  background-color: #fff;
  
`
const MbRowContent=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MbInfoSub=styled.span`
font-family: SourceHanSansKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3;
  letter-spacing: -0.24px;
  text-align: left;
  color: #444;
`

const MbInfoMain=styled.span`
 font-family: SourceHanSansKR;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: -0.36px;
  text-align: left;
  color: #000;`

const MbInfo=styled.div`
  height: 66px;
  margin-left: 20px;
  display: flex;
 
`
const MbInfoContent=styled.div`
  display: flex;
  flex-direction: column;
`
const MbAvatar=styled.img`
  width: 66px;
  height: 66px;
  border-radius: 50%;
`
 
const MbContainer=styled.div`
  width: 360px;
  height: 100%;
 
`
const MbTitle=styled.div`
    height: 60px;
   font-size: 16px;
   font-weight: 500;
   display: flex;
   justify-content: center;
   align-items: center;
  `

const MbProfile=styled.div`
   width: 360px;
  height: 124px;
  display: flex; 
  align-items :center ;
  margin-left:12px;
`

const MbAlertLogin=styled.div`
  width: 360px;
  height: 124px;
  padding: 30px 54px 20px 55px;
  background-color: #258fff17;
 `
const MbAlertBtn=styled.button`
  width: 104px;
  height: 42px;
  margin: 12px 74px 0 73px;
  padding: 11px 33px;
  border-radius: 6px;
  background-color: #258fff;
  font-size: 14px;
  border: none;
  color:white;
`
const MbAlertTitle=styled.div`
   width: 251px;
  height: 20px;
  margin: 0 0 12px;
  font-family: SourceHanSansKR;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #222;
`

export default MobileScreen