import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth';
import spaceReducer from './space';
import mapReducer from './map';
import constructionReducer from './construction';
import chatReducer from './chat';

export default configureStore({
  reducer: {
    auth: authReducer,
    space: spaceReducer,
    map: mapReducer,
    construction: constructionReducer,
    chat: chatReducer,
  },
});
