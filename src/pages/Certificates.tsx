import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const certificatesData = [
  {
    num: "—01",
    title: "ISO 9001:2015",
    yearBadge: "2025",
    issuer: "Bureau Veritas International",
    desc: "Quality Management System certification covering design, manufacturing, and after-sales service. Verified through annual surveillance audits with zero non-conformances recorded since initial certification.",
    validity: "2026",
    img: "https://picsum.photos/seed/cert-iso9001/600/400"
  },
  {
    num: "—02",
    title: "ISO 14001",
    yearBadge: "2024",
    issuer: "SGS Bangladesh Ltd.",
    desc: "Environmental Management System certification confirming our commitment to reducing environmental impact across all manufacturing processes, waste management, and supply chain operations.",
    validity: "2026",
    img: "https://picsum.photos/seed/cert-iso14001/600/400"
  },
  {
    num: "—03",
    title: "BSTI Certified",
    yearBadge: "2025",
    issuer: "Bangladesh Standards & Testing Institution",
    desc: "National product quality certification confirming compliance with Bangladesh Standards for automotive components. Required for domestic market distribution and export documentation.",
    validity: "2026",
    img: "https://picsum.photos/seed/cert-bsti/600/400"
  }
];

const milestonesData = [
  { year: "2013", title: "First Export Compliance", desc: "Achieved full export documentation certification for South Asian markets." },
  { year: "2016", title: "ISO 9001 First Awarded", desc: "Received initial ISO 9001:2015 quality management certification." },
  { year: "2018", title: "ISO 14001 Certified", desc: "Environmental management system certification achieved." },
  { year: "2021", title: "BSTI Excellence Award", desc: "Recognized by BSTI for outstanding domestic manufacturing standards." },
  { year: "2025", title: "Zero Non-Conformance", desc: "Third consecutive ISO surveillance audit with zero findings recorded." }
];

const yearOpacity = [1, 0.55, 0.38, 0.25, 0.16];

