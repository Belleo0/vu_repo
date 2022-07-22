import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { useEffect, useMemo, useRef, useState } from 'react';

interface ISelect {
  width?: number;
  options: { label: string; value: unknown }[];
  value: unknown;
  placeholder?: string;
  onChange: (v: any) => any;
  containerStyle?: React.CSSProperties;
  absoluteStyle?: React.CSSProperties;
  initalMaxHeight?: number;
}

export default ({
  width,
  options,
  placeholder,
  value,
  onChange,
  containerStyle = {},
  absoluteStyle = {},
  initalMaxHeight,
}: ISelect) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpened, setIsOpened] = useState(false);

  const [zIndex, setZIndex] = useState(100);

  const valueLabel = useMemo(() => {
    if (value === null) return null;
    return options?.filter?.((v) => v.value === value)?.[0]?.label;
  }, [options, value]);

  const handleClickOutside = ({ target }: any) => {
    if (isOpened && ref.current && !ref.current.contains(target)) {
      setZIndex(200);
      setIsOpened(false);
      setTimeout(() => {
        setZIndex(100);
      }, 150);
    }
  };

  useEffect(() => {
    if (isOpened) {
      window.addEventListener('click', handleClickOutside);
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isOpened]);

  const handleClickContainer = () => {
    if (isOpened) {
      setZIndex(200);
      setIsOpened(false);
      setTimeout(() => {
        setZIndex(100);
      }, 150);
    } else {
      setZIndex(300);
      setIsOpened(true);
    }
  };

  return (
    <Container
      style={{ width: width || 'auto', ...containerStyle }}
      ref={ref}
      onClick={handleClickContainer}
    >
      <Value style={{ color: valueLabel === null ? '#c7c7c7' : '#000' }}>
        {valueLabel === null ? placeholder : valueLabel}
      </Value>
      <Icon src={getAssetURL('../assets/ic-arrow-bottom.svg')} />
      <AbsoluteWrap
        isOpen={isOpened}
        value={value}
        optionLength={options.length}
        initalMaxHeight={initalMaxHeight as number}
        style={{ zIndex, ...absoluteStyle }}
      >
        <AbsoluteValueContainer>
          <Value style={{ color: valueLabel === null ? '#c7c7c7' : '#000' }}>
            {valueLabel === null ? placeholder : valueLabel}
          </Value>
          <Icon
            src={
              isOpened
                ? getAssetURL('../assets/ic-arrow-up.svg')
                : getAssetURL('../assets/ic-arrow-bottom.svg')
            }
          />
        </AbsoluteValueContainer>
        <OptionBox>
          {options.map((v) => (
            <OptionText
              key={v.value as string}
              active={value === v.value}
              onClick={() => onChange(v.value)}
            >
              {v.label}
            </OptionText>
          ))}
        </OptionBox>
      </AbsoluteWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  border: solid 1px #c7c7c7;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  user-select: none;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 7px;
`;

const Value = styled.span`
  font-size: 14px;
  letter-spacing: -0.84px;
  text-align: left;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AbsoluteWrap = styled.div<{
  isOpen: boolean;
  value: unknown;
  optionLength: number;
  initalMaxHeight: number;
}>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  padding: 8px;
  border-radius: 6px;
  border: solid 1px #e3e3e3;
  background-color: #fff;
  z-index: 500;
  overflow: hidden;

  ${({ isOpen, optionLength, initalMaxHeight }) =>
    isOpen
      ? css`
          max-height: ${42 + 28 * optionLength}px;
        `
      : css`
          max-height: ${initalMaxHeight || 37}px;
        `}

  ${({ value }) =>
    value !== null &&
    css`
      border-color: #777;
    `}

  transition: max-height 0.15s ease-in-out;
`;

const AbsoluteValueContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 20px; */
`;

const OptionText = styled.span<{ active: boolean }>`
  display: block;
  cursor: pointer;
  font-size: 14px;
  text-align: left;

  ${({ active }) =>
    active
      ? css`
          color: #258fff;
        `
      : css`
          color: #000;
        `}

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

const OptionBox = styled.div`
  width: 100%;
  height: 200px;

  margin-top: 14px;
  overflow-y: scroll;

  /* 스크롤바 설정*/
  &::-webkit-scrollbar {
    width: 17px;
  }

  /* 스크롤바 막대 설정*/
  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #c7c7c7;
    /* 스크롤바 둥글게 설정    */
    border-radius: 10px;

    background-clip: padding-box;
    border: 6px solid transparent;
  }

  /* 스크롤바 뒷 배경 설정*/
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
    margin: 0;
  }
`;
