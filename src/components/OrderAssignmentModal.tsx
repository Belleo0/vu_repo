import api from '@api';
import assignmentTimeOptions from '@constance/AssignmentTimeOptions';
import { norminalStrengthOptions, slumpOptions } from '@constance/SpecOptions';
import styled from '@emotion/styled';
import useSelectedSpaceInfo from '@hooks/useSelectedSpaceInfo';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import BlackInput from './BlackInput';
import BlackSelect from './BlackSelect';
import Button, { ButtonType } from './Button';
import Checkbox from './Checkbox';
import Modal from './Modal';

interface ISpec {
  value: number; /// 키 수정해야함ㅜㅜ
  slump: number;
  norminal_strength: number;
  quantity: number;
}

const defaultSpec = { value: 0, slump: 0, norminal_strength: 0, quantity: 0 };

export default ({
  id,
  open,
  onClose,
  name,
  percent,
  revalidate,
  isEditModal = false,
  initialInfo,
}: any) => {
  const selectedSpaceInfo = useSelectedSpaceInfo();

  const [date, setDate] = useState('');
  const [startAt, setStartAt] = useState<string | null>(null);
  const [endAt, setEndAt] = useState<string | null>(null);

  const [specs, setSpecs] = useState<ISpec[]>([defaultSpec, defaultSpec]);

  const [checkbox, setCheckbox] = useState({
    mulcha: false,
    multal: false,
    inducer: false,
  });

  const totalAmount = useMemo(() => {
    return specs.reduce(
      (previousValue, currentValue) => previousValue + currentValue.quantity,
      0,
    );
  }, [specs]);

  const [remark, setRemark] = useState('');

  const isValidated = useMemo(() => {
    if (date === '') return false;
    if (startAt === null) return false;
    if (endAt === null) return false;
    if (specs[0].value === 0) return false;
    if (specs[0].slump === 0) return false;
    if (specs[0].norminal_strength === 0) return false;
    if (specs[0].quantity === 0) return false;

    return true;
  }, [date, startAt, endAt, specs]);

  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async () => {
    if (loading === false) {
      setLoading(true);
      try {
        const data = {
          specs,
          date: date,
          start_time: moment(date)
            .set({
              hour: parseInt(startAt!.slice(0, 2), 10),
              minute: parseInt(startAt!.slice(3, 5), 10),
            })
            .toISOString(),
          end_time: moment(date)
            .set({
              hour: parseInt(endAt!.slice(0, 2), 10),
              minute: parseInt(endAt!.slice(3, 5), 10),
            })
            .toISOString(),
          mulcha: checkbox.mulcha,
          multal: checkbox.multal,
          inducer: checkbox.inducer,
          remark,
          total: totalAmount,
        };
        if (isEditModal) {
          await api.put(`/assignments/${initialInfo?.id}`, data);
        } else {
          await api.post(`/assignments/${id}`, data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
        onClose();
        await revalidate();
      }
    }
  };

  useEffect(() => {
    if (isEditModal) {
      setDate(initialInfo.date);
      setStartAt(moment(initialInfo.start_time).format('HH:mm') as any);
      setEndAt(moment(initialInfo.end_time).format('HH:mm') as any);
      setSpecs(initialInfo.specs);
      setCheckbox({
        mulcha: initialInfo.mulcha,
        multal: initialInfo.multal,
        inducer: initialInfo.inducer,
      });
      setRemark(initialInfo.remark);
    }
  }, [isEditModal, initialInfo]);

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <TopSection>
          <CloseIcon
            src={getAssetURL('../assets/ic-del.svg')}
            onClick={onClose}
          />
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
              <Value>{name}</Value>
            </ContentsInfoWrap>
            <ContentsInfoWrap>
              <Label>단가율</Label>
              <Value>{percent}%</Value>
            </ContentsInfoWrap>
          </ContentsInfoContainer>
          <Form>
            <FormRow>
              <FormLabel>배정일자</FormLabel>
              <BlackInput
                type="date"
                placeholder="yyyy.mm.dd"
                containerStyle={{ width: 130 }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
            <CheckboxWrap>
              <Checkbox
                value={checkbox.mulcha}
                onChange={() =>
                  setCheckbox((prev) => ({ ...prev, mulcha: !prev.mulcha }))
                }
                label="물차"
                containerStyle={{ marginRight: 24 }}
              />
              <Checkbox
                value={checkbox.multal}
                onChange={() =>
                  setCheckbox((prev) => ({ ...prev, multal: !prev.multal }))
                }
                label="물탈"
                containerStyle={{ marginRight: 24 }}
              />
              <Checkbox
                value={checkbox.inducer}
                onChange={() =>
                  setCheckbox((prev) => ({ ...prev, inducer: !prev.inducer }))
                }
                label="유도제"
                containerStyle={{ marginRight: 24 }}
              />
            </CheckboxWrap>
            <FormRow style={{ alignItems: 'flex-start', marginBottom: 18 }}>
              <FormLabel style={{ width: 64 }}>
                특기사항
                <br />
                (선택)
              </FormLabel>
              <TextArea
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
              />
            </FormRow>
            <FormRow style={{ justifyContent: 'space-between' }}>
              <FormLabel style={{ width: 64 }}>합계</FormLabel>
              <Amount>
                {totalAmount.toLocaleString('ko')}
                <span>m³</span>
              </Amount>
            </FormRow>
          </Form>
          <Button
            type={isValidated ? ButtonType.PRIMARY : ButtonType.GRAY}
            onClick={handleSubmit}
          >
            {isEditModal ? '수정하기' : '등록하기'}
          </Button>
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
  cursor: pointer;
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
  margin-bottom: 30px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

const FormLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
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
  margin-bottom: 30px;
`;

const CheckboxWrap = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 60px;
  padding: 10px;
  border-radius: 6px;
  border: solid 1px #e3e3e3;
  background-color: #fff;
  outline: 0;
  resize: none;
`;

const Amount = styled.span`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #222;

  & > span {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: -0.26px;
    color: #1f1d1d;
    margin-left: 4px;
  }
`;
