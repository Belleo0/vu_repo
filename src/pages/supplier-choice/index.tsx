import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import SpaceLayout from '@layout/SpaceLayout';
import SpaceBar from '@components/SpaceBar';
import MyFieldVendorTable from '@components/MyFieldVendorTable';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useMySpaceInfo from '@api/useMySpaceInfo';
import VendorTable from '@components/VendorTable';
import SupplySpaceBar from '@components/SupplySpaceBar';
import useFactoryMaps from '@api/useFactoryMaps';
import { usePrevious } from '@hooks/usePrevious';

export default () => {
  const selectedSpaceId = useSelectedSpaceId();
  const [order, setOrder] = useState('거리순');
  const [duration, setDuration] = useState<string>('null');
  const [bounds, setBounds] = useState<any>(null);
  const [realAddress, setRealAddress] = useState('');
  const [searchFactory, setSearchFactory] = useState('');

  const {
    data: { info, suppliers, estimations },
    isLoading,
    supplierMutate,
  } = useMySpaceInfo(selectedSpaceId);

  const { data: factoriesData } = useFactoryMaps(
    selectedSpaceId,
    duration,
    bounds,
    realAddress,
  );

  const previousFactories = usePrevious(factoriesData);

  const factories = useMemo(() => {
    if (factoriesData) return factoriesData;
    return previousFactories;
  }, [factoriesData]);

  const [selectedFactoryIds, setSelectedFactoryIds] = useState<number[]>([]);

  const orderByFactories = useMemo(() => {
    if (factories) {
      const data = factories?.data;
      if (order === '거리순') {
        const sortedData = data.sort((a: any, b: any) => {
          return a.direction?.distance - b.direction?.distance;
        });
        return sortedData;
      } else if (order === '시간순') {
        const sortedData = data.sort((a: any, b: any) => {
          return a.direction?.duration - b.direction?.duration;
        });
        return sortedData;
      }
    } else return;
  }, [factories, order]);

  return (
    <SpaceLayout>
      {/* {selectedSpaceId === undefined ? null : isLoading ? null : ( */}
      <Container>
        <BarSection>
          <Title>건설현장</Title>
          <SupplySpaceBar
            id={info?.id}
            name={info?.name}
            adminUserName={info?.admin_user?.name}
            siteUserName={info?.site_user?.name}
            address={info?.basic_address}
            selectedFieldInfo={info}
            setSelectedFactoryIds={setSelectedFactoryIds}
            selectedSpaceId={selectedSpaceId}
            selectedFactoryIds={selectedFactoryIds}
            orderByFactories={orderByFactories}
            factories={factories}
            order={order}
            setOrder={setOrder}
            revalidate={supplierMutate}
          />
        </BarSection>
        <BottomSection>
          <Title>납품사 ({suppliers?.length})</Title>
          <VendorTable
            data={suppliers}
            estimations={estimations}
            revalidate={supplierMutate}
          />
          <Notice>• 거래업체로 등록하면 주문 기능이 활성화됩니다.</Notice>
        </BottomSection>
      </Container>
      {/* )} */}
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

const MidSection = styled.div`
  display: flex;
  width: 100%;
  margin-top: 66px;
  margin-bottom: 60px;
`;

const MidSectionInSection = styled.div`
  flex: 1;

  &:first-of-type {
    flex: 2.5;
    margin-right: 60px;
  }
`;

const BottomSection = styled.div`
  width: 100%;
`;

const Notice = styled.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: center;
  color: #999;
`;
