import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { useEffect, useMemo, useState } from 'react';
import Modal from './Modal';
import SearchInput from './SearchInput';
import api from '@api';
import useFriends from '@api/useFriends';
import { css } from '@emotion/react';

export default ({ open, onClose, setChkCompany, companyType }: any) => {
  const [search, setSearch] = useState<string>('');
  const [checkedCompanyId, setCheckedCompanyId] = useState<any>();
  const [companyList, setCompanyList] = useState<any>([]);

  const {
    data: { friends, error, refetch },
  } = useFriends();

  const searchedFriend: any[] = useMemo(() => {
    return friends.filter((v: any) => v?.name?.includes(search));
  }, [search]);

  const onClickConfirm = (v: any) => {
    setChkCompany(friends.find((el: any) => el.id === v));
    onClose();
  };

  function handleChkSearchKeyword(e: any) {
    if (e.code === 'Enter') {
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <TopSection>
          <XIcon src={getAssetURL('../assets/ic-del.svg')} onClick={onClose} />
        </TopSection>
        <Title>초대하기</Title>
        <SearchInputWrap>
          <SearchInput
            placeholder="이름 검색"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => handleChkSearchKeyword(e)}
          />
        </SearchInputWrap>
        <SubTitle>친구/회원({friends?.length})</SubTitle>
        {friends?.length > 0 && <Divider />}
        <UsersWrap>
          {friends.map((v: any, idx: any) => {
            return (
              <Item
                key={idx}
                setCheckedCompanyId={setCheckedCompanyId}
                checkedCompanyId={checkedCompanyId}
                data={v}
                companyType={companyType}
              />
            );
          })}
        </UsersWrap>
        <ButtonWrap>
          <CancelButton
            onClick={() => {
              onClose();
            }}
          >
            취소
          </CancelButton>
          <ConfirmButton
            onClick={() => {
              onClickConfirm(checkedCompanyId);
            }}
          >
            초대하기
          </ConfirmButton>
        </ButtonWrap>
      </Container>
    </Modal>
  );
};

const Item = ({
  setCheckedCompanyId,
  checkedCompanyId,
  data,
  companyType,
}: any) => {
  const component = useMemo(() => {
    return (
      <>
        <UserContentWrap
          selected={checkedCompanyId === data.id}
          onClick={() => {
            setCheckedCompanyId(data.id);
          }}
        >
          {data ? (
            <UserContainer>
              <ProfileImage
                src={getAssetURL('../assets/default-profile.jpeg')}
              />
              <UserInfoWrap>
                <CompanyName>{data?.company.name}</CompanyName>
                <NameInfo>
                  <Name>{data?.name}</Name>
                  <Position>{data?.position}</Position>
                </NameInfo>
              </UserInfoWrap>
            </UserContainer>
          ) : (
            <UserContainer>
              <div>검색어를 입력해 주세요</div>
            </UserContainer>
          )}
          <CIconWrap>
            {checkedCompanyId === data.id ? (
              <CIcon src={getAssetURL('../assets/blue_check_ic_on.svg')} />
            ) : (
              <CIcon src={getAssetURL('../assets/blue_check_ic_off.svg')} />
            )}
          </CIconWrap>
        </UserContentWrap>
        <BottomLineGuard />
      </>
    );
  }, [checkedCompanyId === data.id, data]);

  return component;
};

const Container = styled.div`
  width: 440px;
  height: 733px;
  align-self: center;
  background-color: white;
  border-radius: 20px;
`;

const TopSection = styled.div`
  display: flex;
  padding: 30px 30px 6px 30px;
  justify-content: flex-end;
`;

const XIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Title = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
  margin-bottom: 30px;
`;

const SearchInputWrap = styled.div`
  width: 100%;
  padding: 0px 40px 30px 40px;
`;

const SubTitle = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
  margin-left: 40px;
  margin-bottom: 14px;
`;

const Divider = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #c7c7c7;
`;

const UsersWrap = styled.div`
  height: 419px;
  width: 100%;

  overflow: hidden;
  overflow-y: overlay;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #000;
`;

const CompanyName = styled.span`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #777;
  margin-bottom: 4px;
`;

const CIcon = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin-left: auto;
`;

const UserContentWrap = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 40px;

  ${({ selected }) =>
    selected
      ? css`
          background-color: #258fff1a;
        `
      : css`
          background-color: white;
        `}
  &:hover {
    background-color: #258fff1a;
  }

  transition: background-color 0.1s linear;
`;

const CIconWrap = styled.div`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const ButtonWrap = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-evenly;

  box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.07);
  background-color: #fff;
`;

const ConfirmButton = styled.div`
  width: 170px;
  height: 50px;
  border-radius: 6px;
  background-color: #2580ec;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  color: #fff;
`;

const CancelButton = styled.div`
  width: 170px;
  height: 50px;
  border-radius: 6px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  color: #222;
`;

const BottomLineGuard = styled.div`
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
  height: 1px;
  background-color: #f2f2f2;
`;

const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;

  margin-right: 14px;
`;

const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Position = styled.span`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.32px;
  color: #222;
`;

const NameInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;

  &:last-child {
    margin-left: 2px;
  }
`;
