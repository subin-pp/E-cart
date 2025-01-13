

import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../componets/Header'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slice/cartSlice'

const Cart = () => {
     const navigate = useNavigate()
    const [cartTotal,setCartTotal] = useState(0)
    const userCart = useSelector(state=>state.cartReducer)
    const dispatch = useDispatch()
    useEffect(()=>
    {
        if(userCart?.length>0)
        {
            setCartTotal(userCart.map((item)=>item.totalPrice).reduce((a1,a2)=>a1+a2))
        }
    },[userCart])


    const handleDecrementQuuantity = (product)=>{
       if( product?.quantity>1){
          dispatch(decrementQuantity(product.id))
       }else{
        dispatch(removeCartItem(product.id))
       }
    }
    const checkOut=()=>{
        dispatch(emptyCart())
        alert("Order Confirmed... thank you for purchasing with us")
        //redirected to home page
        navigate('/')
    }   
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
       { userCart?.length>0?
        <>
        <h1 className='text-5xl font-bold text-blue-600'>cart Summary</h1>

        <div className='grid grid-cols-3 gap-3 mt-5'>
          <div className='col-span-2 border rounded p-5 shadow'>
             <table className='table-auto w-full'>
                 <thead>
                     <tr>
                         <td className='font-semibold'>#</td>
                         <td className='font-semibold'>Name</td>
                         <td className='font-semibold'>Image </td>
                         <td className='font-semibold'>Quantity</td>
                         <td className='font-semibold'>price</td>
                         <td className='font-semibold'>...</td>

                     </tr>
                 </thead>
                 <tbody>
                     {
                        userCart?.map((product,index)=>(
                            <tr>
                         <td>{index+1}</td>
                         <td>{product.title}</td>
                         <td><img width={'70px'} height={'70px'}src={product?.thumbnail} alt="" /></td>
                         <td>
                             <div className='flex'>
                                 <button onClick={()=>handleDecrementQuuantity(product)} className='font-bold'>-</button>
                                 <input  style={{width:'40px'}}className='border p-1 rounded mx-2 text-center'value={product?.quantity} readOnly type="text" />
                                 <button onClick={()=>dispatch(incrementQuantity(product?.id))} className='font-bold'>+</button>
                             </div>
                         </td>
                         <td>$ {product?.totalPrice}</td>
                         <td> <button onClick={()=>dispatch(removeCartItem(product?.id))} className='text-red-600'><i class="fa-solid fa-trash"></i></button></td>
                     </tr>
                        ))
                     }
                 </tbody>

             </table>
             <div className='float-right mt-5'>
                 <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 rounded p-2 text-white me-3'>Empty cart</button>
                 <Link to={'/'} className='bg-blue-600 rounded p-2 text-white'  >Shop here</Link>
             </div>
          </div>
          <div className='col-span-1'>
             <div className='border rounded shadow p-4'>
                 <h2 className='text-2xl font-bold my-1 '>Total Amount
: <span className='text-red-600'>{cartTotal}</span></h2>
                 <button onClick={checkOut} className='bg-green-600 rounded p-2
text-white w-full mt-4 '>Check Out</button>
             </div>
          </div>
        </div>
        </> :  <div className='flex flex-col gap-5 items-center h-screen'>
              <img
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-cUxSQrI2qa-acl42wSU87fW6gxXyK4bUw&s"
alt="" />
              <h1 style={{ textDecoration: 'underline' }}
className='text-4xl text-red-600'>Your Cart is empty !!!</h1>
            </div>
       }
    </div>
    </>
  )
}

export default Cart