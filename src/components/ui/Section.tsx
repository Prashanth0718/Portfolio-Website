import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  darker?: boolean;
}

const Section = ({ id, className, children, fullWidth = false, darker = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${darker ? 'bg-gray-50 dark:bg-dark-200' : 'bg-white dark:bg-dark-100'} ${className}`}
    >
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-4 md:px-6'}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;