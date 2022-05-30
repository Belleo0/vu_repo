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
          //@ts-ignore
          onFocus={() => setIsFocused(true)}
          //@ts-ignore
          onBlur={() => setIsFocused(false)}
          value={value}
          //@ts-ignore
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
  border-radius: 12px;
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

const Input = styled.textarea`
  width: 100%;
  padding: 14px 20px;
  background: none;
  border: 0;
  outline: 0;
  resize: none;
  &::placeholder {
    color: #c7c7c7;
    font-size: 14px;
    letter-spacing: -0.28px;
  }
  &:focus {
    /* border-color: #777; */
  }
`;
