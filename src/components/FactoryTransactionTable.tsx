import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { norminalStrengthOptions, slumpOptions } from '@constance/SpecOptions';
import { css } from '@emotion/react';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import TextModal from './TextModal';
import api from '@api';
import { useNavigate } from 'react-router-dom';
import Tooltip from './Tooltip';
import { values } from 'lodash';
import BlackInput from './BlackInput';
import BlackSelect from './BlackSelect';

interface ITransactionTable {
  data: any[];
  revalidate: any;
}

interface ISpec {
  value: number; /// 키 수정해야함ㅜㅜ
  norminal_strength: number;
  slump: number;
  quantity: number;
}

const defaultSpec = { value: 0, norminal_strength: 0, slump: 0, quantity: 0 };

// 버튼 상태 1.확인완료 2.수량변경가능 3.변경완료
enum ButtonType {
  'ABLE',
  'INABLE',
  'DONE',
  'CONFIRMED',
  'CANCEL',
}

const backgroundColors = {
  [ButtonType.CONFIRMED]: '#ffffff',
  [ButtonType.ABLE]: '#ffffff',
  [ButtonType.INABLE]: '#f2f2f2',
  [ButtonType.DONE]: '#1084ff',
  [ButtonType.CANCEL]: '#f2f2f2',
};

const textColors = {
  [ButtonType.CONFIRMED]: '#000000',
  [ButtonType.ABLE]: '#000000',
  [ButtonType.INABLE]: '#999999',
  [ButtonType.DONE]: '#ffffff',
  [ButtonType.CANCEL]: '#000000',
};

const borderColors = {
  [ButtonType.CONFIRMED]: 'solid 1px #ffffff',
  [ButtonType.ABLE]: 'solid 1px #c7c7c7',
  [ButtonType.INABLE]: 'solid 1px #ffffff',
  [ButtonType.DONE]: 'solid 1px #ffffff',
  [ButtonType.CANCEL]: 'solid 1px #f2f2f2',
};

