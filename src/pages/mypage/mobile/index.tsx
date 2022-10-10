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
    //init state
    const [isEdit,setIsedit]=useState<boolean>(true)
    const [email,setEmail]=useState<string>(props.userData.email)
    const [password,setPassword]=useState<string>(props.userData.password)
    const [phone,setPhone]=useState<string>(props.userData.phone)
    //edit state
    const [currentPassword,setCurrentPassword]=useState<string>(``)
    const [newPassword,setNewPassword]=useState<string>(``)
    const [confirmPassword,setConfirmPassword]=useState<string>(``)
    const [newPhone,setNewPhone]=useState<string>(``)

    //status state
    const  [isEditPassword,setIsEditPassword]=useState<boolean>(false)
    const  [isEditMail,setIsEditEmail]=useState<boolean>(false)
    const  [isEditPhone,setIsEditPhone]=useState<boolean>(false)

    if(isEdit)
    return (
      <MbEdit>
          <MbEditNav>
                <MbEditNavLeft>
                  <MbEditBackIcon src={arrowBackIcon}></MbEditBackIcon>
                </MbEditNavLeft>
                <MbEditNavRight>
                  <MbTitle  >회원정보 수정</MbTitle>
                </MbEditNavRight>
          </MbEditNav>
           <MbEditMain>
                <MbEditImg src={profileImg}></MbEditImg>
                <MbEditImgBtn>이미지 수정</MbEditImgBtn>
           </MbEditMain>
           <MbEditColumn>
            <MbEditRowTitle>이름</MbEditRowTitle>
            <MbEditRowContent>{props.userData.name}</MbEditRowContent>
           </MbEditColumn>
           <MbEditColumn>
               <ButtonInputBox>
                <Input
                  label="이메일"
                  redStar="*"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  inputStyle={inputStyle}
                  // inputStyle={
                  //   isEmailEdit ? emailEditInputStyle : emailInputStyle
                  // }
                  // errorMessage={
                  //   email === ''
                  //     ? ''
                  //     : isEmailValidated
                  //     ? ''
                  //     : '이메일 형식이 올바르지 않습니다.'
                  // }
                  // disabled={!isEmailEdit}
                />
                <Button
                  type={ButtonType.BLACK_WHITE }
                 containerStyle={buttonStyle}
                >
                   <BtnContent1>이메일 인증</BtnContent1>
                </Button>
              </ButtonInputBox>
           </MbEditColumn>
   
            <MbEditColumn>
            <MbEditRowTitle>회사명</MbEditRowTitle>
            <MbEditRowContent>{props.userData.companyName}</MbEditRowContent>
           </MbEditColumn>
      
           <MbEditColumn>
            <MbEditRowTitle>직위/직급</MbEditRowTitle>
            <MbEditRowContent>{props.userData.position}</MbEditRowContent>
           </MbEditColumn>
     
           <MbEditColumn>
            <MbEditRowTitle>부서(선택)</MbEditRowTitle>
            <MbEditRowContent>{props.userData.department}</MbEditRowContent>
           </MbEditColumn>
        
           <MbEditColumn>
            <MbEditRowTitle>사내번호</MbEditRowTitle>
            <MbEditRowContent>{props.userData.tel}</MbEditRowContent>
           </MbEditColumn>
         
           {
              !!isEditPassword?
              <div>
              <MbEditColumn>
                <ButtonInputBox>
                <Input
                    label="현재 비밀번호"
                    redStar="*"
                    type="password"
                    name="currentpassword"
                    value={currentPassword}
                    placeholder="비밀번호 입력"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    inputStyle={inputStyleFull}
                    // disabled={!isPassword}
                    errorMessage={''}
                  />
                </ButtonInputBox>
              </MbEditColumn> 
             
              <MbEditColumn>
                <ButtonInputBox>
                <Input
                    label="새 비밀번호"
                    redStar="*"
                    type="password"
                    name="confirmpassword"
                    value={newPassword}
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력"
                    onChange={(e) => setNewPassword(e.target.value)}
                    inputStyle={inputStyleFull}
                    // disabled={!isPassword}
                    errorMessage={''}
                  />
                </ButtonInputBox>
              </MbEditColumn> 
              
              <MbEditColumn>
                <ButtonInputBox>
                <Input
                    label="새 비밀번호 확인"
                    redStar="*"
                    type="password"
                    name="confirmpassword"
                    value={confirmPassword}
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    inputStyle={inputStyleFull}
                    // disabled={!isPassword}
                    errorMessage={''}
                  />
                </ButtonInputBox>
              </MbEditColumn> 
              </div>
                : <MbEditColumn>
                <ButtonInputBox>
                        <Input
                          label="비밀번호"
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          inputStyle={inputStyle}
                          // disabled={!isPassword}
                          errorMessage={''}
                        />
                        <Button 
                          onClick={()=>{setIsEditPassword(true)}}
                          type={ButtonType.BLACK_WHITE}
                          containerStyle={buttonStyle}
                          // onClick={handlePassword}
                        >
                         <BtnContent1 >비밀번호 변경</BtnContent1>
                        </Button>
                      </ButtonInputBox>
                 </MbEditColumn>
             }
          
            {
              !!isEditPhone? 
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
                // disabled={!isPhoneEdit}
              />
              <Button
                type={ButtonType.BLACK_WHITE}
                                    
                // onClick={isPhoneEdit ? handleRequestPhone : handlePhoneEdit}
                containerStyle={buttonEditStyle}
              >
                {/* {isPhoneEdit && !isPhoneDone
                  ? '인증번호 전송'
                  : isPhoneEdit && isPhoneDone
                  ? '재인증받기'
                  : '휴대폰번호 변경'} */}
           <BtnEditContentStyle>휴대폰번호 변경</BtnEditContentStyle>   </Button>
            </ButtonInputBox>
         </MbEditColumn>  
              
              :<MbEditColumn>
              <ButtonInputBox>
                   <Input
                     label="휴대폰번호"
                     redStar="*"
                     type="text"
                     name="phone"
                     placeholder="'-' 입력 제외(번호만 입력해 주세요)"
                     value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                     inputStyle={inputStyle}
                     maxLength={11}
                     // disabled={!isPhoneEdit}
                   />
                   <Button
                     type={ButtonType.BLACK_WHITE}
                     onClick={()=>{setIsEditPhone(true)}}     
                     // onClick={isPhoneEdit ? handleRequestPhone : handlePhoneEdit}
                     containerStyle={buttonStyle2}
                   >
                     {/* {isPhoneEdit && !isPhoneDone
                       ? '인증번호 전송'
                       : isPhoneEdit && isPhoneDone
                       ? '재인증받기'
                       : '휴대폰번호 변경'} */}
                <BtnContent2>휴대폰번호 변경</BtnContent2>   </Button>
                 </ButtonInputBox>
              </MbEditColumn>
            }
            
           <MbEditColumn>
             <MbEditRowTitle>회원탈퇴</MbEditRowTitle>
             <MbEditRowCenter>
                 <MbEditCancel>취소</MbEditCancel>
                 {
                   !!isEditMail ||!!isEditPassword ||!!isEditPhone ?
                   <MbEditSaveHide>저장</MbEditSaveHide>
                   :  <MbEditSave>저장</MbEditSave>
                 }
                
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
                        setIsedit(true)
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
  
const MbEditColumn=styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
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

 
 const inputEditStyle:CSSProperties={
  margin:"10px 10px 60px 20px",
  padding:"11px 48px 11px 14px",
  width:"202px",
  height:"42px",
  borderRadius:"6px",
  border:"solid 1px #c7c7c7",
  backgroundColor:"#fff",
  outlineStyle:"none"
 }

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
  
  const BtnEditContentStyle=styled.span`
   width: 91px;
  height: 20px;
  font-family: SourceHanSansKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.28px;
  text-align: left;
  color: #999;
 `

 const BtnContent1=styled.span`
  width: 66px;
  height: 20px;
  font-family: SourceHanSansKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.28px;
  text-align: center;
  color: #fff;
 `
 const BtnContent2=styled.span`
   width: 91px;
  height: 20px;
  font-family: SourceHanSansKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.28px;
  text-align: left;
  color: #fff;
 `

 
 const buttonEditStyle:CSSProperties={
  width: '108px',
  height: '42px',
  padding: "11px 8px 11px 9px",
  margin: "10px 20px 0px 9px",
  borderRadius:"6px",
  backgroundColor:"#f2f2f2",
  color:"white"
  
 
 }

 const buttonStyle2:CSSProperties={
  width: '108px',
  height: '42px',
  padding: "11px 8px 11px 9px",
  margin: "10px 20px 0px 9px",
  borderRadius:"6px",
  backgroundColor:"#000",
  color:"white"
  
 
 }
 const buttonStyle:CSSProperties = {
   width: '108px',
  height: '42px',
  padding:"11px 21px",
  margin:"10px 20px 0px 9px",
  borderRadius:"6px",
  backgroundColor:"#000",
  color:"white",

};


 
 
const MbEditCancel=styled.div`
 width: 154px;
  height: 46px;
  margin: 0 12px 0 0;
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
  text-align: center;
  color: #222;
  display: flex;
  align-items: center;
`

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
  justify-content: center;
  align-items: center;
  margin: 0px 20px 0px 20px;
  border:"1px solid red",
  
`


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