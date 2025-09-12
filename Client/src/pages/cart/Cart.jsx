// src/pages/Home/Cart.jsx
import { useSelector, useDispatch } from "react-redux";
import { motion } from "motion/react";
import { Trash2, ArrowLeft, ShoppingCart } from "lucide-react";
// import { removeFromCart, clearCart } from "../../redux/cartSlice";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cart = ({cartItems}) => {
  const dispatch = useDispatch();
  // const { cartItems, totalPrice } = useSelector((state) => state.products.products);

  return (
    <div className="min-h-screen bg-gray-700 border-1 border-gray-800 dark:bg-gray-900 px-4 sm:px-8 lg:px-16 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-8"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-white dark:text-gray-100">
          Your Cart
        </h1>
        {cartItems.length > 0 && (
          <Button
            variant="destructive"
            // onClick={() => dispatch(clearCart())}
            className="flex items-center gap-2"
          >
            <Trash2 size={18} /> Clear Cart
          </Button>
        )}
      </motion.div>

      {/* Cart Empty State */}
      {cartItems.length === 0 ? (
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
            {cartItems.map((item, index) => (
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
                    ${item.price}
                  </p>
                  <p className="text-sm text-gray-300 dark:text-gray-400">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="text-red-500 hover:text-red-700"
                  // onClick={() => dispatch(removeFromCart(item.id))}
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
              <p className="font-medium text-gray-800 dark:text-gray-100">
                {/* ${totalPrice.toFixed(2)} */}255.00
              </p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-300 dark:text-gray-300">Shipping</p>
              <p className="font-medium text-gray-800 dark:text-gray-100">
                Free
              </p>
            </div>
            <div className="flex justify-between items-center border-t pt-3">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Total
              </p>
              <p className="text-lg font-bold text-blue-600">
                {/* ${totalPrice.toFixed(2)} */} 255.00
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