export default ({ data = [], revalidate }: ITransactionTable) => {
  const navigate = useNavigate();
  const dataList = data.filter((v: any) => v.status !== '1');
  const dataListIds = dataList.map((v: any) => v.id);

  const [editData, setEditData] = useState(data);
  const [specs, setSpecs] = useState<ISpec[]>([defaultSpec]);

  const [isFocused, setIsFocused] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const [confirmModal, setConfirmModal] = useState<boolean>(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isEditAmount, setIsEditAmount] = useState<any>({});

  const handleToggleAnswer = (id: number) => {
    console.log(id);
    setIsEditAmount((prev: any) => ({ ...prev, [id]: !prev[id] }));
  };

  const onMouseOver = (status: string) => {
    if (status === '1') {
      setIsFocused(true);
    } else return null;
  };

  const onMouseLeave = () => {
    setIsFocused(false);
  };

  const totalAmount = useMemo(() => {
    return dataList.reduce(
      (previousValue, currentValue) => previousValue + currentValue.amount,
      0,
    );
  }, [data]);

  const handleConfirm = () => {
    setConfirmModal(!confirmModal);
  };

  const handleAddSpecRow = (index: number) => {
    console.log('index', index);
    setEditData((prev) => {
      editData.splice(index, 0, defaultSpec);
      return editData;
    });
    // setSpecs((prev) => {
    //   const array = Array.from(prev);
    //   array.splice(index + 1, 0, defaultSpec);
    //   return array;
    // });
  };

  const handleRemoveSpecRow = (index: number) => {
    // if (index === 0 && specs.length <= 2) {
    //   handleAddSpecRow(specs.length - 1);
    // }
    if (specs.length > 1) {
      setSpecs((prev) => {
        const array = Array.from(prev);
        array.splice(index, 1);
        return array;
      });
    }
  };

  const handleChangeSpecValue = (index: number, key: string, value: string) => {
    console.log(value);
    if (/\d/.test(value) || value === '') {
      setSpecs((prev) => {
        const mappedData = Array.from(prev).map((v: any, i: number) =>
          i !== index
            ? v
            : { ...v, [key]: parseInt(value === '' ? '0' : value, 10) },
        );

        return mappedData;
      });
    }
  };

  const handleEditAmount = () => {
    setIsEditAmount(true);
  };

  const renderSpecInput = () => {
    return (
      <>
        {specs.map((v: any, i: number) => (
          <CellWrap>
            <SepcRowCell>
              <BlackInput
                maxLength={2}
                placeholder="00"
                containerStyle={{ width: 40 }}
                value={v.value === 0 ? '' : v.value}
                onChange={(e) =>
                  handleChangeSpecValue(i, 'value', e.target.value)
                }
              />
              <SpecDivider />
              <BlackSelect
                placeholder="000"
                width={68}
                value={v.norminal_strength === 0 ? null : v.norminal_strength}
                onChange={(v: any) =>
                  handleChangeSpecValue(i, 'norminal_strength', v)
                }
                options={norminalStrengthOptions}
                containerStyle={{ marginRight: 24 }}
              />
              <SpecDivider />
              <BlackSelect
                placeholder="00"
                width={58}
                value={v.slump === 0 ? null : v.slump}
                onChange={(v: any) => handleChangeSpecValue(i, 'slump', v)}
                options={slumpOptions}
              />

              <BlackInput
                placeholder="000"
                containerStyle={{ width: 64, marginLeft: 220 }}
                value={v.quantity === 0 ? '' : v.quantity}
                onChange={(e) =>
                  handleChangeSpecValue(i, 'quantity', e.target.value)
                }
              />
              <AmountLabel>m³</AmountLabel>
              <SpecRowIcon
                src={getAssetURL('../assets/ic-minus-02.svg')}
                onClick={() => handleRemoveSpecRow(i)}
              />
              <TotalAmount style={{ marginLeft: 30 }}>
                <SubmitButton type={ButtonType.INABLE}>추가등록</SubmitButton>
              </TotalAmount>
            </SepcRowCell>
          </CellWrap>
        ))}
      </>
    );
  };

  return (
    <>
      <Container>
        <CellWrap>
          <LabelCell>납품일자</LabelCell>
          <LabelCell>건설사</LabelCell>
          <LabelCell>건설현장</LabelCell>
          <LabelCell>규격</LabelCell>
          <LabelCell>예정수량</LabelCell>
          <LabelCell>실제납품수량</LabelCell>
          <LabelCell style={{ maxWidth: 25 }}>{''}</LabelCell>
          <LabelCell style={{ minWidth: 280 }}>확인</LabelCell>
        </CellWrap>
        {data.map((v: any, i: number) => (
          <CellWrap key={v?.id} selected={selectedIds.includes(v.id)}>
            <ValueCell>
              <SupplyDate>{v?.supplyDate}</SupplyDate>
            </ValueCell>
            <ValueCell>
              <FactoryCompanyName>{v?.name}</FactoryCompanyName>
            </ValueCell>
            <ValueCell style={{ flexDirection: 'column' }}>
              <FactoryCompanyName>{v?.name}</FactoryCompanyName>
              <FactoryAddress>{v?.basic_address}</FactoryAddress>
            </ValueCell>
            <ValueCell>{v?.size}</ValueCell>
            <ValueCell>{v?.preAmount}m³</ValueCell>
            {isEditAmount[v?.id] ? (
              <ValueCell>
                <BlackInput
                  placeholder="000"
                  containerStyle={{
                    width: 64,
                    marginRight: 4,
                    color: '#258fff',
                  }}
                  value={v.quantity === 0 ? '' : v.quantity}
                  onChange={(e) =>
                    handleChangeSpecValue(i, 'quantity', e.target.value)
                  }
                />
                m³
              </ValueCell>
            ) : (
              <ValueCell>
                <SupplyAmount>{v?.amount}</SupplyAmount>
                m³
              </ValueCell>
            )}
            <ValueCell style={{ maxWidth: 25 }}>
              {v.status === '1' && (
                <SpecRowIcon
                  src={getAssetURL('../assets/ic-plus-02.svg')}
                  onMouseOver={(e) => {
                    onMouseOver(v.status);
                    setPosition({ x: e.clientX, y: e.clientY });
                  }}
                  onMouseLeave={onMouseLeave}
                  onClick={() => handleAddSpecRow(v.id)}
                />
              )}
              {isFocused && v.status === '1' && (
                <Tooltip
                  containerStyle={{
                    top: position.y,
                    left: position.x,
                  }}
                >
                  <Popper>규격 추가</Popper>
                </Tooltip>
              )}
            </ValueCell>
            <ValueCell style={{ minWidth: 280 }}>
              <TotalAmount>
                <SubmitButton
                  type={
                    v.status === '0'
                      ? ButtonType.CONFIRMED
                      : v.status === '1'
                      ? ButtonType.DONE
                      : ButtonType.ABLE
                  }
                  onClick={() => {
                    v.status === '0'
                      ? null
                      : v.status === '1'
                      ? null
                      : handleToggleAnswer(v?.id);
                  }}
                >
                  {v.status === '0'
                    ? '확인완료'
                    : v.status === '1'
                    ? '변경완료'
                    : '수량변경'}
                </SubmitButton>
                {v.status !== '0' && (
                  <SubmitButton
                    style={{ marginLeft: 10 }}
                    type={ButtonType.CANCEL}
                    onClick={handleConfirm}
                  >
                    {v.status === '1' ? '변동취소' : '등록취소'}
                  </SubmitButton>
                )}
              </TotalAmount>
            </ValueCell>
          </CellWrap>
        ))}
        {/* {specs.map((v: any, i: number) => (
          <CellWrap>
            <SepcRowCell>
              <BlackInput
                maxLength={2}
                placeholder="00"
                containerStyle={{ width: 40 }}
                value={v.value === 0 ? '' : v.value}
                onChange={(e) =>
                  handleChangeSpecValue(i, 'value', e.target.value)
                }
              />
              <SpecDivider />
              <BlackSelect
                placeholder="00"
                width={55}
                value={v.slump === 0 ? null : v.slump}
                onChange={(v: any) => handleChangeSpecValue(i, 'slump', v)}
                options={slumpOptions}
              />
              <SpecDivider />
              <BlackSelect
                placeholder="000"
                width={65}
                value={v.norminal_strength === 0 ? null : v.norminal_strength}
                onChange={(v: any) =>
                  handleChangeSpecValue(i, 'norminal_strength', v)
                }
                options={norminalStrengthOptions}
                containerStyle={{ marginRight: 24 }}
              />
              <BlackInput
                placeholder="000"
                containerStyle={{ width: 64, marginLeft: 220 }}
                value={v.quantity === 0 ? '' : v.quantity}
                onChange={(e) =>
                  handleChangeSpecValue(i, 'quantity', e.target.value)
                }
              />
              <AmountLabel>m³</AmountLabel>
              <SpecRowIcon
                src={getAssetURL('../assets/ic-minus-02.svg')}
                onClick={() => handleRemoveSpecRow(i)}
              />
              <TotalAmount style={{ marginLeft: 30 }}>
                <SubmitButton type={ButtonType.INABLE}>추가등록</SubmitButton>
              </TotalAmount>
            </SepcRowCell>
          </CellWrap>
        ))} */}
      </Container>
      <EndSection>
        <Notice>
          • 실제 납품수량을 등록하면 건설사에서 확인할 수 있습니다.
        </Notice>
        <LabelCell style={{ marginLeft: '200px' }}>
          <TotalSupplyAmountTitle>실제 납품수량 합계</TotalSupplyAmountTitle>
          <TotalSupplyAmountValue>
            <TotalSupplyAmount>{totalAmount}</TotalSupplyAmount> m³
          </TotalSupplyAmountValue>
        </LabelCell>
      </EndSection>
      <TextModal
        open={confirmModal}
        onClose={() => handleConfirm()}
        submitText={'확인'}
        content={'확인완료를 취소하시겠습니까?'}
        onSubmit={() => handleConfirm()}
      />
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
        `
      : css`
          background-color: white;
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
  display: flex;
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
  border-radius: 6px;

  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  text-align: center;
  display: flex;
  align-items: center;

  cursor: pointer;

  ${({ type }) =>
    css`
      background-color: ${backgroundColors[type]};
      color: ${textColors[type]};
      border: ${borderColors[type]};
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
  color: #000000;
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
  color: #258fff;
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

const Popper = styled.div`
  padding: 14px 16px;
  color: #000;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const SpecRowIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
  &:last-child {
    margin-right: 0px;
  }
`;

const SepcRowCell = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  flex: 1;
  padding: 12px;

  font-size: 16px;
  font-weight: normal;

  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
  margin-right: 134px;
`;

const SpecDivider = styled.span`
  display: block;
  width: 4px;
  height: 1px;
  background-color: #000;
  margin: 0px 4px;
`;

const AmountLabel = styled.span`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  text-align: right;
  color: #777;
  margin-left: 8px;
  margin-right: 20px;
`;

const SpecInputWrap = styled.div``;
