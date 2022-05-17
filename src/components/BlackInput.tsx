import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import React, {
  ChangeEvent,
  CSSProperties,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';

export default ({
  containerStyle,
  value = '',
  onChange,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
  containerStyle?: CSSProperties;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [inputValue, setInputValue] = useState<any>(value);

  const changeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
    onChange && onChange(ev); // optional로 인한 코드
  };

  useEffect(() => {
    if (value !== inputValue) {
      setInputValue(value);
    }
  }, [value]);

  return (
    <RealContainer style={containerStyle}>
      <Container isFocus={isFocused || inputValue !== ''}>
        <Input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onChange={changeHandler}
          {...props}
        />
      </Container>
    </RealContainer>
  );
};

const RealContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div<{ isFocus: boolean }>`
  display: flex;
  width: 100%;
  border-radius: 6px;
  background-color: white;

  ${({ isFocus }) =>
    isFocus
      ? css`
          border: solid 1px #777;
        `
      : css`
          border: solid 1px #e3e3e3;
        `}
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  background: none;
  border: 0;
  outline: 0;
  &::placeholder {
    color: #c7c7c7;
    font-size: 14px;
    letter-spacing: -0.28px;
  }
  &:focus {
    /* border-color:  */
  }
`;

const XIcon = styled.img`
  margin-right: 12px;
`;

const Label = styled.span`
  font-size: 13px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  color: #ef0000;
`;
