import React from 'react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import Button, { ButtonType } from './Button';
import Modal, { ModalButtonWrap } from './Modal';

interface IImgModal {
  content: React.ReactNode;
  bottomContent?: React.ReactNode;
  open: boolean;
  onClose: () => any;
  onSubmit?: () => any;
  submitText?: string;
  containerStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

export default (props: IImgModal) => {
  return (
    <Modal {...props}>
      <ModalContainer>
        {props.bottomContent ? (
          <>
            <ModalText>{props?.content}</ModalText>
            <ModalDoubleText>{props?.bottomContent}</ModalDoubleText>
          </>
        ) : (
          <ModalText>{props?.content}</ModalText>
        )}
        <ModalButtonWrap
          style={
            props.bottomContent ? { marginTop: '40px' } : { marginTop: '56px' }
          }
        >
          {props.onSubmit && (
            <Button
              type={ButtonType.GRAY_BLACK}
              onClick={props.onClose}
              containerStyle={{ marginRight: 20 }}
            >
              취소
            </Button>
          )}
          <Button onClick={props?.onSubmit ? props.onSubmit : props.onClose}>
            {props?.submitText || '확인'}
          </Button>
        </ModalButtonWrap>
      </ModalContainer>
    </Modal>
  );
};

const ModalText = styled.div`
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  color: #000;
  text-align: center;
  white-space: pre;
`;
const ModalDoubleText = styled.div`
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  color: #000;
  text-align: center;
  white-space: pre;
  margin-top: 14px;
`;

const ModalContainer = styled.div`
  width: 400px;
  height: 230px;
  padding: 60px 40px 0 40px;
  border-radius: 20px;
  background-color: #fff;
`;
