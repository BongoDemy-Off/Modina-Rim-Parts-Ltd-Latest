import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ChevronDown, ArrowRight, ShieldCheck, Settings, Award, Download, Quote, Bell } from 'lucide-react';
import HeroImage from '../components/HeroImage';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-modina-dark text-white font-sans">
      {/* 1. High-Impact Hero Section */}
      <section className="relative min-h-screen w-full flex items-center bg-modina-dark overflow-hidden pt-36 lg:pt-40 pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-modina-dark">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute w-[150vw] h-[150vw] md:w-[120vw] md:h-[120vw] opacity-20 mix-blend-screen"
          >
            <img 
              src="/hero-rim.png" 
              alt="High-Tech Rim"
              className="w-full h-full object-cover object-center blur-[3px]"
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
                className="text-5xl sm:text-7xl lg:text-8xl xl:text-[8rem] font-display font-bold text-white tracking-tighter mb-8 uppercase leading-[0.85] text-center drop-shadow-2xl"
              >
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-lg">Excellence</span>
              </motion.h1>
              
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 30, filter: 'blur(10px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed mb-12 font-light text-center drop-shadow-md"
              >
                Pioneering the future of mobility. Modina Rim & Parts Ltd. delivers innovative, high-performance automotive components engineered to the most exacting global standards.
              </motion.p>

              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                className="flex flex-wrap items-center justify-center gap-5 sm:gap-8"
              >
                <Link to="/products" className="relative overflow-hidden inline-flex items-center justify-center bg-modina-red text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold tracking-[0.2em] text-xs sm:text-sm uppercase transition-all duration-500 shadow-[0_0_20px_rgba(229,37,37,0.4)] hover:shadow-[0_0_50px_rgba(229,37,37,0.8)] hover:-translate-y-1 hover:scale-105 group">
                  <span className="relative z-10 flex items-center">
                    Explore Catalog
                    <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-modina-red opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center bg-transparent border border-white/20 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold tracking-[0.2em] text-xs sm:text-sm uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-500 backdrop-blur-sm">
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
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-3"
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
      </section>

      {/* 2. Corporate Identity (About Us Teaser) */}
      <section className="py-20 lg:py-32 bg-modina-dark relative border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 lg:mb-8 uppercase tracking-wide">
                Forging the Backbone of <br />
                <span className="text-modina-slate">Modern Mobility</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 lg:mb-10">
                For over two decades, Modina Rim & Parts Ltd. has stood at the forefront of automotive manufacturing. Our commitment to precision engineering, rigorous quality control, and sustainable practices has made us the trusted partner for distributors and manufacturers worldwide.
              </p>
              <Link to="/about" className="inline-flex items-center gap-4 text-white font-bold tracking-[0.15em] uppercase text-xs sm:text-sm hover:text-modina-red transition-colors group">
                Discover Our Story
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
          </div>
        </div>
      </section>

      {/* 3. Categorized Product Showcase */}
      <section className="py-20 lg:py-32 bg-modina-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 lg:mb-6 uppercase tracking-wide">
                Engineered for <span className="text-modina-slate">Performance</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">Explore our comprehensive range of precision-manufactured components, designed to meet the rigorous demands of the global automotive industry.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/products" className="inline-flex items-center gap-4 text-white font-bold tracking-[0.15em] uppercase text-xs sm:text-sm hover:text-modina-red transition-colors group">
                Full Product Range
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: 'Motorcycle', desc: 'Stands, Guards, Handlebars', img: 'motorcycle' },
              { title: 'Premium Rims', desc: 'Easy Bike, Mishuk, CNG', img: 'rims' },
              { title: 'Bicycle & Rickshaw', desc: 'Avon, Gazi, Jumbo', img: 'bicycle' },
              { title: 'Hardware', desc: 'Bearings, Spokes, Washers', img: 'hardware' }
            ].map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative h-[350px] sm:h-[400px] lg:h-[500px] bg-modina-dark border border-white/5 cursor-pointer overflow-hidden"
              >
                <img 
                  src={`https://picsum.photos/seed/${category.img}/600/800`} 
                  alt={category.title} 
                  className="w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-modina-dark via-modina-dark/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl lg:text-2xl font-display font-bold text-white mb-2 uppercase tracking-wide">{category.title}</h3>
                  <p className="text-modina-slate text-xs lg:text-sm mb-4 lg:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 uppercase tracking-wider">{category.desc}</p>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-modina-red group-hover:border-modina-red transition-colors">
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Quality Assurance & Certifications */}
      <section className="py-20 lg:py-32 bg-modina-dark relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 lg:mb-6 uppercase tracking-wide"
            >
              The <span className="text-modina-slate">Trust</span> Factor
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-base sm:text-lg"
            >
              Quality is not an act, it is a habit. Our rigorous quality assurance process ensures that every component leaving our facility meets global standards.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: ShieldCheck, title: 'Durability Testing', desc: 'Stress-tested under extreme conditions to guarantee long-lasting performance.' },
              { icon: Settings, title: 'Precision Engineering', desc: 'CNC-machined components with micro-millimeter accuracy for perfect fitment.' },
              { icon: Award, title: 'ISO 14001 Compliance', desc: 'Internationally recognized certification for environmental management systems.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-modina-panel border border-white/5 p-8 lg:p-10 hover:border-modina-red/50 transition-colors group"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-modina-dark flex items-center justify-center mb-6 lg:mb-8 border border-white/10 group-hover:border-modina-red transition-colors">
                  <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-modina-red" />
                </div>
                <h3 className="text-lg lg:text-xl font-display font-bold text-white mb-3 lg:mb-4 uppercase tracking-wider">{feature.title}</h3>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Corporate Download Center */}
      <section className="py-20 lg:py-32 bg-modina-panel border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="bg-modina-dark border border-white/5 p-8 sm:p-12 md:p-20 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-modina-red/5 to-transparent pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 lg:mb-6 uppercase tracking-wide">Equipping Our Partners.</h2>
                <p className="text-gray-400 text-base sm:text-lg mb-8 lg:mb-12 max-w-md leading-relaxed">
                  Access technical spec sheets, high-res ISO certificates, and offline product catalogs to streamline your procurement process.
                </p>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <button className="bg-modina-red text-white px-6 sm:px-8 py-3 sm:py-4 font-bold tracking-[0.15em] text-xs sm:text-sm uppercase hover:bg-red-700 transition-colors flex items-center gap-2 sm:gap-3">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    2026 Catalog
                  </button>
                  <Link to="/downloads" className="text-white font-bold tracking-[0.15em] text-xs sm:text-sm uppercase hover:text-modina-red transition-colors">
                    View Tech Specs
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 sm:gap-6"
              >
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-modina-panel border border-white/5 p-6 sm:p-8 flex flex-col items-center justify-center gap-3 sm:gap-4 hover:border-modina-red/30 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-modina-dark flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Download className="w-5 h-5 sm:w-6 sm:h-6 text-modina-slate group-hover:text-modina-red transition-colors" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-white uppercase text-center">Spec Sheet 0{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Global Trust (Testimonials) */}
      <section className="py-20 lg:py-32 bg-modina-dark">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 lg:mb-6 uppercase tracking-wide">Global <span className="text-modina-slate">Trust</span></h2>
            <p className="text-gray-400 text-base sm:text-lg">What our corporate partners say about us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { quote: "Modina's premium rims have significantly reduced our warranty claims. Their precision engineering is unmatched in the region.", author: "Director of Procurement", company: "Global Auto Corp" },
              { quote: "A reliable partner for over 10 years. Their commitment to quality and timely delivery keeps our assembly lines moving.", author: "Supply Chain Manager", company: "Metro Vehicles Ltd." },
              { quote: "The durability of their motorcycle components under extreme conditions is exactly what our customers demand.", author: "Chief Engineer", company: "Apex Motors" }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-modina-panel border border-white/5 p-8 lg:p-10 relative"
              >
                <Quote className="absolute top-6 right-6 lg:top-8 lg:right-8 w-8 h-8 lg:w-12 lg:h-12 text-white/5" />
                <div className="flex gap-1 mb-6 lg:mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 lg:w-5 lg:h-5 text-modina-red" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8 lg:mb-10 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="text-white font-display font-bold tracking-wider uppercase text-sm lg:text-base">{testimonial.author}</h4>
                  <p className="text-modina-slate text-[10px] lg:text-xs tracking-[0.15em] uppercase mt-1 lg:mt-2">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Pre-Footer Call to Action */}
      <section className="py-24 lg:py-40 bg-modina-panel relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 lg:mb-8 uppercase tracking-wide">
              Partner with <br />
              <span className="text-modina-slate">Modina Rim & Parts</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 mb-10 lg:mb-12 max-w-2xl mx-auto">Let's build the future of mobility together. Connect with our experts to discuss your manufacturing needs.</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 sm:gap-4 bg-modina-red text-white px-8 sm:px-12 py-4 sm:py-5 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(229,37,37,0.3)]"
            >
              Contact Sales Team
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
