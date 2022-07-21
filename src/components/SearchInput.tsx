import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import React, {
  ChangeEvent,
  CSSProperties,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';

export default ({
  icon,
  containerStyle,
  searchIconStyle,
  onClick,
  onChange,
  value = '',
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  icon?: string;
  containerStyle?: CSSProperties;
  searchIconStyle?: CSSProperties;
}) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
  const [inputValue, setInputValue] = useState<any>(value);

  const changeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
    onChange && onChange(ev); // optional로 인한 코드
  };

  return (
    <Container style={containerStyle} onClick={onClick}>
      {icon && <Icon src={getAssetURL(`../assets/${icon}.svg`)} />}
      <Input value={value} onChange={changeHandler} {...props} />
      {inputValue !== '' && (
        <ClearIcon
          src={getAssetURL('../assets/ic-circle-x.svg')}
          onClick={() => {
            changeHandler({ target: { value: '' } } as any);
          }}
        />
      )}
      <SearchIcon
        style={searchIconStyle}
        src={getAssetURL('../assets/ic-search.svg')}
      />
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

const ClearIcon = styled.img`
  margin-right: 12px;
  cursor: pointer;
`;

const Icon = styled.img`
  margin: 7px -7px 7px 10px;
  width: 22px;
  height: 30px;
`;
