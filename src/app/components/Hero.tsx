import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Shield, CheckCircle2, Users } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-white">
      {/* Dynamic Background Grid/Glow */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] min-w-[400px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[35vw] h-[35vw] min-w-[300px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(20,61,67,0.04) 1px, transparent 0)',
          backgroundSize: 'clamp(24px, 4vw, 48px) clamp(24px, 4vw, 48px)'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent font-bold text-xs md:text-sm mb-8 whitespace-nowrap"
        >
          <Shield className="w-4 h-4" />
          <span>UAE Premier Facility Management Partner</span>
        </motion.div>

        {/* Main Heading with Responsive Font Scaling */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-primary font-black mb-8 max-w-5xl leading-[1.1] text-center tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          Where Your Workforce <br />
          <span className="text-accent italic">Lives Better</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed text-center"
        >
          Premium managed accommodation for corporate teams — fully compliant with UAE regulations, ADNOC standards, and ISO requirements. Because a well-rested team is a high-performing team.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 w-full"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-5 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3 text-lg"
          >
            Explore Accommodation
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(82,184,177,0.05)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const event = new CustomEvent('openEnquiryForm');
              window.dispatchEvent(event);
            }}
            className="w-full sm:w-auto px-10 py-5 bg-transparent text-accent font-bold border-2 border-accent/20 rounded-2xl text-lg hover:border-accent transition-all duration-500 shadow-sm flex items-center justify-center"
          >
            Request a Quote
          </motion.button>
        </motion.div>

        {/* Floating Feature Strip - Fixed Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 py-8 px-10 bg-white/60 backdrop-blur-xl rounded-[32px] border border-accent/10 shadow-2xl relative z-20"
        >
          {[
            { icon: CheckCircle2, label: '100% Compliance', sub: 'ADNOC & HACCP' },
            { icon: Users, label: '3,000+ Residents', sub: 'Managed Daily' },
            { icon: Shield, label: '24/7 Support', sub: 'HSE & Maintenance' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-left p-2 border-b md:border-b-0 md:border-r border-accent/5 last:border-0 last:border-r-0">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-primary leading-none mb-1 truncate">{item.label}</p>
                <p className="text-sm text-muted-foreground truncate">{item.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Interactive Image - Better Zoom Stability */}
      <div className="relative w-full max-w-7xl mx-auto px-6 -mt-16 md:-mt-24 mb-20 z-0">
        <motion.div 
          style={{ y, opacity }}
          className="w-full aspect-[21/9] min-h-[300px] rounded-[40px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-secondary relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" 
            alt="Modern Facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
