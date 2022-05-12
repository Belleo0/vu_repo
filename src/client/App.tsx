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
import EmailInquiry from '@pages/auth/emailInquiry';
import PwInquiry from '@pages/auth/passwordInquiry';
import ChangePw from '@pages/auth/changePassword';
import RemiconMap from '@pages/remicon-map';
import SupplierChoice from '@pages/supplier-choice';
import Home from '@pages/home';
import AddConstructionFieldStep1 from '@pages/add-construction-field/step-1';
import AddConstructionFieldStep2 from '@pages/add-construction-field/step-2';
import AddConstructionFieldStep3 from '@pages/add-construction-field/step-3';
import AddConstructionFieldStep4 from '@pages/add-construction-field/step-4';
import AddConstructionFieldStep5 from '@pages/add-construction-field/step-5';
import Mypage from '@pages/mypage';

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
        <Route path="/" element={<Home />} />

        <Route path="/auth/login" element={<AuthLogin />} />

        <Route path="/auth/email" element={<EmailInquiry />} />

        <Route path="/auth/pw" element={<PwInquiry />} />

        <Route path="/auth/change-pw" element={<ChangePw />} />

        <Route path="/my-field" element={<MyField />} />

        <Route path="/remicon-map" element={<RemiconMap />} />

        <Route path="/supplier-choice" element={<SupplierChoice />} />

        <Route path="/calendar" element={<Calendar />} />

        <Route
          path="/add-construction-field/step-1"
          element={<AddConstructionFieldStep1 />}
        />

        <Route
          path="/add-construction-field/step-2"
          element={<AddConstructionFieldStep2 />}
        />
        <Route
          path="/add-construction-field/step-3"
          element={<AddConstructionFieldStep3 />}
        />
        <Route
          path="/add-construction-field/step-4"
          element={<AddConstructionFieldStep4 />}
        />

        <Route
          path="/add-construction-field/step-5"
          element={<AddConstructionFieldStep5 />}
        />

        <Route path="/mypage" element={<Mypage />} />
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
