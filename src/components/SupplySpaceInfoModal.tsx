import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import Button, { ButtonType } from './Button';
import Modal from './Modal';

export default ({ open, data, onClose }: any) => {
  const factoryInfo = data?.factory_space;
  const factoryDetail = factoryInfo?.factory_info;

  const factoryTel = factoryDetail?.tel.replace(
    /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
    '$1-$2-$3',
  );
  const factoryFax = factoryDetail?.fax.replace(
    /^(\d{3,4})(\d{4})$/gm,
    '$1-$2',
  );

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        {data && data?.factory_space && (
          <Contents>
            <TitleWrap>
              <Title>레미콘 공장</Title>
            </TitleWrap>
            <BaseInfoSection>
              <InfoTitle>{factoryInfo.name}</InfoTitle>
              <InfoRow>
                <InfoLabel>주소</InfoLabel>
                <InfoContent>{factoryInfo.basic_address}</InfoContent>
              </InfoRow>
              <InfoRow>
                <InfoLabel>대표자</InfoLabel>
                <InfoContent>{factoryInfo.company.ceo_name}</InfoContent>
              </InfoRow>
              <InfoRow>
                <InfoLabel>전화번호</InfoLabel>
                <InfoContent>{factoryTel}</InfoContent>
              </InfoRow>
              <InfoRow>
                <InfoLabel>팩스번호</InfoLabel>
                <InfoContent>{factoryFax}</InfoContent>
              </InfoRow>
            </BaseInfoSection>
            {/* Table */}
            <ModalTableSection>
              <TableTitle>레미콘 정보</TableTitle>
              <TableRowTop>
                <TableLabel style={{ width: 360 }}>
                  레미콘배쳐플랜트<EngName>Remicon Batcher Plant</EngName>
                </TableLabel>
              </TableRowTop>
              <TableRow>
                <TableLabel style={{ width: 224 }}>기수 NO.</TableLabel>
                <TableValue>{factoryDetail.no}</TableValue>
              </TableRow>
              <TableRow>
                <TableLabel style={{ width: 224 }}>
                  레미콘생산능력<EngName>Productive Capa(㎡/hr)</EngName>
                </TableLabel>
                <TableValue>{factoryDetail.capa}</TableValue>
              </TableRow>
              <TableRow>
                <TableLabel style={{ width: 224 }}>계 Total</TableLabel>
                <TableValue>{factoryDetail.total}</TableValue>
              </TableRow>
              <TableRow>
                <TableLabel style={{ width: 164 }}>
                  믹서트<ColumnEngName>Remicon Mixer Truck</ColumnEngName>
                </TableLabel>
                <TableValue>{factoryDetail.truck_count}</TableValue>
              </TableRow>
              <TableRow>
                <TableLabel style={{ width: 164 }}>
                  시멘트사일로<ColumnEngName>Cement Silo</ColumnEngName>
                </TableLabel>
                <TableValue>{factoryDetail.cement_silo}</TableValue>
              </TableRow>
              <TableRow>
                <TableLabel style={{ width: 164 }}>
                  최초가동일
                  <ColumnEngName>The day of initial operation</ColumnEngName>
                </TableLabel>
                <TableValue>
                  {moment(factoryDetail.start_at).format('YYYY.MM.DD')}
                </TableValue>
              </TableRow>
              <TableRow>
                <TableLabel style={{ width: 164 }}>
                  KS취득일자
                  <ColumnEngName>The day of KS acquired</ColumnEngName>
                </TableLabel>
                <TableValue>
                  {moment(factoryDetail.ks_acquired_at).format('YYYY.MM.DD')}
                </TableValue>
              </TableRow>

              <Button
                type={ButtonType.PRIMARY}
                containerStyle={{ marginTop: 30 }}
                onClick={onClose}
              >
                확인
              </Button>
            </ModalTableSection>
          </Contents>
        )}
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 440px;
  background-color: white;
  border-radius: 20px;
`;

const Contents = styled.div``;

const TitleWrap = styled.div`
  margin: 50px auto 24px auto;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`;

const BaseInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 40px;
  background-color: #f2f2f2;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 11px;
`;

const InfoTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.44px;
  color: #000;

  margin: 14px auto;
`;

const InfoLabel = styled.div`
  width: 62px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  color: #999;
`;

const InfoContent = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  color: #222;
`;

const ModalTableSection = styled.div`
  padding: 24px 40px;
`;

const TableTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #222;

  margin-bottom: 9px;
`;

const TableRowTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-bottom: 1px solid #e3e3e3;
`;

const TableLabel = styled.div`
  background-color: #f2f2f2;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #444;

  border-right: 1px solid #e3e3e3;

  padding: 10px 14px;
`;

const TableValue = styled.div`
  display: flex;
  align-items: center;

  background-color: #ffffff;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #222;

  padding: 10px 14px 10px 16px;
`;

const EngName = styled.span`
  font-size: 11px;
  font-weight: normal;
  letter-spacing: -0.22px;
  text-align: left;
  color: #999;
  margin-left: 6px;
`;

const ColumnEngName = styled.div`
  font-size: 11px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-top: 4px;
`;

// const Divider = styled.span`
//   display: block;
//   width: 100%;
//   height: 1px;
//   margin: 20px 0px;
//   background-color: #e3e3e3;
// `;

// const SubTitle = styled.span`
//   display: block;
//   font-size: 16px;
//   font-weight: 600;
//   letter-spacing: -0.32px;
//   color: #000;
//   margin-bottom: 10px;
// `;

// const Table = styled.div`
//   display: flex;
//   flex-direction: column;
//   border-top: 1px solid #c7c7c7;
//   background-color: white;
// `;

// const CellWrap = styled.div`
//   display: flex;
//   width: 100%;
//   border-bottom: 1px solid #e3e3e3;
// `;

// const LabelCell = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   flex: 1;
//   min-width: 180px;
//   max-width: 164px;
//   padding: 17px 20px;
//   background-color: #f2f2f2;

//   font-size: 14px;
//   letter-spacing: -0.28px;
//   text-align: left;
//   color: #444;

//   border-right: 1px solid #e3e3e3;
// `;

// const ValueCell = styled.div`
//   display: flex;
//   align-items: center;

//   flex: 2;
//   padding: 17px 15px;

//   font-size: 16px;
//   font-weight: 500;
//   letter-spacing: -0.32px;
//   text-align: left;
//   color: #222;
// `;

// const EngName = styled.span`
//   display: block;
//   font-size: 12px;
//   letter-spacing: -0.24px;
//   text-align: left;
//   color: #999;
//   margin-top: 4px;
// `;

// const ColumnCellWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;

// const ColumnLabelCell = styled.div`
//   display: flex;
//   align-items: center;

//   min-width: 257px;
//   padding: 8px 24px;
//   background-color: #f2f2f2;

//   font-size: 13px;
//   letter-spacing: -0.28px;
//   text-align: left;
//   color: #444;

//   border-right: 1px solid #e3e3e3;
// `;

// const ColumnValueCell = styled.div`
//   display: flex;
//   align-items: center;

//   flex: 1;
//   padding: 8px 21px;

//   font-size: 13px;
//   font-weight: 500;
//   letter-spacing: -0.32px;
//   text-align: left;
//   color: #222;
// `;

// const ColumnEngName = styled.span`
//   font-size: 11px;
//   letter-spacing: -0.24px;
//   text-align: left;
//   color: #999;
//   margin-top: 4px;
// `;
