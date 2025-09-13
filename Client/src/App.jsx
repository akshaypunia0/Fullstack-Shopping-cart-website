import { useState } from 'react'
import Login from './pages/login/Login'
import Signup from './pages/register/Signup'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Product from './pages/products/Products'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import { useSelector } from 'react-redux'


function App() {

  const [isCartOpen, setIsCartOpen] = useState(true)

  const products = useSelector((state) => state.products.products)

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-700">

        <Routes>
          {/* <Route path='/login' element={<Login />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} /> */}

          {/* <Route element={}/> */}

          <Route element={<Layout setIsCartOpen={() => setIsCartOpen(true)}/>}>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Product />} />
            <Route path='/cart' element={<Cart cartItems={products}/>} />
          </Route>
        </Routes>

      </div>



    </>
  )
}

export default App
