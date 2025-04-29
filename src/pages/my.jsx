import { motion } from 'framer-motion';
import { Coffee, Star, Download, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import coffeeShop from '../assets/images/m1.png';
import appScreenshot from '../assets/images/m2.png';


const Home = () => {
  const reviews = [
    {
      name: "Sarah J.",
      rating: 5,
      comment: "Best coffee in town! The atmosphere is so cozy and the staff is incredibly friendly."
    },
    {
      name: "Michael T.",
      rating: 4,
      comment: "Consistently great quality. Their seasonal specials are always worth trying."
    },
    {
      name: "Emma L.",
      rating: 5,
      comment: "My daily stop before work. The oat milk latte is perfection!"
    }
  ];

  return (
    <div className="bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-amber-800 text-amber-50">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Brew Haven</h1>
          <p className="text-xl md:text-2xl mb-8">Artisanal coffee crafted with passion since 2010</p>
          <Link 
            to="/home" 
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Explore Our Menu
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6 text-amber-900">Our Coffee Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in the heart of the city, Brew Haven has been serving exceptional coffee for over a decade. 
              We source our beans directly from ethical growers and roast them in-house to perfection.
            </p>
            <p className="text-gray-700 mb-4">
              Our baristas are trained in both classic techniques and innovative brewing methods, ensuring every cup meets our high standards.
            </p>
            <Link 
              to="/about" 
              className="flex items-center text-amber-700 font-medium hover:text-amber-900 mt-4"
            >
              Learn more about us <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img src={coffeeShop} alt="Brew Haven coffee shop" className="w-full h-auto" />
          </div>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-amber-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-3xl font-bold text-center mb-12 text-amber-900"
          >
            What Our Customers Say
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{review.comment}"</p>
                <p className="font-medium text-amber-900">— {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-gradient-to-r from-amber-700 to-amber-800 rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get Our Mobile App</h2>
                <p className="text-amber-100 mb-6">
                  Order ahead, earn rewards, and get exclusive offers with our mobile app. 
                  Skip the line and have your coffee ready when you arrive!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-medium">
                    <Download className="mr-2 h-5 w-5" />
                    Download for iOS
                  </button>
                  <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-medium">
                    <Download className="mr-2 h-5 w-5" />
                    Download for Android
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="rounded-xl overflow-hidden shadow-2xl max-w-xs">
                  <img src={appScreenshot} alt="Brew Haven mobile app" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-amber-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Coffee className="h-12 w-12 mx-auto text-amber-600 mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-amber-900">Join Our Coffee Community</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, new product announcements, 
              and coffee brewing tips delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow hover:shadow-md">
                <Mail className="inline mr-2 h-5 w-5" />
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-amber-800 text-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h2 className="text-3xl font-bold mb-6">Visit Us Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the Brew Haven difference. We're open daily from 7am to 7pm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-block bg-white text-amber-800 hover:bg-amber-100 px-8 py-4 rounded-lg font-medium text-lg transition-all shadow-lg hover:shadow-xl"
              >
                View Location
              </Link>
              <Link 
                to="/contact" 
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;