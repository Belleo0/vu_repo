import assignmentTimeOptions from '@constance/AssignmentTimeOptions';
import { norminalStrengthOptions, slumpOptions } from '@constance/SpecOptions';
import styled from '@emotion/styled';
import useSelectedSpaceInfo from '@hooks/useSelectedSpaceInfo';
import getAssetURL from '@utils/getAssetURL';
import { useState } from 'react';
import BlackInput from './BlackInput';
import BlackSelect from './BlackSelect';
import Modal from './Modal';

interface ISpec {
  value: number; /// 키 수정해야함ㅜㅜ
  slump: number;
  norminal_strength: number;
  quantity: number;
}

const defaultSpec = { value: 0, slump: 0, norminal_strength: 0, quantity: 0 };

export default () => {
  const selectedSpaceInfo = useSelectedSpaceInfo();

  const [startAt, setStartAt] = useState(null);
  const [endAt, setEndAt] = useState(null);

  const [specs, setSpecs] = useState<ISpec[]>([defaultSpec, defaultSpec]);

  const handleChangeSpecValue = (index: number, key: string, value: string) => {
    console.log(value);
    if (/\d/.test(value) || value === '') {
      setSpecs((prev) => {
        const mappedData = Array.from(prev).map((v, i) =>
          i !== index
            ? v
            : { ...v, [key]: parseInt(value === '' ? '0' : value, 10) },
        );

        return mappedData;
      });
    }
  };

  const handleAddSpecRow = (index: number) => {
    setSpecs((prev) => {
      const array = Array.from(prev);
      array.splice(index + 1, 0, defaultSpec);
      return array;
    });
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

  return (
    <Modal open={false} onClose={() => null}>
      <Container>
        <TopSection>
          <CloseIcon src={getAssetURL('../assets/ic-del.svg')} />
          <Title>물량 배정</Title>
        </TopSection>
        <InfoSection>
          <SelectedSpaceName>{selectedSpaceInfo?.name}</SelectedSpaceName>
          <AddressWrap>
            <Label>현장주소</Label>
            <AddressValue>{selectedSpaceInfo?.basic_address}</AddressValue>
            <Label>현장주소</Label>
          </AddressWrap>
        </InfoSection>
        <Contents>
          <ContentsInfoContainer>
            <ContentsInfoWrap>
              <Label>납품업체</Label>
              <Value>(주)표주레미콘</Value>
            </ContentsInfoWrap>
            <ContentsInfoWrap>
              <Label>단가율</Label>
              <Value>84%</Value>
            </ContentsInfoWrap>
          </ContentsInfoContainer>
          <Form>
            <FormRow>
              <FormLabel>배정일자</FormLabel>
              <BlackInput
                placeholder="yyyy.mm.dd"
                containerStyle={{ width: 130 }}
              />
            </FormRow>
            <FormRow>
              <FormLabel>배정시간</FormLabel>
              <BlackSelect
                placeholder="오전 09:00"
                width={107}
                options={assignmentTimeOptions}
                value={startAt}
                onChange={(v) => setStartAt(v)}
              />
              <WaveIcon src={getAssetURL('../assets/ic-wave-mark.svg')} />
              <BlackSelect
                placeholder="오전 09:00"
                width={107}
                options={assignmentTimeOptions}
                value={endAt}
                onChange={(v) => setEndAt(v)}
              />
            </FormRow>
            <SpecContainer>
              {specs.map((v, i) => (
                <FormRow>
                  <FormLabel>{i === 0 ? '규격' : ''}</FormLabel>
                  <BlackInput
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
                    onChange={(v) => handleChangeSpecValue(i, 'slump', v)}
                    options={slumpOptions}
                  />
                  <SpecDivider />
                  <BlackSelect
                    placeholder="000"
                    width={65}
                    value={
                      v.norminal_strength === 0 ? null : v.norminal_strength
                    }
                    onChange={(v) =>
                      handleChangeSpecValue(i, 'norminal_strength', v)
                    }
                    options={norminalStrengthOptions}
                    containerStyle={{ marginRight: 24 }}
                  />
                  <FormLabel style={{ width: 'auto', marginRight: 14 }}>
                    수량
                  </FormLabel>
                  <BlackInput
                    placeholder="000"
                    containerStyle={{ width: 64 }}
                    value={v.quantity === 0 ? '' : v.quantity}
                    onChange={(e) =>
                      handleChangeSpecValue(i, 'quantity', e.target.value)
                    }
                  />
                  <AmountLabel>m³</AmountLabel>
                  {specs.length !== 1 && (
                    <SpecRowIcon
                      src={getAssetURL('../assets/ic-minus-02.svg')}
                      onClick={() => handleRemoveSpecRow(i)}
                    />
                  )}
                  {(specs.length === 1 || i !== 0) && (
                    <SpecRowIcon
                      src={getAssetURL('../assets/ic-plus-02.svg')}
                      onClick={() => handleAddSpecRow(i)}
                    />
                  )}
                </FormRow>
              ))}
            </SpecContainer>
          </Form>
        </Contents>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 600px;
  background-color: white;
  border-radius: 20px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 24px 30px;
`;

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-left: auto;
  margin-bottom: 6px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 24px 0px;
  background-color: #f2f2f2;
`;

const SelectedSpaceName = styled.span`
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.44px;
  text-align: center;
  color: #000;
  margin-bottom: 10px;
`;

const AddressWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  &:first-of-type {
    margin-right: 14px;
  }
  &:last-child {
    margin-left: 14px;
    opacity: 0;
  }
`;

const AddressValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 28px 40px;
`;

const ContentsInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 14px;
`;

const ContentsInfoWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Value = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 14px;
`;

const FormLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  text-align: left;
  color: #222;

  width: 52px;
  margin-right: 20px;
`;

const WaveIcon = styled.img`
  width: 14px;
  height: 8px;
  margin: 0px 6px;
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

const SpecRowIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 6px;
  object-fit: contain;
  cursor: pointer;
  &:last-child {
    margin-right: 0px;
  }
`;

const SpecContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
