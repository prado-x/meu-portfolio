import { getTranslations } from "next-intl/server";

export default async function CertificationsGrid() {
  const t = await getTranslations("Certifications");
  const groups = ["genai", "aws", "datadog"];

  return (
    <section id="certifications" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto w-full border-t border-navy-800/50">
      <h2 className="text-3xl sm:text-4xl font-bold text-navy-100 mb-12 tracking-tight text-balance">
        {t('title')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {groups.map((group, idx) => {
          const items: string[] = t.raw(`groups.${group}.items`);
          
          return (
            <div key={idx} className="flex flex-col space-y-6">
              <h3 className="text-lg font-bold text-navy-100 border-b border-navy-800/50 pb-4 text-balance">
                {t(`groups.${group}.title`)}
              </h3>
              <ul className="space-y-4">
                {items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center space-x-3 group cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-navy-600 group-hover:bg-cyan-400 transition-colors" />
                    <span className="text-navy-400 group-hover:text-navy-200 transition-colors font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-16 flex justify-start">
        <a 
          href={t('link')}
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-3.5 bg-navy-100 text-navy-950 font-medium rounded-sm hover:bg-white transition-colors flex items-center justify-center gap-2 font-display tracking-wide uppercase text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
        >
          {t('button')}
          <span className="text-xl leading-none">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
