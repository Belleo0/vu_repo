import api from '@api';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import { useState } from 'react';
import Button, { ButtonSize, ButtonType } from './Button';
import InputModal from './InputModal';
import Modal from './Modal';
import SearchUserInviteModal from './SearchUserInviteModal';
import TextModal from './TextModal';

interface IInviteModal {
  open: boolean;
  onClose: any;
  fieldId: number;
  fieldName: string;
}

const inviteButtonItems = [
  {
    type: 'kakao',
    icon: '../assets/ic-member-talk.png',
    title: '카카오톡으로 현장멤버 초대 링크 전송하기',
    helperText: '번호 입력시 카카오톡으로 초대할 수 있습니다.',
  },
  {
    type: 'email',
    icon: '../assets/ic-member-email.png',
    title: '이메일로 현장멤버 초대 링크 전송하기',
    helperText: '메일 주소 입력시 이메일로 초대할 수 있습니다.',
  },
  {
    type: 'friend',
    icon: '../assets/ic-member-list.png',
    title: '내 친구목록 중에서 초대하기',
    helperText: '내 친구를 초대할 수 있습니다.',
  },
  {
    type: 'memeber',
    icon: '../assets/ic-member-search.png',
    title: '회원 직접 검색하여 초대하기',
    helperText: '회원을 직접 검색하여 초대할 수 있습니다.',
  },
];

export default ({ open, onClose, fieldId, fieldName }: IInviteModal) => {
  const [inputInvitationModal, setInputInvitationModal] =
    useState<boolean>(false);

  const [searchInviteModalOpen, setSearchInviteModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inviteType, setInviteType] = useState('');

  const handleModalOpen = (type: string) => {
    switch (type) {
      case 'kakao':
        return setInputInvitationModal(true);
      case 'email':
        return setInputInvitationModal(true);
      case 'friend':
        return setSearchInviteModalOpen(true);
      case 'member':
        return setSearchInviteModalOpen(true);
    }
  };

  const handleSubmitInvitation = async () => {
    try {
      await api.post(`/field-spaces/${fieldId}/invitation`, {
        type: inviteType,
        to: inputValue,
      });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(fieldId, inviteType, inputValue);

  return (
    <Modal
      open={open}
      onClose={onClose}
      modalStyle={
        inputInvitationModal || searchInviteModalOpen ? { display: 'none' } : {}
      }
    >
      <Container>
        <Contents>
          <TopSection>
            <CloseIcon
              src={getAssetURL('../assets/ic-del.svg')}
              onClick={onClose}
            />
          </TopSection>
          <TitleWrap>
            <Title>초대하기</Title>
          </TitleWrap>
          <InviteButtonWrap>
            {inviteButtonItems.map((v: any, i: number) => (
              <InviteButton
                onClick={() => {
                  handleModalOpen(v.type);
                  setInviteType(v.type);
                }}
              >
                <Icon src={getAssetURL(`${v.icon}`)} />
                <TextWrap>
                  <ButtonTitle>{v.title}</ButtonTitle>
                  <HelperText>{v.helperText}</HelperText>
                </TextWrap>
              </InviteButton>
            ))}
          </InviteButtonWrap>
        </Contents>
      </Container>
      <InputModal
        open={inputInvitationModal}
        onClose={() => {
          setInputInvitationModal(false);
        }}
        onSubmit={() => {}}
        title={'초대하기'}
        content={`${fieldName} 건설현장에서\n레미콘을 주문할 수 있는 멤버를 초대합니다.`}
        submitText={'초대하기'}
        label={inviteType === 'kakao' ? '휴대폰번호' : '이메일'}
        value={inputValue}
        setValue={(e: any) => setInputValue(e.target.value)}
      />
      <SearchUserInviteModal
        open={searchInviteModalOpen}
        onClose={() => {
          setSearchInviteModalOpen(false);
        }}
      />
    </Modal>
  );
};

const Container = styled.div`
  width: 440px;
  background-color: white;
  border-radius: 20px;
  padding: 40px;
`;

const Contents = styled.div``;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  margin: 0 auto 30px auto;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`;

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-left: auto;
  margin-bottom: 6px;
  cursor: pointer;
`;

const InviteButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const InviteButton = styled.div`
  width: 360px;
  padding: 22px 20px;
  display: flex;
  align-items: center;

  border-radius: 12px;
  border: solid 1px #e3e3e3;

  margin-bottom: 16px;

  cursor: pointer;
`;

const TextWrap = styled.div``;

const ButtonTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.3px;
  color: #000;

  margin-bottom: 2px;
`;

const HelperText = styled.div`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: #999;
`;

const Icon = styled.img`
  width: 45px;
  height: 45px;

  margin-right: 14px;
`;
