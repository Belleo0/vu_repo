import { css } from '@emotion/react';
import styled from '@emotion/styled';
import convertDistance from '@utils/convertDistance';
import convertDuration from '@utils/convertDuration';
import getAssetURL from '@utils/getAssetURL';
import React from 'react';

interface IMapSpaceCard {
  id: number;
  index: number;
  name: string;
  distance: number;
  duration: number;
  selected: boolean;
  onClick: () => any;
  factories: any;
  selectedFieldId: null | number;
}

export default ({
  id,
  index,
  name,
  distance,
  duration,
  selected,
  onClick,
  factories,
  selectedFieldId,
}: IMapSpaceCard) => {
  return (
    <Container
      selected={selected}
      onClick={!!factories?.field_position ? onClick : () => null}
      // onClick={selectedFieldId !== null ? onClick : () => null}
    >
      <InfoContainer>
        <InfoWrap>
          <BookmarkWrap>
            <Address>부산광역시 영도구 동삼동 1123-3</Address>
            <StarIcon
              src={
                selected
                  ? getAssetURL('../assets/ic-bookmark-on.svg')
                  : getAssetURL('../assets/ic-bookmark-off.svg')
              }
            />
          </BookmarkWrap>
          <FieldInfoWrap>
            <FieldPurpose>업무시설</FieldPurpose>
            <Divider />
            <FieldArea>260.68㎡ (78.86평)</FieldArea>
          </FieldInfoWrap>
          <FieldConstructorWrap>
            <Constructor>발주처</Constructor>
            <FieldDateInfo>(주)대성건설</FieldDateInfo>
          </FieldConstructorWrap>
          <FieldDateWrap>
            <FieldStatus>승인</FieldStatus>
            <FieldDateInfo>2021.10</FieldDateInfo>
          </FieldDateWrap>
        </InfoWrap>
      </InfoContainer>
    </Container>
  );
};

const WithoutInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 26px 30px;
  border-bottom: 1px solid #f2f2f2;
  &:hover {
    .search-icon-circle {
      opacity: 1;
    }
  }
`;

const Container = styled.div<{ selected: boolean }>`
  /* width: 100%auto
  display: flex;
  justify-content: space-between;
  align-items: center; */
  padding: 20px 20px 20px 40px;
  border-bottom: 1px solid #f2f2f2;

  ${({ selected }) =>
    selected
      ? css`
          background-color: #258fff1a;
        `
      : css`
          background-color: white;
        `}

  &:hover {
    background-color: #258fff1a;
  }

  transition: background-color 0.1s linear;

  cursor: pointer;
`;

const InfoContainer = styled.div``;

const BookmarkWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Address = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.32px;
  color: #000;
`;

const FieldInfoWrap = styled.div`
  display: flex;
  align-items: center;

  margin-top: 2px;
  margin-bottom: 14px;
`;

const FieldPurpose = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #222;
`;

const FieldArea = styled.div`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #222;
`;

const FieldConstructorWrap = styled.div`
  height: 17px;

  display: flex;
  align-items: center;

  margin-bottom: 5px;
`;

const FieldDateWrap = styled.div`
  height: 17px;

  display: flex;
  align-items: center;
`;

const Constructor = styled.div`
  width: 43px;

  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  color: #999;
`;

const FieldStatus = styled.div`
  width: 43px;

  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  color: #253bff;
`;

const Divider = styled.span`
  display: block;
  width: 1px;
  height: 8px;
  margin: 0px 8px;
  background-color: #c7c7c7;
`;

const CheckIcon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;

const FieldDateInfo = styled.div`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #000;
`;

const StarIcon = styled.img`
  width: 28px;
  height: 28px;
`;
