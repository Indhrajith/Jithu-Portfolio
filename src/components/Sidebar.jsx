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
    <div className="fixed top-0 left-0 h-full w-16 bg-white/10 backdrop-blur-lg border-r border-white/10 shadow-lg z-50 p-4 flex flex-col items-center justify-center space-y-6">
      {navItems.map(({ href, icon, label }, index) => (
        <a
          key={index}
          href={href}
          className="group relative flex items-center justify-center w-12 h-12 bg-white/10 text-white rounded-full hover:bg-cyan-500 hover:text-white transition duration-300"
        >
          {icon}
          <span className="absolute left-14 hidden group-hover:block bg-cyan-500 text-white text-sm font-medium px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
