import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'PhD in Computer Science using AI',
    institution: '',
    date: 'July 2025 – Pursuing',
    highlights: [
      'Research in AI and advanced computing',
    ],
    type: 'degree',
  },
  {
    degree: 'Master of Engineering (M.E.) in Computer Engineering',
    institution: 'Parul University',
    date: '2022–2024',
    highlights: [
      'Specialized in Advanced Computer Systems',
      'Thesis on ML in Education',
    ],
    type: 'degree',
  },
  {
    degree: 'Bachelor of Engineering (B.E.) in Computer Engineering',
    institution: 'Gujarat Technological University',
    date: '2018–2022',
    highlights: [
      'Strong foundation in CS fundamentals',
      'Multiple software projects',
    ],
    type: 'degree',
  },
  {
    degree: 'Web Development Certification',
    institution: 'IBM',
    date: '2023',
    highlights: [
      'Hands-on with modern web tech',
      'Completed TravelNest project',
    ],
    type: 'cert',
  },
  {
    degree: 'Robotics and AI Training Certification',
    institution: 'Robo+ EduTech',
    date: '2024',
    highlights: [
      'Advanced robotics & AI training',
      'Project-based learning',
    ],
    type: 'cert',
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

const accentMap = {
  degree: 'text-green-700',
  cert: 'text-orange-600',
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-left sm:text-center"
        >
          Education & Certifications
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree + edu.institution}
              variants={itemVariants}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <span className={`font-bold text-lg ${accentMap[edu.type]}`}>{edu.degree}</span>
                  <span className="text-sm text-gray-500 font-medium">{edu.date}</span>
                </div>
                {edu.institution && <div className="text-gray-800 font-semibold mb-2">{edu.institution}</div>}
                <ul className="list-disc list-inside text-gray-500 space-y-1 text-sm ml-2">
                  {edu.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;