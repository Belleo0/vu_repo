import { Navigate } from 'react-router-dom';

import AuthLogin from '@pages/auth/login';

import UserManagement from '@pages/user-management';

import DefaultPage from '@pages/default';

export const Types = {
  C: 'C', // 화면(메뉴)
  O: 'O', // 새창(윈도우 팝업)
};

export const Routes = [
  {
    key: '',
    title: '기본',
    description: '기본',
    component: () => <Navigate to="/auth/login" />,
    type: Types.C,
    public: true,
  },
  {
    key: 'auth/login',
    title: '로그인',
    description: '로그인',
    component: AuthLogin,
    type: Types.C,
    public: true,
    default: true,
  },
  {
    key: '',
    title: '로그인 후 기본',
    description: '로그인 후 기본',
    component: DefaultPage,
    type: Types.C,
  },
  {
    key: 'user-management',
    title: '회원 관리',
    description: '회원 관리',
    component: UserManagement,
    type: Types.C,
  },
];

export default { Types, Routes };
