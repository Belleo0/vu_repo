import React, { useEffect, useState, useMemo, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import MemberSpaceBar from '@components/MemberSpaceBar';

import useUserInfo from '@hooks/useUserInfo';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useMySpaceInfo from '@api/useMySpaceInfo';

import TextYesNoModal from '../../MobileModal/TextYesNoModal';
import MemberCardModal from './Membercardmodal';
import MemberListTable from './Memberlisttable';
import MemberSideBar from './Membersidebar';
 import MemberOptionModal from './Memberoptionmodal';
import useSelectedUserInfo from '@hooks/useSelectedUserInfo';
import getAssetURL from '@utils/getAssetURL';
import { memberData } from '../../Data/memberdata';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { setIsOpenMemberSpace } from '@data/space';
import { clearSelectedUserInfo } from '@data/chat';

const MobileScreen = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const selectedSpaceId = useSelectedSpaceId();
  const [inviteModalOpen, setInviteModalOpen] = useState(true);
  const [isManager, setIsManager] = useState(true);
  const [isEidtModalOpen,setIsEditModalOpen]=useState(false)
  const [isModified,setIsModified]=useState(false)
  const [isDeleted,setIsDeleted]=useState(false)
  const [isSubmit,setIsSubmit]=useState(false)
  const [isContactModalOpen,setIsContactModalOpen]=useState(false)
   
 const onSubmit=()=>{
     setIsSubmit(true)
     setIsModified(false)
     setIsDeleted(false)
 }
  
  const onEdit=()=>{
    setIsModified(true)
    setIsEditModalOpen(false)
  }
  const onDelete=()=>{
    setIsDeleted(true)
    setIsEditModalOpen(false)
  }

  const onOpenEdit = () => {
     setIsEditModalOpen(true);
  };

  const onOpenContact=()=>{
    setIsContactModalOpen(true)
  }

  //Get isMemberSpaceOpen
  const isMemberSpaceOpen = useSelector((v: any) => v.space.isMemberSpaceOpen);
  //Get userInfo
  const userInfo = useUserInfo();
  //Get selectedMember
  const userinfoSelected = useSelectedUserInfo();
  //Get selectedSpaceID
  const {
    data: { info, members, suppliers },
    isLoading,
    supplierMutate,
  } = useMySpaceInfo(selectedSpaceId);

  //reset Space
  const resetState = () => {
    disptach(setIsOpenMemberSpace(false));
    disptach(clearSelectedUserInfo());
    navigate('/mypage');
  };
 
  // if  isMemberSpaceOpen  it will check position of user is manager or member to render
  if (isMemberSpaceOpen == true) {
    if (isManager) {
      return (
        <MbContainer>
          <MbNav>
            <MbBackIcon
              style={{ marginLeft: '20px' }}
              onClick={resetState}
              src={getAssetURL('../assets/arrow_back_ic.svg')}
            ></MbBackIcon>
            <MbTitle>조직관리</MbTitle>
            <MbIcon
              style={{ marginRight: '20px' }}
              src={getAssetURL('../assets/search_ic_bl.svg')}
            ></MbIcon>
          </MbNav>
          <MemberSpaceBar
            id={userInfo?.id}
            name={`${userInfo?.name} ${userInfo?.company.name}`}
            adminUserName={userInfo?.admin_user?.name}
            siteUserName={userInfo?.site_user?.name}
            address={userInfo?.basic_address}
            setInviteModalOpen={setInviteModalOpen}
          />
          <MemberSpaceWrap>
            <MemberRow> 현장 멤버 {memberData.length}</MemberRow>
            <MemberListTable
              data={memberData}
              me={userInfo}
              siteUserId={userInfo?.site_user?.id}
              onOpenEdit={onOpenEdit}
              onOpenContact={onOpenContact}
              isManager={isManager}
            />
          </MemberSpaceWrap>

          {/* Click Avatar of member will open  Member Contact Modal */}
          <MemberCardModal
            open={isContactModalOpen}
            onClose={() => setIsContactModalOpen(false)}
            me={userInfo}
          ></MemberCardModal>

         {/* Edit Modal */}
         <MemberOptionModal
          open={isEidtModalOpen}
          fulloption={true}
          editTitle={"권한위임"}
          deleteTitle={"삭제"}
          title={"필터"}
          onClose={()=>{setIsEditModalOpen(false)}}
          onDelete={onDelete}
          onEdit={onEdit}
         ></MemberOptionModal>

          {/* Click Edit will show this modal */}
          <TextYesNoModal
            open={isModified}
            onClose={() => setIsModified(false)}
            onSubmit={onSubmit}
            fullbutton={true}
            content="주문담당자 권한을 위임하시겠습니까?"
            yescontent="권한위임"
            nocontent="취소"
            redtext=''
          ></TextYesNoModal>
           {/* Susscess Message When Submit */}
          <TextYesNoModal
            open={isSubmit}
            onClose={() => setIsSubmit(false)}
            onSubmit={() => setIsSubmit(false)}
            fullbutton={false}
            content="주문담당자 변경이 완료되었습니다."
            yescontent="확인"
            nocontent=""
            redtext=''
          ></TextYesNoModal>

          <TextYesNoModal
            open={isDeleted}
            onClose={() =>setIsDeleted(false)}
            onSubmit={onSubmit}
            fullbutton={true}
            content="구성원을 중앙동 일동미라주더마린에서 
            삭제하시겠습니까?
            삭제 시 거래 및 모든 채팅방에서 삭제됩니다."
            yescontent="삭제"
            nocontent="취소"
            redtext=''
          ></TextYesNoModal>
        </MbContainer>
      );
    } else
      return (
        <MbContainer>
          <MbNav>
            <MbBackIcon
              style={{ marginLeft: '20px' }}
              onClick={resetState}
              src={getAssetURL('../assets/arrow_back_ic.svg')}
            ></MbBackIcon>
            <MbTitle>조직관리</MbTitle>
            <MbIcon
              style={{ marginRight: '20px' }}
              src={getAssetURL('../assets/search_ic_bl.svg')}
            ></MbIcon>
          </MbNav>
          <MemberSpaceBar
            id={userInfo?.id}
            name={`${userInfo?.name} ${userInfo?.company.name}`}
            adminUserName={userInfo?.admin_user?.name}
            siteUserName={userInfo?.site_user?.name}
            address={userInfo?.basic_address}
            setInviteModalOpen={setInviteModalOpen}
          />
          <MemberSpaceWrap>
            <MemberRow> 현장 멤버 {memberData.length}</MemberRow>
            <MemberListTable
              data={memberData}
              me={userInfo}
              siteUserId={userInfo?.site_user?.id}
              onOpenEdit={() => {}}
              onOpenContact={onOpenContact}
              isManager={isManager}
            />
          </MemberSpaceWrap>
        </MbContainer>
      );
  }
  //Return member
  else
    return (
      <MbContainer>
        <MbNav>
          <MbBackIcon
            style={{ marginLeft: '20px' }}
            onClick={resetState}
            src={getAssetURL('../assets/arrow_back_ic.svg')}
          ></MbBackIcon>
          <MbTitle>조직관리</MbTitle>
          <MbIcon
            style={{ marginRight: '20px' }}
            src={getAssetURL('../assets/search_ic_bl.svg')}
          ></MbIcon>
        </MbNav>
        <MemberWrap>
          <MemberSideBar isManager={isManager} />
        </MemberWrap>
      </MbContainer>
    );
};

const MemberRow = styled.div`
  display: flex;
  width: 320px;
  font-family: SourceHanSansKR;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 5.2;
  letter-spacing: -0.3px;
  text-align: right;
  color: #222;
 
`;

const MemberSpaceWrap=styled.div`
  width: 320px;
  margin: 0 20px 0 20px;
`

const MemberWrap = styled.div`
  display: flex;
  width: 360px;
  flex-direction: column;
  background-color: #fff;
  border-bottom: 1px solid #e3e3e3;
`;

const MbContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const MbBackIcon = styled.img`
  width: 10px;
  height: 20px;

  object-fit: contain;
`;
const MbIcon = styled.img`
  width: 24px;
  height: 24px;

  object-fit: contain;
`;

const MbNav = styled.div`
  width: 360px;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`;

const MbTitle = styled.span`
  height: 60px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CloseContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export default MobileScreen;
