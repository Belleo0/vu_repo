import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { QueryParamProvider } from 'use-query-params';
import { SWRConfig } from 'swr';

import store from '@data';
import { me } from '@data/auth';

import { RouteAdapter } from '@components/RouteAdapter';

import MyField from '@pages/my-field';
import AuthLogin from '@pages/auth/login';
import RemiconMap from '@pages/remicon-map';
import SupplierChoice from '@pages/supplier-choice';
import Home from '@pages/home';

import api from '@api';

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

  if (loading) {
    return <div>...</div>;
  }

  return (
    <QueryParamProvider
      ReactRouterRoute={RouteAdapter as unknown as React.FunctionComponent}
    >
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/auth/login" element={<AuthLogin />} />

        <Route path="/my-field" element={<MyField />} />

        <Route path="/remicon-map" element={<RemiconMap />} />

        <Route path="/supplier-choice" element={<SupplierChoice />} />
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
