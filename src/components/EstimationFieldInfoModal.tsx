import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import Button, { ButtonType } from './Button';
import Modal from './Modal';

export default ({ open, data, onClose }: any) => {
  console.log('Modaldata,', data);

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        {data && (
          <Contents>
            <TitleWrap>
              <Title>건설사 정보</Title>
            </TitleWrap>
            <BaseInfoSection>
              <InfoTitle>{data.name}</InfoTitle>
              <InfoRow>
                <InfoLabel>주소</InfoLabel>
                <InfoContent>{data.address}</InfoContent>
              </InfoRow>
              <InfoRow>
                <InfoLabel>대표자</InfoLabel>
                <InfoContent>{data.ceo_name}</InfoContent>
              </InfoRow>
              <InfoRow>
                <InfoLabel>전화번호</InfoLabel>
                <InfoContent>02-123-4567</InfoContent>
              </InfoRow>
              <InfoRow>
                <InfoLabel>사업자번호</InfoLabel>
                <InfoContent>622-81-24055</InfoContent>
              </InfoRow>
            </BaseInfoSection>
            {/* Table */}
            <ModalTableSection>
              <TableTitle>기본 정보</TableTitle>
              <TableRowTop>
                <TableLabel style={{ width: 130, height: 98 }}>
                  시공능력(최신)
                </TableLabel>
                <TableValue>
                  {`토목건축공사업 : 31,403백만원 \n 토목공사업 : 14,543백만원 \n 건축공사업 : 29,294백만원`}
                </TableValue>
              </TableRowTop>
              <TableRow>
                <TableLabel style={{ width: 130, height: 55 }}>
                  주력업종
                </TableLabel>
                <TableValue>토목건축공사업</TableValue>
              </TableRow>
              <TableRow>
                <TableLabel style={{ width: 130, height: 55 }}>
                  주요공사지역
                </TableLabel>
                <TableValue>부산 - 충북</TableValue>
              </TableRow>
              <TableRow>
                <TableLabel style={{ width: 130, height: 55 }}>
                  {`공사대장통보실적 \n(공공, 민간, 합계)`}
                </TableLabel>
                <TableValue>1,143억</TableValue>
              </TableRow>
              <TableRow>
                <TableLabel style={{ width: 130, height: 55 }}>
                  부도여부
                </TableLabel>
                <TableValue>정상</TableValue>
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
  display: flex;
  align-items: center;
  background-color: #f2f2f2;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #444;

  border-right: 1px solid #e3e3e3;

  padding-left: 14px;
`;

const TableValue = styled.div`
  display: flex;
  align-items: center;

  background-color: #ffffff;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  line-height: 1.38;
  text-align: left;
  color: #222;

  padding: 10px 14px 10px 16px;

  white-space: pre-line;
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
