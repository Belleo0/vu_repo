import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { QueryParamProvider } from 'use-query-params';

import store from '@data';
import { me } from '@data/auth';

import { RouteAdapter } from '@components/RouteAdapter';

import routes, { Permission } from './Routes';
import PrivateWrapper from './PrivateWrapper';

import Loading from '@components/Loading';
import styled from '@emotion/styled';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
                  <MainContainer>
                    <v.component />
                  </MainContainer>
                </PrivateWrapper>
              ) : (
                <MainContainer>
                  <v.component />
                </MainContainer>
              )
            }
          />
        ))}
      </Routes>
    </QueryParamProvider>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
      select: ({ data }: any) => data?.result || data,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Container />
        </BrowserRouter>
      </Provider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

const MainContainer = styled.div`
  min-width: 1640px;
`;

export default App;
