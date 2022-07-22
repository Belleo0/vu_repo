import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import React, { useMemo } from 'react';

export default ({ open, onClose, data }: any) => {
  const status = useMemo(() => {
    if (data?.use_apr_day && new Date(data?.use_apr_day) < new Date()) {
      return {
        date: data?.use_apr_day,
        label: '승인',
        color: '#253bff',
      };
    } else if (
      data?.real_stcns_day &&
      new Date(data?.real_stcns_day) < new Date()
    ) {
      return {
        date: data?.real_stcns_day,
        label: '착공',
        color: '#9241e4',
      };
    } else if (
      data?.arch_pms_day &&
      new Date(data?.arch_pms_day) < new Date()
    ) {
      return {
        date: data?.arch_pms_day,
        label: '허가',
        color: '#00b448',
      };
    }
  }, [data]);

  return (
    <Container isOpen={open}>
      {data && (
        <>
          <CloseIcon
            src={getAssetURL('../assets/ic-del.svg')}
            onClick={onClose}
          />
          <Title>{data?.plat_plc}</Title>
          <FieldInfoWrap>
            <FieldPurpose>
              {data?.main_purps_cd_nm === ''
                ? '알수없음'
                : data?.main_purps_cd_nm}
            </FieldPurpose>
            <SubDivider />
            <FieldArea>
              {data?.plat_area}㎡ (
              {(parseFloat(data?.plat_area) / 3.3058).toFixed(2)}평)
            </FieldArea>
          </FieldInfoWrap>
          <Divider />
          <SubTitle>인허가 상태</SubTitle>
          <StatusContainer>
            <StatusWrap>
              <StatusImage src={getAssetURL('../assets/permission-2-ic.svg')} />
              <StatusLabel>건축허가일</StatusLabel>
              <StatusDate>
                {moment(data?.arch_pms_day).isValid()
                  ? moment(data?.arch_pms_day).format('YYYY.MM.DD')
                  : '-'}
              </StatusDate>
            </StatusWrap>
            <StatusWrap>
              <StatusImage src={getAssetURL('../assets/schedule-2-ic.svg')} />
              <StatusLabel>착공예정일</StatusLabel>
              <StatusDate>
                {moment(data?.stcns_sched_day).isValid()
                  ? moment(data?.stcns_sched_day).format('YYYY.MM.DD')
                  : '-'}
              </StatusDate>
            </StatusWrap>
            <StatusWrap>
              <StatusImage src={getAssetURL('../assets/permission-2-ic.svg')} />
              <StatusLabel>착공연기일</StatusLabel>
              <StatusDate>
                {moment(data?.stcns_delay_day).isValid()
                  ? moment(data?.stcns_delay_day).format('YYYY.MM.DD')
                  : '-'}
              </StatusDate>
            </StatusWrap>
            <StatusWrap>
              <StatusImage src={getAssetURL('../assets/ing-2-ic.svg')} />
              <StatusLabel>실제착공일</StatusLabel>
              <StatusDate>
                {moment(data?.real_stcns_day).isValid()
                  ? moment(data?.real_stcns_day).format('YYYY.MM.DD')
                  : '-'}
              </StatusDate>
            </StatusWrap>
            <StatusWrap>
              <StatusImage src={getAssetURL('../assets/permission-2-ic.svg')} />
              <StatusLabel>사용승인일</StatusLabel>
              <StatusDate>
                {moment(data?.use_apr_day).isValid()
                  ? moment(data?.use_apr_day).format('YYYY.MM.DD')
                  : '-'}
              </StatusDate>
            </StatusWrap>
          </StatusContainer>
          <SubTitle>기본개요</SubTitle>
          <Table style={{ marginBottom: 24 }}>
            <CellWrap>
              <LabelCell>건물명</LabelCell>
              <ValueCell>{data?.bld_nm}</ValueCell>
            </CellWrap>
            <CellWrap>
              <LabelCell>허가구분</LabelCell>
              <ValueCell>{data?.arch_gb_cd_nm}</ValueCell>
              <ValueCell style={{ padding: 0 }}>
                <ColumnCellWrap>
                  <CellWrap style={{ height: '100%' }}>
                    <LabelCell style={{ minWidth: 108 }}>착공구분</LabelCell>
                    <ValueCell>{status?.label}</ValueCell>
                  </CellWrap>
                </ColumnCellWrap>
              </ValueCell>
            </CellWrap>
            <CellWrap>
              <LabelCell>건물 주용도</LabelCell>
              <ValueCell>{data?.main_purps_cd_nm}</ValueCell>
            </CellWrap>
            <CellWrap>
              <LabelCell>연면적</LabelCell>
              <ValueCell>
                {data?.tot_area}㎡ (
                {(parseFloat(data?.tot_area) / 3.3058).toFixed(2)}평)
              </ValueCell>
            </CellWrap>
            <CellWrap>
              <LabelCell>건축면적</LabelCell>
              <ValueCell>
                {data?.arch_area}㎡ (
                {(parseFloat(data?.arch_area) / 3.3058).toFixed(2)}평)
              </ValueCell>
            </CellWrap>
          </Table>
          {/* <SubTitle>정보작성</SubTitle> */}
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
  margin-bottom: 8px;
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
  height: 100%;
`;

const ColumnLabelCell = styled.div`
  display: flex;
  align-items: center;

  min-width: 257px;
  height: 100%;
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
  height: 100%;

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

const FieldInfoWrap = styled.div`
  display: flex;
  align-items: center;
`;

const FieldPurpose = styled.div`
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.32px;
  text-align: left;
  color: #777;
`;

const FieldArea = styled.div`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -0.32px;
  text-align: left;
  color: #777;
`;

const SubDivider = styled.div`
  width: 2px;
  height: 10px;
  margin: 0px 10px;
  background-color: #e3e3e3;
`;

const StatusContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 40px;
`;

const StatusWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const StatusImage = styled.img`
  margin-bottom: 10px;
`;

const StatusLabel = styled.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;
  color: #777;
  margin-bottom: 6px;
`;

const StatusDate = styled.span`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  text-align: center;
  color: #222;
`;
