import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import React, { CSSProperties, HTMLAttributes } from 'react';

export enum ButtonSize {
  PRIMARY,
  SMALL,
}

export enum ButtonType {
  PRIMARY,
  OUTLINE,
  OUTLINE_THICK,
  GRAY,
  GRAY_BLACK,
  BLACK,
  BLACK_WHITE,
}

interface IButton {
  size?: ButtonSize;
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
  [ButtonType.BLACK]: '#ffffff',
  [ButtonType.BLACK_WHITE]: '#000000',
};

const borderWidths = {
  [ButtonType.PRIMARY]: 1,
  [ButtonType.OUTLINE]: 1,
  [ButtonType.OUTLINE_THICK]: 2,
  [ButtonType.GRAY]: 1,
  [ButtonType.GRAY_BLACK]: 1,
  [ButtonType.BLACK]: 1,
  [ButtonType.BLACK_WHITE]: 1,
};

const borderColors = {
  [ButtonType.PRIMARY]: '#258fff',
  [ButtonType.OUTLINE]: '#4490f7',
  [ButtonType.OUTLINE_THICK]: '#4490f7',
  [ButtonType.GRAY]: '#f2f2f2',
  [ButtonType.GRAY_BLACK]: '#f2f2f2',
  [ButtonType.BLACK]: '#000000',
  [ButtonType.BLACK_WHITE]: 'inherit',
};

const textColors = {
  [ButtonType.PRIMARY]: '#ffffff',
  [ButtonType.OUTLINE]: '#258fff',
  [ButtonType.OUTLINE_THICK]: '#258fff',
  [ButtonType.GRAY]: '#999999',
  [ButtonType.GRAY_BLACK]: '#000000',
  [ButtonType.BLACK]: '#000000',
  [ButtonType.BLACK_WHITE]: '#ffffff',
};

export default ({
  size = ButtonSize.PRIMARY,
  type = ButtonType.PRIMARY,
  children,
  containerStyle,
  icon,
  ...props
}: IButton & HTMLAttributes<HTMLDivElement>) => {
  return (
    <Container size={size} type={type} style={containerStyle} {...props}>
      {icon && <Icon size={size} src={getAssetURL(`../assets/${icon}.svg`)} />}
      {children}
    </Container>
  );
};

const Container = styled.div<{ size: ButtonSize; type: ButtonType }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  border-radius: 6px;

  font-weight: 500;

  cursor: pointer;

  user-select: none;

  ${({ type }) => css`
    background-color: ${backgroundColors[type]};
    color: ${textColors[type]};
    border: ${borderWidths[type]}px solid ${borderColors[type]};
  `}

  ${({ size }) =>
    size === ButtonSize.PRIMARY
      ? css`
          padding: 16px;
          font-size: 16px;
        `
      : css`
          padding: 11px 16px;
          font-size: 14px;
        `}
`;

const Icon = styled.img<{ size: ButtonSize }>`
  ${({ size }) =>
    size === ButtonSize.PRIMARY
      ? css`
          width: 14px;
          height: 14px;
          margin-right: 8px;
        `
      : css`
          width: 20px;
          height: 20px;
          margin-right: 4px;
        `}
`;
