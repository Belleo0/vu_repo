import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { RefObject, useEffect, useRef, useState } from 'react';

interface IOption {
  label: string;
  value: string;
}

interface IFilterSelect {
  value: any;
  onChange: (value: any) => any;
  options: IOption[];
  containerStyles?: React.CSSProperties;
}

export default ({
  value,
  onChange,
  options,
  containerStyles,
}: IFilterSelect) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleClickOutside = ({ target }: any) => {
    if (isFilterOpen && ref.current && !ref.current.contains(target))
      setIsFilterOpen(false);
  };

  useEffect(() => {
    if (isFilterOpen) {
      window.addEventListener('click', handleClickOutside);
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isFilterOpen]);

  return (
    <SpaceOrderWrap ref={ref}>
      <SpaceOrderLabelWrap
        style={{ ...containerStyles }}
        onClick={() => setIsFilterOpen((prev) => !prev)}
      >
        <SpaceOrderLabel>{value}</SpaceOrderLabel>
        <SpaceOrderIcon
          isOpen={isFilterOpen}
          src={getAssetURL('../assets/ic-arrow.svg')}
        />
      </SpaceOrderLabelWrap>
      {isFilterOpen && (
        <AbsoluteFilterContainer>
          {options.map((v: any) => (
            <AbsoluteFilterLabel
              key={`${v.value}-${v.value === value}`}
              active={v.value === value}
              onClick={() => onChange(v.value)}
            >
              {v.label}
            </AbsoluteFilterLabel>
          ))}
        </AbsoluteFilterContainer>
      )}
    </SpaceOrderWrap>
  );
};

const SpaceOrderWrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
`;

const SpaceOrderLabel = styled.div`
  font-size: 13px;
  letter-spacing: -0.26px;
  color: #222;
  margin-right: 4px;
`;

const SpaceOrderIcon = styled.img<{ isOpen?: boolean }>`
  width: 18px;
  height: 18px;
  margin-bottom: 1px;

  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: rotate(180deg);
        `
      : css`
          transform: rotate(0deg);
        `}
`;

const AbsoluteFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 84px;
  position: absolute;
  // [FIXME]
  top: calc(100% + 6px);
  left: -10px;
  padding: 14px 19px 14px 14px;
  border-radius: 6px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const AbsoluteFilterLabel = styled.span<{ active: boolean }>`
  display: block;
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 14px;
  }

  ${({ active }) =>
    active
      ? css`
          color: #258fff;
        `
      : css`
          color: #000;
        `}

  &:hover {
    color: #258fff;
  }

  transition: color 0.1s linear;
`;

const SpaceOrderLabelWrap = styled.div`
  display: flex;
  align-items: center;
`;
