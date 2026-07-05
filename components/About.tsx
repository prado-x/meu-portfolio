import { getTranslations } from "next-intl/server";

export default async function About() {
  const t = await getTranslations("AboutPage");
  const pillars = ["blueprint", "scale", "frontier"];

  return (
    <section id="about" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto w-full flex flex-col space-y-16">
      
      {/* Title */}
      <div className="flex flex-col space-y-2 border-b border-navy-800/50 pb-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
          {t('title')}
        </h2>
        <span className="h-1 w-12 bg-cyan-400 rounded-full" />
      </div>

      {/* 3 Columns Glassmorphism Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {pillars.map((pillar, idx) => (
          <article 
            key={idx} 
            className="flex flex-col space-y-4 p-8 rounded-lg bg-navy-900/30 border border-navy-800/50 backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300 hover:translate-y-[-4px] shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
          >
            <h3 className="text-xl font-bold text-navy-100 border-b border-navy-800/50 pb-3 text-balance font-display">
              {t(`pillars.${pillar}.title`)}
            </h3>
            <p className="text-sm text-navy-200 leading-relaxed font-medium flex-1">
              {t(`pillars.${pillar}.content`)}
            </p>
          </article>
        ))}
      </div>

      {/* Manifesto / Vision Section */}
      <div className="p-8 md:p-12 rounded-lg bg-navy-900/30 border border-navy-800/50 backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)] flex flex-col space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight font-display border-b border-navy-800/50 pb-4">
          {t('manifesto.title')}
        </h3>
        <p className="text-sm md:text-base text-navy-200 leading-relaxed font-medium whitespace-pre-line">
          {t.rich('manifesto.content', {
            bold: (chunks) => <strong className="font-extrabold text-cyan-400">{chunks}</strong>
          })}
        </p>
      </div>

    </section>
  );
}
