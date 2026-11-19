import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  const categories = [
    {
      title: t("skills.categories.frontend"),
      items: ["React.js", "JavaScript", "Tailwind CSS", "Responsive Design", "Hooks", "Vite"],
    },
    {
      title: t("skills.categories.backend"),
      items: ["Laravel", "PHP", "REST API", "JWT", "Middleware", "Eloquent ORM"],
    },
    {
      title: t("skills.categories.database"),
      items: ["MySQL", "MongoDB", "SQL", "Migrations", "Schema Design"],
    },
    {
      title: t("skills.categories.ai"),
      items: ["Python", "FastAPI", "InsightFace", "Biometric Workflows", "Microservices"],
    },
    {
      title: t("skills.categories.tools"),
      items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Railway"],
    },
    {
      title: t("skills.categories.workflow"),
      items: ["Clean Architecture", "Role-Based Access", "API Integration", "Debugging", "UI Thinking"],
    },
  ];

  return (
    <section id="skills" className="section-space border-t border-borderColor bg-background">
      <div className="container-app">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            {t("skills.eyebrow")}
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">{t("skills.title")}</h2>
          <p className="mt-6 text-lg leading-8 text-muted">{t("skills.description")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div key={category.title} className="card-premium p-8">
              <h3 className="mb-6 text-2xl font-semibold text-foreground">{category.title}</h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-borderColor bg-surface2 px-4 py-2 text-sm font-medium text-muted hover:border-gold hover:text-gold"
                  >
                    {item}
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

export default Skills;