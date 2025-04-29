import { useState } from 'react';
import { Coffee, Award, Star, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import coffee1 from '../assets/images/coffee1.png';
import coffee2 from '../assets/images/coffee2.png';
import coffee3 from '../assets/images/coffee3.png';
import m1 from '../assets/images/m1.png';
import m2 from '../assets/images/m2.png';
import m3 from '../assets/images/m3.png';
import m4 from '../assets/images/m4.png';
import m5 from '../assets/images/m5.png';
import m6 from '../assets/images/m6.png';
import m7 from '../assets/images/m7.png';
import m8 from '../assets/images/m8.png';
import m9 from '../assets/images/m9.png';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const modalVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const Home = () => {
  const [showMenuModal, setShowMenuModal] = useState(false);

  const featuredDrinks = [
    {
      name: "Honey Lavender Latte",
      description: "A floral twist on our classic latte with locally sourced honey.",
      price: "$5.50",
      image: coffee1
    },
    {
      name: "Caramel Macchiato",
      description: "Espresso with vanilla-flavored syrup, milk and caramel drizzle.",
      price: "$5.00",
      image: coffee2
    },
    {
      name: "Cold Brew Nitro",
      description: "Our signature cold brew infused with nitrogen for a smooth, creamy texture.",
      price: "$4.75",
      image: coffee3
    }
  ];

  const promotions = [
    {
      title: "Happy Hour",
      description: "2-5pm weekdays: 20% off all drinks",
      icon: <Star className="h-6 w-6 text-amber-500" />
    },
    {
      title: "Loyalty Program",
      description: "Buy 9 drinks, get the 10th free",
      icon: <Award className="h-6 w-6 text-amber-500" />
    },
    {
      title: "Morning Special",
      description: "Before 9am: Free pastry with any large coffee",
      icon: <Coffee className="h-6 w-6 text-amber-500" />
    }
  ];

  const fullMenu = {
    coffee: [
      { name: "Espresso", price: "$3.00" },
      { name: "Americano", price: "$3.50" },
      { name: "Cappuccino", price: "$4.50" },
      { name: "Latte", price: "$4.75" },
      { name: "Mocha", price: "$5.00" },
      { name: "Flat White", price: "$4.50" }
    ],
    tea: [
      { name: "Earl Grey", price: "$3.50" },
      { name: "Chamomile", price: "$3.50" },
      { name: "Chai Latte", price: "$4.50" },
      { name: "Matcha Latte", price: "$5.00" },
      { name: "Iced Tea", price: "$3.50" }
    ],
    other: [
      { name: "Hot Chocolate", price: "$4.00" },
      { name: "Steamer", price: "$3.50" },
      { name: "Iced Coffee", price: "$4.00" },
      { name: "Affogato", price: "$5.50" }
    ]
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-preview');
    menuSection.scrollIntoView({ behavior: 'smooth' });
  };

  const { addToCart } = useCart();

  return (
    <div className="bg-amber-50 pt-16">
      {/* Hero Section */}
      <section className="relative h-72 flex items-center justify-center bg-amber-800 text-amber-50 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2
          }}
          className="relative z-10 text-center px-4"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Brew Haven
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl mb-6"
          >
            Artisanal coffee crafted with care
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            onClick={scrollToMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Explore Our Menu
          </motion.button>
        </motion.div>
      </section>

      {/* Featured Drinks */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-amber-900"
        >
          Our Signature Drinks
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredDrinks.map((drink, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group"
            >
              <div className="overflow-hidden">
                <motion.img 
                  src={drink.image} 
                  alt={drink.name} 
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-amber-900">{drink.name}</h3>
                <p className="text-gray-600 mb-4">{drink.description}</p>
                <p className="text-amber-700 font-bold">{drink.price}</p>
                <motion.button
                  onClick={() => addToCart({
                    id: drink.name.replace(/\s+/g, '-').toLowerCase(),
                    name: drink.name,
                    price: parseFloat(drink.price.replace('$', '')),
                    image: drink.image,
                    description: drink.description
                  })}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg transition"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Promotions */}
      <section className="py-16 px-4 bg-amber-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12 text-amber-900"
          >
            Current Promotions
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {promotions.map((promo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4"
              >
                <div className="p-2 bg-amber-100 rounded-full">
                  {promo.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-900">{promo.title}</h3>
                  <p className="text-gray-600">{promo.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu Preview */}
<section id="menu-preview" className="py-16 px-4 max-w-6xl mx-auto">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center mb-12 text-amber-900"
  >
    Our Menu
  </motion.h2>

  <motion.div
    className="grid grid-cols-1 md:grid-cols-3 gap-8"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    {[
      {
        name: "Vanilla Latte",
        price: "$4.75",
        image: m1,
        description: "Smooth espresso with vanilla syrup and steamed milk"
      },
      {
        name: "Hazelnut Cappuccino",
        price: "$4.50",
        image: m2,
        description: "Frothy and nutty, topped with hazelnut dust"
      },
      {
        name: "Iced Matcha Latte",
        price: "$5.00",
        image: m3,
        description: "Earthy matcha over ice with creamy milk"
      },
      {
        name: "Dark Mocha",
        price: "$5.25",
        image: m4,
        description: "Rich chocolate mixed with bold espresso"
      },
      {
        name: "Chai Tea Latte",
        price: "$4.50",
        image: m5,
        description: "A spiced classic with creamy steamed milk"
      },
      {
        name: "Flat White",
        price: "$4.50",
        image: m6,
        description: "A perfect blend of espresso and microfoam"
      },
      {
        name: "Iced Americano",
        price: "$3.75",
        image: m7,
        description: "Espresso diluted with cold water over ice"
      },
      {
        name: "Hot Chocolate",
        price: "$4.00",
        image: m8,
        description: "Velvety cocoa topped with whipped cream"
      },
      {
        name: "Affogato",
        price: "$5.50",
        image: m9,
        description: "Espresso poured over vanilla ice cream"
      }
    ].map((item, index) => (
      <motion.div
        key={index}
        variants={itemVariants}
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-lg shadow-md flex flex-col"
      >
        <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded mb-4" />
        <h3 className="text-xl font-semibold mb-1 text-amber-900">{item.name}</h3>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <p className="text-amber-700 font-bold mb-4">{item.price}</p>
        <motion.button
          onClick={() =>
            addToCart({
              id: item.name.replace(/\s+/g, '-').toLowerCase(),
              name: item.name,
              price: parseFloat(item.price.replace('$', '')),
              description: item.description,
              image: item.image
            })
          }
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-auto bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition"
        >
          Add to Cart
        </motion.button>
      </motion.div>
    ))}
  </motion.div>
</section>


    </div>
  );
};

export default Home;
