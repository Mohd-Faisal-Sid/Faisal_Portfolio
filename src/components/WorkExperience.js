import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Softmind Infotech Pvt Ltd',
      role: 'Software Developer',
      duration: 'September 2023 - Present',
      description: 'Full-stack development using React.js, Node.js, and modern web technologies.',
    },
    {
      company: 'Cellplan Technologies Pvt Ltd',
      role: 'Drive Test Engineer',
      duration: 'June 2022 - August 2023',
      description: 'Analyzed network performance and worked with cross-functional teams.',
    },
  ];

  return (
    <section id="work-experience" className="py-16 px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10">Work Experience</h1>
        <div className="grid gap-10 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 text-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold">{experience.role}</h3>
              <p className="text-lg mt-2">{experience.company}</p>
              <p className="text-sm text-gray-400">{experience.duration}</p>
              <p className="mt-4 text-base text-gray-300">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
