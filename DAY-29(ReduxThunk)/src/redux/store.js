import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/sliceAPI";

export default configureStore({
    reducer: {
        todo: todoReducer,
    }
})