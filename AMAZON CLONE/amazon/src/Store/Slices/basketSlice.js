import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    // total: 0,
    // numberofProducts: 0,
}



const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToCart(state, action) {
            // console.log(action.payload);
            state.items.push(action.payload);

        },
        removeFromCart(state, action) {
            const newState = state

            const index = newState.items.findIndex((item) => item.id === action.payload.id);
            newState.items.splice(index, 1);
            state = newState
            console.log('items removed from cart');


        }
    }

})

export const { addToCart, removeFromCart } = basketSlice.actions;
export default basketSlice.reducer