import React from 'react';

export default function Navbar() {
    return (
        /* 
        sticky top-0: Keeps navbar fixed at the top while scrolling 
        bg-[#0F172A]/80: Dark background with 80% opacity
        backdrop-blur-md: Modern glassomorphism effect
        border-b border-slate-800: subtle dividing line at the bottom
        */
       <nav className="sticky top-0 z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">

                {/* Brand Identity / Logo */ }
                <div className="text-xl font-bold text-white tracking-wide">
                    Developer<span className="text-[#10B981]">.portfolio</span>
                </div>

                {/* Navigation Links (Hidden on Mobile , Flex on Desktop)*/}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
                    <a href="#about" className="hover:text-[#10B981] transition-colors duration-200">About</a>
                    <a href="#projects" className="hover:text-[#10B981] transition-colors duration-200">Projects</a>  
                    <a href="#skills" className="hover:text-[#10B981] transition-colors duration-200">Skills</a>
                    <a href="#contact" className="hover:text-[#10B981] transition-colors duration-200">Contact</a>
                </div>

                {/* CALL TO ACTION (CTA BUTTON */}
                    <div>
                        <a
                        href="#contact"
                        className="bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#10B981] hover:text-white transition-all duration-300">
                            Let's Talk
                        </a>
                    </div>

                </div>
            
       </nav>
    );
}