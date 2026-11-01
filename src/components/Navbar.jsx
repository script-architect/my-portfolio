import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0B0F17]/80 backdrop-blur-md px-6 py-5 border-b border-slate-900/60">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Clean Signature Branding */}
        <div className="text-xl font-extrabold tracking-tight text-white">
          Priyanshu<span className="text-[#10B981]">Sharma</span>
        </div>

        {/* High-Trust Direct Communication Button */}
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-emerald-500/10 text-[#10B981] border border-emerald-500/20 px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#10B981] hover:text-slate-900 transition-all duration-300"
          >
            Connect on WhatsApp
          </a>
        </div>

      </div>
    </nav>
  );
}
