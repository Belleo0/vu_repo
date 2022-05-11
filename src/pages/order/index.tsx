import OrderCalendar from '@components/OrderCalendar';
import OrderChat from '@components/OrderChat';
import styled from '@emotion/styled';
import SpaceLayout from '@layout/SpaceLayout';

export default () => {
  return (
    <SpaceLayout>
      <Container>
        <OrderCalendar />
        <OrderChat />
      </Container>
    </SpaceLayout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 63px 60px;
`;
