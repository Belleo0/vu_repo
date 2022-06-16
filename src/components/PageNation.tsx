import React, { useState } from 'react';
import { temp_data } from '../pages/service-center/test';
import styled from '@emotion/styled';

interface IPageNation {
  perPage: number;
  total: number;
  current: number;
  setCurrent: any;
}

export default ({ perPage, total, current, setCurrent }: IPageNation) => {
  const idxF = ((current - 1) / 10) * 10 + 1;
  const idxL = idxF * current - 1;
  console.log(perPage);
  console.log(total);
  console.log(current);
  console.log(setCurrent);

  console.log(idxF);
  console.log(idxL);

  let totalPage = total / perPage;

  if (total % perPage > 0) {
    totalPage++;
  }

  if (current > totalPage) {
    current = totalPage;
  }

  return (
    <div>
      <nav>
        {/* <PageUl className="pagination">
          {currentPosts.map((number, idx) => (
            <PageLi key={idx} className="page-item">
              <div onClick={() => setCurrent(number)} className="page-link">
                {idx}
              </div>
            </PageLi>
          ))}
        </PageUl> */}
      </nav>
    </div>
  );
};

const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;
