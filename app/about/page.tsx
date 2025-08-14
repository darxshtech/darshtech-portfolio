"use client";

import { motion, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRef } from 'react';

// Dynamically import icons to reduce initial bundle size
const FaCode = dynamic(() => import('react-icons/fa').then(mod => mod.FaCode), { ssr: false });
const FaMusic = dynamic(() => import('react-icons/fa').then(mod => mod.FaMusic), { ssr: false });
const FaShoePrints = dynamic(() => import('react-icons/fa').then(mod => mod.FaShoePrints), { ssr: false });
const FaGraduationCap = dynamic(() => import('react-icons/fa').then(mod => mod.FaGraduationCap), { ssr: false });
const FaLaptopCode = dynamic(() => import('react-icons/fa').then(mod => mod.FaLaptopCode), { ssr: false });
const FaMicrosoft = dynamic(() => import('react-icons/fa').then(mod => mod.FaMicrosoft), { ssr: false });
const FaDatabase = dynamic(() => import('react-icons/fa').then(mod => mod.FaDatabase), { ssr: false });
const FaServer = dynamic(() => import('react-icons/fa').then(mod => mod.FaServer), { ssr: false });
const FaBrain = dynamic(() => import('react-icons/fa').then(mod => mod.FaBrain), { ssr: false });
const FaRobot = dynamic(() => import('react-icons/fa').then(mod => mod.FaRobot), { ssr: false });

// Import tech icons
const SiNextdotjs = dynamic(() => import('react-icons/si').then(mod => mod.SiNextdotjs), { ssr: false });
const SiReact = dynamic(() => import('react-icons/si').then(mod => mod.SiReact), { ssr: false });
const SiNodedotjs = dynamic(() => import('react-icons/si').then(mod => mod.SiNodedotjs), { ssr: false });
const SiMongodb = dynamic(() => import('react-icons/si').then(mod => mod.SiMongodb), { ssr: false });
const SiTypescript = dynamic(() => import('react-icons/si').then(mod => mod.SiTypescript), { ssr: false });
const SiJavascript = dynamic(() => import('react-icons/si').then(mod => mod.SiJavascript), { ssr: false });
const SiTailwindcss = dynamic(() => import('react-icons/si').then(mod => mod.SiTailwindcss), { ssr: false });
const SiHtml5 = dynamic(() => import('react-icons/si').then(mod => mod.SiHtml5), { ssr: false });
const SiCss3 = dynamic(() => import('react-icons/si').then(mod => mod.SiCss3), { ssr: false });
const SiPython = dynamic(() => import('react-icons/si').then(mod => mod.SiPython), { ssr: false });
const SiFirebase = dynamic(() => import('react-icons/si').then(mod => mod.SiFirebase), { ssr: false });
const SiAdobexd = dynamic(() => import('react-icons/si').then(mod => mod.SiAdobexd), { ssr: false });
const SiFigma = dynamic(() => import('react-icons/si').then(mod => mod.SiFigma), { ssr: false });
const SiExpress = dynamic(() => import('react-icons/si').then(mod => mod.SiExpress), { ssr: false });
import { Card } from '../components/card';
import { Header } from '../components/header';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      when: 'beforeChildren',
      staggerDirection: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
};

const item = {
  hidden: { 
    opacity: 0, 
    y: 20,
    willChange: 'transform, opacity',
  },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 12,
      mass: 0.5,
      delay: i * 0.05,
      willChange: 'transform, opacity',
    }
  })
};

