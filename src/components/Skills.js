import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, 
  FaJs, 
  FaDatabase, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaFire
} from 'react-icons/fa';
import { SiMongodb, SiKotlin } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Java', icon: FaJava, color: 'text-orange-500', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200' },
    { name: 'SQL', icon: FaDatabase, color: 'text-blue-500', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
    { name: 'React', icon: FaReact, color: 'text-blue-400', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
    { name: 'JSP', icon: FaJava, color: 'text-orange-500', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', bgColor: 'bg-green-50', borderColor: 'border-green-200' },
    { name: 'Firebase', icon: FaFire, color: 'text-orange-500', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' },
    { name: 'Kotlin', icon: SiKotlin, color: 'text-purple-500', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'Kotlin'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'React', 'JSP'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Databases',
      skills: ['SQL', 'MongoDB', 'Firebase'],
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-primary mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I've developed expertise in various technologies through academic projects and personal development.
          </p>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                rotateY: 10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className={`${skill.bgColor} ${skill.borderColor} border-2 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group cursor-pointer`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`text-5xl ${skill.color} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
              >
                <skill.icon />
              </motion.div>
              <h3 className="font-bold text-gray-800 text-lg group-hover:text-accent transition-colors duration-300">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${category.gradient} p-6 text-white`}>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-3 h-3 bg-accent rounded-full mr-4"></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-white to-gray-50 p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto border border-gray-100">
            <h3 className="text-3xl font-bold text-primary mb-6">Development Approach</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              I focus on creating responsive, user-friendly applications with clean code architecture. 
              My experience spans both frontend and backend development, with particular expertise in 
              React, Java, and mobile development using React Native and Kotlin.
            </p>
            <div className="mt-8 flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">4+</div>
                <div className="text-gray-600 font-medium">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <div className="text-gray-600 font-medium">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">2</div>
                <div className="text-gray-600 font-medium">Mobile Apps</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 