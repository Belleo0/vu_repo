import React from 'react';
import ReactDOM from 'react-dom';

import styled from '@emotion/styled';

import useHiddenBodyOverflow from '@hooks/useHiddenBodyOverflow';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  modalStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

export interface ModalComponentProps extends ModalProps {
  children: string | React.ReactNode;
}

export default ({
  open,
  onClose,
  children,
  modalStyle = {},
  containerStyle = {},
  wrapperStyle = {},
}: ModalComponentProps) => {
  useHiddenBodyOverflow(open);

  return open
    ? ReactDOM.createPortal(
        <Modal style={modalStyle}>
          <AbsoluteContainer style={containerStyle}>
            <CloseContainer onClick={onClose} />
            <Container style={wrapperStyle}>{children}</Container>
          </AbsoluteContainer>
        </Modal>,
        document.getElementById('root') as HTMLElement,
      )
    : null;
};

const Modal = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 10000;
  top: 0;
  left: 0;
`;

const CloseContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  border-radius: 6px;
  box-sizing: border-box;
  z-index: 200;
 `;

const AbsoluteContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const MbModalContainer=styled.div`
  width: 300px;
  margin: 0 20px;
  padding: 6px 20px;
  background-color: #fff;
  border-radius: 20px;
 overflow: hidden;
`

export const ModalContainer = styled.div`
  min-width: 300px;
  padding: 30px 40px;
  border-radius: 20px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
`;

export const ModalText = styled.span`
  display: block;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.32px;
  text-align: center;
  color: #000;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  white-space: pre;
`;

export const ModalButtonWrap = styled.div`
  display: flex;
  width: 100%;
`;

export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
  margin-bottom: 30px;
`;

export const ShadowButtonWrap = styled(ModalButtonWrap)`
  width: calc(100% + 80px);
  margin-left: -40px;
  margin-bottom: -20px;
  box-shadow: 0 -6px 16px 0 rgba(0, 0, 0, 0.06);
  padding: 20px 40px;
`;

export const CustomShadowButtonWrap = styled(ModalButtonWrap)`
  width: 100%;
  box-shadow: 0 -6px 16px 0 rgba(0, 0, 0, 0.06);
  padding: 30px 40px;
`;
