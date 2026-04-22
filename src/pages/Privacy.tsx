import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const policySections = [
  { id: 'info', num: '— 01', title: 'Information We Collect', content: 'We collect information you voluntarily provide when contacting us through our website forms, including your name, company name, email address, and phone number. We also collect standard server logs including IP addresses and browser types for security purposes. We do not collect sensitive personal data such as financial information or government identification numbers.' },
  { id: 'use', num: '— 02', title: 'How We Use Your Information', content: 'Information you provide is used solely to respond to your inquiries, process product requests, and improve our services. We may use your contact details to send relevant product updates or catalog releases, but only with your explicit consent. You may withdraw consent at any time by contacting us directly at sales@modinarim.com.' },
  { id: 'sharing', num: '— 03', title: 'Data Sharing & Third Parties', content: 'Modina Rim & Parts Ltd. does not sell, rent, or trade your personal information to third parties. We may share data with trusted service providers who assist in operating our website, strictly under confidentiality agreements. We may also disclose information when required by law or to protect our legal rights.' },
  { id: 'cookies', num: '— 04', title: 'Cookies & Tracking', content: 'Our website uses essential cookies to ensure basic functionality. We do not use advertising cookies or behavioral tracking technologies. You may disable cookies through your browser settings, though this may affect certain website features. We use basic analytics to understand aggregate traffic patterns, with no personally identifiable data retained.' },
  { id: 'retention', num: '— 05', title: 'Data Retention', content: 'We retain your personal information only as long as necessary to fulfill the purpose for which it was collected, or as required by applicable law. Contact form submissions are retained for up to 24 months. Server logs are retained for 90 days. You may request deletion of your data at any time by contacting us.' },
  { id: 'rights', num: '— 06', title: 'Your Rights', content: 'You have the right to access, correct, or request deletion of any personal data we hold about you. You may also request a copy of your data in a portable format. To exercise any of these rights, please contact us at sales@modinarim.com with the subject line \'Data Request\'. We will respond within 30 business days.' },
  { id: 'contact', num: '— 07', title: 'Contact & Updates', content: 'If you have questions about this Privacy Policy or how we handle your data, please contact our compliance team at sales@modinarim.com or write to us at 123 Industrial Park Road, Dhaka 1200, Bangladesh. This policy was last updated in April 2026. We reserve the right to update this policy and will notify users of significant changes via our website.' }
];

const navLinks = [
  { id: 'info', label: 'Information We Collect' },
  { id: 'use', label: 'How We Use It' },
  { id: 'sharing', label: 'Data Sharing' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'retention', label: 'Data Retention' },
  { id: 'rights', label: 'Your Rights' },
  { id: 'contact', label: 'Contact Us' }
];

export default function Privacy() {
  const letters = "PRIVACY POLICY".split("");

  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-80px' });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-[80px]">
      {/* SECTION 1 — HERO */}
      <section className="w-full py-20 lg:py-28 flex flex-col items-center text-center">
        <div className="font-mono text-[10px] tracking-[0.25em] text-[#2a2a2a] uppercase flex items-center gap-2 justify-center mb-10">
          <Link to="/">Home</Link>
          <ChevronRight className="w-2.5 h-2.5 text-[#1e1e1e]" />
          <span className="text-[#E52525]">Privacy</span>
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
          <span>Last Updated April 2026</span>
        </p>

        <hr className="w-full max-w-md border-[#1a1a1a] mx-auto mt-10 mb-10" />

        <div className="flex items-center justify-center gap-0">
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">GDPR</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Compliant</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">2026</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Last Updated</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">100%</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Transparent</span>
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

      {/* SECTION 2 — INTRO SPLIT */}
      <section className="w-full border-t border-[#141414]" ref={introRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#141414]">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={introInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#050505] p-10 lg:p-16 flex flex-col justify-center"
          >
            <p className="text-[200px] font-light text-[#0a0a0a] leading-none select-none">
              §
            </p>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#E52525] uppercase mt-2">
              — Our Commitment
            </p>
            <p className="font-mono text-[9px] tracking-[0.25em] text-[#252525] uppercase mt-1">
              Your Data Is Safe
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={introInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#050505] p-10 lg:p-16 flex flex-col justify-center"
          >
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-8">
              — Overview
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight leading-tight mb-8">
              How We Handle Your Data
            </h2>
            <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed max-w-lg mb-5">
              Modina Rim & Parts Ltd. is committed to protecting your personal information. This policy explains what data we collect, how we use it, and your rights regarding that data.
            </p>
            <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed max-w-lg mb-5">
              We collect only the minimum information necessary to provide our services and respond to your inquiries. We never sell your data to third parties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — POLICY CONTENT */}
      <section className="w-full border-t border-[#141414]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-[1px] bg-[#141414]">
            
            {/* LEFT — sticky navigation sidebar */}
            <div className="bg-[#080808] p-8 self-start sticky top-[96px]">
              <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-6">— Sections</p>
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a 
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className="group font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase hover:text-white transition-colors py-3 border-b border-[#0f0f0f] flex items-center gap-3"
                    >
                      <span className="opacity-0 group-hover:opacity-100 text-[#E52525] transition-opacity">—</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — policy content */}
            <div className="bg-[#080808] p-10 lg:p-16">
              {policySections.map((section, idx) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border-b border-[#141414] pb-12 mb-12 last:border-0 last:mb-0"
                >
                  <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-3">
                    {section.num}
                  </p>
                  <h3 className="text-xl md:text-2xl font-light text-white uppercase tracking-[0.1em] mb-6">
                    {section.title}
                  </h3>
                  <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed mb-4">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

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
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Have Questions?</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-[0.05em] uppercase leading-tight">
              Get In Touch<br />With Our Team
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 24 }}
            animate={ctaInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="bg-[#E52525] text-white font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:bg-[#cc1f1f] transition-colors flex items-center gap-4 rounded-none">
              Contact Us
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link to="/products" className="border border-[#1a1a1a] text-[#2a2a2a] font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:border-[#333] hover:text-[#555] transition-colors flex items-center gap-4 rounded-none">
              View Products
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
