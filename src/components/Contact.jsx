import React from 'react';
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const contactLinks = [
  {
    icon: <FaPhone size={36} />,
    href: 'tel:+919384950057',
    label: 'Phone',
  },
  {
    icon: <FaEnvelope size={36} />,
    href: 'mailto:indhrajithmurali2000@gmail.com',
    label: 'Email',
  },
  {
    icon: <FaLinkedin size={36} />,
    href: 'https://www.linkedin.com/in/indhrajith-m-ab2097190',
    label: 'LinkedIn',
  },
  {
    icon: <FaGithub size={36} />,
    href: 'https://github.com/Indhrajith_Murali',
    label: 'GitHub',
  },
  {
    icon: <FaInstagram size={36} />,
    href: 'https://instagram.com/the_half_blood_prince_jithu',
    label: 'Instagram',
  },
];

const Contact = () => (
  <section
    id="contact"
    className="min-h-screen px-6 py-16 flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b]"
  >
    <h2 className="text-4xl font-extrabold mb-12 text-center text-cyan-400 drop-shadow-lg">
      Contact Me
    </h2>

    {/* Contact Icons Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl w-full justify-items-center mb-12">
      {contactLinks.map(({ icon, href, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          data-tooltip-id={`tooltip-${index}`}
          data-tooltip-content={label}
          className="w-20 h-20 relative flex items-center justify-center rounded-2xl transition duration-500 text-cyan-400 hover:text-white hover:scale-110 shadow-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400"
        >
          <span className="z-10">{icon}</span>
          <Tooltip id={`tooltip-${index}`} place="top" effect="solid" />
        </a>
      ))}
    </div>

    {/* Glassmorphic Contact Form */}
    <form
      className="w-full max-w-md space-y-4 p-8 rounded-2xl bg-white/10 shadow-2xl backdrop-blur-xl border border-white/20 animate-fade-in-up"
      style={{
        animation: 'fade-in-up 1s ease-out',
      }}
    >
      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-white/10"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-white/10"
      />
      <textarea
        placeholder="Message"
        className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-white/10"
        rows="5"
      ></textarea>
      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-6 py-3 rounded-xl text-white font-bold transition transform hover:scale-105 shadow-md">
        Send
      </button>
    </form>
  </section>
);

export default Contact;
