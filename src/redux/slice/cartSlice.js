import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        //action name: reducer function 
        addToCart: (state, actionByComponent)=>{
            const existingproduct = state.find(item=>item.id == actionByComponent.payload.id)
            if(existingproduct){
                existingproduct.quantity++
                existingproduct.totalPrice = existingproduct.quantity * existingproduct.price
                const remainingProducts = state.filter(item=>item.id != existingproduct.id)
                state = [...remainingProducts,existingproduct] 
            }else{
                state.push({...actionByComponent.payload,quantity:1,
                    totalPrice:actionByComponent.payload.price
                })
            }
        },
        incrementQuantity :(state, actionByCart)=>{
            const existingproduct = state.find(item=>item.id == actionByCart.payload)
            existingproduct.quantity++
                existingproduct.totalPrice = existingproduct.quantity * existingproduct.price
                const remainingProducts = state.filter(item=>item.id != existingproduct.id)
                state = [...remainingProducts,existingproduct] 
        },
        removeCartItem : (state,actionByCart)=>{
           return state.filter(item=>item.id !=actionByCart.payload)
        },decrementQuantity :(state, actionByCart)=>{
            const existingproduct = state.find(item=>item.id == actionByCart.payload)
            existingproduct.quantity--
                existingproduct.totalPrice = existingproduct.quantity * existingproduct.price
                const remainingProducts = state.filter(item=>item.id != existingproduct.id)
                state = [...remainingProducts,existingproduct] 
        },
        emptyCart :(state)=>{
          return state =[]
        }


    }
 })

 export const {addToCart , incrementQuantity ,removeCartItem, decrementQuantity , emptyCart} = cartSlice.actions
 export default cartSlice.reducer