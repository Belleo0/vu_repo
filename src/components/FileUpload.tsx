import { css } from '@emotion/css';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { values } from 'lodash';
import React, {
  ChangeEvent,
  CSSProperties,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface IFileUpload {
  label?: string;
  images: any;
  setImages: any;
  buttonStyle?: CSSProperties;
  iconStyle?: CSSProperties;
  icon?: string;
  limit: number;
}

export default ({
  images,
  setImages,
  label,
  buttonStyle,
  icon,
  iconStyle,
  limit,
}: IFileUpload & InputHTMLAttributes<HTMLDivElement>) => {
  const [thumbnails, setThumbnails] = useState<any>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const imageList = e.target.files;
    console.log(imageList);
    let imageUrlList = [...thumbnails];

    for (let i = 0; i < imageList?.length; i++) {
      // @ts-ignore
      const newImages = URL.createObjectURL(imageList[i]);
      imageUrlList.push(newImages);
    }

    if (imageUrlList.length > limit) {
      console.log('실행???');
      imageUrlList = imageUrlList.slice(0, limit);
      setThumbnails(imageUrlList);
      window.alert('이미지는 최대 5장까지 등록 가능합니다.');
    }

    setThumbnails(imageUrlList);
    setImages(imageUrlList);
  };

  const deleteFileImage = (index: number) => {
    URL.revokeObjectURL(thumbnails[index]);
    setThumbnails(thumbnails.filter((_: any, i: number) => i !== index));
  };

  useEffect(() => {
    //언마운트시 메모리 누수 제거하기
    return () => URL.revokeObjectURL(thumbnails);
  }, []);

  useEffect(() => {
    console.log(thumbnails);
  }, [thumbnails]);

  return (
    <Container>
      <InputWrap>
        <UploadButton htmlFor="file" style={buttonStyle}>
          {icon ? (
            <Icon
              style={iconStyle}
              src={getAssetURL(`../assets/${icon}.svg`)}
            />
          ) : (
            label
          )}
        </UploadButton>
        <input
          type="file"
          multiple
          id="file"
          accept="image/*"
          hidden
          onChange={(e) => handleChange(e)}
          style={{ display: 'none' }}
        />
      </InputWrap>
      {thumbnails.length !== 0 &&
        thumbnails.map((v: string, i: number) => {
          return (
            <ImageContainer key={i}>
              <XIcon
                src={getAssetURL('../assets/ic-circle-x.svg')}
                onClick={(e) => {
                  e.preventDefault();
                  deleteFileImage(i);
                }}
              />
              <ImageContent url={v} />
            </ImageContainer>
          );
        })}
    </Container>
  );
};

const Container = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0;
  width: 100%;
`;

const InputWrap = styled.div``;

const UploadButton = styled.label`
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

  margin-right: 20px;
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
`;

const ImageContainer = styled.span`
  position: relative;

  margin-right: 20px;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;

  border-radius: 12px;
  background-color: #eff7ff;
`;

const ImageContent = styled.div`
  width: 120px;
  height: 120px;

  border-radius: 12px;
  background-color: #eff7ff;

  background-image: ${(props: { url: string }) => ` url('${props.url}')`};
  background-position: center;
  background-size: cover;
`;

const XIcon = styled.img`
  position: absolute;
  cursor: pointer;

  top: 6px;
  right: 6px;
`;
