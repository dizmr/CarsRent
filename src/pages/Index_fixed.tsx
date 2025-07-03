import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  User,
  Calendar,
  MapPin,
  Search,
  Users,
  Settings,
  Car,
  Star,
  Heart,
  Shield,
  Clock,
  Award,
  CheckCircle,
  ThumbsUp,
  Globe,
  Headphones,
  CreditCard,
  Zap,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Play,
  Menu,
  X,
  Gauge,
  Fuel,
  Navigation,
  ChevronDown,
  Quote,
} from "lucide-react";

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState("Dubai Marina");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCarBrand, setActiveCarBrand] = useState("all");
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [showCarModal, setShowCarModal] = useState(false);

  const carBrands = [
    { id: "all", name: "All Brands" },
    { id: "lamborghini", name: "Lamborghini" },
    { id: "ferrari", name: "Ferrari" },
    { id: "mclaren", name: "McLaren" },
    { id: "bugatti", name: "Bugatti" },
    { id: "aston-martin", name: "Aston Martin" },
    { id: "bentley", name: "Bentley" },
    { id: "rolls-royce", name: "Rolls Royce" },
    { id: "mercedes", name: "Mercedes-AMG" },
  ];

  const luxuryCars = [
    {
      id: 1,
      brand: "lamborghini",
      name: "Lamborghini Huracán Tecnica",
      category: "Sports Car",
      description:
        "The Huracán Tecnica represents the pure essence of Lamborghini DNA and design.",
      image:
        "https://images.pexels.com/photos/17632041/pexels-photo-17632041.jpeg",
      pricePerDay: 2500,
      originalPrice: 2800,
      engine: "5.2L V10",
      power: "640 HP",
      acceleration: "3.2s 0-100km/h",
      maxSpeed: "325 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: ["Advanced Traction Control", "Carbon Fiber Body Kit"],
      available: true,
      featured: true,
      rating: 4.9,
    },
    {
      id: 2,
      brand: "ferrari",
      name: "Ferrari F8 Tributo",
      category: "Sports Car",
      description:
        "The F8 Tributo is the new mid-rear-engined sports car that represents the highest expression of the Prancing Horse's classic two-seater berlinetta.",
      image:
        "https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg",
      pricePerDay: 2200,
      originalPrice: 2500,
      engine: "3.9L V8 Twin-Turbo",
      power: "720 HP",
      acceleration: "2.9s 0-100km/h",
      maxSpeed: "340 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: ["Side Slip Control", "Dynamic Enhancer"],
      available: true,
      featured: false,
      rating: 4.8,
    },
  ];

  const filteredCars =
    activeCarBrand === "all"
      ? luxuryCars
      : luxuryCars.filter((car) => car.brand === activeCarBrand);

  const services = [
    {
      icon: Shield,
      title: "Comprehensive Insurance",
      description:
        "Full coverage insurance included with every rental for complete peace of mind.",
    },
    {
      icon: Clock,
      title: "24/7 Customer Service",
      description:
        "Round-the-clock support for any assistance needed during your rental period.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al Maktoum",
      location: "Dubai, UAE",
      rating: 5,
      comment: "Exceptional service and an incredible fleet of supercars.",
      avatar: "A",
      date: "December 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="relative bg-gradient-to-r from-luxury-dark-950 via-black to-luxury-dark-950 text-white py-2 sm:py-3 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-400/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 text-xs sm:text-sm">
              <motion.div
                className="group flex items-center space-x-1 bg-white/5 hover:bg-white/10 px-2 py-1 rounded-full transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, y: -1 }}
              >
                <div className="p-1 bg-luxury-gold-500/20 rounded-full group-hover:bg-luxury-gold-500/30 transition-colors">
                  <Phone className="w-3 h-3 text-luxury-gold-400" />
                </div>
                <span className="font-medium group-hover:text-luxury-gold-400 transition-colors">
                  +971 50 123 4567
                </span>
              </motion.div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-white/5 rounded-full px-2 py-1">
                <span className="text-xs font-medium hover:text-luxury-gold-400 transition-colors cursor-pointer px-1">
                  AR
                </span>
                <span className="text-luxury-dark-400 text-xs mx-1">|</span>
                <span className="text-luxury-gold-400 font-semibold text-xs px-1">
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <header className="relative bg-gradient-to-r from-white via-luxury-gold-50/30 to-white backdrop-blur-xl shadow-luxury border-b border-luxury-gold-200/30 sticky top-0 z-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold-100/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-luxury-gold-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-luxury-gold-500/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 py-5 relative z-10">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold-400 via-luxury-gold-500 to-luxury-gold-600 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <Car className="w-9 h-9 text-black font-bold group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="relative">
                <span className="text-3xl font-bold bg-gradient-to-r from-luxury-dark-900 via-luxury-dark-800 to-luxury-dark-900 bg-clip-text text-transparent tracking-tight">
                  LUXURY SUPERCARS
                </span>
                <p className="text-sm text-luxury-gold-600 font-semibold tracking-wide">
                  Dubai Premium Rental
                </p>
                <div className="absolute -bottom-1 left-0 w-20 h-0.5 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 rounded-full"></div>
              </div>
            </motion.div>

            <nav className="hidden lg:flex items-center space-x-2">
              <motion.a
                href="#home"
                className="relative px-4 py-2 text-luxury-dark-700 hover:text-luxury-gold-600 font-semibold transition-all duration-300 rounded-xl hover:bg-luxury-gold-50/50 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.a>
              <motion.a
                href="#fleet"
                className="relative px-4 py-2 text-luxury-dark-700 hover:text-luxury-gold-600 font-semibold transition-all duration-300 rounded-xl hover:bg-luxury-gold-50/50 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Our Fleet</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.a>
            </nav>

            <div className="flex items-center space-x-4">
              <motion.button
                className="bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-4 h-4 inline mr-2" />
                Telegram
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/17632041/pexels-photo-17632041.jpeg"
            alt="Luxury Lamborghini Supercar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-luxury-dark-900/70 to-black/60"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Premium
              <br />
              <span className="bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 bg-clip-text text-transparent">
                Supercar Rental
              </span>
              <br />
              Dubai
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Experience the ultimate luxury with Dubai's most exclusive fleet
              of supercars.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Simple Fleet Section */}
      <section id="fleet" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-luxury-dark-900 mb-6">
              Our Exclusive{" "}
              <span className="bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 bg-clip-text text-transparent">
                Fleet
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-luxury-dark-100 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-luxury-dark-900 mb-1">
                    {car.name}
                  </h3>
                  <p className="text-luxury-gold-600 font-semibold text-sm">
                    {car.category}
                  </p>
                  <p className="text-luxury-dark-600 text-sm mb-4 leading-relaxed">
                    {car.description}
                  </p>
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-3xl font-bold bg-gradient-to-r from-luxury-gold-500 to-luxury-gold-700 bg-clip-text text-transparent">
                      AED {car.pricePerDay.toLocaleString()}
                    </span>
                    <span className="text-lg font-medium text-luxury-dark-500">
                      /day
                    </span>
                  </div>
                  <motion.button
                    className="w-full bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-dark-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-luxury-gold-400 to-luxury-gold-600 rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-black font-bold" />
              </div>
              <span className="text-xl font-bold">LUXURY SUPERCARS</span>
            </div>
            <p className="text-luxury-dark-400 mb-6">
              Dubai's premier luxury supercar rental service.
            </p>
          </div>
          <div className="border-t border-luxury-dark-800 mt-12 pt-8 text-center">
            <p className="text-luxury-dark-400 text-sm">
              © 2024 Luxury Supercars Dubai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
