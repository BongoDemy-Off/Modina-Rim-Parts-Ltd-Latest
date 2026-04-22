import React, { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Search, Minus } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readTime: string;
  img: string;
}

const articlesData: Article[] = [
  { id: 1, title: 'ISO 9001:2015 Certification Successfully Renewed for 2025–2026', category: 'Company News', date: 'March 2026', excerpt: 'Modina Rim & Parts Ltd. has completed its annual ISO 9001:2015 surveillance audit with zero non-conformances, reaffirming our commitment to world-class quality management.', readTime: '3 min read', img: 'https://picsum.photos/seed/news-01/600/400' },
  { id: 2, title: 'New CNG Rim Variant Released for Commercial Fleet Operators', category: 'Product Updates', date: 'February 2026', excerpt: 'Following market demand from commercial operators, Modina has introduced a reinforced CNG rim variant engineered for higher load ratings and extended service life.', readTime: '4 min read', img: 'https://picsum.photos/seed/news-02/600/400' },
  { id: 3, title: 'Modina Participates in Dhaka International Trade Expo 2026', category: 'Events', date: 'January 2026', excerpt: 'Our team showcased the full 2026 product range at the Dhaka International Trade Expo, connecting with over 200 distributors and manufacturers from across South Asia.', readTime: '5 min read', img: 'https://picsum.photos/seed/news-03/600/400' },
  { id: 4, title: 'Bangladesh Automotive Parts Sector Grows 18% in FY2025', category: 'Industry', date: 'December 2025', excerpt: 'The Bangladesh automotive components manufacturing sector recorded strong growth in fiscal year 2025, driven by rising domestic demand and increased export volumes to neighboring markets.', readTime: '6 min read', img: 'https://picsum.photos/seed/news-04/600/400' },
  { id: 5, title: 'Modina Expands Distribution Network to Chittagong and Sylhet', category: 'Company News', date: 'November 2025', excerpt: 'To better serve our regional clients, Modina has established two new distribution centers in Chittagong and Sylhet, reducing delivery times by up to 40% for customers in those regions.', readTime: '3 min read', img: 'https://picsum.photos/seed/news-05/600/400' },
  { id: 6, title: 'New Motorcycle Handlebar Range Passes Stress Testing at 200% Load', category: 'Product Updates', date: 'October 2025', excerpt: 'Our latest motorcycle handlebar range has completed rigorous stress testing at 200% of rated load capacity, setting a new benchmark for durability in the Bangladeshi market.', readTime: '4 min read', img: 'https://picsum.photos/seed/news-06/600/400' },
  { id: 7, title: 'South Asian Auto Parts Summit — Modina Keynote Speaker', category: 'Events', date: 'September 2025', excerpt: 'Modina Managing Director Mohammed Rafiqul Islam delivered the keynote address at the South Asian Auto Parts Summit in Colombo, speaking on precision manufacturing and regional supply chains.', readTime: '5 min read', img: 'https://picsum.photos/seed/news-07/600/400' },
  { id: 8, title: 'Rising Steel Costs and the Case for Domestic Manufacturing', category: 'Industry', date: 'August 2025', excerpt: 'As global steel prices continue to fluctuate, Bangladeshi manufacturers who have invested in domestic supply chains are proving more resilient than those dependent on imports.', readTime: '7 min read', img: 'https://picsum.photos/seed/news-08/600/400' }
];

const categories = ['All', 'Company News', 'Product Updates', 'Industry', 'Events'];

