import { motion } from 'motion/react';
import { ShieldCheck, Bed, Briefcase, Heart, Settings, Users, ArrowRight } from 'lucide-react';

const benefits = [
  {
    title: 'Fully UAE and ADNOC Compliant',
    icon: ShieldCheck,
    description: 'Every aspect of our facility meets or exceeds UAE labour laws, ADNOC standards, ISO 9001, 14001, and 45001. Zero compliance risk.',
    services: ['Zero Compliance Risk', 'SOPs & HSE Integrated', 'Regulator Ready']
  },
  {
    title: 'One Contract, Zero Headaches',
    icon: Bed,
    description: 'One agreement covers accommodation, food, cleaning, security, medical, maintenance, and recreation. No juggling multiple vendors.',
    services: ['All-Inclusive Flat Fee', 'Simplified Procurement', 'Total Facility Care']
  },
  {
    title: 'Flexible Capacity',
    icon: Briefcase,
    description: 'We accommodate teams of all sizes — from small specialist crews to large-scale labour forces. Managed professionally.',
    services: ['Scalable Crew Sizes', 'Proper Grade Segregation', 'Rapid Onboarding']
  },
  {
    title: 'Happier Employees, Better Performance',
    icon: Heart,
    description: 'Comfortable accommodation, good food, and genuine care for well-being directly improves employee retention and morale.',
    services: ['Nutrition Focused', 'Clean Environments', 'Well-rested Workforce']
  },
  {
    title: 'Transparent Reporting',
    icon: Settings,
    description: 'Regular inspection reports, HSE documentation, occupancy records, and compliance logs — always available for your HR teams.',
    services: ['Real-time KPIs', 'HSE Audit Trails', 'Admin Convenience']
  },
  {
    title: 'Experienced Management Team',
    icon: Users,
    description: 'On-site team with deep experience in UAE camp management. We understand ADNOC sites and contractor requirements.',
    services: ['On-site Supervisor 24/7', 'Industry Knowledge', 'Conflict Resolution']
  }
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-secondary/30 relative overflow-hidden py-32">
      <div className="container-limited relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-accent font-black uppercase tracking-widest text-[10px] mb-4 block">Trust & Reliability</span>
            <h2 className="text-primary leading-tight font-black text-4xl lg:text-5xl uppercase">
              Why Leading UAE Companies Trust Arabian Comfort
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-muted-foreground max-w-sm font-medium"
          >
            We handle everything — so you can focus on your projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="bg-white p-10 rounded-[40px] border border-primary/5 hover:border-accent/30 shadow-xl hover:shadow-[0_20px_60px_-15px_rgba(82,184,177,0.15)] transition-all duration-500 group flex flex-col relative overflow-hidden"
            >
              {/* Large Background Index Number */}
              <div 
                className="absolute -right-6 top-6 text-9xl font-black text-primary/[0.03] select-none pointer-events-none group-hover:text-accent/[0.05] transition-colors duration-500"
              >
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Side Accent Line */}
              <div className="absolute left-0 top-12 bottom-12 w-1 bg-accent/10 rounded-r-full group-hover:bg-accent transition-colors duration-500" />

              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 bg-secondary group-hover:bg-accent group-hover:rotate-[10deg] transition-all duration-500 shadow-sm"
              >
                <pillar.icon className="w-8 h-8 text-accent group-hover:text-white transition-all duration-500" />
              </div>

              <h3 className="text-2xl font-black mb-4 text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
                {pillar.title}
              </h3>
              
              <p className="text-muted-foreground mb-10 text-[14px] leading-relaxed font-medium">
                {pillar.description}
              </p>
              
              <div className="mt-auto space-y-4">
                {pillar.services.map((service, sIndex) => (
                  <div key={sIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    <span className="text-[12px] font-bold text-primary/70 group-hover:text-primary transition-colors">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
