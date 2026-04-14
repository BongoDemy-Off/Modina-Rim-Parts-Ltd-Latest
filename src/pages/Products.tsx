import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, ArrowRight, X, Send, Download, 
  ChevronRight, ChevronLeft, LayoutGrid, Minus
} from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  material: string;
  certification: string;
  availability: string;
}

const productsData: Product[] = [
  { id: 1, name: 'Box Frame Bearing & Racer (Black Blue & Red)', category: 'Hardware', description: 'Premium quality box frame bearing and racer, available in black, blue, and red finishes for maximum durability.', material: 'High-Carbon Steel', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 2, name: 'Motor Cycle Center Stand', category: 'Motorcycle', description: 'Heavy-duty center stand engineered for perfect balance and stability.', material: 'Reinforced Steel Alloy', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 3, name: 'Motor Cycle Double Stand', category: 'Motorcycle', description: 'Reinforced double stand providing superior support and longevity.', material: 'Reinforced Steel Alloy', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 4, name: 'Motor Cycle Foot Rest Rod', category: 'Motorcycle', description: 'Ergonomic and highly durable foot rest rod for enhanced rider comfort.', material: 'Forged Steel', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 5, name: 'Motor Cycle Handlebar', category: 'Motorcycle', description: 'Precision-bent motorcycle handlebar offering optimal control and vibration reduction.', material: 'Chromoly Steel', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 6, name: 'Motor Cycle Leg Guard', category: 'Motorcycle', description: 'Robust leg guard designed to protect the rider and vehicle during impacts.', material: 'Heavy-Duty Steel Tubing', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 7, name: 'Motor Cycle Sharee Guard Ladies (Black & Nickel)', category: 'Motorcycle', description: 'Elegant and protective sharee guard, available in premium black and nickel finishes.', material: 'Steel with Nickel Plating', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 8, name: 'Easy Bike RIM (Black & White)', category: 'Rims', description: 'High-strength Easy Bike rims designed for heavy loads, available in black and white.', material: 'Premium Grade Alloy', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 9, name: 'Rikshaw Avon Rim', category: 'Rims', description: 'Classic Avon style rim for rickshaws, built for everyday endurance.', material: 'Premium Grade Alloy', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 10, name: 'Cycle Rim (Bichue & Hero)', category: 'Rims', description: 'Standard cycle rims compatible with Bichue and Hero models.', material: 'Aluminum Alloy', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 11, name: 'Cycle Rim (26"X1.5")', category: 'Rims', description: 'Precision-crafted 26"x1.5" cycle rim for smooth and efficient riding.', material: 'Aluminum Alloy', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 12, name: 'CNG Rim', category: 'Rims', description: 'Heavy-duty CNG vehicle rims engineered for commercial reliability.', material: 'Premium Grade Alloy', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 13, name: 'Rikshaw Rim Gazi', category: 'Rims', description: 'Gazi specification rickshaw rim, known for exceptional load-bearing capacity.', material: 'Premium Grade Alloy', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 14, name: 'Mishuk Rim Black & White', category: 'Rims', description: 'Durable Mishuk rims available in classic black and white.', material: 'Premium Grade Alloy', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 15, name: 'VAN Rickshaw Jumobo Rim', category: 'Rims', description: 'Jumbo-sized rims for VAN rickshaws, maximizing cargo stability.', material: 'Premium Grade Alloy', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 16, name: 'VAN Rickshaw Gold Rim', category: 'Rims', description: 'Premium gold-finished rims for VAN rickshaws, combining aesthetics with strength.', material: 'Premium Grade Alloy', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 17, name: 'Rickshaw Japan Rim', category: 'Rims', description: 'Japan-spec rickshaw rims manufactured to exacting international standards.', material: 'Premium Grade Alloy', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 18, name: 'Nosimon Rim', category: 'Rims', description: 'Rugged rims specifically designed for Nosimon utility vehicles.', material: 'Premium Grade Alloy', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 19, name: 'Patti Rim', category: 'Rims', description: 'Traditional Patti style rims built for extreme local conditions.', material: 'Premium Grade Alloy', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 20, name: 'Van Spoke (Black & White)', category: 'Hardware', description: 'High-tensile van spokes available in black and white for custom builds.', material: 'High-Tensile Steel', certification: 'ISO 9001:2015', availability: 'In Stock' },
  { id: 21, name: 'Wasar', category: 'Hardware', description: 'Precision-stamped washers for secure and vibration-resistant fastening.', material: 'Galvanized Steel', certification: 'ISO 9001:2015', availability: 'In Stock' },
];

