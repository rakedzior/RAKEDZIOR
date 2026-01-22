import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
