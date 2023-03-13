import { configureStore } from "@reduxjs/toolkit";
import loginslice from "./loginslice"
import productslice from "./productslice"


export const store = configureStore({
reducer:{
    login : loginslice,
   products : productslice
}

});