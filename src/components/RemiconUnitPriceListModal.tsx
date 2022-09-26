import { BusanUnitPrice } from '@constance/UnitPriceData';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { makeComma } from '@utils/makeComma';
import Button, { ButtonSize, ButtonType } from './Button';
import Modal from './Modal';
import RemiconUnitPriceTable from './RemiconUnitPriceTable';

export default ({ open, estimation, onClose }: any) => {
  // const result = BusanUnitPrice.filter(
  //   (v: any) => v.slump === 8 && v.mPa === 240,
  // );
  // console.log('price!!!!', result?.[0]?.price);

  const slump1 = BusanUnitPrice.filter((v: any) => v.slump === 80);
  const slump2 = BusanUnitPrice.filter((v: any) => v.slump === 120);
  const slump3 = BusanUnitPrice.filter((v: any) => v.slump === 150);
  const slump4 = BusanUnitPrice.filter((v: any) => v.slump === 180);
  const slump5 = BusanUnitPrice.filter((v: any) => v.slump === 210);

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        {/* {estimation && ( */}
        <Contents>
          <RemiconUnitPriceTable
            print={false}
            percent={'100'}
            location={'부산'}
          />
          <Button
            type={ButtonType.PRIMARY}
            containerStyle={{ width: 360, margin: 'auto', marginTop: '30px' }}
            onClick={onClose}
          >
            확인
          </Button>
        </Contents>
        {/* )} */}
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 960px;
  height: auto;
  background-color: white;
  border-radius: 20px;

  padding: 30px 40px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  margin: 20px auto 24px auto;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  background-color: #f2f2f2;
`;

const ModalTableSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-bottom: 40px;
`;

const TextDivider = styled.span`
  display: block;
  width: 1px;
  height: 8px;
  background-color: #c7c7c7;
  margin: 0px 10px;
`;

const BoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Type = styled.div`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
  color: #222;
`;

const PercentInput = styled.div`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.56px;
  text-align: center;
  color: #258fff;

  margin-right: 6px;
`;

const PercentText = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const HelperTextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-bottom: 6px;
`;

const Caption = styled.span`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.24px;
  text-align: right;
  color: #999;
`;

const TableTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;
const TableTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #fff;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #444;
`;

const LabelCell = styled.div`
  height: 50px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #f2f2f2;
  border-bottom: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;

  font-size: 14px;
  font-weight: 500;
  color: #444;
`;

const ColumnTitle = styled.div`
  width: 100px;
  height: 50px;
  border-right: 1px solid #e3e3e3;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f2f2f2;
  border-bottom: 1px solid #e3e3e3;

  font-size: 14px;
  font-weight: 500;
  color: #444;
`;

const ValueCell = styled.div`
  height: 50px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  border-bottom: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;

  font-size: 14px;
  font-weight: 500;
  color: #444;
`;

const TableWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
`;

const HalfTableWrap = styled.div`
  width: 490px;
  display: flex;
  flex-direction: column;

  margin-top: 30px;
`;

const CaptionSpan = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: #777;
`;

const DiagonalCell = styled.div`
  width: 74px;
  height: 30px;
`;

const DiagonalLeft = styled.span`
  position: absolute;
  bottom: 4px;
  left: 6px;

  font-size: 12px;
`;

const DiagonalRight = styled.span`
  width: 50px;

  position: absolute;
  top: 4px;
  right: 6px;

  font-size: 12px;
  text-align: right;
`;

const Slash = styled.div`
  position: absolute;
  height: 30px; // adjust height td
  top: 40px;
  bottom: 14px;
  margin: auto;
  right: 5px;
  width: 100%;
  border-top: 1px solid #000;
  // adjust height td
  -webkit-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  transform: rotate(25deg);
`;
