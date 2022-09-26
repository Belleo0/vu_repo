import React from 'react';

import { Location } from 'history';
import {
  BrowserRouter,
  useLocation,
  useNavigate,
  Location as RouterLocation,
} from 'react-router-dom';

export const RouteAdapter: React.FunctionComponent<{
  children: React.FunctionComponent<{
    history: {
      replace(location: Location): void;
      push(location: Location): void;
    };
    location: RouterLocation;
  }>;
}> = ({ children }) => {
  const navigate = useNavigate();
  const routerLocation = useLocation();

  const adaptedHistory = React.useMemo(
    () => ({
      replace(location: Location) {
        navigate(location, { replace: true, state: location.state as any });
      },
      push(location: Location) {
        navigate(location, { replace: false, state: location.state as any });
      },
    }),
    [navigate],
  );
  if (!children) {
    return null;
  }
  return children({ history: adaptedHistory, location: routerLocation });
};
