import api from '@api';
import useFriends from '@api/useFriends';
import { setSelectedUserInfo } from '@data/chat';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import { addHyphen } from '@utils/common';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import Button, { ButtonSize, ButtonType } from './Button';
import Modal from './Modal';

export default ({ open, data, onClose, companyName }: any) => {
  const dispatch = useDispatch();

  const {
    data: { friends, error, refetch },
  } = useFriends();

  const handleAddFriend = async () => {
    if (!data.id) return;
    try {
      await api.post(`/frineds/${data?.id}`);
      onClose();
      refetch();
    } catch (err) {
      console.log(err);
      window.alert('에러 발생..');
    }
  };

  const handleDeleteFriend = async () => {
    if (!data.id) return;
    try {
      await api.delete(`/frineds/${data?.id}`);
      onClose();
      refetch();
    } catch (err) {
      console.log(err);
      window.alert('에러 발생..');
    }
  };

  const isFriend = useMemo(() => {
    return friends?.filter((v: any) => v.id === data?.id);
  }, [friends, data]);

  console.log('data', data);

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        {data && (
          <Contents>
            <TopSection>
              <CloseIcon
                src={getAssetURL('../assets/ic-del.svg')}
                onClick={onClose}
              />
            </TopSection>
            <ProfileImageBox>
              <ProfileImage
                src={getAssetURL('../assets/default-profile.jpeg')}
              />
              <CompanyName>{companyName}</CompanyName>
              <Name>
                {data.name}
                <Position>{data.position}</Position>
              </Name>
            </ProfileImageBox>
            <Divider />
            <MemberContactWrap>
              <ContactInfo>
                <Icon src={getAssetURL('../assets/ic-cellphone-bk.svg')} />
                {addHyphen(data.phone)}
              </ContactInfo>
              <ContactInfo>
                <Icon src={getAssetURL('../assets/ic-phone-bk.svg')} />
                {addHyphen(data.tel)}
              </ContactInfo>
              <ContactInfo>
                <Icon src={getAssetURL('../assets/ic-email-bk.svg')} />
                {data.signname}
              </ContactInfo>
            </MemberContactWrap>
            <ButtonSection>
              <Button
                size={ButtonSize.PRIMARY}
                type={
                  isFriend.length > 0
                    ? ButtonType.GRAY_BLACK
                    : ButtonType.PRIMARY
                }
                icon={
                  isFriend.length > 0
                    ? 'ic-minus-people-bk'
                    : 'ic-add-person-white'
                }
                iconStyle={{ width: '19px', height: '19px' }}
                containerStyle={{
                  height: '50px',
                  marginRight: 20,
                }}
                onClick={
                  isFriend.length > 0 ? handleDeleteFriend : handleAddFriend
                }
              >
                {isFriend.length > 0 ? '친구삭제' : '친구추가'}
              </Button>
              <Button
                size={ButtonSize.PRIMARY}
                type={ButtonType.PRIMARY}
                icon="ic-chat-white"
                containerStyle={{ height: '50px' }}
                iconStyle={{ width: '19px', height: '19px' }}
                onClick={() => dispatch(setSelectedUserInfo(data))}
              >
                채팅하기
              </Button>
            </ButtonSection>
          </Contents>
        )}
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 360px;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
`;

const Contents = styled.div``;

const ProfileImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;

  margin-bottom: 25px;
`;

const CompanyName = styled.div`
  font-size: 15px;
  font-weight: normal;
  letter-spacing: -0.3px;
  color: #999;

  margin-bottom: 7px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
  color: #000;

  margin-bottom: 24px;
`;

const Position = styled.span`
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.32px;
  color: #222;

  margin-left: 4px;
`;

const Divider = styled.div`
  display: block;
  height: 1px;
  background-color: #e3e3e3;

  margin-bottom: 20px;
`;

const ContactSection = styled.div``;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-left: auto;
  margin-bottom: 6px;
  cursor: pointer;
`;

const MemberContactWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: normal;
  color: #000;

  margin-bottom: 14px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;

  margin-right: 14px;
`;

const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 40px;
`;

// const Divider = styled.span`
//   display: block;
//   width: 100%;
//   height: 1px;
//   margin: 20px 0px;
//   background-color: #e3e3e3;
// `;

// const SubTitle = styled.span`
//   display: block;
//   font-size: 16px;
//   font-weight: 600;
//   letter-spacing: -0.32px;
//   color: #000;
//   margin-bottom: 10px;
// `;

// const Table = styled.div`
//   display: flex;
//   flex-direction: column;
//   border-top: 1px solid #c7c7c7;
//   background-color: white;
// `;

// const CellWrap = styled.div`
//   display: flex;
//   width: 100%;
//   border-bottom: 1px solid #e3e3e3;
// `;

// const LabelCell = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   flex: 1;
//   min-width: 180px;
//   max-width: 164px;
//   padding: 17px 20px;
//   background-color: #f2f2f2;

//   font-size: 14px;
//   letter-spacing: -0.28px;
//   text-align: left;
//   color: #444;

//   border-right: 1px solid #e3e3e3;
// `;

// const ValueCell = styled.div`
//   display: flex;
//   align-items: center;

//   flex: 2;
//   padding: 17px 15px;

//   font-size: 16px;
//   font-weight: 500;
//   letter-spacing: -0.32px;
//   text-align: left;
//   color: #222;
// `;

// const EngName = styled.span`
//   display: block;
//   font-size: 12px;
//   letter-spacing: -0.24px;
//   text-align: left;
//   color: #999;
//   margin-top: 4px;
// `;

// const ColumnCellWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;

// const ColumnLabelCell = styled.div`
//   display: flex;
//   align-items: center;

//   min-width: 257px;
//   padding: 8px 24px;
//   background-color: #f2f2f2;

//   font-size: 13px;
//   letter-spacing: -0.28px;
//   text-align: left;
//   color: #444;

//   border-right: 1px solid #e3e3e3;
// `;

// const ColumnValueCell = styled.div`
//   display: flex;
//   align-items: center;

//   flex: 1;
//   padding: 8px 21px;

//   font-size: 13px;
//   font-weight: 500;
//   letter-spacing: -0.32px;
//   text-align: left;
//   color: #222;
// `;

// const ColumnEngName = styled.span`
//   font-size: 11px;
//   letter-spacing: -0.24px;
//   text-align: left;
//   color: #999;
//   margin-top: 4px;
// `;
