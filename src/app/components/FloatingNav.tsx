import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Home, Info, Briefcase, Target, Image as ImageIcon, Menu, X, ArrowRight } from 'lucide-react';

interface FloatingNavProps {
  activeSection: string;
}

export function FloatingNav({ activeSection }: FloatingNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'facilities', label: 'Facilities', icon: Briefcase },
    { id: 'services', label: 'Services', icon: Target },
    { id: 'about', label: 'About', icon: Info },
    { id: 'footer', label: 'Contact Us', icon: Info },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-6 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`max-w-6xl mx-auto h-20 px-8 rounded-[24px] flex items-center justify-between transition-all duration-500 pointer-events-auto ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-2xl shadow-2xl border border-white/20' 
              : 'bg-transparent'
          }`}
        >
          {/* Logo Area */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm border border-accent/10 group-hover:scale-110 transition-transform duration-500">
              <img src="/imports/acfm_final_logo_only.png" className="w-10 h-10 object-contain" alt="ACFM Logo" />
            </div>
            <div className="hidden sm:block">
              <p className="font-black text-[12px] tracking-tight text-primary leading-tight">
                ARABIAN COMFORT
              </p>
              <p className="text-[10px] font-bold text-accent tracking-[0.1em] uppercase leading-none">
                Facility Management LLC
              </p>
            </div>
          </div>

          {/* Nav Items - Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-500 ${
                  activeSection === item.id 
                    ? 'text-accent' 
                    : 'text-muted-foreground hover:text-primary hover:bg-secondary'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="navTab"
                    className="absolute bottom-0 left-5 right-5 h-0.5 bg-accent rounded-full"
                  />
                )}
              </button>
            ))}
            
            <div className="w-px h-6 bg-primary/10 mx-4" />

            <motion.button
              onClick={() => {
                const event = new CustomEvent('openEnquiryForm');
                window.dispatchEvent(event);
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-lg shadow-primary/20 flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Right Side */}
          <div className="flex items-center gap-4 lg:hidden">
             <button 
              className="p-3 rounded-xl bg-secondary text-primary"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Modern Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/90 backdrop-blur-xl lg:hidden p-6"
          >
            <div className="h-full bg-white rounded-[40px] p-10 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary"
                >
                  <X />
                </button>
              </div>

              <div className="mb-16">
                 <p className="text-accent font-black tracking-widest uppercase text-xs mb-4">Navigation</p>
                 <div className="flex flex-col gap-4">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-4xl font-extrabold text-left transition-colors ${
                          activeSection === item.id ? 'text-accent' : 'text-primary'
                        }`}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                 </div>
              </div>

              <div className="mt-auto">
                 <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    const event = new CustomEvent('openEnquiryForm');
                    window.dispatchEvent(event);
                  }}
                  className="w-full py-6 bg-primary text-white font-bold rounded-2xl text-xl flex items-center justify-center gap-3"
                 >
                   Enquire Now <ArrowRight />
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
