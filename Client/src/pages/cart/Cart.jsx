// src/pages/Home/Cart.jsx
import { useSelector, useDispatch } from "react-redux";
import { motion } from "motion/react";
import { Trash2, ArrowLeft, ShoppingCart } from "lucide-react";
import { removeFromCart, emptyCart, increaseItemQuantity, reduceItemQuantity } from "../../app/productSlice/cartSlice.js";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cart = () => {

  const dispatch = useDispatch()

  const allCartItems = useSelector((state) => state.cart.cartItems);
  console.log("cart items from redux", allCartItems);
  
  const totalItemPrice = allCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryCharge = 40;

  const totalPrice = totalItemPrice + deliveryCharge;

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  const reduceQuantity = (id) => {
    dispatch(reduceItemQuantity(id))
  }

  const addQuantity = (id) => {
    dispatch(increaseItemQuantity(id))
  }

  const removeAllItems = () => {
    console.log("removeAllItem running");
    
    dispatch(emptyCart())
  }

  return (
    <div className="min-h-auto lg:w-[40%] bg-gray-700 border-1 border-gray-800 my-8 rounded-2xl shadow-2xl dark:bg-gray-900 px-4 sm:px-8 lg:px-16 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-8"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-white dark:text-gray-100">
          Your Cart
        </h1>
        {allCartItems.length > 0 && (
          <Button
            variant="destructive"
            onClick={() => removeAllItems()}
            className="flex items-center gap-2"
          >
            <Trash2 size={18} /> Clear Cart
          </Button>
        )}
      </motion.div>

      {/* Cart Empty State */}
      {allCartItems.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col justify-center items-center mt-20"
        >
          <ShoppingCart size={80} className="text-gray-400 mb-6" />
          <h2 className="text-xl font-semibold text-white dark:text-gray-300 mb-4">
            Your cart is empty
          </h2>
          <Link to="/products">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
              Start Shopping
            </Button>
          </Link>
        </motion.div>
      ) : (
        <div className=" flex flex-col grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            {allCartItems.map((item, index) => (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-800 dark:bg-gray-800 shadow-md rounded-xl p-5 flex items-center gap-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white dark:text-gray-100">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-300 dark:text-gray-400">
                    ₹{item.price}
                  </p>
                  <p className="text-sm text-gray-300 dark:text-gray-400">
                    Quantity: {item.quantity}
                  </p>
                  <div className="mt-3 text-white">
                    <button onClick={() => reduceQuantity(item.id)} className="bg-blue-500 hover:bg-blue-600 w-[40px] h-auto m-auto text-xl rounded-lg mr-4">-</button>
                    <button onClick={() => addQuantity(item.id)} className="bg-blue-500 hover:bg-blue-600 w-[40px] h-auto m-auto text-xl rounded-lg " >+</button>
                    
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="text-white hover:text-white bg-red-600 hover:bg-red-700"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  <Trash2 size={20} />
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-800 dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col justify-between"
          >
            <h2 className="text-xl font-bold mb-4 text-white dark:text-gray-100">
              Order Summary
            </h2>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-300 dark:text-gray-300">Subtotal</p>
              <p className="font-medium text-white dark:text-gray-100">
                ₹{totalItemPrice}
              </p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-300 dark:text-gray-300">Shipping</p>
              <p className="font-medium text-white dark:text-gray-100">
                ₹{deliveryCharge}
              </p>
            </div>
            <div className="flex justify-between items-center border-t pt-3">
              <p className="text-lg font-semibold text-white dark:text-gray-100">
                Total
              </p>
              <p className="text-lg font-bold text-blue-600">
                ₹{totalPrice}
              </p>
            </div>
            <Button className="mt-6 bg-blue-600 hover:bg-blue-700 w-full text-white py-2 rounded-lg">
              Proceed to Checkout
            </Button>
            <Link
              to="/products"
              className="flex items-center justify-center gap-2 mt-4 text-blue-600 hover:underline"
            >
              <ArrowLeft size={18} /> Continue Shopping
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Cart;
