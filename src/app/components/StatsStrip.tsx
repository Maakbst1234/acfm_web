import { motion } from 'motion/react';

const stats = [
  { label: 'Beds Available', value: '500+', suffix: 'Premium Beds' },
  { label: 'Services Offered', value: '15+', suffix: 'Integrated' },
  { label: 'UAE & ADNOC Compliant', value: '100%', suffix: 'Certified' },
  { label: 'Room Categories', value: '4', suffix: 'Available' }
];

export function StatsStrip() {
  return (
    <section className="bg-white py-8 relative z-20">
      <div className="container-limited">
        <div className="bg-secondary rounded-[32px] md:rounded-[40px] p-8 md:p-14 border border-primary/5 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-center md:text-left md:border-r border-accent/20 last:border-0 md:px-6 lg:px-10"
              >
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent mb-2 tracking-tighter">
                  {stat.value}
                </p>
                <div className="space-y-0.5">
                  <p className="text-primary font-bold uppercase tracking-widest text-[9px] lg:text-[10px]">
                    {stat.label}
                  </p>
                  <p className="text-muted-foreground text-[11px] hidden lg:block">
                    {stat.suffix}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
