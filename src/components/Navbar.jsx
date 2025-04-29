import { Link } from 'react-router-dom';
import { Coffee, Home, Info, Phone } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart(); // Use the cart context to get cartItems

  return (
    <nav className="bg-amber-900 text-amber-50 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Coffee className="h-8 w-8" />
          <span className="text-xl font-bold">Brew Haven</span>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="flex items-center space-x-1 hover:text-amber-200 transition">
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-1 hover:text-amber-200 transition">
            <Info className="h-5 w-5" />
            <span>About</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-1 hover:text-amber-200 transition">
            <Phone className="h-5 w-5" />
            <span>Contact</span>
          </Link>
          <Link to="/cart" className="relative flex items-center hover:text-amber-200">
            <ShoppingCart className="h-5 w-5" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-600 text-xs text-white rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>

        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
