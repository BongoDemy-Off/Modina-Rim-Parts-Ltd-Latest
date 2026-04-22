import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const coreValues = [
  {
    num: "—01",
    title: "Precision",
    desc: "Every component is engineered to micro-millimeter accuracy. We believe precision is not optional — it is the foundation of trust between manufacturer and customer.",
    badge: "Tolerance: ±0.01mm"
  },
  {
    num: "—02",
    title: "Integrity",
    desc: "We hold ourselves to the highest standards of transparency in every transaction, every audit, and every product that leaves our facility. Our word is our warranty.",
    badge: "ISO 9001:2015 Verified"
  },
  {
    num: "—03",
    title: "Innovation",
    desc: "We continuously invest in new technologies, processes, and people. Standing still in manufacturing means falling behind — and we refuse to fall behind.",
    badge: "15+ Years of R&D"
  },
  {
    num: "—04",
    title: "Responsibility",
    desc: "We are accountable to our customers, our employees, and the communities we operate in. Responsible manufacturing means doing things right even when no one is watching.",
    badge: "ISO 14001 Certified"
  },
  {
    num: "—05",
    title: "Excellence",
    desc: "Good enough is never enough at Modina. We pursue excellence in every dimension — from raw material selection to final dispatch inspection — without exception.",
    badge: "Zero Defect Policy"
  },
  {
    num: "—06",
    title: "Partnership",
    desc: "We view every distributor, supplier, and customer as a long-term partner. Our success is measured not just by what we produce but by the relationships we build.",
    badge: "3+ Export Markets"
  }
];

