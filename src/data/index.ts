import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth';
import spaceReducer from './space';
import mapReducer from './map';
import constructionReducer from './construction';

export default configureStore({
  reducer: {
    auth: authReducer,
    space: spaceReducer,
    map: mapReducer,
    construction: constructionReducer,
  },
});
