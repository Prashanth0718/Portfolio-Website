import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Cpu, Github as Git, Terminal, Palette } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend Development',
      icon: <Layout className="w-8 h-8" />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Backend Development',
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Database',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Programming',
      icon: <Code2 className="w-8 h-8" />,
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 75 },
      ],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const tools = [
    { name: 'Git & GitHub', icon: <Git /> },
    { name: 'Docker', icon: <Terminal /> },
    { name: 'AWS', icon: <Server /> },
    { name: 'Linux', icon: <Terminal /> },
    { name: 'VS Code', icon: <Code2 /> },
    { name: 'Figma', icon: <Palette /> },
    { name: 'Jenkins', icon: <Cpu /> },
    { name: 'Postman', icon: <Server /> },
  ];

  const coursework = [
    'Data Structures and Algorithms',
    'Operating Systems',
    'Computer Networks',
    'Database Management Systems',
    'Software Engineering',
    'Artificial Intelligence & Machine Learning',
    'Cloud Computing',
    'Web Development',
    'Mobile App Development',
    'Cryptography and Security',
  ];

  return (
    <Section className="pt-24 md:pt-32">
      <SectionTitle 
        title="Technical Skills" 
        subtitle="A comprehensive overview of my technical expertise and proficiency in various technologies."
        center={true}
      />

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-200 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold ml-4 text-gray-900 dark:text-white">
                {category.name}
              </h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tools & Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 bg-white dark:bg-dark-200 rounded-xl p-8 shadow-lg"
      >
        <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-8 text-center">
          Tools & Technologies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center p-4 bg-gray-50 dark:bg-dark-300 rounded-lg"
            >
              <div className="text-primary-600 dark:text-primary-400 mr-3">
                {tool.icon}
              </div>
              <span className="text-gray-700 dark:text-gray-300">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Coursework */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 bg-white dark:bg-dark-200 rounded-xl p-8 shadow-lg"
      >
        <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-8 text-center">
          Relevant Coursework
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coursework.map((course, index) => (
            <motion.div
              key={course}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center"
            >
              <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3" />
              <span className="text-gray-700 dark:text-gray-300">{course}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Future Learning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-600 dark:text-gray-400 italic">
          Always learning, always growing. Currently exploring new technologies and frameworks.
        </p>
      </motion.div>
    </Section>
  );
};

export default Skills;