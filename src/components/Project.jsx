import React from 'react';

export default function Projects() {
  const projectData = [
    {
      index: "01",
      title: "ASHAMESH — Real-Time Disaster Response Network",
      tag: "Distributed Event Architecture",
      description: "A highly resilient microservices backend engineered with Spring Cloud Gateway and Eureka for dynamic dynamic routing. Decouples processing via containerized Kafka pipelines to handle high-velocity distress payloads.",
      impact: "Maintained a 0% socket drop rate over 1,00,000 parallel test requests via Postman stress simulation logs.",
      tech: ["Spring Boot", "Apache Kafka", "Redis", "PostgreSQL", "Docker Container"],
      link: "https://github.com"
    },
    {
      index: "02",
      title: "SCRYP — Tech Services Freelancing Engine",
      tag: "Full-Stack Security System",
      description: "A secure layered service-matching marketplace matching freelancers with enterprise requests. Implements custom JWT authentication filters, RBAC access schemas, and highly secure controller architectures.",
      impact: "Boosted performance configurations to slash active database query latency by up to 40%.",
      tech: ["React.js", "Java Spring Boot", "Spring Security", "JWT Token", "MySQL"],
      link: "https://github.com"
    },
    {
      index: "03",
      title: "Monvael OS — Startup Burn Rate Engine",
      tag: "Client-Side Financial Tool",
      description: "A high-performance premium client asset ledger tracking corporate runway metrics without data footprint. Built with zero authentication barriers for high efficiency and total privacy.",
      impact: "100% data compliance running completely on client localStorage arrays with native JSON import/export pipelines.",
      tech: ["HTML5 Canvas", "Tailwind CSS", "Vanilla JavaScript"],
      link: "https://github.com"
    },
    {
      index: "04",
      title: "CuraNode — Clinical Healthcare Framework",
      tag: "Secure GraphQL Engine",
      description: "An enterprise clinical records backend designed to ensure structural data layer privacy and absolute cryptographic integrity for high-stakes healthcare environments.",
      impact: "Safeguards transactional paths natively via decoupled GraphQL schemas and custom BCrypt password encoder layers.",
      tech: ["Java 17", "GraphQL", "Spring Data JPA", "PostgreSQL"],
      link: "https://github.com"
    },
    {
      index: "05",
      title: "logincomputer.in — Commercial Production Site",
      tag: "Live Freelance Solution",
      description: "A production digital-hub and printing portal engineered for a regional business to manage heavy asset orders and local traffic interaction pipelines.",
      impact: "Executed technical on-page SEO frameworks to successfully secure a Top 3 structural organic rank on Google Search.",
      tech: ["HTML5", "CSS3", "JavaScript", "Vercel Production Cloud"],
      link: "http://logincomputer.in"
    }
  ];

  return (
    <section id="projects" className="py-24 border-t border-slate-900/60">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-16">
          <p className="text-xs font-bold text-[#10B981] uppercase tracking-widest mb-2">Case Studies</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Featured Engineering</h2>
        </div>

        {/* Elegant Stacked Architecture Layout */}
        <div className="flex flex-col gap-16">
          {projectData.map((project) => (
            <div 
              key={project.index} 
              className="group border-b border-slate-900/60 pb-12 flex flex-col lg:flex-row justify-between items-start gap-8 hover:border-slate-800 transition-all duration-300"
            >
              {/* Info Frame */}
              <div className="max-w-md w-full">
                <span className="text-xs font-semibold text-slate-500 font-mono block mb-2">{project.index} // {project.tag}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#10B981] transition-colors duration-200 tracking-tight">
                  {project.title}
                </h3>
                
                {/* Clean Stack Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="bg-slate-900/40 border border-slate-800 text-slate-400 px-2.5 py-1 rounded-lg text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description & Impact Column */}
              <div className="flex-1 max-w-xl flex flex-col justify-between h-full">
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Modern Performance Impact Badge */}
                <div className="bg-[#10B981]/5 border border-[#10B981]/10 px-4 py-2.5 rounded-xl text-xs font-medium text-emerald-400 leading-normal flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full block shrink-0"></span>
                  <span>{project.impact}</span>
                </div>

                <div className="mt-4 flex justify-end">
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-xs font-bold text-slate-500 hover:text-[#10B981] transition-colors tracking-wider uppercase flex items-center gap-1">
                    Source Code ↗
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
