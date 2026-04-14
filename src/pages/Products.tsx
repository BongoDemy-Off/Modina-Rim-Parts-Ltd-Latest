import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ArrowRight, LayoutGrid, Bike, Disc, Wrench, CheckCircle2, ShieldCheck, Box } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const productsData = [
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

const categories = [
  { id: 'All', name: 'All Products', icon: LayoutGrid },
  { id: 'Motorcycle', name: 'Motorcycle Parts', icon: Bike },
  { id: 'Rims', name: 'Rims & Wheels', icon: Disc },
  { id: 'Hardware', name: 'Hardware & Accessories', icon: Wrench },
];

export default function Products() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<typeof productsData[0] | null>(productsData[0]);
  const previewRef = useRef<HTMLDivElement>(null);

  // Handle URL query parameters for category selection
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      const matchedCategory = categories.find(c => c.id.toLowerCase() === categoryParam.toLowerCase());
      if (matchedCategory) {
        setActiveCategory(matchedCategory.id);
      }
    }
  }, [location]);

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Ensure a product is always selected if the list isn't empty
  useEffect(() => {
    if (filteredProducts.length > 0) {
      if (!selectedProduct || !filteredProducts.find(p => p.id === selectedProduct.id)) {
        setSelectedProduct(filteredProducts[0]);
      }
    } else {
      setSelectedProduct(null);
    }
  }, [filteredProducts, selectedProduct]);

  const handleProductSelect = (product: typeof productsData[0]) => {
    setSelectedProduct(product);
    if (previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-20">
      
      {/* TOP SECTION: Selected Product Preview */}
      <div ref={previewRef} className="w-full bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
        {/* Subtle background glow based on red theme */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-modina-red/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 lg:py-24 relative z-10">
          <AnimatePresence mode="wait">
            {selectedProduct ? (
              <motion.div 
                key={selectedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
              >
                {/* Preview Image */}
                <div className="w-full lg:w-1/2 aspect-[4/3] relative rounded-2xl overflow-hidden bg-[#111] border border-white/10 shadow-2xl group">
                  <img 
                    src={`https://picsum.photos/seed/modina-${selectedProduct.id}-preview/1200/900?grayscale`}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 flex gap-2">
                    <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full">
                      {selectedProduct.category}
                    </span>
                    <span className="bg-modina-red/90 backdrop-blur-md border border-modina-red text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3" /> Featured
                    </span>
                  </div>
                </div>

                {/* Preview Details */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <span className="font-mono text-[11px] tracking-[0.3em] text-gray-500 uppercase mb-4">
                    SKU-{selectedProduct.id.toString().padStart(3, '0')}
                  </span>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
                    {selectedProduct.name}
                  </h1>
                  <p className="text-gray-400 text-lg leading-relaxed font-light mb-10 max-w-xl">
                    {selectedProduct.description}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 flex items-start gap-4">
                      <Box className="w-5 h-5 text-modina-red shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-1">Material</span>
                        <span className="block text-white text-sm font-medium">{selectedProduct.material}</span>
                      </div>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 flex items-start gap-4">
                      <ShieldCheck className="w-5 h-5 text-modina-red shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-1">Certification</span>
                        <span className="block text-white text-sm font-medium">{selectedProduct.certification}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <button className="px-8 py-4 bg-white text-black font-bold tracking-[0.2em] text-xs uppercase rounded-full hover:bg-modina-red hover:text-white transition-all duration-300 flex items-center gap-3 group">
                      Request Quote
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                      <span className="text-white text-xs font-bold tracking-widest uppercase">{selectedProduct.availability}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="h-[400px] flex items-center justify-center">
                <p className="text-gray-500 font-mono tracking-widest uppercase">No product selected</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* BOTTOM SECTION: Sidebar & Product List */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Sidebar: Categories & Search */}
          <div className="w-full lg:w-72 shrink-0">
            <div className="sticky top-32 flex flex-col gap-10">
              
              {/* Search */}
              <div>
                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-4">Search Catalog</h3>
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-white transition-colors" />
                  <input
                    type="text"
                    placeholder="Find products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-modina-red focus:bg-white/[0.05] transition-all"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-4">Categories</h3>
                <div className="flex flex-col gap-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isActive = activeCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'bg-modina-red/10 border border-modina-red/30 text-white' 
                            : 'bg-transparent border border-transparent text-gray-400 hover:bg-white/[0.03] hover:text-white'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-modina-red' : 'text-gray-500'}`} />
                        <span className="text-sm font-bold tracking-wide">{category.name}</span>
                        {isActive && (
                          <motion.div 
                            layoutId="activeCategoryIndicator"
                            className="ml-auto w-1.5 h-1.5 rounded-full bg-modina-red"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Product Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
              <h2 className="text-2xl font-display font-bold text-white">
                {categories.find(c => c.id === activeCategory)?.name || 'Products'}
              </h2>
              <span className="text-gray-500 text-sm font-mono">
                {filteredProducts.length} Results
              </span>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => {
                    const isSelected = selectedProduct?.id === product.id;
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        key={product.id}
                        onClick={() => handleProductSelect(product)}
                        className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col bg-[#0a0a0a] ${
                          isSelected 
                            ? 'border-modina-red shadow-[0_0_30px_rgba(229,37,37,0.15)]' 
                            : 'border-white/5 hover:border-white/20 hover:bg-[#111]'
                        }`}
                      >
                        {/* Card Image */}
                        <div className="relative aspect-[4/3] w-full bg-[#050505] overflow-hidden">
                          <img 
                            src={`https://picsum.photos/seed/modina-${product.id}-thumb/600/450?grayscale`}
                            alt={product.name}
                            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                              isSelected ? 'opacity-100 grayscale-0 scale-105' : 'opacity-60 grayscale group-hover:opacity-90 group-hover:grayscale-0 group-hover:scale-105'
                            }`}
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80"></div>
                          
                          {/* Selected Indicator */}
                          {isSelected && (
                            <div className="absolute top-4 right-4 bg-modina-red text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                              Viewing
                            </div>
                          )}
                        </div>

                        {/* Card Content */}
                        <div className="p-6 flex flex-col flex-grow">
                          <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-2">
                            {product.category}
                          </span>
                          <h3 className={`text-base font-display font-bold leading-snug mb-4 transition-colors ${
                            isSelected ? 'text-modina-red' : 'text-white group-hover:text-gray-200'
                          }`}>
                            {product.name}
                          </h3>
                          <div className="mt-auto flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors">
                            {isSelected ? 'Currently Viewing' : 'Select to View'}
                            <ArrowRight className={`ml-2 w-3 h-3 transition-transform ${isSelected ? 'translate-x-1 text-modina-red' : 'group-hover:translate-x-1'}`} />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full bg-[#0a0a0a] border border-white/5 rounded-2xl flex flex-col items-center justify-center py-24 text-center"
                  >
                    <Search className="w-10 h-10 text-gray-700 mb-4" />
                    <h3 className="text-lg font-display font-bold text-white mb-2">No products found</h3>
                    <p className="text-gray-500 text-sm max-w-sm">
                      Try adjusting your search or selecting a different category.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
