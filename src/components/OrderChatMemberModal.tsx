import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { useMemo, useState } from 'react';
import Modal from './Modal';
import SearchInput from './SearchInput';

export default ({ open, onClose, data }: any) => {
  const [search, setSearch] = useState('');

  const searchedData = useMemo(() => {
    if (!data) return [];
    return data.filter((v: any) => v?.name?.includes(search));
  }, [data, search]);

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <TopSection>
          <XIcon src={getAssetURL('../assets/ic-del.svg')} onClick={onClose} />
        </TopSection>
        <Title>현장 멤버</Title>
        <SearchInputWrap>
          <SearchInput
            placeholder="이름 검색"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchInputWrap>
        <SubTitle>현장 멤버({data?.length})</SubTitle>
        {searchedData.length > 0 && <Divider />}
        <UsersWrap>
          {searchedData?.map((user: any) => (
            <UserContainer>
              <UserImg src={getAssetURL('../assets/default-profile.jpeg')} />
              <UserInfoWrap>
                <CompanyName>{user?.company?.name}</CompanyName>
                <UserName>
                  {user?.name} <b>{user?.position}</b>
                </UserName>
              </UserInfoWrap>
            </UserContainer>
          ))}
        </UsersWrap>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 440px;
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
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 40px;
  &:not(:last-child) {
    border-bottom: 1px solid #f2f2f2;
  }
`;

const UserImg = styled.img`
  width: 44px;
  height: 44px;
  margin: 0 14px 0 0;
  border: solid 1px #e3e3e3;
  border-radius: 22px;
`;

const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #777;
  margin-bottom: 8px;
`;

const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;

  & > b {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
    text-align: left;
    color: #000;
    margin-left: 2px;
  }
`;
