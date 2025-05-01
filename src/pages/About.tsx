import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import { fadeIn, slideInFromLeft } from '../utils/motion';

const About = () => {
  const sections = [
    {
      title: "Background & Journey",
      content: "Coming from a biology background in high school, stepping into the world of computer science felt both unfamiliar and overwhelming—like navigating uncharted waters. Yet, it was this very unfamiliarity that sparked my curiosity. What began as a challenge with Java programming soon evolved into a genuine passion for problem-solving.I not only embraced the initial challenges but am now actively learning and growing in Data Structures and Algorithms—an area that has quickly become a strong interest of mine.",
      bgColor: "bg-primary-50 dark:bg-primary-900/20"
    },
    {
      title: "Education",
      content: [
        {
          degree: "Bachelor of Technology in Computer Science",
          school: "Presidency University, Bangalore",
          year: "2021 - 2025",
          details: "Currently pursuing with a CGPA of 8.85"
        },
        {
          degree: "PCMB in PUC (Pre-University Course)",
          school: "Narayan Pu College, Kolar",
          year: "2019 - 2021",
          details: "Completed with distinction and a score of 93%"
        },
        {
          degree: "SSLC (Secondary School Leaving Certificate)",
          school: "Navodaya Vidhya Samasthe, Kuruboor",
          year: "2018 - 2019",
          details: "Completed with distinction and a score of 87.52%"
        }
      ],
      bgColor: "bg-secondary-50 dark:bg-secondary-900/20"
    },
    {
      title: "Passions & Interests",
      content: "Beyond coding, I'm deeply passionate about creating intuitive user experiences and solving complex technical challenges. I stay current with emerging technologies and best practices in software development, particularly in web development, cloud architecture, and DevOps practices.",
      bgColor: "bg-accent-50 dark:bg-accent-900/20"
    },
    {
      title: "Projects & Initiatives",
      content: [
          "Developed an Online Chatbot Based Ticket Booking System for seamless user interaction and booking",
          "Created a Gemini Clone, replicating core functionalities with a focus on responsive design and user experience",
          "Built a Time Table Scheduler application to automate and organize schedules effectively",
          "Designed and developed an Image Search Engine with advanced search and filtering capabilities"
        ],
      bgColor: "bg-primary-50/50 dark:bg-primary-900/20"
    },
    {
      title: "Vision & Future Plans",
      content: "My goal is to continue pushing the boundaries of what's possible in software development, focusing on creating scalable, efficient, and user-friendly applications. I'm particularly interested in exploring emerging technologies like AI/ML integration in web applications and cloud-native architecture.",
      bgColor: "bg-secondary-50/50 dark:bg-secondary-900/20"
    }
  ];

  return (
    <Section className="pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <motion.div
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          animate="show"
          className="bg-white dark:bg-dark-200 rounded-xl p-8 shadow-lg mb-12 transform transition-all hover:scale-[1.02]"
        >
          <motion.h1 
            variants={slideInFromLeft(0.2)}
            className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-6"
          >
            About Me
          </motion.h1>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Hey there! I'm <span className="font-semibold text-primary-600 dark:text-primary-400">Prashanth S N</span>, 
            a passionate software developer with expertise in full-stack development. With a strong foundation in computer 
            science and years of hands-on experience, I specialize in creating elegant solutions to complex problems.
          </motion.p>
        </motion.div>

        {/* Content Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${section.bgColor} rounded-xl p-8 shadow-lg mb-8 transform transition-all hover:scale-[1.02]`}
          >
            <h2 className="text-3xl font-heading font-light opacity-90 text-gray-900 dark:text-white mb-6 text-center">
              {section.title}
            </h2>
            
            {Array.isArray(section.content) ? (
              <div className="space-y-6">
                {section.title === "Education" ? (
                  section.content.map((edu, idx) => (
                    <div key={idx} className="border-l-4 border-primary-500 dark:border-primary-400 pl-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {typeof edu !== 'string' && edu.degree}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400">
                        {typeof edu !== 'string' && edu.school}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {typeof edu !== 'string' && edu.year}
                      </p>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {typeof edu !== 'string' && edu.details}
                      </p>

                    </div>
                  ))
                ) : (
                  <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="text-lg tracking-wide">
                      {typeof item === "string" ? item : item.degree} {/* Adjust based on your need */}
                    </li>
                    
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <p className="text-lg text-gray-600 dark:text-gray-300 tracking-wide">
                {section.content}
              </p>
            )}
          </motion.div>
        ))}

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent-50 dark:bg-accent-900/20 rounded-xl p-8 shadow-lg text-center"
        >
          <h2 className="text-3xl font-heading font-light opacity-90 text-gray-900 dark:text-white mb-6">
            Let's Connect!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <Button 
            variant="primary"
            size="lg"
            icon={<ArrowRight size={18} />}
            iconPosition="right"
            as={Link}
            to="/contact"
          >
            Get In Touch
          </Button>
        </motion.div> */}
      </div>
    </Section>
  );
};

export default About;