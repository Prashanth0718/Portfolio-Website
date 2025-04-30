import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Section from '../components/ui/Section';
import { fadeIn } from '../utils/motion';
import resume from '../assets/Resume.pdf';

const Resume = () => {
  const handleDownload = () => {
    // Replace with your actual resume PDF path
    const resumeUrl = resume;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Prashanth_S_N.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section className="pt-24 md:pt-32">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex gap-3 w-auto max-lg:grid max-lg:grid-rows-1 max-lg:mx-4 max-lg:max-w-full overflow-hidden"
      >
        {/* Left Column */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          animate="show"
          className="flex border dark:border-gray-700 flex-col w-1/3 max-lg:w-auto max-lg:items-center bg-white dark:bg-dark-200 rounded-lg p-6"
        >
          <div className="flex flex-col max-lg:items-center items-center">
            <div className="w-52 h-52 max-lg:w-72 max-lg:h-72 rounded-full overflow-hidden border dark:border-gray-700">
              <img 
                src="https://images.pexels.com/photos/31860263/pexels-photo-31860263.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-heading font-semibold mt-3 max-lg:text-5xl text-gray-900 dark:text-white">
              Prashanth S N
            </h1>
            <p className="text-sm md:text-md mt-1 opacity-70 tracking-widest max-lg:text-xl max-lg:text-center text-gray-600 dark:text-gray-400">
              Computer Science Engineer
            </p>
          </div>

          <div className="xl:hidden h-[3px] max-w-full mt-3 bg-gray-200 dark:bg-gray-700"></div>

          <div className="max-lg:flex max-lg:flex-col max-lg:gap-5 w-full max-lg:ml-10 max-lg:max-w-full">
            <div className="mt-5 xl:ml-2">
              <h2 className="text-2xl font-heading font-semibold mt-3 max-lg:text-3xl text-gray-900 dark:text-white">
                Education
              </h2>
              <p className="text-lg mt-2 text-gray-800 dark:text-gray-200">
                Bachelor of Technology in Computer Science
              </p>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                Presidency University, Bangalore
              </p>
              <p className="text-sm md:text-md mt-2 opacity-70 tracking-widest text-gray-500 dark:text-gray-500">
                2021 - 2025
              </p>
            </div>

            <div className="mt-5 xl:ml-2 flex flex-col gap-4">
              <h2 className="text-2xl font-heading font-semibold mt-3 max-lg:text-3xl text-gray-900 dark:text-white">
                Skills
              </h2>
              
              <div>
                <p className="font-semibold text-lg mt-2 text-gray-800 dark:text-gray-200">
                  Programming Languages
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm md:text-md opacity-70 tracking-widest text-gray-600 dark:text-gray-400">Java</li>
                  <li className="text-sm md:text-md opacity-70 tracking-widest text-gray-600 dark:text-gray-400">JavaScript</li>
                  <li className="text-sm md:text-md opacity-70 tracking-widest text-gray-600 dark:text-gray-400">Python(Basic)</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-lg mt-2 text-gray-800 dark:text-gray-200">
                  Web Development
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm md:text-md opacity-70 tracking-widest text-gray-600 dark:text-gray-400">React</li>
                  <li className="text-sm md:text-md opacity-70 tracking-widest text-gray-600 dark:text-gray-400">Node.js</li>
                  <li className="text-sm md:text-md opacity-70 tracking-widest text-gray-600 dark:text-gray-400">MongoDB</li>
                  <li className="text-sm md:text-md opacity-70 tracking-widest text-gray-600 dark:text-gray-400">Tailwind CSS</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-lg mt-2 text-gray-800 dark:text-gray-200">
                  Tools
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm md:text-md opacity-70 tracking-widest text-gray-600 dark:text-gray-400">Git</li>
                  <li className="text-sm md:text-md opacity-70 tracking-widest text-gray-600 dark:text-gray-400">Vs Code</li>
                  <li className="text-sm md:text-md opacity-70 tracking-widest text-gray-600 dark:text-gray-400">Eclipse</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          animate="show"
          className="border dark:border-gray-700 max-w-full lg:w-full p-8 bg-white dark:bg-dark-200 rounded-lg"
        >
          <div>
            <p className="tracking-widest text-justify text-gray-600 dark:text-gray-300">
            <p className='tracking-widest text-justify'>I'm Prashanth S N, a passionate and results-driven computer science student based in Bangalore. My journey in technology began with an insatiable curiosity for problem-solving, leading me to explore the realms of full-stack web development, algorithm design, and innovative project initiatives. Proficient in HTML, CSS, JavaScript, React, and more, I bring a unique blend of technical acumen and creative thinking to every challenge. My commitment to excellence is reflected in a stellar <span className=' font-semibold'>CGPA of 8.85  </span>and a series of successful projects, from home automation using Arduino to crafting cloud storage solutions. Join me on this exciting journey where technology meets innovation!</p>
            </p>

            <div className="mt-16 ml-2">
              <h2 className="text-2xl font-heading font-semibold mt-3 text-gray-900 dark:text-white">
                Projects
              </h2>
              <ul className="list-disc ml-6 space-y-8 mt-6">
                <li>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Online Chatbot for Museum Ticket Booking
                  </h3>
                  <p className="text-sm md:text-md mt-2 text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Technologies Used:</span> React, Express.js, Node.js, MongoDB, Rasorpay, JWT
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                    Portfolio Website
                  </h3>
                  <p className="text-sm md:text-md mt-2 text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Technologies Used:</span> React, Tailwind CSS, Framer Motion, TypeScript
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                    Gemini Clone
                  </h3>
                  <p className="text-sm md:text-md mt-2 text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Technologies Used:</span> HTMl, CSS, JavaScript, Gemini API
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Weather Dashboard
                  </h3>
                  <p className="text-sm md:text-md mt-2 text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Technologies Used:</span> HTMl, CSS, JavaScript, OpenWeather API
                  </p>
                </li>
              </ul>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-heading font-semibold mt-3 text-gray-900 dark:text-white">
                Languages
              </h2>
              <div className="flex ml-5 gap-40 mt-5 max-lg:flex-col max-lg:gap-5">
                <div>
                  <p className="text-gray-800 dark:text-gray-200">English
                    <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full w-48"></div>
                    </div>
                  </p>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200">Kannada
                    <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full w-36"></div>
                    </div>
                  </p>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200">Telugu
                    <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full w-24"></div>
                    </div>
                  </p>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200">Tamil
                    <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full w-24"></div>
                    </div>
                  </p>
                </div>
              </div>

              <div className="flex mt-16 max-lg:justify-center">
                <button
                  onClick={handleDownload}
                  className="w-60 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white h-16 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Resume;