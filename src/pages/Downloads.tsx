import React, { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Download, Search, ChevronRight, ArrowRight, Minus } from 'lucide-react';

const filesData = [
  { id: 1, name: 'Product Catalog 2026', category: 'Catalogs', description: 'Complete range of all 21 SKUs with specifications and ordering codes.', size: '4.2 MB', format: 'PDF', pages: '48 pages', updated: '2026' },
  { id: 2, name: 'Product Catalog 2025', category: 'Catalogs', description: 'Previous year full product range catalog with legacy part numbers.', size: '3.8 MB', format: 'PDF', pages: '44 pages', updated: '2025' },
  { id: 3, name: 'Motorcycle Parts Catalog', category: 'Catalogs', description: 'Dedicated catalog for all 7 motorcycle component SKUs.', size: '1.9 MB', format: 'PDF', pages: '18 pages', updated: '2026' },
  { id: 4, name: 'Rim & Wheel Catalog', category: 'Catalogs', description: 'Full range of rim products for Easy Bike, Rickshaw, CNG and Van.', size: '2.1 MB', format: 'PDF', pages: '22 pages', updated: '2026' },
  { id: 5, name: 'ISO 9001:2015 Certificate', category: 'Certificates', description: 'Official quality management system certification document.', size: '0.8 MB', format: 'PDF', pages: '2 pages', updated: '2025' },
  { id: 6, name: 'ISO 14001 Certificate', category: 'Certificates', description: 'Environmental management system certification.', size: '0.7 MB', format: 'PDF', pages: '2 pages', updated: '2024' },
  { id: 7, name: 'BSTI Certification', category: 'Certificates', description: 'Bangladesh Standards and Testing Institution approval document.', size: '1.1 MB', format: 'PDF', pages: '4 pages', updated: '2025' },
  { id: 8, name: 'Alloy Technical Spec Sheet', category: 'Technical', description: 'Detailed material composition, tensile strength, and hardness data.', size: '2.4 MB', format: 'PDF', pages: '12 pages', updated: '2026' },
  { id: 9, name: 'CNC Tolerance Standards', category: 'Technical', description: 'Machining tolerances and dimensional accuracy guidelines.', size: '1.3 MB', format: 'PDF', pages: '8 pages', updated: '2026' },
  { id: 10, name: 'CAD Model Package', category: 'Technical', description: '3D CAD models for all rim profiles in STEP and IGES formats.', size: '18.5 MB', format: 'ZIP', pages: '21 files', updated: '2025' },
  { id: 11, name: 'Quality Control Manual', category: 'Technical', description: 'Internal QC process documentation and inspection checklists.', size: '3.2 MB', format: 'PDF', pages: '36 pages', updated: '2026' },
  { id: 12, name: 'Warranty Terms & Conditions', category: 'Legal', description: 'Product warranty coverage, claim process, and exclusions.', size: '0.6 MB', format: 'PDF', pages: '6 pages', updated: '2025' },
  { id: 13, name: 'Export Compliance Document', category: 'Legal', description: 'International trade compliance and export regulation summary.', size: '0.9 MB', format: 'PDF', pages: '8 pages', updated: '2025' },
  { id: 14, name: 'Distributor Agreement Template', category: 'Legal', description: 'Standard partnership and distribution agreement framework.', size: '1.2 MB', format: 'PDF', pages: '14 pages', updated: '2026' }
];

const categories = ['All', 'Catalogs', 'Certificates', 'Technical', 'Legal'];

