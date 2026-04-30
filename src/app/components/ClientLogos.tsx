import { motion } from 'motion/react';

const logos = [
  'c_logo3.png',
  'c_logo_1.png',
  'c_logo_10.png',
  'c_logo_11.png',
  'c_logo_12.png',
  'c_logo_13.png',
  'c_logo_14.png',
  'c_logo_16.png',
  'c_logo_17.png',
  'c_logo_18.png',
  'c_logo_2.png',
  'c_logo_4.png',
  'c_logo_5.png',
  'c_logo_6.png',
  'c_logo_7.png',
  'c_logo_8.png',
  'c_logo_9.png',
  'logo_15.png'
];

export function ClientLogos() {
  return (
    <section className="py-20 bg-secondary/30 overflow-hidden relative border-y border-accent/10">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(20,61,67,0.04) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent font-bold text-xs md:text-sm mb-4"
        >
          <span>Our Trusted Partners</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-black text-primary"
        >
          Collaborating with the Best
        </motion.h2>
      </div>

      <div className="relative flex overflow-hidden py-8 marquee-container">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
            display: flex;
            width: max-content;
          }
          .marquee-container:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}} />

        {/* Left/Right Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex whitespace-nowrap gap-8 md:gap-12 pl-8 md:pl-12 items-center">
          {/* Double array for seamless loop across to 50% */}
          {[...logos, ...logos].map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="w-48 md:w-60 h-28 shrink-0 flex items-center justify-center p-2 bg-white rounded-2xl shadow-sm border border-accent/10 hover:shadow-xl transition-all duration-500 cursor-pointer group/item"
            >
              <img
                src={`/src/imports/client_logos/${logo}`}
                alt={`Client Logo ${index}`}
                className="w-full h-full object-contain filter grayscale opacity-50 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
