import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const termsSections = [
  { id: 'acceptance', num: '— 01', title: 'Acceptance of Terms', content: 'By accessing or using the Modina Rim & Parts Ltd. website located at modinarim.com, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please discontinue use of our website immediately. These terms constitute a legally binding agreement between you and Modina Rim & Parts Ltd.' },
  { id: 'use', num: '— 02', title: 'Use of Website', content: 'You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the website. Prohibited activities include attempting to gain unauthorized access to any part of the website, transmitting harmful or malicious code, using automated tools to scrape or harvest data, and misrepresenting your identity or affiliation. We reserve the right to suspend or terminate access for violations of these terms.' },
  { id: 'ip', num: '— 03', title: 'Intellectual Property', content: 'All content on this website including text, images, graphics, logos, product specifications, CAD models, and downloadable documents is the exclusive intellectual property of Modina Rim & Parts Ltd. or its licensors. You may not reproduce, distribute, modify, or commercially exploit any content without prior written consent. Product catalogs and technical documents downloaded from our site are licensed for internal business use only.' },
  { id: 'product', num: '— 04', title: 'Product Information & Accuracy', content: 'We endeavor to ensure all product specifications, pricing indications, and technical data published on this website are accurate and current. However, Modina Rim & Parts Ltd. reserves the right to correct errors, update specifications, and modify product offerings without prior notice. Published information does not constitute a binding commercial offer. All orders and agreements are subject to formal written confirmation from our sales team.' },
  { id: 'liability', num: '— 05', title: 'Limitation of Liability', content: 'To the maximum extent permitted by applicable law, Modina Rim & Parts Ltd. shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or reliance on any information contained herein. Our total liability for any claim arising from use of this website shall not exceed the value of any direct transaction with us in the preceding 12 months. This limitation applies regardless of the legal theory under which the claim is brought.' },
  { id: 'law', num: '— 06', title: 'Governing Law & Jurisdiction', content: 'These Terms of Service shall be governed by and construed in accordance with the laws of the People\'s Republic of Bangladesh. Any disputes arising from these terms or your use of our website shall be subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh. If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.' },
  { id: 'changes', num: '— 07', title: 'Changes to These Terms', content: 'Modina Rim & Parts Ltd. reserves the right to update or modify these Terms of Service at any time without prior notice. Changes will be effective immediately upon posting to the website. The date of the most recent revision is indicated at the top of this page. Your continued use of the website following any changes constitutes your acceptance of the revised terms. We recommend reviewing this page periodically.' },
  { id: 'contact', num: '— 08', title: 'Contact Information', content: 'If you have questions, concerns, or requests relating to these Terms of Service, please contact our legal and compliance team at sales@modinarim.com with the subject line \'Terms Inquiry\'. You may also write to us at Modina Rim & Parts Ltd., 123 Industrial Park Road, Dhaka 1200, Bangladesh. We aim to respond to all formal inquiries within 10 business days.' }
];

const navLinks = [
  { id: 'acceptance', label: 'Acceptance of Terms' },
  { id: 'use', label: 'Use of Website' },
  { id: 'ip', label: 'Intellectual Property' },
  { id: 'product', label: 'Product Information' },
  { id: 'liability', label: 'Limitation of Liability' },
  { id: 'law', label: 'Governing Law' },
  { id: 'changes', label: 'Changes to Terms' },
  { id: 'contact', label: 'Contact' }
];

export default function Terms() {
  const letters = "TERMS OF SERVICE".split("");

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
          <span className="text-[#E52525]">Terms</span>
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
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">Legal</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Binding</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">2026</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Last Updated</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">BGD</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Jurisdiction</span>
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
            <p className="text-[160px] font-light text-[#0a0a0a] leading-none select-none tracking-tight">
              §§
            </p>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#E52525] uppercase mt-2">
              — Legal Notice
            </p>
            <p className="font-mono text-[9px] tracking-[0.25em] text-[#252525] uppercase mt-1">
              Please Read Carefully
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={introInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#050505] p-10 lg:p-16 flex flex-col justify-center"
          >
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-8">
              — Agreement
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight leading-tight mb-8">
              Terms Governing Use of Our Services
            </h2>
            <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed max-w-lg mb-5">
              By accessing the Modina Rim & Parts Ltd. website or using our services, you agree to be bound by these Terms of Service. Please read them carefully before proceeding.
            </p>
            <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed max-w-lg mb-5">
              These terms apply to all visitors, clients, and distributors who access or use our website, request product information, or enter into any commercial relationship with Modina Rim & Parts Ltd.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — TERMS CONTENT */}
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

            {/* RIGHT — terms content */}
            <div className="bg-[#080808] p-10 lg:p-16">
              {termsSections.map((section, idx) => (
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
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Any Questions?</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-[0.05em] uppercase leading-tight">
              We're Here<br />To Help
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
            <Link to="/privacy" className="border border-[#1a1a1a] text-[#2a2a2a] font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:border-[#333] hover:text-[#555] transition-colors flex items-center gap-4 rounded-none">
              Privacy Policy
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
