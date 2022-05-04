import React from 'react';
import ReactDOM from 'react-dom/client';

import { RecoilRoot } from 'recoil';

import App from './client/App';

import './styles/layout.less';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      {/* <React.Suspense fallback={<Loading />}> */}
      <App />
      {/* </React.Suspense> */}
    </RecoilRoot>
  </React.StrictMode>,
);
