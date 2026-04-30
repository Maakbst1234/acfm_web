import { motion } from 'motion/react';
import { Target, Eye, ArrowRight } from 'lucide-react';

export function MissionVision() {
  return (
    <section id="mission" className="bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-limited relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-black uppercase tracking-widest text-[10px] mb-4 block">Core Purpose</span>
          <h2 className="text-primary">Our Strategic Philosophy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-secondary p-10 lg:p-14 rounded-[40px] border border-accent/5 hover:border-accent/20 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-accent group-hover:text-white transition-all duration-500">
              <Target className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-6 text-primary group-hover:text-accent transition-colors">Our Mission</h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 font-medium">
              To provide UAE companies with the most reliable, compliant, and genuinely comfortable accommodation solution for their workforce. We exist to take the complexity of camp management off your plate — delivering safety, hygiene, great food, and real human care, every single day.
            </p>
            <div className="mt-auto flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest">
              Standard Bearer <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="group relative bg-secondary p-10 lg:p-14 rounded-[40px] border border-accent/5 hover:border-accent/20 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-accent group-hover:text-white transition-all duration-500">
              <Eye className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-6 text-primary group-hover:text-accent transition-colors">Our Vision</h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 font-medium">
              To be the most trusted name in corporate accommodation management across the UAE — known not just for compliance and quality, but for the warmth and dignity we bring to every resident's daily life.
            </p>
            <div className="mt-auto flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest">
              Trusted Partner <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
