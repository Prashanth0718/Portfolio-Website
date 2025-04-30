import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Prashanth0718", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/prashanth-s-n-agrahara/", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://x.com/prashanth_arya_", label: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:prashanthsn2003@gmail.com", label: "Email" }
  ];

  return (
    <footer className="w-full mt-10 mb-8 px-4">
      {/* Horizontal line */}
      <div className="w-full h-px bg-gray-300 dark:bg-dark-300 opacity-60 mb-6"></div>

      {/* Social Icons Centered */}
      <div className="flex gap-6 justify-center items-center opacity-70">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            whileHover={{ y: -4 }}
            className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      {/* Footer Text */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 tracking-widest opacity-70">
          © {currentYear} Designed & Built by Prashanth S N
        </p>
      </div>
    </footer>
  );
};

export default Footer;
