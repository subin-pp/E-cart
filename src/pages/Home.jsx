import React, { useEffect, useState } from 'react'
import Header from '../componets/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slice/productSlice'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])


  const navigateToNextPage =()=>{
    if(currentPage != totalPages){
      setcurrentPage(currentPage+1)
    }
  }
  const navigateToPrevPage =()=>{
    if(currentPage != 1){
      setcurrentPage(currentPage-1)
    }
  }


  const {allProducts , loading , errorMsg} = useSelector(state=>state.productReducer)
  console.log(allProducts,loading,errorMsg);
  const [currentPage,setcurrentPage] = useState(1)
  const productPerPage = 8
  const totalPages = Math.ceil(allProducts?.length/ productPerPage)
  const currentPageProductLastIndex = currentPage * productPerPage
  const currentPageProductFirstIndex = currentPageProductLastIndex - productPerPage
  const visibleAllProducts = allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)
  return (
    <>
    <Header insideHome={true}/>

    <div className='container px-4 mx-auto' style={{paddingTop:'100px'}}>
        {
          loading ? 
          <div className='flex justify-center items-center my-5 text-lg'>
            <img width={'70px'} height={'80px'} src="https://media1.tenor.com/images/d6cd5151c04765d1992edfde14483068/tenor.gif?itemid=5662595" alt="" />Loading </div>



          :<>
          <div className='grid grid-cols-4 gap-4'>
          {
            allProducts?.length>0?
            visibleAllProducts?.map(product=>(
              <div key={product?.id} className='rounded border p-2 shadow'>
             <img style={{width:'100%'}} src={product?.thumbnail} alt="" />
             <div className='text-center'>
              <h3 className='text-xl font-bold '>{product?.title}</h3>
              <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded px-3 py-2 mt-3 text-white inline-block'>View More  </Link>
             </div>
          </div>
            ))
            :
          
           <div className='flex justify-center items-center font-bold text-red-600 my-5 text-lg'>
            Product Not Found
          </div>
          }
         </div>
         <div className='text-2xl text-center font-bold mt-20'>
          <span onClick={navigateToPrevPage} className='curser-pointer '><i className='fa-solid fa-backward me-5'></i></span>
          <span className='curser-pointer '>{currentPage } of {totalPages}</span>
          <span onClick={navigateToNextPage} className='curser-pointer '><i className='fa-solid fa-forward ms-5'></i></span>

         </div>
          </>
        }
    </div>
    </>
  )
}

export default Home