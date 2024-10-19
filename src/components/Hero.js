import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importing icons

const Hero = () => {
  const titles = ['Web Developer', 'React Developer', 'Java Developer']; // Titles array
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0); // Track current title index
  const [displayText, setDisplayText] = useState(''); // Text to display
  const [isDeleting, setIsDeleting] = useState(false); // Track whether we are deleting
  const [typingSpeed, setTypingSpeed] = useState(150); // Typing speed (ms per character)

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[currentTitleIndex];
      if (isDeleting) {
        // Deleting the text
        setDisplayText((prev) => currentTitle.substring(0, prev.length - 1));
        setTypingSpeed(50); // Speed up when deleting
      } else {
        // Typing the text
        setDisplayText((prev) => currentTitle.substring(0, prev.length + 1));
        setTypingSpeed(150); // Normal typing speed
      }

      // When fully typed, pause, then start deleting
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      }

      // When fully deleted, move to the next title
      else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length); // Move to the next title
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed); // Typing interval

    return () => clearTimeout(typingTimer); // Cleanup on unmount or rerender
  }, [displayText, isDeleting, typingSpeed, currentTitleIndex, titles]);

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-black text-white px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Hero Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h3 className="text-5xl md:text-3xl font-bold">HELLO, I'M</h3>
          <h1 className="text-5xl md:text-6xl text-red-500 font-bold">Mohammad Faisal</h1>
          {/* Typewriter effect */}
          <p className="mt-4 text-1xl md:text-3xl text-blue-300 font-bold">{displayText}</p>
          <p className="mt-10 text-lg">
            Dynamic and results-oriented Software Engineer with over 3 years of experience specializing in architecting scalable solutions and leading transformative projects. Proven track record of diagnosing complex challenges, delivering innovative solutions, and fostering collaborative team environments.
          </p>
          <div className="mt-9 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            {/* Hire Me Button */}
            <Link to="contact" smooth={true} duration={500}>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
                Hire Me
              </button>
            </Link>
            {/* Download Resume Button */}
            <a href="https://drive.google.com/file/d/1uFjAHfoPA0T3j8tLjKYVnqkN5C7ac_ie/view?usp=sharing" download="Faisal-Resume" target="_blank" rel="noopener noreferrer">
              <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all duration-300">
                Download Resume
              </button>
            </a>
          </div>

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
        {/* Hero Image */}
        <div className="float-right mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/images/Fsl.png"
            alt="Faisal's photo"
            className="w-65 h-65 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
