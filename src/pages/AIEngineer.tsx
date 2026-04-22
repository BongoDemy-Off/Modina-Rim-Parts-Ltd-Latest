import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';

export default function AIEngineer() {
  const letters = "AI ENGINEER".split("");

  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-80px' });

  const interfaceRef = useRef(null);
  const interfaceInView = useInView(interfaceRef, { once: true, margin: '-60px' });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an expert AI Engineer at Modina Rim & Parts Ltd. 
        You specialize in automotive manufacturing, metallurgy, precision engineering, and quality assurance.
        Answer the following technical inquiry professionally, providing detailed and accurate information.
        
        Inquiry: ${query}`,
      });

      setResponse(result.text || 'I am sorry, I could not process that technical inquiry.');
    } catch (error) {
      console.error('AI Engineer error:', error);
      setResponse('An error occurred while consulting the AI Engineer. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedPrompts = [
    "What is the tensile strength of your motorcycle rim alloy?",
    "Which products are ISO 9001:2015 certified?",
    "What are the CNC machining tolerances for rims?",
    "How do I request a product specification sheet?"
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-[80px]">
      {/* SECTION 1 — HERO */}
      <section className="w-full py-20 lg:py-28 flex flex-col items-center text-center">
        <div className="font-mono text-[10px] tracking-[0.25em] text-[#2a2a2a] uppercase flex items-center gap-2 justify-center mb-10">
          <Link to="/">Home</Link>
          <ChevronRight className="w-2.5 h-2.5 text-[#1e1e1e]" />
          <span className="text-[#E52525]">AI Engineer</span>
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
          <span>Powered by Gemini AI</span>
          <span className="text-[#E52525]">·</span>
          <span>Est. 2010</span>
        </p>

        <hr className="w-full max-w-md border-[#1a1a1a] mx-auto mt-10 mb-10" />

        <div className="flex items-center justify-center gap-0">
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">AI</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Powered</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">24/7</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Available</span>
          </div>
          <span className="w-[0.5px] h-8 bg-[#1a1a1a]" />
          <div className="flex flex-col items-center px-10 md:px-14">
            <span className="text-2xl md:text-3xl font-light text-[#E52525]">ISO</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#252525] uppercase mt-1">Knowledge Base</span>
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

      {/* SECTION 2 — INTRO SPLIT */}
      <section className="w-full border-t border-[#141414]" ref={introRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#141414]">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={introInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#050505] p-10 lg:p-16 flex flex-col justify-center"
          >
            <p className="text-[160px] font-light text-[#0a0a0a] leading-none select-none tracking-tight">
              AI
            </p>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#E52525] uppercase mt-2">
              — Intelligent Assistant
            </p>
            <p className="font-mono text-[9px] tracking-[0.25em] text-[#252525] uppercase mt-1">
              Technical Expertise On Demand
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={introInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#050505] p-10 lg:p-16 flex flex-col justify-center"
          >
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-8">
              — What It Does
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-tight leading-tight mb-8">
              Expert Technical Answers Instantly
            </h2>
            <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed max-w-lg mb-5">
              Our AI Engineer is trained on Modina's full knowledge base — product specifications, material science, ISO standards, and manufacturing processes.
            </p>
            <p className="text-[13px] text-[#3a3a3a] font-light leading-relaxed max-w-lg mb-5">
              Ask anything about tensile strength, machining tolerances, certification requirements, or product compatibility. Get precise, professional answers instantly.
            </p>
            
            <div className="mt-2">
              <div className="flex items-start gap-4 mb-4">
                <span className="font-mono text-[8px] text-[#E52525] mt-0.5">—</span>
                <span className="text-[11px] text-[#444] font-light">Material specifications and alloy composition data</span>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <span className="font-mono text-[8px] text-[#E52525] mt-0.5">—</span>
                <span className="text-[11px] text-[#444] font-light">ISO 9001:2015 compliance and certification guidance</span>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <span className="font-mono text-[8px] text-[#E52525] mt-0.5">—</span>
                <span className="text-[11px] text-[#444] font-light">CNC machining tolerances and dimensional accuracy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — AI INTERFACE */}
      <section className="w-full border-t border-[#141414] bg-[#080808]" ref={interfaceRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#141414]">
          
          {/* LEFT — CAPABILITIES PANEL */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={interfaceInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#050505] p-10 lg:p-16 border-r-0 lg:border-r border-[#141414]"
          >
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-8">— Capabilities</p>
            
            <div className="group bg-[#080808] p-6 mb-[1px] relative cursor-default">
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px] bg-[#E52525] transition-all duration-500" />
              <p className="font-mono text-[11px] text-[#E52525] uppercase mb-3">—01</p>
              <h3 className="text-lg font-light text-white uppercase tracking-[0.1em] mb-3">Technical Specifications</h3>
              <p className="text-[12px] text-[#333] font-light leading-relaxed">Detailed data on alloy grades, dimensional tolerances, load ratings, and material properties for all 21 SKUs.</p>
            </div>
            
            <div className="group bg-[#080808] p-6 mb-[1px] relative cursor-default">
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px] bg-[#E52525] transition-all duration-500" />
              <p className="font-mono text-[11px] text-[#E52525] uppercase mb-3">—02</p>
              <h3 className="text-lg font-light text-white uppercase tracking-[0.1em] mb-3">Quality Standards</h3>
              <p className="text-[12px] text-[#333] font-light leading-relaxed">ISO 9001:2015 compliance details, BSTI certification requirements, and internal QC process documentation.</p>
            </div>
            
            <div className="group bg-[#080808] p-6 mb-[1px] relative cursor-default">
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px] bg-[#E52525] transition-all duration-500" />
              <p className="font-mono text-[11px] text-[#E52525] uppercase mb-3">—03</p>
              <h3 className="text-lg font-light text-white uppercase tracking-[0.1em] mb-3">Manufacturing Insights</h3>
              <p className="text-[12px] text-[#333] font-light leading-relaxed">CNC machining parameters, heat treatment specifications, surface finishing processes, and production tolerances.</p>
            </div>

            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mt-8 mb-4">— Try Asking</p>
            <div className="flex flex-col">
              {suggestedPrompts.map((prompt, idx) => (
                <button 
                  key={idx}
                  onClick={() => setQuery(prompt)}
                  className="w-full text-left border-b border-[#141414] py-4 font-mono text-[10px] tracking-[0.15em] text-[#252525] uppercase hover:text-white transition-colors flex items-center justify-between group/prompt"
                >
                  {prompt}
                  <ChevronRight className="w-3 h-3 text-[#1e1e1e] group-hover/prompt:text-[#444] transition-colors" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — AI CHAT INTERFACE */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={interfaceInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#050505] p-10 lg:p-16 flex flex-col"
          >
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-8">— Ask the AI</p>
            
            <div className="w-full min-h-[280px] bg-[#080808] border border-[#141414] p-6 mb-6 relative flex flex-col">
              {!response && !isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-mono text-[9px] tracking-[0.25em] text-[#1e1e1e] uppercase text-center">
                    — Awaiting your inquiry —
                  </p>
                </div>
              )}

              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#E52525] rounded-full animate-pulse" />
                  <p className="font-mono text-[10px] tracking-[0.2em] text-[#252525] uppercase">
                    Consulting knowledge base...
                  </p>
                </div>
              )}

              {response && !isLoading && (
                <div className="prose-none h-full overflow-y-auto pr-2">
                  <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Response</p>
                  <ReactMarkdown className="text-[13px] text-[#555] font-light leading-relaxed [&_strong]:text-white [&_strong]:font-normal [&_ul]:mt-3 [&_li]:text-[#444] [&_li]:mb-2">
                    {response}
                  </ReactMarkdown>
                </div>
              )}
            </div>

            <form onSubmit={handleInquiry} className="flex flex-col mt-auto">
              <label className="font-mono text-[9px] tracking-[0.2em] text-[#252525] uppercase mb-3">
                Your Question
              </label>
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. What alloy is used in the Easy Bike rim?"
                className="w-full bg-transparent border-b border-[#1a1a1a] focus:border-[#E52525] outline-none text-[13px] text-white py-3 font-light placeholder:text-[#1e1e1e] resize-none h-24 transition-colors rounded-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleInquiry(e);
                  }
                }}
              />
              <button
                type="submit"
                disabled={!query.trim() || isLoading}
                className="w-full mt-6 bg-[#E52525] text-white font-mono text-[10px] tracking-[0.3em] uppercase py-4 hover:bg-[#cc1f1f] transition-colors flex items-center justify-center gap-4 rounded-none disabled:opacity-30 disabled:cursor-not-allowed"
              >
                SUBMIT INQUIRY
                <ArrowRight className="w-3 h-3" />
              </button>
              <p className="font-mono text-[8px] tracking-[0.2em] text-[#1a1a1a] uppercase mt-4 text-center">
                AI responses are for guidance only — contact sales for official documentation
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — CTA BANNER */}
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
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#E52525] uppercase mb-4">— Go Further</p>
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
              Contact Sales
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
