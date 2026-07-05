import { getTranslations, setRequestLocale } from "next-intl/server";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Education from "../../components/Education";
import CertificationsGrid from "../../components/CertificationsGrid";
import FeaturedProjects from "../../components/FeaturedProjects";
import LighthouseMedia from "../../components/LighthouseMedia";
import AnimatedHero from "../../components/AnimatedHero";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Hero");

  const heroTranslations = {
    badge: t('badge'),
    headline: t('headline'),
    bio: t('bio'),
    metrics: {
      coverageValue: t('metrics.coverageValue'),
      coverageLabel: t('metrics.coverageLabel'),
      defectsValue: t('metrics.defectsValue'),
      defectsLabel: t('metrics.defectsLabel'),
      experienceValue: t('metrics.experienceValue'),
      experienceLabel: t('metrics.experienceLabel'),
    },
    buttons: {
      projects: t('buttons.projects'),
      linkedin: t('buttons.linkedin'),
    }
  };

  return (
    <div className="flex flex-col w-full selection:bg-navy-800 selection:text-navy-100 pb-24">
      <main className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-24 overflow-hidden">
        <LighthouseMedia />
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-start w-full">
          <AnimatedHero translations={heroTranslations} />
        </div>
      </main>

      {/* Injecting New Sections */}
      <About />
      <Experience />
      <Education />
      <CertificationsGrid />
      <FeaturedProjects />
    </div>
  );
}
