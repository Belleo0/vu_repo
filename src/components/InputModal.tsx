import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import Button, { ButtonType } from './Button';
import Input from './Input';
import Modal, { ModalButtonWrap, ModalContainer, ModalText } from './Modal';

interface ITextModal {
  content: React.ReactNode;
  open: boolean;
  onClose: () => any;
  onSubmit?: () => any;
  submitText?: string;
  containerStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
  label?: string;
  title?: string;
  value: any;
  setValue?: any;
}

export default (props: ITextModal) => {
  return (
    <Modal {...props}>
      <ModalContainer>
        <IconContainer onClick={props.onClose}>
          <Icon src={getAssetURL('../assets/ic-del.svg')} />
        </IconContainer>
        <ModalTitle>{props?.title}</ModalTitle>
        <ModalText>{props?.content}</ModalText>
        <Input
          label={props.label}
          value={props.value}
          onChange={props.setValue}
        />
        <ModalButtonWrap>
          {/* {props.onSubmit && (
            <Button
              type={ButtonType.GRAY_BLACK}
              onClick={props.onClose}
              containerStyle={{ marginRight: 20 }}
            >
              취소
            </Button>
          )} */}
          <Button onClick={props?.onSubmit ? props.onSubmit : props.onClose}>
            {props?.submitText || '확인'}
          </Button>
        </ModalButtonWrap>
      </ModalContainer>
    </Modal>
  );
};

const IconContainer = styled.div`
  text-align: right;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  display: block;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.36px;
  text-align: left;
  color: #444;
  line-height: 1.63;
  letter-spacing: -0.32px;
  text-align: center;
  white-space: pre;
`;
