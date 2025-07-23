import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SuperShop: E-commerce Website',
    description: 'A comprehensive PHP-based e-commerce platform with full shopping cart functionality, user management, and payment processing.',
    technologies: ['PHP', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Dynamic content management',
      'Product category management',
      'Advanced search and filtering',
      'Shopping cart with session management',
      'Secure payment processing',
      'User registration and login',
      'Order management and tracking',
      'Invoice generation',
      'Admin dashboard',
    ],
    image: '/eommer1.jpeg',
    accent: 'purple',
    githubUrl: 'https://github.com/KushJariwala2002/supershop',
    liveUrl: 'https://github.com/KushJariwala2002/supershop',
  },
  {
    title: 'TravelNest: Travel Planning Application',
    description: 'A collaborative web application designed to help users plan and manage their travel itineraries with modern web technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    features: [
      'Interactive travel itinerary planning',
      'Frontend development with responsive design',
      'Backend functionality for data management',
      'User-friendly interface',
      'Travel destination management',
      'Collaborative team development',
    ],
    image: '/travel1.jpeg',
    accent: 'teal',
    githubUrl: 'https://github.com/KushJariwala2002',
    liveUrl: 'https://github.com/KushJariwala2002',
  },
  {
    title: 'School Details Management System',
    description: 'A Python GUI application for managing school records with Excel integration and comprehensive data validation.',
    technologies: ['Python', 'Tkinter', 'OpenPyXL', 'Pillow (PIL)', 'Excel'],
    features: [
      'Excel file integration',
      'Input validation for emails and contact numbers',
      'Intuitive Tkinter-based UI',
      'Detailed logging',
      'Image handling and UI customization',
      'Dynamic record management',
      'Error tracking and troubleshooting',
    ],
    image: '/school.jpeg',
    accent: 'pink',
    githubUrl: 'https://github.com/KushJariwala2002/School-Details-Management-System',
  },
];

const accentMap = {
  purple: {
    title: 'text-purple-700',
    tag: 'bg-purple-50 text-purple-700',
    button: 'bg-purple-700 hover:bg-purple-800',
  },
  teal: {
    title: 'text-teal-700',
    tag: 'bg-teal-50 text-teal-700',
    button: 'bg-teal-700 hover:bg-teal-800',
  },
  pink: {
    title: 'text-pink-700',
    tag: 'bg-pink-50 text-pink-700',
    button: 'bg-pink-700 hover:bg-pink-800',
  },
};

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

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-left sm:text-center"
        >
          Projects
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {projects.map((project, idx) => {
            const accent = accentMap[project.accent] || accentMap.purple;
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition p-0 overflow-hidden"
              >
                {/* Project Image */}
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-center" />
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <span className={`font-bold text-lg ${accent.title}`}>{project.title}</span>
                    <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                      {project.technologies.map((tech) => (
                        <span key={tech} className={`px-2 py-1 rounded text-xs font-semibold ${accent.tag}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-base">{project.description}</p>
                  <ul className="list-disc list-inside text-gray-500 space-y-1 text-sm mb-4 ml-2">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4 mt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="px-4 py-2 bg-gray-900 text-white rounded font-semibold text-sm hover:bg-gray-700 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className={`px-4 py-2 text-white rounded font-semibold text-sm transition ${accent.button}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;