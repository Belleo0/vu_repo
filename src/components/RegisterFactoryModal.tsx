import React, {
  ChangeEvent,
  CSSProperties,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import Modal, {
  CustomShadowButtonWrap,
  ModalContainer,
  ModalTitle,
  ShadowButtonWrap,
} from '@components/Modal';
import styled from '@emotion/styled';

import Button, { ButtonType } from './Button';
import FactoryCard from './FactoryCard';
import SearchInput from './SearchInput';

import { debounce } from 'lodash';

interface IRFModal {
  searchFactory?: any;
  open?: any;
  onClose?: any;
  setSearchFactory?: any;
  searchedFactories?: any[];
  factories?: any;
  tempSelectedFactoryInfo?: any;
  setTempSelectedFactoryInfo?: any;
  handleSubmitFactory?: () => any;
  setForSearchFactory?: any;
}

export default ({
  setTempSelectedFactoryInfo,
  handleSubmitFactory,
  searchedFactories,
  open,
  onClose,
  searchFactory,
  setSearchFactory,
  factories,
  tempSelectedFactoryInfo,
  setForSearchFactory,
}: IRFModal) => {
  const delayedUpdateCall = useRef(
    debounce((q) => setForSearchFactory(q), 300),
  ).current;

  const handleKeywordChange = (v: any) => {
    delayedUpdateCall(v);
    setSearchFactory(v);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalContainer
        style={{
          minWidth: 440,
          maxHeight: 733,
          padding: 0,
          paddingTop: 50,
        }}
      >
        <ModalTitle>공장 등록하기</ModalTitle>
        <ModalHeaderWrap>
          <SearchInput
            placeholder="공장명을 입력해주세요."
            containerStyle={{ marginBottom: 30 }}
            value={searchFactory}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleKeywordChange(e.target.value)
            }
          />
          <Label>목록({factories?.length})</Label>
        </ModalHeaderWrap>

        <CardWrap>
          {searchedFactories &&
            searchedFactories.map((v: any, i) => (
              <FactoryCard
                key={v.id}
                name={v?.visible_name}
                address={v?.address}
                ceoName={v?.ceo_name}
                active={tempSelectedFactoryInfo?.id === v?.id}
                onClick={() => setTempSelectedFactoryInfo(v)}
              />
            ))}
        </CardWrap>
        <CustomShadowButtonWrap>
          <Button
            type={ButtonType.GRAY_BLACK}
            onClick={onClose}
            containerStyle={{ marginRight: 20 }}
          >
            취소
          </Button>
          <Button
            type={
              tempSelectedFactoryInfo === null
                ? ButtonType.GRAY
                : ButtonType.PRIMARY
            }
            onClick={handleSubmitFactory}
          >
            선택하기
          </Button>
        </CustomShadowButtonWrap>
      </ModalContainer>
    </Modal>
  );
};

const CardWrap = styled.div`
  height: 414px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 17px;
  }

  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #c7c7c7;
    /* 스크롤바 둥글게 설정    */
    border-radius: 10px;

    background-clip: padding-box;
    border: 6px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;
const ModalHeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 40px 14px 40px;
  border-bottom: 1px solid #c7c7c7;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;
