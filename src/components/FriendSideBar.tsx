import React, { useEffect, useMemo, useRef, useState } from 'react';
import { setSelectedSpaceInfo } from '@data/space';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import SearchInput from './SearchInput';
import { useNavigate } from 'react-router-dom';
import MemberCard from './MemberCard';
import ScrollBox from './ScrollBox';
import FriendCard from './FriendCard';

enum TabTypeEnum {
  DEFAULT,
  REQUEST,
}
export default ({
  data,
  selectedFriendInfo,
  setSelectedFriendInfo,
  mutate,
}: any) => {
  const [tabType, setTabType] = useState<TabTypeEnum>(TabTypeEnum.DEFAULT);
  const [isMounted, setIsMounted] = useState(false);
  const [search, setSearch] = useState('');

  const isHide = useMemo(() => {
    return tabType === TabTypeEnum.DEFAULT ? 'N' : 'Y';
  }, [tabType]);

  const searchedFriend: any[] = useMemo(() => {
    if (!data) return [];
    return data.filter((v: any) => v?.name?.includes(search));
  }, [data, search]);

  const handleChangeTabType = (type: TabTypeEnum) => {
    setTabType(type);
    setIsMounted(false);
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
            친구목록 ({data?.length})
          </Tab>
          <Tab
            active={tabType === TabTypeEnum.REQUEST}
            onClick={() => handleChangeTabType(TabTypeEnum.REQUEST)}
          >
            받은요청 (03)
          </Tab>
        </TabContainer>
      </SpaceFilterWrap>
      <SearchedSpaceWrap>
        {searchedFriend?.map((v: any, i: number) => (
          <FriendCard
            key={v?.id}
            info={v}
            id={v?.id}
            name={v?.name}
            position={v?.position}
            revalidate={mutate}
            isHide={tabType === TabTypeEnum.REQUEST}
            active={v.id === selectedFriendInfo?.id}
            onClick={() => setSelectedFriendInfo(v)}
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
