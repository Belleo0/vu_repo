import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';

export default ({ open, data, onClose }: any) => {
  return (
    <Container isOpen={open}>
      {data && (
        <>
          <CloseIcon
            src={getAssetURL('../assets/ic-del.svg')}
            onClick={onClose}
          />
          <Title>{data?.name}</Title>
          <Divider />
          <SubTitle>회사정보</SubTitle>
          <Table style={{ marginBottom: 24 }}>
            <CellWrap>
              <LabelCell>
                회사명
                <EngName>Trade name.</EngName>
              </LabelCell>
              <ValueCell>{data?.company?.name}</ValueCell>
            </CellWrap>
            <CellWrap>
              <LabelCell>
                주소 <EngName>Address.</EngName>
              </LabelCell>
              <ValueCell>{data?.company?.address}</ValueCell>
            </CellWrap>
            <CellWrap>
              <LabelCell>
                대표자 <EngName>Arep.</EngName>
              </LabelCell>
              <ValueCell>{data?.company?.ceo_name}</ValueCell>
            </CellWrap>
            <CellWrap>
              <LabelCell>
                전화번호 <EngName>Tel.</EngName>
              </LabelCell>
              <ValueCell>{data?.factory_info?.tel}</ValueCell>
            </CellWrap>
            <CellWrap>
              <LabelCell>
                팩스번호 <EngName>Fax.</EngName>
              </LabelCell>
              <ValueCell>{data?.factory_info?.fax}</ValueCell>
            </CellWrap>
          </Table>
          <SubTitle>레미콘 정보</SubTitle>
          <Table style={{ marginBottom: 24 }}>
            <CellWrap>
              <LabelCell>
                레미콘배쳐플랜트
                <EngName>Remicon Batcher Plant</EngName>
              </LabelCell>
              <ValueCell style={{ padding: 0 }}>
                <ColumnCellWrap>
                  <CellWrap>
                    <ColumnLabelCell>기수 NO.</ColumnLabelCell>
                    <ColumnValueCell>{data?.factory_info?.no}</ColumnValueCell>
                  </CellWrap>
                  <CellWrap>
                    <ColumnLabelCell>
                      레미콘생산능력
                      <ColumnEngName>Productive Capa(㎡/hr)</ColumnEngName>
                    </ColumnLabelCell>
                    <ColumnValueCell>
                      {data?.factory_info?.capa}
                    </ColumnValueCell>
                  </CellWrap>
                  <CellWrap style={{ border: 0 }}>
                    <ColumnLabelCell>계 Total</ColumnLabelCell>
                    <ColumnValueCell>
                      {data?.factory_info?.total}
                    </ColumnValueCell>
                  </CellWrap>
                </ColumnCellWrap>
              </ValueCell>
            </CellWrap>
            <CellWrap>
              <LabelCell>
                믹서트럭(대) <EngName>Remicon Mixer Truck</EngName>
              </LabelCell>
              <ValueCell>{data?.factory_info?.truck_count}</ValueCell>
            </CellWrap>
            <CellWrap>
              <LabelCell>
                시멘트사일로(TON) <EngName>Cement Silo</EngName>
              </LabelCell>
              <ValueCell>{data?.factory_info?.cement_silo}</ValueCell>
            </CellWrap>
            <CellWrap>
              <LabelCell>
                최초가동일 <EngName>The day of initial operation</EngName>
              </LabelCell>
              <ValueCell>
                {moment(data?.factory_info?.start_at).format('YYYY.MM.DD')}
              </ValueCell>
            </CellWrap>
            <CellWrap>
              <LabelCell>
                KS취득일자 <EngName>The day of KS acquired</EngName>
              </LabelCell>
              <ValueCell>
                {moment(data?.factory_info?.ks_acquired_at).format(
                  'YYYY.MM.DD',
                )}
              </ValueCell>
            </CellWrap>
          </Table>
        </>
      )}
    </Container>
  );
};

const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  width: 690px;
  height: 100%;
  padding: 30px 50px;
  background-color: white;
  z-index: 99999999;

  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: translateX(0%);
        `
      : css`
          transform: translateX(100%);
        `}

  transition: transform 0.25s ease-in-out;
`;

const CloseIcon = styled.img`
  display: block;
  width: 24px;
  height: 24px;
  margin-bottom: 10px;
  object-fit: contain;
  margin-left: auto;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.4px;
  text-align: left;
  color: #000;
`;

const Divider = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  margin: 20px 0px;
  background-color: #e3e3e3;
`;

const SubTitle = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  color: #000;
  margin-bottom: 10px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c7c7c7;
  background-color: white;
`;

const CellWrap = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
`;

const LabelCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex: 1;
  min-width: 180px;
  max-width: 164px;
  padding: 17px 20px;
  background-color: #f2f2f2;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #444;

  border-right: 1px solid #e3e3e3;
`;

const ValueCell = styled.div`
  display: flex;
  align-items: center;

  flex: 2;
  padding: 17px 15px;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;

const EngName = styled.span`
  display: block;
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-top: 4px;
`;

const ColumnCellWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ColumnLabelCell = styled.div`
  display: flex;
  align-items: center;

  min-width: 257px;
  padding: 8px 24px;
  background-color: #f2f2f2;

  font-size: 13px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #444;

  border-right: 1px solid #e3e3e3;
`;

const ColumnValueCell = styled.div`
  display: flex;
  align-items: center;

  flex: 1;
  padding: 8px 21px;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;

const ColumnEngName = styled.span`
  font-size: 11px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-top: 4px;
`;
