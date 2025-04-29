import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Coffee className="h-6 w-6" />
            <span className="text-lg font-semibold">Brew Haven</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:text-amber-200 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-amber-200 transition">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-amber-200 transition">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Brew Haven Coffee Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;