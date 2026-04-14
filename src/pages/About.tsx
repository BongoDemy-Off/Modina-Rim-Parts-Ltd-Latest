import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

function CountUp({ 
  target, suffix = '', duration = 2, delay = 0 
}: { 
  target: number; suffix?: string; 
  duration?: number; delay?: number 
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v) + suffix);
  
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => {
      const c = animate(count, target, { duration, ease: 'easeOut' });
      return c.stop;
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [inView, count, target, duration, delay]);
  
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const milestones = [
  { year: '2010', title: 'Company Founded', desc: 'Established in Dhaka with a focus on motorcycle parts.' },
  { year: '2013', title: 'First Export', desc: 'Began exporting to neighboring countries in South Asia.' },
  { year: '2016', title: 'ISO 9001 Certified', desc: 'Achieved international quality management certification.' },
  { year: '2019', title: 'New Facility', desc: 'Expanded production with a state-of-the-art manufacturing plant.' },
  { year: '2024', title: 'Product Range Expansion', desc: 'Launched 21+ SKUs covering 4 major auto parts categories.' },
];

const values = [
  { 
    num: '—01', 
    title: 'Precision', 
    desc: 'Every component is engineered to micro-millimeter accuracy. We believe precision is not optional — it is the foundation of trust.',
    detail: 'CNC-machined. Tolerance: ±0.01mm'
  },
  { 
    num: '—02', 
    title: 'Integrity', 
    desc: 'We hold ourselves to the highest standards of quality and transparency. Our ISO 9001:2015 certification is proof, not a promise.',
    detail: 'ISO 9001:2015 Certified'
  },
  { 
    num: '—03', 
    title: 'Innovation', 
    desc: 'From our founding, we have continuously invested in new technologies and processes to stay ahead of global manufacturing standards.',
    detail: '15+ Years of R&D'
  },
];

const stats = [
  { value: 21, suffix: '+', label: 'Product Lines' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 3,  suffix: '+', label: 'Export Countries' },
  { value: 100, suffix: '%', label: 'ISO Certified' },
];

const team = [
  { 
    name: 'Mohammed Rafiqul Islam', 
    title: 'Founder & Managing Director',
    img: 'https://picsum.photos/seed/leader-01/400/500'
  },
  { 
    name: 'Kazi Shahidul Hasan', 
    title: 'Chief Operations Officer',
    img: 'https://picsum.photos/seed/leader-02/400/500'
  },
  { 
    name: 'Nasrin Akter', 
    title: 'Head of Quality Assurance',
    img: 'https://picsum.photos/seed/leader-03/400/500'
  },
];

