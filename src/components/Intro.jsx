import React from 'react';
import { motion } from 'framer-motion';
import myImage from '../assets/me.jpg';

const Intro = () => {
  return (
    <section
      id="intro"
      className="min-h-screen relative ml-20 md:ml-64 flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center space-y-6"
      >
        <motion.img
          src={myImage}
          alt="Indhrajith"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="w-48 md:w-64 h-48 md:h-64 mx-auto rounded-full border-4 border-cyan-500 shadow-lg shadow-cyan-700/30 object-cover"
        />

        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-cyan-400">Indhrajith</span>
        </h1>
        <p className="text-xl text-gray-300">Creative Developer & Engineer</p>
      </motion.div>
    </section>
  );
};

export default Intro;
