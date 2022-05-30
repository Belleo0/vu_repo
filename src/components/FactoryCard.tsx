import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';

export default ({ name, address, ceoName, active, onClick }: any) => {
  return (
    <Container active={active} onClick={onClick}>
      <InfoWrap>
        <Name>{name}</Name>
        <Address>{address}</Address>
        <CeoWrap>
          <CeoLabel>대표자</CeoLabel>
          <CeoDivider />
          <CeoName>{ceoName}</CeoName>
        </CeoWrap>
      </InfoWrap>
      <CheckIcon
        src={
          active
            ? getAssetURL('../assets/ic-check-on.svg')
            : getAssetURL('../assets/ic-check.svg')
        }
      />
    </Container>
  );
};

const Container = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  padding: 12px 40px;
  cursor: pointer;

  transition: background-color 0.1s linear;

  &:hover {
    background-color: rgba(37, 143, 255, 0.1);
  }

  ${({ active }) =>
    active
      ? css`
          background-color: rgba(37, 143, 255, 0.1);
        `
      : css`
          background-color: #ffffff;
        `}
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
  margin-bottom: 8px;
`;

const Address = styled.span`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #777;
  margin-bottom: 8px;
`;

const CeoWrap = styled.div`
  display: flex;
  align-items: center;
`;

const CeoLabel = styled.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
`;

const CeoDivider = styled.span`
  display: block;
  width: 1px;
  height: 6px;
  background-color: #e3e3e3;
  margin: 0px 6px;
`;

const CeoName = styled.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #000;
`;

const CheckIcon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;
