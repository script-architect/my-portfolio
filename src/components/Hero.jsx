import React from 'react';

export default function Hero() {
  return (
    <section className="py-24 md:py-36 flex flex-col items-start text-left relative max-w-4xl">
      
      {/* Elegant Architectural Status Badge */}
      <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 px-4 py-1.5 rounded-full text-xs font-semibold text-[#10B981] mb-6">
        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
        MCA Graduate // Actively Engineering Systems
      </div>

      {/* Premium Sharp Typography Grid Header */}
      <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-8">
        Engineering Robust <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-emerald-400 to-teal-400">Backends</span> & Scalable Architecture
      </h1>

      {/* Clean Natural Subtext Narrative */}
      <p className="text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-12">
        I specialize in building fault-tolerant server environments using <span className="text-white font-semibold">Java Spring Boot / Microservices</span> and stitching performance-optimized client-side structures in <span className="text-white font-semibold">React.js</span>.
      </p>

      {/* Smooth Premium Call to Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <a 
          href="/Priyanshu_Sharma_Resume.pdf" 
          download="Priyanshu_Sharma_Resume.pdf"
          className="w-full sm:w-auto bg-[#10B981] text-slate-950 font-bold px-7 py-3.5 rounded-xl text-sm shadow-xl shadow-[#10B981]/10 hover:bg-emerald-400 hover:scale-[1.01] transition-all duration-200 text-center"
        >
          Download Resume PDF
        </a>
        <a 
          href="mailto:priyanshu.sre47016@gmail.com" 
          className="w-full sm:w-auto bg-slate-900/60 border border-slate-800 text-slate-300 font-semibold px-7 py-3.5 rounded-xl text-sm hover:bg-slate-800 hover:text-white transition-all duration-200 text-center"
        >
          Get in Touch via Email
        </a>
      </div>

    </section>
  );
}
