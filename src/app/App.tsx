import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import contact from "../content/contact.json";
import { LogoOpening } from "./components/LogoOpening";
import { Hero } from "./components/Hero";
import { StatsStrip } from "./components/StatsStrip";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ComplianceStrip } from "./components/ComplianceStrip";
import { MissionVision } from "./components/MissionVision";
import { FloatingNav } from "./components/FloatingNav";
import { DiningSection } from "./components/DiningSection";
import { FacilityGrid } from "./components/FacilityGrid";
import { RoomGallery } from "./components/RoomGallery";
import { BenefitsSection } from "./components/BenefitsSection";
import { EnquiryForm } from "./components/EnquiryForm";
import { ClientLogos } from "./components/ClientLogos";

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

        <ClientLogos />

        <section id="about" className="py-6">
          <AboutSection />
        </section>

        <section id="rooms" className="py-6 bg-secondary/10">
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

        <section className="py-4">
          <div className="container-limited">
            <DiningSection />
          </div>
        </section>

        <section id="facilities" className="bg-secondary/10 overflow-hidden">
          <FacilityGrid />
        </section>

        <section id="services" className="pt-0 pb-4">
          <ServicesSection />
        </section>

        <BenefitsSection />

        <ComplianceStrip />


      </main>

      {/* Premium Redesigned Footer */}
      <footer id="footer" className="relative mt-16 overflow-hidden">
        {/* Top CTA Section (Glassmorphic) */}
        <div className="relative z-10 container-limited mb-[-100px]">
          <div className="bg-white/80 backdrop-blur-2xl border border-white/50 shadow-[0_50px_100px_-20px_rgba(20,61,67,0.15)] rounded-[48px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <span className="text-accent font-black uppercase tracking-widest text-xs mb-4 block">Ready to Partner With Us?</span>
              <h2 className="text-4xl md:text-6xl font-black text-primary leading-none mb-6">
                Let's talk about <br />
                <span className="text-accent italic">your workforce.</span>
              </h2>
              <p className="text-muted-foreground text-lg font-medium max-w-lg leading-relaxed">
                Experience the gold standard in UAE facility management. We handle the logistics — you focus on the growth.
              </p>
            </div>
            <div className="w-full lg:w-auto flex flex-col gap-4 min-w-[300px]">
              <motion.button
                onClick={() => {
                  const event = new CustomEvent('openEnquiryForm');
                  window.dispatchEvent(event);
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-10 py-6 bg-primary text-white font-black uppercase tracking-widest rounded-2xl shadow-2xl shadow-primary/30 flex items-center justify-center gap-4 text-sm"
              >
                Request a Proposal <ArrowRight className="w-5 h-5" />
              </motion.button>
              <div className="flex items-center justify-center gap-8 py-4 border-t border-primary/5">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-black text-accent uppercase tracking-widest">Call Us</span>
                  <span className="text-primary font-bold">+971 2 555 1234</span>
                </div>
                <div className="w-px h-8 bg-primary/10" />
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-black text-accent uppercase tracking-widest">Email Us</span>
                  <span className="text-primary font-bold">info@acfm.ae</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer (Dark Mode) */}
        <div className="bg-primary pt-[180px] pb-12 px-6 lg:px-12 relative">
          {/* Watermark Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
            ACFM
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
              {/* Branding Column */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                    <img src="/imports/acfm_final_logo_only.png" className="w-12 h-12 object-contain" alt="Logo" />
                  </div>
                  <div>
                    <h3 className="text-white font-black tracking-tighter text-xl">ARABIAN COMFORT</h3>
                    <p className="text-accent text-[10px] font-black uppercase tracking-[0.3em] leading-none">Facility Management</p>
                  </div>
                </div>
                <p className="text-white/50 text-sm font-medium leading-relaxed max-w-sm mb-10">
                  Leading the UAE in compliant, premium-grade corporate accommodation and integrated facility services. ISO 9001, 14001, and 45001 certified.
                </p>
                <div className="flex gap-4">
                  {/* Social Icons Placeholder Style */}
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 cursor-pointer group">
                      <div className="w-4 h-4 bg-white/20 group-hover:bg-white rounded-full" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Links Column */}
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Quick Navigation</h4>
                <ul className="space-y-4">
                  {['Home', 'Facilities', 'About Us', 'Services', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-accent font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 group">
                        <div className="w-0 group-hover:w-2 h-px bg-accent transition-all" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Column */}
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Core Services</h4>
                <ul className="space-y-4 text-white/40 font-bold text-xs uppercase tracking-widest">
                  <li>Workforce Housing</li>
                  <li>HACCP Catering</li>
                  <li>Medical Clinics</li>
                  <li>Security Services</li>
                  <li>Housekeeping</li>
                </ul>
              </div>

              {/* Location Column */}
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Get In Touch</h4>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start text-white/40 font-medium text-xs leading-loose">
                    <MapPin className="w-5 h-5 text-accent shrink-0" />
                    <p>{contact.address}</p>
                  </div>
                  <div className="flex gap-4 items-center text-white/40 font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors">
                    <Phone className="w-4 h-4 text-accent" />
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  </div>
                  <div className="flex gap-4 items-center text-white/40 font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">
                © 2026 Arabian Comfort Facility Management LLC.
              </p>
              <div className="flex gap-10">
                <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Privacy Policy</a>
                <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}