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
  label,
  redStar,
  containerStyle,
  inputStyle,
  value = '',
  onChange,
  errorMessageStyle,
  errorMessage,
  withoutErrorMessage = false,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
  redStar?: React.ReactNode;
  containerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  errorMessageStyle?: CSSProperties;
  errorMessage?: string;
  withoutErrorMessage?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [inputValue, setInputValue] = useState<any>(value);

  const changeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
    onChange && onChange(ev); // optional로 인한 코드
  };

  return (
    <RealContainer style={containerStyle}>
      {label && (
        <LableBox>
          {label && <Label>{label}</Label>}
          {redStar && <RedStar>{redStar}</RedStar>}
        </LableBox>
      )}
      <Container isFocus={isFocused} style={inputStyle}>
        <Input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onChange={changeHandler}
          {...props}
        />
        {inputValue !== '' && (
          <XIcon
            src={getAssetURL('../assets/ic-circle-x.svg')}
            onClick={() => {
              changeHandler({ target: { value: '' } } as any);
            }}
          />
        )}
      </Container>
      {!withoutErrorMessage && (
        <ErrorMessage style={errorMessageStyle}>
          {errorMessage || 'ㅤ'}
        </ErrorMessage>
      )}
    </RealContainer>
  );
};

const RealContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
          border: solid 1px #c7c7c7;
        `}

  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 11px 14px;
  background: none;
  border: 0;
  outline: 0;
  &::placeholder {
    color: #999999;
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

const RedStar = styled.span`
  font-size: 14px;
  color: #ef0000;
  margin-left: 2px;
`;

const LableBox = styled.div`
  display: block;
  margin-bottom: 10px;
`;
