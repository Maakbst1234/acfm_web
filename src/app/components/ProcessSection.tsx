import { motion } from 'motion/react';
import { Search, PenTool, ShieldCheck, FileBarChart } from 'lucide-react';

const steps = [
  {
    title: 'Contact Us',
    desc: 'Reach out with your team size, location, and accommodation requirements.',
    icon: Search
  },
  {
    title: 'We Propose a Solution',
    desc: 'We assess your needs and present a tailored accommodation plan with full pricing.',
    icon: PenTool
  },
  {
    title: 'We Set Everything Up',
    desc: 'Our team handles room allocation, onboarding, and full facility preparation.',
    icon: ShieldCheck
  },
  {
    title: 'Your Team Moves In',
    desc: 'From day one, enjoy a fully managed, comfortable, and compliant environment.',
    icon: FileBarChart
  }
];

export function ProcessSection() {
  return (
    <section className="bg-secondary relative overflow-hidden py-32">
      <div className="container-limited">
        <div className="text-center mb-20">
          <span className="text-accent font-black uppercase tracking-widest text-[10px] mb-4 block">Our Process</span>
          <h2 className="text-primary font-black text-4xl lg:text-5xl uppercase">Getting Started is Simple</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative group flex flex-col items-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[1px] bg-accent/20 z-0">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-full bg-accent origin-left opacity-30"
                  />
                </div>
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-[28px] bg-white shadow-xl flex items-center justify-center mb-8 group-hover:bg-accent transition-all duration-500 border border-accent/5">
                  <step.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-[9px] font-black flex items-center justify-center shadow-lg">
                    0{i + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-primary">{step.title}</h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed px-2">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
