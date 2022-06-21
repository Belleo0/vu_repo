import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
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
  iconStyle?: CSSProperties;
  icon?: string;
}

export default ({
  image,
  setImage,
  label,
  buttonStyle,
  icon,
  iconStyle,
}: IFileUpload & HTMLAttributes<HTMLDivElement>) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files;
    console.log('newFile', newFile);
    setImage(newFile);
  };

  return (
    <Container htmlFor="file">
      <UploadButton style={buttonStyle}>
        {icon ? (
          <Icon style={iconStyle} src={getAssetURL(`../assets/${icon}.svg`)} />
        ) : (
          label
        )}
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

const Container = styled.label<{ htmlFor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0;
  width: 100%;
`;

const UploadButton = styled.span`
  width: 84px;
  height: 36px;
  font-size: 13px;
  padding: 10px 0;
  border-radius: 6px;
  border: solid 1px #000;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
  letter-spacing: -0.26px;
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
`;
