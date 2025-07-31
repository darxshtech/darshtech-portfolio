'use client';

import { motion } from "framer-motion";

interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`w-full bg-transparent ${className}`}>
      <motion.div 
        className="hidden w-screen h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="py-8 text-center bg-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-sm text-zinc-500">
          darshtech.dev created by Chaitanya patil © {currentYear}
        </h2>
      </motion.div>
    </footer>
  );
}
