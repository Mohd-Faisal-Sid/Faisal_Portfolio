import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Import the external link icon

const projectsData = [
  {
    type: 'React.js Web Development',
    name: 'Shopper Ecommerce website',
    description: 'We will create the Home page where we will display the trending products, offer banner, newsletter subscription form, then we will make product page for mens category womens category and kids category.',
    image: '/images/Shopper.png', // Path to your project image
    link: 'http://localhost:3000/#', // Project link
  },
  {
    type: 'Web Development with React.js',
    name: 'Facial Recognition Web Application',
    description: 'Facial recognition is a technology that involves classifying and recognizing human faces, mostly by mapping individual facial features and recording the unique ratio mathematically and storing the data as a face print. The face detection in your mobile camera makes use of this technology.',
    image: '/images/face.jpg', // Path to your project image
    link: 'http://localhost:3000/#', // Project link
  },
  {
    type: 'UI/UX Design(Figma)',
    name: 'Mohammad Faisal Portfolio',
    description: 'A portfolio website to showcase my work and skills.',
    image: '/images/portfolio.png', // Path to your project image
    link: 'http://localhost:3000/#', // Project link
  },
  {
    type: 'Full-Stack Development',
    name: 'Task Management System',
    description: 'A full-stack application to manage and assign tasks within teams, built with MERN stack.',
    image: '/images/task.png', // Path to your project image
    link: 'http://localhost:3000/#', // Project link
  },
  {
    type: 'Mobile App Development',
    name: 'Fitness Tracker App',
    description: 'A mobile app built with React Native to track user fitness activity and health progress.',
    image: '/images/fitness.png', // Path to your project image
    link: 'http://localhost:3000/#', // Project link
  },
  // Add more projects here
];

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false); // State to toggle showing more projects

  // Limit the number of projects shown initially (e.g., 2)
  const visibleProjects = showAllProjects ? projectsData : projectsData.slice(0, 2);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold text-center mb-8">Latest Works</h2>
        <h2 className="text-4xl font-bold text-center mb-12">
          Explore My Popular <span className="text-red-500">Projects </span>
        </h2>

        {/* Projects Container */}
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-16 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            {/* Project Image */}
            <div className="md:w-1/2 w-full px-4 mb-6 md:mb-0">
              <div className="p-8 border-2 border-transparent hover:border-red-400 rounded-lg shadow-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="md:w-1/2 w-full px-4 text-center md:text-left">
              <h4 className="text-xl font-semibold mb-1">
                <span className="text-red-500">{project.type}</span>
              </h4>
              <h1 className="text-4xl font-semibold mb-6">{project.name}</h1>
              <p className="text-lg text-gray-400 mb-6">{project.description}</p>
              {/* Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 transition-colors duration-300"
              >
                <FaExternalLinkAlt className="mr-2" /> View Project
              </a>
            </div>
          </div>
        ))}

        {/* View All Projects Button */}
        {!showAllProjects && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllProjects(true)}
              className="inline-flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
