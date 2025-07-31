import { Button } from "./ui/button";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: <FaGithub className="w-5 h-5" />, 
    url: 'https://github.com/yourusername' 
  },
  { 
    name: 'LinkedIn', 
    icon: <FaLinkedin className="w-5 h-5 text-[#0077b5]" />, 
    url: 'https://linkedin.com/in/yourusername' 
  },
  { 
    name: 'Twitter', 
    icon: <FaTwitter className="w-5 h-5 text-[#1DA1F2]" />, 
    url: 'https://twitter.com/yourusername' 
  },
  { 
    name: 'Email', 
    icon: <FaEnvelope className="w-5 h-5 text-gray-600" />, 
    url: 'mailto:your.email@example.com' 
  },
];

export function ProfileCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="relative h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="Chaitanya Patil (Darsh) - Web Developer"
              fill
              className="object-cover"
              priority
              quality={85}
              sizes="(max-width: 768px) 8rem, 10rem"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAALABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAACAQQCAwAAAAAAAAAAAAABAgMABAURIQYSEzH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQAAAN9o0v/Z"
            />
          </div>
        </div>
      </div>
      <div className="pt-20 pb-6 px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Chaitanya Patil</h2>
        <p className="text-gray-600 dark:text-gray-300">aka <span className="font-semibold text-blue-500">Darsh</span></p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Full Stack Developer | Tech Enthusiast</p>
        
        <div className="mt-6 flex justify-center space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        <div className="mt-6
        ">
          <Button variant="outline" className="w-full">
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
}
