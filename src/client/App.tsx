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
import AddConstructionField from '@pages/add-construction-field/index';
import AddConstructionField2 from '@pages/add-construction-field/index2';
import AddConstructionField3 from '@pages/add-construction-field/index3';
import AddConstructionField4 from '@pages/add-construction-field/index4';
import AddConstructionField5 from '@pages/add-construction-field/index5';

import SignUp from '@pages/sign-up';
import SignUp2 from '@pages/sign-up/index2';
import SignUp3 from '@pages/sign-up/index3';

import api from '@api';
import Calendar from '@pages/calendar';

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
        <Route path="/auth/login" element={<AuthLogin />} />

        <Route path="/my-field" element={<MyField />} />

        <Route path="/remicon-map" element={<RemiconMap />} />

        <Route path="/supplier-choice" element={<SupplierChoice />} />

        <Route path="/calendar" element={<Calendar />} />

        <Route
          path="/add-construction-field"
          element={<AddConstructionField />}
        />

        <Route
          path="/add-construction-field/2"
          element={<AddConstructionField2 />}
        />
        <Route
          path="/add-construction-field/3"
          element={<AddConstructionField3 />}
        />
        <Route
          path="/add-construction-field/4"
          element={<AddConstructionField4 />}
        />

        <Route
          path="/add-construction-field/5"
          element={<AddConstructionField5 />}
        />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up/2" element={<SignUp2 />} />
        <Route path="/sign-up/3" element={<SignUp3 />} />
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
