import { motion } from 'motion/react';
import { ShieldCheck, Award, FileCheck, HeartPulse, UserCheck, Flame } from 'lucide-react';

const badges = [
  { text: "HACCP Certified — Food Safety", icon: Award },
  { text: "ADNOC Compliant — Approved Standards", icon: ShieldCheck },
  { text: "ISO 9001:2015 — Quality Management", icon: FileCheck },
  { text: "ISO 14001:2015 — Environmental Management", icon: FileCheck },
  { text: "ISO 45001:2018 — Occupational Safety", icon: FileCheck },
  { text: "DOH Certified Staff — Abu Dhabi Health Authority", icon: HeartPulse },
  { text: "BLS Trained Personnel — Emergency Response", icon: UserCheck },
  { text: "HSE Compliant — Health, Safety and Environment", icon: Flame }
];

export function ComplianceStrip() {
  return (
    <section className="bg-secondary/40 border-y border-accent/10 overflow-hidden relative py-20 lg:py-28">
      <div className="container-limited">
        <div className="text-center mb-16 lg:mb-20">
            <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] block mb-4">Built on the Highest Standards</span>
            <h4 className="text-primary font-black text-3xl lg:text-4xl uppercase mb-4">Every service we deliver is backed by certifications</h4>
            <p className="text-muted-foreground font-medium text-sm lg:text-base max-w-2xl mx-auto italic">Internationally recognised and UAE regulatory compliant.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, backgroundColor: '#FFFFFF' }}
              className="flex items-center gap-2.5 bg-white/50 px-5 py-3.5 rounded-2xl border border-accent/10 shadow-sm transition-all duration-500"
            >
              <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <badge.icon className="w-3.5 h-3.5 text-accent" />
              </div>
              <span className="text-primary font-black text-[10px] md:text-xs uppercase tracking-wider whitespace-nowrap">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
