import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpecialServices from './components/SpecialServices';
import EducationExperience from './components/EducationExperience';
import ProfessionalSkills from './components/ProfessionalSkills';
function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <SpecialServices />
      <EducationExperience />
      <ProfessionalSkills/>
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
