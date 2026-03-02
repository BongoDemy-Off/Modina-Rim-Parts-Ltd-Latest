import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, X, Menu as MenuIcon, Search, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState<'EN' | 'BN'>('EN');
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Company', 
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'Mission & Core Values', path: '/about#mission' },
        { name: 'Sustainability & CSR', path: '/about#sustainability' }
      ]
    },
    { name: 'Products', path: '/products' },
    {
      name: 'Quality',
      dropdown: [
        { name: 'Quality Assurance Process', path: '/quality' },
        { name: 'Certificates & Awards', path: '/quality#certificates' },
        { name: 'AI Engineer', path: '/ai-engineer' }
      ]
    },
    {
      name: 'Media',
      dropdown: [
        { name: 'News & Events', path: '/news' },
        { name: 'Blog', path: '/blog' }
      ]
    },
    { name: 'Contact', path: '/contact', isButton: true }
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex flex-col transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        {/* Global Navigation Menu (Top Bar) */}
        <div className="h-20 bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 px-4 lg:px-8 flex items-center justify-between relative z-20">
          {/* Left: Company Name */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 flex justify-start items-center"
          >
            <Link to="/" className="font-display font-bold text-sm md:text-lg xl:text-xl tracking-widest uppercase hover:opacity-80 transition-opacity whitespace-nowrap flex items-center">
              <span className="text-white">MODINA</span>
              <span className="text-modina-red ml-1.5 md:ml-2">RIM</span>
              <span className="text-gray-500 hidden sm:inline-block ml-1.5 md:ml-2 text-[10px] md:text-xs font-medium tracking-[0.15em]">& PARTS LTD.</span>
            </Link>
          </motion.div>

          {/* Center: Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <Link to="/" className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-[0_0_20px_rgba(229,37,37,0.15)] hover:shadow-[0_0_30px_rgba(229,37,37,0.3)] hover:scale-105 transition-all duration-300 group">
              <Logo className="w-8 h-8 object-contain" />
            </Link>
          </motion.div>

          {/* Right: Search & Language */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex-1 flex justify-end items-center gap-3 md:gap-6"
          >
            <div className="relative hidden md:block group">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-modina-red transition-colors" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-11 pr-4 text-xs text-white focus:outline-none focus:border-modina-red/50 focus:bg-white/10 transition-all w-48 lg:w-64 placeholder:text-gray-600" 
              />
            </div>
            
            <button 
              onClick={() => setLang(lang === 'EN' ? 'BN' : 'EN')}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 transition-all hover:border-white/20"
            >
              <Globe className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[10px] font-bold tracking-widest text-white">{lang}</span>
            </button>

            {/* Mobile Menu Toggle (Moved to top bar for mobile) */}
            <div className="xl:hidden flex items-center ml-2">
              <button onClick={() => setIsOpen(true)} className="text-white p-2 hover:text-modina-red transition-colors">
                <MenuIcon className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Main Navigation Menu (Bottom Bar) */}
        <div className="hidden xl:flex h-16 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 px-8 items-center justify-center relative z-10">
          <nav className="flex items-center justify-center gap-8 2xl:gap-12 h-full">
            {navItems.map((item, idx) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.05, ease: "easeOut" }}
                className="relative h-full flex items-center group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <div className="flex items-center cursor-pointer h-full py-2">
                    <span className="text-gray-300 text-[11px] 2xl:text-xs font-bold tracking-[0.2em] uppercase group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors duration-300 ml-1.5" />
                  </div>
                ) : item.isButton ? (
                  <Link 
                    to={item.path!} 
                    className="bg-modina-red text-white px-6 py-2.5 2xl:px-8 2xl:py-3 rounded-full font-bold tracking-[0.2em] text-[10px] 2xl:text-[11px] uppercase hover:bg-red-600 transition-all duration-300 shadow-[0_4px_15px_rgba(229,37,37,0.25)] hover:shadow-[0_4px_20px_rgba(229,37,37,0.4)] hover:-translate-y-0.5 flex items-center"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link 
                    to={item.path!} 
                    className="text-gray-300 text-[11px] 2xl:text-xs font-bold tracking-[0.2em] uppercase hover:text-white transition-colors duration-300 flex items-center h-full relative after:absolute after:bottom-4 after:left-0 after:w-0 after:h-[2px] after:bg-modina-red hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-[calc(100%-0.5rem)] left-1/2 -translate-x-1/2 w-64 pt-4"
                      >
                        <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/[0.05] shadow-2xl rounded-2xl p-3 flex flex-col gap-1 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                          
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="px-4 py-3.5 text-[10px] 2xl:text-[11px] font-bold tracking-[0.15em] text-gray-400 hover:text-white hover:bg-white/5 rounded-xl uppercase transition-all duration-200 flex items-center group/link"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-modina-red opacity-0 group-hover/link:opacity-100 transition-opacity mr-3"></span>
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </nav>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-modina-dark/95 backdrop-blur-xl z-[60] flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center h-20 border-b border-white/10 px-4 lg:px-8 shrink-0">
              <span className="font-display font-bold text-white text-sm md:text-lg tracking-widest uppercase">
                MODINA <span className="text-modina-red">RIM</span>
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-modina-red transition-colors p-2 bg-white/5 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-8 p-8 py-20">
              {navItems.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center gap-4 w-full max-w-md"
                >
                  {link.dropdown ? (
                    <>
                      <div className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-widest text-center">
                        {link.name}
                      </div>
                      <div className="flex flex-col items-center gap-4 w-full">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="text-sm md:text-base font-bold tracking-[0.15em] text-gray-400 hover:text-white transition-colors uppercase text-center"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : link.isButton ? (
                    <Link 
                      to={link.path!}
                      className="mt-4 bg-modina-red text-white px-10 py-4 rounded-full text-xl md:text-2xl font-display font-bold hover:bg-red-700 transition-colors uppercase tracking-widest text-center shadow-[0_0_20px_rgba(229,37,37,0.3)]"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link 
                      to={link.path!}
                      className="text-2xl md:text-4xl font-display font-bold text-white hover:text-gray-300 transition-colors uppercase tracking-widest text-center"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
