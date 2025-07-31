import { motion } from 'framer-motion';
import { SiNextdotjs, SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiJavascript, SiTailwindcss, SiGit, SiGithub, SiVercel, SiFigma } from 'react-icons/si';

const skills = [
  { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8 text-black dark:text-white" />, level: 90 },
  { name: 'React', icon: <SiReact className="w-8 h-8 text-blue-500" />, level: 85 },
  { name: 'Node.js', icon: <SiNodedotjs className="w-8 h-8 text-green-600" />, level: 80 },
  { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8 text-green-700" />, level: 75 },
  { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8 text-blue-600" />, level: 85 },
  { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8 text-yellow-400" />, level: 90 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8 text-cyan-400" />, level: 85 },
  { name: 'Git', icon: <SiGit className="w-8 h-8 text-orange-600" />, level: 80 },
  { name: 'GitHub', icon: <SiGithub className="w-8 h-8 text-black dark:text-white" />, level: 85 },
  { name: 'Vercel', icon: <SiVercel className="w-8 h-8 text-black dark:text-white" />, level: 75 },
  { name: 'Figma', icon: <SiFigma className="w-8 h-8 text-purple-600" />, level: 70 },
];

export function SkillsShowcase() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-center mb-4">
            {skill.icon}
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">{skill.name}</h3>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          </div>
          <p className="text-right text-sm text-gray-500 mt-1">{skill.level}%</p>
        </motion.div>
      ))}
    </div>
  );
}
