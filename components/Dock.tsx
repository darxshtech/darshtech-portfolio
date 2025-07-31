"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from "framer-motion";
import React, {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type DockItemData = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  dockHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  mouseX: MotionValue;
  spring: SpringOptions;
  distance: number;
  baseItemSize: number;
  magnification: number;
};

function DockItem({
  children,
  className = "",
  onClick,
  onMouseEnter,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  // Use CSS transitions for better performance
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <motion.div
      ref={ref}
      style={{
        width: baseItemSize,
        height: baseItemSize,
        transform: isHovering 
          ? 'translateY(-10px) scale(1.2)' 
          : 'translateY(0) scale(1)',
        transition: 'transform 0.15s ease-in-out',
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
      }}
      onMouseEnter={() => {
        setIsHovering(true);
        onMouseEnter?.();
      }}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
      className={`relative flex items-center justify-center ${className}`}
      role="button"
      aria-haspopup="false"
    >
      {Children.map(children, (child) => 
        cloneElement(child as React.ReactElement, { isHovered })
      )}
    </motion.div>
  );
}

type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
};

function DockLabel({ children, className = "", ...rest }: DockLabelProps) {
  const { isHovered } = rest as { isHovered: MotionValue<number> };
  const [isVisible, setIsVisible] = useState(false);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={labelRef}
          initial={{ opacity: 0, y: -8 }}
          animate={{ 
            opacity: 1, 
            y: -20,
            transition: {
              opacity: { duration: 0.1, ease: [0.4, 0, 0.2, 1] },
              y: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
            }
          }}
          exit={{ 
            opacity: 0, 
            y: -8,
            transition: { duration: 0.08, ease: [0.4, 0, 1, 1] }
          }}
          className={`${className} absolute left-1/2 w-auto whitespace-nowrap rounded-md bg-black/80 px-2.5 py-1 text-xs text-white font-medium`}
          style={{ 
            transform: 'translateX(-50%)',
            backdropFilter: 'blur(4px)',
            fontSize: '11px',
            lineHeight: '1',
            letterSpacing: '0.4px',
            zIndex: 1000,
            pointerEvents: 'none',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            whiteSpace: 'nowrap',
            minWidth: 'max-content',
            transformOrigin: 'center bottom',
            willChange: 'transform, opacity'
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type DockIconProps = {
  className?: string;
  children: React.ReactNode;
};

function DockIcon({ children, className = "" }: DockIconProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

export default function Dock({
  items,
  className = "",
  distance = 80,
  panelHeight,
  baseItemSize = 36,
  dockHeight,
  magnification = 1.2,
  // Simple animation config
  spring: springProp = {}
}: DockProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    // Trigger the fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  const mouseX = useMotionValue(Infinity);
  const dockRef = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (dockRef.current) {
      const rect = dockRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      isHovered.set(1);
    }
  };
  
  const handleMouseLeave = () => {
    isHovered.set(0);
    mouseX.set(Infinity);
    setActiveIndex(null);
  };
  
  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <motion.div 
      className="fixed top-24 left-0 right-0 z-50 flex justify-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: isMounted ? 1 : 0,
        y: isMounted ? 0 : 10
      }}
      transition={{ 
        duration: 0.5,
        ease: [0.2, 0, 0, 1],
        delay: 0.3
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex items-end justify-center h-full px-6 py-1.5"
        style={{
          paddingLeft: '1rem',
          paddingRight: '1rem',
          transform: 'translateZ(0)'
        }}
      >
        <div className="flex items-end h-full gap-10">
          {items.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center mb-16">
              <DockItem
                className={`${activeIndex === index ? 'z-10' : ''}`}
                mouseX={mouseX}
                spring={springProp}
                distance={80}
                magnification={magnification}
                baseItemSize={baseItemSize}
                onClick={item.onClick}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
              {activeIndex === index && (
                <motion.div 
                  className="absolute top-full mt-6 bg-black/80 text-white text-xs px-4 py-2 rounded whitespace-nowrap shadow-xl"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    backdropFilter: 'blur(4px)',
                    fontSize: '11px',
                    lineHeight: '1',
                    letterSpacing: '0.4px',
                    pointerEvents: 'none',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                    whiteSpace: 'nowrap',
                    minWidth: 'max-content',
                  }}
                >
                  {item.label}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
