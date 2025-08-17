import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
          >
            RL
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="relative group cursor-pointer text-gray-700 hover:text-accent transition-colors duration-300 font-medium"
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-blue-600 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </Link>
            ))}
            
            {/* CV Download Button */}
            <motion.a
              href="/cv.pdf"
              download="Ravindu_Lakshitha_CV.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-accent to-blue-600 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaDownload className="text-sm" />
              <span>Download CV</span>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-700 hover:text-accent transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-xl rounded-2xl mt-4 py-6 border border-gray-100"
          >
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-gray-700 hover:text-accent hover:bg-gray-50 transition-all duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile CV Download Button */}
            <motion.a
              href="/cv.pdf"
              download="Ravindu_Lakshitha_CV.pdf"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-2 mx-6 mt-4 bg-gradient-to-r from-accent to-blue-600 text-white px-4 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaDownload className="text-sm" />
              <span>Download CV</span>
            </motion.a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header; 