import React from 'react';

export default function Projects() {
    //Array holding your high-impact full-stack and backend architectural projects
    const projectData = [
        {
            title: "Monvael - No Login , Expense Burn Rate Tracker",
            description: "A modern , secure and easy to use burn rate analyser , it does not require your data to login and to track your expense just open the website and it is ready to use , you can also set alarm for your expenses if you cross the limit it will show you alert on the screen also you can download your expense report in excel/csv format.",
            metrics: "It does not require your information and it saves your data on your browser's local storage and you can download backup , and also restore that.",
            tech: ["HTML", "CSS", "Tailwind CSS", "Vanilla JS"],
            frontendLink: "https://www.monvael.in", 
            backendLink: "https://github.com/script-architect/monvael"
        },
        {
            title: "SCRYP - Tech Services Freelancing Engine",
            description: "A secure, layered service-matching marketplace built with a component-driven React interfce and a robust Spring Boot core. Features 25+ exposed REST endpoints, JWT-based authentication, and Role-Based Access Control (RBAC). Optimized for database performance.",
            metrics: "Reduced database response time by 40% through MySQL indexing and optimized Hibernate entity associations. ",
            tech: ["React.js", "Java Spring Boot", "Spring Security", "JWT", "Hibernate", "MySQL" ],
            frontendLink: "https://github.com/script-architect/Scryp-Frontend",
            backendLink: "https://github.com/priyanshu-s47/scryp-tech-freelancing-platform"
        },
        {
            title: "ASHAMESH - Real-Time Disaster Response Network",
            description: "A highly resilient microservices-based disaster communication backend structured around Spring Cloud Gateway and Netflix Eureka for centralized dynamic routing and service discovery. Utilizes Redis caching and event-driven data streaming.",
            metrics: "Successfully processed 100 simultaneous automated requests with 0% gateway drop, validated via concurrent Postman load-testing.",
            tech: ["Java Spring Boot", "Spring Cloud", "Apache Kafka", "Redis", "PostgreSQL", "Docker"],
            frontendLink: null, // Pure backend system
            backendLink: "https://github.com/priyanshu-s47/AshaMesh-Disaster-Network"
        },
        {
            title: "CuraNode - An Enterprise Healthcare Security Framework",
            description: "CuraNode is a robust, microservices-ready healthcare backend engine engineered to enforce absolute data privacy and cryptographic integrity for clinical records. Architected strictly via autonomous development methodologies, this framework removes all reliance on boilerplate automation to establish high-integrity server-side execution paths.",
            metrics: "Features robust role-based infrastructure, BCrypt password hashing, and modern data-layer schemas designed to deliver top-tier architectural performance and full automated test-suite scalability.",
            tech: ["Java", "Spring Boot", "Hibernate", "PostgreSQL", "GraphQL", "Bcrypt Password", "JWT Authentication", "Thymeleaf", "HTML", "CSS", "JavaScript"],
            frontendLink: null, // both in the same reposiotyr in thymeleaf, 
            backendLink: "https://github.com/priyanshu-s47/CuraNode"
        }
        
    ];

    return (
        <section id ="projects" className="py-20 border-t border-slate-800/60">
           <div className="mb-12">
            <p className="text-xs font-semibold text-[#10B981] uppercase tracking-widest mb-2">My Work</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighy">
                Featured Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-400">Projects</span>
              </h2>
            </div>  

            {/* Projects Grid Display */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projectData.map((project, index) => (
                    <div key={index} className="bg-[#1E293B] border border-slate-800/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-slate-700/80 transition-all duratio-300 shadow-xl">
                        <div>
                                {/* Project Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>

                                {/*Core Description */}
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4">{project.description}</p>
                        
                            {/* Hard Core Performance Metric Callout */}
                            <div className="bg-[#0F172A]/50 border-l-2 border-[#10B981] p-3 rounded-r-xl mb-6">
                                <span className="text-xs font-semibold uppercase text-[#10B981] block mb-1">Performance Impact</span>
                                <p className="text-xs text-slate-300 leading-normal">{project.metrics}</p>
                            </div>

                            {/* Tech Pills Array */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t, idx) =>(
                                    <span key={idx} className="bg-[#0F172A] border border-slate-800/60 px-3 py-1 rounded-lg text-xs font-medium text-slate-300">
                                       {t} 
                                    </span>
                                ))}
                            </div>
                    </div>

                    {/* Action Links Strategy */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/60">
                        {project.frontendLink && (
                            <a 
                            href={project.frontendLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 text-center bg-slate-800/60 text-slate-200 border border-slate-700/60 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-200"
                            >
                                Frontend Git
                            </a>
                        )}
                        <a
                        href={project.backendLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#10B981] hover:text-white transition-all duration-200"
                        >
                                Backend Git
                        </a>
                    </div>
                </div>
                ))}
            </div>
        
        </section>
    )
}