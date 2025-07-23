import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/img.jpeg';

const leftLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
];
const rightLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '/Resume.pdf', external: true },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left Nav Links */}
        <nav className="hidden lg:flex gap-8">
          {leftLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Center Logo */}
        <a href="#home" className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full overflow-hidden border-2 border-gray-200 bg-white">
            <img src={profileImg} alt="Kush Jariwala" className="w-full h-full object-cover" />
          </span>
          <span className="hidden sm:inline">Kush Jariwala</span>
        </a>
        {/* Right Nav Links + CTA */}
        <div className="hidden lg:flex items-center gap-6">
          {rightLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-900 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
        {/* Hamburger (Mobile) */}
        <button
          className="lg:hidden p-2 rounded text-gray-900 hover:bg-gray-100 transition ml-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow animate-fade-in-down">
          <nav className="flex flex-col gap-2 px-6 py-6">
            {[...leftLinks, ...rightLinks].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="font-semibold text-gray-900 hover:text-blue-600 text-lg transition-colors duration-200 px-2 py-3 rounded"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 px-5 py-3 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-900 transition-colors duration-200 text-center text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
      {/* Custom fade-in-down animation for mobile menu */}
      <style>{`
        .animate-fade-in-down {
          animation: fadeInDown 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;