import React from 'react';
import { motion } from 'framer-motion';

const projectList = [
  {
    title: 'Tribute Page: Meghnad',
    description:
      'A tribute to Meghnad (Indrajit), the mighty warrior from the Ramayana. Includes life events, story, and historical insights.',
    link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-tribute-page-project/build-a-tribute-page',
  },
  {
    title: 'Technical Doc: React & JSX in Vanilla JS',
    description:
      'A deep dive into building React-like functionality using pure JavaScript: virtual DOM, JSX transpiler, components, and more.',
    link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-technical-documentation-page-project/build-a-technical-documentation-page',
  },
  {
    title: 'Survey Form: Tamil Nadu Politics',
    description:
      'A form to gather public opinion about current political trends and leadership in Tamil Nadu. Features radio, checkboxes, and more.',
    link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form',
  },
  {
    title: 'Landing Page: Silk Sarees',
    description:
      'A product page promoting traditional silk sarees with pricing, features, and video content. Styled for responsiveness.',
    link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-product-landing-page-project/build-a-product-landing-page',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-8 py-16">
      {/* Animated Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-cyan-400 mb-12 relative"
      >
        Projects
        <span className="block h-1 w-24 bg-cyan-500 mx-auto mt-2 rounded-full animate-pulse"></span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition duration-300"
            >
              Visit Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
