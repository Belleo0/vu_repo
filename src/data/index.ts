import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import spaceReducer from './space';
import mapReducer from './map';

export default configureStore({
  reducer: {
    auth: authReducer,
    space: spaceReducer,
    map: mapReducer,
  },
});
