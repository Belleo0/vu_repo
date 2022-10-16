import React, { useEffect, useMemo, useRef, useState } from 'react';
import { clearSelectedSpaceInfo, setSelectedSpaceInfo } from '@data/space';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import { useNavigate } from 'react-router-dom';
import useSpaces from '@api/useSpaces';
import ScrollBox from '@components/ScrollBox';
import useUserInfo from '@hooks/useUserInfo';
import { memberData } from '../../Data/memberdata';
import MemberCard from './Membercard';
import MemberListTable from './Memberlisttable';
import MemberOptionModal from './Memberoptionmodal';
 
enum ChipTypeEnum {
  DEFAULT,
  ACTIVE,
  HIDE,
}

enum TabTypeEnum {
  DEFAULT,
  HIDE,
}

interface ISidebar {
  isManager: boolean;
}

export default ({ isManager }: ISidebar) => {
  //Get userInfo
  const userInfo = useUserInfo();

  const isFieldUser = useIsFieldUser();
  const selectedSpaceId = useSelectedSpaceId();

  const [tabType, setTabType] = useState<TabTypeEnum>(TabTypeEnum.DEFAULT);
  const [chipType, setChipType] = useState<ChipTypeEnum>(ChipTypeEnum.DEFAULT);
  const [isMounted, setIsMounted] = useState(false);
  const [search, setSearch] = useState('');
  //position of user in member group
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onEdit = () => {
    //do something with Edit
    setIsModalOpen(false);
  };
  
  const onDelete=()=>{
    //do something  with Delete
    setIsModalOpen(false)
  }
  const onOpenEdit = () => {
    setIsModalOpen(true);
  };

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
   
    setChipType(type);
    setIsMounted(false);
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
      // setSelectedIdWithFirstId();
      // setIsFilterOpen(false);
    }
  }, [tabType, chipType, spaces, isMounted, searchedSpaces]);

  return (
    <SpeceBarWrap>
      <MbSpaceFilterWrap>
        <TabContainer>
          <Tab
            active={tabType === TabTypeEnum.DEFAULT}
            onClick={() => handleChangeTabType(TabTypeEnum.DEFAULT)}
          >
            건설현장 ({spaces?.length})
          </Tab>
          <Tab
            active={tabType === TabTypeEnum.HIDE}
            onClick={() => handleChangeTabType(TabTypeEnum.HIDE)}
          >
            구성원 (99)
          </Tab>
        </TabContainer>
      </MbSpaceFilterWrap>
      {!tabType ? (
        <div>
          {isFieldUser && (
            <ChipWrap>
              <Chip
                active={chipType === ChipTypeEnum.DEFAULT}
                onClick={() => handleChangeChipType(ChipTypeEnum.DEFAULT)}
              >
                전체
              </Chip>
              <Chip
                active={chipType === ChipTypeEnum.ACTIVE}
                onClick={() => handleChangeChipType(ChipTypeEnum.ACTIVE)}
              >
                등록 건설현장
              </Chip>
              <Chip
                active={chipType === ChipTypeEnum.HIDE}
                onClick={() => handleChangeChipType(ChipTypeEnum.HIDE)}
              >
                숨김 건설현장
              </Chip>
            </ChipWrap>
          )}
        </div>
      ) : null}

      {!tabType ? (
        <SearchedSpaceWrap>
          {searchedSpaces.map((v: any, i: number) => (
            <MemberCard
              key={`space-${v.id}-${i}`}
              info={v}
              id={v.id}
              name={v?.name}
              position={''}
              address={v?.basic_address}
              revalidate={refetch}
              isHide={chipType === ChipTypeEnum.HIDE}
            />
          ))}
        </SearchedSpaceWrap>
      ) : (
        <SearchedSpaceWrap>
          <MemberListTable
            data={memberData}
            me={userInfo}
            siteUserId={userInfo?.site_user?.id}
            isManager={isManager}
            onOpenEdit={onOpenEdit}
            onOpenContact={() => {}}
          ></MemberListTable>
        </SearchedSpaceWrap>
      )}

      <MemberOptionModal
        open={isModalOpen}
        fulloption={false}
        deleteTitle="삭제"
        editTitle=""
        onClose={() => setIsModalOpen(false)}
        onEdit={onEdit}
        onDelete={onDelete}
        title="필터"
      ></MemberOptionModal>
    </SpeceBarWrap>
  );
};

const SpeceBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
`;
const MbSpaceFilterWrap = styled.div`
  display: block;
  height: 46px;
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
  overflow-x: hidden;
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
