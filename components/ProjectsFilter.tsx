"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Project = {
  key: string;
  slug: string;
  title: string;
  description: string;
  tags: string;
  type: "private" | "public";
};

type ProjectsFilterProps = {
  locale: string;
  projects: Project[];
  filters: {
    all: string;
    private: string;
    public: string;
  };
  enterpriseBadge: string;
};

export default function ProjectsFilter({ locale, projects, filters, enterpriseBadge }: ProjectsFilterProps) {
  const [filter, setFilter] = useState<"all" | "private" | "public">("all");

  const filteredProjects = projects.filter((p) => filter === "all" || p.type === filter);

  return (
    <div className="w-full flex flex-col items-start space-y-12">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 border-b border-navy-800/50 pb-4 w-full">
        {(["all", "private", "public"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all ${
              filter === tab
                ? "bg-navy-100 text-navy-950 shadow-sm"
                : "bg-navy-900/40 text-navy-400 hover:text-navy-100 hover:bg-navy-800/60 border border-navy-800/50"
            }`}
          >
            {filters[tab]}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full mt-10 auto-rows-[minmax(280px,auto)]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 25,
                mass: 0.8
              }}
              key={project.key}
              className={`h-full ${index === 0 && filter === 'all' ? 'md:col-span-2' : ''}`}
            >
              <div className="group relative bg-navy-900/40 backdrop-blur-sm border border-navy-800/60 rounded-3xl p-8 lg:p-10 hover:bg-navy-800/50 transition-colors hover:border-navy-600/80 h-full flex flex-col overflow-hidden">
                <div className="flex flex-col h-full space-y-5 relative z-10">
                  {/* Metadata Badge */}
                  {project.type === "private" && (
                    <div className="inline-block px-3 py-1 bg-navy-950/80 border border-navy-800 rounded-full w-fit">
                      <span className="text-[10px] font-bold text-navy-400 uppercase tracking-widest">{enterpriseBadge}</span>
                    </div>
                  )}
                  {project.type === "public" && (
                    <div className="inline-block px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full w-fit">
                      <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Open-Source</span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-navy-100 group-hover:text-white transition-colors pt-2 text-balance">
                    <Link href={`/${locale}/projects/${project.slug}`} className="before:absolute before:inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-navy-400 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="pt-4 border-t border-navy-800/50 mt-auto flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wide text-navy-300 uppercase">
                      {project.tags}
                    </span>
                    
                    {project.type === "public" && (
                      <a
                        href="https://github.com/prado-x"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 text-navy-400 hover:text-navy-100 transition-colors bg-navy-900/50 p-2 rounded-full border border-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                        aria-label="View on GitHub"
                      >
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
