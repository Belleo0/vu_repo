import React, { useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import getAssetURL from '@utils/getAssetURL';

import MypageLayout from '@layout/MypageLayout';

import Button, { ButtonSize, ButtonType } from '@components/Button';
import useUserInfo from '@hooks/useUserInfo';
import ScrollBox from './ScrollBox';
import TextModal from './TextModal';
import ImgModal from './ImgModal';
import useIsFieldUser from '@hooks/useIsFieldUser';

interface IMemberTable {
  data: any[];
  revalidate?: any;
}

export default ({ data = [], revalidate }: IMemberTable) => {
  const navigate = useNavigate();
  const isFieldUser = useIsFieldUser();

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

  return (
    <MemberListContainer>
      {data.map((v: any, i: number) => (
        <MemberCell key={i}>
          <CellLeftSection>
            <ProfileImage src={getAssetURL('../assets/default-profile.jpeg')} />
            <MemberRow>
              <MemberInfoWrap>
                <CompanyInfo>{v.company}</CompanyInfo>
                <NameInfo>{v.name}</NameInfo>
                <PositionInfo>{v.position}</PositionInfo>
                {v.authority && isFieldUser ? (
                  <Chip>주문담당자</Chip>
                ) : v.authority ? (
                  <Chip>공장관리자</Chip>
                ) : null}
              </MemberInfoWrap>
              <MemberButtonWrap>
                <Button
                  size={ButtonSize.SMALL}
                  type={
                    v.status === 0
                      ? ButtonType.DISABLED
                      : v.status === 1
                      ? ButtonType.GRAY_BLACK
                      : ButtonType.PRIMARY
                  }
                  icon={
                    v.status === 0
                      ? 'ic-add-person-gray'
                      : v.status === 1
                      ? 'ic-minus-people-bk'
                      : 'ic-add-person-white'
                  }
                  containerStyle={{
                    width: 'auto',
                    height: '42px',
                    marginRight: 10,
                  }}
                >
                  {v.status === 1 ? '친구삭제 ' : '친구추가'}
                </Button>
                <Button
                  size={ButtonSize.SMALL}
                  type={ButtonType.PRIMARY}
                  icon="ic-chat-white"
                  containerStyle={{ width: 'auto', height: '42px' }}
                >
                  채팅하기
                </Button>
              </MemberButtonWrap>
            </MemberRow>
            <MemberRow>
              <MemberContactWrap>
                <ContactInfo>
                  <Icon src={getAssetURL('../assets/ic-cellphone-bk.svg')} />
                  {v.cellPhone}
                </ContactInfo>
                <ContactInfo>
                  <Icon src={getAssetURL('../assets/ic-phone-bk.svg')} />
                  {v.phone}
                </ContactInfo>
                <ContactInfo>
                  <Icon src={getAssetURL('../assets/ic-email-bk.svg')} />
                  {v.email}
                </ContactInfo>
              </MemberContactWrap>
            </MemberRow>
          </CellLeftSection>
          {v.authority ? null : (
            <AuthorityButtonWrap>
              <Button
                type={ButtonType.BLACK_OUTLINE}
                size={ButtonSize.SMALL}
                containerStyle={{
                  width: 86,
                  height: 36,
                  borderRadius: 40,
                  marginBottom: 14,
                }}
                onClick={() => setIsOrderAuthority(true)}
              >
                권한위임
              </Button>
              <Button
                type={ButtonType.BLACK_OUTLINE}
                size={ButtonSize.SMALL}
                containerStyle={{
                  width: 86,
                  height: 36,
                  borderRadius: 40,
                }}
                onClick={() => setIsDeleteMember(true)}
              >
                삭제
              </Button>
            </AuthorityButtonWrap>
          )}
        </MemberCell>
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
  );
};

const MemberListContainer = styled(ScrollBox)`
  width: 100%;
  overflow-y: scroll;
`;

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

const MemberRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const MemberInfoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

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
