import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 py-6">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-gray-200 text-sm font-medium mb-1 gap">
          &copy; {currentYear} 
            Kush Jariwala. All rights reserved.
        </p>
        <p className="text-gray-400 text-xs">
          Made by <a href="https://www.linkedin.com/in/marka-charan-0a4a9727a/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 transition">MARKASCHARAN</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;