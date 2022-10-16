import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import Button, { ButtonType, ButtonSize } from '@components/Button';
import Modal, { ModalButtonWrap } from '@components/Modal';
import { useDispatch } from 'react-redux';
import { setSelectedUserInfo } from '@data/chat';
import useSelectedUserInfo from '@hooks/useSelectedUserInfo';

interface ICardModal {
  open: boolean;
  onClose: () => any;
  onSubmit?: () => any;
  submitText?: string;
  containerStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
  me: any;
}

const MemberCardModal = (props: ICardModal) => {
  const dispatch = useDispatch();
  const userinfoSelected = useSelectedUserInfo();
 
  return (
    <Modal {...props}>
      <ModalCard>
        <ModalText></ModalText>
        <ModalButtonWrap>
          <CloseContainer onClick={props.onClose}>
            <Icon src={getAssetURL('../assets/ic-del.svg')} />
          </CloseContainer>
          <MainContainer>
            <MainImg src={getAssetURL('../assets/profile.png')}></MainImg>
            <MainSubTitle>
              {userinfoSelected?.company} {userinfoSelected?.position}
            </MainSubTitle>
            <MainTitle>{userinfoSelected?.name}</MainTitle>

            <ContactWrap>
              <ContactRow>
                <Icon src={getAssetURL('../assets/cellphone_ic.svg')}></Icon>
                <ContactText>{userinfoSelected?.cellPhone}</ContactText>
              </ContactRow>
              <ContactRow>
                <Icon src={getAssetURL('../assets/ic-phone-bk.svg')}></Icon>
                <ContactText>{userinfoSelected?.phone}</ContactText>
              </ContactRow>
              <ContactRow>
                <Icon src={getAssetURL('../assets/mail_ic.svg')}></Icon>
                <ContactText>{userinfoSelected?.email}</ContactText>
              </ContactRow>

              <MemberButtonWrap>
                <Button
                  size={ButtonSize.SMALL}
                  type={
                    props.me
                      ? ButtonType.DISABLED
                      : userinfoSelected?.status === 1
                      ? ButtonType.GRAY_BLACK
                      : ButtonType.PRIMARY
                  }
                  icon={
                    props.me
                      ? 'ic-add-person-gray'
                      : userinfoSelected?.status === 1
                      ? 'ic-minus-people-bk'
                      : 'ic-add-person-white'
                  }
                  containerStyle={{
                    width: '154px',
                    height: '42px',
                    marginRight: 10,
                  }}
                >
                  {userinfoSelected?.status === 1 ? '친구삭제 ' : '친구추가'}
                </Button>
                <Button
                  size={ButtonSize.SMALL}
                  type={ButtonType.PRIMARY}
                  icon="ic-chat-white"
                  containerStyle={{ width: '154px', height: '42px' }}
                  onClick={() => {
                    props.me
                      ? null
                      : dispatch(setSelectedUserInfo(userinfoSelected));
                  }}
                >
                  채팅하기
                </Button>
              </MemberButtonWrap>
            </ContactWrap>
          </MainContainer>
        </ModalButtonWrap>
      </ModalCard>
    </Modal>
  );
};

export default MemberCardModal;

const ContactWrap = styled.div`
  margin-top: 24px;
  height: 227px;
  border-top: 1px solid #e3e3e3;
  display: flex;
  flex-direction: column;
`;
const ContactRow = styled.div`
  height: 24px;
  width: 340px;
  margin: 0 20px 16px 20px;
  display: flex;
  align-items: center;
`;
const ContactText = styled.span`
  margin-left: 10px;
  font-family: SourceHanSansKR;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 9.43;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;

const MainContainer = styled.div`
  width: 100%;
  margin-top: 6px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const MainImg = styled.img`
  width: 86px;
  height: 86px;
  margin-top: 24px;
  object-fit: contain;
`;

const MainTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.36px;
  text-align: left;
  color: #000;
`;

const MainSubTitle = styled.span`
  font-family: SourceHanSansKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 5;
  letter-spacing: -0.24px;
  text-align: left;
  color: #444;
`;

const ModalText = styled.div`
  display: block;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.32px;
  text-align: center;
  color: #000;
  text-align: center;
  margin-top: 20px;
  white-space: pre;
`;

const ModalCard = styled.div`
  position: absolute;
  bottom: 0;
  width: 360px;
  height: 447px;
  padding: 20px 0 0;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: none;
  overflow: hidden;
`;
const CloseContainer = styled.div`
  position: absolute;
  width: 320px;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  margin: 0 20px 0 20px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
const MemberButtonWrap = styled.div`
  display: flex;
  width: 320px;
  margin: 0 20px 0 20px;
  height: 66px;
  justify-content: center;
  align-items: center;
`;
