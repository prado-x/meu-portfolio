import { getTranslations } from "next-intl/server";

export default async function Education() {
  const t = await getTranslations("Education");
  const items = ["postgrad", "bachelor"];

  return (
    <section id="education" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto w-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-navy-100 mb-12 tracking-tight text-balance">
        {t('title')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="bg-navy-900/40 border border-navy-800/60 rounded-2xl p-8 hover:bg-navy-900/80 transition-all">
            <div className="flex flex-col h-full space-y-4">
              <span className="text-sm font-semibold text-navy-500 tracking-widest uppercase">
                {t(`items.${item}.period`)}
              </span>
              <h3 className="text-2xl font-bold text-navy-100 text-balance">
                {t(`items.${item}.title`)}
              </h3>
              <p className="text-navy-300 font-medium">
                {t(`items.${item}.institution`)}
              </p>
              <p className="text-navy-400 leading-relaxed pt-2">
                {t(`items.${item}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
