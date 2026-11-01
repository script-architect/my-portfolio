import React from 'react';

export default function Projects() {
  const projectData = [
    {
      title: "Monvael - No Login, Expense Burn Rate Tracker",
      description: "A modern, secure and easy to use burn rate analyser. It does not require your data to login. To track your expenses just open the website and it is ready to use. You can also set custom allocation caps; if you cross the limit it triggers live system alerts. Export reports anytime.",
      metrics: "Saves your data entirely on your browser's localStorage. Zero server footprints with complete JSON backup/restore mechanics.",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "Vanilla JS (ES6+)"],
      frontendLink: "https://www.monvael.in", 
      backendLink: "https://github.com/script-architect/monvael"
    },
    {
      title: "SCRYP - Tech Services Freelancing Engine",
      description: "A secure, layered service-matching marketplace built with a component-driven React interface and a robust Spring Boot core. Features 25+ exposed REST endpoints, JWT-based authentication, and Role-Based Access Control (RBAC).",
      metrics: "Reduced database response time by 40% through MySQL indexing and optimized Hibernate entity associations.",
      tech: ["React.js", "Java Spring Boot", "Spring Security", "JWT", "Hibernate", "MySQL"],
      frontendLink: "https://github.com/script-architect/Scryp-Frontend",
      backendLink: "https://github.com/priyanshu-s47/scryp-tech-freelancing-platform"
    },
    {
      title: "ASHAMESH - Real-Time Disaster Response Network",
      description: "A highly resilient microservices-based disaster communication backend structured around Spring Cloud Gateway and Netflix Eureka for centralized dynamic routing and service discovery. Utilizes Redis caching and event-driven data streaming.",
      metrics: "Successfully processed 1,00,000 simultaneous automated requests with 0% gateway drop, validated via automated Postman load-testing cycles.",
      tech: ["Java Spring Boot", "Spring Cloud", "Apache Kafka", "Redis", "PostgreSQL", "Docker"],
      frontendLink: null,
      backendLink: "https://github.com/priyanshu-s47/AshaMesh-Disaster-Network"
    },
    {
      title: "CuraNode - Enterprise Healthcare Security Framework",
      description: "CuraNode is a robust, microservices-ready healthcare backend engine engineered to enforce absolute data privacy and cryptographic integrity for clinical records. Removes all reliance on boilerplate automation to establish high-integrity server execution paths.",
      metrics: "Features robust role-based infrastructure, BCrypt password hashing, GraphQL mutations, and modern data-layer schemas designed for performance.",
      tech: ["Java", "Spring Boot", "GraphQL", "Spring Data JPA", "PostgreSQL", "BCrypt", "Thymeleaf"],
      frontendLink: null,
      backendLink: "https://github.com/priyanshu-s47/CuraNode"
    },
    {
      title: "Production Freelance Site: logincomputer.in",
      description: "Designed and developed a production-ready web application for a local Cyber-Cafe and Printing enterprise handling high-volume digital document processing and local store inquiries.",
      metrics: "Implemented strategic On-Page technical SEO, achieving a Top 3 ranking on Google Search for high-intent local targeted keywords.",
      tech: ["HTML5", "CSS3", "JavaScript", "GoDaddy DNS Management", "Vercel Production Deployment"],
      frontendLink: "http://logincomputer.in",
      backendLink: null
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12">
          <p className="text-xs font-semibold text-[#10B981] uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Production & Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-400">Projects</span>
          </h2>
        </div>

        {/* 5 CORE PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projectData.map((project, index) => (
            <div key={index} className="bg-slate-50 dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-[#10B981]/40 transition-all duration-300 shadow-xl">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                
                <div className="bg-slate-100 dark:bg-[#0F172A]/50 border-l-2 border-[#10B981] p-3 rounded-r-xl mb-6">
                  <span className="text-xs font-semibold uppercase text-[#10B981] block mb-1">Architecture Impact</span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-normal">{project.metrics}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/60">
                {project.frontendLink && (
                  <a href={project.frontendLink} target="_blank" rel="noreferrer" className="flex-1 text-center bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-200">
                    Live Demo / Front Git
                  </a>
                )}
                {project.backendLink && (
                  <a href={project.backendLink} target="_blank" rel="noreferrer" className="flex-1 text-center bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#10B981] hover:text-white transition-all duration-200">
                    Source Code / Back Git
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
    </div>   
</section>
    )
}