export default function About() {
  const letters = "OUR STORY".split("");
  
  const foundingRef = useRef(null);
  const foundingInView = useInView(foundingRef, { once: true, margin: '-80px' });

  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: '-60px' });

  const factoryRef = useRef(null);
  const factoryInView = useInView(factoryRef, { once: true, margin: '-60px' });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  const yearOpacity = [1, 0.45, 0.32, 0.22, 0.16];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-[80px]">
      {/* SECTION 1 — HERO */}
      <section className="w-full py-20 lg:py-28 flex flex-col items-center text-center">
        <div className="font-mono text-[10px] tracking-[0.25em] text-[#2a2a2a] uppercase flex items-center gap-2 justify-center mb-10">
          <Link to="/">Home</Link>
          <ChevronRight className="w-2.5 h-2.5 text-[#1e1e1e]" />
          <span className="text-[#555]">About Us</span>
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

        <p className="font-mono text-[10px] tracking-[0.3em] text-[#2a2a2a] uppercase">
          Modina Rim & Parts Ltd. — Est. 2010 — Dhaka, Bangladesh
        </p>

        <hr className="w-full max-w-md border-[#1a1a1a] mx-auto mt-10 mb-10" />

        <div className="flex items-center justify-center gap-0">
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">2010</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Est.</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">
              <CountUp target={15} suffix="+" />
            </span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Experience</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">ISO</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Certification</span>
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

      {/* SECTION 2 — FOUNDING STORY */}
      <section className="w-full border-t border-[#141414]" ref={foundingRef}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-0">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={foundingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center pr-0 lg:pr-16 border-r-0 lg:border-r border-[#141414] py-10 lg:py-0"
          >
            <p className="text-[120px] md:text-[160px] lg:text-[200px] font-light text-[#0f0f0f] leading-none select-none tracking-tight">
              2010
            </p>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#E52525] uppercase mt-2">
              — Founded
            </p>
            <p className="font-mono text-[9px] tracking-[0.25em] text-[#252525] uppercase mt-1">
              Dhaka, Bangladesh
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={foundingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center pl-0 lg:pl-16 py-10 lg:py-0"
          >
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-8">
              Our Beginning
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-8 uppercase">
              Built on Precision.<br />
              <span className="text-[#333]">Driven by Purpose.</span>
            </h2>
            <p className="text-[13px] text-[#3a3a3a] leading-relaxed font-light mb-5 max-w-lg">
              Modina Rim & Parts Ltd. was established in 2010 with a single purpose: to manufacture automotive components that meet global quality standards. Starting from a modest facility in Dhaka, we have grown into one of Bangladesh's leading auto parts manufacturers.
            </p>
            <p className="text-[13px] text-[#3a3a3a] leading-relaxed font-light mb-5 max-w-lg">
              Today, our products reach distributors and manufacturers across multiple countries. Every component we produce is a testament to our founding belief — that precision engineering and uncompromising quality are non-negotiable.
            </p>
            <Link to="/products" className="inline-flex items-center gap-3 mt-4 font-mono text-[10px] tracking-[0.25em] text-[#333] uppercase hover:text-white transition-colors duration-300">
              Explore Our Products
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — COMPANY TIMELINE */}
      <section className="w-full border-t border-[#141414] bg-[#080808] py-20 lg:py-28 overflow-hidden" ref={timelineRef}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-3">— Milestones</p>
              <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight">
                15 Years of Growth
              </h2>
            </div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#1e1e1e] uppercase hidden md:block">
              2010 — 2026
            </p>
          </div>

          <div className="relative overflow-x-auto pb-4">
            <div className="absolute top-[28px] left-0 right-0 h-[0.5px] bg-[#141414]" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={timelineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="absolute top-[28px] left-0 right-0 h-[0.5px] bg-[#E52525]"
            />
            
            <div className="flex items-start gap-0 min-w-[700px] relative">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={timelineInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-3 h-3 border z-10 mb-6 mt-[22px] transition-colors duration-300 cursor-pointer ${idx === 0 ? 'bg-[#E52525] border-[#E52525]' : 'bg-[#080808] border-[#2a2a2a] hover:border-[#E52525]'}`}
                  />
                  <div className="flex flex-col items-center text-center px-2">
                    <p style={{ opacity: yearOpacity[idx] }} className="font-mono text-[9px] tracking-[0.2em] text-[#E52525] uppercase mb-2">{milestone.year}</p>
                    <p className="font-mono text-[10px] tracking-[0.15em] text-white uppercase mb-2 leading-tight">
                      {milestone.title}
                    </p>
                    <p className="text-[11px] text-[#252525] leading-relaxed max-w-[120px] font-light">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — MISSION & CORE VALUES */}
      <section className="w-full border-t border-[#141414] py-20 lg:py-28">
        <div className="max-w-lg mx-auto text-center mb-16">
          <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— What We Stand For</p>
          <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight">
            Mission & Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#141414]">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#050505] p-8 lg:p-10 flex flex-col cursor-default relative"
            >
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px] bg-[#E52525] transition-all duration-500 ease-out" />
              <p className="font-mono text-[11px] tracking-[0.25em] text-[#E52525] uppercase mb-6 mt-2">{value.num}</p>
              <h3 className="text-2xl md:text-3xl font-light text-white uppercase tracking-[0.1em] mb-6">
                {value.title}
              </h3>
              <hr className="border-[#141414] mb-6" />
              <p className="text-[13px] text-[#333] leading-relaxed font-light flex-grow">
                {value.desc}
              </p>
              <p className="font-mono text-[9px] tracking-[0.2em] text-[#1e1e1e] uppercase mt-6 group-hover:text-[#333] transition-colors">
                {value.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — MANUFACTURING SHOWCASE */}
      <section className="w-full border-t border-[#141414] bg-[#080808]" ref={factoryRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative h-[400px] lg:h-[560px] bg-[#0d0d0d] overflow-hidden">
            <motion.img
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              src="https://picsum.photos/seed/factory-modina/900/700"
              className="w-full h-full object-cover grayscale opacity-50"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,#080808_0%,transparent_40%)]" />
            <div className="absolute bottom-8 left-8">
              <p className="font-mono text-[8px] tracking-[0.3em] text-[#252525] uppercase">Manufacturing Facility</p>
              <p className="font-mono text-[9px] tracking-[0.2em] text-[#333] uppercase mt-1">Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[1px] bg-[#141414]">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-[#080808] flex flex-col justify-center px-10 lg:px-12 py-14 lg:py-16 group cursor-default">
                <p className="text-5xl lg:text-6xl font-light text-[#E52525] tracking-tight mb-3">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-mono text-[9px] tracking-[0.3em] text-[#1e1e1e] uppercase group-hover:text-[#333] transition-colors duration-500">
                  {stat.label}
                </p>
                <div className="w-0 group-hover:w-8 h-[1px] bg-[#E52525] mt-4 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — LEADERSHIP TEAM */}
      <section className="w-full border-t border-[#141414] py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-end justify-between mb-16">
          <div>
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-3">— The People</p>
            <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight">
              Leadership
            </h2>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#141414]">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="group bg-[#050505] overflow-hidden cursor-default"
            >
              <div className="aspect-[3/4] bg-[#0d0d0d] overflow-hidden">
                <img 
                  src={member.img}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-[1200ms] ease-out scale-100 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="p-6 border-t border-[#141414]">
                <p className="text-[13px] font-light text-[#666] group-hover:text-white transition-colors duration-500 mb-1">
                  {member.name}
                </p>
                <p className="font-mono text-[9px] tracking-[0.2em] text-[#1e1e1e] uppercase group-hover:text-[#E52525] transition-colors duration-500">
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — BOTTOM CTA BANNER */}
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
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— What We Make</p>
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
            <Link to="/products" className="bg-[#E52525] text-white font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:bg-[#cc1f1f] transition-colors flex items-center gap-4">
              View Catalog
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link to="/contact" className="border border-[#1a1a1a] text-[#2a2a2a] font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:border-[#333] hover:text-[#555] transition-colors flex items-center gap-4">
              Contact Us
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}