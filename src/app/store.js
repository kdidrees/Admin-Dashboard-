import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slices/LoginSlice";
import propertyReducer from "../redux/slices/propertySlice";

export const store = configureStore({
    reducer:{
        // put all reducers here
        user:userReducer,
        property:propertyReducer
    }
})