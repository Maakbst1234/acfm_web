import { motion } from 'motion/react';
import { CheckCircle, Target, Eye, ArrowRight } from 'lucide-react';
import about from '../content/about.json';

export function AboutSection() {
  const points = about.points;

  return (
    <section id="about" className="bg-white">
      <div className="container-limited">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-12">
          
          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-secondary">
              <img 
                src={about.image} 
                alt="Facility Excellence" 
                className="w-full h-[300px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-accent/5" />
            </div>
            
            {/* Experience Floating Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-6 md:p-8 rounded-[32px] shadow-2xl border border-accent/10 hidden sm:block"
            >
              <p className="text-accent text-3xl md:text-5xl font-black mb-1">{about.experience}</p>
              <p className="text-primary font-bold leading-tight text-sm md:text-base">Years of<br />Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <div className="space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/5 text-accent text-xs font-black uppercase tracking-widest mb-6">
                {about.badge}
              </span>
              <h2 className="mb-6 text-primary">
                {about.heading}
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed mb-8 max-w-xl">
                <p>
                  {about.body}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {points.map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="font-bold text-primary/80 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 md:p-8 rounded-[32px] bg-secondary border border-accent/5 italic text-muted-foreground line-height-relaxed text-sm md:text-base border-l-4 border-l-accent font-medium"
            >
              "{about.quote}"
            </motion.div>
          </div>
        </div>

        {/* Mission & Vision Integration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-4 border-t border-accent/10">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="group relative bg-secondary p-6 lg:p-8 rounded-[40px] border border-accent/5 hover:border-accent/20 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-accent transition-all duration-500">
              <Target className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 text-primary group-hover:text-accent transition-colors">{about.mission.title}</h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 font-medium">
              {about.mission.description}
            </p>
            <div className="mt-auto flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
              Reliability First <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-secondary p-6 lg:p-8 rounded-[40px] border border-accent/5 hover:border-accent/20 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-accent transition-all duration-500">
              <Eye className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 text-primary group-hover:text-accent transition-colors">{about.vision.title}</h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 font-medium">
              {about.vision.description}
            </p>
            <div className="mt-auto flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
              Trusted Excellence <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
