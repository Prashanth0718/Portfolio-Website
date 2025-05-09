import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, ExternalLink, Code2, Database, Server, Braces } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { fadeIn, staggerContainer, slideInFromLeft } from '../utils/motion';
import resumePDF from '../assets/Resume.pdf';

const Home = () => {
  const techStack = [
    {
      icon: <Code2 size={24} />,
      name: 'Frontend',
      description: 'Building responsive and interactive user interfaces with React and TypeScript',
      technologies: ['React', 'JavaScript', 'Tailwind CSS']
    },
    {
      icon: <Server size={24} />,
      name: 'Backend',
      description: 'Creating robust server-side applications with Node.js and Express',
      technologies: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      icon: <Database size={24} />,
      name: 'Database',
      description: 'Managing data with modern database technologies',
      technologies: ['MongoDB', 'MySQL']
    },
    {
      icon: <Braces size={24} />,
      name: 'Tools',
      description: 'Utilizing modern development tools and practices',
      technologies: ['Git', 'VsCode', 'Eclipse']
    }
  ];

  const featuredProjects = [
    {
      id: '1',
      title: 'Online Chatbot for Museum Ticket Booking',
      description: 'A full-stack chatbot-based ticketing system for museums, built with the MERN stack. Supports multilingual booking, cancellations, and secure payments via Razorpay.',
      image: 'https://images.pexels.com/photos/1310110/pexels-photo-1310110.jpeg?auto=compress&cs=tinysrgb&w=600?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Node.js', 'MongoDB', 'Rasorpay'],
      githubUrl: 'https://github.com/Prashanth0718/ONLINE-CHATBOT-TICKETING-SYSTEM',
      liveUrl: '#',
    },
    {
      id: '2',
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my work and skills with dark mode and animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-light-200 to-light-300 dark:from-dark-100 dark:to-dark-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            {/* <motion.span 
              className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Software Developer
            </motion.span> */}
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.span 
                variants={slideInFromLeft(0.2)}
                className="block"
              >
                Hi, I'm Prashanth S N
              </motion.span>
              <motion.span 
                variants={slideInFromLeft(0.4)}
                className="text-primary-600 dark:text-primary-400"
              >
                Full Stack Developer
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              animate="show"
            >
              I build exceptional and accessible digital experiences for the web, focusing on responsive design and intuitive user interfaces.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              animate="show"
            >
              <Button 
                variant="primary" 
                size="lg" 
                icon={<ArrowRight size={18} />} 
                iconPosition="right"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <a href={resumePDF} download>
                <Button variant="outline" size="lg">
                  <Download size={18} className="mr-2" />
                    Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            animate="show"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark-200 shadow-xl">
              <img 
                src="https://images.pexels.com/photos/31860263/pexels-photo-31860263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Prashanth S N" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section id="tech-stack" darker={true}>
        <SectionTitle 
          title="Tech Stack" 
          subtitle="My primary focus is on JavaScript ecosystem, with expertise in modern web technologies."
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-300 p-6 rounded-lg shadow-md group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4 p-3 bg-primary-50 dark:bg-primary-900/30 inline-block rounded-lg group-hover:rotate-12 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-3">
                {tech.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {tech.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tech.technologies.map((item, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-dark-200 text-gray-800 dark:text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section id="projects">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Here are some of my recent projects that showcase my skills and experience."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-dark-200 rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <motion.a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-primary-600/80 p-2 rounded-full hover:bg-primary-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-dark-300 text-gray-800 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
        <Link to="/projects">
          <Button variant="outline" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
            View All Projects
          </Button>
        </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="text-center" darker={true}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Interested in working together?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Let's build something amazing together. I'm currently available for freelance work and full-time opportunities.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </Section>
    </>
  );
};

export default Home;