import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";

import { locales } from "../../../../i18n/config";
import ClientMermaidDiagram from "../../../../components/ClientMermaidDiagram";

export function generateStaticParams() {
  const slugs = ["data-platform", "crq-portal", "reactive-banking-harness"];
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  
  if (slug !== "data-platform" && slug !== "crq-portal" && slug !== "reactive-banking-harness") {
    notFound();
  }

  const t = await getTranslations(`ProjectDetails.${slug}`);

  const title = t("title");
  const stack = t("stack");
  const mermaidChart = t("mermaidChart");
  
  const isEnterpriseCase = slug === "data-platform" || slug === "crq-portal";

  return (
    <div className="min-h-screen bg-navy-950 text-navy-50 font-sans selection:bg-navy-800 selection:text-navy-100 pb-24">
      {/* Header/Nav */}
      <nav className="w-full max-w-5xl mx-auto px-6 py-8">
        <Link href={`/${locale}#projects`} className="inline-flex items-center text-sm text-navy-400 hover:text-navy-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950">
          <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="w-full max-w-5xl mx-auto px-6 py-12 md:py-20 border-b border-navy-800/50">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
          PROJECT CASE STUDY
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight text-balance">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 mt-8">
          <span className="text-sm text-navy-400 font-medium mr-2">Tech Stack:</span>
          {stack.split(',').map((tech, i) => (
            <span key={i} className="px-3 py-1 text-xs font-medium text-navy-300 bg-navy-900 rounded-full border border-navy-800">
              {tech.trim()}
            </span>
          ))}
        </div>
      </header>

      {/* Content Grid */}
      <main className="w-full max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column - Text Content */}
        <div className="md:col-span-7 space-y-16">
          {isEnterpriseCase ? (
            <>
              <section>
                <h2 className="text-sm font-semibold tracking-widest text-navy-500 uppercase mb-4 text-balance">Business Problem</h2>
                <p className="text-lg text-navy-300 leading-relaxed">
                  {t("businessProblem")}
                </p>
              </section>
              <section>
                <h2 className="text-sm font-semibold tracking-widest text-navy-500 uppercase mb-4 text-balance">Technical Solution</h2>
                <p className="text-lg text-navy-300 leading-relaxed">
                  {t("technicalSolution")}
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-sm font-semibold tracking-widest text-navy-500 uppercase mb-4 text-balance">Executive Summary</h2>
                <p className="text-lg text-navy-300 leading-relaxed">
                  {t("description")}
                </p>
                <a href={t("repoLink")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-6 text-cyan-400 hover:text-cyan-300 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950">
                  View on GitHub
                  <svg aria-hidden="true" className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </section>
              <section>
                <h2 className="text-sm font-semibold tracking-widest text-navy-500 uppercase mb-4 text-balance">Technical Solution</h2>
                <p className="text-lg text-navy-300 leading-relaxed">
                  {t("technicalSolution")}
                </p>
              </section>
            </>
          )}
        </div>

        {/* Right Column - Metrics (if any) */}
        <div className="md:col-span-5 space-y-12">
          {isEnterpriseCase ? (
            <section className="bg-navy-900/50 p-8 rounded-2xl border border-navy-800/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h2 className="text-sm font-semibold tracking-widest text-navy-500 uppercase mb-4 relative z-10 text-balance">Impact Metrics</h2>
              <p className="text-xl font-medium text-cyan-400 leading-relaxed relative z-10">
                {t("impactMetrics")}
              </p>
            </section>
          ) : null}
        </div>

        {/* Architecture Diagram (Full Width) */}
        <section className="md:col-span-12 mt-12 pt-12 border-t border-navy-800/50">
          <h2 className="text-2xl font-bold text-white mb-8 text-balance">Architecture Flow</h2>
          <div className="w-full">
            <ClientMermaidDiagram chart={mermaidChart} />
          </div>
        </section>
      </main>
    </div>
  );
}
