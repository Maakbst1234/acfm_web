import { motion, useScroll, useTransform, animate, useInView, useMotionValue } from 'motion/react';
import { ArrowRight, Shield } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { Ribbons } from './Ribbons';
import hero from '../content/hero.json';
import statsData from '../content/stats.json';

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 2,
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [inView, to, count]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0px', '-100px']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <Ribbons
          baseThickness={40}
          colors={['#143D43', '#52B8B1', '#E8F5F5']} 
          speedMultiplier={0.5}
          maxAge={600}
          enableFade={true}
          enableShaderEffect={true}
          effectAmplitude={1.5}
          backgroundColor={[0, 0, 0, 0]}
        />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(20,61,67,0.04) 1px, transparent 0)',
          backgroundSize: 'clamp(24px, 4vw, 48px) clamp(24px, 4vw, 48px)'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-16 flex flex-col items-center">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent font-bold text-xs md:text-sm mb-8 whitespace-nowrap"
        >
          <Shield className="w-4 h-4" />
          <span>{hero.badge}</span>
        </motion.div>

        {/* Main Heading with Quote Type Font */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-12 text-center"
        >
          {/* Decorative Opening Quote */}
          <span className="absolute -top-12 -left-4 md:-left-12 text-accent/10 text-[120px] md:text-[180px] font-serif select-none pointer-events-none">“</span>
          
          <h1
            className="text-primary font-light max-w-5xl leading-[1] tracking-tight relative z-10"
            style={{ 
              fontSize: 'clamp(2.5rem, 9vw, 6.5rem)',
              fontFamily: '"Cormorant Garamond", serif'
            }}
          >
            {hero.title1} <br />
            <span className="text-accent italic font-medium">{hero.title2}</span>
          </h1>

          {/* Decorative Closing Quote */}
          <span className="absolute -bottom-24 -right-4 md:-right-12 text-accent/10 text-[120px] md:text-[180px] font-serif select-none pointer-events-none">”</span>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-lg md:text-2xl max-w-3xl mb-6 leading-relaxed text-center"
        >
          {hero.subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-5 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3 text-lg"
          >
            {hero.ctaText}
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

        {/* Floating Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-6 bg-white/70 backdrop-blur-xl rounded-[32px] border border-accent/10 shadow-2xl relative z-20"
        >
          {statsData.items.map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left border-accent/10 md:border-r last:border-0 md:px-4">
              <p className="text-3xl lg:text-4xl font-black text-accent mb-1 tracking-tighter">
                <CountUp to={parseInt(stat.number)} suffix={stat.suffix} />
              </p>
              <p className="font-bold text-primary uppercase tracking-widest text-[9px] mb-1">{stat.label}</p>
              <p className="text-muted-foreground text-[10px] hidden lg:block">{stat.sub || 'Partnered Excellence'}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Interactive Image with entrance and parallax */}
      <div className="relative w-full max-w-7xl mx-auto px-6 mt-4 mb-4 z-0">
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            style={{ y, opacity }}
            className="w-full aspect-[21/9] min-h-[300px] rounded-[40px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-secondary relative"
          >
            <img 
              src={hero.backgroundImage} 
              alt="Modern Facility" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </div>
      </div>

      {/* Decorative Interactive Image with entrance and parallax */}
      <div className="relative w-full max-w-7xl mx-auto px-6 mt-4 mb-4 z-0">
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
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
        </motion.div>
      </div>
    </div>
  );
}
