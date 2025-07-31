"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { VscHome, VscPerson, VscProject, VscMail, VscFilePdf } from "react-icons/vsc";
import dynamic from 'next/dynamic';

// Dynamically import the Dock component with SSR disabled
const Dock = dynamic(() => import('@/components/Dock'), {
  ssr: false,
  loading: () => (
    <div className="h-14 w-full flex items-center justify-center">
      <div className="h-10 w-64 rounded-full bg-zinc-800/50 animate-pulse"></div>
    </div>
  ),
});

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const navigation = [
    { 
      icon: <VscHome size={20} className="text-white" />, 
      label: "Home", 
      onClick: () => router.push("/"),
      className: ""
    },
    { 
      icon: <VscPerson size={20} className="text-white" />, 
      label: "About", 
      onClick: () => router.push("/about"),
      className: ""
    },
    { 
      icon: <VscProject size={20} className="text-white" />, 
      label: "Projects", 
      onClick: () => router.push("/projects"),
      className: ""
    },
    { 
      icon: <VscMail size={20} className="text-white" />, 
      label: "Contact", 
      onClick: () => router.push("/contact"),
      className: ""
    }
  ];

  return (
    <>
      <motion.header 
        className="fixed top-24 left-0 right-0 z-50 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <Dock 
            items={navigation}
            className=""
            panelHeight={48}
            baseItemSize={40}
            magnification={56}
            distance={120}
          />
        </div>
      </motion.header>
      {isHome && (
        <>
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
            DARSHTECH
          </h1>
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        </>
      )}
    </>
  );
};
