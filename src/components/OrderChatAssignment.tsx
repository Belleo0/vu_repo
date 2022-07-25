import useAssignmentInfo from '@api/useAssignmentInfo';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import useSelectedSpaceInfo from '@hooks/useSelectedSpaceInfo';
import useUserInfo from '@hooks/useUserInfo';
import { days } from '@utils/calendar';
import { convertTime } from '@utils/date';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import Button, { ButtonSize, ButtonType } from './Button';
import Checkbox from './Checkbox';
import OrderChatAssignmentButton from './OrderChatAssignmentButton';

interface IOrderChatMessage {
  type: string;
  chatRoomData: any;
  companyName: string;
  userName: string;
  userPosition: string;
  data: any;
  sendAt: string;
  isMyChat: boolean;
  mutate: () => any;
}

export default ({
  type,
  chatRoomData,
  companyName,
  userName,
  userPosition,
  data,
  sendAt,
  isMyChat,
  mutate,
}: IOrderChatMessage) => {
  const isFieldUser = useIsFieldUser();
  const selectedSpaceInfo = useSelectedSpaceInfo();
  return (
    <Container style={isMyChat ? { marginLeft: 'auto' } : {}}>
      {!isMyChat && (
        <ProfileContainer>
          <ProfileImage src={getAssetURL('../assets/default-profile.jpeg')} />
          <ProfileInfoWrap>
            <CompanyName>{companyName}</CompanyName>
            <Name>
              {userName} {userPosition}
            </Name>
          </ProfileInfoWrap>
        </ProfileContainer>
      )}
      <MessageContainer>
        {isMyChat && (
          <SendAt style={{ textAlign: 'right' }}>
            {moment(sendAt).format('YY.MM.DD')}
            <br />
            {moment(sendAt).format('HH:mm')}
          </SendAt>
        )}

        <MessageBox isMyChat={isMyChat}>
          {type === 'ASSIGNMENT_DELETE' ? (
            <RemoveTitle>배송일정이 삭제되었습니다.</RemoveTitle>
          ) : type === 'ASSIGNMENT_UPDATE' ? (
            <UpdateTitle>배송일정이 수정되었습니다.</UpdateTitle>
          ) : null}
          <TitleWrap>
            <Title>레미콘 주문</Title>
            <TotalAmountWrap>
              <TotalAmountLabel>총 주문합계</TotalAmountLabel>
              <TotalAmountValue>
                {data?.total?.toLocaleString?.('ko')}m³
              </TotalAmountValue>
            </TotalAmountWrap>
          </TitleWrap>
          <Box>
            <BoxRow>
              <BoxLabel>공급처</BoxLabel>
              <BoxValue>
                {isFieldUser
                  ? chatRoomData?.factory_space?.name
                  : selectedSpaceInfo?.name}
              </BoxValue>
            </BoxRow>
            <BoxRow>
              <BoxLabel>배송일정</BoxLabel>
              <BoxValue>
                {moment(data?.start_time).format('YYYY년 M월 D일')}(
                {days[moment(data?.start_time).day()]}){' '}
                {convertTime(data?.start_time)} - {convertTime(data?.end_time)}
              </BoxValue>
            </BoxRow>
            {(data?.specs || []).map((v: any, i: number) => (
              <BoxRow
                key={i}
                style={{
                  marginBottom: (data?.specs || []).length - 1 === i ? 14 : 8,
                }}
              >
                <BoxLabel>{i === 0 ? '발주내역' : ''}</BoxLabel>
                <BoxValueWrap>
                  <BoxValue>
                    {v.value}-{v.norminal_strength}-{v.slump}
                  </BoxValue>
                  <BoxAmount>{v.quantity?.toLocaleString?.('ko')}m³</BoxAmount>
                </BoxValueWrap>
              </BoxRow>
            ))}
            <CheckboxWrap>
              <Checkbox
                value={data.mulcha}
                onChange={() => null}
                label="물차"
                containerStyle={{ marginRight: 24 }}
              />
              <Checkbox
                value={data.multal}
                onChange={() => null}
                label="물탈"
                containerStyle={{ marginRight: 24 }}
              />
              <Checkbox
                value={data.inducer}
                onChange={() => null}
                label="유도제"
                containerStyle={{ marginRight: 24 }}
              />
            </CheckboxWrap>
            <BoxRow>
              <BoxLabel>특기사항</BoxLabel>
              <BoxValue>{data?.remark}</BoxValue>
            </BoxRow>
            <OrderChatAssignmentButton
              id={data?.id}
              type={data?.type}
              mutate={mutate}
            />
          </Box>
        </MessageBox>
        {!isMyChat && (
          <SendAt style={{ textAlign: 'right' }}>
            {moment(sendAt).format('YY.MM.DD')}
            <br />
            {moment(sendAt).format('HH:mm')}
          </SendAt>
        )}
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

const MessageBox = styled.div<{ isMyChat: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 404px;
  padding: 20px;
  border-radius: 20px;

  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
  margin-right: 6px;

  ${({ isMyChat }) =>
    isMyChat
      ? css`
          border-top-right-radius: 0;
          background-color: rgba(37, 143, 255, 0.04); ;
        `
      : css`
          border-top-left-radius: 0;
          background-color: #f2f2f2;
        `}
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

const TitleWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;

const TotalAmountWrap = styled.div`
  display: flex;
  align-items: center;
`;

const TotalAmountLabel = styled.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: right;
  color: #000;
  margin-right: 6px;
`;

const TotalAmountValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: right;
  color: #258fff;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 20px 14px;
  border-radius: 6px;
  background-color: #fff;
`;

const BoxRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const BoxLabel = styled.span`
  min-width: 47px;
  margin-right: 14px;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #999;
`;

const BoxValue = styled.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #1f1d1d;
`;

const BoxValueWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const BoxAmount = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: right;
  color: #1f1d1d;
`;

const CheckboxWrap = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 16px;
`;

const UpdateTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.36px;
  text-align: left;
  color: #258fff;
  margin-bottom: 6px;
`;

const RemoveTitle = styled(UpdateTitle)`
  color: #ef0000;
`;
