import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

// import { shallowEqual, useSelector } from 'react-redux';

export default () => {
  const navigate = useNavigate();
  // const { principal } = useSelector((s) => s.auth, shallowEqual);

  useEffect(() => {
    navigate('/user-management');
  }, []);
  return null;
};
