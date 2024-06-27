import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slices/loginSlice";

export const store = configureStore({
    reducer:{
        // put all reducers here
        user:userReducer
    }
})