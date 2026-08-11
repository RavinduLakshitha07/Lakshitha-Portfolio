import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaSchool,
  FaUniversity,
  FaLanguage,
  FaBullseye,
  FaArrowRight,
} from 'react-icons/fa';
import profilePhoto from '../assets/profile-photo.jpg';

const About = () => {
  return (
    <section
      className="
        relative
        py-28
        px-4
        sm:px-6
        lg:px-8
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="max-w-3xl mb-14"
        >
          <div className="section-label mb-4">
            About Me
          </div>

          <h2
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              tracking-tight
            "
          >
            A developer who
            <span className="gradient-text">
              {' '}
              loves building.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-gray-400
              leading-7
            "
          >
            I'm a passionate IT undergraduate with a strong
            foundation in software development and a drive
            to create innovative solutions.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6">

          {/* =================================================
              PROFILE PHOTO
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              rounded-3xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-5
              sm:p-6
              overflow-hidden
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                -top-32
                -left-32
                w-80
                h-80
                rounded-full
                bg-blue-500/[0.08]
                blur-[90px]
              "
            />

            <div
              className="
                relative
                h-full
                min-h-[430px]
                flex
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                bg-gradient-to-br
                from-blue-500/[0.06]
                via-indigo-500/[0.03]
                to-purple-500/[0.06]
              "
            >
              {/* Decorative circles */}
              <div
                className="
                  absolute
                  w-72
                  h-72
                  rounded-full
                  border
                  border-blue-400/[0.08]
                "
              />

              <div
                className="
                  absolute
                  w-56
                  h-56
                  rounded-full
                  border
                  border-purple-400/[0.08]
                "
              />

              {/* Photo */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  relative
                  z-10
                "
              >
                <div
                  className="
                    absolute
                    -inset-3
                    rounded-[2rem]
                    bg-gradient-to-r
                    from-blue-500
                    via-indigo-500
                    to-purple-600
                    blur-xl
                    opacity-25
                  "
                />

                <div
                  className="
                    relative
                    p-1.5
                    rounded-[2rem]
                    bg-gradient-to-br
                    from-blue-500/40
                    via-indigo-500/30
                    to-purple-500/40
                  "
                >
                  <img
                    src={profilePhoto}
                    alt="Ravindu Lakshitha - Professional Portrait"
                    className="
                      relative
                      w-64
                      h-72
                      sm:w-72
                      sm:h-80
                      object-cover
                      rounded-[1.7rem]
                      shadow-2xl
                    "
                  />
                </div>
              </motion.div>

              {/* Floating availability */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  top-5
                  right-5
                  z-20
                  flex
                  items-center
                  gap-2
                  px-3
                  py-2
                  rounded-xl
                  bg-[#0b1018]/90
                  border
                  border-white/10
                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-emerald-400
                    shadow-lg
                    shadow-emerald-400/30
                  "
                />

                <span className="text-[10px] text-gray-400 font-medium">
                  Open to opportunities
                </span>
              </motion.div>

              {/* Floating developer badge */}
              <motion.div
                animate={{
                  y: [0, 9, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="
                  absolute
                  bottom-5
                  left-5
                  z-20
                  px-3
                  py-2
                  rounded-xl
                  bg-[#0b1018]/90
                  border
                  border-white/10
                  backdrop-blur-xl
                "
              >
                <p className="text-[10px] uppercase tracking-[0.15em] text-gray-600">
                  Focus
                </p>

                <p className="mt-1 text-xs font-semibold text-gray-300">
                  Software Development
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div className="grid sm:grid-cols-2 gap-5">

            {/* Education */}
            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                sm:col-span-2
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                sm:p-7
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-xl
                    bg-blue-500/[0.08]
                    border
                    border-blue-500/10
                    text-blue-400
                  "
                >
                  <FaGraduationCap />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-gray-600">
                    Education
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    Academic Background
                  </h3>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-6">

                {/* University */}
                <div
                  className="
                    group
                    p-5
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-black/10
                    hover:bg-white/[0.035]
                    hover:border-white/[0.12]
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex items-start gap-4">
                    <FaUniversity
                      className="
                        mt-1
                        text-blue-400
                        shrink-0
                      "
                    />

                    <div>
                      <h4 className="font-semibold text-white">
                        BSc Hons in Information Technology
                      </h4>

                      <p className="mt-1 text-sm text-gray-400">
                        SLIIT
                      </p>

                      <span
                        className="
                          inline-block
                          mt-3
                          px-2.5
                          py-1
                          rounded-md
                          bg-blue-500/[0.08]
                          border
                          border-blue-500/10
                          text-[10px]
                          text-blue-400
                        "
                      >
                        Currently pursuing
                      </span>
                    </div>
                  </div>
                </div>

                {/* School */}
                <div
                  className="
                    group
                    p-5
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-black/10
                    hover:bg-white/[0.035]
                    hover:border-white/[0.12]
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex items-start gap-4">
                    <FaSchool
                      className="
                        mt-1
                        text-purple-400
                        shrink-0
                      "
                    />

                    <div>
                      <h4 className="font-semibold text-white">
                        St. Mary's College Kegalle
                      </h4>

                      <p className="mt-1 text-sm text-gray-400">
                        Secondary Education
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                sm:p-7
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-xl
                    bg-purple-500/[0.08]
                    border
                    border-purple-500/10
                    text-purple-400
                  "
                >
                  <FaLanguage />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-gray-600">
                    Languages
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    Communication
                  </h3>
                </div>
              </div>

              <div className="mt-7 space-y-4">

                <LanguageRow
                  language="English"
                />

                <LanguageRow
                  language="Sinhala"
                />

              </div>
            </motion.div>

            {/* Career Objective */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                sm:p-7
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-xl
                    bg-emerald-500/[0.08]
                    border
                    border-emerald-500/10
                    text-emerald-400
                  "
                >
                  <FaBullseye />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-gray-600">
                    Career
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    Objective
                  </h3>
                </div>
              </div>

              <p
                className="
                  mt-6
                  text-sm
                  text-gray-500
                  leading-7
                "
              >
                Eager to gain real-world experience and
                contribute to innovative IT projects while
                developing my skills in a dynamic and
                growth-oriented organization.
              </p>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM HIGHLIGHT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-6
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-5
            p-6
            sm:p-7
            rounded-3xl
            border
            border-blue-500/10
            bg-blue-500/[0.035]
          "
        >
          <div>
            <p className="text-sm font-semibold text-white">
              Passionate about turning ideas into software.
            </p>

            <p className="mt-1 text-sm text-gray-600">
              Always learning, experimenting and improving.
            </p>
          </div>

          <a
            href="#projects"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-blue-400
              hover:text-blue-300
              transition-colors
              shrink-0
            "
          >
            Explore my work

            <FaArrowRight
              className="
                text-xs
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================================
   LANGUAGE ROW
========================================================= */

const LanguageRow = ({ language }) => {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-4
      "
    >
      <div className="flex items-center gap-3">
        <span
          className="
            w-2
            h-2
            rounded-full
            bg-blue-400
          "
        />

        <span className="text-sm font-medium text-gray-300">
          {language}
        </span>
      </div>

      {/* The original portfolio did not specify a proficiency
          level, so we intentionally don't invent one. */}
      <span className="text-[10px] uppercase tracking-[0.12em] text-gray-700">
        Language
      </span>
    </div>
  );
};

export default About;