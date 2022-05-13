import useIsLogin from '@hooks/useIsLogin';
import React from 'react';
import { Navigate } from 'react-router-dom';

export default ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  const isLogin = useIsLogin();

  return isLogin ? children : <Navigate to="/auth/login" />;
};
