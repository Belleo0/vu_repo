import React, { useEffect, useMemo, useRef, useState } from 'react';
import { setSelectedSpaceInfo } from '@data/space';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import SearchInput from './SearchInput';
import Button, { ButtonType } from './Button';
import { useNavigate } from 'react-router-dom';
import { Container } from './Atoms';
import SpaceCard from './SpaceCard';
import useSpaces from '@api/useSpaces';
import { useDispatch } from 'react-redux';
import MemberCard from './MemberCard';
import ScrollBox from './ScrollBox';
import FriendCard from './FriendCard';

enum ChipTypeEnum {
  DEFAULT,
  ACTIVE,
  HIDE,
}

enum TabTypeEnum {
  DEFAULT,
  HIDE,
}

export default () => {
  const isFieldUser = useIsFieldUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [chipType, setChipType] = useState<ChipTypeEnum>(ChipTypeEnum.DEFAULT);
  const [tabType, setTabType] = useState<TabTypeEnum>(TabTypeEnum.DEFAULT);
  const [isMounted, setIsMounted] = useState(false);
  const [search, setSearch] = useState('');

  const isHide = useMemo(() => {
    return tabType === TabTypeEnum.DEFAULT ? 'N' : 'Y';
  }, [tabType]);

  const { data: spaces, mutate } = useSpaces(isHide);

  const searchedSpaces = useMemo(() => {
    if (!spaces) return [];
    return spaces.filter((v) => v?.name?.includes(search));
  }, [spaces, search]);

  const handleChangeTabType = (type: TabTypeEnum) => {
    setTabType(type);
    setIsMounted(false);
  };

  const handleChangeChipType = (type: ChipTypeEnum) => {
    setChipType(type);
    setIsMounted(false);
  };

  const setSelectedIdWithFirstId = () => {
    if (spaces && spaces?.length > 0) {
      // console.log('data?.result?.[0]?.id', spaces?.[0]?.id);
      dispatch(setSelectedSpaceInfo(spaces?.[0]));
      setIsMounted(true);
    }
  };

  return (
    <SpeceBarWrap>
      <SpaceFilterWrap>
        <SearchInput
          placeholder={'검색어를 입력해 주세요.'}
          containerStyle={{ marginBottom: 26 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TabContainer>
          <Tab
            active={tabType === TabTypeEnum.DEFAULT}
            onClick={() => handleChangeTabType(TabTypeEnum.DEFAULT)}
          >
            친구목록 (99)
          </Tab>
          <Tab
            active={tabType === TabTypeEnum.HIDE}
            onClick={() => handleChangeTabType(TabTypeEnum.HIDE)}
          >
            받은요청 (03)
          </Tab>
        </TabContainer>
      </SpaceFilterWrap>
      <SearchedSpaceWrap>
        {searchedSpaces.map((v, i) => (
          <FriendCard
            key={`space-${v.id}-${i}`}
            info={v}
            id={v.id}
            name={v?.name}
            address={v?.basic_address}
            revalidate={mutate}
            isHide={tabType === TabTypeEnum.HIDE}
            setSelectedIdWithFirstId={setSelectedIdWithFirstId}
          />
        ))}
      </SearchedSpaceWrap>
    </SpeceBarWrap>
  );
};

const SpeceBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 720px;
  max-height: 720px;
  max-width: 360px;
  border-top: 1px solid #c7c7c7;
  background-color: white;
`;

const SpaceFilterWrap = styled.div`
  display: block;

  height: 136px;

  padding: 30px 30px 0px 30px;
  border-bottom: 1px solid #e3e3e3;
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
        `}
`;

const SearchedSpaceWrap = styled(ScrollBox)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 30px 6px 20px 20px;

  width: 100%;
  overflow-y: scroll;
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

const NotificationBox = styled(ScrollBox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: 100%;
  max-height: 360px;
  overflow-y: scroll;
`;
