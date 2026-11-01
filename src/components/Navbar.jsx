import React from 'react';

export default function Navbar ({ darkMode, setDarkMode }) {
    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-[#0F172A]/80 text-slate-800 dark:text-slate-100 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex items-center justify-between">

                {/* Name / Brand Identity */}
                <div className="text-xl font-bold tracking-wide">
                    Priyanshu <span className="text-[#10B981]">Sharma</span>
                </div>

                {/*Navigation Links */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <a href="#about" className="hover:text-[#10B981] transition-colors">About</a>
                    <a href="#projects" className="hover:text-[#10B981] transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-[#10B981] transition-colors">Contact</a>
                </div>
                {/* Action Button & Theme Toggle Containe */}
                <div className="flex items-center gap-4">

                    {/* Theme Toggle Button */}
                    <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:text-[#10B981] transition-all duration-200"
                    aria-label="Toggle Theme"
                    >
                     {darkMode ? (
                        /* Sun Icon for light mode conversion */
                        <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12 3v1m0 16v1m0-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M6.343 6.343l.707-.707M14.142 12a2.142 0 11-4.284 0 2.142 2.142 0 014.284 0z"/></svg>
                        ) : (
                        /* Moon Icon for Dark Mode conversion */
                        <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                        )}  
                    </button>

                    <a href="#contact"
                    className="bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#10B981] hover:text-white transition-all duration-300"
                    >
                        Let's Talk
                    </a>
                </div>

            </div>
        </nav>
    );
}