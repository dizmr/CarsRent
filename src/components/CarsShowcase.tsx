import { motion } from "framer-motion";
import { Heart, Zap, Users, Fuel, ArrowRight } from "lucide-react";
import { useState } from "react";

const CarsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Cars", count: 12 },
    { id: "supercar", name: "Supercars", count: 6 },
    { id: "luxury", name: "Luxury", count: 4 },
    { id: "exotic", name: "Exotic", count: 2 },
  ];

  const cars = [
    {
      id: 1,
      name: "Lamborghini Huracán",
      category: "supercar",
      price: 799,
      originalPrice: 899,
      image:
        "https://images.pexels.com/photos/18003058/pexels-photo-18003058.jpeg",
      specs: {
        power: "630 HP",
        speed: "2.5s 0-60",
        seats: 2,
        fuel: "Premium",
      },
      features: ["Carbon Fiber Interior", "All-Wheel Drive", "Sport Mode"],
      badge: "Most Popular",
      availability: "Available Now",
    },
    {
      id: 2,
      name: "Mercedes-AMG GT",
      category: "luxury",
      price: 599,
      originalPrice: 699,
      image:
        "https://images.pexels.com/photos/18837778/pexels-photo-18837778.jpeg",
      specs: {
        power: "577 HP",
        speed: "3.1s 0-60",
        seats: 2,
        fuel: "Premium",
      },
      features: ["Luxury Interior", "Advanced Suspension", "Premium Sound"],
      badge: "New Arrival",
      availability: "Available Tomorrow",
    },
    {
      id: 3,
      name: "BMW M8 Competition",
      category: "luxury",
      price: 699,
      originalPrice: 799,
      image:
        "https://images.pexels.com/photos/11283500/pexels-photo-11283500.jpeg",
      specs: {
        power: "617 HP",
        speed: "3.0s 0-60",
        seats: 4,
        fuel: "Premium",
      },
      features: ["M Performance", "Carbon Brakes", "Adaptive Suspension"],
      badge: "Limited Edition",
      availability: "Available Now",
    },
    {
      id: 4,
      name: "Audi R8 V10",
      category: "supercar",
      price: 899,
      originalPrice: 999,
      image:
        "https://images.pexels.com/photos/1040753/pexels-photo-1040753.jpeg",
      specs: {
        power: "602 HP",
        speed: "3.1s 0-60",
        seats: 2,
        fuel: "Premium",
      },
      features: ["V10 Engine", "Quattro AWD", "Digital Cockpit"],
      badge: "Exclusive",
      availability: "Available in 2 days",
    },
  ];

  const filteredCars =
    activeCategory === "all"
      ? cars
      : cars.filter((car) => car.category === activeCategory);

  return (
    <section
      id="cars"
      className="py-20 bg-gradient-to-b from-black via-luxury-dark-950 to-black"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 bg-clip-text text-transparent">
              Fleet
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Handpicked collection of the world's most prestigious automobiles
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-luxury-gold-500 text-black"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Cars Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          layout
        >
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              className="group bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-luxury-gold-500/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              layout
            >
              {/* Car Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-luxury-gold-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {car.badge}
                </div>

                {/* Heart Icon */}
                <motion.button
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="w-5 h-5 text-white hover:text-red-400 transition-colors" />
                </motion.button>

                {/* Availability */}
                <div className="absolute bottom-4 left-4 bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-sm">
                  {car.availability}
                </div>
              </div>

              {/* Car Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {car.name}
                    </h3>
                    <p className="text-gray-400 capitalize">{car.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-luxury-gold-400">
                      ${car.price}
                      <span className="text-lg text-gray-400">/day</span>
                    </div>
                    <div className="text-sm text-gray-500 line-through">
                      ${car.originalPrice}
                    </div>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Zap className="w-4 h-4 text-luxury-gold-400" />
                    <span className="text-sm">{car.specs.power}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <div className="w-4 h-4 bg-luxury-gold-400 rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-bold">0</span>
                    </div>
                    <span className="text-sm">{car.specs.speed}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Users className="w-4 h-4 text-luxury-gold-400" />
                    <span className="text-sm">{car.specs.seats} seats</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Fuel className="w-4 h-4 text-luxury-gold-400" />
                    <span className="text-sm">{car.specs.fuel}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    className="flex-1 bg-luxury-gold-500 hover:bg-luxury-gold-600 text-black font-semibold py-3 rounded-xl transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Now
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 border border-white/20 hover:border-luxury-gold-500 text-white hover:text-luxury-gold-400 rounded-xl transition-colors duration-200 flex items-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-white/10 hover:bg-luxury-gold-500 hover:text-black text-white border border-white/20 hover:border-luxury-gold-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Cars</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CarsShowcase;
