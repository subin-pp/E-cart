import React, { useEffect, useState } from 'react';
import Header from '../componets/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTOWishlist } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';






 
const View = () => {
  
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)

  const userCart = useSelector(state=>state.cartReducer)



  const [product,setProduct]=useState({})

  const {id} = useParams()
  console.log(id);

  //  const {allProducts } = useSelector(state=>state.productReducer)
  //  console.log(allProducts);

   useEffect(()=>{

    if(sessionStorage.getItem('allproducts')){
      const allProducts = JSON.parse(sessionStorage.getItem('allproducts'))
      console.log( allProducts.find(item=> item.id==id));
      setProduct( allProducts.find(item=> item.id==id))
    }
   },[])

   const handleWishlist=()=>{
    const existingProducts = userWishlist?.find(item=>item?.id == id)
    if(existingProducts)
    {
      alert("The product already existing in the wishlist")
    }else{
      dispatch(addTOWishlist(product))
    }
   }
   
   const handleCart=()=>{
    dispatch(addToCart(product))
    const existingProducts = userCart?.find(item=>item?.id == id)
    if(existingProducts)
    {
      alert("Product quantity is incremented")
    }else{
     alert("Product is added to the cart")
    }
   }
   
  console.log(product);
  

  return (
    <>
    <Header/>
    <div className="flex flex-col mx-5">
      <div className="grid grid-cols-2 items-center h-screen gap-8">
       <div>
       <img
          style={{ width: '450px', height: '300px' }}
          src={product?.thumbnail}
          alt="Product"
          className="border border-gray-300 rounded-md shadow-lg"
        />
        <div className="space-x-4 mt-6">
            <button onClick={handleWishlist} className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
              Add to Wishlist
            </button>
            <button onClick={handleCart} className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700">
              Add to Cart
            </button>
          </div>
       </div>

        <div className="space-y-4">
          <h3 className="font-bold text-gray-500"> PID : {product?.id}</h3>
          <h1 className="text-5xl font-bold text-gray-800">Name : {product?.title}</h1>
          <h4 className="font-bold text-2xl text-red-600">Price : {product?.price} $</h4>
          <h4 className="text-gray-700">Brand: {product?.brand}</h4>
          <h4 className="text-gray-700">Category: {product?.category}</h4>
          <p className="text-gray-600 leading-6">
            <span className="font-bold">Description:</span>{product?. description}
          </p>
          <h3 className='font-bold'> Client Reviews </h3>
          {
            product?.reviews?.length>0?
            product?.reviews?.map(item=>(
              <div key={item?.date}>
              <h5>
                <span className='font-bold'> {item?.reviewerName}</span> : <span>{item?.comment}</span>
              </h5>
              <p>
                Rating : 
                {Array.from({ length: item?.rating || 0 }).map((_, index) => (
                  <i 
                    key={index} 
                    className="fa-solid fa-star text-yellow-400" 
                    style={{ marginRight: '5px' }}
                  ></i>
                ))}
              </p>

        
            </div>
            ))
            : <div>No Reviews Yet!!!</div>
          }
          
        </div>
      </div>
    </div>


   
    </>
  );
};

export default View;
