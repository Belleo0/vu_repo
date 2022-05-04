import React, { useEffect, useMemo, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as RouterRoutes,
  useLocation,
} from 'react-router-dom';
import { Provider, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { QueryParamProvider } from 'use-query-params';
import store from '@data';
import { me } from '@data/auth';
import { ConfigProvider, Spin } from 'antd';
import { Routes, Types } from '@layout/Routes';
import AuthLayout from '@layout/AuthLayout';
import PopupLayout from '@layout/PopupLayout';
import BasicLayout from '@layout/BasicLayout';

import koKR from 'antd/lib/locale/ko_KR';
import 'moment/locale/ko';
import { RouteAdapter } from '@components/RouteAdapter';

const Container = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { principal } = useSelector((s) => s.auth, shallowEqual);
  const [loading, setLoading] = useState(true);
  // const isLoading = useSelector((s) => s.loading.isLoading);

  console.log(principal);

  const pages = useMemo(() => {
    const pages = Routes.filter((v) =>
      [Types.C, Types.O].includes(v.type),
    ).filter(
      (v) =>
        (!!principal && !v.public) ||
        (!principal && v.public) ||
        (principal?.nego_name_status !== 'CONFIRM' && v.negoPage),
    );
    pages.sort((x, y) => {
      const r1 = x.default ? 1 : 0;
      const r2 = y.default ? 1 : 0;
      return r1 > r2 ? 1 : r1 < r2 ? -1 : 0;
    });
    return pages;
  }, [principal]);

  console.log(pages);

  const [Layout, currentPage] = useMemo(() => {
    let key = location.pathname.substring(1);

    if (
      !pages.find((v) => v.key === key)
      // !key.includes('discuss-management/chat/')
    ) {
      key = '';
    }
    const page = pages.find((v) => v.key === key || (v.default && !key));

    let LayoutFC: any = React.Fragment;
    if (page) {
      if (page.public || !principal || page.key.startsWith('auth/')) {
        LayoutFC = AuthLayout;
      } else if (page.type === Types.O) {
        LayoutFC = PopupLayout;
      } else if (page.type === Types.C) {
        LayoutFC = BasicLayout;
      }
    }
    return [LayoutFC, page];
  }, [location.pathname, pages]);

  useEffect(() => {
    const loadData = async () => {
      await dispatch(me());
    };
    loadData()
      .catch(console.warn)
      .then(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>...</div>;
  }

  return (
    <Layout title={currentPage?.title}>
      <QueryParamProvider
        ReactRouterRoute={RouteAdapter as unknown as React.FunctionComponent}
      >
        <RouterRoutes>
          {pages?.map((page: any) => {
            const Component = page.component;
            const path = `/${page.key}`;

            return <Route key={page.key} path={path} element={<Component />} />;
          })}
        </RouterRoutes>
      </QueryParamProvider>
    </Layout>
  );
};

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={koKR}>
        <Router>
          <Container />
        </Router>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
