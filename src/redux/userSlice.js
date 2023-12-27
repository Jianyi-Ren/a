// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userList: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
