import React from 'react';
import { motion } from 'framer-motion';
import {
  FaMobile,
  FaGlobe,
  FaDatabase,
  FaTasks,
  FaReact,
  FaJava,
  FaFire,
  FaArrowRight,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiJavascript,
} from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: 'Smart City Infrastructure Management System',
      description:
        'A comprehensive full-stack system for managing smart city infrastructure with event and public space management capabilities.',
      features: [
        'Collaborated in a team of 8 to build a full-stack system using MERN stack',
        "Developed 'Event and Public Space Management' module with booking and reporting functionalities",
        'Integrated MongoDB to store and manage event data',
      ],
      technologies: [
        'React',
        'Node.js',
        'MongoDB',
        'Express',
      ],
      icons: [
        FaReact,
        SiMongodb,
        SiJavascript,
      ],
      category: 'Web Application',
      icon: FaGlobe,
      accent: 'blue',
      featured: true,
    },

    {
      title: 'ChoonPan Mobile App',
      description:
        'A full-stack food delivery mobile application with real-time tracking and payment processing capabilities.',
      features: [
        'Developed using Expo, React Native and Firebase with integrated live map navigation',
        'Implemented real-time location tracking for buyers and drivers',
        'Built secure online payment processing with automated order confirmations',
        'Created intuitive ordering system for efficient delivery management',
      ],
      technologies: [
        'React Native',
        'Firebase',
        'Expo',
        'Google Maps API',
      ],
      icons: [
        FaMobile,
        FaFire,
        FaReact,
      ],
      category: 'Mobile Application',
      icon: FaMobile,
      accent: 'orange',
      featured: false,
    },

    {
      title: 'Online Banking System',
      description:
        'A comprehensive banking system with loan application and management features.',
      features: [
        'Created JSP pages and servlet-based workflows for loan application and management',
        'Connected to MySQL and used JDBC for data persistence',
        'Designed responsive UI using CSS and improved user experience',
      ],
      technologies: [
        'Java',
        'JSP',
        'MySQL',
        'JDBC',
        'CSS',
      ],
      icons: [
        FaJava,
        FaDatabase,
        FaGlobe,
      ],
      category: 'Web Application',
      icon: FaGlobe,
      accent: 'green',
      featured: false,
    },

    {
      title: 'Task Manager Mobile App',
      description:
        'An Android task management application with local data storage and intuitive user interface.',
      features: [
        'Developed using Kotlin with clean, intuitive UI for task management',
        'Integrated SQLite database for local data storage and offline functionality',
        'Implemented RecyclerView for efficient task listing and organization',
      ],
      technologies: [
        'Kotlin',
        'Android',
        'SQLite',
        'RecyclerView',
      ],
      icons: [
        FaMobile,
        FaTasks,
        FaDatabase,
      ],
      category: 'Mobile Application',
      icon: FaMobile,
      accent: 'purple',
      featured: false,
    },
  ];

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

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
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-6
            mb-14
          "
        >
          <div>
            <div className="section-label mb-4">
              Selected Work
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
              Things I've
              <span className="gradient-text">
                {' '}
                built.
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
              A selection of projects I've worked on across
              web development, mobile applications and
              full-stack systems.
            </p>
          </div>

          <div
            className="
              hidden
              lg:flex
              items-center
              gap-2
              text-xs
              uppercase
              tracking-[0.15em]
              text-gray-600
            "
          >
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            {projects.length} Projects
          </div>
        </motion.div>

        {/* =====================================================
            FEATURED PROJECT
        ===================================================== */}

        <motion.article
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -5,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-white/[0.09]
            bg-white/[0.025]
            transition-all
            duration-500
            hover:border-blue-400/20
            hover:shadow-2xl
            hover:shadow-blue-500/[0.06]
          "
        >
          <div
            className="
              absolute
              -top-40
              -right-40
              w-96
              h-96
              rounded-full
              bg-blue-500/[0.08]
              blur-[100px]
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-700
              pointer-events-none
            "
          />

          <div
            className="
              relative
              grid
              lg:grid-cols-[1.05fr_0.95fr]
            "
          >

            {/* Project visual */}
            <div
              className="
                relative
                min-h-[340px]
                lg:min-h-[500px]
                overflow-hidden
                bg-gradient-to-br
                from-blue-500/[0.10]
                via-indigo-500/[0.04]
                to-purple-500/[0.08]
              "
            >
              <div className="absolute inset-0 bg-grid opacity-30" />

              {/* Decorative circles */}
              <div
                className="
                  absolute
                  w-72
                  h-72
                  rounded-full
                  border
                  border-blue-400/[0.08]
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                "
              />

              <div
                className="
                  absolute
                  w-52
                  h-52
                  rounded-full
                  border
                  border-indigo-400/[0.08]
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                "
              />

              {/* Mock application */}
              <motion.div
                className="
                  absolute
                  left-[8%]
                  right-[8%]
                  top-[15%]
                  bottom-[15%]
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#0a0e15]/95
                  shadow-2xl
                  overflow-hidden
                "
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                {/* Window bar */}
                <div
                  className="
                    h-10
                    px-4
                    flex
                    items-center
                    gap-2
                    border-b
                    border-white/[0.07]
                  "
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                </div>

                {/* Dashboard */}
                <div className="p-5">
                  <div className="flex gap-4">

                    <div className="w-[24%] space-y-3">
                      <div className="h-4 rounded bg-blue-500/20" />
                      <div className="h-3 rounded bg-white/[0.06]" />
                      <div className="h-3 rounded bg-white/[0.06]" />
                      <div className="h-3 rounded bg-white/[0.06]" />
                      <div className="h-3 rounded bg-white/[0.06]" />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between mb-5">
                        <div className="h-5 w-32 rounded bg-white/[0.08]" />
                        <div className="h-6 w-16 rounded-lg bg-blue-500/20" />
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-20 rounded-xl bg-blue-500/[0.08] border border-blue-500/10" />
                        <div className="h-20 rounded-xl bg-purple-500/[0.08] border border-purple-500/10" />
                        <div className="h-20 rounded-xl bg-cyan-500/[0.08] border border-cyan-500/10" />
                      </div>

                      <div className="mt-4 h-28 rounded-xl bg-white/[0.035] border border-white/[0.06]" />
                    </div>

                  </div>
                </div>
              </motion.div>

              {/* Floating category */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  right-[7%]
                  top-[8%]
                  flex
                  items-center
                  gap-2
                  px-3
                  py-2
                  rounded-xl
                  bg-[#0c111a]/90
                  border
                  border-white/10
                  backdrop-blur-xl
                "
              >
                <FaGlobe className="text-blue-400 text-xs" />

                <span className="text-xs font-semibold text-gray-300">
                  Full Stack
                </span>
              </motion.div>
            </div>

            {/* Project information */}
            <div
              className="
                relative
                flex
                flex-col
                justify-between
                p-7
                sm:p-9
                lg:p-10
              "
            >
              <div>

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
                    <FaGlobe />
                  </div>

                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-[0.18em]
                      text-blue-400
                      font-semibold
                    "
                  >
                    {featuredProject.category}
                  </span>
                </div>

                <h3
                  className="
                    mt-6
                    text-3xl
                    sm:text-4xl
                    font-bold
                    tracking-tight
                    text-white
                  "
                >
                  {featuredProject.title}
                </h3>

                <p
                  className="
                    mt-5
                    text-gray-400
                    leading-7
                  "
                >
                  {featuredProject.description}
                </p>

                {/* Features */}
                <div className="mt-7 space-y-3">
                  {featuredProject.features.map(
                    (feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.08,
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
                          {feature}
                        </span>
                      </motion.div>
                    )
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-7">
                  {featuredProject.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="
                          px-3
                          py-1.5
                          rounded-lg
                          bg-white/[0.04]
                          border
                          border-white/[0.08]
                          text-xs
                          font-medium
                          text-gray-400
                        "
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Technology icons */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-5
                  mt-9
                  pt-6
                  border-t
                  border-white/[0.07]
                "
              >
                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.14em]
                    text-gray-600
                  "
                >
                  Built with
                </span>

                <div className="flex items-center gap-4">
                  {featuredProject.icons.map(
                    (Icon, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          scale: 1.2,
                          y: -3,
                        }}
                        className="
                          text-xl
                          text-gray-600
                          hover:text-blue-400
                          transition-colors
                          duration-300
                        "
                      >
                        <Icon />
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* =====================================================
            OTHER PROJECTS
        ===================================================== */}

        <div className="grid md:grid-cols-2 gap-5 mt-5">
          {otherProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-7
                  sm:p-8
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
                    w-52
                    h-52
                    rounded-full
                    bg-purple-500/[0.07]
                    blur-[70px]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-700
                  "
                />

                <div className="relative">

                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">

                      <div
                        className="
                          flex
                          items-center
                          justify-center
                          w-10
                          h-10
                          rounded-xl
                          bg-white/[0.04]
                          border
                          border-white/[0.07]
                          text-gray-400
                          group-hover:text-white
                          transition-colors
                          duration-300
                        "
                      >
                        <Icon />
                      </div>

                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.16em]
                          text-gray-600
                          font-semibold
                        "
                      >
                        {project.category}
                      </span>
                    </div>

                    <motion.div
                      whileHover={{
                        rotate: 45,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        w-9
                        h-9
                        rounded-full
                        border
                        border-white/[0.08]
                        flex
                        items-center
                        justify-center
                        text-gray-600
                        group-hover:text-white
                        group-hover:border-white/[0.18]
                        transition-colors
                      "
                    >
                      <FaArrowRight size={11} />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-7
                      text-2xl
                      sm:text-3xl
                      font-bold
                      text-white
                      tracking-tight
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-4
                      text-sm
                      text-gray-500
                      leading-6
                    "
                  >
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mt-6 space-y-2.5">
                    {project.features.map(
                      (feature) => (
                        <div
                          key={feature}
                          className="
                            flex
                            items-start
                            gap-3
                          "
                        >
                          <span
                            className="
                              mt-2
                              w-1
                              h-1
                              rounded-full
                              bg-blue-400/70
                              shrink-0
                            "
                          />

                          <span
                            className="
                              text-xs
                              text-gray-600
                              leading-5
                            "
                          >
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map(
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
                          "
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                  {/* Icons */}
                  <div
                    className="
                      flex
                      items-center
                      gap-4
                      mt-7
                      pt-5
                      border-t
                      border-white/[0.06]
                    "
                  >
                    {project.icons.map(
                      (Icon, iconIndex) => (
                        <motion.div
                          key={iconIndex}
                          whileHover={{
                            scale: 1.2,
                            y: -2,
                          }}
                          className="
                            text-lg
                            text-gray-700
                            group-hover:text-gray-500
                            hover:!text-blue-400
                            transition-colors
                            duration-300
                          "
                        >
                          <Icon />
                        </motion.div>
                      )
                    )}

                    <span
                      className="
                        ml-auto
                        text-[10px]
                        uppercase
                        tracking-[0.15em]
                        text-gray-700
                      "
                    >
                      Project
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            CTA
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
          className="
            relative
            overflow-hidden
            mt-10
            rounded-3xl
            border
            border-blue-500/10
            bg-gradient-to-r
            from-blue-500/[0.06]
            via-indigo-500/[0.05]
            to-purple-500/[0.06]
            p-7
            sm:p-9
          "
        >
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-5
            "
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Interested in working together?
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                I'm always open to discussing new
                opportunities and exciting projects.
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{
                x: 4,
              }}
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
              Get in touch

              <FaArrowRight
                className="
                  text-xs
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;