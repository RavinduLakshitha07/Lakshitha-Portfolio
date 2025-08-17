import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub,
  FaDownload
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For now, we'll just show an alert
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'ravindlakshitha121@gmail.com',
      link: 'mailto:ravindlakshitha121@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+94 76 151 5984',
      link: 'tel:+94761515984'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'ravindu-lakshitha-05865b36b',
      link: 'https://www.linkedin.com/in/ravindu-lakshitha-05865b36b'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'RavinduLakshitha07',
      link: 'https://github.com/RavinduLakshitha07'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-primary mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">Contact Information</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm currently seeking internship opportunities and would love to discuss how I can 
                contribute to your team. Let's connect and explore potential collaborations!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.title === 'LinkedIn' || info.title === 'GitHub' ? '_blank' : undefined}
                  rel={info.title === 'LinkedIn' || info.title === 'GitHub' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="bg-gradient-to-r from-accent to-blue-600 p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Enhanced Availability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-accent via-blue-600 to-purple-600 p-8 rounded-3xl text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Current Status</h4>
                <p className="mb-6 text-lg">I'm currently available for:</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                    <span className="font-medium">Internship opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                    <span className="font-medium">Freelance projects</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                    <span className="font-medium">Collaborative development</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* CV Download Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 rounded-3xl text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Download My CV</h4>
                <p className="mb-6 text-lg">Get a detailed overview of my skills, experience, and qualifications.</p>
                <motion.a
                  href="/cv.pdf"
                  download="Ravindu_Lakshitha_CV.pdf"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 bg-white text-emerald-600 px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaDownload className="text-xl" />
                  <span>Download CV</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100"
          >
            <h3 className="text-3xl font-bold text-primary mb-8">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-lg resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-accent to-blue-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 