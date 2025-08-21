import { motion } from "framer-motion";
import { Zap, Eye, Wind, Settings } from "lucide-react";

const TechnologySection = () => {
  const technologies = [
    {
      id: 1,
      icon: Zap,
      title: "Digital Motor V11",
      description:
        "The fastest, most efficient motor ever created by Dyson. Spins at up to 125,000rpm.",
      features: [
        "High-speed rotation",
        "Lightweight design",
        "Advanced engineering",
      ],
    },
    {
      id: 2,
      icon: Eye,
      title: "Laser Detection",
      description:
        "Precisely-angled laser reveals microscopic particles on hard floors invisible to the naked eye.",
      features: [
        "Microscopic detection",
        "Laser precision",
        "Real-time visibility",
      ],
    },
    {
      id: 3,
      icon: Wind,
      title: "Cyclone Technology",
      description:
        "Powerful centrifugal forces generate up to 100,000g to capture particles as small as 0.3 microns.",
      features: [
        "Centrifugal separation",
        "No filter maintenance",
        "Consistent suction",
      ],
    },
    {
      id: 4,
      icon: Settings,
      title: "Intelligent Sensors",
      description:
        "Advanced algorithms and sensors automatically adjust power and performance for optimal results.",
      features: [
        "Smart adaptation",
        "Automatic optimization",
        "Real-time monitoring",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="technology"
      className="py-20 bg-gradient-to-br from-dyson-grey-50 to-dyson-purple-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-dyson-purple-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-dyson-purple-300 rounded-full blur-2xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dyson-grey-900 mb-6">
            Breakthrough Technology
          </h2>
          <p className="text-xl text-dyson-grey-600 max-w-3xl mx-auto">
            Our engineers don't just improve existing technology – they reinvent
            it. Every innovation solves a real problem that others have ignored.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-dyson-purple-500 to-dyson-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <tech.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-dyson-grey-900 mb-4">
                {tech.title}
              </h3>

              <p className="text-dyson-grey-600 mb-6 leading-relaxed">
                {tech.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center text-sm text-dyson-grey-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-dyson-purple-500 rounded-full mr-3"></div>
                    {feature}
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-dyson-purple-500/5 to-dyson-purple-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Innovation Showcase */}
        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-24 h-24 bg-gradient-to-br from-dyson-purple-500 to-dyson-purple-700 rounded-full flex items-center justify-center mx-auto mb-8"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Settings className="w-12 h-12 text-white" />
          </motion.div>

          <h3 className="text-3xl font-bold text-dyson-grey-900 mb-4">
            1,500+ Engineers. 5,000+ Patents.
          </h3>

          <p className="text-xl text-dyson-grey-600 max-w-2xl mx-auto mb-8">
            Our global team of engineers and scientists work tirelessly to solve
            problems that improve daily life. Every product is the result of
            years of research and innovation.
          </p>

          <motion.button
            className="bg-dyson-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-dyson-purple-700 transition-colors duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Research
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
