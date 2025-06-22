import { motion } from "framer-motion";
import { ChevronDown, Star, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/18003058/pexels-photo-18003058.jpeg"
          alt="Luxury Lamborghini"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute top-24 right-6 z-20 hidden lg:block">
        <motion.div
          className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex text-luxury-gold-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-semibold text-luxury-dark-800">
              4.9
            </span>
          </div>
          <p className="text-xs text-luxury-dark-600">500+ happy customers</p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Trust Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-luxury-gold-100 text-luxury-gold-800 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Award className="w-4 h-4" />
            <span>Licensed company since 2018</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Luxury Car
            <br />
            <span className="bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 bg-clip-text text-transparent">
              Rental
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Exclusive premium vehicles for special moments. Full insurance and
            24/7 technical support.
          </motion.p>

          {/* Trust Features */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex items-center space-x-2 text-gray-200">
              <div className="w-8 h-8 bg-luxury-gold-600 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span>500+ customers</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-200">
              <div className="w-8 h-8 bg-luxury-gold-600 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
              <span>6 years experience</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-200">
              <div className="w-8 h-8 bg-luxury-gold-600 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <span>4.9 rating</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="bg-luxury-gold-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-luxury-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Cars
            </motion.button>
            <motion.button
              className="text-white px-8 py-4 rounded-full text-lg font-semibold hover:text-luxury-gold-400 transition-colors duration-300 border-2 border-white/30 hover:border-luxury-gold-400"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Price Info */}
          <motion.div
            className="mt-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-sm">
              Starting from{" "}
              <span className="text-luxury-gold-400 font-bold text-lg">
                $200
              </span>{" "}
              per day
            </p>
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
            <span className="text-gray-300 text-sm mb-2">Learn more</span>
            <ChevronDown className="w-6 h-6 text-luxury-gold-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
