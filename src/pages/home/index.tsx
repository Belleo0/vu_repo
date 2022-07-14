import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import useSWR from 'swr';
import AuthLayout from '@layout/AuthLayout';
import SearchInput from '@components/SearchInput';
import getAssetURL from '@utils/getAssetURL';
import Button, { ButtonType } from '@components/Button';

import useIsLogin from '@hooks/useIsLogin';
// api
import useMySpaceInfo from '@api/useMySpaceInfo';
import useSpaces from '@api/useSpaces';

// components
import SearchSection from './SearchSection';
import SiteSection from './SiteSection';
import InfoSection from './InfoSection';
import PartnerSection from './PartnerSection';
import GuideSection from './GuideSection';
import AppSection from './AppSection';
import MySiteSection from './MySiteSection';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@hooks/useLocalStorage';

enum TabTypeEnum {
  DEFAULT,
  HIDE,
}

export default () => {
  const navigate = useNavigate();
  const isLogin = useIsLogin();
  const [search, setSearch] = useState('');

  const { data, error, mutate } = useSWR<any[]>([`/field-spaces`]);
  const [myspaces, setMyspaces] = useState<any[]>([]);

  const [state, setState] = useLocalStorage('@add-construction-field', {
    searchItem: search,
  });

  useEffect(() => {
    if (data) {
      const stableSpaces = data.map((el, i) => [el, i]);
      stableSpaces.sort((a, b) => {
        return b[1] - a[1];
      });
      const sortedSpaces = stableSpaces.map((el) => el[0]);
      setMyspaces(sortedSpaces);
    }
    console.log(myspaces);
  }, [data]);

  const handleSearch = () => {
    if (search.length === 0)
      return window.alert('건설현장 주소를 입력해주세요.');

    navigate('/remicon-map', { state: { searchText: search } });
  };

  useEffect(() => {
    setState((prev: any) => ({ ...prev, searchItem: search }));
  }, [search]);

  return (
    <AuthLayout>
      <Container>
        {/* Section1 */}
        <SearchSection
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        {/* Section2 */}
        {isLogin ? <MySiteSection myspaces={myspaces} /> : <SiteSection />}
        {/* Section3 */}
        <InfoSection />
        {/* Section4 */}
        <PartnerSection />
        {/* Section5 */}
        <GuideSection />
        {/* Section6 */}
        <AppSection />
      </Container>
    </AuthLayout>
  );
};

const Container = styled.div`
  justify-content: center;
  width: 100;
  height: 100;
  flex-direction: column;
`;

const Typography1 = styled.div`
  font-size: 28px;
  color: #000;
  line-height: 1.56;
`;

const Typography2 = styled.div`
  font-size: 16px;
  color: #777;
  margin-top: 10px;
  line-height: 1.56;
`;

const Typography3 = styled.div`
  font-size: 22px;
  margin-top: 10px;
  text-align: left;
  color: #258fff;
  line-height: 1.56;
  font-weight: bold;
`;

const Typography4 = styled.div`
  font-size: 18px;
  color: #222;
  margin-top: 12px;
  text-align: left;
  line-height: 1.56;
`;

const Typography5 = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
`;
