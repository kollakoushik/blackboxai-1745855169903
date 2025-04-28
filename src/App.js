import React from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import ServicePlans from './components/ServicePlans';
import ResumeCoaching from './components/ResumeCoaching';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Hero />
      <AboutUs />
      <Testimonials />
      <ServicePlans />
      <ResumeCoaching />
      <Footer />
    </div>
  );
}

export default App;
