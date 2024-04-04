import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likeeditems: [],
    // total: 0,
    // numberofProducts: 0,
}



const likesSlice1 = createSlice({
    name: "likes",
    initialState,
    reducers: {
        addToCart(state, action) {
        },
        removeFromCart(state, action) {


        }
    }

})

//export const { addToCart, removeFromCart } = basketSlice.actions;
export default likesSlice1.reducer