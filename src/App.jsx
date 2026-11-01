import React, {useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import Skills from './components/Skills';

function App(){
  const [darkMode, setDarkMode] = useState(true);

  // Synch active UI state configuration directly with root DOM injection framework
  useEffect(() => {
    if (darkMode){
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },[darkMode]);
 
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 antialiased font-sans transition-colors duration-300">

      {/* Passing Theme parameters to Navbar control center */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-6xl mx-auto px-6">

        <Hero />
        <Project />
        <Skills />

        
      </main>


    </div>
  );
}

export default App;