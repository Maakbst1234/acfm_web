import { motion } from 'motion/react';

const photos = [
  { url: "https://images.unsplash.com/photo-1541976535096-26bb9576361a?q=80&w=800&auto=format&fit=crop", title: "Premium Living" },
  { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop", title: "Modern Facilities" },
  { url: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=800&auto=format&fit=crop", title: "Catering Standards" },
  { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop", title: "Operational Excellence" },
  { url: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=800&auto=format&fit=crop", title: "Recreation Hub" },
  { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", title: "Safety Infrastructure" }
];

export function PhotoGallery() {
  return (
    <section id="gallery" className="bg-white">
      <div className="container-limited">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-auto"
          >
            <span className="text-accent font-black uppercase tracking-widest text-[10px] block mb-4">Portfolio</span>
            <h2 className="text-primary leading-tight">Glimpse into <br />Our World</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-muted-foreground mr-auto md:mr-0 md:max-w-sm mb-2"
          >
            Real environments designed for real people. Experience the quality of our 
            managed facilities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="relative aspect-[4/5] overflow-hidden rounded-[32px] cursor-pointer group shadow-lg sm:last:col-span-2 lg:last:col-span-1"
            >
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-black uppercase tracking-widest text-[10px] mb-2">Category</p>
                  <p className="text-white text-xl md:text-2xl font-bold">{photo.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
