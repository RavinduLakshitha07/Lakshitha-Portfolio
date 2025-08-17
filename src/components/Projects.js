import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMobile, 
  FaGlobe, 
  FaDatabase,
  FaTasks,
  FaReact,
  FaJava,
  FaFire
} from 'react-icons/fa';
import { SiMongodb, SiJavascript } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: "Smart City Infrastructure Management System",
      description: "A comprehensive full-stack system for managing smart city infrastructure with event and public space management capabilities.",
      features: [
        "Collaborated in a team of 8 to build a full-stack system using MERN stack",
        "Developed 'Event and Public Space Management' module with booking and reporting functionalities",
        "Integrated MongoDB to store and manage event data"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      icons: [FaReact, SiMongodb, SiJavascript],
      category: "Web Application",
      icon: FaGlobe,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "ChoonPan Mobile App",
      description: "A full-stack food delivery mobile application with real-time tracking and payment processing capabilities.",
      features: [
        "Developed using Expo, React Native and Firebase with integrated live map navigation",
        "Implemented real-time location tracking for buyers and drivers",
        "Built secure online payment processing with automated order confirmations",
        "Created intuitive ordering system for efficient delivery management"
      ],
      technologies: ["React Native", "Firebase", "Expo", "Google Maps API"],
      icons: [FaMobile, FaFire, FaReact],
      category: "Mobile Application",
      icon: FaMobile,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Online Banking System",
      description: "A comprehensive banking system with loan application and management features.",
      features: [
        "Created JSP pages and servlet-based workflows for loan application and management",
        "Connected to MySQL and used JDBC for data persistence",
        "Designed responsive UI using CSS and improved user experience"
      ],
      technologies: ["Java", "JSP", "MySQL", "JDBC", "CSS"],
      icons: [FaJava, FaDatabase, FaGlobe],
      category: "Web Application",
      icon: FaGlobe,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Task Manager Mobile App",
      description: "An Android task management application with local data storage and intuitive user interface.",
      features: [
        "Developed using Kotlin with clean, intuitive UI for task management",
        "Integrated SQLite database for local data storage and offline functionality",
        "Implemented RecyclerView for efficient task listing and organization"
      ],
      technologies: ["Kotlin", "Android", "SQLite", "RecyclerView"],
      icons: [FaMobile, FaTasks, FaDatabase],
      category: "Mobile Application",
      icon: FaMobile,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-primary mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on, showcasing my skills in web and mobile development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Project Header with Gradient */}
              <div className={`bg-gradient-to-r ${project.gradient} p-8 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-white bg-opacity-20 p-3 rounded-xl mr-4">
                        <project.icon className="text-3xl" />
                      </div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                    <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-white text-opacity-90 leading-relaxed">{project.description}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-primary mb-4 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-primary mb-4 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 font-medium hover:bg-accent hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Technology Icons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">Built with:</span>
                  <div className="flex space-x-4">
                    {project.icons.map((Icon, iconIndex) => (
                      <motion.div
                        key={iconIndex}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="text-2xl text-gray-400 hover:text-accent transition-colors duration-300"
                      >
                        <Icon />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-accent via-blue-600 to-purple-600 p-12 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Interested in Working Together?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                I'm always open to discussing new opportunities and exciting projects. Let's create something amazing together!
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-accent px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 