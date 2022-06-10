import React, { useState } from 'react';
import styled from '@emotion/styled';
import convertDistance from '@utils/convertDistance';
import convertDuration from '@utils/convertDuration';
import { css } from '@emotion/react';
import getAssetURL from '@utils/getAssetURL';
import EstimationStatusValue from './EstimationStatusValue';
import moment from 'moment';
import TextModal from './TextModal';
import api from '@api';
import { useNavigate } from 'react-router-dom';

interface IVendorTable {
  data: any[];
  revalidate: any;
}

enum ButtonType {
  'ABLE',
  'INABLE',
  'DONE',
}

const backgroundColors = {
  [ButtonType.ABLE]: '#1084ff',
  [ButtonType.INABLE]: '#f2f2f2',
  [ButtonType.DONE]: '#f2f2f2',
};

const textColors = {
  [ButtonType.ABLE]: '#fff',
  [ButtonType.INABLE]: '#999999',
  [ButtonType.DONE]: '#000000',
};

export default ({ data = [], revalidate }: IVendorTable) => {
  const navigate = useNavigate();
  const dataList = data.map((v) => v.id);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectedAll, setSelectedAll] = useState<boolean>(false);

  const handleClickRadio = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds((prev) => prev.filter((v) => v !== id));
    } else {
      setSelectedIds((prev) => prev.concat(id));
    }
  };

  const handleClickAll = () => {
    setSelectedAll(!selectedAll);
    setSelectedIds(selectedAll ? [] : (prev) => prev.concat(dataList));
  };

  const handleConfirm = async () => {
    setSelectedIds([]);
  };

  return (
    <>
      <Container>
        <CellWrap>
          <LabelCell>납품일자</LabelCell>
          <LabelCell>납품사</LabelCell>
          <LabelCell>규격</LabelCell>
          <LabelCell style={{ marginRight: 50 }}>예정수량</LabelCell>
          <LabelCell style={{ marginLeft: 50 }}>실제납품수량</LabelCell>
          <LabelCell>확인</LabelCell>
          <LabelCell style={{ maxWidth: 150 }}>
            <DeleteRadio active={selectedAll}>
              <DeleteIcon
                src={
                  selectedAll
                    ? getAssetURL('../assets/ic-check-only-ic-white.svg')
                    : getAssetURL('../assets/ic-check-only-ic-grey.svg')
                }
                onClick={handleClickAll}
              />
            </DeleteRadio>
          </LabelCell>
        </CellWrap>
        {data.map((v) => (
          <CellWrap key={v?.id} selected={!selectedIds}>
            <ValueCell>
              <SupplyDate>{v?.supplyDate}</SupplyDate>
            </ValueCell>
            <ValueCell style={{ flexDirection: 'column' }}>
              <FactoryCompanyName>{v?.name}</FactoryCompanyName>
              <FactoryAddress>{v?.basic_address}</FactoryAddress>
            </ValueCell>
            <ValueCell>{v?.size}</ValueCell>
            <ValueCell style={{ marginRight: 50 }}>{v?.preAmount}m³</ValueCell>
            <ValueCell style={{ marginLeft: 50 }}>
              <SupplyAmount>{v?.amount}</SupplyAmount>m³
            </ValueCell>
            <ValueCell>
              <TotalAmount>
                <SubmitButton
                  type={
                    v.status === '0'
                      ? ButtonType.INABLE
                      : v.status === '1'
                      ? ButtonType.DONE
                      : ButtonType.ABLE
                  }
                  onClick={() => {}}
                >
                  <LikeIcon
                    src={
                      v.status === '0'
                        ? getAssetURL('../assets/ic-like-gray.svg')
                        : v.status === '1'
                        ? getAssetURL('../assets/ic-like.svg')
                        : getAssetURL('../assets/ic-like-white.svg')
                    }
                  />
                  {v.status === '0'
                    ? '확인하기'
                    : v.status === '1'
                    ? '확인완료'
                    : '확인하기'}
                </SubmitButton>
              </TotalAmount>
            </ValueCell>
            <ValueCell style={{ maxWidth: 150 }}>
              {v.status === '1' ? null : (
                <DeleteRadio
                  active={selectedIds.includes(v?.id)}
                  onClick={() => handleClickRadio(v?.id)}
                >
                  <DeleteIcon
                    src={
                      selectedIds.includes(v?.id)
                        ? getAssetURL('../assets/ic-check-only-ic-white.svg')
                        : getAssetURL('../assets/ic-check-only-ic-grey.svg')
                    }
                  />
                </DeleteRadio>
              )}
            </ValueCell>
          </CellWrap>
        ))}
      </Container>
      <EndSection>
        <Notice>• 납품업체가 작성한 납품수량을 확인합니다.</Notice>
        <LabelCell style={{ marginLeft: '200px' }}>
          <TotalSupplyAmountTitle>실제 납품수량 합계</TotalSupplyAmountTitle>
          <TotalSupplyAmountValue>
            <TotalSupplyAmount>472</TotalSupplyAmount> m³
          </TotalSupplyAmountValue>
        </LabelCell>
        <LabelCell style={{ maxWidth: 150 }}>
          <SelectConfirmButton
            disabled={selectedIds.length === 0}
            onClick={selectedIds.length === 0 ? () => null : handleConfirm}
          >
            선택확인
          </SelectConfirmButton>
        </LabelCell>
      </EndSection>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c7c7c7;
  background-color: white;
  /* margin-bottom: 15px; */
`;

const CellWrap = styled.div<{ selected?: boolean }>`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;

  ${({ selected }) =>
    selected
      ? css`
          background-color: #258fff1a;
          cursor: pointer;
        `
      : css`
          background-color: white;
          cursor: pointer;
        `}
`;

const LabelCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
  padding: 17px;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;
  color: #444;
`;

const ValueCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
  padding: 18px;

  font-size: 16px;
  font-weight: normal;

  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;

const FactoryCompanyName = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: center;
  color: #222;
  margin-bottom: 6px;
`;

const FactoryAddress = styled.span`
  display: block;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: center;
  color: #777;
`;

const Distance = styled.span`
  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const DistanceDivider = styled.span`
  display: block;
  width: 1px;
  height: 10px;
  background-color: #c7c7c7;
  margin: 0px 10px;
`;

const Duration = styled.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const SaleUserName = styled.span`
  display: block;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #258fff;
  text-decoration: underline;
  cursor: pointer;
  user-select: none;
`;

const TotalAmount = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;

  letter-spacing: -0.36px;
  text-align: left;
  color: #1084ff;
`;

const OrderButton = styled.span<{ disabled: boolean }>`
  padding: 8px 27px;
  border-radius: 18px;

  background-color: #fff;

  ${({ disabled }) =>
    disabled
      ? css`
          border: solid 1px #c7c7c7;
          color: #c7c7c7;
        `
      : css`
          border: solid 1px #258fff;
          color: #258fff;
        `}

  font-size: 14px;
  font-weight: 600;

  letter-spacing: -0.28px;
  text-align: center;

  cursor: pointer;
  user-select: none;
`;

const DeleteButton = styled.span<{ disabled: boolean }>`
  padding: 5px 20px;
  border-radius: 6px;
  background-color: #000;

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: #f2f2f2;
          color: #999;
        `
      : css`
          background-color: #000;
          color: #fff;
        `}

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;

  transition: background-color 0.2s ease-in-out;

  cursor: pointer;
  user-select: none;
`;

const DeleteRadio = styled.span<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: #fff;

  ${({ active }) =>
    active
      ? css`
          background-color: #222;
          border: solid 1px #222;
        `
      : css`
          background-color: #fff;
          border: solid 1px #c7c7c7;
        `}

  transition: background-color 0.2s ease-in-out;
`;

const DeleteIcon = styled.img`
  width: 12px;
`;

const PriceRateWrap = styled.div`
  display: flex;
  align-items: center;
`;

const PriceRateIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 7px;
`;

const PriceRateValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;

const SubmitButton = styled.div<{ type: ButtonType }>`
  width: 100%;
  padding: 8px 15px;
  border-radius: 18px;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: center;
  display: flex;
  align-items: center;

  cursor: pointer;

  ${({ type }) =>
    css`
      background-color: ${backgroundColors[type]};
      color: ${textColors[type]};
    `}
`;

const RequestedAtWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RequestedAtLabel = styled.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #9d9d9d;
  margin-bottom: 8px;
`;

const RequestedAtValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const SupplyDate = styled.span`
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.28;
  color: #777777;
`;

const SupplyAmount = styled.span`
  color: #ff5517;
  font-size: 16px;
  font-weight: 500;
  margin-right: 6px;
  letter-spacing: -0.32px;
`;

const LikeIcon = styled.img`
  width: 20px;
  margin-right: 2px;
`;

const EndSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Notice = styled.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: center;
  color: #999;
`;

const TotalWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TotalSupplyAmountTitle = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin-right: 30px;
`;

const TotalSupplyAmountValue = styled.div`
  align-items: flex-end;
`;

const TotalSupplyAmount = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #ff5517;
`;

const SelectConfirmButton = styled.div<{ disabled: boolean }>`
  width: 81px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border-radius: 6px;
  background-color: #000;

  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  text-align: center;
  color: #fff;

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: #f2f2f2;
          color: #999999;
        `
      : css`
          background-color: #000;
          color: #fff;
        `}
`;
