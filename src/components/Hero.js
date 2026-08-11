import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaArrowRight,
  FaCode,
  FaReact,
} from 'react-icons/fa';

import profilePhoto from '../assets/profile-photo.jpg';

const Hero = () => {
  const socials = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/RavinduLakshitha07',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ravindu-lakshitha-05865b36b',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:ravindlakshitha121@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      href: 'tel:+94761515984',
    },
  ];

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        px-4
        sm:px-6
        lg:px-8
        pt-28
        pb-20
      "
    >
      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-blue-500/[0.035]
          blur-[130px]
          pointer-events-none
        "
      />

      <motion.div
        className="
          absolute
          -top-32
          -right-32
          w-96
          h-96
          rounded-full
          bg-purple-500/[0.05]
          blur-[100px]
          pointer-events-none
        "
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="max-w-7xl mx-auto w-full relative z-10">

        <div
          className="
            grid
            lg:grid-cols-[1.1fr_0.9fr]
            gap-14
            lg:gap-20
            items-center
          "
        >

          {/* =================================================
              LEFT
          ================================================= */}

          <div className="text-center lg:text-left">

            {/* Availability */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                border
                border-emerald-400/10
                bg-emerald-400/[0.04]
                mb-7
              "
            >
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-emerald-400
                  animate-pulse
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  font-semibold
                  text-emerald-400/80
                "
              >
                Open to internship opportunities
              </span>
            </motion.div>

            {/* Small introduction */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="
                text-sm
                text-gray-500
                font-medium
                mb-4
              "
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-5xl
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
                font-black
                tracking-[-0.04em]
                leading-[0.95]
              "
            >
              <span className="gradient-text">
                Ravindu
              </span>

              <br />

              <span className="text-white">
                Lakshitha
              </span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                mt-7
                flex
                items-center
                justify-center
                lg:justify-start
                gap-3
              "
            >
              <span
                className="
                  w-8
                  h-px
                  bg-gradient-to-r
                  from-blue-400
                  to-purple-500
                "
              />

              <h2
                className="
                  text-lg
                  sm:text-xl
                  font-semibold
                  text-gray-300
                "
              >
                IT Undergraduate
                <span className="text-gray-600">
                  {' '}
                  &
                </span>{' '}
                <span className="text-white">
                  Software Developer
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="
                mt-7
                max-w-2xl
                mx-auto
                lg:mx-0
                text-base
                sm:text-lg
                text-gray-500
                leading-7
              "
            >
              Motivated and detail-oriented IT undergraduate
              seeking an internship opportunity to apply my
              technical knowledge and passion for software
              development in a dynamic and growth-oriented
              organization.
            </motion.p>

            {/* =================================================
                SOCIALS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
              className="
                flex
                items-center
                justify-center
                lg:justify-start
                gap-2
                mt-7
              "
            >
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith('http')
                        ? '_blank'
                        : undefined
                    }
                    rel={
                      social.href.startsWith('http')
                        ? 'noreferrer'
                        : undefined
                    }
                    aria-label={social.label}
                    whileHover={{
                      y: -4,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
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
                      hover:bg-white/[0.07]
                      hover:border-white/[0.15]
                      transition-all
                      duration-300
                    "
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.75,
              }}
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                lg:justify-start
                gap-3
                mt-9
              "
            >
              {/* View work */}
              <Link
                to="projects"
                smooth
                duration={700}
                offset={-80}
                className="cursor-pointer w-full sm:w-auto"
              >
                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    flex
                    items-center
                    justify-center
                    gap-2.5
                    w-full
                    px-6
                    py-3.5
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-500
                    to-indigo-600
                    text-white
                    text-sm
                    font-semibold
                    shadow-lg
                    shadow-blue-500/15
                  "
                >
                  View My Work

                  <FaArrowRight
                    className="
                      text-xs
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </motion.div>
              </Link>

              {/* Contact */}
              <Link
                to="contact"
                smooth
                duration={700}
                offset={-80}
                className="cursor-pointer w-full sm:w-auto"
              >
                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex
                    items-center
                    justify-center
                    w-full
                    px-6
                    py-3.5
                    rounded-xl
                    border
                    border-white/[0.1]
                    bg-white/[0.025]
                    text-gray-300
                    hover:text-white
                    hover:bg-white/[0.06]
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                  "
                >
                  Get In Touch
                </motion.div>
              </Link>

              {/* CV */}
              <motion.a
                href="/cv.pdf"
                download="Ravindu_Lakshitha_CV.pdf"
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  w-full
                  sm:w-auto
                  px-6
                  py-3.5
                  rounded-xl
                  border
                  border-emerald-500/20
                  bg-emerald-500/[0.06]
                  text-emerald-400
                  hover:bg-emerald-500/[0.1]
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                "
              >
                <FaDownload className="text-xs" />
                Download CV
              </motion.a>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT - PROFILE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              justify-center
              lg:justify-end
            "
          >
            <div className="relative">

              {/* Large glow */}
              <div
                className="
                  absolute
                  -inset-8
                  rounded-[3rem]
                  bg-gradient-to-br
                  from-blue-500/15
                  via-indigo-500/10
                  to-purple-500/15
                  blur-3xl
                "
              />

              {/* Rotating ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  absolute
                  -inset-5
                  rounded-[2.5rem]
                  border
                  border-dashed
                  border-blue-400/10
                "
              />

              {/* Photo card */}
              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  relative
                  rounded-[2rem]
                  border
                  border-white/[0.1]
                  bg-white/[0.035]
                  p-2
                  backdrop-blur-sm
                  shadow-2xl
                  shadow-black/30
                "
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[1.6rem]
                  "
                >
                  <img
                    src={profilePhoto}
                    alt="Ravindu Lakshitha - Professional Portrait"
                    className="
                      w-72
                      h-80
                      sm:w-80
                      sm:h-[28rem]
                      lg:w-[23rem]
                      lg:h-[31rem]
                      object-cover
                    "
                  />

                  {/* Image gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/40
                      via-transparent
                      to-transparent
                      pointer-events-none
                    "
                  />
                </div>
              </motion.div>

              {/* =================================================
                  FLOATING CODE CARD
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, -9, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  -left-8
                  top-12
                  hidden
                  sm:flex
                  items-center
                  gap-3
                  px-3
                  py-2.5
                  rounded-xl
                  bg-[#0b1018]/95
                  border
                  border-white/10
                  backdrop-blur-xl
                  shadow-xl
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-8
                    h-8
                    rounded-lg
                    bg-blue-500/[0.1]
                    text-blue-400
                  "
                >
                  <FaCode size={13} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-gray-600">
                    Currently
                  </p>

                  <p className="text-xs font-semibold text-gray-300">
                    Building & Learning
                  </p>
                </div>
              </motion.div>

              {/* =================================================
                  REACT BADGE
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="
                  absolute
                  -right-6
                  bottom-16
                  hidden
                  sm:flex
                  items-center
                  gap-2.5
                  px-3
                  py-2.5
                  rounded-xl
                  bg-[#0b1018]/95
                  border
                  border-white/10
                  backdrop-blur-xl
                  shadow-xl
                "
              >
                <FaReact
                  className="
                    text-cyan-400
                    text-lg
                  "
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-gray-600">
                    Favorite
                  </p>

                  <p className="text-xs font-semibold text-gray-300">
                    React
                  </p>
                </div>
              </motion.div>

              {/* Status dot */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -right-2
                  -top-2
                  w-5
                  h-5
                  rounded-full
                  bg-emerald-400
                  border-4
                  border-[#080b11]
                  shadow-lg
                  shadow-emerald-400/30
                "
              />
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
          className="
            absolute
            bottom-5
            left-1/2
            -translate-x-1/2
            hidden
            sm:flex
            flex-col
            items-center
            gap-2
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-gray-700
            "
          >
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              w-5
              h-8
              rounded-full
              border
              border-white/[0.12]
              flex
              justify-center
              pt-1.5
            "
          >
            <motion.div
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                w-1
                h-1.5
                rounded-full
                bg-gray-500
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;