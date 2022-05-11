import React, { useState } from 'react';
import styled from '@emotion/styled';
import AuthLayout from '@layout/AuthLayout';
import SearchInput from '@components/SearchInput';
import getAssetURL from '@utils/getAssetURL';
import Button, { ButtonType } from '@components/Button';

import useIsLogin from '@hooks/useIsLogin';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';

// api
import useMySpaceInfo from '@api/useMySpaceInfo';

// components
import SearchSection from './SearchSection';
import SiteSection from './SiteSection';
import InfoSection from './InfoSection';
import PartnerSection from './PartnerSection';
import GuideSection from './GuideSection';
import AppSection from './AppSection';
import MySiteSection from './MySiteSection';

export default () => {
  const isLogin = useIsLogin();

  const [search, setSearch] = useState('');

  return (
    <AuthLayout>
      <Container>
        {/* Section1 */}
        <SearchSection search={search} setSearch={setSearch} />
        {/* Section2 */}
        {isLogin ? <MySiteSection /> : <SiteSection />}
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
