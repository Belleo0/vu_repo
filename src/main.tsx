import Loading from '@components/Loading';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { RecoilRoot } from 'recoil';

import App from './client/App';

import './styles/index.css';
import './styles/reset.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<Loading />}>
        <App />
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>,
);
