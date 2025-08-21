import { motion } from "framer-motion";
import { Play, Shield, Clock, Star } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/18003058/pexels-photo-18003058.jpeg"
          alt="Luxury Lamborghini"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-2 h-32 bg-luxury-gold-500 opacity-60"></div>
        <div className="absolute bottom-1/4 right-10 w-1 h-24 bg-luxury-gold-400 opacity-40"></div>
      </div>

      {/* Trust Metrics - Top Right */}
      <div className="absolute top-32 right-8 z-20 hidden lg:flex flex-col space-y-4">
        <motion.div
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center space-x-2 mb-1">
            <Star className="w-5 h-5 text-luxury-gold-400 fill-current" />
            <span className="text-white font-bold text-lg">4.9</span>
          </div>
          <p className="text-gray-300 text-sm">Customer Rating</p>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center space-x-2 mb-1">
            <Shield className="w-5 h-5 text-luxury-gold-400" />
            <span className="text-white font-bold text-lg">24/7</span>
          </div>
          <p className="text-gray-300 text-sm">Support</p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            {/* Premium Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-luxury-gold-500/20 border border-luxury-gold-500/30 text-luxury-gold-400 px-4 py-2 rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-2 h-2 bg-luxury-gold-400 rounded-full animate-pulse"></div>
              <span>Premium Fleet Available</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Drive
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-luxury-gold-400 via-luxury-gold-500 to-luxury-gold-600 bg-clip-text text-transparent">
                  Excellence
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Experience the world's most exclusive supercars. Delivered to your
              doorstep with white-glove service.
            </motion.p>

            {/* Features */}
            <motion.div
              className="flex flex-wrap gap-6 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-4 h-4 text-luxury-gold-400" />
                <span className="text-sm">Instant Booking</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Shield className="w-4 h-4 text-luxury-gold-400" />
                <span className="text-sm">Full Insurance</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Star className="w-4 h-4 text-luxury-gold-400" />
                <span className="text-sm">VIP Service</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.button
                className="group bg-luxury-gold-500 hover:bg-luxury-gold-600 text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Browse Fleet</span>
                <motion.div
                  className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Play className="w-4 h-4 ml-0.5" />
                </motion.div>
              </motion.button>

              <motion.button
                className="border-2 border-white/30 hover:border-luxury-gold-400 text-white hover:text-luxury-gold-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Call Now
              </motion.button>
            </motion.div>

            {/* Price Display */}
            <motion.div
              className="mt-8 flex items-baseline space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <span className="text-gray-400 text-sm">Starting from</span>
              <span className="text-3xl font-bold text-luxury-gold-400">
                $299
              </span>
              <span className="text-gray-400 text-sm">/day</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Car Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-500/20 to-luxury-gold-600/20 rounded-3xl blur-3xl"></div>

              {/* Car Stats Card */}
              <motion.div
                className="absolute top-4 left-4 bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="text-white text-sm">
                  <div className="font-semibold">Lamborghini Huracán</div>
                  <div className="text-gray-300">630 HP • 0-60 in 2.5s</div>
                </div>
              </motion.div>

              {/* Price Tag */}
              <motion.div
                className="absolute bottom-4 right-4 bg-luxury-gold-500 text-black px-4 py-2 rounded-xl font-bold z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                $799/day
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
