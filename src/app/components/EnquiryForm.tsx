import { motion, AnimatePresence } from 'motion/react';
import { X, Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

export function EnquiryForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openEnquiryForm', handleOpen);
    return () => window.removeEventListener('openEnquiryForm', handleOpen);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Enquiry',
        message: ''
      });
      setIsSuccess(false);
      setIsOpen(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-primary/60 backdrop-blur-md z-[90]"
          />

          {/* Form Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-[40px] shadow-2xl z-[100] border border-accent/10"
          >
            {/* Header */}
            <div className="bg-secondary p-10 border-b border-accent/5 flex items-start justify-between">
              <div>
                <span className="text-accent font-black uppercase tracking-widest text-[10px] mb-2 block">Connect</span>
                <h2 className="text-4xl font-black text-primary leading-tight">Send us a <br />Message</h2>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <X />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-10">
              {isSuccess ? (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-accent/10 rounded-[32px] flex items-center justify-center mx-auto mb-8">
                    <Send className="text-accent w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-primary">Message Received</h3>
                  <p className="text-muted-foreground text-lg">Our facility consultants will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                      <input 
                        type="text" name="name" required placeholder="John Doe"
                        className="w-full px-6 py-4 bg-secondary border border-accent/5 rounded-2xl focus:border-accent focus:bg-white outline-none transition-all font-bold text-primary"
                        value={formData.name} onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                      <input 
                        type="email" name="email" required placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-secondary border border-accent/5 rounded-2xl focus:border-accent focus:bg-white outline-none transition-all font-bold text-primary"
                        value={formData.email} onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Phone Number</label>
                    <input 
                      type="tel" name="phone" required placeholder="+971 50 123 4567"
                      className="w-full px-6 py-4 bg-secondary border border-accent/5 rounded-2xl focus:border-accent focus:bg-white outline-none transition-all font-bold text-primary"
                      value={formData.phone} onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Requirement</label>
                    <select 
                      name="subject"
                      className="w-full px-6 py-4 bg-secondary border border-accent/5 rounded-2xl focus:border-accent focus:bg-white outline-none transition-all font-bold text-primary"
                      value={formData.subject} onChange={handleChange}
                    >
                      <option>General Facility Enquiry</option>
                      <option>Camp Logistics Solution</option>
                      <option>HSE/Compliance Audit</option>
                      <option>Maintenance & MEP</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                    <textarea 
                      name="message" required rows={4} placeholder="Tell us about your requirements..."
                      className="w-full px-6 py-4 bg-secondary border border-accent/5 rounded-2xl focus:border-accent focus:bg-white outline-none transition-all font-bold text-primary resize-none"
                      value={formData.message} onChange={handleChange}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-primary text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3 mt-4"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
