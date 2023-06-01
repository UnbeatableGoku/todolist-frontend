import { combineReducers, configureStore } from '@reduxjs/toolkit';
import UserReducer from './slices/UserSlice';
const reducer = combineReducers({
  user: UserReducer,
});

const store = configureStore({
  reducer,
});

export default store;
