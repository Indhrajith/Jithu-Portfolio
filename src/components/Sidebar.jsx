import React from 'react';
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaEnvelope,
} from 'react-icons/fa';

const navItems = [
  { href: '#intro', icon: <FaHome />, label: 'Intro' },
  { href: '#about', icon: <FaUser />, label: 'About' },
  { href: '#projects', icon: <FaProjectDiagram />, label: 'Projects' },
  { href: '#skills', icon: <FaTools />, label: 'Skills' },
  { href: '#contact', icon: <FaEnvelope />, label: 'Contact' },
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-44 bg-white/10 backdrop-blur-lg border-r border-white/10 flex flex-col items-center py-8 space-y-6 z-50">
      {navItems.map(({ href, icon, label }, index) => (
        <a
          key={index}
          href={href}
          className="group relative flex items-center justify-center w-12 h-12 bg-white/10 text-white rounded-xl hover:bg-cyan-500 transition duration-300"
        >
          {icon}
          <span className="absolute left-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyan-500 text-white text-xs font-medium px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
