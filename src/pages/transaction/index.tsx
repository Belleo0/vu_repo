import React, { useState } from 'react';
import styled from '@emotion/styled';
import SpaceLayout from '@layout/SpaceLayout';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useMySpaceInfo from '@api/useMySpaceInfo';
import TransactionSpaceBar from '@components/TransactionSpaceBar';
import TransactionTable from '@components/TransactionTable';
import TransactionFilter from '@components/TransactionFilter';
import useIsFieldUser from '@hooks/useIsFieldUser';
import FactoryTransactionTable from '@components/FactoryTransactionTable';
import { onPrint } from '@utils/onPrint';
import useTransactions from '@api/useTransactions';

export default () => {
  const isFieldUser = useIsFieldUser();

  const [startAt, setStartAt] = useState<Date>(new Date());
  const [endAt, setEndAt] = useState<Date>(new Date());

  const { divRef, handleOnPrint } = onPrint();
  const selectedSpaceId = useSelectedSpaceId();
  const {
    data: { info, suppliers },
    isLoading,
    supplierMutate,
  } = useMySpaceInfo(selectedSpaceId);

  const { data: transactions, refetch } = useTransactions(startAt, endAt);

  return (
    <SpaceLayout>
      {selectedSpaceId === undefined ? null : isLoading ? null : (
        <Container ref={divRef}>
          <BarSection>
            {isFieldUser ? <Title>건설현장</Title> : <Title>공장명</Title>}
            <TransactionSpaceBar
              id={info?.id}
              name={info?.name}
              address={info?.basic_address}
            />
          </BarSection>
          <FilterSection>
            <TransactionFilter
              data={transactions}
              onPrint={handleOnPrint}
              setStartAt={setStartAt}
              setEndAt={setEndAt}
            />
          </FilterSection>
          <BottomSection>
            {isFieldUser ? (
              <TransactionTable
                data={transactions}
                revalidate={supplierMutate}
              />
            ) : (
              <FactoryTransactionTable
                data={transactions}
                revalidate={supplierMutate}
              />
            )}
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
  align-items: center;

  margin-bottom: 24px;
`;

const BottomSection = styled.div`
  width: 100%;
`;

const ButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 6px;
  cursor: pointer;
`;

const PrintButton = styled.span`
  height: 42px;
  display: flex;
  align-items: center;
  padding: 11px 18px;
  border-radius: 6px;
  border: solid 1px #4490f7;
  background-color: #fff;
  color: #4490f7;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
`;
