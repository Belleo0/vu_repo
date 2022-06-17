import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

const menus = [
  {
    type: 'a',
    label: '업체리스트',
  },
  {
    type: 'b',
    label: '레미콘 단가표',
  },
];

export default () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <Title>자료실</Title>
      <Box
        className={
          pathname === `/reference-room` || pathname === `/reference-room/info`
            ? 'active'
            : ''
        }
        onClick={() => {
          navigate('/reference-room');
        }}
      >
        <Label>업체리스트</Label>
      </Box>
      <Box
        className={pathname === `/reference-room/info/price` ? 'active' : ''}
        onClick={() => {
          navigate('/reference-room/info/price');
        }}
      >
        <Label>레미콘 단가표</Label>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  height: 100%;
  padding: 40px 30px 0 30px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 30px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: #fff;

  border-bottom: solid 1px #e3e3e3;

  margin-bottom: 16px;
  cursor: pointer;

  &.active {
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    color: #258fff;
    cursor: default;
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
