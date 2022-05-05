import React from 'react';
import styled from '@emotion/styled';
import SpaceLayout from '@layout/SpaceLayout';
import SpaceBar from '@components/SpaceBar';
import SpaceInfoTable from '@components/SpaceInfoTable';
import Notifications from '@components/Notifications';
import SpaceMembers from '@components/SpaceMembers';
import VendorTable from '@components/VendorTable';

export default () => {
  return (
    <SpaceLayout>
      <Container>
        <BarSection>
          <Title>건설현장</Title>
          <SpaceBar
            id={1}
            name="중앙동 일동미라주더마린"
            adminUserName="사용자이름"
            siteUserName="사용자이름"
          />
          <SpaceInfoTable
            companyName="(주)대성건설"
            address="부산 중구 충장대로 13번길 22"
            startAt="2022-05-05T12:18:53.795Z"
            endAt="2022-05-05T12:18:53.795Z"
            needAmount={1837}
          />
        </BarSection>
        <MidSection>
          <MidSectionInSection>
            <Title>알림내역 (999)</Title>
            <Notifications
              data={new Array(15).fill({
                type: '견적접수',
                value: '(주)동서산업의 견적이 접수되었습니다.',
                created_at: '2022-05-05T12:18:53.795Z',
              })}
            />
          </MidSectionInSection>
          <MidSectionInSection>
            <Title>현장멤버 (99)</Title>
            <SpaceMembers
              data={new Array(15).fill({
                name: '사용자이름',
                companyName: '회사이름',
                role: '직급',
              })}
            />
          </MidSectionInSection>
        </MidSection>
        <BottomSection>
          <Title>납품사 (99)</Title>
          <VendorTable
            data={new Array(3).fill({
              factory_company_name: '(주)표주레미콘',
              factory_address: '부산 영도구 해양로 225',
              distance: 4.8,
              duration: 12,
              sale_user_name: '사용자이름',
              total_amount: 1200,
            })}
          />
        </BottomSection>
      </Container>
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
