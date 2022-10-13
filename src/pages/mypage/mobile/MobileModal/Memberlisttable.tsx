import React, { useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import getAssetURL from '@utils/getAssetURL';
import { setSelectedUserInfo } from '@data/chat';
import Button, { ButtonSize, ButtonType } from '@components/Button';
import useUserInfo from '@hooks/useUserInfo';
import ScrollBox from '../../../../components/ScrollBox';
import TextModal from '../../../../components/TextModal';
import ImgModal from '../../../../components/ImgModal';
import useIsFieldUser from '@hooks/useIsFieldUser';
import useFriends from '@api/useFriends';
import { useDispatch } from 'react-redux';
 
useDispatch
interface IMemberTable {
  data: any[];
  revalidate?: any;
  me: any;
  siteUserId: number;
 
   
}

export default ({ data = [], revalidate, me, siteUserId  }: IMemberTable) => {
  
  const disptach=useDispatch()
  const isFieldUser = useIsFieldUser();
  const {
    data: { friends, error, refetch },
  } = useFriends();

  const [isOrderAuthority, setIsOrderAuthority] = useState<boolean>(false);
  const [confirmAuthorityModal, setConfirmAuthorityModal] =
    useState<boolean>(false);
  const [isDeleteMember, setIsDeleteMember] = useState<boolean>(false);
  const [ConfirmDeleteMember, setConfirmDeleteMember] =
    useState<boolean>(false);

  const handleOrderAuthority = () => {
    setIsOrderAuthority(!isOrderAuthority);
    setConfirmAuthorityModal(!confirmAuthorityModal);
  };

  const handleDeleteMember = () => {
    setIsDeleteMember(!isDeleteMember);
  };
 

   
 
    return(
      <MemberListContainer>
      {data?.map((v: any, i: number) => (
        <MbMemberCell   key={i}>
          <CellLeftSection>
            <MbMemberRow   onClick={()=>disptach(setSelectedUserInfo(v))}>
            <MbProfileImage src={getAssetURL('../assets/default-profile.jpeg')} />
              <MbMemberInfoWrap>
              <CompanyInfo>{v?.company}</CompanyInfo>
              <div style={{display:"flex",alignItems:"center"}}> 
              <MbMemberTitle>{v?.name}</MbMemberTitle>
              <MbMemberTitle style={{marginLeft:".5rem"}}>{v?.position}</MbMemberTitle> </div>
                </MbMemberInfoWrap>  
                {v?.authority && isFieldUser ? (
                  <Chip>주문담당자</Chip>
                ) : v?.authority ? (
                  <Chip>공장관리자</Chip>
                ) : null}
            </MbMemberRow>
          </CellLeftSection>
        </MbMemberCell>
      ))}
      <TextModal
        open={isOrderAuthority}
        onClose={() => setIsOrderAuthority(false)}
        onSubmit={handleOrderAuthority}
        content={'주문담당자 권한을 위임하시겠습니까?'}
        submitText={'권한위임'}
      />
      <TextModal
        open={isDeleteMember}
        onClose={() => setIsDeleteMember(false)}
        onSubmit={handleDeleteMember}
        content={`구성원을 중앙동 일동미라주더마린에서\n삭제하시겠습니까?\n삭제 시 거래 및 모든 채팅방에서 삭제됩니다.`}
        submitText={'삭제'}
      />
      <ImgModal
        open={confirmAuthorityModal}
        onClose={() => setConfirmAuthorityModal(false)}
        content={'주문담당자 변경이 완료되었습니다.'}
        submitText={'확인'}
      />
    </MemberListContainer>
    )
            }
 

const MemberListContainer = styled(ScrollBox)`
  width: 100%;
  overflow-y: scroll;
`;
const MbMemberCell=styled.div`
  display: flex;
`

const MemberCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* height: 148px; */
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
  padding: 35px 40px;
`;
const MbMemberRow=styled.div`
  width: 320px;
  height: 80px;
   display: flex;
   align-items: center;
  margin:0 20px 0 20px;
  background-color: #fff;

`
const MbMemberTitle=styled.span`
    
 
  font-family: SourceHanSansKR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`

const MemberRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const MbMemberInfoWrap=styled.div`
  display: flex;
  flex-direction: column;
   margin-top: 3px;
   margin-left: 14px;
`

const MemberInfoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const MbProfileImage=styled.img`
   width: 44px;
  height: 44px;
  border: solid 1px #e3e3e3;
  border-radius: 50%;
`

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;
`;

const MemberButtonWrap = styled.div`
  display: flex;
`;

const CellLeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const CompanyInfo = styled.div`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #777;
  margin-right: 6px;
`;

const NameInfo = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #000;
  margin-right: 2px;
`;

const PositionInfo = styled.div`
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.32px;
  color: #222;
`;

const Chip = styled.span`
  margin-left: 10px;
  padding: 4px 8px 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 26px;
  border-radius: 15px;
  border: solid 1px #ffb631;

  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.24px;
  color: #ffb631;
`;

const MemberContactWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: normal;
  color: #000;

  margin-bottom: 8px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;

  margin-right: 14px;
`;

const AuthorityButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
