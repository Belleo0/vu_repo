import styled from '@emotion/styled';

export default () => {
  return (
    <Container>
      <Logo />
      <InfoContainer>
        <MenuWrap>
          <Menu>개인정보처리방침</Menu>
          <MenuDivider />
          <Menu>이용약관</Menu>
          <MenuDivider />
          <Menu>이메일무단수집거부</Menu>
          <MenuDivider />
          <Menu>1:1문의</Menu>
          <MenuDivider />
          <Menu>공지사항</Menu>
        </MenuWrap>
        <InfoText>
          회사명 : (주)동양 <br />
          사업자등록번호 : 116-81-34352{' '}
          <LicenseCheckButton>사업자정보확인</LicenseCheckButton>
          <br />
          주소 : 서울특별시 영등포구 국제금융로2길 24, 4층 <br />
          대표 : 정진학{'   '}|{'   '}개인정보책임자 : 황부익{'   '}|{'   '}
          대표번호 : 02-6150-7000
        </InfoText>
        <CopyRightText>COPYRIGHT © 0All rights reserved.</CopyRightText>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 50px 60px;
  background-color: #f2f2f2;
`;

const Logo = styled.div`
  width: 300px;
  height: 186px;
  margin: 0 40px 0 0;
  background-color: #e5e5e5;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 40px;
`;

const Menu = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #777;
  margin: 0px 24px;

  &:first-of-type {
    margin-left: 0;
  }
`;

const MenuDivider = styled.span`
  width: 1px;
  height: 12px;
  background-color: #c7c7c7;
`;

const InfoText = styled.span`
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: -0.28px;
  text-align: left;
  color: #999;
  white-space: pre;
  margin-bottom: 10px;
`;

const CopyRightText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #777;
`;

const LicenseCheckButton = styled.span`
  padding: 2px 6px;
  border: solid 1px #999;
  font-size: 12px;
  text-align: left;
  color: #999;
  margin-left: 6px;
  cursor: pointer;
`;
