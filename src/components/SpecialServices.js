import React from 'react';
import { FaCode, FaPaintBrush, FaPlug } from 'react-icons/fa'; // Icons for services

const SpecialServices = () => {
  return (
    <section id="special-services" className="py-20 bg-black text-white px-8">
      <div className="container mx-auto">
      <h3 className="text-xl font-bold text-center mb-8">I like to make things easy and fun</h3>
        <h2 className="text-4xl font-bold text-center mb-2" >My <span className="text-red-500">Special Services </span> For your</h2>
        <h2 className="text-4xl font-bold text-center mb-12">Business <span className="text-red-500">Development </span></h2>
        
        {/* Services Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Web Development Service */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:bg-gray-700 transition duration-300">
            <FaCode className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Web Development</h3>
            <p className="text-gray-300 mb-6">
              We build scalable, responsive websites with the latest technologies, ensuring a seamless experience for users.
            </p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
              Learn More
            </button>
          </div>

          {/* UI/UX Design Service */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:bg-gray-700 transition duration-300">
            <FaPaintBrush className="text-5xl text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-gray-300 mb-6">
              Our team designs user-friendly interfaces that not only look great but also improve usability and user retention.
            </p>
            <button className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition duration-300">
              Learn More
            </button>
          </div>

          {/* API Design & Integration Service */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:bg-gray-700 transition duration-300">
            <FaPlug className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">API Design & Integration</h3>
            <p className="text-gray-300 mb-6">
              We specialize in designing efficient APIs and integrating them seamlessly with front-end and back-end systems.
            </p>
            <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialServices;
