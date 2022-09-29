import React, { useEffect, useMemo, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import ReferenceRoomLayout from '@layout/ReferenceRoomLayout';
import api from '@api';

import _01 from '../../assets/01_img.png';
import _02 from '../../assets/02_img.png';
import _03 from '../../assets/03_img.png';
import _04 from '../../assets/04_img.png';
import _05 from '../../assets/05_img.png';
import getAssetUrl from '@utils/getAssetURL';

import Select from '../../components/Select';
import Search from '../../components/SearchInput';

import NaverMap from '@components/NaverMap';
import useArchives from '@api/useArchives';
import ArchivesInfoModal from '@components/ArchivesInfoModal';
import NaverMapSpaceMarker from '@components/NaverMapSpaceMarker';
import SpaceMarkerContent from '@components/SpaceMarkerContent';

enum Active {
  ACTIVE,
  INACTIVE,
}

const ActiveBackground = {
  [Active.ACTIVE]: '#258fff',
  [Active.INACTIVE]: '#fff',
};

const ActiveBorder = {
  [Active.ACTIVE]: '1px solid #258fff',
  [Active.INACTIVE]: '1px solid #e3e3e3',
};
const ActiveFont = {
  [Active.ACTIVE]: '#fff',
  [Active.INACTIVE]: '#999999',
};

const locationArr = [
  '서울',
  '인천',
  '경기',
  '강원',
  '부산',
  '울산',
  '경남',
  '대구',
  '경북',
  '대전',
  '세종',
  '충남',
  '충북',
  '광주',
  '전남',
  '전북',
  '제주',
  '전체',
];

export default () => {
  const { state } = useLocation();

  const [type, setType] = useState<string>('');
  const { data: companyList } = useArchives(type);
  const [remiconList, setRemiconList] = useState([]);
  const [select, setSelect] = useState<string>('회사명');
  const [search, setSearch] = useState<string>('');
  const [location, setLocation] = useState<string>('서울');
  const [selectedCompanyInfo, setSelectedCompanyInfo] = useState<any>();
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [longitude, setLongitude] = useState<any>(0);
  const [latitude, setLatitude] = useState<any>(0);

  const selectItem = [
    { label: '회사명', value: '회사명' },
    { label: '주소', value: '주소' },
  ];

  const filteredList = useMemo(() => {
    return companyList?.filter((v: any) => v.region === location);
  }, [location]);

  const filteredRemicon = useMemo(() => {
    const result = remiconList?.filter((v: any) =>
      v?.basic_address?.include(location),
    );
    console.log(result);
    return result;
  }, [location]);

  const handleLocationClick = (val: any | null) => {
    setLocation(val);
  };

  const getFactoryList = async () => {
    try {
      const { data } = await api.get('/factories');
      setRemiconList(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (state) {
      const value = Object.values(state);
      if (value?.[0] === 'remicon') {
        console.log('실행');
        getFactoryList();
      } else {
        console.log(value?.[0]);
        setType(value?.[0]);
      }
    }
  }, []);

  console.log(remiconList);

  // useEffect(() => {
  //   if (filteredList) {
  //     const firstLongitude = filteredList?.[0].longitude;
  //     const firstLatitude = filteredList?.[0].latitude;

  //     console.log(firstLongitude, firstLatitude);

  //     setLongitude(firstLongitude);
  //     setLatitude(firstLatitude);
  //   }
  // }, [location]);

  // console.log(longitude, latitude);

  return (
    <ReferenceRoomLayout>
      <Container>
        <TopList>
          <TopListText>업체리스트</TopListText>
          <TopListBtn>정보수정 문의하기</TopListBtn>
        </TopList>
        <SearchWrap>
          <Select
            width={140}
            options={selectItem}
            value={select}
            onChange={(v: any) => setSelect(v)}
          />
          <Search
            containerStyle={{
              width: '300px',
              borderRadius: '6px',
              border: 'solid 1px #c7c7c7',
              backgroundColor: '#fff',
              marginLeft: '14px',
            }}
            style={{ padding: '12px 0 12px 14px' }}
            placeholder={'검색어를 입력해 주세요'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchWrap>
        <LineGuard />
        <LocationWrap>
          {locationArr.map((v, index) => {
            return (
              <LocationContent
                type={location === v ? Active.ACTIVE : Active.INACTIVE}
                key={index}
                onClick={() => {
                  handleLocationClick(v);
                }}
              >
                {v}
              </LocationContent>
            );
          })}
        </LocationWrap>
        <NaverMap
          lat={37.5642135}
          lng={127.0016985}
          zoom={12}
          style={{
            width: 'auto',
            height: '520px',
            marginTop: '40px',
          }}
        >
          {type === 'remicon'
            ? filteredRemicon
            : filteredList?.map((v: any, i: number) => (
                <NaverMapSpaceMarker
                  key={v.id}
                  lat={v.latitude}
                  lng={v.longitude}
                  content={
                    <SpaceMarkerContent
                      index={i}
                      name={v?.company_name}
                      address={''}
                      distance={0}
                      duration={0}
                      onClick={() => {}}
                      onInfo={() => {
                        setIsInfoModalOpen(false);
                        setSelectedCompanyInfo(v);
                        setTimeout(() => {
                          setIsInfoModalOpen(true);
                        }, 250);
                      }}
                      onChangePath={() => {}}
                      selected={false}
                      hideWithoutName={false}
                      totalDuration={'1'}
                    />
                  }
                />
              ))}
        </NaverMap>
        <ArchivesInfoModal
          open={isInfoModalOpen}
          onClose={() => {
            setIsInfoModalOpen(false);
            setSelectedCompanyInfo(null);
          }}
          data={selectedCompanyInfo}
        />
        <BottomText>리스트</BottomText>
        <BottomContentWrap>
          <BottomContentGuideLine>
            <BottomContentListItem>회사명</BottomContentListItem>
            <BottomContentListItem>주소</BottomContentListItem>
            <BottomContentListItem>전화번호</BottomContentListItem>
            <BottomContentListItem>
              레미콘 생산능력<span>(m³/hr)</span>
            </BottomContentListItem>
            <BottomContentListItem>믹서트럭 보유대수</BottomContentListItem>
            <BottomContentListItem style={{ width: '10%' }}>
              상세보기
            </BottomContentListItem>
          </BottomContentGuideLine>
          {filteredList?.map((v: any, i: number) => {
            return (
              <BottomContentList key={i}>
                <BottomContentListItem>{v.company_name}</BottomContentListItem>
                <BottomContentListItem>{v.address}</BottomContentListItem>
                <BottomContentListItem>{v.tel}</BottomContentListItem>
                <BottomContentListItem>{v?.rem}</BottomContentListItem>
                <BottomContentListItem>{v?.have}</BottomContentListItem>
                <BottomContentListItem style={{ width: '10%' }}>
                  <BottomContentListItemImage
                    src={getAssetUrl('../assets/search_bg_line_ic.svg')}
                    onClick={() => {
                      setSelectedCompanyInfo(v);
                      setIsInfoModalOpen(true);
                    }}
                  />
                </BottomContentListItem>
              </BottomContentList>
            );
          })}
        </BottomContentWrap>
      </Container>
    </ReferenceRoomLayout>
  );
};

const Container = styled.div`
  /* width: 1420px; */
  width: 100%;
  height: 100%;
  padding: 52px 60px 97px 60px;

  user-select: none;
`;

const TopList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 1420px; */
`;
const TopListText = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #222;
`;

const TopListBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 42px;
  border-radius: 6px;
  border: solid 1px #258fff;
  background-color: #fff;

  font-size: 14px;
  font-weight: 500;
  color: #258fff;
`;

const LocationWrap = styled.div`
  /* width: 1420px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #e3e3e3;
`;

const SearchWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  height: 45px;
  margin-top: 30px;
`;

const LineGuard = styled.div`
  /* width: 1420px; */
  height: 1px;
  margin: 20px 0 30px;
  background-color: #c7c7c7;
`;

const LocationContent = styled.div<{ type: Active }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(1 / 9) * 100}%;
  height: 44px;
  background-color: #fff;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;

  ${({ type }) => `
    background-color: ${ActiveBackground[type]};
    border: ${ActiveBorder[type]};
    color: ${ActiveFont[type]}

  `}
`;

const BottomText = styled.div`
  margin-top: 40px;
  margin-bottom: 14px;

  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #444;
`;

const BottomContentGuideLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  /* width: 1420px; */
  height: 54px;
  background-color: #fff;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #f2f2f2;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #444;
`;

const BottomContentList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background-color: #fff;
  /* width: 1420px; */
  height: 54px;
  border-bottom: 1px solid #f2f2f2;

  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #222;
`;

const BottomContentWrap = styled.div``;

const BottomContentListItem = styled.div`
  width: 18%;
`;

const BottomContentListItemImage = styled.img`
  width: 34px;
  height: 34px;
  cursor: pointer;
`;
