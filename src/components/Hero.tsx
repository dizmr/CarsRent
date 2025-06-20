import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-dyson-grey-50 to-dyson-purple-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-dyson-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-dyson-purple-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-dyson-grey-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Dyson.
            <br />
            <span className="bg-gradient-to-r from-dyson-purple-600 to-dyson-purple-800 bg-clip-text text-transparent">
              Engineering the Future.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-dyson-grey-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Pioneering technology that solves the problems others ignore. Our
            engineering obsession creates products that work better.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="bg-dyson-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-dyson-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Products
            </motion.button>
            <motion.button
              className="text-dyson-grey-700 px-8 py-4 rounded-full text-lg font-semibold hover:text-dyson-purple-600 transition-colors duration-300 border-2 border-dyson-grey-300 hover:border-dyson-purple-600"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Innovation
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-dyson-grey-500 text-sm mb-2">
              Scroll to discover
            </span>
            <ChevronDown className="w-6 h-6 text-dyson-purple-600" />
          </motion.div>
        </motion.div>
      </div>

      {/* Product Silhouette */}
      <motion.div
        className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-20 hidden lg:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-64 h-96 bg-gradient-to-b from-dyson-purple-300 to-dyson-purple-600 rounded-full blur-xl"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
