import React from 'react';

const Skills = () => (
  <section id="skills" className="min-h-screen px-8 py-16">
    <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">Skills</h2>

    {/* Software Tools / Design */}
    <div className="mb-10">
      <h3 className="text-2xl font-semibold text-center text-white mb-4">Design & Simulation Tools</h3>
      <div className="flex flex-wrap justify-center gap-4 text-cyan-300">
        {[
          'Sci-lab', 'OpenModelica', 'DWSIM', 'AutoCAD', 'ChemSep',
          'Ansys', 'P&ID', 'Aspen Plus', 'MATLAB'
        ].map((skill, index) => (
          <span key={index} className="bg-white/10 px-4 py-2 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Programming / Technical */}
    <div className="mb-10">
      <h3 className="text-2xl font-semibold text-center text-white mb-4">Programming & Technical</h3>
      <div className="flex flex-wrap justify-center gap-4 text-cyan-300">
        {[
          'C++', 'Java (Basic)', 'JavaScript (Basic)', 'Python (Basic)',
          'IoT (Arduino UNO)', 'React', 'Tailwind CSS', 'HTML/CSS'
        ].map((skill, index) => (
          <span key={index} className="bg-white/10 px-4 py-2 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Analytical & Soft Skills */}
    <div className="mb-10">
      <h3 className="text-2xl font-semibold text-center text-white mb-4">Analytical & Professional</h3>
      <div className="flex flex-wrap justify-center gap-4 text-cyan-300">
        {[
          'HPLC', 'Nitrogen Analysis (Kjeldahl)', 'Quality Control',
          'MS Office', 'Management', 'Soft Skills'
        ].map((skill, index) => (
          <span key={index} className="bg-white/10 px-4 py-2 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
