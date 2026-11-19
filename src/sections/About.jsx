import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  const highlights = [
    {
      title: t("about.highlights.0.title"),
      description: t("about.highlights.0.description"),
    },
    {
      title: t("about.highlights.1.title"),
      description: t("about.highlights.1.description"),
    },
    {
      title: t("about.highlights.2.title"),
      description: t("about.highlights.2.description"),
    },
    {
      title: t("about.highlights.3.title"),
      description: t("about.highlights.3.description"),
    },
  ];

  return (
    <section id="about" className="section-space border-t border-borderColor bg-background">
      <div className="container-app">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold">
              {t("about.eyebrow")}
            </p>

            <h2 className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              {t("about.title")}
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted">
              {t("about.paragraph1")}
            </p>

            <p className="mt-6 text-lg leading-8 text-muted">
              {t("about.paragraph2")}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="card-premium p-6">
                <h3 className="text-3xl font-bold text-gold">3+</h3>
                <p className="mt-2 text-sm text-muted">{t("about.metrics.projects")}</p>
              </div>

              <div className="card-premium p-6">
                <h3 className="text-3xl font-bold text-gold">Full-Stack</h3>
                <p className="mt-2 text-sm text-muted">{t("about.metrics.specialization")}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="card-premium p-8 hover:border-goldBorder">
                <h3 className="mb-3 text-2xl font-semibold text-foreground">{item.title}</h3>
                <p className="leading-7 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;