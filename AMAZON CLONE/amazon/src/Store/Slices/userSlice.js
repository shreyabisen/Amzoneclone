import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null
    // total: 0,
    // numberofProducts: 0,
}



const userSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToCart(state, action) {
        },
        removeFromCart(state, action) {


        }
    }

})

//export const { addToCart, removeFromCart } = basketSlice.actions;
export default userSlice.reducer