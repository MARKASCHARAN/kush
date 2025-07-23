import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'XML', 'CSS', 'Bootstrap', 'ASP.NET', 'VB.NET', 'C++', 'C', 'Python'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'Firebase', 'SQLite'],
  },
  {
    title: 'Software',
    skills: ['Visual Studio 2016 Pro', 'MS-Office', 'Android Studio', 'Arduino IDE', 'PictoBlox', 'MBlock', 'VexCode Postman', 'API'],
  },
  {
    title: 'Hardware',
    skills: ['Arduino Uno', 'Esp32', 'Quarky', 'Arduino Nano', 'Raspberry Pi'],
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

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 text-left sm:text-center"
        >
          Technical Skills
        </motion.h2>
        <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mb-10"></div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              className="group rounded-xl transition bg-white hover:bg-blue-50/60 p-5 shadow-sm hover:shadow-md border border-gray-100"
            >
              <h3 className="text-lg font-bold text-blue-700 mb-3 tracking-wide group-hover:text-blue-800 transition-colors">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded font-medium text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;