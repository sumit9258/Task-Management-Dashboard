import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./Reducers/FormReducer";
import UserReducer from "./Reducers/AuthReducer";
import TaskReducer from "./Reducers/TaskReducer";

export const store=configureStore({
    reducer:{
        form:FormReducer,
        auth:UserReducer,
        task:TaskReducer

    }
})
