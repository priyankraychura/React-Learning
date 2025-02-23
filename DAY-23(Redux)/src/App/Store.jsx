import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/Slice";

export const Store = configureStore({
    reducer : {
        counterReducer: counter
    }
});