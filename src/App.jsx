import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Project';
import Skills from './components/Skills';

export default function App() {
  return (
    // Beautiful Neutral Slate Blue Base with smooth contrast handling
    <div className="min-h-screen bg-[#0B0F17] text-slate-200 font-sans antialiased relative overflow-x-hidden selection:bg-[#10B981] selection:text-slate-900">
      
      {/* Subtle Premium Dot/Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      
      {/* Soft Ambient Radial Lens Flares for Luxury Aesthetic */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-emerald-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-200px] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Structured Executive Container */}
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 pb-32">
          <Hero />
          <Projects />
          <Skills />
        </main>
      </div>

    </div>
  );
}
