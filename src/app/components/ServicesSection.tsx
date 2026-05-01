import { motion } from 'motion/react';
import { Bed, Utensils, Stethoscope, Eraser, ShieldCheck, Heart, ArrowRight, Activity } from 'lucide-react';

const servicePillars = [
  {
    title: 'Workforce Accommodation',
    icon: Bed,
    description: 'Scalable, ADNOC-compliant living solutions for crews of all sizes. Built for comfort and safety.',
    services: ['Grade-based segregation', 'Furnished living units', 'Standard housekeeping']
  },
  {
    title: 'Professional Catering',
    icon: Utensils,
    description: 'Nutritious, high-quality multi-cuisine meals prepared in HACCP-certified facilities.',
    services: ['Dietary management', 'Global menu rotations', 'Safe food handling']
  },
  {
    title: 'On-site Medical Care',
    icon: Stethoscope,
    description: 'DOH-certified medical clinics staffed 24/7 with professional nurses and doctors.',
    services: ['24/7 Medical support', 'Emergency response', 'Regular health audits']
  },
  {
    title: 'Cleaning & Housekeeping',
    icon: Eraser,
    description: 'Meticulous on-site maintenance and room cleaning using standards-approved safe protocols.',
    services: ['Sanitization cycles', 'Waste management', 'Linen & laundry care']
  },
  {
    title: 'Security & Access Control',
    icon: ShieldCheck,
    description: 'Round-the-clock security personnel and controlled entry/exit to ensure site-wide safety.',
    services: ['24/7 Gate security', 'Patrolling teams', 'Monitoring systems']
  },
  {
    title: 'HSE & Compliance',
    icon: Activity,
    description: 'Strict adherence to ISO and UAE regulatory frameworks to ensure zero operational risk.',
    services: ['Integrated SOPs', 'Continuous HSE audits', 'Compliance reporting']
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white relative overflow-hidden pt-4 pb-8">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/2 rounded-full blur-[100px] -mr-40 -mt-40 opacity-40 pointer-events-none" />
      
      <div className="container-limited relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-accent font-black uppercase tracking-widest text-[10px] mb-4 block">Our Operations</span>
            <h2 className="text-primary leading-tight font-black text-4xl lg:text-5xl uppercase">
              Core Facility Management Services
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-muted-foreground max-w-sm font-medium italic"
          >
            Integrated solutions that keep your projects running smoothly and your people safe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-secondary p-8 rounded-[32px] border border-primary/5 hover:border-accent/20 hover:bg-white hover:shadow-2xl transition-all duration-500 group flex flex-col"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent transition-all duration-500 shadow-sm bg-white"
              >
                <pillar.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-bold mb-4 text-primary group-hover:text-accent transition-colors">{pillar.title}</h3>
              <p className="text-muted-foreground mb-8 text-[13px] leading-relaxed">
                {pillar.description}
              </p>
              
              <ul className="space-y-2.5 mb-10 mt-auto">
                {pillar.services.map((service, sIndex) => (
                  <li key={sIndex} className="flex items-center gap-2 text-[12px] font-bold text-primary/70">
                    <div className="w-1 h-1 rounded-full bg-accent/40" />
                    {service}
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-all duration-500">
                Learn More <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
