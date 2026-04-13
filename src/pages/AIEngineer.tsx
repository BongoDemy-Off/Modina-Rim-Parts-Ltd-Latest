import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Bot, Send, Settings, Cpu, ShieldCheck } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';

export default function AIEngineer() {
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

  return (
    <div className="min-h-screen pt-36 pb-28 bg-modina-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-modina-red/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
          
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 bg-modina-red/10 text-modina-red px-4 py-2 rounded-full text-sm font-medium mb-7 w-fit border border-modina-red/20">
              <Cpu className="w-4 h-4" />
              Powered by Gemini AI
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-7 leading-tight">
              Consult Our <br />
              <span className="text-modina-red">AI Engineer</span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Get instant, expert-level technical insights on manufacturing processes, material specifications, tolerances, and quality standards for all Modina products.
            </p>

            <div className="space-y-7">
              {[
                { icon: Settings, title: 'Technical Specifications', desc: 'Detailed specs on alloys, dimensions, and load capacities.' },
                { icon: ShieldCheck, title: 'Quality Standards', desc: 'Information on ISO compliance and testing methodologies.' },
                { icon: Bot, title: 'Manufacturing Processes', desc: 'Insights into our forging, CNC machining, and finishing.' }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-modina-red" />
                  </div>
                  <div>
                    <h3 className="text-white font-display font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Interface */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#16181F] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl min-h-[600px] flex flex-col">
              
              {/* Output Area */}
              <div className="flex-1 bg-[#0a0a0a] rounded-2xl border border-white/5 p-6 overflow-y-auto mb-6 relative min-h-[320px]">
                {!response && !isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 opacity-50">
                    <Bot className="w-16 h-16 text-gray-500 mb-5" />
                    <p className="text-gray-400 font-display text-sm leading-relaxed max-w-xs">
                      Ask me anything about Modina's manufacturing capabilities, product specs, or engineering standards.
                    </p>
                  </div>
                )}
                
                {isLoading && (
                  <div className="flex items-center gap-3 text-modina-red font-display">
                    <div className="w-5 h-5 border-2 border-modina-red border-t-transparent rounded-full animate-spin"></div>
                    Analyzing technical databases...
                  </div>
                )}

                {response && !isLoading && (
                  <div className="prose prose-invert max-w-none">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-modina-red flex items-center justify-center shrink-0 mt-1">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-gray-300 leading-relaxed">
                        <ReactMarkdown className="prose prose-invert prose-sm max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300">{response}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <form onSubmit={handleInquiry} className="relative">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="E.g., What is the tensile strength of the alloy used in your premium motorcycle rims?"
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-white placeholder-gray-500 focus:outline-none focus:border-modina-red transition-colors resize-none h-28"
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
                  className="absolute bottom-4 right-4 w-12 h-12 bg-modina-red rounded-xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition-colors shadow-lg"
                >
                  <Send className="w-5 h-5 ml-1" />
                </button>
              </form>

              <div className="flex flex-wrap gap-2 mt-4">
                {['Tensile strength of motorcycle rim alloy?', 'ISO certification details?', 'CNC machining tolerances?'].map((prompt) => (
                  <button key={prompt} onClick={() => setQuery(prompt)} className="text-xs text-gray-400 border border-white/10 rounded-full px-3 py-1.5 hover:border-modina-red hover:text-modina-red transition-all duration-200">
                    {prompt}
                  </button>
                ))}
              </div>

              <p className="text-xs text-gray-500 text-center mt-5">
                AI responses are generated based on Modina's technical knowledge base. For official documentation, please visit the Download Center.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
