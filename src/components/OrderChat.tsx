import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import Button, { ButtonSize, ButtonType } from './Button';
import OrderChatCompanyCard from './OrderChatCompanyCard';
import SearchInput from './SearchInput';

export default () => {
  return (
    <Container>
      <SideContainer>
        <SideTopSection>
          <SideTitle>거래업체(05)</SideTitle>
          <SearchInput placeholder="업체명을 입력해 주세요" />
        </SideTopSection>
        <CompanyCardWrap>
          <OrderChatCompanyCard />
          <OrderChatCompanyCard />
          <OrderChatCompanyCard />
          <OrderChatCompanyCard />
          <OrderChatCompanyCard />
          <OrderChatCompanyCard />
          <OrderChatCompanyCard />
          <OrderChatCompanyCard />
          <OrderChatCompanyCard />
          <OrderChatCompanyCard />
        </CompanyCardWrap>
      </SideContainer>
      <MainContainer>
        <TopSection>
          <TopSectionTitle>(주)표주레미콘</TopSectionTitle>
          <CircleButton>물량배정</CircleButton>
          <CircleRedButton>현장마감</CircleRedButton>
          <TopRightSection>
            <Button
              size={ButtonSize.SMALL}
              type={ButtonType.GRAY_BLACK}
              icon="ic-people"
              containerStyle={{ width: 'auto', marginRight: 20 }}
            >
              멤버보기
            </Button>
            <Button
              size={ButtonSize.SMALL}
              type={ButtonType.OUTLINE}
              icon="ic-add-person"
              containerStyle={{ width: 'auto', marginRight: 10 }}
            >
              초대하기
            </Button>
            <Button
              size={ButtonSize.SMALL}
              type={ButtonType.BLACK}
              containerStyle={{
                width: 'auto',
                height: 44,
                marginRight: 24,
              }}
            >
              공장정보
            </Button>
            <Icon src={getAssetURL('../assets/ic-search-small.svg')} />
            <Icon src={getAssetURL('../assets/ic-setting.svg')} />
            <Icon src={getAssetURL('../assets/ic-out.svg')} />
          </TopRightSection>
        </TopSection>
        <MidSection />
        <BottomSection>
          <BottomIcon
            src={getAssetURL('../assets/ic-plus-rounded-square.svg')}
          />
          <InputContainer>
            <Input />
            <SendIcon src={getAssetURL('../assets/ic-send.svg')} />
          </InputContainer>
        </BottomSection>
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: white;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
`;

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  border-right: 1px solid #e3e3e3;
  max-height: 686px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SideTopSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
`;

const SideTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #222;
  margin-bottom: 14px;
`;

const CompanyCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 30px;
  border-bottom: 1px solid #e3e3e3;
`;

const TopSectionTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-right: 20px;
`;

const TopRightSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const CircleButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 14px 8px 15px;
  border-radius: 18px;
  border: solid 1px #4490f7;
  background-color: #fff;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #258fff;

  margin-right: 10px;
`;

const CircleRedButton = styled(CircleButton)`
  border-color: #ef0000;
  color: #ef0000;
  margin-right: 0;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;

  cursor: pointer;

  &:not(:last-child) {
    margin-right: 14px;
  }
`;

const MidSection = styled.div`
  flex: 1;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 30px;
  border-top: 1px solid #e3e3e3;
`;

const BottomIcon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  margin-right: 14px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 25px;
  border: solid 1px #777;
  background-color: #fff;
`;

const Input = styled.input`
  padding: 14px 30px;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
`;

const SendIcon = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 20px;
  cursor: pointer;
`;
