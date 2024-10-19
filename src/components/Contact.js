import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importing icons
const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [showContactDetails, setShowContactDetails] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleShowDetails = () => {
    const { full_name, email, message } = formData;

    // Check if required fields are filled
    if (full_name && email && message) {
      setShowContactDetails(true);
    } else {
      alert('Please fill in Full Name, Email, and Message fields to proceed.');
    }
  };

  return (
    <section id="contact" className="py-16 px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Contact Info */}
        <div className="flex flex-col justify-center items-start">
        <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
          <h2 className="text-4xl font-bold mb-4">Let's Talk For Your <span className="text-red-500">Next Project's</span></h2>
          <p className="mb-6">
            Discuss a project or just want to say hi? Connect with me via email or through a phone call.
          </p>

          {/* Conditionally rendered contact details */}
          {showContactDetails ? (
            <div className="space-y-2">
              <p>📧 Email: mfs959839@gmail.com</p>
              <p>📞 Phone: +91- 9598394053</p>
              <p>🌐 LinkedIn: linkedin.com/in/mohammad-faisal</p>
              <p>🌍 Location: New Delhi, India</p>
            </div>
          ) : (
            <button
              onClick={handleShowDetails}
              className={`${
                formData.full_name && formData.email && formData.message
                  ? 'bg-blue-500'
                  : 'bg-gray-500'
              } text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300`}
            >
              Show Contact Details
            </button>
          )}

          {/* Experience Information */}
          <div className="mt-10">
            <h3 className="text-3xl font-bold mb-4">3 Years of <span className="text-red-500">Professional Experience</span></h3>
            <ul className="space-y-2">
              <li>💻 Web Designer</li>
              <li>📱 Mobile Apps Developer</li>
              <li>👨‍🏫 Technical Mentorship</li>
              <li>⚙️ Fullstack Developer</li>
            </ul>
          </div>
          {/* Social Icons Section */}
        <div className="mt-10 flex justify-center md:justify-start space-x-6">
            <a href="https://www.linkedin.com/in/mohammad-faisal-a20609247/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-500 text-2xl hover:text-blue-500 transition-all duration-300" />
            </a>
            <a href="https://x.com/MOHAMMA03974651" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl hover:text-blue-400 transition-all duration-300" />
            </a>
            <a href="https://github.com/Mohd-Faisal-Sid" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-2xl hover:text-gray-400 transition-all duration-300" />
            </a>
            <a href="https://wa.me/your-+91-9598394053" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-600 text-2xl hover:text-green-400 transition-all duration-300" />
            </a>
            <a href="mailto:your-mfs959839@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-red-500 text-2xl hover:text-red-400 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex flex-col justify-center">
          <form
            action="https://getform.io/f/your-form-endpoint" // Update with your form endpoint
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Full Name and Email in One Row */}
            <input
              type="text"
              name="full_name"
              placeholder="Full Name *"
              required
              value={formData.full_name}
              onChange={handleInputChange}
              className="p-4 border bg-zinc-900 border-gray-700 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="p-4 border bg-zinc-900 border-gray-300 rounded-lg"
            />

            {/* Phone Number and Subject in One Row */}
            <input
              type="tel"
              name="phone"
              placeholder="Mobile No."
              value={formData.phone}
              onChange={handleInputChange}
              className="p-4 border bg-zinc-900 border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="p-4 border bg-zinc-900 border-gray-300 rounded-lg"
            />

            {/* Message Field */}
            <textarea
              name="message"
              placeholder="Your Message *"
              rows="6"
              required
              value={formData.message}
              onChange={handleInputChange}
              className="p-4 border bg-zinc-900 border-gray-300 rounded-lg md:col-span-2"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 md:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
