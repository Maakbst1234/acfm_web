import { motion } from 'motion/react';
import { Wifi, Dumbbell, Stethoscope, Shirt, Eraser, Star, Coffee, Trophy, Droplets, ShieldCheck, Users } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const facilities = [
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi',
    description: 'Blazing fast, uninterrupted internet access throughout the common areas and living blocks.',
    image: '/imports/wifi.jpg',
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
    image: '/imports/prayer_room.jpg',
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
    image: '/imports/laundry.jpg',
    color: 'from-secondary/60 to-secondary/30'
  },
  {
    icon: Droplets,
    title: 'Drinking Water Stations',
    description: 'Filtered, UV-treated cool drinking water available 24/7 across multiple site locations.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=800&auto=format&fit=crop',
    color: 'from-primary/80 to-primary/40'
  }
];

export function FacilityGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {});

    const timer = setTimeout(() => {
      if (!containerRef.current || !scrollWrapperRef.current) return;

      ctx.add(() => {
        const scrollWidth = scrollWrapperRef.current!.scrollWidth;
        const viewportWidth = window.innerWidth;
        
        if (scrollWidth > viewportWidth) {
          gsap.to(scrollWrapperRef.current, {
            x: () => -(scrollWidth - viewportWidth),
            ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                // End is proportional to the scroll width - increased for better control on mobile
                end: () => "+=" + (scrollWidth * 1.5),
                invalidateOnRefresh: true,
                refreshPriority: 1
              }
          });
        }
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 w-full flex flex-col justify-center pt-24 md:pt-10 pb-20 bg-secondary/10">
      {/* Integrated Header */}
      <div className="container-limited text-center mb-6">
        <span className="text-accent font-black uppercase tracking-widest text-[10px] mb-4 block">Our Facilities</span>
        <h2 className="text-primary font-black text-3xl lg:text-4xl uppercase mb-4">Everything Your Team Needs. <br/> All in One Place.</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto font-medium text-sm leading-relaxed">
          From the gym to the clinic, from the prayer room to the laundry — Arabian Comfort is a fully self-contained community built around the well-being of your workforce.
        </p>
      </div>

      {/* Horizontal Scroll Content */}
      <div className="w-full overflow-hidden pt-12 pb-6">
        <div ref={scrollWrapperRef} className="flex gap-10 flex-nowrap w-max px-[10vw]">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative h-[520px] w-[85vw] sm:w-[380px] shrink-0 flex flex-col bg-white rounded-[40px] shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(20,61,67,0.15)] transition-all duration-700 overflow-hidden border border-primary/5"
              style={{ perspective: '1500px' }}
            >
              {/* Main Visual Header */}
              <div className="h-[65%] relative overflow-hidden">
                <motion.img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-10`} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>



              {/* Bottom Content Area */}
              <div className="flex-1 px-8 pt-8 pb-8 flex flex-col justify-start bg-white relative">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/[0.02] rounded-tl-[100px] pointer-events-none" />
                <h4 className="text-2xl font-black text-primary mb-3 group-hover:text-accent transition-colors duration-300">{facility.title}</h4>
                <p className="text-muted-foreground text-[14px] leading-relaxed font-medium line-clamp-3 mb-6">{facility.description}</p>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center border border-accent/10 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                      <facility.icon className="w-5 h-5 text-accent group-hover:text-white transition-all duration-500" />
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary/30 group-hover:text-accent transition-colors">Premium Facility</span>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/10 rounded-[48px] transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
