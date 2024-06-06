// import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";
// import axios from "axios";

const cartSlice=createSlice(
    {
    name:"cart",
    initialState:{
    cartItems:[],
    totalQuantity:0,
    amount:0,
    didChange:false
},
reducers:{
    addItemsToCart(state,action)
    {
        const newItem = action.payload;
        const existingItem = state.cartItems.find((item)=>item.id === newItem.id);
        state.totalQuantity++;
        state.didChange=true;
        if(!existingItem)
        {
            state.cartItems.push({
                id:newItem.id,
                quantity:1,
                title:newItem.title,
                price:newItem.price,
                description:newItem.description,
                totalPrice:newItem.price,
            });
        }
        else{
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        }
    },

    removeEventListenerItemFromCart(state,action)
    {
        const id=action.payload;
        const existingItem = state.cartItems.find((item)=>item.id === id);
        state.totalQuantity --;
        state.changed=true;
        if(existingItem.quantity === 1)
        {
            state.cartItems = state.cartItems.filter(item=>item.id !=id)
        }
        else{
            existingItem.quantity--;
            
        }
    }
}
})