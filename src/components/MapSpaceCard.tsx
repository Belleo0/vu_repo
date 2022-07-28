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
  totalDuration: string;
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
  totalDuration,
}: IMapSpaceCard) => {
  if (!!!factories?.field_position)
    return (
      <WithoutInfoContainer>
        <Name>{name}</Name>
        <SearchIconWrap className="search-icon-circle" onClick={onClick}>
          <SearchIcon src={getAssetURL('../assets/ic-search-on.svg')} />
        </SearchIconWrap>
      </WithoutInfoContainer>
    );

  if (totalDuration === 'null')
    return (
      <Container
        selected={selected}
        onClick={!!factories?.field_position ? onClick : () => null}
      >
        <InfoContainer>
          <Index> {(index + 1).toString().padStart(2, '0')}</Index>
          <Name>{name}</Name>
        </InfoContainer>
        {!!factories?.field_position && (
          <CheckIcon
            src={
              selected
                ? getAssetURL('../assets/ic-check-on.svg')
                : getAssetURL('../assets/ic-check.svg')
            }
          />
        )}
      </Container>
    );
  return (
    <Container
      selected={selected}
      onClick={!!factories?.field_position ? onClick : () => null}
      // onClick={selectedFieldId !== null ? onClick : () => null}
    >
      <InfoContainer>
        <Index> {(index + 1).toString().padStart(2, '0')}</Index>
        <InfoWrap>
          <Name>{name}</Name>
          <DistanceWrap>
            <DistanceIcon src={getAssetURL('../assets/ic-car.svg')} />
            <Distance>{convertDistance(distance)}km</Distance>
            <Divider />
            <Duration>{convertDuration(duration)}분</Duration>
          </DistanceWrap>
        </InfoWrap>
      </InfoContainer>
      {/* {selectedFieldId !== null && ( */}
      {!!factories?.field_position && (
        <CheckIcon
          src={
            selected
              ? getAssetURL('../assets/ic-check-on.svg')
              : getAssetURL('../assets/ic-check.svg')
          }
        />
      )}
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
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

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Index = styled.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  text-align: left;
  color: #222;
  margin-right: 18px;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const DistanceWrap = styled.div`
  display: flex;
  align-items: center;

  margin-top: 6px;
`;

const Distance = styled.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
`;

const DistanceIcon = styled.img`
  width: 21px;
  height: 21px;
  margin-right: 4px;
`;

const Divider = styled.span`
  display: block;
  width: 1px;
  height: 8px;
  margin: 0px 8px;
  background-color: #c7c7c7;
`;

const Duration = styled.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
`;

const CheckIcon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;

const SearchIconWrap = styled.div`
  width: 34px;
  height: 34px;
  padding: 7px;
  border-radius: 17px;
  box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-left: 10px;
  opacity: 0;
  transition: opacity 0.05s linear;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;
