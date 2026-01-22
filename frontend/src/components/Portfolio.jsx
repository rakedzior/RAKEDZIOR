import React, { useState } from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
      </main>
    </div>
  );
};

export default Portfolio;
