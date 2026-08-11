import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaDownload,
  FaArrowRight,
} from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        px-4
        sm:px-6
        lg:px-8
        pt-4
      "
    >
      <div
        className={`
          max-w-7xl
          mx-auto
          rounded-2xl
          border
          transition-all
          duration-500
          ${
            scrolled
              ? 'bg-[#080b11]/85 border-white/10 backdrop-blur-xl shadow-2xl shadow-black/20'
              : 'bg-transparent border-transparent'
          }
        `}
      >
        <div
          className="
            flex
            items-center
            justify-between
            px-4
            sm:px-6
            py-3
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="home"
            smooth
            duration={700}
            offset={-80}
            className="cursor-pointer"
          >
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="flex items-center gap-3"
            >
              {/* Logo */}
              <div className="relative">
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
                  <span
                    className="
                      text-white
                      font-black
                      text-sm
                      tracking-tight
                    "
                  >
                    RL
                  </span>
                </div>

                {/* Online indicator */}
                <span
                  className="
                    absolute
                    -right-1
                    -bottom-1
                    w-3
                    h-3
                    rounded-full
                    bg-emerald-400
                    border-2
                    border-[#080b11]
                  "
                />
              </div>

              {/* Name */}
              <div className="hidden sm:block">
                <p
                  className="
                    text-sm
                    font-bold
                    tracking-wide
                    text-white
                  "
                >
                  Ravindu Lakshitha
                </p>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-gray-500
                  "
                >
                  Software Developer
                </p>
              </div>
            </motion.div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy
                smooth
                offset={-90}
                duration={700}
                activeClass="text-white"
                className="
                  relative
                  px-3
                  py-2
                  text-sm
                  font-medium
                  text-gray-400
                  hover:text-white
                  cursor-pointer
                  rounded-lg
                  transition-colors
                  duration-300
                  group
                "
              >
                <span className="relative z-10">
                  {item.name}
                </span>

                {/* Hover background */}
                <span
                  className="
                    absolute
                    inset-0
                    rounded-lg
                    bg-white/[0.04]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                />

                {/* Hover underline */}
                <span
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    bottom-0
                    h-[2px]
                    w-0
                    rounded-full
                    bg-gradient-to-r
                    from-blue-400
                    to-purple-500
                    opacity-0
                    group-hover:w-5
                    group-hover:opacity-100
                    transition-all
                    duration-300
                  "
                />
              </Link>
            ))}
          </nav>

          {/* =================================================
              DOWNLOAD CV
          ================================================= */}

          <div className="hidden lg:block">
            <motion.a
              href="/cv.pdf"
              download="Ravindu_Lakshitha_CV.pdf"
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                relative
                flex
                items-center
                gap-2
                overflow-hidden
                px-4
                py-2.5
                rounded-xl
                bg-white/[0.06]
                border
                border-white/10
                text-white
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:border-blue-400/30
                hover:bg-white/[0.09]
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-blue-500/10
                  via-indigo-500/10
                  to-purple-500/10
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
              />

              <FaDownload
                className="
                  relative
                  z-10
                  text-xs
                  text-blue-400
                "
              />

              <span className="relative z-10">
                Download CV
              </span>

              <FaArrowRight
                className="
                  relative
                  z-10
                  text-[10px]
                  text-gray-500
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.a>
          </div>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <motion.button
            type="button"
            aria-label={
              isOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen((previous) => !previous)}
            whileTap={{
              scale: 0.9,
            }}
            className="
              lg:hidden
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-xl
              bg-white/[0.05]
              border
              border-white/10
              text-gray-300
              hover:text-white
              hover:bg-white/[0.08]
              transition-all
              duration-300
            "
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FaTimes size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FaBars size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                lg:hidden
                overflow-hidden
              "
            >
              <nav className="px-4 pb-4 pt-2">
                <div
                  className="
                    border-t
                    border-white/[0.06]
                    pt-3
                  "
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.3,
                      }}
                    >
                      <Link
                        to={item.to}
                        spy
                        smooth
                        offset={-80}
                        duration={700}
                        onClick={closeMobileMenu}
                        className="
                          flex
                          items-center
                          justify-between
                          px-3
                          py-3
                          rounded-xl
                          text-sm
                          font-medium
                          text-gray-400
                          hover:text-white
                          hover:bg-white/[0.05]
                          cursor-pointer
                          transition-all
                          duration-300
                        "
                      >
                        <span>
                          {item.name}
                        </span>

                        <FaArrowRight
                          className="
                            text-[10px]
                            text-gray-600
                          "
                        />
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile CV */}
                  <motion.a
                    href="/cv.pdf"
                    download="Ravindu_Lakshitha_CV.pdf"
                    onClick={closeMobileMenu}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      w-full
                      mt-3
                      px-4
                      py-3
                      rounded-xl
                      bg-gradient-to-r
                      from-blue-500
                      to-indigo-600
                      text-white
                      text-sm
                      font-semibold
                      shadow-lg
                      shadow-blue-500/20
                    "
                  >
                    <FaDownload className="text-xs" />
                    Download CV
                  </motion.a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;