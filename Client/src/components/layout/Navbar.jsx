import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from "motion/react";
import { useSelector } from 'react-redux';

const Navbar = ({ onCartclick }) => {

  const numberOfItemsInCart = useSelector((state) => state.cart.cartItems)
  console.log("Number in cart", numberOfItemsInCart);


  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <nav className="bg-gray-900 w-full text-white shadow-md sticky top-0 z-50">

      {/* Desktop Navbar */}
      <div className="hidden container mx-auto px-4 py-3 md:flex items-center justify-between">

        {/* Logo */}
        <Link to="/home" className="text-xl font-bold tracking-wide">
          ShopEase
        </Link>

        {/* Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `hover:text-gray-300 ${isActive ? "text-yellow-400" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover:text-gray-300 ${isActive ? "text-yellow-400" : ""}`
            }
          >
            Products
          </NavLink>


        </div>

        {/* Cart Icon */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" onClick={onCartclick} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
              {numberOfItemsInCart.length}
            </span>
          </Link>
        </div>
      </div>




      {/* Mobile hamburgerr */}

      <div className="flex justify-between">
        <button
          onClick={handleLinkClick}
          className="md:hidden text-2xl h-[40px] ml-4 my-auto"
        >
          <Menu size={30} />
        </button>

        <Link to="/cart" className="md:hidden text-2xl mr-4 my-auto">
          <ShoppingCart className="w-6 h-6" onClick={onCartclick} />
          <span className="absolute top-1 right-2 bg-red-500 text-xs rounded-full px-1">
            {numberOfItemsInCart.length}
          </span>
        </Link>
      </div>

      <AnimatePresence >

        <div className="flex justify-between">
          <div>
            {isOpen && (
              <>
                {/* Overlay backdrop */}
                <motion.div
                  className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleLinkClick}
                />

                {/* Sliding menu */}
                <motion.div
                  className=" md:hidden fixed top-0 left-0 h-full w-3/4 bg-gray-800 text-white z-20 flex flex-col items-center pt-20"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <NavLink
                    to="/home"
                    className="p-4 text-lg hover:bg-gray-700 w-full text-center"
                    onClick={handleLinkClick}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/products"
                    className="p-4 text-lg hover:bg-gray-700 w-full text-center"
                    onClick={handleLinkClick}
                  >
                    Products
                  </NavLink>
                  <NavLink
                    to="/cart"
                    className="p-4 text-lg hover:bg-gray-700 w-full text-center"
                    onClick={handleLinkClick}
                  >
                    Cart
                  </NavLink>
                </motion.div>
              </>
            )}
          </div>
        </div>

      </AnimatePresence>






    </nav>
  )
}

export default Navbar