export default function News() {
  const letters = "NEWS & EVENTS".split("");
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredRef = useRef(null);
  const featuredInView = useInView(featuredRef, { once: true, margin: '-80px' });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  const filteredArticles = useMemo(() => {
    return articlesData.filter(article => {
      const matchesCat = activeCategory === 'All' || article.category === activeCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            article.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-[80px]">
      {/* SECTION 1 — HERO */}
      <section className="w-full py-20 lg:py-28 flex flex-col items-center text-center">
        <div className="font-mono text-[10px] tracking-[0.25em] text-[#2a2a2a] uppercase flex items-center gap-2 justify-center mb-10">
          <Link to="/">Home</Link>
          <ChevronRight className="w-2.5 h-2.5 text-[#1e1e1e]" />
          <span className="text-[#E52525]">News</span>
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
          <span>Latest Updates</span>
          <span className="text-[#E52525]">·</span>
          <span>Est. 2010</span>
        </p>

        <hr className="w-full max-w-md border-[#1a1a1a] mx-auto mt-10 mb-10" />

        <div className="flex items-center justify-center gap-0">
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">2026</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Latest Year</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">12+</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Articles</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">4</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Categories</span>
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

      {/* SECTION 2 — FEATURED ARTICLE (HERO CARD) */}
      <section className="w-full border-t border-[#141414]" ref={featuredRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#141414]">
          <div className="relative h-[320px] lg:h-[520px] bg-[#0d0d0d] overflow-hidden">
            <motion.img
              initial={{ scale: 1.08 }}
              animate={featuredInView ? { scale: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              src="https://picsum.photos/seed/news-featured/900/700"
              className="w-full h-full object-cover grayscale opacity-50"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,#080808_0%,transparent_40%)]" />
            <div className="absolute top-6 left-6">
              <span className="font-mono text-[8px] tracking-[0.25em] text-[#E52525] uppercase border border-[#E52525] px-3 py-1 bg-[#050505]/80 backdrop-blur-sm">
                Featured
              </span>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={featuredInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#080808] p-10 lg:p-16 flex flex-col justify-center"
          >
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Latest News</p>
            <p className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase mb-4">April 2026</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white uppercase tracking-tight leading-tight mb-6">
              Modina Launches 2026 Product Catalog With 21 New SKUs
            </h2>
            <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed mb-8 max-w-lg">
              Modina Rim & Parts Ltd. has officially released its most comprehensive product catalog to date, featuring 21 SKUs across 4 major categories. The new range includes expanded motorcycle components, premium rim variants, and updated hardware specifications for 2026.
            </p>
            <Link to="#" className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] text-[#333] uppercase hover:text-white transition-colors duration-300">
              Read Article
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — FILTER BAR */}
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
                    <motion.div layoutId="activeNewsCat" className="absolute bottom-0 left-0 w-full h-[1px] bg-white" />
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
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-b border-[#1e1e1e] focus:border-[#333] outline-none font-mono text-[11px] text-white placeholder:text-[#222] w-32 focus:w-48 transition-all pl-6 pb-1"
              />
            </div>
            <p className="hidden sm:block font-mono text-[10px] text-[#252525] whitespace-nowrap">
              — {filteredArticles.length} RESULTS
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4 — ARTICLES GRID */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 py-16 lg:py-24 min-h-[400px]">
        {filteredArticles.length > 0 ? (
          <div className="bg-[#141414] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  key={article.id}
                  className="bg-[#080808] group cursor-default flex flex-col overflow-hidden relative"
                >
                  <div className="relative h-[200px] bg-[#0d0d0d] overflow-hidden shrink-0">
                    <img 
                      src={article.img} 
                      alt={article.title}
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-[1200ms] scale-100 group-hover:scale-[1.04]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-[8px] tracking-[0.2em] text-[#E52525] uppercase border border-[#E52525]/30 bg-[#050505]/80 px-2 py-1 backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-3 border-t border-[#141414] flex-grow">
                    <p className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase">
                      {article.date}
                    </p>
                    <h3 className="text-[13px] font-light text-[#555] leading-snug group-hover:text-white transition-colors duration-500 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-[11px] text-[#252525] font-light leading-relaxed line-clamp-3 mt-1">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-[#0f0f0f] flex items-center justify-between">
                      <span className="font-mono text-[9px] text-[#1e1e1e] uppercase">
                        {article.readTime}
                      </span>
                      <ArrowRight className="w-3 h-3 text-[#1e1e1e] opacity-0 group-hover:opacity-100 group-hover:text-[#444] transition-all duration-300" />
                    </div>
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
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Stay Updated</p>
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
