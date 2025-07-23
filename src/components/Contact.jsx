import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={20} />, label: 'Email', value: 'kushjariwala785@gmail.com', href: 'mailto:kushjariwala785@gmail.com',
  },
  {
    icon: <Phone size={20} />, label: 'Phone', value: '+91 7096034585', href: 'tel:+917096034585',
  },
];
const socialLinks = [
  { icon: <Github size={20} />, href: '#', label: 'GitHub' },
  { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const whatsappMessage = encodeURIComponent('Hi, I want to connect with you.');

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-orange-50">
      <div className="max-w-xl mx-auto px-4">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-8"
        >
          <div>
            <h2 className="text-3xl font-extrabold text-orange-600 mb-2 text-center">Contact</h2>
            <p className="text-gray-700 text-center mb-6">Let's connect! Reach me directly on WhatsApp or via the info below.</p>
          </div>
          <a
            href={`https://wa.me/917096034585?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white rounded-lg font-bold text-lg shadow hover:bg-green-600 transition mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 14.487a4.5 4.5 0 01-6.364 0l-.354-.353a.75.75 0 00-1.06 0l-.354.353a4.5 4.5 0 01-6.364 0A9 9 0 1112 21a8.963 8.963 0 01-6.364-2.636z" />
            </svg>
            Message on WhatsApp: +91 7096034585
          </a>
          <div className="flex flex-col gap-2 items-center">
            {contactInfo.map((info) => (
              <a key={info.label} href={info.href} className="flex items-center gap-2 text-orange-700 font-medium hover:underline">
                {info.icon} {info.value}
              </a>
            ))}
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="text-orange-400 hover:text-orange-600 transition" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;