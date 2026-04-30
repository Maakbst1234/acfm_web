import { motion } from 'motion/react';
import { Wifi, Dumbbell, Stethoscope, Shirt, Eraser, Star, Coffee, Trophy, Droplets, ShieldCheck, Users } from 'lucide-react';

const facilities = [
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi',
    description: 'Blazing fast, uninterrupted internet access throughout the common areas and living blocks.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
    color: 'from-primary/80 to-primary/40'
  },
  {
    icon: Dumbbell,
    title: 'Modern Fitness Center',
    description: 'Fully equipped gym with cardio, free weights, and strength machines to keep your team active.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    color: 'from-accent/80 to-accent/40'
  },
  {
    icon: Star,
    title: 'Prayer Room & Mosque',
    description: 'Clean, peaceful, and spacious areas dedicated for spiritual well-being and Friday prayers.',
    image: 'https://images.unsplash.com/photo-1542667261-0b3d8196e83d?q=80&w=800&auto=format&fit=crop',
    color: 'from-secondary/80 to-secondary/40'
  },
  {
    icon: Coffee,
    title: 'Recreation & Gaming Hub',
    description: 'Social hall featuring table tennis, billiards, carrom, and a comfortable TV lounge area.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
    color: 'from-primary/60 to-primary/30'
  },
  {
    icon: Trophy,
    title: 'Outdoor Sports Courts',
    description: 'Professionally maintained volleyball, basketball, and badminton courts for team sports.',
    image: 'https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?q=80&w=800&auto=format&fit=crop',
    color: 'from-accent/60 to-accent/30'
  },
  {
    icon: Shirt,
    title: 'Self-Service Laundry',
    description: 'Easily accessible industrial-grade washing and drying machines for all residents.',
    image: 'https://images.unsplash.com/photo-1545173153-5d0b4fe00030?q=80&w=800&auto=format&fit=crop',
    color: 'from-secondary/60 to-secondary/30'
  },
  {
    icon: Droplets,
    title: 'Drinking Water Stations',
    description: 'Filtered, UV-treated cool drinking water available 24/7 across multiple site locations.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=800&auto=format&fit=crop',
    color: 'from-primary/80 to-primary/40'
  },
  {
    icon: Users,
    title: 'Community Lounges',
    description: 'Vibrant indoor and outdoor spaces designed for social interaction and relaxation.',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=800&auto=format&fit=crop',
    color: 'from-accent/80 to-accent/40'
  }
];

export function FacilityGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {facilities.map((facility, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -12 }}
          className="group relative h-[520px] flex flex-col bg-white rounded-[48px] shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(20,61,67,0.15)] transition-all duration-700 overflow-hidden border border-primary/5"
          style={{
            perspective: '1500px'
          }}
        >
          {/* Main Visual Header */}
          <div className="h-[50%] relative overflow-hidden">
            <motion.img
              src={facility.image}
              alt={facility.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8 }}
            />
            {/* Color Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-10`} />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>

          {/* Overlapping Icon Capsule */}
          <div className="absolute top-[50%] left-10 -translate-y-1/2 z-20">
            <div className="w-20 h-20 bg-white rounded-[28px] shadow-2xl flex items-center justify-center border border-accent/10 group-hover:bg-accent group-hover:border-accent group-hover:rotate-[15deg] transition-all duration-500 ease-out">
              <facility.icon className="w-10 h-10 text-accent group-hover:text-white transition-all duration-500" />
            </div>
          </div>

          {/* Bottom Content Area */}
          <div className="h-[50%] p-10 pt-16 flex flex-col justify-end bg-white relative">
             {/* Background Decoration */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/[0.02] rounded-tl-[100px] pointer-events-none" />

            <h4 className="text-2xl font-black text-primary mb-4 group-hover:text-accent transition-colors duration-300">
              {facility.title}
            </h4>
            <p className="text-muted-foreground text-[14px] leading-relaxed font-medium line-clamp-3 mb-8">
              {facility.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-accent/30" />
                <div className="w-2 h-2 rounded-full bg-accent/10" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary/30 group-hover:text-accent transition-colors">
                Premium Facility
              </span>
            </div>
          </div>

          {/* Thin Glowing Border Overlay */}
          <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/10 rounded-[48px] transition-all duration-700 pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}
