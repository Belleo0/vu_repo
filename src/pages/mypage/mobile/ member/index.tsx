import React, { useEffect, useState, useMemo, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import MemberSpaceBar from '@components/MemberSpaceBar';
import MemberSideBar from '@components/MemberSideBar';
import useUserInfo from '@hooks/useUserInfo';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useMySpaceInfo from '@api/useMySpaceInfo';

import TextYesNoModal from '../MobileModal/TextYesNoModal';
import MemberCardModal from '../MobileModal/MemberCardModal';
import MemberListTable from '../MobileModal/Memberlisttable';
import TextOptionModal from '../MobileModal/TextOptionModal';
import useSelectedUserInfo from '@hooks/useSelectedUserInfo';
import getAssetURL from '@utils/getAssetURL';

const memberData = [
  {
    id: '1',
    name: '김건설',
    company: '(주)대성건설',
    position: '대리',
    authority: '1',
    cellPhone: '010-1234-5678',
    phone: '02) 2134-5678',
    email: 'conbox@conbox.com',
    status: 0,
  },
  {
    id: '2',
    name: '김수현',
    company: '(주)대성건설',
    position: '대리',
    cellPhone: '010-1234-5678',
    phone: '02) 2134-5678',
    email: 'conbox@conbox.com',
    status: 1,
  },
  {
    id: '3',
    name: '이하진',
    company: '(주)대성건설',
    position: '대리',
    cellPhone: '010-1234-5678',
    phone: '02) 2134-5678',
    email: 'conbox@conbox.com',
    status: 2,
  },
  {
    id: '4',
    name: '제임스',
    company: '(주)대성건설',
    position: '대리',
    cellPhone: '010-1234-5678',
    phone: '02) 2134-5678',
    email: 'conbox@conbox.com',
    status: 2,
  },
  {
    id: '5',
    name: '코나즈',
    company: '(주)대성건설',
    position: '대리',
    cellPhone: '010-1234-5678',
    phone: '02) 2134-5678',
    email: 'conbox@conbox.com',
    status: 2,
  },
  {
    name: '코나즈',
    company: '(주)대성건설',
    position: '대리',
    cellPhone: '010-1234-5678',
    phone: '02) 2134-5678',
    email: 'conbox@conbox.com',
    status: 2,
  },
  {
    id: '6',
    name: '코나즈',
    company: '(주)대성건설',
    position: '대리',
    cellPhone: '010-1234-5678',
    phone: '02) 2134-5678',
    email: 'conbox@conbox.com',
    status: 2,
  },
];

const MobileScreen = () => {
  const navigate = useNavigate();
  const selectedSpaceId = useSelectedSpaceId();
  const [inviteModalOpen, setInviteModalOpen] = useState(true);
  const [isManager, setIsManager] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
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
  //if selecteduserinfo is selected will open Membercardmodal
  useEffect(() => {
    if (userinfoSelected) setIsCardModalOpen(true);
  }, [userinfoSelected]);
  // if id selected it will check position of user is manager or member to render
  if (selectedSpaceId) {
    if (isManager) {
      return (
        <MbContainer>
          <MbNav>
            <MbBackIcon
              style={{ marginLeft: '20px' }}
              onClick={() => navigate('/mypage')}
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
          <MemberWrap>
            <MemberRow> 현장 멤버 {memberData.length}</MemberRow>
            <MemberListTable
              data={memberData}
              me={userInfo}
              siteUserId={userInfo?.site_user?.id}
            />
          </MemberWrap>
          <MemberCardModal
            open={isCardModalOpen}
            onClose={() => setIsCardModalOpen(false)}
            me={userInfo}
          ></MemberCardModal>

          {/* <TextOptionModal
            open={false}
            onClose={() => setIsCardModalOpen(false)}
            title="필터"
            option={['권한위임', '삭제']}
          ></TextOptionModal> */}

          {/* <TextYesNoModal
            open={true}
            onClose={() => setIsCardModalOpen(false)}
            fullbutton={true}
            content="주문담당자 권한을 위임하시겠습니까?"
            yescontent="권한위임"
            nocontent="취소"
          ></TextYesNoModal> */}

          {/* <TextYesNoModal
            open={true}
            onClose={() => setIsCardModalOpen(false)}
            fullbutton={false}
            content="주문담당자 변경이 완료되었습니다."
            yescontent="확인"
            nocontent=""
          ></TextYesNoModal> */}

          {/* <TextYesNoModal
            open={true}
            onClose={() => setIsCardModalOpen(false)}
            fullbutton={true}
            content="구성원을 중앙동 일동미라주더마린에서 
            삭제하시겠습니까?
            삭제 시 거래 및 모든 채팅방에서 삭제됩니다."
            yescontent="삭제"
            nocontent="취소"
          ></TextYesNoModal> */}
        </MbContainer>
      );
    } else
      return (
        <MbContainer>
          <MbNav>
            <MbBackIcon
              style={{ marginLeft: '20px' }}
              onClick={() => navigate('/mypage')}
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
          <MemberWrap>
            <MemberRow> 현장 멤버 {memberData.length}</MemberRow>
            <MemberListTable
              data={memberData}
              me={userInfo}
              siteUserId={userInfo?.site_user?.id}
            />
          </MemberWrap>
        </MbContainer>
      );
  }
  //Return member 
  return (
    <MbContainer>
      <MbNav>
        <MbBackIcon
          style={{ marginLeft: '20px' }}
          onClick={() => navigate('/mypage')}
          src={getAssetURL('../assets/arrow_back_ic.svg')}
        ></MbBackIcon>
        <MbTitle>조직관리</MbTitle>
        <MbIcon
          style={{ marginRight: '20px' }}
          src={getAssetURL('../assets/search_ic_bl.svg')}
        ></MbIcon>
      </MbNav>
      <MemberWrap>
        <MemberSideBar />
      </MemberWrap>
    </MbContainer>
  );
};

const MemberRow = styled.div`
  display: flex;
  width: 320;
  font-family: SourceHanSansKR;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 5.2;
  letter-spacing: -0.3px;
  text-align: right;
  color: #222;
  margin: 0 20px;
`;

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
