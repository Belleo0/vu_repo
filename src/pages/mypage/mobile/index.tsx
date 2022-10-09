import React, { useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import infoIcon from  "../../../assets/information_ic.png"
import arrowIcon from "../../../assets/arrow_ic.png"
import candleIcon from  "../../../assets/candle_ic.png"
import settingIcon from "../../../assets/setting_ic.png"
import teamIcon from "../../../assets/team_ic.png"
import profileImg from "../../../assets/profile.png"

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

    return (<MbContainer>
                <MbTitle>마이</MbTitle>
                {
                    !!props.userData?  
                    <MbAlertLogin>
                    <MbAlertTitle>비 로그인 시 일부 서비스가 이용 제한됩니다.</MbAlertTitle>
                    <MbAlertBtn>로그인</MbAlertBtn>
                   </MbAlertLogin>  : 
                    <MbProfile>
                      <MbAvatar src={profileImg}></MbAvatar>
                      <MbInfo>
                        <MbInfoContent>
                        <MbInfoSub>(주)대성건설</MbInfoSub>
                        <MbInfoMain>김건설 과장</MbInfoMain>
                        </MbInfoContent>
                   
                      </MbInfo>
                      
                    </MbProfile>
                   
              
                }
              
               
                    <MbRow> 
                    <MbRowContent>
                      <MbContentLeft>
                          <MbRowIcon src={infoIcon}></MbRowIcon> 
                          <MbRowTitle>회원정보 수정</MbRowTitle>
                      </MbContentLeft>
                      <MbArrowIcon src={arrowIcon}></MbArrowIcon>   
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