export default function Downloads() {
  const letters = "DOWNLOADS".split("");
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredRef = useRef(null);
  const featuredInView = useInView(featuredRef, { once: true, margin: '-60px' });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  const filteredFiles = useMemo(() => {
    return filesData.filter(file => {
      const matchesCat = activeCategory === 'All' || file.category === activeCategory;
      const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            file.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            file.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleViewAllCatalogs = () => {
    setActiveCategory('Catalogs');
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-[80px]">
      {/* SECTION 1 — HERO */}
      <section className="w-full py-20 lg:py-28 flex flex-col items-center text-center">
        <div className="font-mono text-[10px] tracking-[0.25em] text-[#2a2a2a] uppercase flex items-center gap-2 justify-center mb-10">
          <Link to="/">Home</Link>
          <ChevronRight className="w-2.5 h-2.5 text-[#1e1e1e]" />
          <span className="text-[#E52525]">Downloads</span>
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
          <span>Resource Center</span>
          <span className="text-[#E52525]">·</span>
          <span>Est. 2010</span>
        </p>

        <hr className="w-full max-w-md border-[#1a1a1a] mx-auto mt-10 mb-10" />

        <div className="flex items-center justify-center gap-0">
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">24</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Documents</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">Free</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Downloads</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">PDF</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Format</span>
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

      {/* SECTION 2 — FILTER BAR */}
      <div className="sticky top-[80px] z-30 bg-[#050505] border-t border-[#141414] border-b">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 h-14 flex items-center justify-between overflow-x-auto no-scrollbar">
          <div className="flex items-center h-full">
            {categories.map((cat, idx) => (
              <React.Fragment key={cat}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-6 h-14 font-mono text-[10px] tracking-[0.2em] uppercase whitespace-nowrap transition-colors ${
                    activeCategory === cat ? 'text-white' : 'text-[#2e2e2e] hover:text-[#666]'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.div layoutId="activeDownloadCat" className="absolute bottom-0 left-0 w-full h-[1px] bg-white" />
                  )}
                </button>
                {idx < categories.length - 1 && (
                  <span className="w-[0.5px] h-5 bg-[#1a1a1a] shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center gap-6 ml-8 shrink-0">
            <div className="relative flex items-center">
              <Search className="w-3.5 h-3.5 text-[#333] absolute left-0" />
              <input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-b border-[#1e1e1e] focus:border-[#333] outline-none font-mono text-[11px] text-white placeholder:text-[#222] w-32 focus:w-48 transition-all pl-6 pb-1"
              />
            </div>
            <p className="hidden sm:block font-mono text-[10px] text-[#252525] whitespace-nowrap">
              — {filteredFiles.length} RESULTS
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3 — FILE GRID */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 py-16 lg:py-24 min-h-[400px]">
        {filteredFiles.length > 0 ? (
          <div className="bg-[#141414] grid grid-cols-1 md:grid-cols-2 gap-[1px]">
            <AnimatePresence mode="popLayout">
              {filteredFiles.map((file) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  key={file.id}
                  className="bg-[#080808] group cursor-pointer flex items-start gap-6 p-7 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-[1px] h-0 group-hover:h-full bg-[#E52525] transition-all duration-500 ease-out" />
                  
                  <div className="w-14 h-14 bg-[#050505] border border-[#141414] flex items-center justify-center shrink-0 group-hover:border-[#E52525] transition-colors duration-500">
                    <Download className="w-5 h-5 text-[#1e1e1e] group-hover:text-[#E52525] transition-colors duration-500" />
                  </div>

                  <div className="flex flex-col gap-2 flex-grow">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[13px] font-light text-[#555] group-hover:text-white transition-colors duration-500">
                        {file.name}
                      </p>
                      <span className="font-mono text-[8px] tracking-[0.2em] text-[#1e1e1e] border border-[#141414] px-2 py-0.5 uppercase group-hover:border-[#E52525] group-hover:text-[#E52525] transition-colors duration-500 shrink-0">
                        {file.format}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#252525] font-light leading-relaxed line-clamp-2">
                      {file.description}
                    </p>
                    <p className="font-mono text-[9px] tracking-[0.15em] text-[#1a1a1a] uppercase mt-1">
                      {file.size} · {file.pages} · Updated {file.updated}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
            className="flex flex-col items-center justify-center py-32 text-center"
          >
            <Minus className="w-8 h-8 text-[#1a1a1a] mb-6" />
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#333] uppercase mb-6">
              No results found
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="border border-[#1a1a1a] text-[#2a2a2a] font-mono text-[9px] tracking-[0.2em] uppercase px-6 py-3 hover:border-[#333] hover:text-[#555] transition-colors rounded-none"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </section>

      {/* SECTION 4 — FEATURED DOWNLOAD BANNER */}
      <section className="w-full border-t border-[#141414] bg-[#080808] py-20 lg:py-24" ref={featuredRef}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#141414]">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={featuredInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#050505] p-10 lg:p-16 flex flex-col justify-center"
            >
              <p className="text-[120px] font-light text-[#0f0f0f] leading-none select-none">
                2026
              </p>
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#E52525] uppercase mt-2">
                — Latest Release
              </p>
              <p className="font-mono text-[9px] tracking-[0.25em] text-[#252525] uppercase mt-1">
                Annual Catalog
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={featuredInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#050505] p-10 lg:p-16 flex flex-col justify-center"
            >
              <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-8">
                — Featured Document
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight mb-8">
                Product Catalog 2026
              </h2>
              <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed mb-8 max-w-lg">
                Our most comprehensive catalog to date. Covering all 21 SKUs across 4 categories with full technical specifications, material data, and ordering codes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#E52525] text-white font-mono text-[10px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-[#cc1f1f] transition-colors flex items-center justify-center gap-4 rounded-none">
                  Download Now
                  <Download className="w-3 h-3" />
                </button>
                <button 
                  onClick={handleViewAllCatalogs}
                  className="border border-[#1a1a1a] text-[#2a2a2a] font-mono text-[10px] tracking-[0.3em] uppercase px-8 py-4 hover:border-[#333] hover:text-[#555] transition-colors flex items-center justify-center gap-4 rounded-none"
                >
                  View All Catalogs
                </button>
              </div>
            </motion.div>
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
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Need More Info?</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-[0.05em] uppercase leading-tight">
              Can't Find<br />What You Need?
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 24 }}
            animate={ctaInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="bg-[#E52525] text-white font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:bg-[#cc1f1f] transition-colors flex items-center gap-4 rounded-none">
              Contact Sales
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
