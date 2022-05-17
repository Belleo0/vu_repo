import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

// const menus = [
//   { label: '회원정보 수정', path: '/mypage' },
//   { label: '조직관리', path: '' },
//   { label: '친구관리', path: '' },
//   { label: '알림 설정', path: '' },
// ];

interface ISideMenus {
  sidemenus: any[];
}

export default ({ sidemenus }: ISideMenus) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <SideContainer>
      <MenuItemListBox>
        {sidemenus.map((item, i) => (
          <MenuItemBox key={i}>
            <MenuItem
              key={item.path}
              isActive={item.path === pathname}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </MenuItem>
          </MenuItemBox>
        ))}
      </MenuItemListBox>
    </SideContainer>
  );
};

const SideContainer = styled.div`
  display: block;
  padding: 16px 40px;
`;

const MenuItemListBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItemBox = styled.div`
  border-bottom: 1px solid #e3e3e3;
  padding: 14px 10px;
`;

const MenuItem = styled.span<{ isActive?: boolean }>`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: left;
  cursor: pointer;

  ${({ isActive }) =>
    isActive
      ? css`
          color: #258fff;
        `
      : css`
          color: #999;
        `}
`;
