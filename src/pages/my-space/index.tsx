import React, { useState } from 'react';
import styled from '@emotion/styled';
import SpaceLayout from '@layout/SpaceLayout';
import SpaceBar from '@components/SpaceBar';
import SpaceInfoTable from '@components/SpaceInfoTable';
import Notifications from '@components/Notifications';
import SpaceMembers from '@components/SpaceMembers';
import MyFieldVendorTable from '@components/MyFieldVendorTable';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useMySpaceInfo from '@api/useMySpaceInfo';
import useIsFieldUser from '@hooks/useIsFieldUser';
import MyFactoryVendorTable from '@components/MyFactoryVendorTable';
import Button, { ButtonSize, ButtonType } from '@components/Button';
import InviteModal from '@components/InviteModal';
import { useNavigate } from 'react-router-dom';

export default () => {
  const isFieldUser = useIsFieldUser();

  const selectedSpaceId = useSelectedSpaceId();
  const {
    data: { info, members, suppliers },
    isLoading,
    supplierMutate,
  } = useMySpaceInfo(selectedSpaceId);

  const navigate = useNavigate();

  const [inviteModalOpen, setInviteModalOpen] = useState(false);

  return (
    <SpaceLayout>
      <Container>
        <BarSection>
          {isFieldUser ? (
            <Title>건설현장</Title>
          ) : (
            <RemiconSpaceTitle>
              {suppliers?.length}개 현장과 거래하고 있습니다.
            </RemiconSpaceTitle>
          )}
          {isFieldUser ? null : <Title>공장명</Title>}
          <SpaceBar
            id={info?.id}
            name={info?.name}
            adminUserName={info?.admin_user?.name}
            siteUserName={info?.site_user?.name}
            address={info?.basic_address}
          />
          {isFieldUser && (
            <SpaceInfoTable
              companyName={info?.company?.name}
              address={info?.basic_address}
              startAt={info?.start_at}
              endAt={info?.end_at}
              needAmount={info?.field_info?.need_amount}
            />
          )}
        </BarSection>
        <MidSection>
          <MidSectionInSection style={{ marginTop: 14 }}>
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
            <TitleRow>
              <Title>현장멤버 ({members?.length})</Title>
              <Button
                size={ButtonSize.SMALL}
                type={ButtonType.OUTLINE}
                icon="ic-circle-more"
                iconStyle={{ width: 12 }}
                containerStyle={{ width: 106, height: 36 }}
                onClick={() => setInviteModalOpen(true)}
              >
                초대하기
              </Button>
            </TitleRow>
            <SpaceMembers data={members} />
          </MidSectionInSection>
        </MidSection>
        {isFieldUser ? (
          <BottomSection>
            <TitleRow>
              <Title>납품사 ({suppliers?.length})</Title>
              <Button
                size={ButtonSize.SMALL}
                type={ButtonType.PRIMARY}
                icon="ic-more-white"
                iconStyle={{ width: 10 }}
                containerStyle={{ width: 106, height: 36 }}
                onClick={() => navigate('/supplier-choice')}
              >
                업체추가
              </Button>
            </TitleRow>
            <MyFieldVendorTable data={suppliers} />
          </BottomSection>
        ) : (
          <MyFactoryVendorTable
            data={suppliers}
            revalidate={() => supplierMutate()}
          />
        )}
        <InviteModal
          open={inviteModalOpen}
          onClose={() => setInviteModalOpen(false)}
          fieldId={info?.id}
          fieldName={info?.name}
        />
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

const RemiconSpaceTitle = styled.span`
  display: block;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.56px;
  text-align: left;
  color: #222;
  margin-bottom: 40px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
