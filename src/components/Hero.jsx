import { Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/img.jpeg';

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative min-h-[90vh] flex items-center justify-center bg-white pt-32 pb-16 overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none z-0"></div>
      <div className="relative z-10 max-w-3xl w-full mx-auto px-4 flex flex-col items-center text-center">
        {/* Large Profile Image with colored ring and shadow */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-blue-200 shadow-2xl mb-10 flex items-center justify-center bg-white">
          <img src={profileImg} alt="Kush Jariwala" className="w-full h-full object-cover" />
        </div>
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-3 leading-tight">
          Kush Jariwala
        </h1>
        {/* Tagline */}
        <p className="text-2xl sm:text-3xl text-blue-700 font-semibold mb-4">
          Assistant Professor & Engineering Professional
        </p>
        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl">
          Passionate about technology, education, and building impactful solutions. Bridging the gap between theory and real-world application.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-10 py-4 bg-black text-white rounded-xl font-bold text-lg shadow-lg hover:bg-gray-900 transition-colors duration-200"
          >
            <Mail size={22} />
            Get in Touch
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-10 py-4 bg-white border-2 border-black text-black rounded-xl font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Download size={22} />
            Download Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;