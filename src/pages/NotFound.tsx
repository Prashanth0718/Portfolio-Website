import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-light-200 dark:bg-dark-100">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">404</h1>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            icon={<ArrowLeft size={18} />}
            iconPosition="left"
            as={Link}
            to="/"
          >
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;