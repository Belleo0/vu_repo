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
    permission: Permission.PUBLIC,
  },
  {
    label: '건설현장 지도',
    path: '/field-map',
    component: lazy(() => import('@pages/field-map')),
    permission: Permission.PRIVATE,
  },
  {
    label: '납품사 선정',
    path: '/supplier-choice',
    component: lazy(() => import('@pages/supplier-choice')),
    permission: Permission.PRIVATE,
  },
  {
    label: '견적',
    path: '/estimation',
    component: lazy(() => import('@pages/estimation')),
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
  {
    label: '조직관리',
    path: '/member',
    component: lazy(() => import('@pages/mypage/member')),
    permission: Permission.PRIVATE,
  },
  {
    label: '건설사 자료실',
    path: '/reference-room',
    component: lazy(() => import('@pages/reference-room')),
    permission: Permission.PRIVATE,
  },

  {
    label: '건설사 자료실 업체리스트',
    path: '/reference-room/info',
    component: lazy(() => import('@pages/reference-room/index2')),
    permission: Permission.PRIVATE,
  },
  {
    label: '건설사 자료실 레미콘 단가표',
    path: '/reference-room/info/price',
    component: lazy(() => import('@pages/reference-room/index3')),
    permission: Permission.PRIVATE,
  },
  {
    label: '고객센터 - 공지사항',
    path: '/service-center/notice',
    component: lazy(() => import('@pages/service-center/index')),
    permission: Permission.PRIVATE,
  },
  {
    label: '고객센터 - 공지사항 - 상세',
    path: '/service-center/notice/:id',
    component: lazy(() => import('@pages/service-center/notice/notice-detail')),
    permission: Permission.PRIVATE,
  },
  {
    label: '고객센터 - FAQ',
    path: '/service-center/faq',
    component: lazy(() => import('@pages/service-center/index2')),
    permission: Permission.PRIVATE,
  },
  {
    label: '고객센터 - 1:1 문의',
    path: '/service-center/inquiry',
    component: lazy(() => import('@pages/service-center/index3')),
    permission: Permission.PRIVATE,
  },
  {
    label: '고객센터 - 1:1 문의 - 생성',
    path: '/service-center/inquiry/new',
    component: lazy(
      () => import('@pages/service-center/inquiry/Inquiry-create'),
    ),
    permission: Permission.PRIVATE,
  },
  {
    label: '고객센터 - 1:1 문의 - 상세',
    path: '/service-center/inquiry/:id',
    component: lazy(
      () => import('@pages/service-center/inquiry/Inquiry-detail'),
    ),
    permission: Permission.PRIVATE,
  },
  {
    label: '고객센터 - 이벤트',
    path: '/service-center/event',
    component: lazy(() => import('@pages/service-center/index4')),
    permission: Permission.PRIVATE,
  },
  {
    label: '고객센터 - 이벤트 - 상세',
    path: '/service-center/event/:id',
    component: lazy(() => import('@pages/service-center/event/event-detail')),
    permission: Permission.PRIVATE,
  },
];
