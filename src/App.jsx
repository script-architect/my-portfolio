import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project'

function App(){
  return (
    // Base Container wrapping the entire application layout
    <div className="min-h-screen bg-[#0F172A] text-slate-100 antialised font-sans">

      {/* Rendering Global Header */}
      <Navbar />

      {/* Injecting Sections inside global container */}
      <main className="max-w-6xl mx-auto px-6">
        {/* Rendering The hero section*/}
        <Hero />

        <Project />

      </main>

      
      
    </div>

    
  );
}

export default App;