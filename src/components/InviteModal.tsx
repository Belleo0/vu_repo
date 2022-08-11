import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import Button, { ButtonSize, ButtonType } from './Button';
import Modal from './Modal';

export default ({ open, data, onClose }: any) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <Contents>
          <TopSection>
            <CloseIcon
              src={getAssetURL('../assets/ic-del.svg')}
              onClick={onClose}
            />
          </TopSection>
          <TitleWrap>
            <Title>초대하기</Title>
          </TitleWrap>
          <InviteButtonWrap>
            <InviteButton>
              <Icon src={getAssetURL(`../assets/ic-member-talk.png`)} />
              <TextWrap>
                <ButtonTitle>
                  카카오톡으로 현장멤버 초대 링크 전송하기
                </ButtonTitle>
                <HelperText>
                  번호 입력시 카카오톡으로 초대할 수 있습니다.
                </HelperText>
              </TextWrap>
            </InviteButton>
            <InviteButton>
              <Icon src={getAssetURL(`../assets/ic-member-email.png`)} />
              <TextWrap>
                <ButtonTitle>이메일로 현장멤버 초대 링크 전송하기</ButtonTitle>
                <HelperText>
                  메일 주소 입력시 이메일로 초대할 수 있습니다.
                </HelperText>
              </TextWrap>
            </InviteButton>
            <InviteButton>
              <Icon src={getAssetURL(`../assets/ic-member-list.png`)} />
              <TextWrap>
                <ButtonTitle>내 친구목록 중에서 초대하기</ButtonTitle>
                <HelperText>내 친구를 초대할 수 있습니다.</HelperText>
              </TextWrap>
            </InviteButton>
            <InviteButton>
              <Icon src={getAssetURL(`../assets/ic-member-search.png`)} />
              <TextWrap>
                <ButtonTitle>회원 직접 검색하여 초대하기</ButtonTitle>
                <HelperText>
                  회원을 직접 검색하여 초대할 수 있습니다.
                </HelperText>
              </TextWrap>
            </InviteButton>
          </InviteButtonWrap>
        </Contents>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 440px;
  background-color: white;
  border-radius: 20px;
  padding: 40px;
`;

const Contents = styled.div``;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  margin: 0 auto 30px auto;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`;

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-left: auto;
  margin-bottom: 6px;
  cursor: pointer;
`;

const InviteButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const InviteButton = styled.div`
  width: 360px;
  padding: 22px 20px;
  display: flex;
  align-items: center;

  border-radius: 12px;
  border: solid 1px #e3e3e3;

  margin-bottom: 16px;

  cursor: pointer;
`;

const TextWrap = styled.div``;

const ButtonTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.3px;
  color: #000;

  margin-bottom: 2px;
`;

const HelperText = styled.div`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: #999;
`;

const Icon = styled.img`
  width: 45px;
  height: 45px;

  margin-right: 14px;
`;
