import useIsLogin from '@hooks/useIsLogin';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  const location = useLocation();
  const isLogin = useIsLogin();

  return isLogin ? (
    children
  ) : (
    <Navigate to="/auth/login" state={{ redirect_to: location?.pathname }} />
  );
};
