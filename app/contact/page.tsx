"use client";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import { Header } from '../components/header';
import { motion } from "framer-motion";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/chaitanya-patil-aa6844244/",
    label: "LinkedIn",
    handle: "Chaitanya Patil",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:darshliketocode@gmail.com",
    label: "Email",
    handle: "darshliketocode@gmail.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/darshtech",
    label: "Github",
    handle: "darshtech",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Header />
      <div className="max-w-6xl mx-auto pt-56 pb-16 px-4 sm:px-6 lg:px-8">
        <div>
          <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-16 sm:grid-cols-3 md:gap-12 lg:gap-16">
            {socials.map((s, index) => (
              <Card key={index}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col items-center gap-4 p-8 duration-700 group md:p-12 lg:p-16"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
                    {s.icon}
                  </span>
                  <div className="z-10 flex flex-col items-center w-full px-2">
                    <span className="w-full text-lg font-medium text-center duration-150 text-zinc-200 group-hover:text-white font-display md:text-xl lg:text-2xl truncate">
                      {s.handle}
                    </span>
                    <span className="mt-2 text-sm text-center text-zinc-400 group-hover:text-zinc-300">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    
    </div>
  );
}
