import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import React, { useState } from 'react';
import Button, { ButtonType } from './Button';
import ProfileBox from './ProfileBox';
import SearchInput from './SearchInput';
import SpaceCard from './SpaceCard';

enum TabTypeEnum {
  DEFAULT,
  HIDE,
}

export default () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tabType, setTabType] = useState<TabTypeEnum>(TabTypeEnum.DEFAULT);
  return (
    <Container>
      <ProfileBox companyName="회사이름" role="직급" name="사용자이름" />
      <SpaceFilterWrap>
        <SpaceFilterName>건설현장</SpaceFilterName>
        <SearchInput
          placeholder="현장명을 입력해주세요."
          containerStyle={{ marginBottom: 20 }}
        />
        <Button
          type={ButtonType.PRIMARY}
          containerStyle={{ marginBottom: 30 }}
          icon="ic-plus-white"
        >
          건설현장 추가
        </Button>
        <TabContainer>
          <Tab
            active={tabType === TabTypeEnum.DEFAULT}
            onClick={() => setTabType(TabTypeEnum.DEFAULT)}
          >
            등록 현장 보기
          </Tab>
          <Tab
            active={tabType === TabTypeEnum.HIDE}
            onClick={() => setTabType(TabTypeEnum.HIDE)}
          >
            숨긴 현장 보기
          </Tab>
        </TabContainer>
      </SpaceFilterWrap>
      <SpaceContainer>
        <SpaceFilterContainer>
          <SpaceOrderWrap>
            <SpaceOrderLabelWrap
              onClick={() => setIsFilterOpen((prev) => !prev)}
            >
              <SpaceOrderLabel>최신순</SpaceOrderLabel>
              <SpaceOrderIcon
                isOpen={isFilterOpen}
                src={getAssetURL('../assets/ic-arrow.svg')}
              />
            </SpaceOrderLabelWrap>
            {isFilterOpen && (
              <AbsoluteFilterContainer>
                <AbsoluteFilterLabel active={true}>최신순</AbsoluteFilterLabel>
                <AbsoluteFilterLabel active={false}>
                  오래된순
                </AbsoluteFilterLabel>
                <AbsoluteFilterLabel active={false}>이름순</AbsoluteFilterLabel>
                <AbsoluteFilterLabel active={false}>
                  사용자화
                </AbsoluteFilterLabel>
              </AbsoluteFilterContainer>
            )}
          </SpaceOrderWrap>
          <SpaceOrderWrap>
            <SpaceOrderLabel>순서변경</SpaceOrderLabel>
            <SpaceOrderIcon src={getAssetURL('../assets/ic-sort.svg')} />
          </SpaceOrderWrap>
        </SpaceFilterContainer>
        <SpaceCard
          id={1}
          name="중앙동 일동미라주더마린 오피스텔 adsjfoiadsjofjd"
          address="부산 중구 충장대로 13번길 22"
        />
        <SpaceCard
          id={1}
          name="중앙동 일동미라주더마린 오피스텔 adsjfoiadsjofjd"
          address="부산 중구 충장대로 13번길 22"
        />
        <SpaceCard
          id={1}
          name="중앙동 일동미라주더마린 오피스텔 adsjfoiadsjofjd"
          address="부산 중구 충장대로 13번길 22"
        />
        <SpaceCard
          id={1}
          name="중앙동 일동미라주더마린 오피스텔 adsjfoiadsjofjd"
          address="부산 중구 충장대로 13번길 22"
        />
        <SpaceCard
          id={1}
          name="중앙동 일동미라주더마린 오피스텔 adsjfoiadsjofjd"
          address="부산 중구 충장대로 13번길 22"
        />
        <SpaceCard
          id={1}
          name="중앙동 일동미라주더마린 오피스텔 adsjfoiadsjofjd"
          address="부산 중구 충장대로 13번길 22"
        />
      </SpaceContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 380px;
  height: 100%;
`;

const SpaceFilterWrap = styled.div`
  display: block;
  padding: 30px 30px 0px 30px;
  border-bottom: 1px solid #e3e3e3;
`;

const SpaceFilterName = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 14px;
`;

const TabContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Tab = styled.div<{ active: boolean }>`
  flex: 1;
  padding: 13px 0px 10px 0px;
  text-align: center;
  margin-bottom: -1px;
  cursor: pointer;

  ${({ active }) =>
    active
      ? css`
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.3px;
          color: #222;

          border-bottom: 2px solid black;
        `
      : css`
          font-size: 15px;
          letter-spacing: -0.3px;
          color: #999;
        `})}
`;

const SpaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`;

const SpaceFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 14px;
`;

const SpaceOrderWrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
`;

const SpaceOrderLabel = styled.div`
  font-size: 13px;
  letter-spacing: -0.26px;
  color: #222;
  margin-right: 4px;
`;

const SpaceOrderIcon = styled.img<{ isOpen?: boolean }>`
  width: 18px;
  height: 18px;
  margin-bottom: 1px;

  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: rotate(180deg);
        `
      : css`
          transform: rotate(0deg);
        `}
`;

const AbsoluteFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 84px;
  position: absolute;
  // [FIXME]
  top: calc(100% + 6px);
  left: -10px;
  padding: 14px 19px 14px 14px;
  border-radius: 6px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const AbsoluteFilterLabel = styled.span<{ active: boolean }>`
  display: block;
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 14px;
  }

  ${({ active }) =>
    active
      ? css`
          color: #258fff;
        `
      : css`
          color: #000;
        `}
`;

const SpaceOrderLabelWrap = styled.div`
  display: flex;
  align-items: center;
`;
