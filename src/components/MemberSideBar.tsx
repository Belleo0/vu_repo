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
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useWindowSize from "../hooks/useWindowSize"

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isFieldUser = useIsFieldUser();
  const selectedSpaceId = useSelectedSpaceId();

  const [tabType, setTabType] = useState<TabTypeEnum>(TabTypeEnum.DEFAULT);
  const [chipType, setChipType] = useState<ChipTypeEnum>(ChipTypeEnum.DEFAULT);
  const [isMounted, setIsMounted] = useState(false);
  const [search, setSearch] = useState('');

  const isHide = useMemo(() => {
    switch (chipType) {
      case ChipTypeEnum.DEFAULT:
        return ' ';
      case ChipTypeEnum.ACTIVE:
        return 'N';
      case ChipTypeEnum.HIDE:
        return 'Y';
    }
  }, [chipType]);

  const { data: spaces, refetch } = useSpaces(isHide);

  const searchedSpaces: any[] = useMemo(() => {
    if (!spaces) return [];
    return spaces.filter((v: any) => v?.name?.includes(search));
  }, [spaces, search]);

  const handleChangeTabType = (type: TabTypeEnum) => {
    setTabType(type);
    setIsMounted(false);
  };

  const handleChangeChipType = (type: ChipTypeEnum) => {
    console.log(type);
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

  useEffect(() => {
    if (
      !!!selectedSpaceId &&
      isMounted === false &&
      spaces &&
      spaces.length > 0 &&
      searchedSpaces
    ) {
      //mobile screen not select first id
      if(!isMobile)
      {
        setSelectedIdWithFirstId();
      }
    
      // setIsFilterOpen(false);
    }
  }, [tabType, chipType, spaces, isMounted, searchedSpaces]);

  console.log(isHide);


const { width } = useWindowSize();
const isMobile = width <= 360 ? true : false;

 if(isMobile)
 {
  return (
    <SpeceBarWrap>
      <MbSpaceFilterWrap>
        <TabContainer>
          <Tab
            active={tabType === TabTypeEnum.DEFAULT}
            onClick={() => handleChangeTabType(TabTypeEnum.DEFAULT)}
          >
            ???????????? ({spaces?.length})
          </Tab>
          <Tab
            active={tabType === TabTypeEnum.HIDE}
            onClick={() => handleChangeTabType(TabTypeEnum.HIDE)}
          >
            ????????? (99)
          </Tab>
        </TabContainer>
      </MbSpaceFilterWrap>
      {isFieldUser && (
        <ChipWrap>
          <Chip
            active={chipType === ChipTypeEnum.DEFAULT}
            onClick={() => handleChangeChipType(ChipTypeEnum.DEFAULT)}
          >
            ??????
          </Chip>
          <Chip
            active={chipType === ChipTypeEnum.ACTIVE}
            onClick={() => handleChangeChipType(ChipTypeEnum.ACTIVE)}
          >
            ?????? ????????????
          </Chip>
          <Chip
            active={chipType === ChipTypeEnum.HIDE}
            onClick={() => handleChangeChipType(ChipTypeEnum.HIDE)}
          >
            ?????? ????????????
          </Chip>
        </ChipWrap>
      )}
      <SearchedSpaceWrap>
        {searchedSpaces.map((v: any, i: number) => (
          <MemberCard
            key={`space-${v.id}-${i}`}
            info={v}
            id={v.id}
            name={v?.name}
            address={v?.basic_address}
            revalidate={refetch}
            isHide={chipType === ChipTypeEnum.HIDE}
            setSelectedIdWithFirstId={setSelectedIdWithFirstId}
          />
        ))}
      </SearchedSpaceWrap>
    </SpeceBarWrap>)
 }
 else 

  return (
    <SpeceBarWrap>
      <SpaceFilterWrap>
        <SearchInput
          placeholder={'???????????? ????????? ?????????.'}
          containerStyle={{ marginBottom: 26 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TabContainer>
          <Tab
            active={tabType === TabTypeEnum.DEFAULT}
            onClick={() => handleChangeTabType(TabTypeEnum.DEFAULT)}
          >
            ???????????? ({spaces?.length})
          </Tab>
          <Tab
            active={tabType === TabTypeEnum.HIDE}
            onClick={() => handleChangeTabType(TabTypeEnum.HIDE)}
          >
            ????????? (99)
          </Tab>
        </TabContainer>
      </SpaceFilterWrap>
      {isFieldUser && (
        <ChipWrap>
          <Chip
            active={chipType === ChipTypeEnum.DEFAULT}
            onClick={() => handleChangeChipType(ChipTypeEnum.DEFAULT)}
          >
            ??????
          </Chip>
          <Chip
            active={chipType === ChipTypeEnum.ACTIVE}
            onClick={() => handleChangeChipType(ChipTypeEnum.ACTIVE)}
          >
            ?????? ????????????
          </Chip>
          <Chip
            active={chipType === ChipTypeEnum.HIDE}
            onClick={() => handleChangeChipType(ChipTypeEnum.HIDE)}
          >
            ?????? ????????????
          </Chip>
        </ChipWrap>
      )}
      <SearchedSpaceWrap>
        {searchedSpaces.map((v: any, i: number) => (
          <MemberCard
            key={`space-${v.id}-${i}`}
            info={v}
            id={v.id}
            name={v?.name}
            address={v?.basic_address}
            revalidate={refetch}
            isHide={chipType === ChipTypeEnum.HIDE}
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
const MbSpaceFilterWrap=styled.div`
     display: block;
    height: 46px;
    padding: 0px 30px 0px 30px;
    border-bottom: 1px solid #e3e3e3;
`

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

const ChipWrap = styled.div`
  display: flex;
  margin: 14px 20px 0px 20px;
`;

const Chip = styled.div<{ active: boolean }>`
  padding: 6px 12px 7px;
  border-radius: 20px;
  background-color: #000;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  cursor: pointer;

  margin-right: 8px;

  ${({ active }) =>
    active
      ? css`
          color: #ffff;
        `
      : css`
          color: #c7c7c7;
          background-color: #fff;
          border: solid 1px #c7c7c7;
        `}
`;

const SearchedSpaceWrap = styled(ScrollBox)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 6px 20px 20px;

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
