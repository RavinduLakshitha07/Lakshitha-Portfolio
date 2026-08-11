import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  
} from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Smart City Infrastructure Management System',
      role: 'Full-Stack Developer',
      period: '2024',
      location: 'Academic Project',
      description:
        'Led development of a comprehensive smart city management system with event and public space management capabilities.',
      achievements: [
        'Collaborated in a team of 8 to build a full-stack system using MERN stack',
        "Developed 'Event and Public Space Management' module with booking and reporting functionalities",
        'Integrated MongoDB to store and manage event data',
        'Implemented responsive UI components and user-friendly interfaces',
      ],
      technologies: [
        'React',
        'Node.js',
        'MongoDB',
        'Express',
        'JavaScript',
      ],
    },

    {
      title: 'ChoonPan Mobile App',
      role: 'Mobile App Developer',
      period: '2025',
      location: 'Academic Project',
      description:
        'Developed a full-stack food delivery mobile application with real-time tracking and payment processing.',
      achievements: [
        'Built complete mobile app using Expo, React Native and Firebase',
        'Implemented integrated live map navigation and real-time location tracking',
        'Developed secure online payment processing with automated confirmations',
        'Created intuitive ordering system for efficient delivery management',
      ],
      technologies: [
        'React Native',
        'Firebase',
        'Expo',
        'Google Maps API',
        'JavaScript',
      ],
    },

    {
      title: 'Online Banking System',
      role: 'Backend Developer',
      period: '2023',
      location: 'Academic Project',
      description:
        'Created a comprehensive banking system with loan application and management features.',
      achievements: [
        'Developed JSP pages and servlet-based workflows for loan applications',
        'Connected to MySQL database using JDBC for data persistence',
        'Designed responsive UI using CSS for improved user experience',
        'Implemented secure authentication and authorization systems',
      ],
      technologies: [
        'Java',
        'JSP',
        'MySQL',
        'JDBC',
        'CSS',
        'HTML',
      ],
    },

    {
      title: 'Task Manager Mobile App',
      role: 'Android Developer',
      period: '2023',
      location: 'Personal Project',
      description:
        'Developed an Android task management application with local data storage and intuitive interface.',
      achievements: [
        'Built Android app using Kotlin with clean, intuitive UI design',
        'Integrated SQLite database for local data storage and offline functionality',
        'Implemented RecyclerView for efficient task listing and organization',
        'Added features for adding, updating, and deleting tasks',
      ],
      technologies: [
        'Kotlin',
        'Android',
        'SQLite',
        'RecyclerView',
        'XML',
      ],
    },
  ];

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
          className="max-w-3xl mb-16"
        >
          <div className="section-label mb-4">
            Experience
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
            My journey so
            <span className="gradient-text">
              {' '}
              far.
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
            My journey in software development through
            academic and personal projects, building
            experience across web, mobile and full-stack
            development.
          </p>
        </motion.div>

        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <div className="relative">

          {/* Desktop timeline */}
          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
              amount: 0.05,
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              hidden
              md:block
              absolute
              left-1/2
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-blue-500/60
              via-indigo-500/30
              to-transparent
              origin-top
            "
          />

          {/* Mobile timeline */}
          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
              amount: 0.05,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              md:hidden
              absolute
              left-[20px]
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-blue-500/60
              via-indigo-500/30
              to-transparent
              origin-top
            "
          />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={experience.title}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    md:grid
                    md:grid-cols-2
                    md:gap-16
                  "
                >

                  {/* =================================================
                      TIMELINE NODE
                  ================================================= */}

                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08 + 0.2,
                    }}
                    className="
                      absolute
                      left-0
                      top-8
                      md:left-1/2
                      md:-translate-x-1/2
                      z-20
                      flex
                      items-center
                      justify-center
                      w-[41px]
                      h-[41px]
                      rounded-full
                      bg-[#080b11]
                      border
                      border-blue-500/30
                      shadow-lg
                      shadow-blue-500/10
                    "
                  >
                    <FaBriefcase
                      className="
                        text-blue-400
                        text-sm
                      "
                    />
                  </motion.div>

                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div
                    className={`
                      ${
                        isLeft
                          ? 'md:col-start-1 md:pr-8'
                          : 'md:col-start-2 md:pl-8'
                      }
                      ml-16
                      md:ml-0
                    `}
                  >
                    <motion.article
                      whileHover={{
                        y: -5,
                      }}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/[0.08]
                        bg-white/[0.025]
                        transition-all
                        duration-500
                        hover:bg-white/[0.045]
                        hover:border-white/[0.15]
                        hover:shadow-2xl
                        hover:shadow-black/20
                      "
                    >
                      {/* Glow */}
                      <div
                        className="
                          absolute
                          -right-24
                          -top-24
                          w-56
                          h-56
                          rounded-full
                          bg-blue-500/[0.06]
                          blur-[80px]
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-700
                          pointer-events-none
                        "
                      />

                      <div className="relative p-6 sm:p-7">

                        {/* Top metadata */}
                        <div
                          className="
                            flex
                            flex-wrap
                            items-center
                            gap-3
                          "
                        >
                          <span
                            className="
                              inline-flex
                              items-center
                              gap-2
                              px-3
                              py-1.5
                              rounded-lg
                              bg-blue-500/[0.08]
                              border
                              border-blue-500/10
                              text-[10px]
                              uppercase
                              tracking-[0.15em]
                              font-semibold
                              text-blue-400
                            "
                          >
                            <FaBriefcase size={10} />
                            {experience.role}
                          </span>

                          <span
                            className="
                              flex
                              items-center
                              gap-1.5
                              text-xs
                              text-gray-600
                            "
                          >
                            <FaCalendarAlt size={10} />
                            {experience.period}
                          </span>

                          <span
                            className="
                              flex
                              items-center
                              gap-1.5
                              text-xs
                              text-gray-600
                            "
                          >
                            <FaMapMarkerAlt size={10} />
                            {experience.location}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className="
                            mt-5
                            text-2xl
                            sm:text-3xl
                            font-bold
                            text-white
                            tracking-tight
                          "
                        >
                          {experience.title}
                        </h3>

                        {/* Description */}
                        <p
                          className="
                            mt-4
                            text-sm
                            text-gray-500
                            leading-7
                          "
                        >
                          {experience.description}
                        </p>

                        {/* Divider */}
                        <div
                          className="
                            h-px
                            bg-white/[0.06]
                            my-6
                          "
                        />

                        {/* Achievements */}
                        <div>
                          <p
                            className="
                              text-[10px]
                              uppercase
                              tracking-[0.17em]
                              font-semibold
                              text-gray-600
                            "
                          >
                            Key Achievements
                          </p>

                          <div className="mt-4 space-y-3">
                            {experience.achievements.map(
                              (achievement, achievementIndex) => (
                                <motion.div
                                  key={achievement}
                                  initial={{
                                    opacity: 0,
                                    x: -10,
                                  }}
                                  whileInView={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  viewport={{
                                    once: true,
                                  }}
                                  transition={{
                                    duration: 0.35,
                                    delay:
                                      achievementIndex * 0.06,
                                  }}
                                  className="
                                    flex
                                    items-start
                                    gap-3
                                  "
                                >
                                  <span
                                    className="
                                      mt-2
                                      w-1.5
                                      h-1.5
                                      rounded-full
                                      bg-blue-400
                                      shrink-0
                                    "
                                  />

                                  <span
                                    className="
                                      text-sm
                                      text-gray-500
                                      leading-6
                                    "
                                  >
                                    {achievement}
                                  </span>
                                </motion.div>
                              )
                            )}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mt-7">
                          <p
                            className="
                              text-[10px]
                              uppercase
                              tracking-[0.17em]
                              font-semibold
                              text-gray-600
                              mb-3
                            "
                          >
                            Technologies
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map(
                              (technology) => (
                                <span
                                  key={technology}
                                  className="
                                    px-2.5
                                    py-1
                                    rounded-md
                                    bg-white/[0.035]
                                    border
                                    border-white/[0.06]
                                    text-[11px]
                                    text-gray-500
                                    transition-colors
                                    duration-300
                                    group-hover:text-gray-400
                                  "
                                >
                                  {technology}
                                </span>
                              )
                            )}
                          </div>
                        </div>

                      </div>
                    </motion.article>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            SUMMARY
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-20
            rounded-3xl
            border
            border-white/[0.08]
            bg-white/[0.025]
            p-7
            sm:p-9
          "
        >
          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-8
            "
          >
            <div className="max-w-2xl">
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.17em]
                  text-blue-400
                  font-semibold
                "
              >
                Experience Summary
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  text-gray-500
                  leading-7
                "
              >
                Throughout my academic journey, I've worked
                on diverse projects ranging from web
                applications to mobile apps, gaining
                hands-on experience with modern technologies
                and development practices. Each project has
                helped me develop strong problem-solving
                skills and a deeper understanding of
                full-stack development principles.
              </p>
            </div>

            <div
              className="
                grid
                grid-cols-3
                gap-3
                sm:gap-4
                shrink-0
              "
            >
              <Stat
                value="4+"
                label="Projects"
              />

              <Stat
                value="2"
                label="Mobile Apps"
              />

              <Stat
                value="10+"
                label="Technologies"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

/* =========================================================
   STAT
   ========================================================= */

const Stat = ({ value, label }) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="
        min-w-[90px]
        sm:min-w-[110px]
        p-4
        sm:p-5
        rounded-2xl
        border
        border-white/[0.07]
        bg-black/10
        text-center
      "
    >
      <div
        className="
          text-2xl
          sm:text-3xl
          font-bold
          gradient-text
        "
      >
        {value}
      </div>

      <div
        className="
          mt-1
          text-[10px]
          sm:text-xs
          text-gray-600
          font-medium
        "
      >
        {label}
      </div>
    </motion.div>
  );
};

export default Experience;