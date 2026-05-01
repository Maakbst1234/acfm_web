import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { LogoOpening } from "./components/LogoOpening";
import { Hero } from "./components/Hero";
import { StatsStrip } from "./components/StatsStrip";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ComplianceStrip } from "./components/ComplianceStrip";
import { MissionVision } from "./components/MissionVision";
import { ProcessSection } from "./components/ProcessSection";
import { FloatingNav } from "./components/FloatingNav";
import { DiningSection } from "./components/DiningSection";
import { FacilityGrid } from "./components/FacilityGrid";
import { RoomGallery } from "./components/RoomGallery";
import { BenefitsSection } from "./components/BenefitsSection";
import { EnquiryForm } from "./components/EnquiryForm";
import { ClientLogos } from "./components/ClientLogos";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "facilities", "services"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-800 selection:bg-accent/20 selection:text-accent font-sans">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-accent origin-left z-[60] shadow-[0_0_10px_rgba(82,184,177,0.5)]"
        style={{ scaleX }}
      />

      <LogoOpening />
      <EnquiryForm />
      <FloatingNav activeSection={activeSection} />

      <main>
        <section id="home">
          <Hero />
        </section>

        <StatsStrip />
        <ClientLogos />

        <section id="about" className="py-24">
          <AboutSection />
        </section>

        <section className="py-24 bg-secondary/10">
          <div className="container-limited">
            <div className="text-center mb-16">
              <span className="text-accent font-black uppercase tracking-widest text-[10px] mb-4 block">Our Accommodation</span>
              <h2 className="text-primary font-black text-4xl lg:text-5xl uppercase mb-6">A Room for Every Role</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                We offer four distinct accommodation categories — each designed for the specific needs, privacy, and comfort level of different employee grades. Every room is clean, air-conditioned, furnished, and regularly maintained.
              </p>
            </div>
            <RoomGallery />
          </div>
        </section>

        <section className="py-24">
          <div className="container-limited">
            <DiningSection />
          </div>
        </section>

        <section id="facilities" className="py-24 bg-secondary/10">
          <div className="container-limited">
            <div className="text-center mb-16">
              <span className="text-accent font-black uppercase tracking-widest text-[10px] mb-4 block">Our Facilities</span>
              <h2 className="text-primary font-black text-4xl lg:text-5xl uppercase mb-6">Everything Your Team Needs. <br/> All in One Place.</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                From the gym to the clinic, from the prayer room to the laundry — Arabian Comfort is a fully self-contained community built around the well-being of your workforce.
              </p>
            </div>
            <FacilityGrid />
          </div>
        </section>

        <section id="services" className="py-24">
          <ServicesSection />
        </section>

        <BenefitsSection />

        <ComplianceStrip />

        <ProcessSection />
      </main>

      {/* Premium Footer */}
      <footer id="footer" className="bg-secondary/30 border-t border-accent/10 pt-32 pb-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/[0.02] rounded-full blur-[120px] -mr-40 -mt-40" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-center">
            <div>
              <span className="text-accent font-black uppercase tracking-widest text-xs mb-4 block">Ready to House Your Team the Right Way?</span>
              <h2 className="text-5xl font-black mb-8 leading-tight text-primary">Talk to us about your <br /><span className="text-accent italic">accommodation.</span></h2>
              <p className="text-muted-foreground mb-10 font-medium">Serving ADNOC contractors, construction companies, and major enterprises across the UAE.</p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                    <Phone className="w-6 h-6 text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Call Support</p>
                    <p className="text-xl font-bold text-primary">+971 2 555 1234</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                    <Mail className="w-6 h-6 text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email Address</p>
                    <p className="text-xl font-bold text-primary">info@arabiancomfort.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[40px] shadow-2xl border border-accent/5 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mb-8">
                <MapPin className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-primary">Visit Our Office</h3>
              <p className="text-muted-foreground mb-10 max-w-xs font-medium">Abu Dhabi, United Arab Emirates <br /> Industrial City of Abu Dhabi (ICAD)</p>
              <motion.button
                onClick={() => {
                  const event = new CustomEvent('openEnquiryForm');
                  window.dispatchEvent(event);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-5 bg-primary text-white font-black uppercase tracking-widest rounded-[20px] shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
              >
                Request a Quote Today <ArrowRight />
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 border-b border-accent/10 pb-16">
            <div className="md:col-span-2">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md border border-accent/10">
                    <img src="/imports/acfm_final_logo_only.png" className="w-12 h-12 object-contain" alt="ACFM Logo" />
                 </div>
                 <div>
                    <p className="font-black text-xs tracking-tight text-primary">ARABIAN COMFORT</p>
                    <p className="text-[8px] font-black text-accent tracking-[0.2em] uppercase leading-none">Facility Management LLC</p>
                 </div>
              </div>
              <p className="text-muted-foreground text-sm font-medium max-w-xs uppercase tracking-widest leading-loose">
                Comfort, Safety and Community — All Under One Roof.
              </p>
            </div>

            <div>
              <h4 className="text-primary font-black uppercase tracking-widest text-[10px] mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['Home', 'Facilities', 'Services', 'About Us', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a 
                      href={item === 'Contact Us' ? '#footer' : `#${item.toLowerCase().replace(' ', '')}`} 
                      className="text-muted-foreground hover:text-accent text-xs font-bold transition-all uppercase tracking-widest"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-primary font-black uppercase tracking-widest text-[10px] mb-6">Services</h4>
              <ul className="space-y-4">
                {['Accommodation', 'Catering', 'Medical Clinic', 'Housekeeping', 'Security', 'HSE Compliance'].map((item) => (
                  <li key={item}>
                    <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
              © 2026 Arabian Comfort Facility Management LLC. All rights reserved.
            </p>

            <div className="flex gap-8">
              {['Terms of Service', 'Privacy Policy'].map((item) => (
                <a key={item} href="#" className="text-muted-foreground hover:text-accent text-[10px] font-black uppercase tracking-widest transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}