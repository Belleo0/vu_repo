import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import React, { CSSProperties, HTMLAttributes } from 'react';
import ProfileBox from './ProfileBox';
import SearchInput from './SearchInput';

export enum ButtonType {
  PRIMARY,
  OUTLINE,
  OUTLINE_THICK,
  GRAY,
  GRAY_BLACK,
}

interface IButton {
  type?: ButtonType;
  children: React.ReactNode;
  containerStyle?: CSSProperties;
  icon?: string;
}

const backgroundColors = {
  [ButtonType.PRIMARY]: '#258fff',
  [ButtonType.OUTLINE]: '#ffffff',
  [ButtonType.OUTLINE_THICK]: '#ffffff',
  [ButtonType.GRAY]: '#f2f2f2',
  [ButtonType.GRAY_BLACK]: '#f2f2f2',
};

const borderWidths = {
  [ButtonType.PRIMARY]: 1,
  [ButtonType.OUTLINE]: 1,
  [ButtonType.OUTLINE_THICK]: 2,
  [ButtonType.GRAY]: 1,
  [ButtonType.GRAY_BLACK]: 1,
};

const borderColors = {
  [ButtonType.PRIMARY]: '#258fff',
  [ButtonType.OUTLINE]: '#4490f7',
  [ButtonType.OUTLINE_THICK]: '#4490f7',
  [ButtonType.GRAY]: '#f2f2f2',
  [ButtonType.GRAY_BLACK]: '#f2f2f2',
};

const textColors = {
  [ButtonType.PRIMARY]: '#ffffff',
  [ButtonType.OUTLINE]: '#258fff',
  [ButtonType.OUTLINE_THICK]: '#258fff',
  [ButtonType.GRAY]: '#999999',
  [ButtonType.GRAY_BLACK]: '#000000',
};

export default ({
  type = ButtonType.PRIMARY,
  children,
  containerStyle,
  icon,
  ...props
}: IButton & HTMLAttributes<HTMLDivElement>) => {
  return (
    <Container type={type} style={containerStyle} {...props}>
      {icon && <Icon src={getAssetURL(`../assets/${icon}.svg`)} />}
      {children}
    </Container>
  );
};

const Container = styled.div<{ type: ButtonType }>`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 16px;

  border-radius: 6px;

  font-size: 16px;
  font-weight: 500;

  cursor: pointer;

  user-select: none;

  ${({ type }) => css`
    background-color: ${backgroundColors[type]};
    color: ${textColors[type]};
    border: ${borderWidths[type]}px solid ${borderColors[type]};
  `}
`;

const Icon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 8px;
`;
