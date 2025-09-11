import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 w-full text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/home" className="text-xl font-bold tracking-wide">
          ShopEase
        </Link>

        {/* Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <NavLink 
            to="/home" 
            className={({isActive}) => 
              `hover:text-gray-300 ${isActive ? "text-yellow-400" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({isActive}) => 
              `hover:text-gray-300 ${isActive ? "text-yellow-400" : ""}`
            }
          >
            Products
          </NavLink>
          
          
        </div>

        {/* Cart Icon */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
              3
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar