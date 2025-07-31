"use client";

import React from "react";
import Particles from "./components/particles";
import { Header } from "./components/header";
import { Button } from "./components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Header />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="my-16 text-center animate-fade-in flex flex-col items-center space-y-8">
        <h2 className="text-sm text-zinc-500 max-w-md px-4">
          Welcome to my personal portfolio. I showcase my projects and experience in technology and development.
        </h2>
        
        <Link href="/resume" passHref>
          <Button
            variant="outline"
            className="group relative overflow-hidden border border-zinc-700 hover:border-zinc-500 transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-zinc-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
            <span className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700/0 via-zinc-900/0 to-zinc-800/0 group-hover:via-zinc-800/50 group-hover:to-zinc-800/80 transition-all duration-300"></span>
          </Button>
        </Link>
      </div>
      
    </div>
  );
}
