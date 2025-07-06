import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Crown, Shield, Phone } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Cars", href: "#cars" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-luxury-gold-100"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-luxury-gold-400 to-luxury-gold-600 rounded-full flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-600 to-luxury-gold-800 bg-clip-text text-transparent">
              LUXCAR
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-luxury-dark-700 hover:text-luxury-gold-600 transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-luxury-dark-600">
              <Shield className="w-4 h-4 text-luxury-gold-600" />
              <span className="text-sm font-medium">Trusted Company</span>
            </div>
            <motion.button
              className="bg-luxury-gold-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-luxury-gold-700 transition-colors duration-200 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open("https://t.me/vivawinsupport", "_blank")
              }
            >
              <MessageCircle className="w-4 h-4" />
              <span>Telegram</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-luxury-dark-700 hover:text-luxury-gold-600 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
