import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import spaceReducer from './space';

export default configureStore({
  reducer: {
    auth: authReducer,
    space: spaceReducer,
  },
});
