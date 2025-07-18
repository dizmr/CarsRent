import { motion } from "framer-motion";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "V15 Detect",
      category: "Cordless Vacuum",
      description:
        "Our most powerful, intelligent cordless vacuum. Reveals microscopic dust with laser technology.",
      image:
        "https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg",
      features: [
        "Laser detection",
        "60 minutes runtime",
        "Advanced filtration",
      ],
      price: "From $749",
    },
    {
      id: 2,
      name: "Pure Cool",
      category: "Air Purifier",
      description:
        "Purifies and cools the whole room. Captures 99.97% of particles as small as 0.3 microns.",
      image:
        "https://images.pexels.com/photos/2123430/pexels-photo-2123430.jpeg",
      features: ["360° filtration", "App control", "Air quality monitoring"],
      price: "From $399",
    },
    {
      id: 3,
      name: "Supersonic",
      category: "Hair Dryer",
      description:
        "Fast drying with no extreme heat. Engineered for different hair types with intelligent heat control.",
      image:
        "https://images.pexels.com/photos/9428773/pexels-photo-9428773.jpeg",
      features: ["Heat protection", "Fast drying", "Multiple attachments"],
      price: "From $429",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dyson-grey-900 mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-dyson-grey-600 max-w-2xl mx-auto">
            Discover our latest innovations designed to solve real problems with
            uncompromising performance.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-dyson-grey-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm font-semibold text-dyson-purple-600 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-bold text-dyson-grey-900 mt-1">
                    {product.name}
                  </h3>
                </div>

                <p className="text-dyson-grey-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-dyson-grey-500 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-dyson-purple-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-dyson-grey-900">
                    {product.price}
                  </span>
                  <motion.button
                    className="bg-dyson-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-dyson-purple-700 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-dyson-purple-600/5 to-dyson-purple-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Products Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="text-dyson-purple-600 font-semibold text-lg hover:text-dyson-purple-700 transition-colors duration-200 border-b-2 border-dyson-purple-600 hover:border-dyson-purple-700"
            whileHover={{ y: -2 }}
          >
            View All Products →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
