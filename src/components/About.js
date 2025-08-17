import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';
import profilePhoto from '../assets/profile-photo.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-primary mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate IT undergraduate with a strong foundation in software development and a drive to create innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-accent via-blue-600 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Ravindu Lakshitha - Professional Portrait"
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
                    }}
                  />
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 bg-white p-2 rounded-full shadow-lg"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-2 -left-2 bg-white p-2 rounded-full shadow-lg"
              >
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <FaGraduationCap className="mr-3 text-accent" />
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-start">
                  <FaUniversity className="text-accent mt-1 mr-3 flex-shrink-0 text-xl" />
                  <div>
                    <h4 className="font-semibold text-lg text-primary">BSc Hons in Information Technology</h4>
                    <p className="text-gray-600 font-medium">SLIIT</p>
                    <p className="text-sm text-gray-500 mt-1">Currently pursuing</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-start">
                  <FaSchool className="text-accent mt-1 mr-3 flex-shrink-0 text-xl" />
                  <div>
                    <h4 className="font-semibold text-lg text-primary">St. Mary's College Kegalle</h4>
                    <p className="text-gray-600 font-medium">Secondary Education</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Personal Information</h3>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-semibold text-lg text-primary mb-4">Languages</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">English</span>
                    <span className="text-accent font-bold"></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Sinhala</span>
                    <span className="text-accent font-bold"></span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-semibold text-lg text-primary mb-4">Career Objective</h4>
                <p className="text-gray-700 leading-relaxed">
                  Eager to gain real-world experience and contribute to innovative IT projects while developing my skills in a dynamic and growth-oriented organization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 