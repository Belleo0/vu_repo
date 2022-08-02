import api from '@api';
import { norminalStrengthOptions, slumpOptions } from '@constance/SpecOptions';
import { BusanUnitPrice } from '@constance/UnitPriceData';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { makeComma } from '@utils/makeComma';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import BlackInput from './BlackInput';
import BlackSelect from './BlackSelect';
import BlackTextarea from './BlackTextarea';
import Button, { ButtonSize, ButtonType } from './Button';
import Modal from './Modal';
import RemiconUnitPriceListModal from './RemiconUnitPriceListModal';

interface ISpec {
  value: number; /// 키 수정해야함ㅜㅜ
  norminal_strength: number;
  slump: number;
  price: number;
}

const defaultSpec = { value: 25, slump: 0, norminal_strength: 0, price: 0 };

enum PaymentMethodEnum {
  CASH = '현금',
  NOTE = '어음',
  BOND = '전자채권',
  CARD = '구매카드',
}

export default ({ open, onClose, revalidate, data }: any) => {
  // console.log(data);
  const [loading, setLoading] = useState(false);

  const [percent, setPercent] = useState('');
  const [remarks, setRemarks] = useState('');

  const [specs, setSpecs] = useState<ISpec[]>([
    defaultSpec,
    defaultSpec,
    defaultSpec,
  ]);

  const [isUnitPriceModalOpen, setIsUnitPriceModalOpen] =
    useState<boolean>(false);

  const isValidated = useMemo(() => {
    if (percent === '') return false;
    // if (specs[0].value === 0) return false;
    // if (specs[0].slump === 0) return false;
    // if (specs[0].norminal_strength === 0) return false;

    const specValidation = specs.map((v) => {
      if (v.value === 0) return false;
      if (v.slump === 0) return false;
      if (v.norminal_strength === 0) return false;
      return true;
    });

    if (specValidation.filter((v) => !!v).length !== 3) return false;

    return true;
  }, [percent, specs]);

  // const handleChangeSpecValue = (index: number, key: string, value: string) => {
  //   console.log('index: ', index, 'key: ', key, 'value: ', value);

  //   if (/\d/.test(value) || value === '') {
  //     console.log('specs!!!!', specs);
  //     setSpecs((prev) => {
  //       const mappedData = Array.from(prev).map((v, i) =>
  //         i !== index
  //           ? v
  //           : { ...v, [key]: parseInt(value === '' ? '0' : value, 10) },
  //       );
  //       console.log('mappedData', mappedData);

  //       return mappedData;
  //     });
  //   }
  // };

  const handleChangeSpecValue = (index: number, key: string, value: string) => {
    if (/\d/.test(value) || value === '') {
      setSpecs((prev) => {
        const mappedData = Array.from(prev).map((v, i) =>
          i !== index
            ? v
            : { ...v, [key]: parseInt(value === '' ? '0' : value, 10) },
        );

        const unitPrice = BusanUnitPrice.filter((v) =>
          v
            ? v.slump === mappedData[index].slump &&
              v.mPa === mappedData[index].norminal_strength
            : mappedData[index].price,
        );

        const price =
          typeof unitPrice?.[0]?.price === 'number'
            ? calculateSpecPrice(unitPrice?.[0]?.price, percent)
            : 0;

        const temp = mappedData.map((v, i) => {
          return {
            ...v,
            price: i === index ? price : v.price,
          };
        });

        return temp;
      });
    }
  };

  const calculateSpecPrice = (price: number, percent: any): number => {
    if (percent !== '' && percent !== '100') {
      const specPrice = Math.floor((price * (percent / 100)) / 100) * 100;
      return specPrice;
    }
    return price;
  };

  const handleSubmit = async () => {
    if (!isValidated) return;
    if (loading) return;
    try {
      setLoading(true);
      const submitData: { [key: string]: any } = {
        percent,
        remarks,
      };

      specs.forEach((v, i) => {
        Object.entries(v).forEach(([key, value]) => {
          submitData[`${key}_${i + 1}`] = value;
        });
      });

      await api.post(`/estimations/${data?.id}/submit`, submitData);
      await revalidate();
      onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const temp1 = specs.map((spec) => {
      const originalPrice =
        BusanUnitPrice.find(
          (x) => x.slump === spec.slump && x.mPa === spec.norminal_strength,
        )?.price || 0;

      return originalPrice;
    });

    const percentPrice = temp1.map((x: any) => calculateSpecPrice(x, percent));

    setSpecs((prev) =>
      [...prev].map((x, i) => ({ ...x, price: percentPrice[i] })),
    );
  }, [percent]);

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <TopSection>
          <CloseIcon
            src={getAssetURL('../assets/ic-del.svg')}
            onClick={onClose}
          />
          <Title>견적 제안하기</Title>
        </TopSection>
        <ScrollWrap>
          <InfoSection>
            <Name>{data?.factory_space?.name}</Name>
            <RowWrap>
              <RowLabel>건설사</RowLabel>
              <RowValue>{data?.field_space?.company?.name}</RowValue>
            </RowWrap>
            <RowWrap>
              <RowLabel>주소</RowLabel>
              <RowValue>{data?.field_space?.basic_address}</RowValue>
            </RowWrap>
            <RowWrap>
              <RowLabel>공사기간</RowLabel>
              <RowValue>
                {moment(data?.field_space?.field_info?.start_at).format(
                  'YYYY.MM',
                )}{' '}
                ~{' '}
                {moment(data?.field_space?.field_info?.end_at).format(
                  'YYYY.MM',
                )}
              </RowValue>
            </RowWrap>
            <RowWrap>
              <RowLabel>예상물량</RowLabel>
              <RowValue>
                {data?.field_space?.field_info?.need_amount?.toLocaleString?.(
                  'ko',
                )}
                m³
              </RowValue>
            </RowWrap>
            <RowWrap>
              <RowLabel>담당자</RowLabel>
              <RowValue>
                {data?.field_space?.site_user?.name}{' '}
                {data?.field_space?.site_user?.position}
              </RowValue>
            </RowWrap>
            <RowWrap>
              <RowLabel>결제조건</RowLabel>
              <RowValue>
                {data?.field_space?.field_info?.payment_due_date}일{' '}
                {
                  PaymentMethodEnum?.[
                    data?.field_space?.field_info
                      ?.payment_method as unknown as keyof typeof PaymentMethodEnum
                  ]
                }
              </RowValue>
              {/* <SmallButton
                onClick={() => window.alert(`TODO : 2차 범위입니다.`)}
              >
                변경
              </SmallButton> */}
            </RowWrap>
            <RowWrap>
              <RowLabel>특기사항</RowLabel>
              <RowValue>{data?.field_space?.field_info?.remarks}</RowValue>
            </RowWrap>
          </InfoSection>
          <ContentsWrap>
            <Box>
              <BoxTopSection>
                <Type>단가율</Type>
                <PercentInput
                  value={percent}
                  onChange={(e) => {
                    if (
                      !!Number(e.target.value) &&
                      parseInt(e.target.value, 10) <= 100
                    ) {
                      setPercent(e.target.value);
                    } else if (e.target.value === '') {
                      setPercent('');
                    }
                  }}
                />
                <PercentText>%</PercentText>
              </BoxTopSection>
              {specs.map((v, i) => (
                <SpecRow key={i}>
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
                    width={60}
                    value={
                      v.norminal_strength === 0 ? null : v.norminal_strength
                    }
                    onChange={(v) =>
                      handleChangeSpecValue(i, 'norminal_strength', v)
                    }
                    options={norminalStrengthOptions}
                  />
                  <SpecDivider />
                  <BlackSelect
                    placeholder="000"
                    width={68}
                    value={v.slump === 0 ? null : v.slump}
                    onChange={(v) => handleChangeSpecValue(i, 'slump', v)}
                    options={slumpOptions}
                  />
                  <TotalPrice>{makeComma(v.price)}원</TotalPrice>
                </SpecRow>
              ))}
              <TextButton
                onClick={() => {
                  setIsUnitPriceModalOpen(true);
                }}
              >
                +부산지역 단가표
              </TextButton>
            </Box>
            <Label>특기사항</Label>
            <BlackTextarea
              containerStyle={{ marginBottom: 20 }}
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
            <Button
              type={ButtonType.OUTLINE}
              size={ButtonSize.PRIMARY}
              icon="ic-upload-on"
              iconStyle={{ width: 24, height: 24 }}
              containerStyle={{ paddingTop: 9, paddingBottom: 9 }}
              onClick={() => window.alert(`TODO : 2차 범위입니다.`)}
            >
              첨부파일 업로드
            </Button>
          </ContentsWrap>
        </ScrollWrap>

        <BottomSection>
          <Button
            type={isValidated ? ButtonType.PRIMARY : ButtonType.GRAY}
            size={ButtonSize.PRIMARY}
            onClick={handleSubmit}
          >
            견적 제출하기
          </Button>
        </BottomSection>
        <RemiconUnitPriceListModal
          open={isUnitPriceModalOpen}
          onClose={() => setIsUnitPriceModalOpen(false)}
        />
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 440px;
  max-height: 825px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
`;

const ScrollWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  overflow-y: scroll;
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
  width: 100%;
  padding: 24px 40px;
  background-color: #f2f2f2;
`;

const Name = styled.span`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.44px;
  text-align: center;
  color: #000;
  margin-bottom: 14px;
`;

const RowWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const RowLabel = styled.span`
  min-width: 43px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-right: 18px;
`;

const RowValue = styled.span`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 40px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 30px;
  border-radius: 20px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
  margin-bottom: 20px;
`;

const BoxTopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 14px;
`;

const Type = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
  margin-right: 24px;
`;

const PercentInput = styled.input`
  width: 86px;
  height: 50px;
  padding: 5px 0;
  border-radius: 6px;
  border: solid 2px #4490f7;

  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.56px;
  text-align: center;
  color: #258fff;

  margin-right: 6px;

  outline: 0;
`;

const PercentText = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const SpecDivider = styled.span`
  display: block;
  width: 4px;
  height: 1px;
  background-color: #000;
  margin: 0px 4px;
`;
const SpecRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TotalPrice = styled.span`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: normal;
  text-align: right;
  color: #1f1d1d;
  margin-left: auto;
`;

const TextButton = styled.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: right;
  color: #c7c7c7;
  text-decoration: underline;
  margin-top: 5px;
  cursor: pointer;
`;

const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #222;
  margin-bottom: 8px;
`;

const BottomSection = styled.div`
  width: 100%;
  padding: 20px 40px 24px;
  box-shadow: 0 -6px 16px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
`;

const SmallButton = styled.span`
  padding: 6px 14px;
  border-radius: 20px;
  border: solid 1px #c7c7c7;
  background-color: #fff;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  color: #000;
  margin-left: 10px;
  cursor: pointer;
`;
