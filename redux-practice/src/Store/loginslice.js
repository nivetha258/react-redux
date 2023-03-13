import { createSlice } from "@reduxjs/toolkit";

const storeslice = createSlice({
  name: "store",
  initialState: {
    isAuthenticated: false,
    userlist: [
      { user: "nivetha", password: 123 },
      { user: "nithya", password: 12 },
      { user: "jeeva", password: 14 },
    ],
  },
  reducers: {
    userlogin: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { userlogin } = storeslice.actions;
export default storeslice.reducer;
