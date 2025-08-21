import { motion } from "framer-motion";
import { Heart, Zap, Users, Fuel, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

const CarsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Cars" },
    { id: "supercar", name: "Supercars" },
    { id: "luxury", name: "Luxury" },
    { id: "exotic", name: "Exotic" },
  ];

  const cars = [
    {
      name: "Tesla Model S",
      category: "luxury",
      description:
        "An all-electric five-door liftback sedan produced by Tesla, offering excellent range and performance.",
      image:
        "https://images.pexels.com/photos/28576666/pexels-photo-28576666.jpeg",
      rating: 4.9,
      power: "670 HP",
      speed: "3.1s 0-60",
      seats: 5,
      fuel: "Electric",
      price: 799,
      originalPrice: 899,
      badge: "Popular",
      availability: "Available Now",
    },
    {
      name: "BMW i8",
      category: "exotic",
      description:
        "A plug-in hybrid sports car with futuristic design and impressive efficiency.",
      image:
        "https://images.pexels.com/photos/20397056/pexels-photo-20397056.jpeg",
      rating: 4.7,
      power: "369 HP",
      speed: "4.2s 0-60",
      seats: 4,
      fuel: "Hybrid",
      price: 699,
      originalPrice: 799,
      badge: "Limited",
      availability: "Available Soon",
    },
    {
      name: "Audi e-tron",
      category: "luxury",
      description:
        "Audi's first fully electric SUV that combines luxury with cutting-edge EV technology.",
      image:
        "https://images.pexels.com/photos/28751639/pexels-photo-28751639.jpeg",
      rating: 4.6,
      power: "402 HP",
      speed: "5.5s 0-60",
      seats: 5,
      fuel: "Electric",
      price: 649,
      originalPrice: 749,
      badge: "Eco-Friendly",
      availability: "Available Now",
    },
    {
      name: "Porsche Taycan",
      category: "exotic",
      description:
        "A high-performance electric car with exceptional handling and sleek styling.",
      image:
        "https://images.pexels.com/photos/13606349/pexels-photo-13606349.jpeg",
      rating: 4.8,
      power: "750 HP",
      speed: "2.6s 0-60",
      seats: 4,
      fuel: "Electric",
      price: 999,
      originalPrice: 1099,
      badge: "Performance",
      availability: "Available Tomorrow",
    },
    {
      name: "Ford Mustang Mach-E",
      category: "luxury",
      description:
        "An electric SUV with the soul of a Mustang, blending performance and practicality.",
      image:
        "https://images.pexels.com/photos/18845908/pexels-photo-18845908.jpeg",
      rating: 4.5,
      power: "480 HP",
      speed: "3.5s 0-60",
      seats: 5,
      fuel: "Electric",
      price: 749,
      originalPrice: 849,
      badge: "Sporty",
      availability: "Available Now",
    },
    {
      name: "Lamborghini Huracán",
      category: "supercar",
      description:
        "A powerful V10 supercar that combines luxury, speed, and aggressive styling.",
      image:
        "https://images.pexels.com/photos/10804347/pexels-photo-10804347.jpeg",
      rating: 4.9,
      power: "630 HP",
      speed: "2.5s 0-60",
      seats: 2,
      fuel: "Premium",
      price: 1199,
      originalPrice: 1299,
      badge: "Hot",
      availability: "Available Now",
    },
    {
      name: "Mercedes-AMG GT",
      category: "luxury",
      description:
        "A luxury performance car with elegant design and thrilling performance.",
      image: "https://images.pexels.com/photos/952338/pexels-photo-952338.jpeg",
      rating: 4.8,
      power: "577 HP",
      speed: "3.1s 0-60",
      seats: 2,
      fuel: "Premium",
      price: 899,
      originalPrice: 999,
      badge: "Elegant",
      availability: "Available Soon",
    },
    {
      name: "BMW M8 Competition",
      category: "luxury",
      description:
        "A premium sports coupe offering raw power, refined luxury, and advanced tech.",
      image:
        "https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg",
      rating: 4.7,
      power: "617 HP",
      speed: "3.0s 0-60",
      seats: 4,
      fuel: "Premium",
      price: 879,
      originalPrice: 979,
      badge: "Luxury",
      availability: "Available Now",
    },
    {
      name: "Audi R8 V10",
      category: "supercar",
      description:
        "A sleek, high-performance machine with a naturally aspirated V10 engine.",
      image:
        "https://images.pexels.com/photos/30965480/pexels-photo-30965480.jpeg",
      rating: 4.8,
      power: "602 HP",
      speed: "3.1s 0-60",
      seats: 2,
      fuel: "Premium",
      price: 1099,
      originalPrice: 1199,
      badge: "Speed",
      availability: "Available in 2 days",
    },
  ];

  const filteredCars =
    activeCategory === "all"
      ? cars
      : cars.filter((car) => car.category === activeCategory);

  return (
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
            Our{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Fleet
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Handpicked collection of the world's most prestigious automobiles
          </p>
        </motion.div>

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
                  ? "bg-yellow-500 text-black shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredCars.map((car, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              layout
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Badge */}
                <div
                  className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                    car.badge === "Popular"
                      ? "bg-red-500 text-white"
                      : car.badge === "Limited"
                        ? "bg-purple-500 text-white"
                        : car.badge === "Eco-Friendly"
                          ? "bg-green-500 text-white"
                          : car.badge === "Performance"
                            ? "bg-blue-500 text-white"
                            : car.badge === "Sporty"
                              ? "bg-orange-500 text-white"
                              : car.badge === "Hot"
                                ? "bg-red-600 text-white"
                                : car.badge === "Elegant"
                                  ? "bg-indigo-500 text-white"
                                  : car.badge === "Luxury"
                                    ? "bg-purple-600 text-white"
                                    : car.badge === "Speed"
                                      ? "bg-yellow-500 text-black"
                                      : "bg-gray-500 text-white"
                  }`}
                >
                  {car.badge}
                </div>

                {/* Heart Icon */}
                <motion.button
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-400 transition-colors" />
                </motion.button>

                {/* Availability */}
                <div className="absolute bottom-4 left-4 bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-sm">
                  {car.availability}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {car.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {car.description}
                </p>
                <p className="text-yellow-600 capitalize font-semibold mb-4">
                  {car.category}
                </p>

                {/* Car Specs */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium">{car.power}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">0</span>
                    </div>
                    <span className="text-sm font-medium">{car.speed}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium">
                      {car.seats} seats
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium">{car.fuel}</span>
                  </div>
                </div>

                {/* Rating Panel - Made fully visible */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(car.rating)
                                ? "text-yellow-500 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-gray-900">
                        {car.rating}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      Customer Rating
                    </span>
                  </div>
                </div>

                {/* Price */}
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
                  <div className="text-right">
                    <div className="text-sm text-green-600 font-semibold">
                      Save ${car.originalPrice - car.price}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-xl transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Now
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 border border-gray-300 hover:border-yellow-500 text-gray-700 hover:text-yellow-600 rounded-xl transition-colors duration-200 flex items-center space-x-2"
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
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
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
