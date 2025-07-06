import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    products: [
      "Cordless Vacuums",
      "Corded Vacuums",
      "Air Purifiers",
      "Hair Care",
      "Lighting",
      "Hand Dryers",
    ],
    support: [
      "Help Center",
      "User Manuals",
      "Warranty",
      "Parts & Accessories",
      "Repair Services",
      "Contact Support",
    ],
    company: [
      "About Dyson",
      "Careers",
      "Dyson Institute",
      "Research",
      "Newsroom",
      "Investor Relations",
    ],
  };

  const socialLinks = [
    {
      icon: MessageCircle,
      href: "https://t.me/vivawinsupport",
      label: "Telegram",
    },
  ];

  const contactInfo = [
    { icon: Mail, text: "info@luxurysupercarsdubai.com", label: "Email" },
    { icon: MapPin, text: "Dubai Marina, UAE", label: "Address" },
  ];

  return (
    <footer
      id="support"
      className="bg-dyson-grey-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-dyson-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-dyson-purple-400 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-3xl font-bold mb-4 text-dyson-purple-400">
                DYSON
              </h3>
              <p className="text-dyson-grey-300 mb-6 leading-relaxed">
                Engineering the future with breakthrough technology that solves
                real problems.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center text-dyson-grey-400 hover:text-dyson-purple-400 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <contact.icon className="w-4 h-4 mr-3" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Products Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="text-dyson-grey-400 hover:text-dyson-purple-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="text-dyson-grey-400 hover:text-dyson-purple-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="text-dyson-grey-400 hover:text-dyson-purple-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="border-t border-dyson-grey-800 py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-dyson-grey-400 mb-6">
              Get the latest news about our innovations and product launches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-dyson-grey-800 border border-dyson-grey-700 rounded-full px-6 py-3 text-white placeholder-dyson-grey-500 focus:outline-none focus:border-dyson-purple-500 transition-colors duration-200"
              />
              <motion.button
                className="bg-dyson-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-dyson-purple-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-dyson-grey-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-6 mb-4 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-dyson-grey-800 rounded-full flex items-center justify-center text-dyson-grey-400 hover:text-dyson-purple-400 hover:bg-dyson-grey-700 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="text-dyson-grey-500 text-sm text-center md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>© 2024 Dyson Ltd. All rights reserved.</p>
              <div className="mt-2 space-x-4">
                <a
                  href="#"
                  className="hover:text-dyson-purple-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-dyson-purple-400 transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-dyson-purple-400 transition-colors duration-200"
                >
                  Cookies
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
