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
  name,
  onChange,
  xIcon = true,
  errorMessage,
  helperMessage,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
  redStar?: React.ReactNode;
  xIcon?: React.ReactNode;
  containerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  errorMessage?: string;
  helperMessage?: string;
  name?: string;
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
      <Container isFocus={isFocused}>
        <Input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          name={name}
          onChange={changeHandler}
          style={inputStyle}
          {...props}
        />
        {helperMessage && (
          <HelperMessage>{helperMessage || 'ㅤ'}</HelperMessage>
        )}
        {inputValue !== '' && xIcon ? (
          <XIcon
            src={getAssetURL('../assets/ic-circle-x.svg')}
            onClick={() => {
              changeHandler({ target: { name: name, value: '' } } as any);
            }}
          />
        ) : null}
      </Container>
      <ErrorMessage>{errorMessage || 'ㅤ'}</ErrorMessage>
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
  flex-direction: column;
  width: 100%;
  background-color: inherit;

  ${({ isFocus }) =>
    isFocus
      ? css`
          border-bottom: solid 1px #777;
        `
      : css`
          border-bottom: solid 1px #e3e3e3;
        `}

  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0 0 28px 0;
  font-size: 16px;
  font-weight: 500;
  background: none;
  border: 0;
  outline: 0;
  &::placeholder {
    color: #999999;
    font-size: 14px;
    letter-spacing: -0.28px;
  }
  &:focus {
    /* border-color */
  }
`;

const XIcon = styled.img`
  margin-right: 12px;
  margin-bottom: 20px;
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
  margin-bottom: 8px;
`;

const HelperMessage = styled.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  color: #ef0000;
  margin-bottom: 28px;
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
