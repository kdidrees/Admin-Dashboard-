import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slices/LoginSlice";

export const store = configureStore({
    reducer:{
        // put all reducers here
        user:userReducer
    }
})