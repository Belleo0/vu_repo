import React, { CSSProperties, HTMLAttributes } from 'react';
import styled from '@emotion/styled';
// import FileSaver from 'file-saver';
// import XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

interface IExcelButton {
  csvData: Object[];
  fileName: string;
  containerStyle?: CSSProperties;
}

export default ({ csvData, fileName, containerStyle }: IExcelButton) => {
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (csvData: Object[], fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });

    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <PrintButton
      onClick={(e: any) => exportToCSV(csvData, fileName)}
      style={containerStyle}
    >
      Excel 다운
    </PrintButton>
  );
};

const PrintButton = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  padding: 11px 18px;
  border-radius: 6px;
  border: solid 1px #4490f7;
  background-color: #fff;
  color: #4490f7;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
`;
