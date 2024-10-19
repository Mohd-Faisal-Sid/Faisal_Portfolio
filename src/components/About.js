import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa'; // Right Arrow Icon
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importing icons

const About = () => {
  return (
    <section id="about" className="py-16 bg-black text-white px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* About Image */}
        <div className="float-left mb-8 md:mb-0 md:w-1/2 flex justify-center">
          <img
            src="/images/Faisal.png"
            alt="Faisal's photo"
            className="w-74 h-74 shadow-lg"
          />
        </div>
        {/* About Text */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          
          <h1 className="text-5xl md:text-2xl text-red-500 font-bold">Driven, Innovative</h1>
          <h1 className="text-5xl md:text-4xl text-white font-bold mb-2">Software Engineer</h1>
          With over 3 years of dynamic experience in software engineering, I've led the development of scalable solutions such as a financial mobile app that increased customer retention by 20% and a web application that boosted system efficiency by 30%. My expertise spans frontend and backend development, UI/UX design, and strategic leadership, consistently driving innovation and excellence.
          <p className="text-lg text-gray-300 mt-4">
          <FaArrowAltCircleRight className="inline text-red-500 mr-2"/>
          Develop highly interactive Front end / User Interfaces for the web
          </p>
          <p className="text-lg text-gray-300 mt-4">
          <FaArrowAltCircleRight className="inline text-red-500 mr-2"/>
          Progressive Web Applications ( PWA ) in normal and SPA Stacks
          </p>
          <p className="text-lg text-gray-300 mt-4">
          <FaArrowAltCircleRight className="inline text-red-500 mr-2"/>
          Integration of third party services such as AWS / Digital Ocean
          </p>
          <p className="text-lg text-gray-300 mt-4">
          <FaArrowAltCircleRight className="inline text-red-500 mr-2"/>
          Integration of payment services such as M-Pesa and paypal etc
          </p>
          <p className="text-lg text-gray-300 mt-4">
          <FaArrowAltCircleRight className="inline text-red-500
           mr-2"/>
          Develop highly interactive Mobile Applications
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
