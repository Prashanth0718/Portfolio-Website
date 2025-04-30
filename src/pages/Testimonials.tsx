import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { fadeIn, slideInFromLeft } from '../utils/motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO at TechCorp',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'Working with Prashanth was an absolute pleasure. His technical expertise and attention to detail resulted in a product that exceeded our expectations.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Product Manager at InnovateTech',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'Prashanth\'s ability to understand our requirements and translate them into a beautiful, functional application was impressive. He\'s a true professional.',
    },
    {
      name: 'Michael Chen',
      role: 'Founder of StartupX',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'The quality of work and communication throughout the project was exceptional. Prashanth delivered on time and was always available for questions.',
    },
    {
      name: 'Emily Davis',
      role: 'CTO at DigitalSolutions',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'I highly recommend Prashanth for any software development project. His technical skills and problem-solving abilities are outstanding.',
    }
  ];

  return (
    <>
      <Section className="pt-24 md:pt-32">
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6"
            variants={slideInFromLeft(0.2)}
          >
            Client Testimonials
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl"
            variants={fadeIn('up', 0.4)}
          >
            Don't just take my word for it - here's what my clients have to say about working with me.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-200 rounded-xl p-6 shadow-lg relative"
            >
              <div className="absolute -top-4 left-6 text-primary-600 dark:text-primary-400 bg-white dark:bg-dark-200 p-2 rounded-full shadow-md">
                <Quote size={24} />
              </div>
              
              <div className="mt-4">
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section darker={true}>
        <div className="text-center max-w-3xl mx-auto">
          <SectionTitle
            title="Ready to Start Your Project?"
            subtitle="Let's work together to bring your vision to life. I'm currently available for freelance projects and full-time opportunities."
            center={true}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:text-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Testimonials;