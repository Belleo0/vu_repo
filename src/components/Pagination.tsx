import React, { useState } from 'react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { css } from '@emotion/react';

interface IPagenation {
  onChangeLimit?: any;
  onChangeSkip?: any;
  limit: number;
  skip: number;
  totalCount: number;
  limitOptions?: number;
}

export default ({
  onChangeLimit,
  onChangeSkip,
  limit,
  skip,
  totalCount,
}: IPagenation) => {
  const buttonLimit = 7;
  const currentPage = skip / limit + 1;
  const totalPage = Math.ceil(totalCount / limit);
  const start = Math.floor((currentPage - 1) / buttonLimit) * buttonLimit + 1;
  const rest =
    start + (buttonLimit - 1) < totalPage
      ? buttonLimit - 1
      : (totalPage - start) % buttonLimit;
  const btns = [];

  console.log(currentPage, totalPage, start, rest);

  for (let i = start; i <= start + rest; i++) {
    btns.push(
      <PageSpan
        key={i}
        active={currentPage === i}
        onClick={() => {
          if (currentPage === i) {
            return;
          }
          onChangeSkip((i - 1) * limit);
        }}
      >
        {i}
      </PageSpan>,
    );
  }

  return (
    <Container>
      {/* <Icon disabled={currentPage === 1} onClick={() => onChangeSkip(0)} /> */}
      <PaginationWrap>
        <Icon
          src={
            currentPage === 1
              ? getAssetURL('../assets/ic-arrow-gray-left.svg')
              : getAssetURL('../assets/ic-arrow-left.svg')
          }
          onClick={() =>
            currentPage === 1 ? null : onChangeSkip((currentPage - 2) * limit)
          }
        />
        {btns}
        <Icon
          src={
            currentPage === totalPage || totalPage <= 1
              ? getAssetURL('../assets/ic-arrow-gray-right.svg')
              : getAssetURL('../assets/ic-arrow-right.svg')
          }
          onClick={() =>
            currentPage === totalPage || totalPage <= 1
              ? null
              : onChangeSkip(currentPage * limit)
          }
        />
        {/* <Icon
          // disabled={currentPage === totalPage || totalPage <= 1}
          onClick={() => onChangeSkip((totalPage - 1) * limit)}
        /> */}
      </PaginationWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
`;

const PaginationWrap = styled.div`
  width: 320px;

  display: flex;

  justify-content: space-around;
  align-items: center;
`;

const PageSpan = styled.span<{ active: boolean }>`
  color: #c7c7c7;
  cursor: pointer;

  ${({ active }) =>
    active
      ? css`
          color: #258fff;
        `
      : css`
          color: #c7c7c7;
        `}
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
