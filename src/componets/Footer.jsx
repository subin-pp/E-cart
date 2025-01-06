import React from 'react'

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 bg-violet-600 text-white py-12 px-8">
  <div className="flex flex-col space-y-3">
    <h1 className="text-2xl font-bold">E-Cart</h1>
    <p>Designed and built with <br /> all the love in the world by the Bootstrap team with the help of our contributors.</p>
    <p>Code licensed MIT, docs CC BY 3.0.</p>
    <p>Currently v5.3.3.</p>
  </div>

  <div className="flex flex-col space-y-3">
    <h1 className="text-2xl font-bold">Links</h1>
    <p>Cart Page</p>
    <p>Home Page</p>
    <p>Wish list Page</p>
  </div>

  <div className="flex flex-col space-y-3">
    <h1 className="text-2xl font-bold">Guides</h1>
    <h1>Taiwind</h1>
    <h1>React Redux</h1>
    <h1>React Router</h1>
  </div>

  <div className="flex flex-col space-y-3">
    <h1 className="text-2xl font-bold">Contact</h1>
    <div className="flex gap-3">
      <input type="text" placeholder="Enter Your Email" className="px-4 py-2 rounded-md" />
      <button className="bg-white text-violet-600 border px-4 py-2 rounded-md">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
    <div className="flex gap-5 mt-3">
      <i className="fab fa-instagram text-3xl"></i>
      <i className="fab fa-twitter text-3xl"></i>
      <i className="fab fa-facebook text-3xl"></i>
      <i className="fab fa-whatsapp text-3xl"></i>
    </div>
  </div>
</div>

  )
}

export default Footer