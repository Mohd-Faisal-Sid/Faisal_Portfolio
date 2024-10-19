import React, { useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa'; // Right Arrow Icon
import { Link } from 'react-scroll'; // Import Link from react-scroll


const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState('education'); // Default to 'education'

  return (
    
    <div id="experienceSection" className="py-16 px-8 bg-black">
      <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">My Resume</h2>
      <h2 className="text-4xl font-bold text-center mb-12" >Real <span className="text-red-500">Problem Solutions </span> Experience</h2>
        {/* Buttons to toggle between Education and Experience */}
        <div className="flex justify-between justify-center p-6 bg-gray-800 text-white rounded-lg shadow-lg space-x-96 mb-12">
          <button
            className={`py-2 px-6 rounded-lg text-lg font-semibold ${
              activeTab === 'experience' ? 'bg-red-500 text-white' : 'bg-gray-500'
            }`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button
            className={`py-2 px-6 rounded-lg text-lg font-semibold ${
              activeTab === 'education' ? 'bg-red-500 text-white' : 'bg-gray-500'
            }`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>

        {/* Conditionally render Education or Experience based on activeTab */}
        <div className="bg-gray-800 p-8 shadow-lg rounded-lg">
          {activeTab === 'education' && <Education />}
          {activeTab === 'experience' && <Experience />}
        </div>
      </div>
    </div>
  );
};

// Education Sub-Component
const Education = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="border-b pb-4">
        <h3 className="text-xl font-semibold">Dr. A P J Abdul Kalam Technical University</h3>
        <p className="text-gray-200">B.Tech in Computer Science</p>
        <p className="text-gray-400">Location: Allahabad, India</p>
        <p className="text-gray-200">Key Learnings:</p>
        <p className="mt-2 text-gray-400">
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Core Programming: Developed a solid foundation in programming languages like Java, C ,Python, and JavaScript, applying them in practical projects and problem-solving.</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Web Development: Gained proficiency in web technologies including HTML5, CSS3,JavaScript, and various JavaScript frameworks (React, Angular, Vue.js).</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Data Structures & Algorithms: Applied efficient algorithms and data structures to solvecomplex computational problems.</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Database Management Systems: Experience in designing, managing, and querying databases (MySQL, MongoDB) to handle large-scale data applications.</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Software Engineering: Learned agile methodologies, SDLC, and best coding practices for delivering scalable, high-quality software solutions.</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Project Work: Successfully completed multiple projects such as a Student Managment System that enhanced demonstrated teamwork, problem-solving, and coding abilities.</p>
        <FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Other Key Areas: Exposure to artificial intelligence, cloud computing, and cybersecurity,fostering a broad technical skill set.
        </p>
      </div>
      <div className="border-b pb-4">
        <h3 className="text-xl font-semibold">Board of Technical Education</h3>
        <p className="text-gray-200">Diploma in Electrical & Computer Engineering</p>
        <p className="text-gray-400">Location: Agra, India</p>
        <p className="mt-2 text-gray-400">
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Circuit Design & Analysis: Gained foundational knowledge in electrical circuit design,simulation, and analysis, understanding the role of hardware in computing systems.</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Microcontrollers & Embedded Systems: Developed a strong understanding of microcontrollers and embedded systems, including programming microcontroller-based devices using C/C .</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Data Structures & Algorithms: Applied efficient algorithms and data structures to solvecomplex computational problems.</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/> Programming Skills: Built a strong programming foundation in languages such as C, C ,and basic Python, applying coding techniques in both software and hardware contexts</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Computer Networking & Security: Studied the basics of computer networking, network configurations, and security measures, essential for understanding how software systems interact.</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Control Systems: Gained an understanding of control theory and its applications in automation, which is relevant to both hardware and software aspects of system design</p>
        <FaArrowAltCircleRight className="inline text-red-500 mr-2"/> Technical Skills: Hands-on experience with modern tools and software used for circuit simulation and coding (IDE tools), bridging the gap between electrical engineering and computer systems.
        </p>
      </div>
    </div>
  );
};

// Experience Sub-Component
const Experience = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="border-b pb-4">
        <h3 className="text-lg font-semibold"><span style={{ fontStyle: 'italic', color: 'Red' }}>Software Developer</span></h3>
        <h3 className="text-2xl font-semibold">Softmind Infotech Pvt Ltd</h3>
        <p className="text-gray-200">Duration: September 2023 - Present</p>
        <p className="mt-2 text-gray-400">
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>veloped and maintained web applications using HTML, CSS, JavaScript, and React.js,ensuring responsive and user-friendly designs.</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Collaborated with cross-functional teams to design, develop, and implement front-end solutions, improving user experience and overall performance.</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Utilized Core Java to build and enhance backend functionalities, ensuring seamless integration with front-end components.</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Develop, implement, modify and maintain gameplay features that integrate effectively into existing software</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Optimized code for better performance, scalability, and maintainability.</p>
        </p>
      </div>
      <div className="border-b pb-4">
        <h3 className="text-lg font-semibold"><span style={{ fontStyle: 'italic', color: 'Red' }}>Software Developer Internship</span></h3>
        <h3 className="text-2xl font-semibold">Softmind Infotech Pvt Ltd</h3>
        <p className="text-gray-200">Duration: September 2022 - August 2023</p>
        <p className="mt-2 text-gray-400">
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/> Design, write, read, test, and correct code for new software.</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Collaborated with cross-functional teams to design, develop, and implement front-end solutions, improving user experience and overall performance.</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/> Write, modify, integrate and test software code for e-commerce, Internet and mobile applications</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Develop, implement, modify and maintain gameplay features that integrate effectively into existing software</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/> Maintained web applications using HTML, CSS, JavaScript, and React.js, ensuring responsive and user-friendly designs.</p>
        </p>
      </div>
      <div className="border-b pb-4">
        <h3 className="text-lg font-semibold"><span style={{ fontStyle: 'italic', color: 'Red' }}>Java Full Stack Developer Trainee</span></h3>
        <h3 className="text-2xl font-semibold">Softmind Infotech Pvt Ltd</h3>
        <p className="text-gray-200">Duration: March 2022 - August 2022</p>
      <p className="mt-2 text-gray-400">
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/> Design, write, read, test, and correct code for new software.</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/>Analyze information to recommend and plan the installation of new systems or modifications of an existing system.</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/> Write, modify, integrate and test software code for e-commerce, Internet and mobile applications.</p>
        <p><FaArrowAltCircleRight className="inline text-red-500 mr-2"/> Utilized Core Java to build and enhance backend functionalities, ensuring seamless integration with front-end components.</p>
      </p>
      </div>
    </div>
  );
};

export default EducationExperience;
