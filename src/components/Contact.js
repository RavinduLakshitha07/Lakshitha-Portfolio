import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaDownload,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:ravindlakshitha121@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactItems = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ravindlakshitha121@gmail.com',
      href: 'mailto:ravindlakshitha121@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+94 76 151 5984',
      href: 'tel:+94761515984',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'ravindu-lakshitha-05865b36b',
      href: 'https://www.linkedin.com/in/ravindu-lakshitha-05865b36b',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'RavinduLakshitha07',
      href: 'https://github.com/RavinduLakshitha07',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Sri Lanka',
      href: null,
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
      {/* Background glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-blue-500/[0.045]
          blur-[140px]
          pointer-events-none
        "
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">

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
            Contact
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
            Let's build
            <span className="gradient-text">
              {' '}
              something.
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
            I'm always interested in hearing about new
            opportunities and exciting projects. Feel free
            to reach out if you'd like to connect.
          </p>
        </motion.div>

        {/* =====================================================
            CONTACT GRID
        ===================================================== */}

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              rounded-3xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-6
              sm:p-8
            "
          >
            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-blue-400
                  font-semibold
                "
              >
                Get in touch
              </p>

              <h3
                className="
                  mt-3
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-white
                "
              >
                Have something in mind?
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  text-gray-500
                  leading-7
                "
              >
                Whether you're looking for a developer,
                want to collaborate on a project or simply
                want to connect, feel free to reach out.
              </p>
            </div>

            {/* Contact information */}
            <div className="mt-8 space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;

                const content = (
                  <motion.div
                    whileHover={{
                      x: 4,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      p-4
                      rounded-2xl
                      border
                      border-white/[0.06]
                      bg-black/10
                      hover:bg-white/[0.045]
                      hover:border-white/[0.12]
                      transition-all
                      duration-300
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        w-11
                        h-11
                        rounded-xl
                        bg-blue-500/[0.08]
                        border
                        border-blue-500/10
                        text-blue-400
                        shrink-0
                        transition-all
                        duration-300
                        group-hover:bg-blue-500/[0.14]
                      "
                    >
                      <Icon size={15} />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.15em]
                          text-gray-600
                        "
                      >
                        {item.label}
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-gray-300
                          truncate
                        "
                      >
                        {item.value}
                      </p>
                    </div>

                    {item.href && (
                      <FaArrowRight
                        className="
                          ml-auto
                          text-[10px]
                          text-gray-700
                          transition-all
                          duration-300
                          group-hover:text-blue-400
                          group-hover:translate-x-1
                        "
                      />
                    )}
                  </motion.div>
                );

                if (!item.href) {
                  return (
                    <div key={item.label}>
                      {content}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith('http')
                        ? '_blank'
                        : undefined
                    }
                    rel={
                      item.href.startsWith('http')
                        ? 'noreferrer'
                        : undefined
                    }
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            {/* =================================================
                AVAILABILITY
            ================================================= */}

            <div
              className="
                mt-7
                pt-6
                border-t
                border-white/[0.07]
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  text-gray-600
                "
              >
                Currently available for
              </p>

              <div className="mt-4 space-y-2.5">
                {[
                  'Internship opportunities',
                  'Freelance projects',
                  'Collaborative development',
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-gray-400
                    "
                  >
                    <span
                      className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-emerald-400
                        shadow-lg
                        shadow-emerald-400/30
                      "
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div
              className="
                flex
                items-center
                gap-3
                mt-7
                pt-6
                border-t
                border-white/[0.07]
              "
            >
              <a
                href="https://github.com/RavinduLakshitha07"
                target="_blank"
                rel="noreferrer"
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
                  bg-white/[0.03]
                  text-gray-500
                  hover:text-white
                  hover:bg-white/[0.07]
                  transition-all
                "
              >
                <FaGithub size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/ravindu-lakshitha-05865b36b"
                target="_blank"
                rel="noreferrer"
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
                  bg-white/[0.03]
                  text-gray-500
                  hover:text-blue-400
                  hover:bg-white/[0.07]
                  transition-all
                "
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE - FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              rounded-3xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-6
              sm:p-8
              lg:p-10
            "
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    text-gray-600
                  "
                >
                  Send a message
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  Start a conversation
                </h3>
              </div>

              <div
                className="
                  hidden
                  sm:flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-xl
                  bg-blue-500/[0.08]
                  border
                  border-blue-500/10
                  text-blue-400
                "
              >
                <FaPaperPlane size={14} />
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">

                <div>
                  <label
                    htmlFor="name"
                    className="
                      block
                      mb-2
                      text-xs
                      font-medium
                      text-gray-500
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="
                      w-full
                      px-4
                      py-3.5
                      rounded-xl
                      bg-black/20
                      border
                      border-white/[0.08]
                      text-sm
                      text-white
                      placeholder:text-gray-700
                      outline-none
                      transition-all
                      duration-300
                      focus:border-blue-500/40
                      focus:bg-white/[0.035]
                      focus:ring-2
                      focus:ring-blue-500/10
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="
                      block
                      mb-2
                      text-xs
                      font-medium
                      text-gray-500
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="
                      w-full
                      px-4
                      py-3.5
                      rounded-xl
                      bg-black/20
                      border
                      border-white/[0.08]
                      text-sm
                      text-white
                      placeholder:text-gray-700
                      outline-none
                      transition-all
                      duration-300
                      focus:border-blue-500/40
                      focus:bg-white/[0.035]
                      focus:ring-2
                      focus:ring-blue-500/10
                    "
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="
                    block
                    mb-2
                    text-xs
                    font-medium
                    text-gray-500
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    bg-black/20
                    border
                    border-white/[0.08]
                    text-sm
                    text-white
                    placeholder:text-gray-700
                    outline-none
                    resize-none
                    transition-all
                    duration-300
                    focus:border-blue-500/40
                    focus:bg-white/[0.035]
                    focus:ring-2
                    focus:ring-blue-500/10
                  "
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{
                  y: -3,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
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
                  hover:shadow-blue-500/25
                  transition-shadow
                  duration-300
                "
              >
                Send Message

                <FaArrowRight
                  className="
                    text-xs
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* =====================================================
            CV DOWNLOAD
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
            delay: 0.15,
          }}
          className="
            mt-6
            rounded-3xl
            border
            border-emerald-500/10
            bg-gradient-to-r
            from-emerald-500/[0.05]
            via-blue-500/[0.04]
            to-indigo-500/[0.05]
            p-6
            sm:p-7
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
              <p className="text-sm font-semibold text-white">
                Want a closer look?
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Download my CV for a detailed overview of my
                skills, experience and qualifications.
              </p>
            </div>

            <motion.a
              href="/cv.pdf"
              download="Ravindu_Lakshitha_CV.pdf"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-5
                py-3
                rounded-xl
                bg-emerald-500
                text-white
                text-sm
                font-semibold
                shadow-lg
                shadow-emerald-500/10
                hover:bg-emerald-400
                transition-colors
                duration-300
                shrink-0
              "
            >
              <FaDownload className="text-xs" />
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            flex
            items-center
            justify-center
            gap-3
            mt-8
            text-xs
            text-gray-600
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
              animate-pulse
            "
          />

          Open to software development opportunities
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;