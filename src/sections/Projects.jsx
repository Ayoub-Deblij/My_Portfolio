import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: "01",
      title: "InsuManage",
      year: "2026",
      description: t("projects.items.insumanage.description"),
      stack: ["Laravel", "React.js", "MySQL", "Chart.js", "JWT", "REST API"],
      github: "https://github.com/Ayoub-Deblij/mon_projet",
      demo: null,
      private: false,
    },
    {
      id: "02",
      title: "Attendance AI",
      year: "2026",
      description: t("projects.items.attendanceAI.description"),
      stack: ["Laravel 11", "React.js", "Python", "FastAPI", "AI", "Microservices"],
      github: null,
      demo: null,
      private: true,
    },
    {
      id: "03",
      title: "FlowState",
      year: "2026",
      description: t("projects.items.flowstate.description"),
      stack: ["Laravel", "React.js", "MySQL", "Ollama", "JWT", "SSE"],
      github: "https://github.com/Ayoub-Deblij/flowstate",
      demo: null,
      private: false,
    },
  ];

  return (
    <section
      id="projects"
      className="section-space border-t border-borderColor bg-background"
    >
      <div className="container-app">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            {t("projects.eyebrow")}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
            {t("projects.title")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            {t("projects.description")}
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="card-premium overflow-hidden border border-borderColor p-8 md:p-10"
            >
              <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
                <div className="flex-1">
                  <div className="mb-5 flex items-center gap-3 text-sm text-gold">
                    <span>{project.id}</span>
                    <span className="text-borderColor">/</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-foreground">
                    {project.title}
                  </h3>

                  {project.private && (
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {t("projects.labels.privateCaseStudy")}
                    </p>
                  )}

                  <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-goldBorder bg-goldSoft px-4 py-2 text-sm font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex min-w-[220px] flex-col justify-center gap-4">
                  {project.private ? (
                    <>
                      <div className="rounded-2xl border border-goldBorder bg-goldSoft px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.15em] text-gold">
                        {t("projects.labels.privateProject")}
                      </div>

                      <div className="rounded-2xl border border-borderColor bg-surface2 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.15em] text-muted">
                        {t("projects.labels.notPublic")}
                      </div>
                    </>
                  ) : (
                    <>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-2xl bg-primary px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.15em] text-primaryText hover:-translate-y-0.5"
                        >
                          {t("projects.labels.github")}
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-2xl border border-goldBorder bg-surface px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.15em] text-foreground hover:border-gold hover:text-gold"
                        >
                          {t("projects.labels.liveDemo")}
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;