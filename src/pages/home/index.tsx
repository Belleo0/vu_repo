import { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import AuthLayout from '@layout/AuthLayout';

import useIsLogin from '@hooks/useIsLogin';

import SearchSection from './SearchSection';
import SiteSection from './SiteSection';
import InfoSection from './InfoSection';
import PartnerSection from './PartnerSection';
import GuideSection from './GuideSection';
import AppSection from './AppSection';
import MySiteSection from './MySiteSection';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@hooks/useLocalStorage';
import useSpaces from '@api/useSpaces';
import axios from 'axios';

export default () => {
  const navigate = useNavigate();
  const isLogin = useIsLogin();
  const [search, setSearch] = useState('');
  const [banner, setBanner] = useState<any>();

  const { data = [] } = useSpaces('false');
  // const [myspaces, setMyspaces] = useState<any[]>([]);

  const [state, setState] = useLocalStorage('@add-construction-field', {
    searchItem: search,
  });

  const sortedData = useMemo(() => {
    if (data) {
      const stableSpaces = data.map((el: any, i: number) => [el, i]);
      stableSpaces.sort((a: any, b: any) => {
        return b[1] - a[1];
      });
      const sortedSpaces = stableSpaces.map((el: any) => el[0]);
      return sortedSpaces;
    }
  }, [data]);

  const handleSearch = () => {
    if (search.length === 0)
      return window.alert('건설현장 주소를 입력해주세요.');

    navigate('/remicon-map', { state: { searchText: search } });
  };

  useEffect(() => {
    setState((prev: any) => ({ ...prev, searchItem: search }));
  }, [search]);

  const getImage = async () => {
    try {
      const { data } = await axios.get('http://13.125.245.83:8090/api/banners');
      console.log(data);
      const files = data.files.banners_files;
      setBanner(files);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(getImage());
    console.log(banner);
  }, []);

  return (
    <AuthLayout>
      {/* <img src={`http://13.125.245.83:8090/uploads/${banner}.png`} /> */}
      <Container>
        {/* Section1 */}
        <SearchSection
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        {/* Section2 */}
        {isLogin ? (
          <MySiteSection myspaces={sortedData || []} />
        ) : (
          <SiteSection />
        )}
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
  width: 100%;
  height: 100%;
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
