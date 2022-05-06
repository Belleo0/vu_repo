import React from 'react';
import ReactDOM from 'react-dom';

import styled from '@emotion/styled';

import useHiddenBodyOverflow from '@hooks/useHiddenBodyOverflow';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  containerStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

interface ModalComponentProps extends ModalProps {
  children: string | React.ReactNode;
}

export default ({
  open,
  onClose,
  children,
  containerStyle = {},
  wrapperStyle = {},
}: ModalComponentProps) => {
  useHiddenBodyOverflow(open);

  return open
    ? ReactDOM.createPortal(
        <Modal>
          <AbsoluteContainer style={containerStyle}>
            <CloseContainer onClick={onClose} />
            <ModalContainer style={wrapperStyle}>{children}</ModalContainer>
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

const ModalContainer = styled.div`
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
  top: 0;
`;
