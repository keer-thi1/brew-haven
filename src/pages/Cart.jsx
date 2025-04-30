import { useState } from 'react';
import { ShoppingCart, CreditCard, Wallet, Banknote, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const paymentMethods = [
  { id: 'credit', name: 'Credit Card', icon: <CreditCard className="h-5 w-5" /> },
  { id: 'debit', name: 'Debit Card', icon: <Wallet className="h-5 w-5" /> },
  { id: 'cash', name: 'Cash', icon: <Banknote className="h-5 w-5" /> },
];

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }
    setShowConfirmation(true);
    const randomOrderNum = Math.floor(Math.random() * 90000) + 10000;
    setOrderNumber(randomOrderNum);
  };

  const completeOrder = () => {
    clearCart();
    setShowConfirmation(false);
  };

  if (cartItems.length === 0 && !orderNumber) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-amber-100"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center p-8 bg-white rounded-xl shadow-lg"
        >
          <ShoppingCart className="h-12 w-12 mx-auto text-amber-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some delicious coffee to get started!</p>
          <Link 
            to="/" 
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow hover:shadow-md"
          >
            Browse Menu
          </Link>
        </motion.div>
      </motion.div>
    );
  }

  if (orderNumber) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-amber-100"
      >
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md w-full"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 0.6 }}
            className="text-6xl mb-6"
          >
            🎉
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank you for your order!</h2>
          <p className="text-gray-600 mb-6">
            Your order number is <span className="font-bold text-amber-600">#{orderNumber}</span>
          </p>
          <p className="text-gray-600 mb-8">
            We'll have your delicious coffee ready soon!
          </p>
          <Link 
            to="/" 
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow hover:shadow-md"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-3xl font-bold pt-16 text-amber-900 mb-8 text-center"
        >
          Your Cart
        </motion.h1>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6">
            <AnimatePresence>
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.05 }}
                  className="flex justify-between items-center border-b border-amber-100 py-4"
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 rounded-lg overflow-hidden shadow-sm"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-amber-600 font-semibold">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100 transition"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100 transition"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="ml-2 p-2 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="border-t border-amber-100 p-6 bg-amber-50 pt-16/50">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-3 mb-6"
            >
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-amber-100">
                <span className="text-amber-900">Total</span>
                <span className="text-amber-700">${total.toFixed(2)}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold mb-4 text-amber-900">Payment Method</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {paymentMethods.map(method => (
                  <motion.button
                    key={method.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`flex items-center justify-center space-x-2 p-3 border rounded-lg transition ${
                      paymentMethod === method.id 
                        ? 'border-amber-400 bg-amber-50 shadow-inner' 
                        : 'border-gray-200 hover:border-amber-300 bg-white'
                    }`}
                  >
                    {method.icon}
                    <span>{method.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.button
              onClick={handleCheckout}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-all shadow hover:shadow-md"
            >
              Proceed to Pay
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6"
            >
              <h3 className="text-xl font-bold text-amber-900 mb-4">Confirm Your Order</h3>
              <p className="mb-6 text-gray-600">Are you ready to complete your purchase?</p>
              
              <div className="flex justify-end space-x-4">
                <motion.button
                  onClick={() => setShowConfirmation(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={completeOrder}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition shadow"
                >
                  Confirm
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;