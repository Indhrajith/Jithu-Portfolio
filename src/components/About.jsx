import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import reactorAnimation from '../assets/Book loading.json';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-cyan-400 mb-6 text-center"
      >
        About <span className="text-white">Me</span>
      </motion.h2>

      <hr className="border-cyan-600 w-24 mb-6" />

      {/* Animation */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <Lottie
          animationData={reactorAnimation}
          loop
          style={{ width: 200, height: 200 }}
        />
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6 max-w-5xl w-full text-gray-300"
      >
        {/* Cards */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-cyan-500/20 transition duration-500">
          <h3 className="text-xl font-semibold text-cyan-300 mb-2">Education & Core</h3>
          <p>
            I'm a <span className="font-bold">Chemical Engineer</span> from <strong>SASTRA University</strong>,
            passionate about technology, design, and innovation.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-cyan-500/20 transition duration-500">
          <h3 className="text-xl font-semibold text-cyan-300 mb-2">Industry Experience</h3>
          <p>
            Worked as a <strong>GET</strong> & <strong>Production Executive</strong> at Agri Life & SOM Phytopharma.
            Experienced in <span className="text-cyan-400">HPLC</span>, <span className="text-cyan-400">Kjeldahl analysis</span>,
            batch manufacturing, and reformulation.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-cyan-500/20 transition duration-500">
          <h3 className="text-xl font-semibold text-cyan-300 mb-2">Project Highlights</h3>
          <p>
            Developed solutions for <em>non-condensable gas recovery</em>, <em>sulfuric acid reuse</em>,
            and conceptualized <strong>IIoT-based automation</strong> pipelines.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-cyan-500/20 transition duration-500">
          <h3 className="text-xl font-semibold text-cyan-300 mb-2">Current Goal</h3>
          <p>
            Transitioning into <strong>IIoT Architecture</strong> by blending chemical process knowledge
            with modern tech: <span className="text-cyan-400">React</span>, <span className="text-cyan-400">Tailwind</span>, and
            <span className="text-cyan-400"> Arduino</span>.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
