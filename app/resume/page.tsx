"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Crosshair from "../components/crosshair";
import { Download, ExternalLink, X } from "lucide-react";
import { Header } from "../components/header";
import Particles from "../components/particles";

export default function ResumePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAiming, setIsAiming] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [aimProgress, setAimProgress] = useState(0);
  const [isPreviewLoading, setIsPreviewLoading] = useState(true);
  const aimTimeoutRef = useRef<NodeJS.Timeout>();
  const progressIntervalRef = useRef<NodeJS.Timeout>();
  
  // Path to your resume files in the public folder
  const resumePdfUrl = '/resume.pdf';
  const resumePreviewUrl = '/resume.png';
  const resumeFileName = 'Chaitanya Patil Resume.pdf';

  const handleMouseEnter = () => {
    setIsAiming(true);
    setAimProgress(0);
    
    // Start progress bar
    progressIntervalRef.current = setInterval(() => {
      setAimProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(progressIntervalRef.current);
          setShowModal(true);
          return 100;
        }
        return newProgress;
      });
    }, 10);
  };

  const handleMouseLeave = () => {
    setIsAiming(false);
    clearInterval(progressIntervalRef.current);
    setAimProgress(0);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdfUrl;
    link.download = resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };
  
  const handlePreviewLoad = () => {
    setIsPreviewLoading(false);
  };

  useEffect(() => {
    return () => {
      if (aimTimeoutRef.current) clearTimeout(aimTimeoutRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Header />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="w-full max-w-4xl px-4 mx-auto my-auto pt-32">
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Download My Resume
        </motion.h1>
        
        <motion.p 
          className="text-zinc-400 mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Aim at the target and hold to download
        </motion.p>

        <div 
          ref={containerRef}
          className="relative w-64 h-64 mx-auto mb-12"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className={`w-32 h-32 rounded-full border-2 ${isAiming ? 'border-green-500' : 'border-zinc-600'} transition-colors duration-300 flex items-center justify-center relative`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
              <div className="absolute w-1/2 h-1 bg-white/10"></div>
              <div className="absolute w-1 h-1/2 bg-white/10"></div>
              
              {isAiming && (
                <div className="absolute inset-0 rounded-full" style={{
                  background: `conic-gradient(#10b981 ${aimProgress}%, #3f3f46 0%)`,
                  WebkitMask: 'radial-gradient(transparent 60%, black 60.5%)',
                  mask: 'radial-gradient(transparent 60%, black 60.5%)',
                }} />
              )}
            </div>
          </div>
          
          <Crosshair containerRef={containerRef} color="#10b981" />
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              className="bg-zinc-900 rounded-xl p-6 w-full max-w-4xl mx-4 border border-zinc-800 relative"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">My Resume</h2>
                <p className="text-zinc-400">Preview and download options</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Preview Section */}
                <div className="bg-zinc-950/50 rounded-lg border border-zinc-800 overflow-hidden">
                  <div className="p-4 border-b border-zinc-800 bg-zinc-900/50 flex justify-between items-center">
                    <h3 className="font-medium text-white">Preview</h3>
                    <a 
                      href={resumePdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 flex items-center"
                    >
                      View Full PDF <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                  <div className="h-[500px] overflow-auto relative bg-zinc-900 flex items-center justify-center">
                    {isPreviewLoading && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-pulse text-zinc-600">Loading preview...</div>
                      </div>
                    )}
                    <img 
                      src={resumePreviewUrl}
                      alt="Resume Preview"
                      className={`max-w-full max-h-full object-contain ${isPreviewLoading ? 'opacity-0' : 'opacity-100'} transition-opacity`}
                      onLoad={handlePreviewLoad}
                    />
                  </div>
                </div>
                
                {/* Download Section */}
                <div className="flex flex-col">
                  <div className="flex-1 bg-zinc-950/50 rounded-lg border border-zinc-800 p-6 flex flex-col">
                    <h3 className="font-medium text-white mb-4">Download Options</h3>
                    
                    <div className="space-y-4 flex-1">
                      <div className="p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                        <h4 className="font-medium text-white mb-2">Standard Download</h4>
                        <p className="text-sm text-zinc-400 mb-4">Save the PDF file to your device</p>
                        <button
                          onClick={handleDownload}
                          className="w-full px-4 py-2.5 rounded-lg font-medium text-white bg-green-600 hover:bg-green-500 transition-colors flex items-center justify-center"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </button>
                      </div>
                      
                      <div className="p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                        <h4 className="font-medium text-white mb-2">View in Browser</h4>
                        <p className="text-sm text-zinc-400 mb-4">Open the resume in a new tab</p>
                        <a
                          href={resumePdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full px-4 py-2.5 rounded-lg font-medium text-center text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Open Full PDF
                        </a>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-zinc-800">
                      <p className="text-xs text-zinc-500">
                        File: {resumeFileName} • {new Date().getFullYear()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
