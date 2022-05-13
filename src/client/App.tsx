import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { QueryParamProvider } from 'use-query-params';
import { SWRConfig } from 'swr';

import store from '@data';
import { me } from '@data/auth';

import { RouteAdapter } from '@components/RouteAdapter';

import routes, { Permission } from './Routes';
import PrivateWrapper from './PrivateWrapper';

import SignUp from '@pages/sign-up';
import SignUp2 from '@pages/sign-up/index2';
import SignUp3 from '@pages/sign-up/index3';

import api from '@api';

import Loading from '@components/Loading';

const Container = () => {
  const dispatch = useDispatch();
  const { principal } = useSelector((s: any) => s.auth, shallowEqual);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await dispatch(me());
    };
    loadData()
      .catch(console.warn)
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    routes.forEach((v) => v.component.preload());
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <QueryParamProvider
      ReactRouterRoute={RouteAdapter as unknown as React.FunctionComponent}
    >
      <Routes>
        {routes.map((v) => (
          <Route
            key={v.path}
            path={v.path}
            element={
              v.permission === Permission.PRIVATE ? (
                <PrivateWrapper>
                  <v.component />
                </PrivateWrapper>
              ) : (
                <v.component />
              )
            }
          />
        ))}
      </Routes>
    </QueryParamProvider>
  );
};

const swrConfig = {
  fetcher(url: string, params: object) {
    return api.get(url, { params }).then((res) => {
      return res.data?.result || res.data;
    });
  },
};

function App() {
  return (
    <SWRConfig value={swrConfig}>
      <Provider store={store}>
        <BrowserRouter>
          <Container />
        </BrowserRouter>
      </Provider>
    </SWRConfig>
  );
}

export default App;
