import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        //action name: reducer function 
        addToCart: (state, actionByComponent)=>{
            const existingproduct = state.find(item=>item.id == actionByComponent.payload.id)
            if(existingproduct){
                
            }else{
                state.push({...actionByComponent.payload,quantity:1,
                    totalPrice:actionByComponent.payload.price
                })
            }
        }

    }
 })