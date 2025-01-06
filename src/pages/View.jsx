import React from 'react';
import Header from '../componets/Header';

const View = () => {
  return (
    <>
    <Header/>
    <div className="flex flex-col mx-5">
      <div className="grid grid-cols-2 items-center h-screen gap-8">
        <img
          style={{ width: '450px', height: '300px' }}
          src="https://gloimg.rglcdn.com/rosegal/pdm-provider-img/straight-product-img/20171226/T016647/T0166470060/source-img/083536-8823.jpg"
          alt="Product"
          className="border border-gray-300 rounded-md shadow-lg"
        />

        <div className="space-y-4">
          <h3 className="font-bold text-gray-500">PID12345</h3>
          <h1 className="text-5xl font-bold text-gray-800">Product Name</h1>
          <h4 className="font-bold text-2xl text-red-600">$250</h4>
          <h4 className="text-gray-700">Brand: TechBrand</h4>
          <h4 className="text-gray-700">Category: Electronics</h4>
          <p className="text-gray-600 leading-6">
            <span className="font-bold">Description:</span> Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Suscipit dolores dolorum
            maxime voluptas nihil adipisci dicta officia ipsam, magni quia
            exercitationem ipsa qui repudiandae? Iusto dolores nesciunt impedit
            temporibus magni?
          </p>
          <div className="space-x-4 mt-6">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
              Add to Wishlist
            </button>
            <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default View;
