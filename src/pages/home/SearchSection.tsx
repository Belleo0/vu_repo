import React, { useState } from 'react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';

interface ISearchBar {
  search: string;
  setSearch: any;
}

export default ({ search, setSearch }: ISearchBar) => {
  return (
    <SearchSection>
      <SubTitle>건설산업의 새로운 플랫폼을 제시합니다</SubTitle>
      <Title>레미콘이 필요하신가요?</Title>
      <Box>
        <SearchInput>
          <Input
            placeholder="건설현장 주소를 입력하세요"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <SearchIcon src={getAssetURL('../assets/ic-search.svg')} />
        </SearchInput>
      </Box>
    </SearchSection>
  );
};

const SearchSection = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  height: 852px;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: multiply;
  background-image: url(${getAssetURL('../assets/img/main.png')});
  background-size: cover;
`;

const SearchInput = styled.div`
  display: flex;
  width: 680px;
  border-radius: 6px;
  background-color: #fafafa;
`;

const Input = styled.input`
  width: 100%;
  height: 70px;
  font-size: 22px;
  padding: 24px 19px;
  background: none;
  border: 0;
  outline: 0;
  &::placeholder {
    color: #c7c7c7;
    font-size: 22px;
    letter-spacing: -0.28px;
  }
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  margin: 19px 24px 19px auto;
`;

const Box = styled.div`
  margin-right: auto;
  margin-left: auto;
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
  margin-top: 10px;
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  line-height: 1.48;
`;