const categories = ['All', 'Motorcycle', 'Rims', 'Hardware'];

export default function Products() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      const matched = categories.find(c => c.toLowerCase() === categoryParam.toLowerCase());
      if (matched) setActiveCategory(matched);
    }
  }, [location]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsDrawerOpen(false); };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isDrawerOpen]);

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            `SKU-${product.id.toString().padStart(3, '0')}`.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-[80px]">
      
      {/* SECTION 1 — HERO */}
      <section className="w-full py-20 lg:py-28 bg-[#050505]">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto px-6"
        >
          {/* [1] Breadcrumb */}
          <div className="flex items-center gap-2 justify-center text-[10px] font-mono tracking-[0.25em] text-[#2a2a2a] uppercase mb-10">
            <Link to="/">Home</Link>
            <ChevronRight className="w-2.5 h-2.5 text-[#1e1e1e]" />
            <span className="text-[#3a3a3a]">Products</span>
            <ChevronRight className="w-2.5 h-2.5 text-[#1e1e1e]" />
            <span className="text-[#555]">Catalog 2026</span>
          </div>

          {/* [2] Horizontal rule */}
          <hr className="w-32 border-[#1a1a1a] mx-auto mb-10" />

          {/* [3] Main Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-light tracking-[0.25em] md:tracking-[0.35em] text-white uppercase leading-none mb-0">
            Products
          </h1>

          {/* [4] Subtitle */}
          <p className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] text-[#2a2a2a] uppercase mt-6 mb-0">
            Modina Rim & Parts Ltd. — Est. 2010 — ISO 9001:2015
          </p>

          {/* [5] Horizontal rule */}
          <hr className="w-full max-w-md border-[#1a1a1a] mx-auto mt-10 mb-10" />

          {/* [6] Stats Row */}
          <div className="flex items-center justify-center gap-0">
            <div className="flex flex-col items-center px-8 md:px-12 lg:px-16">
              <span className="text-2xl md:text-3xl font-light text-white tracking-tight">21</span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#2a2a2a] uppercase mt-1">Products</span>
            </div>
            <div className="w-[0.5px] h-8 bg-[#1a1a1a]" />
            <div className="flex flex-col items-center px-8 md:px-12 lg:px-16">
              <span className="text-2xl md:text-3xl font-light text-white tracking-tight">4</span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#2a2a2a] uppercase mt-1">Categories</span>
            </div>
            <div className="w-[0.5px] h-8 bg-[#1a1a1a]" />
            <div className="flex flex-col items-center px-8 md:px-12 lg:px-16">
              <span className="text-2xl md:text-3xl font-light text-white tracking-tight">ISO</span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#2a2a2a] uppercase mt-1">Certified</span>
            </div>
          </div>

          {/* [7] Scroll indicator */}
          <div className="flex flex-col items-center gap-3 mt-14">
            <div className="w-[0.5px] h-10 bg-[#1a1a1a]" />
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase">Scroll</span>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — FILTER BAR */}
      <section className="sticky top-[80px] z-30 w-full bg-[#050505] border-t border-[#141414] border-b">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-14">
          
          {/* LEFT — Category filters */}
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-none">
            {categories.map((cat, idx) => {
              const count = cat === 'All' ? productsData.length : productsData.filter(p => p.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <React.Fragment key={cat}>
                  <button 
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    aria-label={`Filter by ${cat}`}
                    aria-pressed={isActive}
                    className={`px-6 h-14 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-200 relative whitespace-nowrap ${isActive ? 'text-white' : 'text-[#2e2e2e] hover:text-[#666]'}`}
                  >
                    {cat} ({count})
                    {isActive && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white" />}
                  </button>
                  {idx < categories.length - 1 && <span className="w-[0.5px] h-5 bg-[#1a1a1a] shrink-0" />}
                </React.Fragment>
              );
            })}
          </div>

          {/* RIGHT — Search + count */}
          <div className="flex items-center gap-6 shrink-0">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#252525] uppercase hidden sm:block">
              — {filteredProducts.length} RESULTS
            </span>
            <div className="relative">
              <input 
                type="text"
                placeholder="SEARCH_"
                aria-label="Search products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-b border-[#1e1e1e] focus:border-[#333] outline-none font-mono text-[11px] tracking-[0.1em] text-white placeholder:text-[#222] placeholder:tracking-[0.15em] pb-1.5 w-32 focus:w-48 transition-all duration-300"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 — PRODUCT GRID */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 py-16 lg:py-24">
        <div className="bg-[#141414] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px]">
          <AnimatePresence mode="popLayout">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => {
                const isSelected = selectedProduct?.id === product.id && isDrawerOpen;
                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ scale: 1.02, zIndex: 10 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => { setSelectedProduct(product); setIsDrawerOpen(true); }}
                    className={`group relative bg-[#080808] cursor-pointer flex flex-col overflow-hidden min-h-[360px] ${isSelected ? 'outline outline-1 outline-[#E52525] outline-offset-0 z-10' : ''}`}
                  >
                    {/* [1] IMAGE AREA */}
                    <div className="relative flex-1 min-h-[220px] overflow-hidden bg-[#0a0a0a]">
                      <img 
                        src={`https://picsum.photos/seed/modina-${product.id}-v2/600/400`}
                        alt={product.name}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1200ms] ease-out opacity-50 group-hover:opacity-80 scale-100 group-hover:scale-[1.04]"
                      />
                      <span className="absolute top-5 right-5 font-mono text-[11px] tracking-[0.2em] text-[#1e1e1e] group-hover:text-[#2e2e2e] transition-colors">
                        —{product.id.toString().padStart(2, '0')}
                      </span>
                      <span className="absolute bottom-0 left-0 font-mono text-[8px] tracking-[0.25em] uppercase text-[#252525] group-hover:text-[#3a3a3a] transition-colors pb-3 pl-5">
                        {product.category}
                      </span>
                    </div>

                    {/* [2] CARD FOOTER */}
                    <div className="p-5 border-t border-[#141414] flex flex-col gap-3">
                      <h3 className="text-[13px] font-light text-[#666] leading-snug group-hover:text-white transition-colors duration-500 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="font-mono text-[9px] tracking-[0.2em] text-[#1e1e1e]">
                          SKU–{product.id.toString().padStart(3, '0')}
                        </span>
                        <ArrowRight className={`w-3 h-3 transition-all duration-300 ${isSelected ? 'text-[#E52525] opacity-100' : 'text-[#1e1e1e] opacity-0 group-hover:opacity-100 group-hover:text-[#444]'}`} />
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-32 bg-[#080808]">
                <Minus className="w-8 h-8 text-[#1e1e1e] mb-6" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#252525] uppercase">No results found</span>
                <button 
                  type="button"
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="mt-6 font-mono text-[10px] tracking-[0.2em] text-[#333] uppercase hover:text-white transition-colors"
                >
                  — Clear Filter
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-between border-t border-[#141414] pt-8">
            <button
              type="button"
              onClick={() => {
                setCurrentPage(p => Math.max(1, p - 1));
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#666] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-3"
            >
              <ChevronLeft className="w-3 h-3" /> Prev
            </button>
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#444] uppercase">
              Page {currentPage.toString().padStart(2, '0')} / {totalPages.toString().padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={() => {
                setCurrentPage(p => Math.min(totalPages, p + 1));
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              disabled={currentPage === totalPages}
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#666] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-3"
            >
              Next <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </section>

      {/* SECTION 4 — PRODUCT DETAIL DRAWER */}
      <AnimatePresence>
        {isDrawerOpen && selectedProduct && (
          <>
            {/* OVERLAY */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-[#050505]/80 z-40"
            />
            
            {/* DRAWER PANEL */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 h-full w-full max-w-[480px] md:max-w-[520px] bg-[#080808] z-50 flex flex-col overflow-hidden border-l-[0.5px] border-[#E52525]"
            >
              {/* DRAWER HEADER */}
              <div className="sticky top-0 bg-[#080808] z-10 flex items-center justify-between px-8 py-5 border-b border-[#141414]">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase">
                    {selectedProduct.category}
                  </span>
                  <span className="w-[0.5px] h-3 bg-[#2a2a2a]" />
                  <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase">
                    SKU–{selectedProduct.id.toString().padStart(3, '0')}
                  </span>
                </div>
                <button 
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="font-mono text-[9px] tracking-[0.25em] text-[#333] uppercase hover:text-white transition-colors flex items-center gap-2"
                >
                  Close <X className="w-3 h-3" />
                </button>
              </div>

              {/* DRAWER BODY */}
              <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden">
                {/* [1] PRODUCT IMAGE */}
                <div className="w-full aspect-[4/3] bg-[#050505]">
                  <img 
                    src={`https://picsum.photos/seed/modina-${selectedProduct.id}-drawer/800/600`}
                    alt={selectedProduct.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-0 opacity-70"
                  />
                </div>

                {/* [2] CONTENT BLOCK */}
                <div className="px-8 py-8 flex flex-col gap-0">
                  <h2 className="text-2xl md:text-3xl font-light text-white leading-tight tracking-tight mb-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="font-mono text-[10px] tracking-[0.1em] text-[#333] leading-relaxed mb-8 mt-1">
                    {selectedProduct.description}
                  </p>

                  {/* SPEC TABLE */}
                  <div className="border-t border-[#141414]">
                    <table className="w-full mt-6">
                      <tbody>
                        <tr className="border-b border-[#0f0f0f]">
                          <td className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase py-4 w-1/3">Material</td>
                          <td className="font-mono text-[11px] tracking-[0.05em] text-[#666] py-4 text-right">{selectedProduct.material}</td>
                        </tr>
                        <tr className="border-b border-[#0f0f0f]">
                          <td className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase py-4 w-1/3">Certification</td>
                          <td className="font-mono text-[11px] tracking-[0.05em] text-[#666] py-4 text-right">{selectedProduct.certification}</td>
                        </tr>
                        <tr className="border-b border-[#0f0f0f]">
                          <td className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase py-4 w-1/3">Category</td>
                          <td className="font-mono text-[11px] tracking-[0.05em] text-[#666] py-4 text-right">{selectedProduct.category}</td>
                        </tr>
                        <tr className="border-b border-[#0f0f0f]">
                          <td className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase py-4 w-1/3">Availability</td>
                          <td className="font-mono text-[11px] tracking-[0.05em] text-[#666] py-4 text-right">In Stock</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* FEATURES */}
                  <div className="mt-8 border-t border-[#141414] pt-6">
                    <p className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mb-5">Key Specifications</p>
                    <div className="flex items-start gap-4 mb-4">
                      <span className="font-mono text-[8px] tracking-[0.2em] text-[#E52525] mt-0.5">—</span>
                      <span className="text-[11px] text-[#444] leading-relaxed font-light">CNC-machined to ±0.01mm tolerance for perfect OEM fitment</span>
                    </div>
                    <div className="flex items-start gap-4 mb-4">
                      <span className="font-mono text-[8px] tracking-[0.2em] text-[#E52525] mt-0.5">—</span>
                      <span className="text-[11px] text-[#444] leading-relaxed font-light">Heat-treated high-carbon steel or premium alloy construction</span>
                    </div>
                    <div className="flex items-start gap-4 mb-4">
                      <span className="font-mono text-[8px] tracking-[0.2em] text-[#E52525] mt-0.5">—</span>
                      <span className="text-[11px] text-[#444] leading-relaxed font-light">ISO 9001:2015 certified manufacturing process throughout</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* DRAWER FOOTER */}
              <div className="sticky bottom-0 bg-[#080808] px-8 py-6 border-t border-[#141414] flex flex-col gap-3">
                <button type="button" className="w-full bg-[#E52525] text-white font-mono text-[10px] tracking-[0.3em] uppercase py-4 hover:bg-[#cc1f1f] transition-colors flex items-center justify-center gap-4">
                  Request Inquiry
                  <ArrowRight className="w-3 h-3" />
                </button>
                <button type="button" className="w-full border border-[#1a1a1a] text-[#252525] font-mono text-[10px] tracking-[0.3em] uppercase py-3.5 hover:border-[#2e2e2e] hover:text-[#444] transition-colors flex items-center justify-center gap-4">
                  Download Spec Sheet
                  <Download className="w-3 h-3" />
                </button>
                <p className="font-mono text-[8px] tracking-[0.2em] text-[#1a1a1a] uppercase text-center mt-1">
                  Response within 24 business hours
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* SECTION 5 — BOTTOM CTA BANNER */}
      <section className="w-full border-t border-[#141414] py-24 lg:py-32 bg-[#050505]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mb-4">
              — Partner With Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-[0.1em] uppercase leading-tight">
              Ready to Place<br />an Order?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact"
              className="bg-[#E52525] text-white font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:bg-[#cc1f1f] transition-colors flex items-center gap-4"
            >
              Contact Sales
              <ArrowRight className="w-3 h-3" />
            </Link>
            <button type="button" className="border border-[#1a1a1a] text-[#2a2a2a] font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:border-[#333] hover:text-[#555] transition-colors flex items-center gap-4">
              Download Catalog
              <Download className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
