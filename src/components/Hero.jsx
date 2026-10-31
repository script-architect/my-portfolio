import React from 'react';

export default function Hero() {

    return (
        /* Hero container centered with padding optimized for all devices */
        <section id="about" className="py-20 md:py-32 flex flex-col items-center text-center">
          {/* ACTIVE STATUS BADGE - Pulsing effect showing availability */}
          <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 px-3 py-1 rounded-full text-xs font-medium text-[#10B981] mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            Available for Full-Time Roles & Agency Projects
          </div>

          {/* MAIN CATCHY HEADERS WITH EMERALD GRADIENT */}
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
            Building Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-600">Full-Stack</span> Web Applications
          </h1>
          {/* Professional Value Proposition / BIo */}
          <p className="mt-6 text-slate-400 text-lg md:text-xl max-w-2xl px-4 leading-relaxed">
            Hi, I'm software engineer focused on building high-performance backends with <span className="text-white font-semibold">Java Spring Boot</span> and crafting modular, highly responsive digital interfaces using <span className="text-white font-semibold">Vanilla JS and React.js</span>
          </p>

          {/* CALL TO ACTION BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6">
                <a 
                  href="#projects"
                  className="w-full sm:w-auto bg-[#10B981] text-[#0F172A] font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#10B981]/20 hover:bg-emerald-400 hover:shadow-emerald-400/20 transition-all duration-300 text-center"
                >
                    View My Work
                </a>  

            {/* Secondary Action - Contact */}
            <a 
                href="#contact"
                className="w-full sm:w-auto bg-slate-800/50 text-slate-200 border border-slate-700/60 font-semibold px-8 py-4 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-300 text-center"
            >
                Let's Connect
            </a> 

          </div>

          {/* CORE EXPERTISE TECH PILLS DISPLAY */}
          <div className="mt-16 border-t border-slate-800/60 pt-8 w-full max-w-3xl">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Core Architecture & Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-3 px-4">
                {['React.js', 'Java Spring Boot', 'Tailwind CSS', 'REST APIs','GraphQL APIs', 'PostgreSQL' , 'MySQL', 'Git & GitHub'].map((tech)=> (
                 <span 
                 key={tech}
                 className="bg-[#1E293B] border border-slate-800 px-4 py-2 rounded-xl text-sm text-slate-300 font-medium shadow-sm" 
                 >
                    {tech}
                 </span>  
                ))}
            </div>
          </div>

        </section>

    );
}