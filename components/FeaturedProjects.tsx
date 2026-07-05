import { getTranslations, getLocale } from "next-intl/server";
import ProjectsFilter from "./ProjectsFilter";

export default async function FeaturedProjects() {
  const t = await getTranslations("Projects");
  const locale = await getLocale();
  
  const projectsData = [
    { 
      key: "project1", 
      slug: "data-platform",
      title: t('items.project1.title'),
      description: t('items.project1.description'),
      tags: t('items.project1.tags'),
      type: "private" as const
    },
    { 
      key: "project2", 
      slug: "lighthouse",
      title: t('items.project2.title'),
      description: t('items.project2.description'),
      tags: t('items.project2.tags'),
      type: "private" as const
    },
    { 
      key: "project3", 
      slug: "open-source-generator",
      title: t('items.project3.title'),
      description: t('items.project3.description'),
      tags: t('items.project3.tags'),
      type: "public" as const
    }
  ];

  const filters = {
    all: t('filters.all'),
    private: t('filters.private'),
    public: t('filters.public')
  };

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto w-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-navy-100 mb-12 tracking-tight text-balance">
        {t('title')}
      </h2>

      <ProjectsFilter 
        locale={locale} 
        projects={projectsData} 
        filters={filters} 
        enterpriseBadge={t('enterpriseBadge')}
      />
    </section>
  );
}
