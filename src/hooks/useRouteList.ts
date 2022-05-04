import { setTwoToneColor } from '@ant-design/icons';

import useIsAdmin from './useIsAdmin';

export default () => {
  const isAdmin = useIsAdmin();
  setTwoToneColor('#000');

  const defaultMenuList = [
    {
      name: '회원 관리',
      children: [
        {
          path: '/user-management',
          name: '회원 관리',
        },
        {
          path: '/user-management/level',
          name: '회원 등급 관리',
        },
      ],
    },
    {
      name: '파트너 관리',
      children: [
        {
          path: '/partner-management',
          name: '파트너 관리',
        },
      ],
    },
    {
      name: '계좌 관리',
      children: [
        {
          path: '/bank-account-management',
          name: '등급별 계좌 관리',
        },
      ],
    },
    {
      name: '포인트 관리',
      children: [
        {
          path: '/point-management/charge',
          name: '충전 관리',
        },
        {
          path: '/point-management/withdraw',
          name: '송금 관리',
        },
      ],
    },
    {
      name: '거래내역 관리',
      children: [
        {
          path: '/transaction-management',
          name: '거래내역 리스트',
        },
        {
          path: '/transaction-management/manual',
          name: '수동 거래내역 리스트',
        },
      ],
    },
    {
      name: '환경설정',
      children: [
        {
          path: '/service-management/ip',
          name: '아이피 관리',
        },
        {
          path: '/service-management/note',
          name: '쪽지 관리',
        },
        {
          path: '/service-management/admin',
          name: '관리자 관리',
        },
      ],
    },
  ];

  const superAdminMenuList = [
    {
      name: '회원관리',
      children: [
        {
          path: '/user-management/seller',
          name: '판매회원 관리',
        },
        {
          path: '/user-management/buyer',
          name: '구매회원 관리',
        },
      ],
    },
    {
      name: '종목관리',
      children: [
        {
          path: '/stock-management/keyword',
          name: '키워드 관리',
        },
        {
          path: '/stock-management/keyword/value',
          name: '키워드 이름 관리',
        },
        {
          path: '/stock-management/logo',
          name: '로고 관리',
        },
      ],
    },
    {
      name: '앱 관리',
      children: [
        {
          path: '/app-management/banner',
          name: '배너 관리',
        },
        {
          path: '/app-management/post',
          name: '공지사항&이벤트 관리',
        },
      ],
    },
  ];

  return isAdmin
    ? [...defaultMenuList, ...superAdminMenuList].map((v) => ({
        ...v,
        children: v.children.filter(
          (v) => v.path !== '/sell-management/submit',
        ),
      }))
    : defaultMenuList;
};
