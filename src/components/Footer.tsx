import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#141414] text-white">
      {/* PART 1 — TOP IDENTITY BAR */}
      <div className="border-b border-[#141414] py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* LEFT — Brand block */}
          <div className="flex items-center gap-6">
            <Link to="/" className="w-14 h-14 bg-white flex items-center justify-center shrink-0 rounded-none">
              <Logo className="w-9 h-9 object-contain" />
            </Link>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] tracking-[0.3em] text-white uppercase">MODINA RIM & PARTS LTD.</span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#252525] uppercase">Est. 2010 — Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* CENTER — Horizontal red divider line */}
          <div className="hidden lg:block w-[1px] h-10 bg-[#141414] mx-8"></div>

          {/* RIGHT — 3 inline stats */}
          <div className="flex items-center gap-0">
            <div className="flex flex-col items-center px-8">
              <span className="text-xl font-light text-[#E52525]">ISO</span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Certified</span>
            </div>
            <div className="w-[0.5px] h-6 bg-[#1a1a1a]"></div>
            <div className="flex flex-col items-center px-8">
              <span className="text-xl font-light text-[#E52525]">15+</span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Years</span>
            </div>
            <div className="w-[0.5px] h-6 bg-[#1a1a1a]"></div>
            <div className="flex flex-col items-center px-8">
              <span className="text-xl font-light text-[#E52525]">21+</span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Products</span>
            </div>
          </div>
        </div>
      </div>

      {/* PART 2 — MAIN CONTENT GRID */}
      <div className="border-b border-[#141414]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#141414]">
            
            {/* CELL 1 — Company description */}
            <div className="bg-[#050505] p-8 lg:p-10">
              <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-6">— About Us</p>
              <p className="text-[12px] text-[#2a2a2a] font-light leading-relaxed mb-8">
                Precision forged auto parts and premium rims. Trusted by manufacturers and distributors globally for uncompromising quality and durability since 2010.
              </p>
              <div>
                <p className="font-mono text-[9px] tracking-[0.25em] text-[#252525] uppercase mb-3">— Stay Updated</p>
                <div className="flex gap-0">
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="flex-1 bg-transparent border-b border-[#1a1a1a] focus:border-[#E52525] outline-none font-mono text-[11px] text-white placeholder:text-[#1e1e1e] py-3 transition-colors rounded-none" 
                  />
                  <button type="button" className="border-b border-[#E52525] px-4 py-3 font-mono text-[9px] tracking-[0.2em] text-[#E52525] uppercase hover:text-white hover:border-white transition-colors rounded-none">
                    Join
                  </button>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-0 border-t border-[#141414] pt-6">
                <a href="#" className="w-10 h-10 border-r border-[#141414] flex items-center justify-center text-[#1e1e1e] hover:text-[#E52525] transition-colors cursor-pointer">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-10 h-10 border-r border-[#141414] flex items-center justify-center text-[#1e1e1e] hover:text-[#E52525] transition-colors cursor-pointer">
                  <Twitter className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-10 h-10 border-r border-[#141414] flex items-center justify-center text-[#1e1e1e] hover:text-[#E52525] transition-colors cursor-pointer">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center text-[#1e1e1e] hover:text-[#E52525] transition-colors cursor-pointer">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* CELL 2 — Company links */}
            <div className="bg-[#050505] p-8 lg:p-10">
              <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-6">— Company</p>
              <div className="flex flex-col gap-0 border-t border-[#141414]">
                {[
                  { label: "About Us", path: "/about" },
                  { label: "Our Mission", path: "/mission" },
                  { label: "Sustainability & CSR", path: "/sustainability" },
                  { label: "Quality Assurance", path: "/quality" },
                  { label: "Certificates & Awards", path: "/certificates" },
                  { label: "AI Engineer", path: "/ai-engineer" }
                ].map((link, idx) => (
                  <Link key={idx} to={link.path} className="block border-b border-[#141414] py-4 font-mono text-[10px] tracking-[0.2em] text-[#252525] uppercase hover:text-white transition-colors flex items-center justify-between group">
                    {link.label}
                    <ChevronRight className="w-2.5 h-2.5 text-[#1a1a1a] opacity-0 group-hover:opacity-100 group-hover:text-[#E52525] transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* CELL 3 — Products links */}
            <div className="bg-[#050505] p-8 lg:p-10">
              <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-6">— Products</p>
              <div className="flex flex-col gap-0 border-t border-[#141414]">
                {[
                  { label: "All Products", path: "/products" },
                  { label: "Motorcycle Parts", path: "/products?category=Motorcycle" },
                  { label: "Premium Rims", path: "/products?category=Rims" },
                  { label: "Hardware & Accessories", path: "/products?category=Hardware" },
                  { label: "Download Catalog", path: "/downloads" },
                  { label: "Request Quote", path: "/contact" }
                ].map((link, idx) => (
                  <Link key={idx} to={link.path} className="block border-b border-[#141414] py-4 font-mono text-[10px] tracking-[0.2em] text-[#252525] uppercase hover:text-white transition-colors flex items-center justify-between group">
                    {link.label}
                    <ChevronRight className="w-2.5 h-2.5 text-[#1a1a1a] opacity-0 group-hover:opacity-100 group-hover:text-[#E52525] transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* CELL 4 — Contact info */}
            <div className="bg-[#050505] p-8 lg:p-10">
              <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-6">— Contact</p>
              <div className="flex flex-col gap-0 border-t border-[#141414]">
                <div className="border-b border-[#141414] py-4 flex items-start gap-4">
                  <MapPin className="w-3.5 h-3.5 text-[#E52525] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#252525] uppercase">Address</span>
                    <span className="font-mono text-[10px] tracking-[0.1em] text-[#333] font-light">123 Industrial Park Road, Dhaka 1200, Bangladesh</span>
                  </div>
                </div>
                <div className="border-b border-[#141414] py-4 flex items-start gap-4">
                  <Phone className="w-3.5 h-3.5 text-[#E52525] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#252525] uppercase">Phone</span>
                    <span className="font-mono text-[10px] tracking-[0.1em] text-[#333] font-light">+880 1234 567890</span>
                  </div>
                </div>
                <div className="border-b border-[#141414] py-4 flex items-start gap-4">
                  <Mail className="w-3.5 h-3.5 text-[#E52525] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#252525] uppercase">Email</span>
                    <span className="font-mono text-[10px] tracking-[0.1em] text-[#333] font-light">sales@modinarim.com</span>
                  </div>
                </div>
                <div className="py-4 flex items-start gap-4">
                  <Clock className="w-3.5 h-3.5 text-[#E52525] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#252525] uppercase">Hours</span>
                    <span className="font-mono text-[10px] tracking-[0.1em] text-[#333] font-light">Sun–Thu: 9AM – 6PM</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* PART 3 — BOTTOM BAR */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[9px] tracking-[0.2em] text-[#1a1a1a] uppercase">
          © {new Date().getFullYear()} Modina Rim & Parts Ltd. All rights reserved.
        </p>
        <p className="hidden md:block font-mono text-[9px] tracking-[0.2em] text-[#1a1a1a] uppercase">
          🇧🇩 Made in Bangladesh
        </p>
        <div className="flex items-center gap-0 border-l border-[#141414]">
          <Link to="/privacy" className="font-mono text-[9px] tracking-[0.2em] text-[#1a1a1a] uppercase hover:text-white transition-colors px-5 border-r border-[#141414] py-1">
            Privacy Policy
          </Link>
          <Link to="/terms" className="font-mono text-[9px] tracking-[0.2em] text-[#1a1a1a] uppercase hover:text-white transition-colors px-5 py-1">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
