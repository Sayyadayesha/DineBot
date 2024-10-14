import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/place_order/PlaceOrder'
import Menu from './pages/menu/Menu'
import OrderStatus from './pages/OrderStatus';
import Chatbot from './pages/Chatbot'
import ContactUs from './pages/ContactUs'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
<Route path='/' element={<Home/>} />
<Route path='cart' element={<Cart/>} />
<Route path='/order' element={<PlaceOrder/>} />
<Route path="/menu" element={<Menu />} />
<Route path="/order-status" element={<OrderStatus />} />
<Route path="/chatbot" element={<Chatbot />} />
<Route path="/contact" element={<ContactUs />} />






      </Routes>
      
    </div>
  )
}

export default App
