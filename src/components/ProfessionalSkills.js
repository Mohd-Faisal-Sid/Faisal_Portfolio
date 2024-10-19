import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaWordpress, FaGithub} from 'react-icons/fa';
import { SiTailwindcss, SiSpringboot, SiVisualstudiocode } from 'react-icons/si'; // Additional icons

const ProfessionalSkills = () => {
  const [popupInfo, setPopupInfo] = useState(null); // Track the currently hovered skill for pop-up
  
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" />},
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-blue-400" />},
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" />},
    { name: 'React', icon: <FaReact className="text-blue-500" />},
    { name: 'Java', icon: <FaJava className="text-red-600" />},
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" />},
    { name: 'WordPress', icon: <FaWordpress className="text-blue-600" />},
    { name: 'GitHub', icon: <FaGithub className="text-white" />},
    { name: 'VS Code', icon: <SiVisualstudiocode className="text-blue-500" />},
  ];

  return (
    <section id="professional-skills" className="py-20 bg-black text-white px-8">
      <div className="container mx-auto text-center">
      <h4 className="text-xl font-bold mb-12">MY <span className="text-red-500">TALENT </span></h4>
        <h2 className="text-4xl font-bold mb-12">Professional Skills</h2>
        
        {/* Skills Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative group flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-700"
              onMouseEnter={() => setPopupInfo(skill)} // Show pop-up on hover
              onMouseLeave={() => setPopupInfo(null)}  // Hide pop-up on mouse leave
              whileHover={{ scale: 1.1 }} // Add scale effect on hover
              initial={{ opacity: 0, y: 50 }} // Initial state before appearing
              animate={{ opacity: 1, y: 0 }} // Animation when component appears
              transition={{ duration: 0.5, delay: index * 0.1 }} // Animation timing
            >
              {/* Skill Icon */}
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ rotate: 360 }} // Rotate icon on hover
                transition={{ type: "spring", stiffness: 300 }} // Animation type
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>

              {/* Pop-up Info */}
              {popupInfo && popupInfo.name === skill.name && (
                <motion.div 
                  className="absolute bottom-16 p-4 bg-black bg-opacity-75 rounded-lg shadow-lg text-sm"
                  initial={{ opacity: 0, scale: 0.3 }} // Pop-up initial state
                  animate={{ opacity: 0, scale: 1 }} // Pop-up animation
                  transition={{ duration: 0.1 }} // Speed of pop-up animation
                >
                  {popupInfo.description}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkills;
