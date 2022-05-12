import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';

interface IOrderChatMessage {
  companyName: string;
  userName: string;
  userPosition: string;
  content: string;
  sendAt: string;
  isMyChat: boolean;
}

export default ({
  companyName,
  userName,
  userPosition,
  content,
  sendAt,
  isMyChat,
}: IOrderChatMessage) => {
  if (isMyChat)
    return (
      <Container style={{ marginLeft: 'auto' }}>
        <MessageContainer>
          <SendAt style={{ textAlign: 'right' }}>
            {moment(sendAt).format('YY.MM.DD')}
            <br />
            {moment(sendAt).format('HH:mm')}
          </SendAt>
          <MessageBox style={{ backgroundColor: '#f2f8ff' }}>
            {content}
          </MessageBox>
        </MessageContainer>
      </Container>
    );
  return (
    <Container>
      <ProfileContainer>
        <ProfileImage src={getAssetURL('../assets/default-profile.jpeg')} />
        <ProfileInfoWrap>
          <CompanyName>{companyName}</CompanyName>
          <Name>
            {userName} {userPosition}
          </Name>
        </ProfileInfoWrap>
      </ProfileContainer>
      <MessageContainer>
        <MessageBox>{content}</MessageBox>
        <SendAt>
          {moment(sendAt).format('YY.MM.DD')}
          <br />
          {moment(sendAt).format('HH:mm')}
        </SendAt>
        {/* <ReplyButton></ReplyButton> */}
      </MessageContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const ProfileImage = styled.img`
  width: 34px;
  height: 34px;
  margin: 0 10px 0 0;
  border: solid 1px #e3e3e3;
  border-radius: 17px;
`;

const ProfileInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #777;
  margin-bottom: 6px;
`;

const Name = styled.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #000;
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const MessageBox = styled.span`
  padding: 10px 20px;
  border-radius: 20px;
  border-top-left-radius: 0;
  background-color: #f2f2f2;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
  margin-right: 6px;
`;

const SendAt = styled.span`
  font-size: 11px;
  line-height: 1.27;
  text-align: left;
  color: #777;
  margin-right: 10px;
`;

// const ReplyButton = styled.div`
//   padding: 6px;
//   border-radius: 6px;
//   background-color: #f2f2f2;
// `;
