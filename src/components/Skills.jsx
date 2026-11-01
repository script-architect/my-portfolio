import React from 'react';

export default function Skills() {
  const coreCompetencies = [
    {
      title: "Backend Core & Protocols",
      description: "Architecting microservices and building strict data schemas.",
      tools: ["Java 17/21", "Spring Boot", "Spring Security", "REST APIs", "GraphQL", "Hibernate JPA"]
    },
    {
      title: "Distributed Systems & Caching",
      description: "Handling multi-node ingestion loops and request concurrency.",
      tools: ["Apache Kafka", "Redis Caching", "Spring Cloud Gateway", "Netflix Eureka", "Docker Nodes"]
    },
    {
      title: "Frontend Engineering",
      description: "Crafting beautiful, highly responsive components and interfaces.",
      tools: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3", "Vercel Deployment"]
    }
  ];

  return (
    <section id="skills" className="py-24 border-t border-slate-900/60">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-16">
          <p className="text-xs font-bold text-[#10B981] uppercase tracking-widest mb-2">Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Technical Mastery</h2>
        </div>

        {/* Clean Modern Metric Deck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreCompetencies.map((deck, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/20 border border-slate-900/80 rounded-2xl p-6 hover:border-slate-800 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{deck.title}</h3>
                <p className="text-slate-500 text-xs leading-normal mb-6">{deck.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {deck.tools.map((tool, i) => (
                  <span 
                    key={i} 
                    className="bg-[#0B0F17] border border-slate-800/80 text-slate-300 px-3 py-1.5 rounded-xl text-xs font-medium hover:text-[#10B981] hover:border-[#10B981]/30 transition-all duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* REFINED DECENT FOOTER CONNECTIONS HUB */}
        <div className="mt-24 border border-slate-900 bg-slate-900/10 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1 tracking-tight">Let's talk business.</h4>
            <p className="text-xs text-slate-500">I am currently available for software engineering roles and freelance clients.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold">
            <a href="mailto:priyanshu.sre47016@gmail.com" className="bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl text-slate-300 hover:text-[#10B981] transition-colors">Email</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl text-slate-300 hover:text-[#10B981] transition-colors">LinkedIn</a>
            <a href="https://wa.me" target="_blank" rel="noreferrer" className="bg-[#10B981] text-slate-950 font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-400 transition-colors">WhatsApp Direct</a>
          </div>
        </div>

      </div>
    </section>
  );
}
