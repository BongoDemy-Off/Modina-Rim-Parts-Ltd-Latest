import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, MapPin, Phone, Mail, Clock, Download } from 'lucide-react';

export default function Contact() {
  const letters = "GET IN TOUCH".split("");
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  const contactDetails = [
    { icon: MapPin, label: 'Office Address', value: '123 Industrial Park Road, Dhaka 1200, Bangladesh' },
    { icon: Phone, label: 'Phone', value: '+880 1234 567890' },
    { icon: Mail, label: 'Email', value: 'sales@modinarim.com' },
    { icon: Clock, label: 'Business Hours', value: 'Sun–Thu: 9:00 AM – 6:00 PM' },
  ];

  const offices = [
    { num: '—01', city: 'Dhaka HQ', address: '123 Industrial Park Road, Dhaka 1200', type: 'Headquarters' },
    { num: '—02', city: 'Chittagong', address: '45 Port Access Road, Chattogram 4100', type: 'Distribution Center' },
    { num: '—03', city: 'Sylhet', address: '78 Industrial Zone, Sylhet 3100', type: 'Regional Office' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-[80px]">
      {/* SECTION 1 — HERO */}
      <section className="w-full py-20 lg:py-28 flex flex-col items-center text-center">
        <div className="font-mono text-[10px] tracking-[0.25em] text-[#2a2a2a] uppercase flex items-center gap-2 justify-center mb-10">
          <Link to="/">Home</Link>
          <ChevronRight className="w-2.5 h-2.5 text-[#1e1e1e]" />
          <span className="text-[#E52525]">Contact</span>
        </div>

        <hr className="w-32 border-[#1a1a1a] mx-auto mb-10" />

        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-light tracking-[0.3em] text-white uppercase leading-none flex items-center justify-center flex-wrap">
          {letters.map((letter, i) => (
            letter === " " ? (
              <span key={i} className="w-[0.3em]">&nbsp;</span>
            ) : (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
              >
                {letter}
              </motion.span>
            )
          ))}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
          className="w-32 h-[1px] bg-[#E52525] mx-auto my-10"
        />

        <p className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] text-[#2a2a2a] uppercase flex items-center justify-center flex-wrap gap-2">
          <span>Modina Rim & Parts Ltd.</span>
          <span className="text-[#E52525]">·</span>
          <span>Est. 2010</span>
          <span className="text-[#E52525]">·</span>
          <span>Dhaka, Bangladesh</span>
        </p>

        <hr className="w-full max-w-md border-[#1a1a1a] mx-auto mt-10 mb-10" />

        <div className="flex items-center justify-center gap-0">
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">24H</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Response Time</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">+880</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Phone</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">3</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Offices</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 mt-14">
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
            className="w-[0.5px] h-10 bg-[#1a1a1a]" 
          />
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase">Scroll</span>
        </div>
      </section>

      {/* SECTION 2 — CONTACT SPLIT */}
      <section className="w-full border-t border-[#141414]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#141414]">
          {/* LEFT: Form */}
          <div className="bg-[#080808] p-10 lg:p-16 flex flex-col justify-center">
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Send a Message</p>
            <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight mb-12">Let's Talk</h2>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-start"
              >
                <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Message Sent</p>
                <p className="text-[13px] text-[#333] font-light mb-8">We'll respond within 24 business hours.</p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="border border-[#1a1a1a] text-[#2a2a2a] font-mono text-[10px] tracking-[0.3em] uppercase px-8 py-3 hover:border-[#333] hover:text-[#555] transition-colors rounded-none"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col">
                  <label className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase mb-2">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="bg-transparent border-b border-[#1a1a1a] focus:border-[#E52525] outline-none text-[13px] text-white py-3 font-light transition-colors rounded-none" />
                </motion.div>
                
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-col">
                  <label className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase mb-2">Company Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="bg-transparent border-b border-[#1a1a1a] focus:border-[#E52525] outline-none text-[13px] text-white py-3 font-light transition-colors rounded-none" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col">
                    <label className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase mb-2">Email Address</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="bg-transparent border-b border-[#1a1a1a] focus:border-[#E52525] outline-none text-[13px] text-white py-3 font-light transition-colors rounded-none" />
                  </motion.div>
                  
                  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }} className="flex flex-col">
                    <label className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="bg-transparent border-b border-[#1a1a1a] focus:border-[#E52525] outline-none text-[13px] text-white py-3 font-light transition-colors rounded-none" />
                  </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col">
                  <label className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase mb-2">Subject</label>
                  <select required name="subject" value={formData.subject} onChange={handleChange} className="bg-transparent border-b border-[#1a1a1a] focus:border-[#E52525] outline-none text-[13px] text-white py-3 font-light transition-colors rounded-none appearance-none cursor-pointer">
                    <option value="" disabled className="bg-[#080808] text-[#666]">Select a subject</option>
                    <option value="General Inquiry" className="bg-[#080808]">General Inquiry</option>
                    <option value="Product Inquiry" className="bg-[#080808]">Product Inquiry</option>
                    <option value="Partnership" className="bg-[#080808]">Partnership</option>
                    <option value="Quality Certification" className="bg-[#080808]">Quality Certification</option>
                    <option value="Other" className="bg-[#080808]">Other</option>
                  </select>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.35 }} className="flex flex-col">
                  <label className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase mb-2">Message</label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows={5} className="bg-transparent border-b border-[#1a1a1a] focus:border-[#E52525] outline-none text-[13px] text-white py-3 font-light transition-colors rounded-none resize-none" />
                </motion.div>

                <motion.button 
                  initial={{ opacity: 0, y: 16 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: 0.4 }}
                  type="submit" 
                  className="w-full bg-[#E52525] text-white font-mono text-[10px] tracking-[0.3em] uppercase py-4 hover:bg-[#cc1f1f] transition-colors flex items-center justify-center gap-4 rounded-none mt-4"
                >
                  SEND MESSAGE
                  <ArrowRight className="w-3 h-3" />
                </motion.button>
              </form>
            )}
          </div>

          {/* RIGHT: Map & Details */}
          <div className="bg-[#080808] flex flex-col">
            <div className="relative h-[280px] bg-[#0d0d0d] overflow-hidden">
              <img 
                src="https://picsum.photos/seed/dhaka-map/800/400" 
                alt="Map location" 
                className="w-full h-full object-cover grayscale opacity-40"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-8">
                <p className="font-mono text-[8px] text-[#252525] uppercase tracking-[0.2em]">Dhaka, Bangladesh</p>
              </div>
            </div>
            
            <div className="p-10 flex flex-col gap-0 flex-grow">
              <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-8">— Reach Us</p>
              
              {contactDetails.map((detail, idx) => {
                const Icon = detail.icon;
                return (
                  <div key={idx} className="flex items-start gap-6 py-6 border-b border-[#141414] last:border-0">
                    <Icon className="w-4 h-4 text-[#E52525] shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-2">
                      <p className="font-mono text-[9px] text-[#252525] uppercase tracking-[0.2em]">{detail.label}</p>
                      <p className="text-[13px] font-light text-[#666]">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OFFICES */}
      <section className="w-full border-t border-[#141414] bg-[#080808] py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-16">
          <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Our Locations</p>
          <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight">Where to Find Us</h2>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#141414]">
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-[#050505] p-8 lg:p-10 flex flex-col cursor-default relative"
              >
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px] bg-[#E52525] transition-all duration-500 ease-out" />
                <p className="font-mono text-[11px] tracking-[0.25em] text-[#E52525] uppercase mb-6 mt-2">{office.num}</p>
                <h3 className="text-2xl font-light text-white uppercase tracking-[0.1em] mb-3">
                  {office.city}
                </h3>
                <hr className="border-[#141414] mb-4" />
                <p className="text-[13px] text-[#333] leading-relaxed font-light flex-grow">
                  {office.address}
                </p>
                <p className="font-mono text-[9px] tracking-[0.2em] text-[#1e1e1e] uppercase mt-6 group-hover:text-[#333] transition-colors">
                  {office.type}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA BANNER */}
      <section className="w-full border-t border-[#141414] py-24 lg:py-32 bg-[#050505]" ref={ctaRef}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            animate={ctaInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-6"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={ctaInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'top' }}
              className="absolute left-0 top-0 w-1 h-20 bg-[#E52525]"
            />
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Quick Response</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-[0.05em] uppercase leading-tight">
              Need Help Now?<br />Talk to Our Team
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 24 }}
            animate={ctaInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/products" className="bg-[#E52525] text-white font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:bg-[#cc1f1f] transition-colors flex items-center gap-4 rounded-none">
              View Products
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link to="/downloads" className="border border-[#1a1a1a] text-[#2a2a2a] font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:border-[#333] hover:text-[#555] transition-colors flex items-center gap-4 rounded-none">
              Download Catalog
              <Download className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
