import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importing icons


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Copyright © 2024, <span style={{ fontStyle: 'italic', color: 'Red' }}>Mohammad Faisal</span> . All Rights Reserved</p>
        {/* Social Icons Section */}
        <div className="mt-10 flex justify-center md:justify-start space-x-6">
            <a href="https://www.linkedin.com/in/mohammad-faisal-a20609247/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-500 text-2xl hover:text-blue-500 transition-all duration-300" />
            </a>
            <a href="https://github.com/Mohd-Faisal-Sid" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-2xl hover:text-gray-400 transition-all duration-300" />
            </a>
            <a href="https://wa.me/your-+91-9598394053" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-600 text-2xl hover:text-green-400 transition-all duration-300" />
            </a>
            <a href="https://x.com/MOHAMMA03974651" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl hover:text-blue-400 transition-all duration-300" />
            </a>
            <a href="mailto:your-mfs959839@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-red-500 text-2xl hover:text-red-400 transition-all duration-300" />
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
