import { Clock, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import founders from '../assets/images/founders.png';
import shopInterior from '../assets/images/space.png';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const About = () => {
  const values = [
    {
      title: "Quality",
      description: "We source only the finest beans from ethical growers.",
      icon: <Heart className="h-8 w-8 text-amber-600" />
    },
    {
      title: "Community",
      description: "We're proud to be part of the local neighborhood.",
      icon: <Users className="h-8 w-8 text-amber-600" />
    },
    {
      title: "Tradition",
      description: "Honoring time-tested brewing methods with modern twists.",
      icon: <Clock className="h-8 w-8 text-amber-600" />
    }
  ];

  return (
    <div className="bg-amber-50 pt-16">
      {/* Hero Section - Always visible immediately */}
      <section className="relative h-64 flex items-center justify-center bg-amber-700 text-amber-50">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl">From humble beginnings to your favorite local spot</p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-amber-900">How It All Began</h2>
            <p className="text-gray-700 mb-4">
              Brew Haven was founded in 2010 by childhood friends Mia and Carlos. What started as 
              a shared passion for quality coffee in their college dorm room has grown into 
              the beloved community hub it is today.
            </p>
            <p className="text-gray-700 mb-4">
              After traveling through coffee-growing regions in Latin America, they returned 
              with a mission to bring exceptional, ethically-sourced coffee to their hometown.
            </p>
            <p className="text-gray-700">
              Our first location was a tiny 300-square-foot shop with just three tables. 
              Thanks to our amazing customers, we've been able to grow while staying true 
              to our original values.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img src={founders} alt="Founders of Brew Haven" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-amber-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-12 text-amber-900">Our Values</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img src={shopInterior} alt="Brew Haven interior" className="w-full h-auto" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-amber-900">Our Space</h2>
            <p className="text-gray-700 mb-4">
              Our shop was designed to be a welcoming "third place" - not home, not work, 
              but somewhere you can relax, connect, and enjoy exceptional coffee.
            </p>
            <p className="text-gray-700 mb-4">
              The reclaimed wood tables were crafted by local artisans, and the artwork 
              rotates monthly featuring neighborhood creators.
            </p>
            <p className="text-gray-700">
              Whether you're looking for a quiet corner to read, a place to meet friends, 
              or just a great cup of coffee to go, we've designed our space with you in mind.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;