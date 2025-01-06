import React from 'react'
import Header from '../componets/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
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
                    <tr>
                        <td>1</td>
                        <td>Product Name</td>
                        <td><img width={'70px'} height={'70px'} src="https://tse3.mm.bing.net/th?id=OIP.DdLsmk2NVSvwkT68Wr_X9wHaHa&pid=Api&P=0&h=180" alt="" /></td>
                        <td>
                            <div className='flex'>
                                <button className='font-bold'>-</button>
                                <input style={{width:'40px'}}  className='border p-1 rounded mx-2 text-center' value={2} readOnly type="text" />
                                <button className='font-bold'>+</button>
                            </div>
                        </td>
                        <td>$ 100</td>
                        <td> <button className='text-red-600'><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                </tbody>

            </table>
            <div className='float-right mt-5'>
                <button className='bg-red-600 rounded p-2 text-white'>Empty cart</button>
                <Link to={'/'} className='bg-blue-600 rounded p-2 text-white'  >Shop here</Link>
            </div>
         </div>
         <div className='col-span-1'>
            <div className='border rounded shadow p-4'>
                <h2 className='text-2xl font-bold my-1 '>Total Amount : <span className='text-red-600'>$9.99</span></h2>
                <button className='bg-green-600 rounded p-2 text-white w-full mt-4 '>Check Out</button>
            </div>
         </div>
       </div>
       </>
    </div>
    </>
  )
}

export default Cart