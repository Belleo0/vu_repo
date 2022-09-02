import React, { useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import getAssetURL from '@utils/getAssetURL';
import { addHyphen } from '@utils/common';

import MypageLayout from '@layout/MypageLayout';

import Button, { ButtonSize, ButtonType } from '@components/Button';
import useUserInfo from '@hooks/useUserInfo';
import ScrollBox from './ScrollBox';
import TextModal from './TextModal';
import ImgModal from './ImgModal';
import useIsFieldUser from '@hooks/useIsFieldUser';
import api from '@api';

interface IMemberTable {
  data: any;
  mutate?: any;
}

export default ({ data, mutate }: IMemberTable) => {
  const navigate = useNavigate();
  const isFieldUser = useIsFieldUser();

  const [isOrderAuthority, setIsOrderAuthority] = useState<boolean>(false);
  const [confirmAuthorityModal, setConfirmAuthorityModal] =
    useState<boolean>(false);
  const [isDeleteMemberModal, setIsDeleteMemberModal] =
    useState<boolean>(false);
  const [ConfirmDeleteMember, setConfirmDeleteMember] =
    useState<boolean>(false);

  const handleOrderAuthority = () => {
    setIsOrderAuthority(!isOrderAuthority);
    setConfirmAuthorityModal(!confirmAuthorityModal);
  };

  const handleDeleteMember = async () => {
    try {
      await api.delete(`/frineds/${data?.id}`);
      setIsDeleteMemberModal(false);
      await mutate();
    } catch (err) {
      console.log(err);
      window.alert('에러 발생..');
    }
  };

  return (
    <MemberListContainer>
      {data && (
        <MemberCell>
          <CellLeftSection>
            <ProfileImage src={getAssetURL('../assets/default-profile.jpeg')} />
            <MemberRow>
              <MemberInfoWrap>
                <CompanyInfo>{data?.company.name}</CompanyInfo>
                <NameInfo>{data?.name}</NameInfo>
                <PositionInfo>{data?.position}</PositionInfo>
                {data?.authority && isFieldUser ? (
                  <Chip>주문담당자</Chip>
                ) : data?.authority ? (
                  <Chip>공장관리자</Chip>
                ) : null}
              </MemberInfoWrap>
              <MemberButtonWrap>
                <Button
                  size={ButtonSize.SMALL}
                  type={ButtonType.GRAY_BLACK}
                  icon={'ic-minus-people-bk'}
                  containerStyle={{
                    width: 'auto',
                    height: '42px',
                    marginRight: 10,
                  }}
                  onClick={() => setIsDeleteMemberModal(true)}
                >
                  친구삭제
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
                  {addHyphen(data?.phone)}
                </ContactInfo>
                <ContactInfo>
                  <Icon src={getAssetURL('../assets/ic-phone-bk.svg')} />
                  {addHyphen(data?.tel)}
                </ContactInfo>
                <ContactInfo>
                  <Icon src={getAssetURL('../assets/ic-email-bk.svg')} />
                  {data?.signname}
                </ContactInfo>
              </MemberContactWrap>
            </MemberRow>
          </CellLeftSection>
          {!data?.request ? null : (
            <AuthorityButtonWrap>
              <Button
                type={ButtonType.OUTLINE}
                size={ButtonSize.SMALL}
                containerStyle={{
                  width: 86,
                  height: 36,
                  borderRadius: 40,
                  marginBottom: 14,
                }}
                onClick={() => setIsOrderAuthority(true)}
              >
                수락
              </Button>
              <Button
                type={ButtonType.BLACK_OUTLINE}
                size={ButtonSize.SMALL}
                containerStyle={{
                  width: 86,
                  height: 36,
                  borderRadius: 40,
                }}
                onClick={() => setIsDeleteMemberModal(true)}
              >
                거절
              </Button>
            </AuthorityButtonWrap>
          )}
        </MemberCell>
      )}
      <TextModal
        open={isOrderAuthority}
        onClose={() => setIsOrderAuthority(false)}
        onSubmit={handleOrderAuthority}
        content={'주문담당자 권한을 위임하시겠습니까?'}
        submitText={'권한위임'}
      />
      <TextModal
        open={isDeleteMemberModal}
        onClose={() => setIsDeleteMemberModal(false)}
        onSubmit={handleDeleteMember}
        content={`친구를 삭제하시겠습니까?`}
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
