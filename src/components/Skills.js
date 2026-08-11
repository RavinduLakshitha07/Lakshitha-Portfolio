import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaFigma,
} from 'react-icons/fa';
import {
  SiFlutter,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiGithub,
} from 'react-icons/si';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      description: 'Building responsive and interactive interfaces.',
      skills: [
        {
          name: 'React',
          icon: FaReact,
          color: 'text-cyan-400',
        },
        {
          name: 'JavaScript',
          icon: FaJs,
          color: 'text-yellow-400',
        },
        {
          name: 'TypeScript',
          icon: SiTypescript,
          color: 'text-blue-400',
        },
        {
          name: 'HTML5',
          icon: FaHtml5,
          color: 'text-orange-500',
        },
        {
          name: 'CSS3',
          icon: FaCss3Alt,
          color: 'text-blue-500',
        },
        {
          name: 'Tailwind CSS',
          icon: SiTailwindcss,
          color: 'text-cyan-300',
        },
      ],
    },

    {
      title: 'Mobile',
      description: 'Creating practical cross-platform applications.',
      skills: [
        {
          name: 'Flutter',
          icon: SiFlutter,
          color: 'text-cyan-400',
        },
        {
          name: 'Dart',
          icon: SiFlutter,
          color: 'text-blue-400',
        },
        {
          name: 'React Native',
          icon: FaReact,
          color: 'text-blue-400',
        },
      ],
    },

    {
      title: 'Backend',
      description: 'Developing APIs and application services.',
      skills: [
        {
          name: 'Node.js',
          icon: FaNodeJs,
          color: 'text-green-500',
        },
        {
          name: 'Express',
          icon: SiExpress,
          color: 'text-gray-200',
        },
        {
          name: 'Python',
          icon: FaPython,
          color: 'text-yellow-400',
        },
        {
          name: 'Java',
          icon: FaJava,
          color: 'text-red-400',
        },
      ],
    },

    {
      title: 'Database & Cloud',
      description: 'Working with data, services and cloud platforms.',
      skills: [
        {
          name: 'Firebase',
          icon: SiFirebase,
          color: 'text-yellow-400',
        },
        {
          name: 'MongoDB',
          icon: SiMongodb,
          color: 'text-green-400',
        },
        {
          name: 'MySQL',
          icon: SiMysql,
          color: 'text-blue-300',
        },
      ],
    },

    {
      title: 'Tools & Workflow',
      description: 'Tools I use to build and manage projects.',
      skills: [
        {
          name: 'Git',
          icon: FaGitAlt,
          color: 'text-orange-500',
        },
        {
          name: 'GitHub',
          icon: SiGithub,
          color: 'text-white',
        },
        {
          name: 'Docker',
          icon: FaDocker,
          color: 'text-blue-400',
        },
        {
          name: 'Postman',
          icon: SiPostman,
          color: 'text-orange-400',
        },
        {
          name: 'Figma',
          icon: FaFigma,
          color: 'text-pink-400',
        },
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
          className="max-w-3xl mb-14"
        >
          <div className="section-label mb-4">
            Skills & Technologies
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
            Tools I use to
            <span className="gradient-text">
              {' '}
              build things.
            </span>
          </h2>

          <p className="mt-5 text-gray-400 leading-7 max-w-2xl">
            A collection of technologies and tools I use while
            developing web applications, mobile applications
            and backend systems.
          </p>
        </motion.div>

        {/* =====================================================
            SKILL GROUPS
        ===================================================== */}

        <div className="space-y-5">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: groupIndex * 0.08,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                sm:p-7
                lg:p-8
                transition-all
                duration-500
                hover:bg-white/[0.04]
                hover:border-white/[0.13]
              "
            >
              {/* Background glow */}
              <div
                className="
                  absolute
                  -right-32
                  -top-32
                  w-64
                  h-64
                  rounded-full
                  bg-blue-500/[0.035]
                  blur-[80px]
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
                  flex
                  flex-col
                  lg:flex-row
                  lg:items-center
                  gap-7
                "
              >
                {/* Group information */}
                <div className="lg:w-[250px] shrink-0">
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-blue-400
                        shadow-lg
                        shadow-blue-400/40
                      "
                    />

                    <h3 className="text-xl font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-sm text-gray-500 leading-6">
                    {group.description}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="
                    hidden
                    lg:block
                    w-px
                    self-stretch
                    bg-white/[0.07]
                  "
                />

                {/* Technologies */}
                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                    flex-1
                  "
                >
                  {group.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.4,
                          delay:
                            groupIndex * 0.08 +
                            skillIndex * 0.04,
                        }}
                        whileHover={{
                          y: -4,
                          scale: 1.03,
                        }}
                        className="
                          group/skill
                          flex
                          items-center
                          gap-2.5
                          px-4
                          py-3
                          rounded-xl
                          bg-black/20
                          border
                          border-white/[0.07]
                          hover:border-white/[0.15]
                          hover:bg-white/[0.06]
                          transition-all
                          duration-300
                          cursor-default
                        "
                      >
                        <Icon
                          className={`
                            text-lg
                            ${skill.color}
                            transition-transform
                            duration-300
                            group-hover/skill:scale-110
                          `}
                        />

                        <span
                          className="
                            text-sm
                            font-medium
                            text-gray-400
                            group-hover/skill:text-white
                            transition-colors
                            duration-300
                          "
                        >
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
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
            delay: 0.2,
          }}
          className="
            relative
            mt-8
            overflow-hidden
            rounded-3xl
            border
            border-blue-500/10
            bg-gradient-to-r
            from-blue-500/[0.06]
            via-indigo-500/[0.04]
            to-purple-500/[0.06]
            px-6
            py-7
            sm:px-8
            sm:py-8
          "
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <p className="text-sm font-semibold text-white">
                Always learning. Always building.
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Technology changes quickly — and I enjoy keeping up.
              </p>
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-xs
                uppercase
                tracking-[0.15em]
                text-blue-400
              "
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;