import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function LogoOpening() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  // Generate deterministic particles for 3D premium effect
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${(i * 13) % 100}%`,
    top: `${(i * 17) % 100}%`,
    duration: 3 + (i % 3),
    delay: (i % 10) * 0.2,
    size: 2 + (i % 4) * 2,
  }));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-white"
          style={{ perspective: '2000px' }}
        >
          {/* 3D Floating Particles */}
          <div className="absolute inset-0 z-0 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ 
                  opacity: 0, 
                  y: p.top, 
                  x: p.left,
                  z: Math.random() * -500,
                  rotateX: 0, 
                  rotateY: 0 
                }}
                animate={{ 
                  opacity: [0, 0.8, 0], 
                  y: `calc(${p.top} - 30vh)`,
                  z: Math.random() * 500,
                  rotateX: 360, 
                  rotateY: 360 
                }}
                transition={{ 
                  duration: p.duration, 
                  delay: 1.5 + p.delay, 
                  ease: "easeOut"
                }}
                className="absolute bg-accent rounded-sm shadow-[0_0_10px_rgba(82,184,177,0.8)]"
                style={{ 
                  width: `${p.size}px`, 
                  height: `${p.size}px`,
                  left: p.left,
                  top: p.top
                }}
              />
            ))}
          </div>

          {/* Central Logo & Text Reveal Area */}
          <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
            {/* Glowing background behind logo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 2 }}
              className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-accent/20 via-primary/5 to-transparent blur-[50px] rounded-full"
            />

            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 flex items-center justify-center">
              {/* Dynamic SVG Roof Drawing Left-to-Right */}
              <motion.svg 
                viewBox="0 0 100 65" 
                className="absolute top-[10%] inset-x-0 w-[95%] mx-auto h-auto drop-shadow-2xl z-20" 
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                animate={{ opacity: 0, x: 60, y: -10, scale: 0.7 }}
                transition={{ delay: 2.2, duration: 0.8, ease: "easeIn" }}
              >
                <defs>
                  <linearGradient id="roofGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="var(--accent)" />
                  </linearGradient>
                </defs>
                <motion.path 
                  d="M 0 35 L 45 0 L 72 23.5 L 72 8 L 84 8 L 84 34 L 100 48 L 100 63 L 45 15 L 0 50 Z" 
                  fill="url(#roofGrad)"
                  stroke="url(#roofGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, fillOpacity: 0 }}
                  animate={{ pathLength: 1, fillOpacity: [0, 0, 1, 1] }}
                  transition={{ 
                    pathLength: { duration: 1.8, ease: "easeInOut" }, 
                    fillOpacity: { duration: 2.2, times: [0, 0.8, 1, 1] } 
                  }}
                />
              </motion.svg>

              {/* The Original Logo uncovered gradually */}
              <motion.img 
                initial={{ opacity: 0, filter: "blur(6px)", scale: 0.8 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ delay: 2.6, duration: 1.2, ease: "easeOut" }}
                src="/src/imports/acfm_final_logo_only.png" 
                alt="ACFM" 
                className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(20,61,67,0.3)] z-10"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 2.5 }}
              className="text-center z-10"
            >
              <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight mb-2">
                ARABIAN COMFORT
              </h2>
              <p className="text-accent font-black tracking-[0.4em] uppercase text-sm">
                Facility Management
              </p>
            </motion.div>
          </div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}
