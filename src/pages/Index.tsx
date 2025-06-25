import { useState } from "react";
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
  ExternalLink,
} from "lucide-react";

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState("Dubai");
  const [favoriteCards, setFavoriteCards] = useState<number[]>([]);

  const toggleFavorite = (carId: number) => {
    setFavoriteCards((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId],
    );
  };

  const cars = [
    {
      id: 1,
      name: "Rolls Royce Cullinan",
      brand: "Rolls Royce",
      image:
        "https://images.pexels.com/photos/18003058/pexels-photo-18003058.jpeg",
      price: 2999,
      originalPrice: 3499,
      passengers: 4,
      transmission: "Auto",
      doors: 4,
      baggage: 3,
      badge: "New Arrival",
      isNew: true,
    },
    {
      id: 2,
      name: "Lamborghini Aventador",
      brand: "Lamborghini",
      image:
        "https://images.pexels.com/photos/18837778/pexels-photo-18837778.jpeg",
      price: 1899,
      originalPrice: 2199,
      passengers: 2,
      transmission: "Auto",
      doors: 2,
      baggage: 1,
      badge: "Most Popular",
      isPopular: true,
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
      isLimited: true,
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
      isPremium: true,
    },
    {
      id: 5,
      name: "Ferrari 488 Spider",
      brand: "Ferrari",
      image:
        "https://images.pexels.com/photos/18003058/pexels-photo-18003058.jpeg",
      price: 2199,
      originalPrice: 2599,
      passengers: 2,
      transmission: "Auto",
      doors: 2,
      baggage: 1,
      badge: "Exclusive",
      isExclusive: true,
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
      isLuxury: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+971 50 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@luxuryrent.ae</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>العربية</span>
            <span>|</span>
            <span>English</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-black font-bold" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              LUXURY DUBAI
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-gray-700">
            <a href="#" className="hover:text-yellow-600 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-yellow-600 transition-colors">
              Fleet
            </a>
            <a href="#" className="hover:text-yellow-600 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-yellow-600 transition-colors">
              Contact
            </a>
          </nav>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors">
            <User className="w-4 h-4 inline mr-2" />
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/18003058/pexels-photo-18003058.jpeg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              LUXURY CAR RENTAL DUBAI
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Looking to rent a luxury car in Dubai? We offer you a wide
              selection of high-end cars for rent.
            </motion.p>
            <motion.button
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-bold transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Rent a Car
            </motion.button>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    <option>Dubai</option>
                    <option>Abu Dhabi</option>
                    <option>Sharjah</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pick-up Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Drop-off Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-end">
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Car Rental Offers in Dubai
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are the best place to rent luxury cars in Dubai. Choose from
              our premium fleet of supercars, sports cars, and luxury vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <motion.div
                key={car.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover"
                  />

                  {/* Badge */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${
                      car.isNew
                        ? "bg-green-500 text-white"
                        : car.isPopular
                          ? "bg-red-500 text-white"
                          : car.isLimited
                            ? "bg-purple-500 text-white"
                            : car.isPremium
                              ? "bg-blue-500 text-white"
                              : car.isExclusive
                                ? "bg-yellow-500 text-black"
                                : "bg-gray-500 text-white"
                    }`}
                  >
                    {car.badge}
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(car.id)}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${favoriteCards.includes(car.id) ? "text-red-500 fill-current" : "text-gray-600"}`}
                    />
                  </button>

                  {/* Brand Logo */}
                  <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg px-2 py-1">
                    <span className="text-xs font-bold text-gray-800">
                      {car.brand}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {car.name}
                  </h3>

                  {/* Car Specs */}
                  <div className="grid grid-cols-4 gap-4 mb-4 text-center">
                    <div className="flex flex-col items-center">
                      <Users className="w-4 h-4 text-gray-500 mb-1" />
                      <span className="text-xs text-gray-600">
                        {car.passengers}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Settings className="w-4 h-4 text-gray-500 mb-1" />
                      <span className="text-xs text-gray-600">
                        {car.transmission}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Car className="w-4 h-4 text-gray-500 mb-1" />
                      <span className="text-xs text-gray-600">
                        {car.doors} doors
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <ExternalLink className="w-4 h-4 text-gray-500 mb-1" />
                      <span className="text-xs text-gray-600">
                        {car.baggage} bags
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        ${car.price}{" "}
                        <span className="text-sm font-normal text-gray-500">
                          /day
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 line-through">
                        ${car.originalPrice}
                      </div>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      WhatsApp
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center">
                      <Phone className="w-3 h-3 mr-1" />
                      Call
                    </button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-3 rounded-lg text-xs font-semibold transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Drive Luxury?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us now and get the best deals on luxury car rentals in Dubai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp: +971 50 123 4567</span>
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-black font-bold" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              LUXURY DUBAI
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Premium luxury car rental service in Dubai, UAE
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-yellow-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-600">
              Terms of Service
            </a>
            <a href="#" className="hover:text-yellow-600">
              Contact
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            © 2024 Luxury Dubai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
