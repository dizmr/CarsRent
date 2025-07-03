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
        "The Huracán Tecnica represents the pure essence of Lamborghini DNA and design. Expressing the brand's sporting pedigree.",
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
      features: [
        "Advanced Traction Control",
        "Carbon Fiber Body Kit",
        "Premium Alcantara Interior",
        "Performance Exhaust System",
      ],
      available: true,
      featured: true,
      rating: 4.9,
    },
    {
      id: 2,
      brand: "mclaren",
      name: "McLaren 750S Spider",
      category: "Convertible",
      description:
        "The McLaren 750S Spider delivers breathtaking performance with the pure exhilaration of open-top driving.",
      image: "https://images.pexels.com/photos/752615/pexels-photo-752615.jpeg",
      pricePerDay: 2800,
      originalPrice: 3200,
      engine: "4.0L V8 Twin-Turbo",
      power: "750 HP",
      acceleration: "2.8s 0-100km/h",
      maxSpeed: "332 km/h",
      transmission: "8-Speed Seamless Shift",
      seats: 2,
      doors: 2,
      features: [
        "Adaptive Suspension",
        "Carbon Fiber Monocoque",
        "Retractable Hardtop",
        "Track Telemetry System",
      ],
      available: true,
      featured: true,
      rating: 4.8,
    },
    {
      id: 3,
      brand: "ferrari",
      name: "Ferrari F8 Tributo",
      category: "Sports Car",
      description:
        "The F8 Tributo is the new mid-rear-engined sports car that represents the highest expression of the Prancing Horse's classic two-seater berlinetta.",
      image:
        "https://images.pexels.com/photos/14681398/pexels-photo-14681398.jpeg",
      pricePerDay: 2200,
      originalPrice: 2600,
      engine: "3.9L V8 Twin-Turbo",
      power: "720 HP",
      acceleration: "2.9s 0-100km/h",
      maxSpeed: "340 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "Side Slip Control",
        "Ferrari Dynamic Enhancer",
        "Michelin Pilot Sport Tires",
        "Racing Seats with Harnesses",
      ],
      available: true,
      featured: false,
      rating: 4.7,
    },
    {
      id: 4,
      brand: "rolls-royce",
      name: "Rolls Royce Cullinan",
      category: "Luxury SUV",
      description:
        "Cullinan is the first SUV from the House of Rolls-Royce, making luxury off-road travel a reality for the first time.",
      image:
        "https://images.pexels.com/photos/18509922/pexels-photo-18509922.jpeg",
      pricePerDay: 1800,
      originalPrice: 2100,
      engine: "6.75L V12 Twin-Turbo",
      power: "571 HP",
      acceleration: "5.2s 0-100km/h",
      maxSpeed: "250 km/h",
      transmission: "8-Speed Automatic",
      seats: 5,
      doors: 5,
      features: [
        "Self-Leveling Air Suspension",
        "Starlight Headliner",
        "Rear Seat Entertainment",
        "Champagne Cooler",
      ],
      available: true,
      featured: false,
      rating: 4.9,
    },
    {
      id: 5,
      brand: "bugatti",
      name: "Bugatti Chiron",
      category: "Hypercar",
      description:
        "The Chiron is the fastest, most powerful, and exclusive production super sports car in Bugatti's history.",
      image:
        "https://images.pexels.com/photos/29964453/pexels-photo-29964453.jpeg",
      pricePerDay: 8500,
      originalPrice: 9500,
      engine: "8.0L W16 Quad-Turbo",
      power: "1479 HP",
      acceleration: "2.4s 0-100km/h",
      maxSpeed: "420 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "All-Wheel Drive",
        "Carbon Fiber Monocoque",
        "Exclusive Interior Materials",
        "Multi-Mode Driving System",
      ],
      available: false,
      featured: true,
      rating: 5.0,
    },
    {
      id: 6,
      brand: "aston-martin",
      name: "Aston Martin DB11",
      category: "Grand Tourer",
      description:
        "The DB11 combines exceptional power and beauty with outstanding dynamics and unparalleled style.",
      image:
        "https://images.pexels.com/photos/4083523/pexels-photo-4083523.jpeg",
      pricePerDay: 1500,
      originalPrice: 1800,
      engine: "5.2L V12 Twin-Turbo",
      power: "630 HP",
      acceleration: "3.7s 0-100km/h",
      maxSpeed: "322 km/h",
      transmission: "8-Speed Automatic",
      seats: 4,
      doors: 2,
      features: [
        "Adaptive Dampers",
        "Premium Bang & Olufsen Audio",
        "Leather Interior Package",
        "Performance Braking System",
      ],
      available: true,
      featured: false,
      rating: 4.6,
    },
    {
      id: 7,
      brand: "bentley",
      name: "Bentley Continental GT",
      category: "Luxury Coupe",
      description:
        "The Continental GT combines handcrafted luxury with effortless performance and everyday usability.",
      image:
        "https://images.pexels.com/photos/17338596/pexels-photo-17338596.jpeg",
      pricePerDay: 1200,
      originalPrice: 1500,
      engine: "6.0L W12 Twin-Turbo",
      power: "635 HP",
      acceleration: "3.7s 0-100km/h",
      maxSpeed: "333 km/h",
      transmission: "8-Speed Dual Clutch",
      seats: 4,
      doors: 2,
      features: [
        "All-Wheel Drive",
        "Rotating Display",
        "Diamond Quilted Leather",
        "Naim Premium Audio",
      ],
      available: true,
      featured: false,
      rating: 4.8,
    },
    {
      id: 8,
      brand: "mercedes",
      name: "Mercedes-AMG GT",
      category: "Sports Car",
      description:
        "The AMG GT embodies the sporty character and dynamic performance of Mercedes-AMG in its purest form.",
      image:
        "https://images.pexels.com/photos/26563770/pexels-photo-26563770.jpeg",
      pricePerDay: 1000,
      originalPrice: 1300,
      engine: "4.0L V8 Biturbo",
      power: "630 HP",
      acceleration: "3.2s 0-100km/h",
      maxSpeed: "318 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "AMG Performance Seats",
        "Carbon Fiber Exterior",
        "AMG Track Pace App",
        "Performance Exhaust",
      ],
      available: true,
      featured: false,
      rating: 4.5,
    },
    {
      id: 9,
      brand: "lamborghini",
      name: "Lamborghini Aventador SVJ",
      category: "Supercar",
      description:
        "The Aventador SVJ is the most extreme and uncompromising Lamborghini of all time. Pure performance for the track.",
      image:
        "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
      pricePerDay: 3500,
      originalPrice: 4000,
      engine: "6.5L V12",
      power: "770 HP",
      acceleration: "2.8s 0-100km/h",
      maxSpeed: "350 km/h",
      transmission: "7-Speed CVT",
      seats: 2,
      doors: 2,
      features: [
        "Aerodynamic Package",
        "Track Mode",
        "Carbon Fiber Interior",
        "Sport Exhaust",
      ],
      available: true,
      featured: true,
      rating: 4.9,
    },
    {
      id: 10,
      brand: "ferrari",
      name: "Ferrari 488 Spider",
      category: "Convertible",
      description:
        "The 488 Spider delivers exhilarating performance with the joy of open-air driving in true Ferrari style.",
      image:
        "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
      pricePerDay: 2000,
      originalPrice: 2400,
      engine: "3.9L V8 Twin-Turbo",
      power: "670 HP",
      acceleration: "3.0s 0-100km/h",
      maxSpeed: "325 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "Retractable Hardtop",
        "Ferrari Dynamic Enhancer",
        "Carbon Fiber Steering Wheel",
        "Premium Leather Interior",
      ],
      available: true,
      featured: false,
      rating: 4.8,
    },
    {
      id: 11,
      brand: "mclaren",
      name: "McLaren P1",
      category: "Hybrid Hypercar",
      description:
        "The ultimate expression of McLaren's Formula 1 technology. A hybrid hypercar that redefines performance.",
      image:
        "https://images.pexels.com/photos/3849345/pexels-photo-3849345.jpeg",
      pricePerDay: 8000,
      originalPrice: 9500,
      engine: "3.8L V8 Hybrid",
      power: "916 HP",
      acceleration: "2.8s 0-100km/h",
      maxSpeed: "350 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "Hybrid Technology",
        "Active Aerodynamics",
        "Carbon Fiber Monocoque",
        "Race Mode",
      ],
      available: false,
      featured: true,
      rating: 5.0,
    },
    {
      id: 12,
      brand: "aston-martin",
      name: "Aston Martin Vantage",
      category: "Sports Car",
      description:
        "The Vantage delivers pure driving emotion with perfect balance of power and precision engineering.",
      image:
        "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg",
      pricePerDay: 1800,
      originalPrice: 2100,
      engine: "4.0L V8 Twin-Turbo",
      power: "510 HP",
      acceleration: "3.5s 0-100km/h",
      maxSpeed: "314 km/h",
      transmission: "8-Speed Automatic",
      seats: 2,
      doors: 2,
      features: [
        "Limited Slip Differential",
        "Sport Plus Suspension",
        "Premium Audio System",
        "Alcantara Interior",
      ],
      available: true,
      featured: false,
      rating: 4.7,
    },
    {
      id: 13,
      brand: "rolls-royce",
      name: "Rolls Royce Ghost",
      category: "Luxury Sedan",
      description:
        "The Ghost represents the pinnacle of luxury sedans with unparalleled comfort and craftsmanship.",
      image:
        "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg",
      pricePerDay: 2200,
      originalPrice: 2600,
      engine: "6.75L V12 Twin-Turbo",
      power: "571 HP",
      acceleration: "4.3s 0-100km/h",
      maxSpeed: "250 km/h",
      transmission: "8-Speed Automatic",
      seats: 4,
      doors: 4,
      features: [
        "Magic Carpet Ride",
        "Starlight Headliner",
        "Bespoke Interior",
        "Whisper Quiet Cabin",
      ],
      available: true,
      featured: true,
      rating: 4.9,
    },
    {
      id: 14,
      brand: "bugatti",
      name: "Bugatti Veyron",
      category: "Hypercar",
      description:
        "The legendary Veyron set the standard for hypercars with unmatched performance and luxury.",
      image:
        "https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg",
      pricePerDay: 12000,
      originalPrice: 15000,
      engine: "8.0L W16 Quad-Turbo",
      power: "1001 HP",
      acceleration: "2.4s 0-100km/h",
      maxSpeed: "407 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "All-Wheel Drive",
        "Active Aerodynamics",
        "Premium Leather Package",
        "Carbon Fiber Body",
      ],
      available: false,
      featured: true,
      rating: 5.0,
    },
    {
      id: 15,
      brand: "ferrari",
      name: "Ferrari SF90 Stradale",
      category: "Hybrid Supercar",
      description:
        "Ferrari's first plug-in hybrid supercar combines Formula 1 technology with road car luxury.",
      image:
        "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg",
      pricePerDay: 4500,
      originalPrice: 5200,
      engine: "4.0L V8 Hybrid",
      power: "1000 HP",
      acceleration: "2.5s 0-100km/h",
      maxSpeed: "340 km/h",
      transmission: "8-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "Hybrid Technology",
        "All-Wheel Drive",
        "Manettino Dial",
        "Carbon Fiber Package",
      ],
      available: true,
      featured: true,
      rating: 4.9,
    },
    {
      id: 16,
      brand: "bentley",
      name: "Bentley Mulsanne",
      category: "Luxury Sedan",
      description:
        "The Mulsanne represents the epitome of British luxury and handcrafted automotive excellence.",
      image:
        "https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg",
      pricePerDay: 1600,
      originalPrice: 1900,
      engine: "6.75L V8 Twin-Turbo",
      power: "537 HP",
      acceleration: "4.9s 0-100km/h",
      maxSpeed: "296 km/h",
      transmission: "8-Speed Automatic",
      seats: 4,
      doors: 4,
      features: [
        "Handcrafted Interior",
        "Naim Audio System",
        "Mulliner Specification",
        "Executive Rear Seating",
      ],
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
    {
      icon: Navigation,
      title: "Free Delivery & Collection",
      description:
        "Complimentary vehicle delivery and collection anywhere in Dubai.",
    },
    {
      icon: Users,
      title: "Professional Chauffeur",
      description:
        "Experienced chauffeur services available for ultimate luxury experience.",
    },
    {
      icon: Settings,
      title: "Instant Vehicle Exchange",
      description:
        "Emergency vehicle replacement service available 24/7 if needed.",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Options",
      description:
        "Multiple payment methods including crypto, cards, and bank transfers.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al Maktoum",
      location: "Dubai, UAE",
      rating: 5,
      comment:
        "Exceptional service and an incredible fleet of supercars. The Lamborghini Huracán was delivered in pristine condition. Highly recommended!",
      avatar: "A",
      date: "December 2024",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      location: "London, UK",
      rating: 5,
      comment:
        "Amazing experience renting the McLaren 750S for my Dubai vacation. Professional staff and seamless process from start to finish.",
      avatar: "S",
      date: "November 2024",
    },
    {
      id: 3,
      name: "Roberto Silva",
      location: "São Paulo, Brazil",
      rating: 5,
      comment:
        "The Ferrari F8 Tributo exceeded all expectations. The sound, the performance, the luxury - everything was perfect for my business trip.",
      avatar: "R",
      date: "November 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="relative bg-gradient-to-r from-luxury-dark-950 via-black to-luxury-dark-950 text-white py-2 sm:py-3 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-400/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            {/* Contact Information */}
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

              <motion.div
                className="group flex items-center space-x-1 bg-white/5 hover:bg-white/10 px-2 py-1 rounded-full transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, y: -1 }}
              >
                <div className="p-1 bg-luxury-gold-500/20 rounded-full group-hover:bg-luxury-gold-500/30 transition-colors">
                  <Mail className="w-3 h-3 text-luxury-gold-400" />
                </div>
                <span className="hidden sm:inline font-medium group-hover:text-luxury-gold-400 transition-colors">
                  info@luxurysupercarsdubai.com
                </span>
                <span className="sm:hidden font-medium group-hover:text-luxury-gold-400 transition-colors">
                  Email
                </span>
              </motion.div>

              <motion.div
                className="hidden md:flex group items-center space-x-1 bg-white/5 hover:bg-white/10 px-2 py-1 rounded-full transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, y: -1 }}
              >
                <div className="p-1 bg-luxury-gold-500/20 rounded-full group-hover:bg-luxury-gold-500/30 transition-colors">
                  <Globe className="w-3 h-3 text-luxury-gold-400" />
                </div>
                <span className="font-medium group-hover:text-luxury-gold-400 transition-colors">
                  Dubai Marina
                </span>
              </motion.div>
            </div>

            {/* Right Side - Languages & Social */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <div className="flex items-center bg-white/5 rounded-full px-2 py-1">
                <motion.span
                  className="text-xs font-medium hover:text-luxury-gold-400 transition-colors cursor-pointer px-1"
                  whileHover={{ scale: 1.02 }}
                >
                  AR
                </motion.span>
                <span className="text-luxury-dark-400 text-xs mx-1">|</span>
                <motion.span
                  className="text-luxury-gold-400 font-semibold text-xs px-1"
                  whileHover={{ scale: 1.02 }}
                >
                  EN
                </motion.span>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-2">
                <motion.div
                  className="p-1.5 bg-white/10 hover:bg-blue-500/20 rounded-full transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  <Facebook className="w-3 h-3 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </motion.div>
                <motion.div
                  className="p-1.5 bg-white/10 hover:bg-pink-500/20 rounded-full transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  <Instagram className="w-3 h-3 text-gray-300 group-hover:text-pink-400 transition-colors" />
                </motion.div>
                <motion.div
                  className="p-1.5 bg-white/10 hover:bg-blue-400/20 rounded-full transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  <Twitter className="w-3 h-3 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </motion.div>
                <motion.div
                  className="p-1.5 bg-white/10 hover:bg-red-500/20 rounded-full transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  <Youtube className="w-3 h-3 text-gray-300 group-hover:text-red-400 transition-colors" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white/95 backdrop-blur-xl shadow-luxury border-b border-luxury-dark-100/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold-400 to-luxury-gold-600 rounded-xl flex items-center justify-center shadow-lg">
              <Car className="w-7 h-7 text-black font-bold" />
            </div>
            <div>
              <span className="text-2xl font-bold text-luxury-dark-900">
                LUXURY SUPERCARS
              </span>
              <p className="text-xs text-luxury-dark-600 font-medium">
                Dubai Premium Rental
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8 text-luxury-dark-700 font-medium">
            <a
              href="#home"
              className="hover:text-luxury-gold-600 transition-colors border-b-2 border-transparent hover:border-luxury-gold-600 pb-1"
            >
              Home
            </a>
            <a
              href="#fleet"
              className="hover:text-luxury-gold-600 transition-colors border-b-2 border-transparent hover:border-luxury-gold-600 pb-1"
            >
              Our Fleet
            </a>
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-luxury-gold-600 transition-colors border-b-2 border-transparent hover:border-luxury-gold-600 pb-1">
                <span>Car Types</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a
                    href="#sports"
                    className="block px-4 py-2 text-sm hover:bg-luxury-gold-50 hover:text-luxury-gold-600"
                  >
                    Sports Cars
                  </a>
                  <a
                    href="#luxury"
                    className="block px-4 py-2 text-sm hover:bg-luxury-gold-50 hover:text-luxury-gold-600"
                  >
                    Luxury Cars
                  </a>
                  <a
                    href="#convertible"
                    className="block px-4 py-2 text-sm hover:bg-luxury-gold-50 hover:text-luxury-gold-600"
                  >
                    Convertibles
                  </a>
                  <a
                    href="#electric"
                    className="block px-4 py-2 text-sm hover:bg-luxury-gold-50 hover:text-luxury-gold-600"
                  >
                    Electric Cars
                  </a>
                  <a
                    href="#suv"
                    className="block px-4 py-2 text-sm hover:bg-luxury-gold-50 hover:text-luxury-gold-600"
                  >
                    Luxury SUVs
                  </a>
                </div>
              </div>
            </div>
            <a
              href="#services"
              className="hover:text-luxury-gold-600 transition-colors border-b-2 border-transparent hover:border-luxury-gold-600 pb-1"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-luxury-gold-600 transition-colors border-b-2 border-transparent hover:border-luxury-gold-600 pb-1"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="hover:text-luxury-gold-600 transition-colors border-b-2 border-transparent hover:border-luxury-gold-600 pb-1"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-luxury-dark-700">
              <Shield className="w-4 h-4 text-luxury-gold-600" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <motion.button
              className="bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4 inline mr-2" />
              WhatsApp
            </motion.button>

            <button
              className="lg:hidden text-luxury-dark-700 hover:text-luxury-gold-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-luxury-dark-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a
                href="#home"
                className="block text-luxury-dark-700 hover:text-luxury-gold-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#fleet"
                className="block text-luxury-dark-700 hover:text-luxury-gold-600 transition-colors"
              >
                Our Fleet
              </a>
              <a
                href="#services"
                className="block text-luxury-dark-700 hover:text-luxury-gold-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-luxury-dark-700 hover:text-luxury-gold-600 transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block text-luxury-dark-700 hover:text-luxury-gold-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/17632041/pexels-photo-17632041.jpeg"
            alt="Luxury Lamborghini Supercar"
            className="w-full h-full object-cover scale-110 transition-transform duration-20000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-luxury-dark-900/70 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        {/* Trust Indicators */}
        <div className="absolute top-32 right-8 z-20 hidden xl:flex flex-col space-y-6">
          <motion.div
            className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-luxury-gold-400/20 rounded-full">
                <Star className="w-6 h-6 text-luxury-gold-400 fill-current" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">
                4.9
              </span>
            </div>
            <p className="text-gray-300 text-sm font-medium">Customer Rating</p>
            <p className="text-gray-400 text-xs">2,450+ Reviews</p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-luxury-gold-400/20 rounded-full">
                <Shield className="w-6 h-6 text-luxury-gold-400" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Licensed
              </span>
            </div>
            <p className="text-gray-300 text-sm">& Insured</p>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-luxury-gold-500/20 border border-luxury-gold-500/30 text-luxury-gold-400 px-4 py-2 rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Award className="w-4 h-4" />
              <span>Dubai's #1 Luxury Supercar Rental Since 2018</span>
            </motion.div>

            {/* Main Headline */}
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

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Experience the ultimate luxury with Dubai's most exclusive fleet
              of supercars. From Lamborghini to Bugatti, we deliver
              extraordinary driving experiences.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold-400 mb-1">
                  50+
                </div>
                <div className="text-gray-300 text-sm">Supercars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold-400 mb-1">
                  1000+
                </div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold-400 mb-1">
                  24/7
                </div>
                <div className="text-gray-300 text-sm">Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold-400 mb-1">
                  6+
                </div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.button
                className="group bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-2xl flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Car className="w-5 h-5" />
                <span>Browse Our Fleet</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="group border-2 border-white/30 hover:border-luxury-gold-400 text-white hover:text-luxury-gold-400 px-8 py-4 rounded-xl text-lg font-bold transition-all backdrop-blur-sm flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Video</span>
              </motion.button>
            </motion.div>

            {/* Price Info */}
            <motion.div
              className="mt-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <p className="text-sm">
                Starting from{" "}
                <span className="text-luxury-gold-400 font-bold text-lg">
                  AED 3,700
                </span>{" "}
                per day
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search & Booking Form */}
      <section className="bg-gradient-to-b from-luxury-dark-50 to-white py-12 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8 border border-luxury-dark-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-luxury-dark-900 mb-6 text-center">
              Book Your Dream Supercar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="relative">
                <label className="block text-sm font-semibold text-luxury-dark-700 mb-3">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-gold-600 z-10 pointer-events-none" />
                  <select
                    className="w-full pl-12 pr-4 py-4 border-2 border-luxury-dark-200 rounded-xl focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 transition-all font-medium bg-white appearance-none"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    <option>Dubai Marina</option>
                    <option>Downtown Dubai</option>
                    <option>Dubai International Airport</option>
                    <option>Al Maktoum International Airport</option>
                    <option>Palm Jumeirah</option>
                    <option>Business Bay</option>
                    <option>Jumeirah Beach Residence</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-luxury-dark-700 mb-3">
                  Pickup Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-gold-600 z-10 pointer-events-none" />
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-4 border-2 border-luxury-dark-200 rounded-xl focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 transition-all font-medium relative z-0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-luxury-dark-700 mb-3">
                  Pickup Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-gold-600 z-10 pointer-events-none" />
                  <input
                    type="time"
                    className="w-full pl-12 pr-4 py-4 border-2 border-luxury-dark-200 rounded-xl focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 transition-all font-medium relative z-0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-luxury-dark-700 mb-3">
                  Return Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-gold-600 z-10 pointer-events-none" />
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-4 border-2 border-luxury-dark-200 rounded-xl focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 transition-all font-medium relative z-0"
                  />
                </div>
              </div>

              <div className="flex items-end">
                <motion.button
                  className="w-full bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const fleetSection = document.getElementById("fleet");
                    fleetSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Search className="w-5 h-5" />
                  <span>Search Fleet</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Metrics Block */}
      <section className="py-8 bg-white border-b border-luxury-dark-100">
        <div className="container mx-auto px-4" />
      </section>

      {/* Car Brands Filter */}
      <section className="py-8 bg-luxury-dark-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-luxury-dark-900 mb-4">
              Browse by Brand
            </h3>
            <p className="text-luxury-dark-600">
              Choose from the world's most prestigious automotive brands
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {carBrands.map((brand) => (
              <motion.button
                key={brand.id}
                onClick={() => setActiveCarBrand(brand.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCarBrand === brand.id
                    ? "bg-luxury-gold-500 text-black shadow-lg"
                    : "bg-white text-luxury-dark-700 hover:bg-luxury-gold-50 hover:text-luxury-gold-600 border border-luxury-dark-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {brand.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Fleet Section */}
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
            <div className="w-32 h-1 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-luxury-dark-600 max-w-4xl mx-auto leading-relaxed">
              Discover Dubai's most exclusive collection of supercars and luxury
              vehicles. Each car is meticulously maintained and ready to deliver
              the ultimate driving experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                  {/* Status Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {car.featured && (
                      <div className="bg-luxury-gold-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        car.available
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {car.available ? "Available" : "Reserved"}
                    </div>
                  </div>

                  {/* Heart Icon */}
                  <motion.button
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-5 h-5 text-luxury-dark-600 hover:text-red-400 transition-colors" />
                  </motion.button>

                  {/* Brand Badge */}
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                    <span className="text-sm font-bold text-white capitalize">
                      {car.brand.replace("-", " ")}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-luxury-dark-900 mb-1">
                        {car.name}
                      </h3>
                      <p className="text-luxury-gold-600 font-semibold text-sm">
                        {car.category}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(car.rating)
                              ? "text-luxury-gold-500 fill-current"
                              : "text-luxury-dark-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-luxury-dark-600 ml-1">
                        ({car.rating})
                      </span>
                    </div>
                  </div>

                  <p className="text-luxury-dark-600 text-sm mb-4 leading-relaxed">
                    {car.description}
                  </p>

                  {/* Car Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-luxury-gold-600" />
                      <span className="text-sm font-medium text-luxury-dark-700">
                        {car.power}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Gauge className="w-4 h-4 text-luxury-gold-600" />
                      <span className="text-sm font-medium text-luxury-dark-700">
                        {car.acceleration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-luxury-gold-600" />
                      <span className="text-sm font-medium text-luxury-dark-700">
                        {car.seats} seats
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4 text-luxury-gold-600" />
                      <span className="text-sm font-medium text-luxury-dark-700">
                        {car.transmission}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold bg-gradient-to-r from-luxury-gold-500 to-luxury-gold-700 bg-clip-text text-transparent">
                          AED {car.pricePerDay.toLocaleString()}
                        </span>
                        <span className="text-lg font-medium text-luxury-dark-500">
                          /day
                        </span>
                      </div>
                      <div className="text-sm text-luxury-dark-400 line-through">
                        AED {car.originalPrice.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-gradient-to-r from-green-100 to-green-50 text-green-700 px-3 py-2 rounded-full text-xs font-bold border border-green-200">
                        Save AED {car.originalPrice - car.pricePerDay}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={!car.available}
                    >
                      {car.available ? "Book Now" : "Notify When Available"}
                    </motion.button>
                    <motion.button
                      className="px-6 py-3 border-2 border-luxury-dark-200 hover:border-luxury-gold-500 text-luxury-dark-700 hover:text-luxury-gold-600 rounded-xl transition-all backdrop-blur-sm flex items-center space-x-2"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center space-x-3 mx-auto"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Complete Fleet</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-luxury-dark-50 to-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-dark-900 mb-6">
              Premium Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-luxury-dark-600 max-w-3xl mx-auto">
              Experience unparalleled luxury with our comprehensive range of
              premium services designed for the discerning clientele.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-luxury-dark-100 hover:border-luxury-gold-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-luxury-gold-400 to-luxury-gold-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-10 h-10 text-black" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-luxury-dark-900 mb-4 group-hover:text-luxury-gold-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-luxury-dark-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-luxury-dark-900 mb-6">
                About Luxury Supercars Dubai
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 mb-6 rounded-full"></div>
              <p className="text-lg text-luxury-dark-600 mb-6 leading-relaxed">
                Since 2018, Luxury Supercars Dubai has been the premier
                destination for exotic and luxury car rentals in the UAE. We
                specialize in providing high-end, meticulously maintained
                supercars to discerning customers who demand nothing but the
                finest automotive excellence.
              </p>
              <p className="text-lg text-luxury-dark-600 mb-8 leading-relaxed">
                Our exclusive fleet features the latest models from prestigious
                brands including Lamborghini, Ferrari, McLaren, Bugatti, and
                more. Each vehicle undergoes rigorous inspection and maintenance
                to ensure peak performance and absolute safety.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <motion.div
                  className="bg-gradient-to-br from-luxury-gold-50 to-luxury-gold-100 rounded-2xl p-6 text-center border border-luxury-gold-200"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-luxury-gold-600 to-luxury-gold-700 bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div className="text-sm font-semibold text-luxury-dark-700">
                    Luxury Vehicles
                  </div>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-luxury-gold-50 to-luxury-gold-100 rounded-2xl p-6 text-center border border-luxury-gold-200"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-luxury-gold-600 to-luxury-gold-700 bg-clip-text text-transparent mb-2">
                    1000+
                  </div>
                  <div className="text-sm font-semibold text-luxury-dark-700">
                    Satisfied Customers
                  </div>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-luxury-gold-50 to-luxury-gold-100 rounded-2xl p-6 text-center border border-luxury-gold-200"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-luxury-gold-600 to-luxury-gold-700 bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <div className="text-sm font-semibold text-luxury-dark-700">
                    Customer Support
                  </div>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-luxury-gold-50 to-luxury-gold-100 rounded-2xl p-6 text-center border border-luxury-gold-200"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-luxury-gold-600 to-luxury-gold-700 bg-clip-text text-transparent mb-2">
                    6+
                  </div>
                  <div className="text-sm font-semibold text-luxury-dark-700">
                    Years Experience
                  </div>
                </motion.div>
              </div>
              <motion.button
                className="group bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                src="https://images.pexels.com/photos/17632041/pexels-photo-17632041.jpeg"
                alt="Luxury Supercar Collection"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Unmatched Excellence
                </h3>
                <p className="text-sm opacity-90">
                  Every vehicle in our fleet represents the pinnacle of
                  automotive engineering
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-luxury-dark-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-dark-900 mb-6">
              What Our Clients Say
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-luxury-dark-600 max-w-3xl mx-auto">
              Hear from our satisfied customers about their extraordinary
              experiences with our luxury supercar collection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-luxury-dark-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-10 h-10 text-luxury-gold-400" />
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-luxury-gold-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-luxury-dark-600 leading-relaxed mb-8 italic text-lg">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold-400 to-luxury-gold-600 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-luxury-dark-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-luxury-dark-600 font-medium">
                        {testimonial.location}
                      </p>
                      <p className="text-xs text-luxury-dark-500 mt-1">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-luxury-dark-900 via-black to-luxury-dark-950 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-400/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-luxury-gold-500/20 border border-luxury-gold-500/30 text-luxury-gold-400 px-6 py-3 rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Zap className="w-4 h-4" />
              <span>Book Now & Get Instant Confirmation</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Ready for the
              <br />
              <span className="bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 bg-clip-text text-transparent">
                Ultimate Drive?
              </span>
            </h2>

            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Contact us now to book your dream supercar and experience the
              pinnacle of automotive luxury in Dubai.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <motion.button
                className="group bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp: +971 50 123 4567</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="group bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-6 h-6" />
                <span>Call Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="flex flex-col items-center space-y-2"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-luxury-gold-500/20 rounded-full">
                  <CheckCircle className="w-6 h-6 text-luxury-gold-400" />
                </div>
                <span className="font-semibold">
                  Instant Booking Confirmation
                </span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center space-y-2"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-luxury-gold-500/20 rounded-full">
                  <Shield className="w-6 h-6 text-luxury-gold-400" />
                </div>
                <span className="font-semibold">Fully Insured & Licensed</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center space-y-2"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-luxury-gold-500/20 rounded-full">
                  <ThumbsUp className="w-6 h-6 text-luxury-gold-400" />
                </div>
                <span className="font-semibold">Best Prices Guaranteed</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-luxury-dark-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-luxury-gold-400 to-luxury-gold-600 rounded-xl flex items-center justify-center">
                  <Car className="w-6 h-6 text-black font-bold" />
                </div>
                <span className="text-xl font-bold">LUXURY SUPERCARS</span>
              </div>
              <p className="text-luxury-dark-400 mb-6 leading-relaxed">
                Dubai's premier luxury supercar rental service. Experience the
                ultimate in automotive excellence with our exclusive fleet of
                supercars.
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
              <ul className="space-y-3 text-luxury-dark-400">
                <li>
                  <a
                    href="#home"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#fleet"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Car Categories */}
            <div>
              <h3 className="text-lg font-bold mb-6">Car Categories</h3>
              <ul className="space-y-3 text-luxury-dark-400">
                <li>
                  <a
                    href="#sports"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Sports Cars
                  </a>
                </li>
                <li>
                  <a
                    href="#luxury"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Luxury Cars
                  </a>
                </li>
                <li>
                  <a
                    href="#convertible"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Convertibles
                  </a>
                </li>
                <li>
                  <a
                    href="#electric"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Electric Cars
                  </a>
                </li>
                <li>
                  <a
                    href="#suv"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Luxury SUVs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Info</h3>
              <div className="space-y-4 text-luxury-dark-400">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-luxury-gold-400" />
                  <span>+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-luxury-gold-400" />
                  <span>info@luxurysupercarsdubai.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-luxury-gold-400" />
                  <span>Dubai Marina, Dubai, UAE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-luxury-gold-400" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-luxury-dark-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-luxury-dark-400 text-sm mb-4 md:mb-0">
              © 2024 Luxury Supercars Dubai. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-luxury-dark-400">
              <a
                href="#"
                className="hover:text-luxury-gold-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-luxury-gold-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-luxury-gold-400 transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="hover:text-luxury-gold-400 transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
