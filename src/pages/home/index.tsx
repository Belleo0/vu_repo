import React, { useState } from 'react';
import styled from '@emotion/styled';
import AuthLayout from '@layout/AuthLayout';
import SearchInput from '@components/SearchInput';
import getAssetURL from '@utils/getAssetURL';



export default () => {

  const [search, setSearch] = useState('');

    return (
       <AuthLayout>
           <Container>
            <ImgSection>
            <SubTitle>건설산업의 새로운 플랫폼을 제시합니다</SubTitle>
            <Title>레미콘이 필요하신가요?</Title>
            <Box>
            <SearchInput
          placeholder="건설현장 주소를 입력해주세요."
          containerStyle={{ width:'680px', height:'70px'}}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        </Box>
            </ImgSection>
            <MySiteSection>
              <Typography1>
              건설현장
              </Typography1>
              <Typography2>
              건설현장을 등록하고 레미콘 공장을 만나보세요
              </Typography2>
              <AddBtnContainer>
                <SiteAddButton>
                  건설현장등록
                </SiteAddButton>
              </AddBtnContainer>
            </MySiteSection>
           </Container>
       </AuthLayout>
    );
};

const Container = styled.div`
      justify-content: center;
      width: 100;
      height: 100;
      flex-direction: column;
`;

const ImgSection = styled.div`
    justify-content: center;
      display: flex;
      width: 100%;
      height: 852px;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.2);
      background-blend-mode: multiply;
      background-image: url(${getAssetURL('../assets/main.png')});
      background-size: cover;
`;

const Box = styled.div`
     margin-right: auto;
     margin-left:auto;
     margin-top: 56px;
`;

const SubTitle = styled.div`
      margin-right: auto;
      margin-left: auto;
      font-weight: 200;
      font-size: 24px;
      color: #fff;
`;

const Title = styled.div`
      margin-right: auto;
      margin-left: auto;
      margin-top : 10px ;
      font-size: 48px;
      font-weight: bold;
      color: #fff;
`;

const MySiteSection = styled.div`
      text-align: center;
      display: flex;
      flex-direction: column;
      padding-top: 80px;
      padding-bottom: 100px;
`

const AddBtnContainer = styled.div`
      margin-top: 50px;
      margin: 0 auto;
`;

const SiteAddButton = styled.button`
     width: 380px;
      height: 160px;
      border: 2px dashed #c7c7c7;
      background-color: #fff;
      font-size: 22px;
      margin-top: 50px;
      color: #258fff;
`;

const Typography1 = styled.div`
     font-size: 28px;
     color: #000;
`

const Typography2 = styled.div`
      font-size: 16px;
      color: #777;
      margin-top: 10px;
`