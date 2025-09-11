import { useState } from 'react'
import Login from './pages/login/Login'
import Signup from './pages/register/Signup'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Product from './pages/products/Product'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-700">

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          <Route element={<Layout />}>
            <Route path='/home' element={<Home />} />
            <Route path='/products' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>

      </div>



    </>
  )
}

export default App
