
import { configureStore } from "@reduxjs/toolkit";

import basketSlice from "./Slices/basketSlice";
import userSlice from "./Slices/userSlice";
import likeSlice1 from "./Slices/likeSlice1";

const store = configureStore({
    reducer: {
        basket: basketSlice,
        user: userSlice,
        like: likeSlice1
    },
})
export default store;