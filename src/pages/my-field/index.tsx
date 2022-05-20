import React from 'react';
import styled from '@emotion/styled';
import SpaceLayout from '@layout/SpaceLayout';
import SpaceBar from '@components/SpaceBar';
import SpaceInfoTable from '@components/SpaceInfoTable';
import Notifications from '@components/Notifications';
import SpaceMembers from '@components/SpaceMembers';
import MyFieldVendorTable from '@components/MyFieldVendorTable';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useMySpaceInfo from '@api/useMySpaceInfo';

export default () => {
  const selectedSpaceId = useSelectedSpaceId();
  const {
    data: { info, members, suppliers },
    isLoading,
  } = useMySpaceInfo(selectedSpaceId);

  return (
    <SpaceLayout>
      {selectedSpaceId === undefined ? null : isLoading ? null : (
        <Container>
          <BarSection>
            <Title>건설현장</Title>
            <SpaceBar
              id={info?.id}
              name={info?.name}
              adminUserName={info?.admin_user?.name}
              siteUserName={info?.site_user?.name}
            />
            <SpaceInfoTable
              companyName={info?.company?.name}
              address={info?.basic_address}
              startAt={info?.start_at}
              endAt={info?.end_at}
              needAmount={info?.field_info?.need_amount}
            />
          </BarSection>
          <MidSection>
            <MidSectionInSection>
              <Title>알림내역 (999) - 2차 범위</Title>
              <Notifications
                data={new Array(15).fill({
                  type: '견적접수',
                  value: '(주)동서산업의 견적이 접수되었습니다.',
                  created_at: '2022-05-05T12:18:53.795Z',
                })}
              />
            </MidSectionInSection>
            <MidSectionInSection>
              <Title>현장멤버 ({members?.length})</Title>
              <SpaceMembers data={members} />
            </MidSectionInSection>
          </MidSection>
          <BottomSection>
            <Title>납품사 ({suppliers?.length})</Title>
            <MyFieldVendorTable data={suppliers} />
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
  margin-bottom: 16px;
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
