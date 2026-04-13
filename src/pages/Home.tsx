import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ChevronDown, ArrowRight, ShieldCheck, Settings, Award, Download, Quote, Bell } from 'lucide-react';
import HeroImage from '../components/HeroImage';

function AnimatedCounter({ target, suffix = '' }: { target: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, target, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    { quote: "Modina's premium rims have significantly reduced our warranty claims. Their precision engineering is unmatched in the region.", author: "Director of Procurement", company: "Global Auto Corp", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80" },
    { quote: "A reliable partner for over 10 years. Their commitment to quality and timely delivery keeps our assembly lines moving.", author: "Supply Chain Manager", company: "Metro Vehicles Ltd.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80" },
    { quote: "The durability of their motorcycle components under extreme conditions is exactly what our customers demand.", author: "Chief Engineer", company: "Apex Motors", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80" }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-modina-dark text-white font-sans">
      {/* 1. High-Impact Hero Section */}
      <section className="relative min-h-[700px] lg:min-h-[850px] w-full flex items-center bg-modina-dark overflow-hidden pt-[136px] pb-24 group">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-modina-dark">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full opacity-20 mix-blend-luminosity"
          >
            <img 
              src="/hero-image.jpg" 
              alt="High-Tech Rim"
              className="w-full h-full object-cover object-center transition-all duration-[10s] ease-out group-hover:scale-105"
              loading="eager"
              fetchPriority="high"
              onError={(e) => {
                // Prevent infinite loop if fallback also fails
                if (!e.currentTarget.src.includes('unsplash.com')) {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1600705722908-bab1e6190b05?q=80&w=2070&auto=format&fit=crop";
                  e.currentTarget.classList.add('mix-blend-luminosity');
                }
              }}
            />
          </motion.div>
          {/* Multi-layered Gradient Overlays for perfect text contrast */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_80%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-modina-dark/80 via-transparent to-modina-dark"></div>
        </div>

        {/* Left Edge Animated Bar (Replacing Notification Icon) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-start">
          <div className="group relative flex items-center cursor-pointer py-8 pl-0">
            {/* Animated Bar */}
            <div className="w-10 h-48 bg-[#0a0a0a]/60 backdrop-blur-md relative overflow-hidden rounded-r-2xl transition-all duration-500 ease-out group-hover:w-12 group-hover:bg-[#0a0a0a]/80 border border-l-0 border-white/10 group-hover:border-modina-red/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <div className="absolute left-0 top-0 w-[2px] h-full bg-modina-red/50 group-hover:bg-modina-red transition-colors"></div>
              <span className="text-gray-400 group-hover:text-white transition-colors text-[10px] font-bold tracking-[0.4em] uppercase -rotate-90 whitespace-nowrap">Announcement</span>
              <motion.div 
                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                animate={{ top: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            {/* Notification Content (Reveals on Hover) */}
            <div className="absolute left-full ml-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out pointer-events-none flex items-center bg-[#050505]/95 backdrop-blur-xl border border-white/10 px-6 py-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <div className="w-10 h-10 rounded-full bg-modina-red/10 border border-modina-red/20 flex items-center justify-center mr-4 relative">
                <div className="absolute inset-0 rounded-full border border-modina-red/50 animate-ping opacity-20"></div>
                <Bell className="w-4 h-4 text-modina-red" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-modina-red mb-1.5">Latest Update</span>
                <span className="text-sm text-white font-medium tracking-wide whitespace-nowrap">New 2026 Catalog Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Overlay */}
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20 h-full flex items-center justify-center text-center">
          <div className="max-w-5xl flex flex-col items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2
                  }
                }
              }}
              className="flex flex-col items-center"
            >
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 30, filter: 'blur(10px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                className="inline-flex items-center gap-3 mb-8 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-modina-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-modina-red shadow-[0_0_8px_rgba(229,37,37,0.8)]"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-gray-200">Premium Auto Parts Manufacturer</span>
              </motion.div>
              
              <motion.h1 
                variants={{ hidden: { opacity: 0, y: 40, filter: 'blur(10px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-display font-bold text-white tracking-tighter mb-6 uppercase leading-[0.95] text-center drop-shadow-2xl"
              >
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-600 drop-shadow-lg">Excellence</span>
              </motion.h1>
              
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 30, filter: 'blur(10px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-10 font-light text-center drop-shadow-md"
              >
                Pioneering the future of mobility. Modina Rim & Parts Ltd. delivers innovative, high-performance automotive components engineered to the most exacting global standards.
              </motion.p>

              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <Link to="/products" className="inline-flex items-center justify-center bg-modina-red text-white px-8 sm:px-10 py-4 rounded-full font-bold tracking-[0.15em] text-xs uppercase transition-all duration-300 hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(229,37,37,0.5)] group">
                  Explore Catalog
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center bg-transparent border border-white/20 text-white px-8 sm:px-10 py-4 rounded-full font-bold tracking-[0.15em] text-xs uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                  Our Capabilities
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-gray-500">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
        </motion.div>

        {/* Right Vertical Text */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block z-20">
          <span 
            className="text-gray-500 text-[10px] font-semibold tracking-[0.3em] uppercase whitespace-nowrap block"
            style={{ writingMode: 'vertical-rl' }}
          >
            Global Shipping and Free Returns
          </span>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-modina-red/30 to-transparent" />
      </section>

      {/* 2. Corporate Identity (About Us Teaser) */}
      <section className="py-20 lg:py-32 bg-modina-dark relative border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="flex flex-col">
              <motion.h2 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 lg:mb-8 uppercase tracking-wide"
              >
                Forging the Backbone of <br />
                <span className="text-modina-slate">Modern Mobility</span>
              </motion.h2>
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 lg:mb-10"
              >
                For over two decades, Modina Rim & Parts Ltd. has stood at the forefront of automotive manufacturing. Our commitment to precision engineering, rigorous quality control, and sustainable practices has made us the trusted partner for distributors and manufacturers worldwide.
              </motion.p>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
                <Link to="/about" className="inline-flex items-center gap-4 text-white font-bold tracking-[0.15em] uppercase text-xs sm:text-sm hover:text-modina-red transition-colors group">
                  Discover Our Story
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 lg:mt-16 border-t border-white/10 pt-8">
                {[
                  { target: 20, suffix: '+', label: 'Years in Business' },
                  { target: 50, suffix: '+', label: 'Global Reach' },
                  { target: 15, suffix: '', label: 'Patented Tech' }
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                    className="flex flex-col gap-2"
                  >
                    <span className="text-3xl lg:text-4xl font-display font-bold text-white">
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                    </span>
                    <span className="text-xs text-modina-slate uppercase tracking-[0.15em]">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.95, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
              className="relative h-[400px] lg:h-[600px] bg-modina-panel border border-white/5"
            >
              <img 
                src="https://picsum.photos/seed/factory/800/1000" 
                alt="Manufacturing Facility" 
                className="w-full h-full object-cover opacity-40 mix-blend-luminosity hover:opacity-80 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-modina-dark to-transparent"></div>
              <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-modina-red flex items-center justify-center shrink-0">
                    <Settings className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-bold tracking-wider uppercase text-sm lg:text-base">State-of-the-Art Facility</h4>
                    <p className="text-modina-slate text-[10px] lg:text-xs tracking-[0.1em] uppercase mt-1">ISO 9001:2015 Certified</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Categorized Product Showcase */}
      <section className="py-8 lg:py-10 bg-modina-panel border-y border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="container mx-auto px-6 md:px-12 lg:px-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 lg:mb-8">
            <div className="max-w-2xl">
              <motion.h2 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                className="text-3xl sm:text-4xl font-display font-bold text-white mb-2 uppercase tracking-wide"
              >
                Engineered for <span className="text-modina-slate">Performance</span>
              </motion.h2>
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                className="text-gray-400 text-sm sm:text-base"
              >
                Explore our comprehensive range of precision-manufactured components, designed to meet the rigorous demands of the global automotive industry.
              </motion.p>
            </div>
            <motion.div
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            >
              <Link to="/products" className="inline-flex items-center gap-3 text-white font-bold tracking-[0.15em] uppercase text-xs hover:text-modina-red transition-colors group">
                Full Range
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[250px]">
            {[
              { title: 'Motorcycle', subtitle: 'Category 01', desc: 'Stands, Guards, Handlebars', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80', className: 'md:col-span-2 md:row-span-2 min-h-[200px] md:min-h-0 h-full', titleClass: 'text-2xl lg:text-3xl', paddingClass: 'p-6' },
              { title: 'Premium Rims', subtitle: 'Category 02', desc: 'Easy Bike, Mishuk, CNG', img: 'https://images.unsplash.com/photo-1547744152-14d985cb937f?w=800&q=80', className: 'md:col-span-1 md:row-span-1 min-h-[120px] md:min-h-0 h-full', titleClass: 'text-base lg:text-lg', paddingClass: 'p-4' },
              { title: 'Bicycle & Rickshaw', subtitle: 'Category 03', desc: 'Avon, Gazi, Jumbo', img: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800&q=80', className: 'md:col-span-1 md:row-span-1 min-h-[120px] md:min-h-0 h-full', titleClass: 'text-base lg:text-lg', paddingClass: 'p-4' },
              { title: 'Hardware', subtitle: 'Category 04', desc: 'Bearings, Spokes, Washers', img: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=1200&q=80', className: 'md:col-span-2 md:row-span-1 min-h-[120px] md:min-h-0 h-full', titleClass: 'text-lg lg:text-xl', paddingClass: 'p-4 lg:p-5' }
            ].map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                className={`group relative bg-[#050505] cursor-pointer overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-1000 ${category.className}`}
              >
                {/* Image */}
                <img 
                  src={category.img} 
                  alt={category.title} 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Subtle Carbon Fiber / Brushed Metal Texture Overlay */}
                <div 
                  className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none group-hover:opacity-10 transition-opacity duration-1000 z-0"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")` }}
                ></div>
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-1000"></div>
                
                {/* Number Indicator */}
                <span className="absolute top-4 right-4 md:top-6 md:right-6 text-white/20 font-display text-xl md:text-2xl font-light group-hover:text-white/40 transition-colors duration-1000 z-20 pointer-events-none">
                  0{idx + 1}
                </span>

                {/* Content */}
                <div className={`absolute inset-0 ${category.paddingClass} flex flex-col justify-end z-10`}>
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    <p className="text-modina-red text-[8px] md:text-[9px] font-bold tracking-[0.3em] uppercase mb-1 opacity-80">{category.subtitle}</p>
                    <h3 className={`${category.titleClass} font-display font-light text-white mb-2 uppercase tracking-[0.15em]`}>{category.title}</h3>
                    
                    {/* Animated Line */}
                    <div className="w-8 h-[1px] bg-white/20 mb-3 group-hover:w-16 group-hover:bg-modina-red transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
                    
                    <p className="text-gray-400 text-[10px] lg:text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] uppercase tracking-[0.2em] leading-relaxed line-clamp-1">{category.desc}</p>
                    
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-[1s] delay-100 translate-y-2 group-hover:translate-y-0 ease-[cubic-bezier(0.19,1,0.22,1)]">
                      <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-modina-red transition-colors duration-700 shrink-0">
                        <ArrowRight className="w-2.5 h-2.5 text-white group-hover:text-modina-red transition-colors duration-700" />
                      </div>
                      <span className="text-[9px] font-medium tracking-[0.3em] uppercase text-white">Discover</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12 lg:hidden">
            <Link to="/products" className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:border-modina-red hover:text-modina-red transition-all duration-300">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 4. Quality Assurance & Certifications */}
      <section className="py-[40px] bg-modina-dark relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10"
        >
          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
              className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2 lg:mb-3 uppercase tracking-wide"
            >
              The <span className="text-modina-slate">Trust</span> Factor
            </motion.h2>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
              className="text-gray-400 text-sm sm:text-base"
            >
              Quality is not an act, it is a habit. Our rigorous quality assurance process ensures that every component leaving our facility meets global standards.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 md:h-[220px]">
            {[
              { icon: ShieldCheck, title: 'Durability Testing', desc: 'Stress-tested under extreme conditions to guarantee long-lasting performance.' },
              { icon: Settings, title: 'Precision Engineering', desc: 'CNC-machined components with micro-millimeter accuracy for perfect fitment.' },
              { icon: Award, title: 'ISO 14001 Compliance', desc: 'Internationally recognized certification for environmental management systems.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                className="relative group bg-[#0a0a0a] border border-white/5 p-5 lg:p-6 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(229,37,37,0.15)] h-full"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-modina-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-modina-red group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-white/[0.02] rounded-xl flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:bg-modina-red/10 group-hover:border-modina-red/20 transition-all duration-500 ease-out">
                      <feature.icon className="w-4 h-4 text-gray-400 group-hover:text-modina-red transition-colors duration-500" />
                    </div>
                    <span className="text-4xl font-display font-light text-white/[0.03] group-hover:text-white/10 transition-colors duration-500 select-none">
                      0{idx + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-sm lg:text-base font-display font-bold text-white mb-2 uppercase tracking-[0.15em] group-hover:text-modina-red transition-colors duration-500">{feature.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-light flex-grow line-clamp-2">{feature.desc}</p>
                  
                  {/* Subtle Learn More Link */}
                  <div className="mt-3 flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                    <div className="w-4 h-4 rounded-full border border-modina-red/30 flex items-center justify-center">
                      <ArrowRight className="w-2 h-2 text-modina-red" />
                    </div>
                    <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-modina-red">Learn More</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. The Corporate Download Center */}
      <section className="h-[550px] bg-modina-panel border-y border-white/5 flex flex-col justify-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="container mx-auto px-6 md:px-12 lg:px-24"
        >
          <div className="bg-gradient-to-br from-[#111318] to-[#0a0a0a] border border-white/10 rounded-2xl p-8 lg:p-12 relative overflow-hidden h-[350px] flex flex-col justify-center shadow-[0_0_50px_rgba(0,0,0,0.3)] group">
            {/* Premium Background Glows */}
            <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-modina-red/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-modina-red/20 transition-colors duration-1000"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
              {/* Left Column: Text & Primary CTA */}
              <div className="flex flex-col">
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="w-8 h-[1px] bg-modina-red"></div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-modina-red uppercase">Corporate Resources</span>
                </motion.div>
                
                <motion.h2 
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                  className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 uppercase tracking-wide leading-tight"
                >
                  Equipping Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Partners.</span>
                </motion.h2>
                
                <motion.p 
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                  className="text-gray-400 text-sm mb-8 max-w-md leading-relaxed font-light"
                >
                  Access technical spec sheets, high-res ISO certificates, and offline product catalogs to streamline your procurement process.
                </motion.p>
                
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                  className="flex flex-wrap items-center gap-6"
                >
                  <button className="bg-white/5 border border-white/10 backdrop-blur-sm text-white px-6 py-3 font-bold tracking-[0.15em] text-xs uppercase hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-3 group/btn rounded-lg">
                    <div className="w-5 h-5 rounded-full bg-modina-red/20 flex items-center justify-center group-hover/btn:bg-modina-red transition-colors">
                      <Download className="w-2.5 h-2.5 text-modina-red group-hover/btn:text-white transition-colors" />
                    </div>
                    2026 Catalog
                  </button>
                  <Link to="/downloads" className="text-gray-400 font-bold tracking-[0.15em] text-[10px] uppercase hover:text-white transition-colors flex items-center gap-2 group/link">
                    View All Files
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
              
              {/* Right Column: Sleek File Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { name: 'Alloy Specs', size: '2.4 MB', type: 'PDF' },
                  { name: 'ISO 9001 Cert', size: '1.1 MB', type: 'PDF' },
                  { name: 'CAD Models', size: '18.5 MB', type: 'ZIP' },
                  { name: 'Warranty Terms', size: '0.8 MB', type: 'PDF' }
                ].map((file, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: idx * 0.1, ease: "easeOut" } } }}
                    className="bg-[#050505]/50 backdrop-blur-md border border-white/5 p-4 rounded-xl flex items-center gap-4 hover:border-modina-red/30 hover:bg-white/[0.02] transition-all duration-300 cursor-pointer group/card hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(229,37,37,0.15)]"
                  >
                    <div className="w-10 h-10 bg-white/[0.03] rounded-lg border border-white/5 flex items-center justify-center group-hover/card:bg-modina-red/10 group-hover/card:border-modina-red/20 transition-colors">
                      <Download className="w-4 h-4 text-gray-500 group-hover/card:text-modina-red transition-colors" />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <span className="text-[11px] font-bold tracking-[0.1em] text-white uppercase mb-0.5 group-hover/card:text-modina-red transition-colors">{file.name}</span>
                      <span className="text-[9px] text-gray-500 tracking-wider font-mono">{file.type} • {file.size}</span>
                    </div>
                    <div className="opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300">
                      <ArrowRight className="w-3 h-3 text-modina-red" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. Global Trust (Testimonials) */}
      <section className="pt-[20px] pb-[45px] bg-modina-dark">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="container mx-auto px-6 md:px-12 lg:px-24"
        >
          <div className="text-center mb-16 lg:mb-20">
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 lg:mb-6 uppercase tracking-wide"
            >
              Global <span className="text-modina-slate">Trust</span>
            </motion.h2>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
              className="text-gray-400 text-base sm:text-lg"
            >
              What our corporate partners say about us.
            </motion.p>
          </div>

          <div className="w-full max-w-[750px] mx-auto relative">
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
              className="bg-[#111318] rounded-2xl p-[10px] md:h-[220px] relative flex flex-col items-center justify-center text-center border border-white/5 shadow-2xl overflow-hidden group"
            >
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-modina-red/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevTestimonial}
                className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors z-10 group/btn"
              >
                <div className="absolute inset-0 border border-white/10 rounded-full scale-50 opacity-0 group-hover/btn:scale-100 group-hover/btn:opacity-100 transition-all duration-500 ease-out" />
                <ChevronLeft className="w-4 h-4 font-light" strokeWidth={1.5} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors z-10 group/btn"
              >
                <div className="absolute inset-0 border border-white/10 rounded-full scale-50 opacity-0 group-hover/btn:scale-100 group-hover/btn:opacity-100 transition-all duration-500 ease-out" />
                <ChevronRight className="w-4 h-4 font-light" strokeWidth={1.5} />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, filter: 'blur(5px)', scale: 0.98 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                  exit={{ opacity: 0, filter: 'blur(5px)', scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center w-full"
                >
                  {/* Avatar */}
                  <div className="relative mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/10 p-0.5">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img 
                          src={testimonials[activeTestimonial].image} 
                          alt={testimonials[activeTestimonial].author} 
                          className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    {/* Minimalist Quote Mark */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-modina-red flex items-center justify-center border-2 border-[#111318]">
                      <Quote className="w-2 h-2 text-white fill-white" />
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed font-light tracking-wide max-w-xl px-8 md:px-12 mb-4 line-clamp-3">
                    "{testimonials[activeTestimonial].quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex flex-col items-center mb-2">
                    <h4 className="text-[10px] md:text-[11px] font-display font-medium tracking-[0.2em] text-white uppercase mb-1">{testimonials[activeTestimonial].author}</h4>
                    <p className="text-modina-red text-[8px] font-semibold tracking-[0.25em] uppercase">{testimonials[activeTestimonial].company}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Pagination (Lines instead of dots) */}
              <div className="absolute bottom-3 flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-[2px] transition-all duration-500 ease-out ${idx === activeTestimonial ? 'w-6 bg-modina-red' : 'w-3 bg-white/20 hover:bg-white/40'}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 7. Pre-Footer Call to Action */}
      <section className="h-[500px] flex flex-col justify-center bg-modina-panel relative overflow-hidden border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center"
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <motion.h2 
              variants={{ hidden: { opacity: 0, scale: 0.9, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 lg:mb-6 uppercase tracking-wide leading-tight"
            >
              Partner with <br />
              <span className="text-modina-slate">Modina Rim & Parts</span>
            </motion.h2>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
              className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 lg:mb-10 max-w-2xl mx-auto"
            >
              Let's build the future of mobility together. Connect with our experts to discuss your manufacturing needs.
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 sm:gap-4 bg-modina-red text-white px-8 sm:px-10 py-4 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(229,37,37,0.3)]"
              >
                Contact Sales Team
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
