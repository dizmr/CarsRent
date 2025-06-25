import { motion } from "framer-motion";
import { Heart, Zap, Users, Fuel, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

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
      description: "An all-electric five-door liftback sedan produced by Tesla, offering excellent range and performance.",
      image: "/cars/tesla.jpg",
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
      description: "A plug-in hybrid sports car with futuristic design and impressive efficiency.",
      image: "/cars/bmw.jpg",
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
      description: "Audi's first fully electric SUV that combines luxury with cutting-edge EV technology.",
      image: "/cars/audi.jpg",
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
      description: "A high-performance electric car with exceptional handling and sleek styling.",
      image: "/cars/porsche.jpg",
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
      description: "An electric SUV with the soul of a Mustang, blending performance and practicality.",
      image: "/cars/mustang.jpg",
      rating: 4.5,
      power: "480 HP",
      speed: "3.5s 0-60",
      seats: 5,
      fuel: "Electric",
      price: 599,
      originalPrice: 699,
      badge: "Sporty",
      availability: "Available Now",
    },
    {
      name: "Lamborghini Huracán",
      category: "supercar",
      description: "A powerful V10 supercar that combines luxury, speed, and aggressive styling.",
      image: "/cars/lamborghini.jpg",
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
      description: "A luxury performance car with elegant design and thrilling performance.",
      image: "/cars/mercedes.jpg",
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
      description: "A premium sports coupe offering raw power, refined luxury, and advanced tech.",
      image: "/cars/m8.jpg",
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
      description: "A sleek, high-performance machine with a naturally aspirated V10 engine.",
      image: "/cars/r8.jpg",
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
    <section className="py-20 bg-gradient-to-b from-black via-luxury-dark-950 to-black">
      <div className="container mx-auto px-6">
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
            Our <span className="bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 bg-clip-text text-transparent">Fleet</span>
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

        <motion.div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeCategory === category.id
                  ? "bg-luxury-gold-500 text-black"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-luxury-gold-500/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={car.image} alt={car.name} layout="fill" objectFit="cover" className="group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-luxury-gold-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {car.badge}
                </div>
                <motion.button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Heart className="w-5 h-5 text-white hover:text-red-400 transition-colors" />
                </motion.button>
                <div className="absolute bottom-4 left-4 bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-sm">
                  {car.availability}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{car.name}</h3>
                <p className="text-gray-400 italic text-sm mb-3">{car.description}</p>
                <p className="text-gray-400 capitalize mb-2">{car.category}</p>
                <div className="grid grid-cols-2 gap-4 mb-4 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-luxury-gold-400" />
                    <span className="text-sm">{car.power}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-luxury-gold-400" />
                    <span className="text-sm">{car.seats} seats</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="w-4 h-4 text-luxury-gold-400" />
                    <span className="text-sm">{car.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-luxury-gold-400 rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-bold">0</span>
                    </div>
                    <span className="text-sm">{car.speed}</span>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 mr-2">{"\u2605".repeat(Math.floor(car.rating))}</span>
                  <span className="text-sm text-gray-400">{car.rating} / 5</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold text-luxury-gold-400">
                    ${car.price} <span className="text-sm text-gray-400">/day</span>
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    ${car.originalPrice}
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <motion.button className="flex-1 bg-luxury-gold-500 hover:bg-luxury-gold-600 text-black font-semibold py-3 rounded-xl transition-colors duration-200">
                    Book Now
                  </motion.button>
                  <motion.button className="px-6 py-3 border border-white/20 hover:border-luxury-gold-500 text-white hover:text-luxury-gold-400 rounded-xl transition-colors duration-200 flex items-center space-x-2">
                    <span>Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CarsShowcase;

