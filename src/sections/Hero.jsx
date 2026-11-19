import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative overflow-hidden bg-background section-space">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-100px] top-[80px] h-72 w-72 rounded-full bg-gold/10 blur-3xl"></div>
        <div className="absolute right-[-80px] top-1/3 h-80 w-80 rounded-full bg-gold/10 blur-3xl"></div>
      </div>

      <div className="container-app relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.45em] text-gold">
            {t("hero.badge")}
          </p>

          <h1 className="text-5xl font-black leading-tight text-foreground md:text-7xl lg:text-8xl">
            {t("hero.titleFirst")}{" "}
            <span className="gold-gradient-text">{t("hero.titleLast")}</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted md:text-xl">
            {t("hero.description")}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primaryText shadow-gold hover:-translate-y-0.5"
            >
              {t("hero.ctaProjects")}
            </a>

            <a
              href="#contact"
              className="rounded-full border border-goldBorder bg-surface px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground hover:border-gold hover:text-gold"
            >
              {t("hero.ctaContact")}
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="card-premium p-6 gold-ring">
              <h3 className="text-3xl font-bold text-foreground">3+</h3>
              <p className="mt-2 text-sm text-muted">{t("hero.stats.projects")}</p>
            </div>
            <div className="card-premium p-6 gold-ring">
              <h3 className="text-3xl font-bold text-foreground">10+</h3>
              <p className="mt-2 text-sm text-muted">{t("hero.stats.technologies")}</p>
            </div>
            <div className="card-premium p-6 gold-ring">
              <h3 className="text-3xl font-bold text-foreground">AI</h3>
              <p className="mt-2 text-sm text-muted">{t("hero.stats.ai")}</p>
            </div>
            <div className="card-premium p-6 gold-ring">
              <h3 className="text-3xl font-bold text-foreground">API</h3>
              <p className="mt-2 text-sm text-muted">{t("hero.stats.api")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;