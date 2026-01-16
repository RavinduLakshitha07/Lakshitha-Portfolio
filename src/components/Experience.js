import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Smart City Infrastructure Management System",
      role: "Full-Stack Developer",
      period: "2024",
      location: "Academic Project",
      description: "Led development of a comprehensive smart city management system with event and public space management capabilities.",
      achievements: [
        "Collaborated in a team of 8 to build a full-stack system using MERN stack",
        "Developed 'Event and Public Space Management' module with booking and reporting functionalities",
        "Integrated MongoDB to store and manage event data",
        "Implemented responsive UI components and user-friendly interfaces"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "ChoonPan Mobile App",
      role: "Mobile App Developer",
      period: "2025",
      location: "Academic Project",
      description: "Developed a full-stack food delivery mobile application with real-time tracking and payment processing.",
      achievements: [
        "Built complete mobile app using Expo, React Native and Firebase",
        "Implemented integrated live map navigation and real-time location tracking",
        "Developed secure online payment processing with automated confirmations",
        "Created intuitive ordering system for efficient delivery management"
      ],
      technologies: ["React Native", "Firebase", "Expo", "Google Maps API", "JavaScript"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Online Banking System",
      role: "Backend Developer",
      period: "2023",
      location: "Academic Project",
      description: "Created a comprehensive banking system with loan application and management features.",
      achievements: [
        "Developed JSP pages and servlet-based workflows for loan applications",
        "Connected to MySQL database using JDBC for data persistence",
        "Designed responsive UI using CSS for improved user experience",
        "Implemented secure authentication and authorization systems"
      ],
      technologies: ["Java", "JSP", "MySQL", "JDBC", "CSS", "HTML"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Task Manager Mobile App",
      role: "Android Developer",
      period: "2023",
      location: "Personal Project",
      description: "Developed an Android task management application with local data storage and intuitive interface.",
      achievements: [
        "Built Android app using Kotlin with clean, intuitive UI design",
        "Integrated SQLite database for local data storage and offline functionality",
        "Implemented RecyclerView for efficient task listing and organization",
        "Added features for adding, updating, and deleting tasks"
      ],
      technologies: ["Kotlin", "Android", "SQLite", "RecyclerView", "XML"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-primary mb-6">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My journey in software development through various projects and academic work.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${experience.gradient} p-8 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                      <p className="text-xl font-medium opacity-90">{experience.role}</p>
                    </div>
                    <div className="flex items-center space-x-6 mt-4 md:mt-0">
                      <div className="flex items-center text-white opacity-90">
                        <FaCalendarAlt className="mr-2" />
                        <span className="text-sm font-medium">{experience.period}</span>
                      </div>
                      <div className="flex items-center text-white opacity-90">
                        <FaMapMarkerAlt className="mr-2" />
                        <span className="text-sm font-medium">{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white text-opacity-90 leading-relaxed">{experience.description}</p>
                </div>
              </div>

              <div className="p-8">
                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-primary mb-6 flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    Key Achievements
                  </h4>
                  <ul className="space-y-4">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <motion.li 
                        key={achievementIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-bold text-primary mb-6 flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {experience.technologies.map((tech, techIndex) => (
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-white to-gray-50 p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto border border-gray-100">
            <h3 className="text-3xl font-bold text-primary mb-6">Experience Summary</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
              Throughout my academic journey, I've worked on diverse projects ranging from web applications 
              to mobile apps, gaining hands-on experience with modern technologies and development practices. 
              Each project has helped me develop strong problem-solving skills and a deep understanding of 
              full-stack development principles.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-accent mb-2">4+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-accent mb-2">2</div>
                <div className="text-gray-600 font-medium">Mobile Apps</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <div className="text-gray-600 font-medium">Technologies</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 