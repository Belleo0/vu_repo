import React, { useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import getAssetURL from '@utils/getAssetURL';
import { setSelectedUserInfo } from '@data/chat';
import useUserInfo from '@hooks/useUserInfo';
import ScrollBox from '@components/ScrollBox';
import useIsFieldUser from '@hooks/useIsFieldUser';
import useFriends from '@api/useFriends';
import { useDispatch } from 'react-redux';
import { setIsOpenMemberSpace } from '@data/space';

useDispatch;
interface IMemberTable {
  data: any[];
  revalidate?: any;
  me: any;
  siteUserId: number;
  isManager: boolean;
  onOpenEdit: () => void;
  onOpenContact:()=>void;
}

export default ({
  data = [],
  revalidate,
  me,
  siteUserId,
  isManager,
  onOpenContact,
  onOpenEdit,
}: IMemberTable) => {
  const disptach = useDispatch();
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

    

  if (isManager) {
    return (
      <MemberListContainer>
        {data?.map((v: any, i: number) => (
          <MbMemberCell key={i}>
            <MbMemberRow onClick={() => disptach(setSelectedUserInfo(v))}>
              <MbRowLeft  >
                <MbProfileImage  onClick={onOpenContact} src={getAssetURL('../assets/profile.png')} />
                <MbMemberInfoWrap>
                  <CompanyInfo>{v?.company}</CompanyInfo>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <MbMemberTitle>{v?.name}</MbMemberTitle>
                    <MbMemberTitle style={{ marginLeft: '.5rem' }}>
                      {v?.position}
                    </MbMemberTitle>{' '}
                  </div>
                </MbMemberInfoWrap>
                {v?.authority && isFieldUser ? (
                  <Chip>주문담당자</Chip>
                ) : v?.authority ? (
                  <Chip>공장관리자</Chip>
                ) : null}
              </MbRowLeft>

              <MbRowRight>
                {v?.authority ? null : (
                  <Icon onClick={onOpenEdit} src={getAssetURL('../assets/three-dots.svg')}></Icon>
                )}
              </MbRowRight>
            </MbMemberRow>
          </MbMemberCell>
        ))}
      </MemberListContainer>
    );
  } else
    return (
      <MemberListContainer>
        {data?.map((v: any, i: number) => (
          <MbMemberCell key={i}>
            <MbMemberRow onClick={() => disptach(setSelectedUserInfo(v))}>
              <MbRowLeft>
                <MbProfileImage src={getAssetURL('../assets/profile.png')} />
                <MbMemberInfoWrap>
                  <CompanyInfo>{v?.company}</CompanyInfo>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <MbMemberTitle>{v?.name}</MbMemberTitle>
                    <MbMemberTitle style={{ marginLeft: '.5rem' }}>
                      {v?.position}
                    </MbMemberTitle>{' '}
                  </div>
                </MbMemberInfoWrap>
                {v?.authority && isFieldUser ? (
                  <Chip>주문담당자</Chip>
                ) : v?.authority ? (
                  <Chip>공장관리자</Chip>
                ) : null}
              </MbRowLeft>
              <MbRowRight>
                 
              </MbRowRight>
            </MbMemberRow>
          </MbMemberCell>
        ))}
      </MemberListContainer>
    );
};

const MemberListContainer = styled(ScrollBox)`
  width: 320px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const MbMemberCell = styled.div`
  display: flex;
`;
const MbMemberRow = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  align-items: center;

  background-color: #fff;
`;
const MbMemberTitle = styled.span`
  font-family: SourceHanSansKR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;
const MbRowLeft = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const MbRowRight = styled.div`
  width: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MbMemberInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  margin-left: 14px;
`;

const MemberInfoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const MbProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border: solid 1px #e3e3e3;
  border-radius: 50%;
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

const Icon = styled.img`
  width: 24px;
  height: 24px;

  margin-right: 14px;
`;
