import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import Modal, { ModalButtonWrap } from '@components/Modal';

interface IEditMember {
  open: boolean;
  fulloption: boolean;
  editTitle: string;
  deleteTitle: string;
  title: string;
  onClose: () => any;
  onEdit: () => any;
  onDelete: () => any;
}

const Memberoptionmodal = (props: IEditMember) => {
  const rootdiv = document.getElementById('root') as HTMLInputElement;
  rootdiv.setAttribute('style', 'overflow:hidden');

  if (props.fulloption == true) {
    return (
      <Modal {...props}>
        <ModalContainer>
          <ModalTitle>{props.title}</ModalTitle>
          <ModalOption>
            <ModalText onClick={props.onEdit}>{props.editTitle}</ModalText>
          </ModalOption>
          <ModalOption>
            <ModalText onClick={props.onDelete} style={{ color: 'red' }}>
              {props.deleteTitle}
            </ModalText>
          </ModalOption>
        </ModalContainer>
      </Modal>
    );
  } else {
    return (
      <Modal {...props}>
        <ModalContainer>
          <ModalTitle>{props.title}</ModalTitle>
          <ModalOption onClick={props.onDelete}>
            <ModalText style={{ color: 'red' }}>{props.deleteTitle}</ModalText>
          </ModalOption>
        </ModalContainer>
      </Modal>
    );
  }
};

export default Memberoptionmodal;

const ModalText = styled.span`
  font-family: SourceHanSansKR;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.87;
  letter-spacing: -0.3px;
  text-align: left;
  color: #000;
`;
const ModalTextRed = styled.span`
  font-family: SourceHanSansKR;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.87;
  letter-spacing: -0.3px;
  text-align: left;
  color: red;
`;
const ModalOption = styled.p`
  width: 100%;
  margin: 0 20px 0 20px;
  display: flex;
`;

const ModalTitle = styled.div`
  width: 320px;
  margin: 0 20px 0 20px;
  text-align: center;
`;
const ModalContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 360px;
  min-height: 15vh;
  max-height: 50vh;
  padding: 20px 0 0;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
