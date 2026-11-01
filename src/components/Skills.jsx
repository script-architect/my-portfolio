import React from 'react';

export default function Skills() {
    //Categorized skills directly mapped from your master stack
    const skillCategories = [
        {
            title: "Backend Core & Frameworks",
            skills: ["Java 17/21", "Spring Boot", "Spring Security", "REST APIs", "GraphQL", "Hibernate JPA"]
        },
        {
            title: "Distributed Systems & Infrastructure",
            skills: ["Apache Kafka", "Spring Cloud Gateway", "Netflix Eureka", "Redis Caching", "Docker", "PostgreSQL / MySQL"]
        },
        {
           title: "Frontend & Deployment",
           skills: ["React.js", "JavaScript (ES6+", "Tailwind CSS", "HTML5 / CSS3", "Git & GitHub", "DNS Management"] 
        }
    ];

    return (
        <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <p className="text-xs font-semibold text-[#10B981] uppercase tracking-widest mb-2">Expertise</p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                       Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-400"> Weaponry</span> 
                    </h2>
                </div>
            {/* Skills Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <div 
                      key={index}
                      className="bg-slate-50 dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 hover:border-[#10B981]/40 transition-all duration-300 shadow-lg"
                    > 
                        { /* Category Title */}
                        <h3 className="text-l font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">
                            {category.title}
                        </h3>

                        {/* Individual Skills Pills */}
                        <div className="flex flex-wrap gap-2.5">
                            {category.skills.map((skill, idx) => (
                              <span
                              key={idx}  
                              className="bg-white dark:bg-[#0F172A] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-sm hover:text-[#10B981] dark:hover:text-[#10B981] transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                        </div>
                    </div>
                     ))}
                </div>

            </div>  
        </section>
    );
}