import React from 'react';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      <Sidebar />
      <main className="pl-16 scroll-smooth">
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
