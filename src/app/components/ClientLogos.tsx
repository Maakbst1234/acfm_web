import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import clients from '../../content/clients.json';

const logos = clients.logos;

export function ClientLogos() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeLogoIndex, setActiveLogoIndex] = useState<number | null>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleInteraction = (index: number) => {
    // Clear any existing timer
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);

    setIsPaused(true);
    setActiveLogoIndex(index);

    // Resume after 1 second
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
      setActiveLogoIndex(null);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  return (
    <section className="py-8 bg-secondary/30 overflow-hidden relative border-y border-accent/10">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(20,61,67,0.04) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-7xl mx-auto px-6 mb-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent font-bold text-xs md:text-sm mb-4"
        >
          <span>Our Trusted Partners</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-black text-primary"
        >
          Collaborating with the Best
        </motion.h2>
      </div>

      <div className="relative flex overflow-hidden py-4">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 50s linear infinite;
            display: flex;
            width: max-content;
          }
        `}} />

        {/* Left/Right Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

        <div 
          className="animate-marquee flex whitespace-nowrap gap-8 md:gap-12 pl-8 md:pl-12 items-center"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {/* Tripled array for seamless infinite loop */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => handleInteraction(index)}
              onTouchStart={() => handleInteraction(index)}
              whileHover={{ scale: 1.05 }}
              className="w-48 md:w-60 h-28 shrink-0 flex items-center justify-center p-4 bg-white rounded-[32px] shadow-sm border border-accent/10 hover:shadow-xl transition-all duration-500 cursor-pointer group"
            >
              <img
                src={logo.logo}
                alt="Partner Logo"
                className={`w-full h-full object-contain transition-all duration-700 ${
                  activeLogoIndex === index 
                    ? 'grayscale-0 opacity-100 scale-110' 
                    : 'grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
