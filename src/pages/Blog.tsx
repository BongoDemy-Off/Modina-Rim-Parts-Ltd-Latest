import React, { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Search, Minus } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readTime: string;
  img: string;
  tags: string[];
}

const postsData: Post[] = [
  { id: 1, title: 'The Science Behind ISO 9001 and What It Means for Buyers', category: 'Quality', date: 'March 2026', excerpt: 'ISO 9001 is more than a certificate on a wall. We break down what each clause means in practice and why it should be your first filter when choosing an auto parts supplier.', readTime: '6 min read', img: 'https://picsum.photos/seed/blog-01/600/400', tags: ['Quality', 'Standards'] },
  { id: 2, title: 'CNC Machining vs. Traditional Stamping: Which Produces Better Rims?', category: 'Engineering', date: 'February 2026', excerpt: 'A technical comparison of CNC machining and traditional die stamping for rim production, covering dimensional accuracy, surface finish, material waste, and cost per unit.', readTime: '8 min read', img: 'https://picsum.photos/seed/blog-02/600/400', tags: ['Engineering', 'Manufacturing'] },
  { id: 3, title: 'How Bangladesh Became a Serious Auto Parts Exporter', category: 'Industry', date: 'January 2026', excerpt: 'From a purely import-dependent economy to a growing exporter of precision components — the story of Bangladesh automotive manufacturing over the past 15 years.', readTime: '7 min read', img: 'https://picsum.photos/seed/blog-03/600/400', tags: ['Industry', 'Bangladesh'] },
  { id: 4, title: 'Heat Treatment Explained: Why We Fire Our Steel Twice', category: 'Manufacturing', date: 'December 2025', excerpt: 'Our two-stage heat treatment process increases tensile strength by up to 30% compared to single-stage methods. Here is the metallurgy behind the decision.', readTime: '5 min read', img: 'https://picsum.photos/seed/blog-04/600/400', tags: ['Manufacturing', 'Materials'] },
  { id: 5, title: '5 Questions to Ask Before Sourcing Rims from Any Manufacturer', category: 'Quality', date: 'November 2025', excerpt: 'Whether you are a distributor or fleet operator, these five technical questions will help you separate quality manufacturers from those cutting corners on specifications.', readTime: '4 min read', img: 'https://picsum.photos/seed/blog-05/600/400', tags: ['Quality', 'Procurement'] },
  { id: 6, title: 'Inside Modina: A Day on the Production Floor', category: 'Company', date: 'October 2025', excerpt: 'From raw coil steel arriving at 6 AM to finished rims passing final QC at 4 PM — a walkthrough of one complete production cycle at our Dhaka facility.', readTime: '9 min read', img: 'https://picsum.photos/seed/blog-06/600/400', tags: ['Company', 'Manufacturing'] },
  { id: 7, title: 'Electroplating vs. Powder Coating: Surface Finish Compared', category: 'Engineering', date: 'September 2025', excerpt: 'Both electroplating and powder coating offer corrosion protection — but they perform very differently under real-world conditions. We compare them across 6 key dimensions.', readTime: '6 min read', img: 'https://picsum.photos/seed/blog-07/600/400', tags: ['Engineering', 'Finishing'] },
  { id: 8, title: 'Why Rickshaw Rims Demand More Engineering Than You Think', category: 'Manufacturing', date: 'August 2025', excerpt: 'Rickshaw rims carry enormous dynamic loads on unpaved roads at low speeds — a combination that exposes design weaknesses invisible in standard lab testing. Here is how we solve it.', readTime: '7 min read', img: 'https://picsum.photos/seed/blog-08/600/400', tags: ['Manufacturing', 'Engineering'] },
  { id: 9, title: 'The True Cost of a Low-Quality Bearing in a Commercial Vehicle', category: 'Industry', date: 'July 2025', excerpt: 'A single substandard bearing in a CNG auto-rickshaw can cause cascading failures costing 20x the original part price. The economics of quality procurement explained.', readTime: '5 min read', img: 'https://picsum.photos/seed/blog-09/600/400', tags: ['Industry', 'Quality'] }
];

const categories = ['All', 'Engineering', 'Quality', 'Industry', 'Company', 'Manufacturing'];

