import React from 'react'
import Header from '../componets/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slice/wishlistSlice'


const Wishlist = () => {

  const wishlist = useSelector(state=>state.wishlistReducer)

  const dispatch = useDispatch()
  
  return (
    <>
    <Header/> 
    <div style={{padding:'100px'}}>
      
      {
        wishlist?.length > 0 ?
        < >
        <h1 className='text-4xl font-bold text-red-600'> My Wishlist</h1>
        <div className='grid grid-cols-4 gap-4'>
            {
              wishlist?.map(product=>(
                <div  key={product.id} className='rounded border p-2 shadow'>
               <img style={{width:'100%'}} src={product.thumbnail} alt="" />
               <div className='text-center'>
                <h3 className='text-xl font-bold '>{product.title} </h3>
                <div className='flex justify-evenly mt-3'>
                  <button onClick={()=>dispatch(removeItem(product.id))} className='text-xl '><i class="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                  <button className='text-xl '><i class="fa-solid fa-cart-plus text-green-700"></i></button>

                </div>
               </div>
            </div>
              ))
            }
        </div>
        </>
        :
        <div className='flex flex-col gap-5 items-center h-screen'>
        <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
        <h1 className='text-3xl text-red-500'>Your Wishlist is Empty</h1>
      </div>
      }  
    </div>
   
    </>
  )
}

export default Wishlist