import data from '@data';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import Modal from './Modal';
import SearchInput from './SearchInput';

export default ({ open, onClose, data, setChkCompany, companyType }: any) => {
  const [search, setSearch] = useState('');
  const [checkedCompanyId, setCheckedCompanyId] = useState<any>();
  // console.log('data =>', data, 'companyType => ', companyType);

  const searchedData = useMemo(() => {
    if (!data) {
      return [];
    } else if (!search) {
      return data;
    } else {
      return data.filter((v: any) =>
        companyType === 'con'
          ? v?.basic_address?.includes(search)
          : v?.visible_name?.includes(search),
      );
    }
  }, [data, search]);

  const onClickConfirm = (v: any) => {
    setChkCompany(data.find((el: any) => el.id === v));
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <TopSection>
          <XIcon src={getAssetURL('../assets/ic-del.svg')} onClick={onClose} />
        </TopSection>
        <Title>회사명 검색</Title>
        <SearchInputWrap>
          <SearchInput
            placeholder="회사명 검색"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchInputWrap>
        <SubTitle>
          목록({searchedData ? searchedData.length : data?.length})
        </SubTitle>
        {searchedData.length > 0 && <Divider />}
        <UsersWrap>
          {searchedData?.map((v: any, idx: any) => (
            <Item
              key={idx}
              setCheckedCompanyId={setCheckedCompanyId}
              checkedCompanyId={checkedCompanyId}
              data={v}
              companyType={companyType}
            />
          ))}
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
            등록하기
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
          onClick={() => {
            setCheckedCompanyId(data.id);
          }}
        >
          <UserContainer>
            <CompanyName>
              {companyType === 'con' ? data.company.name : data.visible_name}
            </CompanyName>
            <CompanyAddr>
              {companyType === 'con'
                ? data.basic_address || data.company.address
                : data.address}
            </CompanyAddr>
            <CompanyCeoWrap>
              <CompanyCeoTitle>대표자</CompanyCeoTitle>
              <CompanyCeoLineGuard />
              <CompanyCeoName>
                {companyType === 'con' ? data.company.ceo_name : data.ceo_name}
              </CompanyCeoName>
            </CompanyCeoWrap>
          </UserContainer>
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
  overflow-y: scroll;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  width: 100%;
  height: 84px;
  cursor: pointer;
  margin-top: 8px;
  margin-left: 40px;
`;

const CompanyAddr = styled.div`
  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  color: #777;
`;

const CompanyName = styled.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  color: #000;
`;

const CompanyCeoTitle = styled.div`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.24px;
  color: #999;
`;

const CompanyCeoName = styled.div`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.24px;
  color: #000;
`;

const CompanyCeoWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CompanyCeoLineGuard = styled.div`
  width: 1px;
  height: 6px;
  margin: 0 6px;
  background-color: #e3e3e3;
`;

const CIcon = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const UserContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CIconWrap = styled.div`
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin-top: 8px;
  margin-right: 40px;
`;

const ButtonWrap = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-evenly;
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
