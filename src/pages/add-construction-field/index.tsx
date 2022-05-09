import React from 'react';
import styled from '@emotion/styled';
import SpaceLayout from '@layout/SpaceLayout';
import { css } from '@emotion/css';

export enum ButtonType {
  PRIMARY,
  OUTLINE,
  OUTLINE_THICK,
  GRAY,
  GRAY_BLACK,
}
export default () => {
  return (
    <SpaceLayout>
      <Container>
        <BorderNumberWrapper>
          <BorderNumber>1</BorderNumber>
        </BorderNumberWrapper>
      </Container>
    </SpaceLayout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 0 60px 60px;

  user-select: none;
`;

const BorderNumberWrapper = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid #258fff;
  border-radius: 50%;
  text-align: -webkit-center;
`;

const BorderNumber = styled.div`
  width: 9px;
  height: 24px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  color: #258fff;
`;
