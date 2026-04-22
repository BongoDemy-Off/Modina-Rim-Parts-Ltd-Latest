import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const steps = [
  { num: '01', title: 'Raw Material Inspection', desc: 'All incoming steel and alloy verified against spec sheets.' },
  { num: '02', title: 'Precision Cutting', desc: 'CNC-guided cutting to ±0.01mm tolerance.' },
  { num: '03', title: 'Heat Treatment', desc: 'Controlled furnace hardening for maximum durability.' },
  { num: '04', title: 'Surface Finishing', desc: 'Electroplating and powder coating for corrosion resistance.' },
  { num: '05', title: 'Dimensional QC', desc: '100% inspection with calibrated measurement tools.' },
  { num: '06', title: 'Final Certification', desc: 'ISO 9001:2015 batch sign-off before dispatch.' },
];

const certifications = [
  { 
    num: '—01', 
    title: 'ISO 9001:2015', 
    desc: 'International standard for quality management systems. Covers design, manufacturing, and customer service.',
    detail: 'Renewed Annually'
  },
  { 
    num: '—02', 
    title: 'ISO 14001', 
    desc: 'Environmental management certification ensuring sustainable manufacturing practices across our facility.',
    detail: 'Since 2018'
  },
  { 
    num: '—03', 
    title: 'BSTI Certified', 
    desc: 'Bangladesh Standards and Testing Institution approval for domestic market compliance and consumer protection.',
    detail: 'National Standard'
  },
];

export default function Quality() {
  const letters = "OUR QUALITY".split("");
  
  const qualityRef = useRef(null);
  const qualityInView = useInView(qualityRef, { once: true, margin: '-80px' });

  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: '-60px' });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  const stepOpacity = [1, 0.7, 0.55, 0.4, 0.28, 0.18];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-[80px]">
      {/* SECTION 1 — HERO */}
      <section className="w-full py-20 lg:py-28 flex flex-col items-center text-center">
        <div className="font-mono text-[10px] tracking-[0.25em] text-[#2a2a2a] uppercase flex items-center gap-2 justify-center mb-10">
          <Link to="/">Home</Link>
          <ChevronRight className="w-2.5 h-2.5 text-[#1e1e1e]" />
          <span className="text-[#E52525]">Quality</span>
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
          <span>ISO 9001:2015</span>
          <span className="text-[#E52525]">·</span>
          <span>Dhaka, Bangladesh</span>
        </p>

        <hr className="w-full max-w-md border-[#1a1a1a] mx-auto mt-10 mb-10" />

        <div className="flex items-center justify-center gap-0">
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">ISO</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Certified</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">100%</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Pass Rate</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">15+</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Years QA</span>
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

      {/* SECTION 2 — QUALITY PHILOSOPHY SPLIT */}
      <section className="w-full border-t border-[#141414]" ref={qualityRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#141414]">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={qualityInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#050505] p-10 lg:p-16 flex flex-col justify-center"
          >
            <p className="text-[120px] md:text-[160px] lg:text-[200px] font-light text-[#0f0f0f] leading-none select-none tracking-tight">
              100
            </p>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#E52525] uppercase mt-2">
              — Our Standard
            </p>
            <p className="font-mono text-[9px] tracking-[0.25em] text-[#252525] uppercase mt-1">
              Zero Defect Policy
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={qualityInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#050505] p-10 lg:p-16 flex flex-col justify-center"
          >
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-8">
              — Quality First
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-8 uppercase">
              Precision Is Not Optional
            </h2>
            <p className="text-[13px] text-[#3a3a3a] leading-relaxed font-light mb-5 max-w-lg">
              At Modina Rim & Parts Ltd., quality is not just a department—it is the foundation of our entire manufacturing process. From raw material sourcing to final dispatch, every component undergoes rigorous testing to ensure it meets our exacting standards.
            </p>
            <p className="text-[13px] text-[#3a3a3a] leading-relaxed font-light mb-5 max-w-lg">
              Our zero-defect policy means we do not compromise. We continuously invest in advanced measurement tools, automated inspection systems, and ongoing training for our quality assurance team to maintain our ISO 9001:2015 certification.
            </p>
            <Link to="/ai-engineer" className="group inline-flex items-center gap-3 mt-4 font-mono text-[10px] tracking-[0.25em] text-[#333] uppercase hover:text-white transition-colors duration-300">
              Consult AI Engineer
              <ArrowRight className="w-3 h-3 text-[#333] group-hover:text-white transition-colors" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — PROCESS TIMELINE */}
      <section className="w-full border-t border-[#141414] bg-[#080808] py-20 lg:py-28 overflow-hidden" ref={processRef}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-3">— Our Process</p>
              <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight">
                From Raw Material to Delivery
              </h2>
            </div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#1e1e1e] uppercase hidden md:block">
              Step 01 — 06
            </p>
          </div>

          <div className="relative overflow-x-auto pb-4">
            <div className="absolute top-[28px] left-0 right-0 h-[0.5px] bg-[#141414]" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={processInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="absolute top-[28px] left-0 right-0 h-[0.5px] bg-[#E52525]"
            />
            
            <div className="flex items-start gap-0 min-w-[700px] relative">
              {steps.map((step, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={processInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-3 h-3 border z-10 mb-6 mt-[22px] transition-colors duration-300 cursor-pointer ${idx === 0 ? 'bg-[#E52525] border-[#E52525]' : 'bg-[#080808] border-[#2a2a2a] hover:border-[#E52525]'}`}
                  />
                  <div className="flex flex-col items-center text-center px-2">
                    <p style={{ opacity: stepOpacity[idx] }} className="font-mono text-[9px] tracking-[0.2em] text-[#E52525] uppercase mb-2">{step.num}</p>
                    <p className="font-mono text-[10px] tracking-[0.15em] text-white uppercase mb-2 leading-tight cursor-pointer hover:text-[#E52525] transition-colors duration-300">
                      {step.title}
                    </p>
                    <p className="text-[11px] text-[#252525] leading-relaxed max-w-[120px] font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CERTIFICATIONS GRID */}
      <section className="w-full border-t border-[#141414] py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-16">
          <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— What We Stand For</p>
          <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight">
            Certifications & Standards
          </h2>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#141414]">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-[#050505] p-8 lg:p-10 flex flex-col cursor-default relative"
              >
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px] bg-[#E52525] transition-all duration-500 ease-out" />
                <p className="font-mono text-[11px] tracking-[0.25em] text-[#E52525] uppercase mb-6 mt-2">{cert.num}</p>
                <h3 className="text-2xl md:text-3xl font-light text-white uppercase tracking-[0.1em] mb-6">
                  {cert.title}
                </h3>
                <hr className="border-[#141414] mb-6" />
                <p className="text-[13px] text-[#333] leading-relaxed font-light flex-grow">
                  {cert.desc}
                </p>
                <p className="font-mono text-[9px] tracking-[0.2em] text-[#1e1e1e] uppercase mt-6 group-hover:text-[#333] transition-colors">
                  {cert.detail}
                </p>
              </motion.div>
            ))}
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
