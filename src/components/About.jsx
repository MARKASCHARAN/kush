import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Lightbulb, Users, Cpu, BookOpen } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const focus = [
    { icon: <Lightbulb className="text-yellow-400" />, label: 'Machine Learning & AI Education' },
    { icon: <BookOpen className="text-blue-500" />, label: 'Curriculum Development (NEP 2020)' },
    { icon: <Cpu className="text-purple-500" />, label: 'Research in Emerging Technologies' },
    { icon: <Users className="text-pink-500" />, label: 'Student Mentorship & Guidance' },
  ];
  const tech = [
    { icon: <GraduationCap className="text-green-500" />, label: 'Full-Stack Web Development' },
    { icon: <Cpu className="text-teal-500" />, label: 'Robotics & IoT Systems' },
    { icon: <BookOpen className="text-indigo-500" />, label: 'Android Application Development' },
    { icon: <Lightbulb className="text-orange-500" />, label: 'Database Design & Management' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 lg:p-12 shadow-2xl border border-gray-200">
              <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-700 mb-8 text-center">
                I am a disciplined, motivated, and solutions-focused engineering professional with a unique blend of academic excellence and practical industry experience. Currently serving as an Assistant Professor at Parul University, I am passionate about bridging the gap between theoretical knowledge and real-world applications.
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-4 flex items-center gap-2">
                    <Lightbulb className="text-yellow-400" /> Academic Focus
                  </h3>
                  <ul className="space-y-3">
                    {focus.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        {item.icon}
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-4 flex items-center gap-2">
                    <Cpu className="text-teal-500" /> Technical Expertise
                  </h3>
                  <ul className="space-y-3">
                    {tech.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        {item.icon}
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;