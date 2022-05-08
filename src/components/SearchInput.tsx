import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import React, { CSSProperties, InputHTMLAttributes } from 'react';

export default ({
  icon,
  containerStyle,
  onClick,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  icon?: string;
  containerStyle?: CSSProperties;
}) => {
  return (
    <Container style={containerStyle} onClick={onClick}>
      {icon && <Icon src={getAssetURL(`../assets/${icon}.svg`)} />}
      <Input {...props} />
      <SearchIcon src={getAssetURL('../assets/ic-search.svg')} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 6px;
  background-color: #fafafa;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  background: none;
  border: 0;
  outline: 0;
  &::placeholder {
    color: #999999;
    font-size: 14px;
    letter-spacing: -0.28px;
  }
`;

const SearchIcon = styled.img`
  margin-right: 12px;
`;

const Icon = styled.img`
  margin: 7px -7px 7px 10px;
  width: 22px;
  height: 30px;
`;
