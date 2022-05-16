import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { useEffect, useMemo, useRef, useState } from 'react';

interface ISelect {
  width?: number;
  options: { label: string; value: unknown }[];
  value: unknown;
  onChange: (v: any) => any;
}

export default ({ width, options, value, onChange }: ISelect) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpened, setIsOpened] = useState(false);

  const valueLabel = useMemo(() => {
    return options?.filter?.((v) => v.value === value)?.[0]?.label;
  }, [options, value]);

  const handleClickOutside = ({ target }: any) => {
    if (isOpened && ref.current && !ref.current.contains(target))
      setIsOpened(false);
  };

  useEffect(() => {
    if (isOpened) {
      window.addEventListener('click', handleClickOutside);
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isOpened]);

  return (
    <Container
      style={{ width: width || 'auto' }}
      ref={ref}
      onClick={() => setIsOpened((prev) => !prev)}
    >
      <Value>{valueLabel}</Value>
      <Icon src={getAssetURL('../assets/ic-arrow-bottom.svg')} />
      <AbsoluteWrap isOpen={isOpened}>
        <AbsoluteValueContainer>
          <Value>{valueLabel}</Value>
          <Icon src={getAssetURL('../assets/ic-arrow-bottom.svg')} />
        </AbsoluteValueContainer>
        {options.map((v) => (
          <OptionText
            key={v.value as string}
            active={value === v.value}
            onClick={() => onChange(v.value)}
          >
            {v.label}
          </OptionText>
        ))}
      </AbsoluteWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 8px 8px 12px;
  border-radius: 6px;
  border: solid 1px #c7c7c7;
  background-color: #fff;
  cursor: pointer;
  position: relative;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 13px;
`;

const Value = styled.span`
  font-size: 14px;
  letter-spacing: -0.84px;
  text-align: left;
  color: #000;
`;

const AbsoluteWrap = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  padding: 9px 8px 14px 12px;
  border-radius: 6px;
  border: solid 1px #c7c7c7;
  background-color: #fff;
  z-index: 999999;
  overflow: hidden;

  ${({ isOpen }) =>
    isOpen
      ? css`
          max-height: 105px;
        `
      : css`
          max-height: 37px;
        `}

  transition: max-height 0.15s ease-in-out;
`;

const AbsoluteValueContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const OptionText = styled.span<{ active: boolean }>`
  display: block;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: -0.84px;
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
