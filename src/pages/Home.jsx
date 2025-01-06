import React from 'react'
import Header from '../componets/Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Header/>

    <div className='container px-4 mx-auto' style={{paddingTop:'100px'}}>
        <div className='grid grid-cols-4 gap-4'>
            <div className='rounded border p-2 shadow'>
               <img style={{width:'100%'}} src="http://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-14215265323129kdoe.png" alt="" />
               <div className='text-center'>
                <h3 className='text-xl font-bold '>Product Name</h3>
                <Link to={'/id/view'} className='bg-violet-600 rounded px-3 py-2 mt-3 text-white inline-block'>View More  </Link>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home