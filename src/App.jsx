import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
};

export default App;