const fadeIn = {
  hidden: { 
    opacity: 0,
    willChange: 'opacity',
  },
  show: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      willChange: 'opacity',
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const skills = [
  // Frontend
  { name: 'HTML5', icon: <SiHtml5 className="w-6 h-6 text-orange-500" /> },
  { name: 'CSS3', icon: <SiCss3 className="w-6 h-6 text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-6 h-6 text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6 text-blue-600" /> },
  { name: 'React', icon: <SiReact className="w-6 h-6 text-blue-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-6 h-6" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" /> },
  
  // Backend
  { name: 'Node.js', icon: <SiNodedotjs className="w-6 h-6 text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="w-6 h-6" /> },
  { name: 'RESTful API', icon: <FaServer className="w-6 h-6 text-green-400" /> },
  
  // Databases
  { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6 text-green-700" /> },
  { name: 'SQL', icon: <FaDatabase className="w-6 h-6 text-blue-600" /> },
  { name: 'NoSQL', icon: <FaDatabase className="w-6 h-6 text-purple-600" /> },
  
  // Cloud & Services
  { name: 'Firebase', icon: <SiFirebase className="w-6 h-6 text-yellow-500" /> },
  
  // AI & Data Science
  { name: 'Python', icon: <SiPython className="w-6 h-6 text-blue-700" /> },
  { name: 'Data Science', icon: <FaBrain className="w-6 h-6 text-purple-500" /> },
  { name: 'AI/ML', icon: <FaRobot className="w-6 h-6 text-blue-400" /> },
  { name: 'Gen AI', icon: <FaRobot className="w-6 h-6 text-green-400" /> },
  
  // Design & Tools
  { name: 'UI/UX', icon: <SiFigma className="w-6 h-6 text-pink-500" /> },
  { name: 'Figma', icon: <SiFigma className="w-6 h-6 text-pink-500" /> },
  { name: 'Adobe XD', icon: <SiAdobexd className="w-6 h-6 text-pink-600" /> },
  { name: 'MS Office', icon: <FaMicrosoft className="w-6 h-6 text-blue-600" /> },
  
  // Stacks
  { 
    name: 'MERN Stack', 
    icon: (
      <div className="flex items-center justify-center w-6 h-6">
        <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
          <SiMongodb className="text-green-600 w-full h-full" />
          <SiExpress className="w-full h-full" />
          <SiReact className="text-blue-400 w-full h-full" />
          <SiNodedotjs className="text-green-600 w-full h-full" />
        </div>
      </div>
    ) 
  },
];

function AboutPage() {
  // Refs for each skills section
  const webDevRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  
  // Intersection observers for each section
  const isWebDevInView = useInView(webDevRef, { once: true, margin: '0px 0px -50px 0px' });
  const isBackendInView = useInView(backendRef, { once: true, margin: '0px 0px -50px 0px' });
  const isAIInView = useInView(aiRef, { once: true, margin: '0px 0px -50px 0px' });
  const isDesignInView = useInView(designRef, { once: true, margin: '0px 0px -50px 0px' });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black p-4 overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
      <Header />
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        className="w-full max-w-4xl mx-auto pt-56 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full mb-12">
          <motion.div 
            className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-zinc-700/50 group"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: 0,
              transition: { 
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
                damping: 10
              } 
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ scale: 0.9 }}
              animate={{
                scale: [0.9, 1.1, 1],
                opacity: [0, 0.5, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut'
                }
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ scale: 0.9 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.3, 0],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: 2,
                  ease: 'easeInOut'
                }
              }}
            />
            <motion.div
              className="w-full h-full relative"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Darsh Patil - Web Developer"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
                sizes="(max-width: 768px) 12rem, (max-width: 1024px) 14rem, 16rem"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAALABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAACAQQCAwAAAAAAAAAAAAABAgMABAURIQYSEzH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQAAAN9o0v/Z"
              />
            </motion.div>
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-purple-500/30 transition-all duration-500"
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(168, 85, 247, 0.5)'
              }}
            />
          </motion.div>
          <motion.div className="flex-1">
            <motion.h1 
              variants={item}
              className="text-4xl font-bold text-transparent duration-1000 bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text mb-4"
            >
              About Me
            </motion.h1>
            <motion.p 
              className="text-xl text-zinc-400 max-w-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Full-Stack Developer & Tech Enthusiast
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          className="space-y-20 text-zinc-400"
        >
          <motion.div variants={item} className="w-full">
            <Card className="p-12">
              <motion.div className="space-y-6">
                <h2 className="text-3xl font-semibold text-zinc-200 flex items-center gap-3 mb-4">
                  <span className="inline-block">
                    <FaLaptopCode className="text-zinc-400" />
                  </span>
                  Who Am I?
                </h2>
                <div className="space-y-4 [&>p]:transition-all [&>p]:duration-300 [&>p]:hover:text-zinc-200">
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    Hello! I'm Chaitanya Patil, but you can call me <span className="text-zinc-200 font-medium">Darsh</span>. 
                    I'm a passionate full-stack developer currently pursuing my Bachelor's degree in Computer Engineering at SPPU.
                  </p>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    My journey in web development started when I was in college, and since then, I've been on an exciting 
                    path of continuous learning and growth. I specialize in building modern, responsive, and user-friendly 
                    web applications using the MERN stack and Next.js.
                  </p>
                </div>
              </motion.div>
            </Card>
          </motion.div>

          <motion.div variants={item} className="w-full">
            <Card className="p-12">
              <motion.div className="space-y-6">
                <h2 className="text-3xl font-semibold text-zinc-200 flex items-center gap-3 mb-4">
                  <span className="inline-block">
                    <FaGraduationCap className="text-zinc-400" />
                  </span>
                  Education
                </h2>
                <motion.div 
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="space-y-6"
                >
                  <div className="w-full">
                    <Card className="p-8 h-full">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-2 bg-purple-900/30 rounded-lg">
                          <FaGraduationCap className="text-purple-400 text-xl" />
                        </div>
                        <h3 className="text-lg font-medium text-zinc-200">Computer Engineering</h3>
                      </div>
                      <div className="[&>p]:transition-all [&>p]:duration-300 [&>p]:hover:text-zinc-200">
                        <p className="text-zinc-400 text-lg leading-relaxed">Savitribai Phule Pune University (SPPU)</p>
                        <p className="text-base text-zinc-400">2021 - Present</p>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              </motion.div>
            </Card>
          </motion.div>

          <motion.div 
            variants={item} 
            className="w-full"
            initial="hidden"
            animate="show"
          >
            <Card className="p-8">
              <motion.div className="space-y-10">
                <h2 className="text-3xl font-bold text-zinc-100 flex items-center gap-3 mb-6">
                  <FaCode className="text-zinc-400" />
                  <span>Skills & Technologies</span>
                </h2>
                
                {/* Web Development */}
                <div 
                  className="space-y-4" 
                  ref={webDevRef}
                  style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                >
                  <h3 className="text-xl font-medium text-zinc-300">Web Development</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {skills.slice(0, 7).map((skill, index) => (
                      <motion.div
                        key={`web-${index}`}
                        className="group relative p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50 overflow-hidden transform transition-all duration-300 will-change-transform hover:shadow-lg hover:shadow-purple-500/10"
                        style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isWebDevInView ? { 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: index * 0.05
                          }
                        } : {}}
                        whileHover={{ 
                          y: -2,
                          borderColor: 'rgba(161, 161, 170, 0.5)',
                          transition: { 
                            type: 'spring', 
                            stiffness: 300, 
                            damping: 15,
                            duration: 0.2
                          }
                        }}
                      >
                        <div className="relative z-10 flex items-center gap-3">
                          <div className="flex-shrink-0 p-2 bg-zinc-700/50 rounded-lg group-hover:bg-zinc-600/50 transition-colors duration-300">
                            {skill.icon}
                          </div>
                          <span className="text-zinc-200 font-medium">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Backend & Databases */}
                <div 
                  className="space-y-4" 
                  ref={backendRef}
                  style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                >
                  <h3 className="text-xl font-medium text-zinc-300">Backend & Databases</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {skills.slice(7, 13).map((skill, index) => (
                      <motion.div
                        key={`backend-${index}`}
                        className="group relative p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50 overflow-hidden transform transition-all duration-300 will-change-transform hover:shadow-lg hover:shadow-purple-500/10"
                        style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isBackendInView ? { 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: index * 0.05
                          }
                        } : {}}
                        whileHover={{ 
                          y: -2,
                          borderColor: 'rgba(161, 161, 170, 0.5)',
                          transition: { 
                            type: 'spring', 
                            stiffness: 300, 
                            damping: 15,
                            duration: 0.2
                          }
                        }}
                      >
                        <div className="relative z-10 flex items-center gap-3">
                          <div className="flex-shrink-0 p-2 bg-zinc-700/50 rounded-lg group-hover:bg-zinc-600/50 transition-colors duration-300">
                            {skill.icon}
                          </div>
                          <span className="text-zinc-200 font-medium">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* AI & Data Science */}
                <div 
                  className="space-y-4" 
                  ref={aiRef}
                  style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                >
                  <h3 className="text-xl font-medium text-zinc-300">AI & Data Science</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {skills.slice(13, 17).map((skill, index) => (
                      <motion.div
                        key={`ai-${index}`}
                        className="group relative p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50 overflow-hidden transform transition-all duration-300 will-change-transform hover:shadow-lg hover:shadow-purple-500/10"
                        style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isAIInView ? { 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: index * 0.05
                          }
                        } : {}}
                        whileHover={{ 
                          y: -2,
                          borderColor: 'rgba(161, 161, 170, 0.5)',
                          transition: { 
                            type: 'spring', 
                            stiffness: 300, 
                            damping: 15,
                            duration: 0.2
                          }
                        }}
                      >
                        <div className="relative z-10 flex items-center gap-3">
                          <div className="flex-shrink-0 p-2 bg-zinc-700/50 rounded-lg group-hover:bg-zinc-600/50 transition-colors duration-300">
                            {skill.icon}
                          </div>
                          <span className="text-zinc-200 font-medium">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Design & Tools */}
                <div 
                  className="space-y-4" 
                  ref={designRef}
                  style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                >
                  <h3 className="text-xl font-medium text-zinc-300">Design & Tools</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {skills.slice(17).map((skill, index) => (
                      <motion.div
                        key={`design-${index}`}
                        className="group relative p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50 overflow-hidden transform transition-all duration-300 will-change-transform hover:shadow-lg hover:shadow-purple-500/10"
                        style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isDesignInView ? { 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: index * 0.05
                          }
                        } : {}}
                        whileHover={{ 
                          y: -2,
                          borderColor: 'rgba(161, 161, 170, 0.5)',
                          transition: { 
                            type: 'spring', 
                            stiffness: 300, 
                            damping: 15,
                            duration: 0.2
                          }
                        }}
                      >
                        <div className="relative z-10 flex items-center gap-3">
                          <div className="flex-shrink-0 p-2 bg-zinc-700/50 rounded-lg group-hover:bg-zinc-600/50 transition-colors duration-300">
                            {skill.icon}
                          </div>
                          <span className="text-zinc-200 font-medium">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Card>
          </motion.div>

          <motion.div variants={item} className="w-full">
            <Card className="p-8">
              <div className="space-y-8">
                <h2 className="text-3xl font-semibold text-zinc-200 flex items-center gap-3 mb-4">
                  <span className="inline-block">
                    <FaMusic className="text-zinc-400" />
                  </span>
                  Interests
                </h2>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="w-full h-full">
                    <Card className="p-8 h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-900/30 rounded-xl">
                          <FaMusic className="text-blue-400 text-2xl" />
                        </div>
                        <h3 className="text-xl font-medium text-zinc-200">Music & Rap</h3>
                      </div>
                      <p className="text-zinc-400 text-base leading-relaxed transition-all duration-300 hover:text-zinc-200">
                        Music is my escape and my inspiration. I love writing and performing rap as a way to express my thoughts and emotions.
                      </p>
                    </Card>
                  </div>

                  <div className="w-full h-full">
                    <Card className="p-8 h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-green-900/30 rounded-xl">
                          <FaShoePrints className="text-green-400 text-2xl" />
                        </div>
                        <h3 className="text-xl font-medium text-zinc-200">Travel & Exploration</h3>
                      </div>
                      <p className="text-zinc-400 text-base leading-relaxed transition-all duration-300 hover:text-zinc-200">
                        Passionate about travel and exploration, seeking new cultures, landscapes, and experiences to inspire creativity and broaden perspectives.
                      </p>
                    </Card>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>


    </div>
  );
}

export default AboutPage;


