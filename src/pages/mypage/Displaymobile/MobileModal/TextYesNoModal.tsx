import React from 'react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import Button, { ButtonType, ButtonSize } from '@components/Button';
import Modal, { ModalButtonWrap } from '@components/Modal';

interface ITextYesNoModal {
  open: boolean;
  onClose: () => any;
  onSubmit:()=>any;
  containerStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
  fullbutton: boolean;
  content: string;
  nocontent: string;
  yescontent: string;
  redtext:string;
}

const TextYesNoModal = (props: ITextYesNoModal) => {
  
  const rootdiv = document.getElementById('root') as HTMLInputElement ;
  rootdiv.setAttribute("style", "overflow:hidden");
  const contentArr=props.content.split("")

  const foundredtextIndex=()=>{
    let foundIndex=props.content.indexOf(props.redtext)
    let redtextlenght=props.redtext.length
    let result=[]
    for(let i=foundIndex;i<redtextlenght+foundIndex;i++)
    result.push(i)
    return result
  }
  const foundRedIndex=foundredtextIndex()

  return (
    <Modal {...props}>
      <ModalContainer>
        <ModalContent>
        {contentArr?.map((v: any, i: number) => (

          <span style={foundRedIndex.indexOf(i)>=0?{color:"red"}:{}}>{v}</span>

        ))}
        </ModalContent>
        {props.fullbutton ? (
          <ModalRow>
            <Button 
              onClick={props.onClose}
              style={{ width: '124px', height: '46px',marginRight:"12px" }}
              type={ButtonType.GRAY_BLACK}
            >
              {props.nocontent}
            </Button>
            <Button
              style={{ width: '124px', height: '46px' }}
              type={ButtonType.PRIMARY} 
              onClick={props.onSubmit}
            >
              {props.yescontent}
            </Button>
          </ModalRow>
        ) : (
            <ModalRow> <Button onClick={props.onClose} style={{ width: '260px',height:"46px" }} type={ButtonType.PRIMARY}>
            {props.yescontent}
          </Button></ModalRow>
         
        )}
      </ModalContainer>
    </Modal>
  );
};

export default TextYesNoModal;

const ModalContent = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -0.28px;
  text-align: center;
  color: #000;
  margin-bottom: 30px;
`;

const ModalRow = styled.div`
  display: flex;
  justify-content: center;
`;

const ModalContainer = styled.div`
  position: absolute;
  bottom: 40%;
  width: 300px;
  min-height: 160px;
  padding: 30px;
  margin: 0 30px 0 30px;
  background-color: #fff;
  border-radius: 25px;
  border-bottom: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
