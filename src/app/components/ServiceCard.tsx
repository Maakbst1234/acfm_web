import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  delay: number;
}

export function ServiceCard({ icon: Icon, title, description, image, delay }: ServiceCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = (y - centerY) / 8; // Stronger tilt
    const rotateYValue = (centerX - x) / 8;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-[600px] cursor-pointer"
      style={{
        perspective: '1200px'
      }}
    >
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="relative h-full bg-card border border-foreground/10 overflow-hidden shadow-2xl"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Shine/Glare Effect */}
        <motion.div
          animate={{
            background: `radial-gradient(circle at ${50 + rotateY * -2}% ${50 + rotateX * 2}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
          }}
          className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay"
        />

        {/* Image */}
        <div className="relative h-2/3 overflow-hidden bg-black" style={{ transform: 'translateZ(10px)' }}>
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-80"
            animate={{
              x: rotateY * -1.5,
              y: rotateX * -1.5,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            whileHover={{ scale: 1.15, opacity: 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

          {/* Icon Badge */}
          <motion.div
            className="absolute top-6 right-6 w-16 h-16 bg-primary flex items-center justify-center shadow-2xl"
            whileHover={{ scale: 1.2, rotate: 90 }}
            transition={{ duration: 0.4 }}
            style={{ transform: 'translateZ(60px)' }}
          >
            <Icon className="w-8 h-8 text-primary-foreground" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative h-1/3 p-8 flex flex-col justify-center" style={{ transformStyle: 'preserve-3d' }}>
          <motion.h3 
            className="text-3xl mb-4 text-foreground group-hover:text-primary transition-colors duration-500 drop-shadow-xl"
            style={{ transform: 'translateZ(40px)' }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-muted-foreground leading-relaxed"
            style={{ transform: 'translateZ(20px)' }}
          >
            {description}
          </motion.p>
        </div>

        {/* Decorative Corner */}
        <motion.div 
          className="absolute bottom-0 right-0 w-32 h-32 border-r-8 border-b-8 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
          style={{ transform: 'translateZ(50px)' }}
        />

      </motion.div>

      {/* Extreme Floating shadow behind the card */}
      <motion.div
        className="absolute inset-4 bg-primary/20 blur-2xl -z-10"
        animate={{
          x: rotateY * 3,
          y: rotateX * 3,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </motion.div>
  );
}
