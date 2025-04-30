import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  children?: ReactNode;
}

const SectionTitle = ({ title, subtitle, center = false, children }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${center ? 'text-left' : ''}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
      
      {children}
    </div>
  );
};

export default SectionTitle;