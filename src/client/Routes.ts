import lazy from '@utils/lazy';

export enum Permission {
  PUBLIC,
  PRIVATE,
}

export default [
  {
    label: '메인 페이지',
    path: '/',
    component: lazy(() => import('@pages/home')),
    permission: Permission.PUBLIC,
  },
  {
    label: '회원가입 Step 1',
    path: '/auth/register/step-1',
    component: lazy(() => import('@pages/auth/register/step-1')),
    permission: Permission.PUBLIC,
  },
  {
    label: '회원가입 Step 2',
    path: '/auth/register/step-2',
    component: lazy(() => import('@pages/auth/register/step-2')),
    permission: Permission.PUBLIC,
  },
  {
    label: '회원가입 Step 3',
    path: '/auth/register/step-3',
    component: lazy(() => import('@pages/auth/register/step-3')),
    permission: Permission.PUBLIC,
  },
  {
    label: '로그인',
    path: '/auth/login',
    component: lazy(() => import('@pages/auth/login')),
    permission: Permission.PUBLIC,
  },
  {
    label: '이메일 찾기',
    path: '/auth/find-email',
    component: lazy(() => import('@pages/auth/find-email')),
    permission: Permission.PUBLIC,
  },
  {
    label: '비밀번호 찾기',
    path: '/auth/find-password',
    component: lazy(() => import('@pages/auth/find-password')),
    permission: Permission.PUBLIC,
  },
  {
    label: '비밀번호 재설정',
    path: '/auth/find-password/:key',
    component: lazy(() => import('@pages/auth/change-password')),
    permission: Permission.PUBLIC,
  },
  {
    label: 'MY 건설현장/레미콘공장',
    path: '/my-space',
    component: lazy(() => import('@pages/my-space')),
    permission: Permission.PRIVATE,
  },
  {
    label: '레미콘 지도',
    path: '/remicon-map',
    component: lazy(() => import('@pages/remicon-map')),
    permission: Permission.PRIVATE,
  },
  {
    label: '납품사 선정',
    path: '/supplier-choice',
    component: lazy(() => import('@pages/supplier-choice')),
    permission: Permission.PRIVATE,
  },
  {
    label: '주문',
    path: '/order',
    component: lazy(() => import('@pages/order')),
    permission: Permission.PRIVATE,
  },
  {
    label: '캘린더',
    path: '/calendar',
    component: lazy(() => import('@pages/calendar')),
    permission: Permission.PRIVATE,
  },
  {
    label: '주문내역',
    path: '/transaction',
    component: lazy(() => import('@pages/transaction')),
    permission: Permission.PRIVATE,
  },
  {
    label: '건설현장 추가 Step 1',
    path: '/add-construction-field/step-1',
    component: lazy(() => import('@pages/add-construction-field/step-1')),
    permission: Permission.PRIVATE,
  },
  {
    label: '건설현장 추가 Step 2',
    path: '/add-construction-field/step-2',
    component: lazy(() => import('@pages/add-construction-field/step-2')),
    permission: Permission.PRIVATE,
  },
  {
    label: '건설현장 추가 Step 3',
    path: '/add-construction-field/step-3',
    component: lazy(() => import('@pages/add-construction-field/step-3')),
    permission: Permission.PRIVATE,
  },
  {
    label: '건설현장 추가 Step 4',
    path: '/add-construction-field/step-4',
    component: lazy(() => import('@pages/add-construction-field/step-4')),
    permission: Permission.PRIVATE,
  },
  {
    label: '건설현장 추가 Step 5',
    path: '/add-construction-field/step-5',
    component: lazy(() => import('@pages/add-construction-field/step-5')),
    permission: Permission.PRIVATE,
  },
  {
    label: '회원정보 수정',
    path: '/mypage',
    component: lazy(() => import('@pages/mypage')),
    permission: Permission.PRIVATE,
  },
];