export default function Blog() {
  const letters = "OUR BLOG".split("");
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredRef = useRef(null);
  const featuredInView = useInView(featuredRef, { once: true, margin: '-80px' });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  const filteredPosts = useMemo(() => {
    return postsData.filter(post => {
      const matchesCat = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.category.toLowerCase().includes(searchQuery.toLowerCase());
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
          <span className="text-[#E52525]">Blog</span>
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
          <span>Insights & Engineering</span>
          <span className="text-[#E52525]">·</span>
          <span>Est. 2010</span>
        </p>

        <hr className="w-full max-w-md border-[#1a1a1a] mx-auto mt-10 mb-10" />

        <div className="flex items-center justify-center gap-0">
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">10+</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Articles</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">5</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Topics</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">2026</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Latest Post</span>
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

      {/* SECTION 2 — FEATURED POST (LARGE EDITORIAL CARD) */}
      <section className="w-full border-t border-[#141414]" ref={featuredRef}>
        <div className="w-full bg-[#141414] gap-[1px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[1px] bg-[#141414]">
            <div className="relative h-[300px] lg:h-[560px] bg-[#0d0d0d] overflow-hidden">
              <motion.img
                initial={{ scale: 1.08 }}
                animate={featuredInView ? { scale: 1 } : {}}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src="https://picsum.photos/seed/blog-featured/900/700"
                className="w-full h-full object-cover grayscale opacity-50"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,#080808_0%,transparent_40%)]" />
              <div className="absolute top-6 left-6">
                <span className="font-mono text-[8px] tracking-[0.25em] text-[#E52525] uppercase border border-[#E52525] px-3 py-1 bg-[#050505]/80 backdrop-blur-sm">
                  Editor's Pick
                </span>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={featuredInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#080808] p-10 lg:p-16 flex flex-col justify-center"
            >
              <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Featured Post</p>
              <p className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase mb-4">April 2026</p>
              <h2 className="text-2xl md:text-3xl font-light text-white uppercase tracking-tight leading-tight mb-6">
                Why Precision Tolerance Is the Most Underrated Factor in Auto Parts Manufacturing
              </h2>
              <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed mb-6 max-w-lg">
                Across the automotive supply chain, tolerance specifications are often treated as an afterthought. At Modina, we argue that ±0.01mm is not a number on a datasheet — it is the difference between a part that lasts and a part that fails. This article breaks down why precision matters at every stage of manufacturing.
              </p>
              <div className="flex gap-2 mb-8">
                <span className="font-mono text-[8px] tracking-[0.15em] text-[#252525] uppercase border border-[#141414] px-3 py-1">
                  Engineering
                </span>
                <span className="font-mono text-[8px] tracking-[0.15em] text-[#252525] uppercase border border-[#141414] px-3 py-1">
                  Quality
                </span>
              </div>
              <Link to="#" className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] text-[#333] uppercase hover:text-white transition-colors duration-300">
                Read Article
                <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          </div>
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
                    <motion.div layoutId="activeBlogCat" className="absolute bottom-0 left-0 w-full h-[1px] bg-white" />
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
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-b border-[#1e1e1e] focus:border-[#333] outline-none font-mono text-[11px] text-white placeholder:text-[#222] w-32 focus:w-48 transition-all pl-6 pb-1"
              />
            </div>
            <p className="hidden sm:block font-mono text-[10px] text-[#252525] whitespace-nowrap">
              — {filteredPosts.length} RESULTS
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4 — POSTS GRID */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 py-16 lg:py-24 min-h-[400px]">
        {filteredPosts.length > 0 ? (
          <div className="bg-[#141414] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  key={post.id}
                  className="bg-[#080808] group cursor-default flex flex-col overflow-hidden relative"
                >
                  <div className="relative h-[200px] bg-[#0d0d0d] overflow-hidden shrink-0">
                    <img 
                      src={post.img} 
                      alt={post.title}
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-[1200ms] scale-100 group-hover:scale-[1.04]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-[8px] tracking-[0.2em] text-[#E52525] uppercase border border-[#E52525]/30 bg-[#050505]/80 px-2 py-1 backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-3 border-t border-[#141414] flex-grow">
                    <p className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase">
                      {post.date}
                    </p>
                    <h3 className="text-[13px] font-light text-[#555] leading-snug group-hover:text-white transition-colors duration-500 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-[#252525] font-light leading-relaxed line-clamp-3 mt-1">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="font-mono text-[7px] tracking-[0.15em] text-[#1e1e1e] border border-[#141414] px-2 py-0.5 uppercase group-hover:border-[#252525] group-hover:text-[#333] transition-colors duration-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto pt-4 border-t border-[#0f0f0f] flex items-center justify-between">
                      <span className="font-mono text-[9px] text-[#1e1e1e] uppercase">
                        {post.readTime}
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
              No posts found
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
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Explore Further</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-[0.05em] uppercase leading-tight">
              See What<br />We Make
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
