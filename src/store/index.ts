import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';

 const store = configureStore({
  reducer: {
    user: userReducer,
    //添加更多的reducer
  },
});

// 从 store 本身推断 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
// 推断类型：{user: UserState}
export type AppDispatch = typeof store.dispatch;

export default store;