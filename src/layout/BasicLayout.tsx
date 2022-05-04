import React from 'react';
import { Button, Divider, Drawer, Layout, Menu } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import useRouteList from '@hooks/useRouteList';

import styled from '@emotion/styled';

import { useLocation, useNavigate } from 'react-router-dom';

const BasicLayout = ({ children }: any) => {
  const appRoutes = useRouteList();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={'basic-layout'}>
      <aside>
        <a href="/" style={{ display: 'flex' }}>
          <Logo>TWON ADMIN</Logo>
          {/* <img src="/img/logo.png" style={{ height: 75, margin: 'auto' }} /> */}
        </a>
        {appRoutes.map((route, index) => {
          return (
            <MenuWrap key={route.name}>
              <ParentMenuItem>{route.name}</ParentMenuItem>
              {route.children.map((subitem: any, index) => (
                <SubMenuItemWrap
                  key={subitem.path}
                  className={pathname === subitem.path ? 'active' : ''}
                  onClick={() => {
                    console.log(pathname);
                    console.log('history');
                    navigate(subitem.path);
                  }}
                >
                  <SubMenuItem>{subitem.name}</SubMenuItem>
                  <ArrowRightOutlined />
                </SubMenuItemWrap>
              ))}
            </MenuWrap>
          );
        })}
      </aside>
      <section>
        <header>
          <Button
            size={'small'}
            onClick={() => {
              sessionStorage.clear();
              window.location.href = '/auth/login';
            }}
          >
            로그아웃
          </Button>
        </header>
        {children}
      </section>
    </div>
  );
};

export default BasicLayout;

const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 22px 0;
  padding: 0 16px;
`;

const ParentMenuItem = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: white;
`;

const SubMenuItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  margin-top: 14px;
  color: white;
  cursor: pointer;
  &.active {
    color: #f9bf02;
  }
`;

const SubMenuItem = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const Logo = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-left: 18px;
`;
