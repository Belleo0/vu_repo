import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

const menus = [
  {
    label: '현장정보',
  },
  {
    label: '공사기간',
  },
  {
    label: '레미콘 소요량 (선택)',
  },
  {
    label: '결제조건',
  },
  {
    label: '특기사항 (선택)',
  },
];

export default () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Title>건설현장 등록</Title>
      {menus.map((v: any, i: number) => (
        <Box
          className={
            pathname === `/add-construction-field/step-${i + 1}` ? 'active' : ''
          }
        >
          <Index>{i + 1}</Index>
          <Label>{v?.label}</Label>
        </Box>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  height: 100%;
  padding: 30px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 24px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 22px 20px;
  border-radius: 12px;
  background-color: #fff;

  border: solid 1px #e3e3e3;

  margin-bottom: 16px;

  &.active {
    border: solid 1px #4490f7;
  }
`;

const Index = styled.span`
  display: flex;
  min-width: 25px;
  min-height: 25px;
  margin: 0 10px 0 0;
  margin-right: 10px;
  border-radius: 17px;

  justify-content: center;
  align-items: center;

  background-color: #e3e3e3;

  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #fff;

  .active > & {
    background-color: #258fff;
  }
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;

  color: #999;

  .active > & {
    color: #258fff;
  }
`;
