import React from 'react';
import { motion } from 'framer-motion';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* =========================================================
   PAGE ANIMATION
   ========================================================= */

const pageVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   BACKGROUND ORBS
   ========================================================= */

function BackgroundEffects() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ zIndex: -1 }}
    >
      {/* Blue glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '500px',
          height: '500px',
          top: '-180px',
          left: '-180px',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0) 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          x: [0, 35, 0],
          y: [0, 25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Purple glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '550px',
          height: '550px',
          top: '25%',
          right: '-250px',
          background:
            'radial-gradient(circle, rgba(139,92,246,0.08) 0%, rgba(139,92,246,0) 70%)',
          filter: 'blur(25px)',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Lower blue glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '450px',
          height: '450px',
          bottom: '-220px',
          left: '35%',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(59,130,246,0) 70%)',
          filter: 'blur(30px)',
        }}
        animate={{
          x: [0, 30, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

/* =========================================================
   SUBTLE GRID
   ========================================================= */

function BackgroundGrid() {
  return (
    <div
      className="fixed inset-0 pointer-events-none bg-grid opacity-[0.25]"
      aria-hidden="true"
      style={{
        zIndex: -2,
        maskImage:
          'linear-gradient(to bottom, black 0%, transparent 90%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, black 0%, transparent 90%)',
      }}
    />
  );
}

/* =========================================================
   SCROLL PROGRESS
   ========================================================= */

function ScrollProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress((scrollTop / documentHeight) * 100);
    };

    window.addEventListener('scroll', updateProgress, {
      passive: true,
    });

    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
      style={{
        width: `${progress}%`,
        zIndex: 9999,
      }}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{
        duration: 0.1,
        ease: 'linear',
      }}
    />
  );
}

/* =========================================================
   MAIN APP
   ========================================================= */

function App() {
  return (
    <motion.div
      className="min-h-screen bg-transparent text-white relative"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <ScrollProgress />

      <BackgroundGrid />
      <BackgroundEffects />

      <div className="relative z-10">
        <Header />

        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </motion.div>
  );
}

export default App;