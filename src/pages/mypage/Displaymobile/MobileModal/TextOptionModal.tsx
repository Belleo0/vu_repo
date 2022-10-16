import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import Modal, { ModalButtonWrap } from '@components/Modal';

interface ITextOptionModal {
  open: boolean;
  onClose: () => void;
  onSubmit:()=>void;
  containerStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
  title: string;
  option: string[];
}

const TextOptionModal = (props: ITextOptionModal) => {
  const rootdiv = document.getElementById('root') as HTMLInputElement ;
  rootdiv.setAttribute("style", "overflow:hidden");
  return (
    <Modal {...props}>
      <ModalContainer>
        <ModalTitle>{props.title}</ModalTitle>
        {props.option.map((v: any, i: number) => {
          if (i == props.option.length - 1) {
            return (
              <ModalOption key={"textoptionmodal"}>
                <ModalTextRed>{v}</ModalTextRed>
              </ModalOption>
            );
          } else
            return (
              <ModalOption>
                <ModalText>{v}</ModalText>
              </ModalOption>
            );
        })}
      </ModalContainer>
    </Modal>
  );
};

export default TextOptionModal;

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
