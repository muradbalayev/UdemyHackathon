import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'username',
    initialState: {
      username: '',
      instructor: null,

    },
    reducers: {
      setUser: (state, action) => {
        state.username = action.payload;
        state.instructor = action.payload.instructor;
      },
      clearUser: (state) => {
        state.username = '';
        state.instructor = null;
      },
    },
  });
  
  export const { setUser, clearUser } = userSlice.actions;
  export default userSlice.reducer;