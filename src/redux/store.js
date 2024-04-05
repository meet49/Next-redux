import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slices/taskSlice";

export const store = configureStore({
    reducer:{
        tasks : taskSlice
    }
})