import React from 'react';
import convertDistance from '@utils/convertDistance';
import convertDuration from '@utils/convertDuration';
import styled from '@emotion/styled';

interface IMarkerContent {
  distance: number;
  duration: number;
}

export default ({ distance, duration }: IMarkerContent) => {
  return (
    <RealContainer>
      <Container>
        <Duration>{convertDuration(duration)}분</Duration>
        <Divider />
        <Distance>{convertDistance(distance)}km</Distance>
      </Container>
      <Triangle />
    </RealContainer>
  );
};

const RealContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px 12px;
  background-color: black;
  border-radius: 8px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
`;

const Duration = styled.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  text-align: left;
  color: #fff;
`;

const Distance = styled.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #e3e3e3;
`;

const Divider = styled.span`
  display: block;
  width: 1px;
  height: 8px;
  margin: 0px 8px;
  background-color: #999;
`;

const Triangle = styled.span`
  width: 6px;
  border-top: 6px solid black;
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
`;
