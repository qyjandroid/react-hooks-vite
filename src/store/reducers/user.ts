import { createSlice,PayloadAction } from '@reduxjs/toolkit'

// 定义 slice state 的类型
interface UserState {
    token: string ;
    userId: number;
    nickName: string;
}
  
  // 使用该类型定义初始 state
const initialState: UserState = {
    token: '',
    nickName: 'store中获取的名字',
    userId: 0,
};


 const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateToken: (state,action:PayloadAction<string>) => {
      // Redux Toolkit 允许在 reducers 中编写 "mutating" 逻辑。
      // 它实际上并没有改变 state，因为使用的是 Immer 库，检测到“草稿 state”的变化并产生一个全新的
      // 基于这些更改的不可变的 state。
      state.token= action.payload;
    },
    updateUserInfo: (state,action) => {
      state.nickName= action.payload.nickName;
      state.userId= action.payload.userId;
    }
  }
})

export const { updateToken, updateUserInfo } = userSlice.actions;


export default userSlice.reducer;