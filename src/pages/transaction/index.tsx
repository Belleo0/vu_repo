import React from 'react';
import styled from '@emotion/styled';
import SpaceLayout from '@layout/SpaceLayout';
import MyFieldVendorTable from '@components/MyFieldVendorTable';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useMySpaceInfo from '@api/useMySpaceInfo';
import VendorTable from '@components/VendorTable';
import TransactionSpaceBar from '@components/TransactionSpaceBar';
import TransactionTable from '@components/TransactionTable';
import Button from '@components/Button';
import TransactionFilter from '@components/TransactionFilter';

const transactions = [
  {
    id: 1,
    supplyDate: '2022.06.08',
    name: '(주)표주레미콘',
    basic_address: '부산 영도구 해양로 225',
    size: '25 - 24 - 150',
    preAmount: '120',
    amount: '124',
    status: '0',
  },
  {
    id: 2,
    supplyDate: '2022.06.09',
    name: '(주)표주레미콘2',
    basic_address: '부산 영도구 해양로 225',
    size: '25 - 24 - 150',
    preAmount: '120',
    amount: '124',
    status: '1',
  },
  {
    id: 3,
    supplyDate: '2022.06.10',
    name: '(주)표주레미콘3',
    basic_address: '부산 영도구 해양로 225',
    size: '25 - 24 - 150',
    preAmount: '120',
    amount: '124',
    status: '2',
  },
];

export default () => {
  const selectedSpaceId = useSelectedSpaceId();
  const {
    data: { info, suppliers },
    isLoading,
    supplierMutate,
  } = useMySpaceInfo(selectedSpaceId);

  return (
    <SpaceLayout>
      {selectedSpaceId === undefined ? null : isLoading ? null : (
        <Container>
          <BarSection>
            <Title>건설현장</Title>
            <TransactionSpaceBar
              id={info?.id}
              name={info?.name}
              address={info?.basic_address}
            />
          </BarSection>
          <FilterSection>
            <TransactionFilter />
          </FilterSection>
          <BottomSection>
            <TransactionTable data={transactions} revalidate={supplierMutate} />
          </BottomSection>
        </Container>
      )}
    </SpaceLayout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px;
`;

const Title = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 14px;
`;

const BarSection = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

const FilterSection = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

const BottomSection = styled.div`
  width: 100%;
`;
