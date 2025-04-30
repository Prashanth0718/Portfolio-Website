import { motion } from 'framer-motion';
import { Code, Database, Layout, Smartphone, Users, Terminal } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { fadeIn, slideInFromLeft } from '../utils/motion';

const About = () => {
  const services = [
    {
      icon: <Layout />,
      title: 'Web Development',
      description: 'Creating responsive and interactive websites using modern technologies and best practices.'
    },
    {
      icon: <Database />,
      title: 'Backend Development',
      description: 'Developing robust server-side applications and APIs using Node.js and Express.'
    },
    {
      icon: <Code />,
      title: 'Frontend Development',
      description: 'Crafting beautiful user interfaces with React, TypeScript, and modern CSS frameworks.'
    },
  
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Presidency University, Bangalore',
      duration: '2021 - 2025',
      description: 'Currently pursuing with a CGPA of 8.85'
    },
    {
      degree: 'PCMB in PUC (Pre-University Course)',
      institution: 'St. Josephs Pre-University College, Bangalore',
      duration: '2019 - 2021',
      description: 'Completed with distinction and a score of 93%'
    },
    {
      degree: 'SSLC (Secondary School Leaving Certificate)',
      institution: 'Navodaya Vidhya Samasthe, ',
      duration: '2018 - 2019',
      description: 'Completed with distinction and a score of 87.52%'
    },
  ];

  return (
    <>
      {/* About Hero Section */}
      <Section className="pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6"
              variants={slideInFromLeft(0.2)}
            >
              About Me
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
              variants={fadeIn('up', 0.4)}
            >
              Hello! I'm Prashanth, a passionate software developer with over a year of experience in building web applications. I specialize in creating user-friendly, accessible, and performant digital experiences.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
              variants={fadeIn('up', 0.5)}
            >
              My journey in software development began during my undergraduate studies when I built my first website. Since then, I've worked with various technologies and frameworks, always striving to learn and grow as a developer.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300"
              variants={fadeIn('up', 0.6)}
            >
              When I'm not coding, you can find me hiking, reading science fiction novels, or experimenting with new recipes in the kitchen.
            </motion.p>
          </motion.div>
          

        </div>
      </Section>

      {/* Services Section */}
      <Section darker={true}>
        <SectionTitle 
          title="Services I Offer" 
          subtitle="I provide a wide range of services to help businesses and individuals build their digital presence."
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-300 p-6 rounded-lg shadow-md"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4 p-3 bg-primary-50 dark:bg-primary-900/30 inline-block rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience & Education Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
          
          
          {/* Education */}
          <div>
            <SectionTitle title="Education" />
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-800 bg-gray-100 dark:bg-dark-300 text-secondary-600 dark:text-secondary-400 shadow shrink-0 lg:group-odd:ml-8 lg:group-even:mr-8">
                    <span className="w-3 h-3 bg-secondary-600 dark:bg-secondary-400 rounded-full"></span>
                  </div>
                  <div className="w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)] bg-white dark:bg-dark-200 p-4 md:p-6 rounded-lg shadow-md">
                    <div className="mb-1 font-heading font-bold text-xl text-gray-900 dark:text-white">
                      {item.degree}
                    </div>
                    <div className="mb-2 text-secondary-600 dark:text-secondary-400 font-medium">
                      {item.institution}
                    </div>
                    <div className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                      {item.duration}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;