import Button, { ButtonType } from './Button';
import Modal, { ModalButtonWrap, ModalContainer, ModalText } from './Modal';

interface ITextModal {
  content: React.ReactNode;

  open: boolean;
  onClose: () => any;
  onSubmit?: () => any;
  containerStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

export default (props: ITextModal) => {
  return (
    <Modal {...props}>
      <ModalContainer>
        <ModalText>{props?.content}</ModalText>
        <ModalButtonWrap>
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
            확인
          </Button>
        </ModalButtonWrap>
      </ModalContainer>
    </Modal>
  );
};
