import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Assistant Professor',
    company: 'Parul University',
    date: '2025–Present',
    points: [
      'Teaching ML, AI, and robotics',
      'Leading curriculum innovation',
    ],
  },
  {
    title: 'Web Developer',
    company: 'IBM',
    date: '2023',
    points: [
      'Built responsive web apps',
      'Collaborated on TravelNest project',
    ],
  },
  {
    title: 'Technical Trainer',
    company: 'Robo+ EduTech',
    date: '2024–2025',
    points: [
      'Taught robotics and AI',
      'Led project-based learning',
    ],
  },
  {
    title: 'Marketing and Intern of Robotics',
    company: 'Computer Shop',
    date: 'Jan 2024 - Feb 2024',
    points: [
      'Assisted in marketing strategy and event coordination for AI/robotics products in education',
      'Conducted market research and provided analysis on promotional activities',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 text-left sm:text-center">
          Experience
        </h2>
        {/* Removed blue divider line here */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="divide-y divide-gray-200"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title + exp.company}
              variants={itemVariants}
              className={"py-6 " + (idx === 0 ? '' : 'mt-2')}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1 sm:gap-0">
                <span className="font-semibold text-gray-900 text-lg">
                  {exp.title}, <span className="text-blue-700">{exp.company}</span>
                </span>
                <span className="text-sm text-gray-500 font-medium mt-1 sm:mt-0">{exp.date}</span>
              </div>
              <ul className="list-disc list-inside text-gray-500 space-y-1 text-base mt-2 ml-2">
                {exp.points.map((point) => (
                  <li key={point} className="leading-relaxed text-sm sm:text-base">{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;