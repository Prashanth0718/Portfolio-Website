import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';

const Projects = () => {
  // Sample project data - replace with real data later
  const projects = [
    {
      id: '1',
      title: 'Online Chatbot for Museum Ticket Booking',
      description: 'A full-stack chatbot-based ticketing system for museums, built with the MERN stack. Supports multilingual booking, cancellations, and secure payments via Razorpay.',
      image: 'https://images.pexels.com/photos/1310110/pexels-photo-1310110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Node.js', 'MongoDB', 'Rasorpay', 'Express.js'],
      githubUrl: 'https://github.com/Prashanth0718/ONLINE-CHATBOT-TICKETING-SYSTEM',
      liveUrl: '#',
      featured: true
    },
    {
      id: '2',
      title: 'Gemini Clone',
      description: 'A real-time Gemini clone using HTML, CSS, and JavaScript, with interactive typing effects, theme toggle, and smooth animations. Used Fetch API for backend and Local Storage for chat history.',
      image: 'https://cdn.neowin.com/news/images/uploaded/2024/05/1715805881_google_gemini_hero_image.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML', 'CSS', 'JavaScript', 'Gemini API'],
      githubUrl: 'https://github.com/Prashanth0718/Gemini-Clone',
      liveUrl: 'https://prashanth-s-n-gemini-clone.netlify.app/',
      featured: true
    },  
    {
      id: '3',
      title: 'Time Table Scheduler',
      description: 'A comprehensive social media analytics dashboard with data visualization, scheduling features, and engagement metrics.',
      image: 'https://images.pexels.com/photos/714701/pexels-photo-714701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Python', 'Scheduling Algorithms', 'CSP', 'Collections (defaultdict)'],
      githubUrl: 'https://github.com/Prashanth0718/Time-Table-Scheduler',
      liveUrl: '#',
      featured: false
    },
    {
      id: '4',
      title: 'Weather Dashboard',
      description: 'A weather forecasting application that provides real-time weather data, interactive maps, and detailed weather information for multiple locations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      githubUrl: 'https://github.com/Prashanth0718/Weather-Dashboard-Application',
      liveUrl: '#',
      featured: false
    },
    {
      id: '5',
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects, skills, and experience, built with React and Tailwind CSS.',
      image: 'https://images.pexels.com/photos/31861180/pexels-photo-31861180.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: '6',
      title: 'Image Search Engine',
      description: 'A web application that allows users to search and download high-quality images from the Pexels API. Users can search for images, view details, and download them directly from the interface.',
      image: 'https://i.pinimg.com/736x/10/e7/b7/10e7b709ddee9e35d0e512fa4447f791.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML', 'CSS', 'JavaScript', 'Pexels API', 'Unicons Icons'],
      githubUrl: 'https://github.com/Prashanth0718/Image-Search-Engine',
      liveUrl: 'https://prashanth-s-n-image-search-engine.netlify.app/',
      featured: false
    }
  ];

  return (
    <>
      <Section className="pt-24 md:pt-32">
        <SectionTitle
          title="My Projects"
          subtitle="Explore my portfolio of web applications and software projects that showcase my skills and experience."
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-200 rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden aspect-video">
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
                      aria-label={`View ${project.title} source code on GitHub`}
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
                      aria-label={`Visit ${project.title} live site`}
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
      </Section>
    </>
  );
};

export default Projects;