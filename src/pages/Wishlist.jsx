import React from 'react'
import Header from '../componets/Header'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  return (
    <>
    <Header/> 
    <div style={{padding:'100px'}}>

        <>
        <h1 className='text-4xl font-bold text-red-600'> My Wishlist</h1>
        <div className='grid grid-cols-4 gap-4'>
            <div className='rounded border p-2 shadow'>
               <img style={{width:'100%'}} src="http://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-14215265323129kdoe.png" alt="" />
               <div className='text-center'>
                <h3 className='text-xl font-bold '>Product Name</h3>
                <div className='flex justify-evenly mt-3'>
                  <button className='text-xl '><i class="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                  <button className='text-xl '><i class="fa-solid fa-cart-plus text-green-700"></i></button>

                </div>
               </div>
            </div>
        </div>
        </>
    </div>
    </>
  )
}

export default Wishlist