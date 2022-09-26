import React from 'react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import Button, { ButtonType } from './Button';
import Modal, { ModalButtonWrap, ModalContainer } from './Modal';

interface IImgModal {
  title?: React.ReactNode;
  content?: React.ReactNode;
  redContent?: React.ReactNode;
  email?: React.ReactNode;
  open: boolean;
  onClose: () => any;
  onSubmit?: () => any;
  submitText?: string;
  imgUrl?: string;
  containerStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

export default (props: IImgModal) => {
  return (
    <Modal {...props}>
      <ModalContainer>
        {props.imgUrl ? (
          <IconContainer onClick={props.onClose}>
            <Icon src={getAssetURL('../assets/ic-del.svg')} />
          </IconContainer>
        ) : null}
        {props.imgUrl ? (
          <ImageContainer>
            <Image src={getAssetURL(`${props.imgUrl}`)} />
          </ImageContainer>
        ) : null}
        <ModalTitle>{props?.title}</ModalTitle>
        {props.content && (
          <ModalText>
            <span style={{ color: '#258fff' }}>{props?.email}</span>
            {props?.content}
          </ModalText>
        )}
        <ModalRedText>{props?.redContent}</ModalRedText>
        <ModalButtonWrap>
          {props.onSubmit ? (
            <Button
              type={ButtonType.GRAY_BLACK}
              onClick={props.onClose}
              containerStyle={{ marginRight: 20 }}
            >
              취소
            </Button>
          ) : null}
          {props.submitText && (
            <Button onClick={props?.onSubmit ? props.onSubmit : props.onClose}>
              {props?.submitText || '확인'}
            </Button>
          )}
        </ModalButtonWrap>
      </ModalContainer>
    </Modal>
  );
};

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

const ModalTitle = styled.div`
  display: block;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.32px;
  text-align: center;
  color: #000;
  text-align: center;
  margin-top: 20px;
  white-space: pre;
`;

const ModalRedText = styled.div`
  display: block;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.32px;
  text-align: center;
  color: #ef0000;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
  white-space: pre;
`;

const BlueText = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.32px;
  color: #258fff;
  text-align: center;
  margin-top: 20px;
  white-space: pre;
`;

const IconContainer = styled.div`
  text-align: right;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const Image = styled.img``;
