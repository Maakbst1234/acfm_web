import { motion, useMotionValue, useSpring } from 'motion/react';
import { useState } from 'react';

const rooms = [
  {
    name: 'Super Senior Suite',
    badge: 'Premium',
    description: 'Designed for senior leadership and top-tier executives. A spacious, private suite with premium furnishings, a dedicated workspace, en-suite bathroom, flat-screen TV, and high-speed Wi-Fi.',
    features: ['Private en-suite room', 'Premium furniture/bedding', 'Dedicated work desk', 'Flat-screen TV', 'High-speed Wi-Fi', 'Daily housekeeping', 'Individual AC control'],
    image: '/imports/super_senior.jpg',
  },
  {
    name: 'Senior Room',
    badge: 'Executive',
    description: 'Comfortable private accommodation for mid-to-senior level staff. Well-furnished with a clean, professional feel.',
    features: ['Private room', 'Quality furnishings', 'Work desk and wardrobe', 'Flat-screen TV', 'High-speed Wi-Fi', 'Regular housekeeping', 'Individual AC control'],
    image: '/imports/senior.jpg',
  },
  {
    name: 'Junior Room',
    badge: 'Standard',
    description: 'Smart, clean, and functional accommodation for junior professionals and skilled workers. Shared between a small number of occupants.',
    features: ['Shared room (small occupancy)', 'Personal wardrobe and storage', 'Shared TV and lounge area', 'High-speed Wi-Fi', 'Regular housekeeping', 'Shared AC system'],
    image: '/imports/junior.jpg',
  },
  {
    name: 'Labour Accommodation',
    badge: 'Compliant',
    description: 'Purpose-built, ADNOC-compliant labour accommodation that meets every UAE regulatory standard.',
    features: ['ADNOC and UAE compliant', 'Well-ventilated rooms', 'Personal storage space', 'Shared common areas', 'Regular deep cleaning', 'Sanitation and hygiene maintained'],
    image: '/imports/labour.jpg',
  }
];

function RoomCard({ room, index }: { room: typeof rooms[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothRotateX = useSpring(mouseY, springConfig);
  const smoothRotateY = useSpring(mouseX, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    mouseX.set(x / 15);
    mouseY.set(-(y / 15));
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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group h-[680px] cursor-pointer"
      style={{
        perspective: '1500px'
      }}
    >
      <motion.div
        className="w-full h-full relative overflow-hidden rounded-[40px] bg-white shadow-2xl border border-accent/10"
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Top Image Section */}
        <div className="h-[65%] relative overflow-hidden" style={{ transform: 'translateZ(10px)' }}>
          <motion.img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
          
          <motion.span 
             className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-accent text-[10px] font-black uppercase tracking-widest shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
             style={{ transform: 'translateZ(40px)' }}
          >
            {room.badge}
          </motion.span>
        </div>

        {/* Bottom Content Section */}
        <div className="flex-1 flex flex-col px-8 py-6 bg-white relative" style={{ transform: 'translateZ(20px)' }}>
          <h3 
            className="text-xl lg:text-2xl mb-1 text-primary font-black transition-colors duration-500 group-hover:text-accent" 
            style={{ transform: 'translateZ(30px)' }}
          >
            {room.name}
          </h3>

          <p 
            className="text-muted-foreground text-[13px] mb-3 line-clamp-3 font-medium leading-relaxed"
            style={{ transform: 'translateZ(25px)' }}
          >
            {room.description}
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3" style={{ transform: 'translateZ(20px)' }}>
            {room.features.slice(0, 4).map((feature, fIndex) => (
              <div key={fIndex} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                <span className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">{feature}</span>
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}

export function RoomGallery() {
  return (
    <div className="flex flex-col relative max-w-5xl mx-auto px-4 pb-32">
      {rooms.map((room, index) => (
        <div 
          key={index} 
          className="sticky w-full mb-[10vh] last:mb-0"
          style={{
            top: `calc(8vh + ${index * 35}px)`,
            zIndex: index + 1
          }}
        >
          <RoomCard room={room} index={index} />
        </div>
      ))}
    </div>
  );
}
