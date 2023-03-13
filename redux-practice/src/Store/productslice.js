import { createSlice } from "@reduxjs/toolkit";

const storeslice = createSlice({
  name: "store",
  initialState: {
    createproducts: [],
  },
  reducers: {
    addtask: (state, action) => {
      state.createproducts = [...state.createproducts,action.payload]
    },
    changeProducts: (state, action) => {     
      state.createproducts = action.payload
    },
  },
});

export const { addtask,changeProducts } = storeslice.actions;

export default storeslice.reducer;
