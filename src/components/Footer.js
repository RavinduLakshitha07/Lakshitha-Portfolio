import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-4 sm:px-6 lg:px-8 pb-8 pt-10">
      <div className="max-w-7xl mx-auto">

        {/* Top divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Brand */}
          <div>
            <Link
              to="home"
              smooth
              duration={700}
              offset={-80}
              className="cursor-pointer"
            >
              <motion.div
                whileHover={{ x: 3 }}
                className="inline-flex items-center gap-3"
              >
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-xl
                    bg-gradient-to-br
                    from-blue-500
                    via-indigo-500
                    to-purple-600
                    shadow-lg
                    shadow-blue-500/20
                  "
                >
                  <span className="text-white font-black text-sm">
                    RL
                  </span>
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Ravindu Lakshitha
                  </p>

                  <p className="text-[10px] uppercase tracking-[0.16em] text-gray-600">
                    Software Developer
                  </p>
                </div>
              </motion.div>
            </Link>

            <p className="mt-4 max-w-sm text-sm text-gray-600 leading-6">
              Building modern digital experiences through
              code, creativity and continuous learning.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {[
              ['Home', 'home'],
              ['About', 'about'],
              ['Skills', 'skills'],
              ['Projects', 'projects'],
              ['Experience', 'experience'],
              ['Contact', 'contact'],
            ].map(([label, target]) => (
              <Link
                key={target}
                to={target}
                smooth
                duration={700}
                offset={-80}
                className="
                  text-xs
                  font-medium
                  text-gray-600
                  hover:text-white
                  cursor-pointer
                  transition-colors
                  duration-300
                "
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social + back to top */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/RavinduLakshitha07"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
              className="
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                text-gray-500
                hover:text-white
                hover:bg-white/[0.06]
                transition-all
                duration-300
              "
            >
              <FaGithub size={15} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
              className="
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                text-gray-500
                hover:text-blue-400
                hover:bg-white/[0.06]
                transition-all
                duration-300
              "
            >
              <FaLinkedin size={15} />
            </motion.a>

            <Link
              to="home"
              smooth
              duration={700}
              offset={-80}
              aria-label="Back to top"
              className="cursor-pointer"
            >
              <motion.div
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-xl
                  bg-white/[0.06]
                  border
                  border-white/[0.1]
                  text-gray-400
                  hover:text-white
                  hover:bg-white/[0.1]
                  transition-all
                  duration-300
                "
              >
                <FaArrowUp size={13} />
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-3
            pt-6
            border-t
            border-white/[0.06]
          "
        >
          <p className="text-[11px] text-gray-700">
            © {currentYear} Ravindu Lakshitha. All rights reserved.
          </p>

          <p className="text-[11px] text-gray-700">
            Designed & built with React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;