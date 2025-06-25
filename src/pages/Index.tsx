import { useState, useEffect } from "react";
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
} from "lucide-react";

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState("Dubai");
  const [favoriteCards, setFavoriteCards] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const toggleFavorite = (carId: number) => {
    setFavoriteCards((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId],
    );
  };

  const categories = [
    { id: "all", name: "All Cars", count: 18 },
    { id: "supercar", name: "Supercars", count: 6 },
    { id: "luxury", name: "Luxury", count: 8 },
    { id: "exotic", name: "Exotic", count: 4 },
  ];

  const cars = [
    {
      id: 1,
      name: "Rolls Royce Cullinan",
      brand: "Rolls Royce",
      image:
        "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg",
      price: 2999,
      originalPrice: 3499,
      passengers: 4,
      transmission: "Auto",
      doors: 4,
      baggage: 3,
      badge: "New Arrival",
      category: "luxury",
    },
    {
      id: 2,
      name: "Lamborghini Aventador",
      brand: "Lamborghini",
      image: "https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg",
      price: 1899,
      originalPrice: 2199,
      passengers: 2,
      transmission: "Auto",
      doors: 2,
      baggage: 1,
      badge: "Most Popular",
      category: "supercar",
    },
    {
      id: 3,
      name: "BMW M8 Competition",
      brand: "BMW",
      image:
        "https://images.pexels.com/photos/11283500/pexels-photo-11283500.jpeg",
      price: 899,
      originalPrice: 1099,
      passengers: 4,
      transmission: "Auto",
      doors: 4,
      baggage: 2,
      badge: "Limited",
      category: "luxury",
    },
    {
      id: 4,
      name: "Mercedes G63 AMG",
      brand: "Mercedes",
      image:
        "https://images.pexels.com/photos/1040753/pexels-photo-1040753.jpeg",
      price: 1299,
      originalPrice: 1499,
      passengers: 5,
      transmission: "Auto",
      doors: 5,
      baggage: 4,
      badge: "Premium",
      category: "luxury",
    },
    {
      id: 5,
      name: "Ferrari 488 Spider",
      brand: "Ferrari",
      image:
        "https://images.pexels.com/photos/27985144/pexels-photo-27985144.jpeg",
      price: 2199,
      originalPrice: 2599,
      passengers: 2,
      transmission: "Auto",
      doors: 2,
      baggage: 1,
      badge: "Exclusive",
      category: "supercar",
    },
    {
      id: 6,
      name: "Bentley Continental GT",
      brand: "Bentley",
      image:
        "https://images.pexels.com/photos/18837778/pexels-photo-18837778.jpeg",
      price: 1599,
      originalPrice: 1899,
      passengers: 4,
      transmission: "Auto",
      doors: 2,
      baggage: 2,
      badge: "Luxury",
      category: "luxury",
    },
    {
      id: 7,
      name: "McLaren 720S",
      brand: "McLaren",
      image:
        "https://images.pexels.com/photos/14487781/pexels-photo-14487781.jpeg",
      price: 2899,
      originalPrice: 3299,
      passengers: 2,
      transmission: "Auto",
      doors: 2,
      baggage: 1,
      badge: "Hot Deal",
      category: "supercar",
    },
    {
      id: 8,
      name: "Audi R8 V10 Plus",
      brand: "Audi",
      image:
        "https://images.pexels.com/photos/18003058/pexels-photo-18003058.jpeg",
      price: 1499,
      originalPrice: 1799,
      passengers: 2,
      transmission: "Auto",
      doors: 2,
      baggage: 1,
      badge: "Special",
      category: "supercar",
    },
    {
      id: 9,
      name: "Porsche 911 Turbo S",
      brand: "Porsche",
      image: "https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg",
      price: 1199,
      originalPrice: 1399,
      passengers: 2,
      transmission: "Auto",
      doors: 2,
      baggage: 1,
      badge: "Best Seller",
      category: "supercar",
    },
    {
      id: 10,
      name: "Range Rover Vogue",
      brand: "Range Rover",
      image:
        "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg",
      price: 799,
      originalPrice: 999,
      passengers: 5,
      transmission: "Auto",
      doors: 5,
      baggage: 4,
      badge: "Family",
      category: "luxury",
    },
    {
      id: 11,
      name: "Bugatti Veyron",
      brand: "Bugatti",
      image:
        "https://images.pexels.com/photos/27985144/pexels-photo-27985144.jpeg",
      price: 4999,
      originalPrice: 5999,
      passengers: 2,
      transmission: "Auto",
      doors: 2,
      baggage: 1,
      badge: "Ultra Rare",
      category: "exotic",
    },
    {
      id: 12,
      name: "Mercedes S-Class",
      brand: "Mercedes",
      image:
        "https://images.pexels.com/photos/1040753/pexels-photo-1040753.jpeg",
      price: 599,
      originalPrice: 699,
      passengers: 5,
      transmission: "Auto",
      doors: 4,
      baggage: 3,
      badge: "Comfort",
      category: "luxury",
    },
    {
      id: 13,
      name: "Koenigsegg Regera",
      brand: "Koenigsegg",
      image:
        "https://images.pexels.com/photos/14487781/pexels-photo-14487781.jpeg",
      price: 6999,
      originalPrice: 7999,
      passengers: 2,
      transmission: "Auto",
      doors: 2,
      baggage: 1,
      badge: "Hypercar",
      category: "exotic",
    },
    {
      id: 14,
      name: "BMW i8",
      brand: "BMW",
      image:
        "https://images.pexels.com/photos/18837778/pexels-photo-18837778.jpeg",
      price: 999,
      originalPrice: 1199,
      passengers: 2,
      transmission: "Auto",
      doors: 2,
      baggage: 1,
      badge: "Hybrid",
      category: "supercar",
    },
    {
      id: 15,
      name: "Maserati GranTurismo",
      brand: "Maserati",
      image:
        "https://images.pexels.com/photos/18003058/pexels-photo-18003058.jpeg",
      price: 1399,
      originalPrice: 1699,
      passengers: 4,
      transmission: "Auto",
      doors: 2,
      baggage: 2,
      badge: "Italian",
      category: "luxury",
    },
    {
      id: 16,
      name: "Pagani Huayra",
      brand: "Pagani",
      image: "https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg",
      price: 8999,
      originalPrice: 9999,
      passengers: 2,
      transmission: "Auto",
      doors: 2,
      baggage: 1,
      badge: "Art Piece",
      category: "exotic",
    },
    {
      id: 17,
      name: "Lexus LC 500",
      brand: "Lexus",
      image:
        "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg",
      price: 799,
      originalPrice: 999,
      passengers: 2,
      transmission: "Auto",
      doors: 2,
      baggage: 1,
      badge: "Reliable",
      category: "luxury",
    },
    {
      id: 18,
      name: "Aston Martin DB11",
      brand: "Aston Martin",
      image:
        "https://images.pexels.com/photos/27985144/pexels-photo-27985144.jpeg",
      price: 1799,
      originalPrice: 2099,
      passengers: 2,
      transmission: "Auto",
      doors: 2,
      baggage: 1,
      badge: "British",
      category: "luxury",
    },
  ];

  const filteredCars =
    activeCategory === "all"
      ? cars
      : cars.filter((car) => car.category === activeCategory);

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      location: "Dubai, UAE",
      rating: 5,
      comment:
        "Exceptional service! The Lamborghini was in perfect condition and the delivery was prompt. Highly recommend for special occasions.",
      avatar: "A",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      location: "London, UK",
      rating: 5,
      comment:
        "Amazing experience during my Dubai vacation. Professional staff, luxury cars, and competitive prices. Will definitely use again!",
      avatar: "S",
    },
    {
      id: 3,
      name: "Marco Rossi",
      location: "Milan, Italy",
      rating: 5,
      comment:
        "The best luxury car rental in Dubai. The Ferrari was a dream to drive. Everything was smooth from booking to return.",
      avatar: "M",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Full Insurance Coverage",
      description:
        "Comprehensive insurance included with every rental for your peace of mind.",
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description:
        "Round-the-clock assistance whenever you need help during your rental period.",
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description:
        "Quick and easy online booking system with immediate confirmation.",
    },
    {
      icon: Car,
      title: "Free Delivery & Pickup",
      description:
        "Complimentary delivery to your location anywhere in Dubai and pickup service.",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description:
        "Multiple payment options including credit cards, cash, and cryptocurrency.",
    },
    {
      icon: Headphones,
      title: "VIP Treatment",
      description:
        "Personalized service with dedicated account managers for premium experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-gray-900 text-white py-3 border-b border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+971 50 123 4567</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@luxuryrent.ae</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
              <Globe className="w-4 h-4" />
              <span>Dubai, UAE</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-xs">
              <span className="hover:text-yellow-400 transition-colors cursor-pointer">
                العربية
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-yellow-400 font-semibold">English</span>
            </div>
            <div className="flex items-center space-x-3">
              <Facebook className="w-4 h-4 hover:text-blue-400 transition-colors cursor-pointer" />
              <Instagram className="w-4 h-4 hover:text-pink-400 transition-colors cursor-pointer" />
              <Twitter className="w-4 h-4 hover:text-blue-400 transition-colors cursor-pointer" />
              <Youtube className="w-4 h-4 hover:text-red-400 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <Car className="w-7 h-7 text-black font-bold" />
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">
                LUXURY DUBAI
              </span>
              <p className="text-xs text-gray-500">Premium Car Rental</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            <a
              href="#home"
              className="hover:text-yellow-600 transition-colors border-b-2 border-transparent hover:border-yellow-600 pb-1"
            >
              Home
            </a>
            <a
              href="#fleet"
              className="hover:text-yellow-600 transition-colors border-b-2 border-transparent hover:border-yellow-600 pb-1"
            >
              Fleet
            </a>
            <a
              href="#services"
              className="hover:text-yellow-600 transition-colors border-b-2 border-transparent hover:border-yellow-600 pb-1"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-yellow-600 transition-colors border-b-2 border-transparent hover:border-yellow-600 pb-1"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-yellow-600 transition-colors border-b-2 border-transparent hover:border-yellow-600 pb-1"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="w-4 h-4 inline mr-2" />
              Login
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('https://images.pexels.com/photos/18003058/pexels-photo-18003058.jpeg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-5xl px-4">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Award className="w-4 h-4" />
                <span>#1 Luxury Car Rental in Dubai</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              LUXURY CAR RENTAL
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                DUBAI
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Looking to rent a luxury car in Dubai? LUXURY DUBAI is the
              ultimate luxury car rental offering you a wide selection of
              high-end cars for rent.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="group bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-2xl flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Car className="w-5 h-5" />
                <span>Rent a Car</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="group border-2 border-white/30 hover:border-yellow-400 text-white hover:text-yellow-400 px-8 py-4 rounded-xl text-lg font-bold transition-all backdrop-blur-sm flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Video</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-8 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Full Insurance</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Metrics Block */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Customer Rating */}
            <motion.div
              className="flex items-center space-x-4 bg-gradient-to-r from-yellow-50 to-yellow-100 px-6 py-4 rounded-2xl border border-yellow-200 shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-black fill-current" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600 font-medium">
                  Customer Rating
                </div>
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 rounded-2xl border border-blue-200 shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support</div>
              </div>
            </motion.div>

            {/* Happy Customers */}
            <motion.div
              className="flex items-center space-x-4 bg-gradient-to-r from-green-50 to-green-100 px-6 py-4 rounded-2xl border border-green-200 shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Happy Customers
                </div>
              </div>
            </motion.div>

            {/* Premium Cars */}
            <motion.div
              className="flex items-center space-x-4 bg-gradient-to-r from-purple-50 to-purple-100 px-6 py-4 rounded-2xl border border-purple-200 shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Premium Cars
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search Form */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Book Your Dream Car
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Pickup Location
                </label>
                <div className="relative">
                  <select
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all font-medium bg-white appearance-none"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    <option>Dubai Marina</option>
                    <option>Downtown Dubai</option>
                    <option>Dubai Airport</option>
                    <option>Abu Dhabi</option>
                    <option>Sharjah</option>
                  </select>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Pickup Date
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
                    <Calendar className="w-5 h-5 text-yellow-600" />
                  </div>
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all font-medium relative z-0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Pickup Time
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
                    <Clock className="w-5 h-5 text-yellow-600" />
                  </div>
                  <input
                    type="time"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all font-medium relative z-0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Return Date
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
                    <Calendar className="w-5 h-5 text-yellow-600" />
                  </div>
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all font-medium relative z-0"
                  />
                </div>
              </div>

              <div className="flex items-end">
                <motion.button
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Search className="w-5 h-5" />
                  <span>Search Cars</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-yellow-500 text-black shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cars Section */}
      <section id="fleet" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Latest Car Rental Offers in Dubai
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              LUXURY DUBAI is the best place to rent luxury cars in Dubai.
              Choose from our premium fleet of supercars, sports cars, and
              luxury vehicles. All our cars are maintained to the highest
              standards and come with comprehensive insurance coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Badge */}
                  <div
                    className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                      car.badge === "New Arrival"
                        ? "bg-green-500 text-white"
                        : car.badge === "Most Popular"
                          ? "bg-red-500 text-white"
                          : car.badge === "Limited"
                            ? "bg-purple-500 text-white"
                            : car.badge === "Premium"
                              ? "bg-blue-500 text-white"
                              : car.badge === "Exclusive"
                                ? "bg-yellow-500 text-black"
                                : "bg-gray-500 text-white"
                    }`}
                  >
                    {car.badge}
                  </div>

                  {/* Favorite Button */}
                  <motion.button
                    onClick={() => toggleFavorite(car.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        favoriteCards.includes(car.id)
                          ? "text-red-500 fill-current"
                          : "text-gray-600"
                      }`}
                    />
                  </motion.button>

                  {/* Brand Logo */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                    <span className="text-sm font-bold text-gray-800">
                      {car.brand}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {car.name}
                  </h3>

                  {/* Car Specs */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <Users className="w-5 h-5 text-yellow-600 mx-auto mb-1" />
                      <span className="text-sm font-semibold text-gray-700">
                        {car.passengers}
                      </span>
                      <p className="text-xs text-gray-500">Passengers</p>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <Settings className="w-5 h-5 text-yellow-600 mx-auto mb-1" />
                      <span className="text-sm font-semibold text-gray-700">
                        {car.transmission}
                      </span>
                      <p className="text-xs text-gray-500">Transmission</p>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <Car className="w-5 h-5 text-yellow-600 mx-auto mb-1" />
                      <span className="text-sm font-semibold text-gray-700">
                        {car.doors}
                      </span>
                      <p className="text-xs text-gray-500">Doors</p>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="w-5 h-5 mx-auto mb-1 flex items-center justify-center">
                        <div className="w-4 h-3 border-2 border-yellow-600 rounded-sm"></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        {car.baggage}
                      </span>
                      <p className="text-xs text-gray-500">Baggage</p>
                    </div>
                  </div>

                  {/* Price and Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        ${car.price}{" "}
                        <span className="text-lg font-normal text-gray-500">
                          /day
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 line-through">
                        ${car.originalPrice}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-current"
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">(4.9)</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-3">
                    <motion.button
                      className="bg-green-500 hover:bg-green-600 text-white py-3 px-2 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </motion.button>
                    <motion.button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-2 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      <span className="hidden sm:inline">Call</span>
                    </motion.button>
                    <motion.button
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black py-3 px-2 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Cars</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Luxury Dubai?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide premium luxury car rental services with unmatched
              quality and customer satisfaction in Dubai.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-yellow-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-black" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Luxury Dubai
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Luxury Dubai has been the premier destination for luxury car
                rentals in Dubai since 2018. We specialize in providing
                high-end, exotic, and luxury vehicles to discerning customers
                who demand the finest in automotive excellence.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our fleet consists of the latest models from prestigious brands
                including Rolls Royce, Lamborghini, Ferrari, Bentley, and more.
                Each vehicle is meticulously maintained and regularly serviced
                to ensure the highest standards of performance and safety.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    100+
                  </div>
                  <div className="text-sm text-gray-600">Luxury Cars</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    6+
                  </div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </motion.div>
              </div>
              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/18003058/pexels-photo-18003058.jpeg"
                alt="Luxury Car"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Premium Fleet</h3>
                <p className="text-sm opacity-90">
                  Exotic cars maintained to perfection
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied
              customers have to say about their luxury car rental experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Drive Luxury?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us now and get the best deals on luxury car rentals in
              Dubai. Experience the thrill of driving your dream car today!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.button
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp: +971 50 123 4567</span>
              </motion.button>
              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </motion.button>
            </div>
            <div className="flex justify-center space-x-6 text-sm opacity-75">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Instant Confirmation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsUp className="w-4 h-4" />
                <span>Best Prices</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                  <Car className="w-6 h-6 text-black font-bold" />
                </div>
                <span className="text-xl font-bold">LUXURY DUBAI</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Premium luxury car rental service in Dubai, UAE. Experience the
                finest automobiles with exceptional service.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 hover:text-blue-400 transition-colors cursor-pointer" />
                <Instagram className="w-5 h-5 hover:text-pink-400 transition-colors cursor-pointer" />
                <Twitter className="w-5 h-5 hover:text-blue-400 transition-colors cursor-pointer" />
                <Youtube className="w-5 h-5 hover:text-red-400 transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Luxury Car Rental
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Supercar Rental
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Sports Car Rental
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Chauffeur Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Airport Transfer
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Info</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span>+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span>info@luxuryrent.ae</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  <span>Dubai Marina, Dubai, UAE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Luxury Dubai. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