export default function Mission() {
  const letters = "OUR MISSION".split("");

  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: '-80px' });

  const visionRef = useRef(null);
  const visionInView = useInView(visionRef, { once: true, margin: '-60px' });

  const leaderRef = useRef(null);
  const leaderInView = useInView(leaderRef, { once: true, margin: '-80px' });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-[80px]">
      {/* SECTION 1 — HERO */}
      <section className="w-full py-20 lg:py-28 flex flex-col items-center text-center">
        <div className="font-mono text-[10px] tracking-[0.25em] text-[#2a2a2a] uppercase flex items-center gap-2 justify-center mb-10">
          <Link to="/">Home</Link>
          <ChevronRight className="w-2.5 h-2.5 text-[#1e1e1e]" />
          <span className="text-[#E52525]">Mission</span>
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
          <span>Purpose & Values</span>
          <span className="text-[#E52525]">·</span>
          <span>Est. 2010</span>
        </p>

        <hr className="w-full max-w-md border-[#1a1a1a] mx-auto mt-10 mb-10" />

        <div className="flex items-center justify-center gap-0">
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">3</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Core Values</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">15+</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Years of Purpose</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">ISO</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Certified</span>
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

      {/* SECTION 2 — MISSION STATEMENT SPLIT */}
      <section className="w-full border-t border-[#141414]" ref={missionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#141414]">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={missionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#050505] p-10 lg:p-16 flex flex-col justify-center"
          >
            <p className="text-[200px] font-light text-[#0a0a0a] leading-none select-none tracking-tight">
              M
            </p>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#E52525] uppercase mt-2">
              — Our Purpose
            </p>
            <p className="font-mono text-[9px] tracking-[0.25em] text-[#252525] uppercase mt-1">
              Why We Exist
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={missionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#050505] p-10 lg:p-16 flex flex-col justify-center"
          >
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-8">
              — Mission Statement
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-tight leading-tight mb-8">
              Engineering Trust. Delivering Excellence.
            </h2>
            <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed max-w-lg mb-5">
              Our mission is to manufacture automotive components that exceed international quality standards, empowering mobility across Bangladesh and beyond. We exist to prove that precision engineering and uncompromising quality can originate from Dhaka.
            </p>
            <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed max-w-lg mb-5">
              Every rim we forge, every component we machine, and every standard we uphold is a direct expression of our founding belief — that Bangladesh can and should compete at the highest level of global manufacturing.
            </p>
            <Link to="/about" className="inline-flex items-center gap-3 mt-4 font-mono text-[10px] tracking-[0.25em] text-[#333] uppercase hover:text-white transition-colors">
              Our Full Story
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — VISION STATEMENT */}
      <section className="w-full border-t border-[#141414] bg-[#080808] py-20 lg:py-28" ref={visionRef}>
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          animate={visionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto px-6 md:px-12 lg:px-24 max-w-4xl text-center"
        >
          <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-6">— Vision</p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-tight leading-relaxed mb-10">
            "To be South Asia's most trusted automotive components manufacturer — recognized not just for what we make, but for how we make it."
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={visionInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'center' }}
            className="w-24 h-[1px] bg-[#E52525] mx-auto mb-10"
          />
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#252525] uppercase">
            Modina Rim & Parts Ltd. — 2026 Vision Statement
          </p>
        </motion.div>
      </section>

      {/* SECTION 4 — CORE VALUES */}
      <section className="w-full border-t border-[#141414] py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-16">
          <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— What We Stand For</p>
          <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight">
            Core Values
          </h2>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#141414]">
          {coreValues.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#050505] p-8 lg:p-10 flex flex-col group cursor-default relative"
            >
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px] bg-[#E52525] transition-all duration-500" />
              
              <p className="font-mono text-[11px] tracking-[0.25em] text-[#E52525] uppercase mb-6 mt-2">
                {value.num}
              </p>
              <h3 className="text-2xl md:text-3xl font-light text-white uppercase tracking-[0.1em] mb-6">
                {value.title}
              </h3>
              <hr className="border-[#141414] mb-6" />
              <p className="text-[13px] text-[#333] leading-relaxed font-light flex-grow">
                {value.desc}
              </p>
              <p className="font-mono text-[9px] tracking-[0.2em] text-[#1e1e1e] uppercase mt-6 group-hover:text-[#333] transition-colors duration-500">
                {value.badge}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — LEADERSHIP PHILOSOPHY SPLIT */}
      <section className="w-full border-t border-[#141414] bg-[#080808]" ref={leaderRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#141414]">
          <div className="relative h-[400px] lg:h-[560px] bg-[#0d0d0d] overflow-hidden">
            <motion.img
              initial={{ scale: 1.08 }}
              animate={leaderInView ? { scale: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              src="https://picsum.photos/seed/mission-leader/900/700"
              className="w-full h-full object-cover grayscale opacity-40"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,#080808_0%,transparent_40%)]" />
            <div className="absolute bottom-8 left-8">
              <p className="font-mono text-[8px] tracking-[0.3em] text-[#252525] uppercase">
                Leadership Philosophy
              </p>
              <p className="font-mono text-[9px] tracking-[0.2em] text-[#333] uppercase mt-1">
                Mohammed Rafiqul Islam — Founder
              </p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={leaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#080808] p-10 lg:p-16 flex flex-col justify-center"
          >
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-8">
              — Founder's Note
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight leading-tight mb-8">
              Built on Conviction.
            </h2>
            
            <blockquote className="border-l-2 border-[#E52525] pl-6 mb-8 text-[15px] text-[#444] font-light leading-relaxed italic">
              "We started Modina with a single conviction — that quality is not a luxury reserved for large multinationals. It is a discipline available to anyone willing to commit to it absolutely."
            </blockquote>

            <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed mb-4 max-w-lg">
              Fifteen years later, that conviction has never wavered. Every ISO certification we earn, every zero-defect audit we pass, and every international market we enter is proof that our founding belief was right.
            </p>
            <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed mb-4 max-w-lg">
              Our values are not written on walls. They are built into every product we ship and every decision we make.
            </p>
            
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-6">
              — Mohammed Rafiqul Islam, Founder & MD
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — CTA BANNER */}
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
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Live Our Values</p>
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
            <Link to="/about" className="border border-[#1a1a1a] text-[#2a2a2a] font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:border-[#333] hover:text-[#555] transition-colors flex items-center gap-4 rounded-none">
              Our Story
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