export default function Certificates() {
  const letters = "CERTIFICATES".split("");

  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-80px' });

  const certsRef = useRef(null);
  const certsInView = useInView(certsRef, { once: true, margin: '-60px' });

  const awardsRef = useRef(null);
  const awardsInView = useInView(awardsRef, { once: true, margin: '-60px' });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-[80px]">
      {/* SECTION 1 — HERO */}
      <section className="w-full py-20 lg:py-28 flex flex-col items-center text-center">
        <div className="font-mono text-[10px] tracking-[0.25em] text-[#2a2a2a] uppercase flex items-center gap-2 justify-center mb-10">
          <Link to="/">Home</Link>
          <ChevronRight className="w-2.5 h-2.5 text-[#1e1e1e]" />
          <span className="text-[#E52525]">Certificates</span>
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
          <span>Certified Excellence</span>
          <span className="text-[#E52525]">·</span>
          <span>Est. 2010</span>
        </p>

        <hr className="w-full max-w-md border-[#1a1a1a] mx-auto mt-10 mb-10" />

        <div className="flex items-center justify-center gap-0">
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">3+</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Certifications</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">2010</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Since</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">100%</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Compliant</span>
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
            <p className="text-[180px] font-light text-[#0a0a0a] leading-none select-none tracking-tight">
              ★
            </p>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#E52525] uppercase mt-2">
              — Our Recognition
            </p>
            <p className="font-mono text-[9px] tracking-[0.25em] text-[#252525] uppercase mt-1">
              Globally Verified Standards
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={introInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#050505] p-10 lg:p-16 flex flex-col justify-center"
          >
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-8">
              — Why It Matters
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-tight leading-tight mb-8">
              Proof, Not a Promise
            </h2>
            <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed max-w-lg mb-5">
              Every certification we hold represents years of disciplined process improvement, rigorous auditing, and uncompromising commitment to international quality standards.
            </p>
            <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed max-w-lg mb-5">
              Our certifications are not marketing tools. They are independently verified evidence that Modina Rim & Parts Ltd. manufactures to the highest global benchmarks consistently, year after year.
            </p>
            <Link to="/quality" className="inline-flex items-center gap-3 mt-4 font-mono text-[10px] tracking-[0.25em] text-[#333] uppercase hover:text-white transition-colors">
              View Quality Process
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — CERTIFICATE CARDS */}
      <section className="w-full border-t border-[#141414] py-20 lg:py-28" ref={certsRef}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-16">
          <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Our Certifications</p>
          <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight">
            Internationally Recognized
          </h2>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#141414]">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              animate={certsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#080808] flex flex-col group cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px] bg-[#E52525] transition-all duration-500 z-10" />
              
              <div className="relative h-[220px] bg-[#0d0d0d] overflow-hidden">
                <motion.img
                  initial={{ scale: 1.05 }}
                  animate={certsInView ? { scale: 1 } : {}}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-all duration-[1200ms]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4">
                  <span className="font-mono text-[8px] tracking-[0.25em] text-[#E52525] uppercase border border-[#E52525]/30 bg-[#080808]/80 px-3 py-1 backdrop-blur-sm">
                    {cert.yearBadge}
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                <p className="font-mono text-[11px] tracking-[0.25em] text-[#E52525] uppercase mb-4 mt-2">
                  {cert.num}
                </p>
                <h3 className="text-2xl md:text-3xl font-light text-white uppercase tracking-[0.1em] mb-4">
                  {cert.title}
                </h3>
                <hr className="border-[#141414] mb-4" />
                <p className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase mb-1">
                  Issued By
                </p>
                <p className="text-[12px] text-[#444] font-light mb-5">
                  {cert.issuer}
                </p>
                <p className="text-[13px] text-[#333] font-light leading-relaxed flex-grow">
                  {cert.desc}
                </p>
                <div className="mt-6 pt-4 border-t border-[#141414] flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#1e1e1e] uppercase">
                    Valid Through
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#E52525] uppercase">
                    {cert.validity}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — AWARDS TIMELINE */}
      <section className="w-full border-t border-[#141414] bg-[#080808] py-20 lg:py-28 overflow-hidden" ref={awardsRef}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-16 flex justify-between items-end">
          <div>
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-3">— Recognition</p>
            <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight">Awards & Milestones</h2>
          </div>
          <div className="hidden md:block font-mono text-[10px] text-[#1e1e1e]">
            2010 — 2026
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="relative w-full min-w-[700px] overflow-x-auto pb-4 no-scrollbar">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={awardsInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="absolute top-[5px] left-0 w-full h-[1px] bg-[#E52525]"
            />
            <div className="flex justify-between relative z-10">
              {milestonesData.map((item, idx) => (
                <div key={idx} className="flex flex-col items-start w-48 relative group">
                  <div className={`w-3 h-3 mb-6 transition-colors duration-500 ${idx === 0 ? 'bg-[#E52525]' : 'bg-[#080808] border border-[#2a2a2a] group-hover:border-[#E52525]'}`} />
                  <p className="font-mono text-2xl mb-3 transition-colors duration-500" style={{ color: `rgba(229, 37, 37, ${yearOpacity[idx]})` }}>
                    {item.year}
                  </p>
                  <h4 className="text-[13px] font-light text-white uppercase tracking-[0.1em] mb-2">{item.title}</h4>
                  <p className="text-[11px] text-[#444] font-light leading-relaxed pr-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA BANNER */}
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
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Verified Quality</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-[0.05em] uppercase leading-tight">
              Explore Our<br />Product Range
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 24 }}
            animate={ctaInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/products" className="bg-[#E52525] text-white font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:bg-[#cc1f1f] transition-colors flex items-center gap-4 rounded-none">
              View Catalog
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link to="/contact" className="border border-[#1a1a1a] text-[#2a2a2a] font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:border-[#333] hover:text-[#555] transition-colors flex items-center gap-4 rounded-none">
              Contact Us
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
