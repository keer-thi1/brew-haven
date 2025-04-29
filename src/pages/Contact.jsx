import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-amber-50 pt-16">
      {/* Hero Section - Visible immediately */}
      <section className="relative h-64 flex items-center justify-center bg-amber-800 text-amber-50">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visit Us</h1>
          <p className="text-xl">We'd love to hear from you</p>
        </motion.div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-amber-600 mr-2" />
              <h3 className="text-xl font-semibold text-amber-900">Location</h3>
            </div>
            <p className="text-gray-700">
              Kondapur, Hyderabad<br />
              Telangana, 500040
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-amber-600 mr-2" />
              <h3 className="text-xl font-semibold text-amber-900">Hours</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between">
                <span>Monday-Friday</span>
                <span>6am-7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>7am-8pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>7am-6pm</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <Phone className="h-6 w-6 text-amber-600 mr-2" />
              <h3 className="text-xl font-semibold text-amber-900">Contact</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-amber-600" />
                <span>(503) 555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-amber-600" />
                <span>ravikeerthireddyr@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
<section className="py-8 px-4 max-w-6xl mx-auto">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-2xl font-bold mb-6 text-amber-900">Find Us</h2>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.257077805634!2d78.3677973153436!3d17.44888740588711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93b3f0b112c1%3A0x5a6a3a3a5a6a3a3a!2sHeart%20Cup%20Coffee!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-96"
          title="Heart Cup Coffee Location"
        ></iframe>
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold text-amber-800">Brew Haven</p>
        <p className="text-gray-700">Kondapur, Hyderabad, Telangana</p>
        <p className="text-gray-600 mt-2">Open: 7:00 AM - 11:00 PM</p>
      </div>
    </div>
  </motion.div>
</section>

      {/* Contact Form */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-900">Send Us a Message</h2>
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition"
            >
              Sent Message
            </button>
          </motion.form>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;