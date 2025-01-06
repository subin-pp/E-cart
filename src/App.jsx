import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Pnf1 from './pages/Pnf1'
import Cart from './pages/Cart'
import Footer from './componets/Footer'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/:id/view' element={<View/>} />
      <Route path='/*' element={<Pnf1/>} />
      
    </Routes>

    {/* Footer */}
    <Footer/>
    </>
  )
}

export default App
