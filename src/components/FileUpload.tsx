import styled from '@emotion/styled';
import { values } from 'lodash';
import React, {
  ChangeEvent,
  CSSProperties,
  HTMLAttributes,
  useCallback,
} from 'react';

interface IFileUpload {
  label?: string;
  image: any;
  setImage: any;
  buttonStyle?: CSSProperties;
}

export default ({
  image,
  setImage,
  label,
  buttonStyle,
}: IFileUpload & HTMLAttributes<HTMLDivElement>) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files;
    console.log('newFile', newFile);
    setImage(newFile);
  };

  return (
    <Container>
      <UploadButton style={buttonStyle} htmlFor="file">
        {label}
      </UploadButton>
      <input
        type="file"
        id="file"
        accept="image/*"
        hidden
        onChange={(e) => handleChange(e)}
        style={{ display: 'none' }}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const UploadButton = styled.label<{ htmlFor: string }>`
  width: 84px;
  height: 36px;
  font-size: 13px;
  padding: 9px 0;
  margin: 14px 0;
  border-radius: 6px;
  border: solid 1px #000;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
  letter-spacing: -0.26px;
`;
