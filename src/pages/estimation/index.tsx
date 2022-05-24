import styled from '@emotion/styled';
import SpaceLayout from '@layout/SpaceLayout';
import SpaceBar from '@components/SpaceBar';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useMySpaceInfo from '@api/useMySpaceInfo';
import EstimationTable from '@components/EstimationTable';

export default () => {
  const selectedSpaceId = useSelectedSpaceId();
  const {
    data: { info, estimations },
    isLoading,
    estimationMutate,
  } = useMySpaceInfo(selectedSpaceId);

  return (
    <SpaceLayout>
      {selectedSpaceId === undefined ? null : isLoading ? null : (
        <Container>
          <BarSection>
            <Title>공장명</Title>
            <SpaceBar
              id={info?.id}
              name={info?.name}
              adminUserName={info?.admin_user?.name}
              siteUserName={info?.site_user?.name}
            />
          </BarSection>
          <BottomSection>
            <Title>견적 현황</Title>
            <EstimationTable data={estimations} revalidate={estimationMutate} />
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

const BottomSection = styled.div`
  width: 100%;
`;
