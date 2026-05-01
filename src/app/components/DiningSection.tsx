import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { ChefHat, Clock, Star } from 'lucide-react';
import { useRef, useState } from 'react';

const dishes = [
  {
    image: 'https://images.unsplash.com/photo-1684568519316-f0fb02f7826b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    name: 'Grilled Chicken Supreme',
    description: 'Herb-marinated chicken with seasonal vegetables'
  },
  {
    image: 'https://images.unsplash.com/photo-1684568519320-8c6b14f7e65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    name: 'Asian Fusion Bowl',
    description: 'Traditional flavors reimagined with modern techniques'
  },
  {
    image: 'https://images.unsplash.com/photo-1771508558305-11364b4069b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    name: 'Chef\'s Special',
    description: 'Artisan plating with premium ingredients'
  },
  {
    image: 'https://images.unsplash.com/photo-1673912401514-f18331ef3818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    name: 'Gourmet Experience',
    description: 'Fine dining paired with exceptional wine selection'
  }
];

function DishCard({ dish, index }: { dish: typeof dishes[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 400 };
  const smoothRotateX = useSpring(mouseY, springConfig);
  const smoothRotateY = useSpring(mouseX, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate rotation
    mouseX.set(x / 10);
    mouseY.set(-(y / 10));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer h-full"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative h-full overflow-hidden bg-card border-none shadow-xl border-foreground/10"
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="relative h-64 overflow-hidden bg-black" style={{ transform: 'translateZ(-20px)' }}>
          <motion.img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover opacity-90"
            animate={{
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        </div>
        
        <div className="p-8 pb-12 flex flex-col justify-center h-[calc(100%-16rem)]" style={{ transformStyle: 'preserve-3d' }}>
          <motion.h4 
            className="text-2xl mb-4 text-foreground group-hover:text-primary transition-colors duration-500 font-semibold drop-shadow-sm"
            style={{ transform: 'translateZ(30px)' }}
          >
            {dish.name}
          </motion.h4>
          <motion.p 
            className="text-base text-muted-foreground leading-relaxed"
            style={{ transform: 'translateZ(10px)' }}
          >
            {dish.description}
          </motion.p>
        </div>

        {/* 3D Border Effect */}
        <motion.div 
          className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ transform: 'translateZ(5px)' }}
        />
        
        {/* Abstract Corner element */}
        <motion.div
          className="absolute bottom-4 right-4 w-12 h-12 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ transform: 'translateZ(40px)' }}
        />
      </motion.div>
    </motion.div>
  );
}

export function DiningSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring" }}
        className="text-center mb-10 px-6"
      >
        <span className="text-accent font-black uppercase tracking-widest text-[10px] mb-4 block">Catering Excellence</span>
        <h2 className="text-5xl lg:text-7xl mb-8 tracking-tight text-primary font-black">
          Food That Feels Like Home
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
          Our fully equipped catering facility serves fresh, hygienic, and nutritious meals across multiple cuisines — prepared daily by experienced chefs under HACCP food safety standards. Whether your team craves Indian, Arabic, Filipino, or Continental cuisine, our menu rotates to ensure variety and satisfaction every single day. Clean kitchens, spacious dining halls, and scheduled meal times make dining an experience, not just a necessity.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Multi-Cuisine Menu", "HACCP Certified Kitchen", "Daily Fresh Meals", "Spacious Dining Hall", "Dietary Requirements Catered", "Hygienic Food Handling"].map((tag, i) => (
            <span key={i} className="px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent font-black text-[10px] uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Featured Dining */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 relative">
        <motion.div
          initial={{ opacity: 0, x: -60, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
          className="relative group h-[600px] overflow-hidden shadow-2xl rounded-sm"
          style={{ perspective: '1200px' }}
        >
          <motion.div
            className="w-full h-full relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src="https://images.unsplash.com/photo-1771508558305-11364b4069b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
              alt="Chef plating"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
            
            <motion.div 
               className="absolute bottom-0 left-0 right-0 p-8"
               style={{ transform: 'translateZ(50px)' }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6 bg-white/20 backdrop-blur-md inline-flex px-4 py-2 border border-white/20 rounded-full">
                  <ChefHat className="w-5 h-5 text-accent" />
                  <span className="text-white text-[10px] tracking-widest font-black uppercase">Standard Certified</span>
                </div>
                <h3 className="text-4xl lg:text-5xl text-white mb-4 drop-shadow-xl font-black">
                  Nutrition & Hygiene
                </h3>
                <p className="text-white/90 text-lg font-medium drop-shadow-md max-w-md">
                  Safety and satisfaction in every meal, every day.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="flex flex-col gap-8 h-[600px]">
          {/* Dining Info Cards with 3D Hover */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            whileHover={{ scale: 1.02, rotateY: -5, rotateX: 2 }}
            className="flex-1 p-10 bg-card border border-foreground/5 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-center rounded-sm"
            style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-150 transition-transform duration-500" />
            <motion.div style={{ transform: 'translateZ(20px)' }}>
              <Clock className="w-10 h-10 text-accent mb-6 group-hover:-rotate-12 transition-transform duration-500" />
              <h4 className="text-2xl lg:text-3xl mb-4 font-black text-primary">Service Times</h4>
              <div className="space-y-3 text-muted-foreground text-sm font-bold">
                <p className="flex justify-between border-b border-primary/5 pb-2"><span>Breakfast</span> <span className="text-primary tracking-wider">7:00 AM - 11:00 AM</span></p>
                <p className="flex justify-between border-b border-primary/5 pb-2"><span>Lunch</span> <span className="text-primary tracking-wider">12:00 PM - 3:00 PM</span></p>
                <p className="flex justify-between pb-2"><span>Dinner</span> <span className="text-primary tracking-wider">6:00 PM - 11:00 PM</span></p>
              </div>
            </motion.div>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.3 }}
            whileHover={{ scale: 1.02, rotateY: -5, rotateX: -2 }}
            className="flex-1 p-10 bg-primary border-none shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-center rounded-sm"
            style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
          >
            {/* Ambient light effect inside card */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 blur-3xl rounded-full" />
            
            <motion.div style={{ transform: 'translateZ(30px)' }}>
              <Star className="w-10 h-10 text-accent mb-6 group-hover:rotate-[360deg] transition-transform duration-500" />
              <h4 className="text-2xl lg:text-3xl mb-4 font-black text-white">Global Cuisines</h4>
              <p className="text-white/80 leading-relaxed text-sm font-medium">
                Whether your team craves Indian, Arabic, Filipino, or Continental cuisine, our menu rotates to ensure variety and satisfaction every single day.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Menu Showcase */}
      <div className="relative py-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl mb-8 text-center font-semibold"
        >
          Signature Dishes
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <DishCard key={index} dish={dish} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
