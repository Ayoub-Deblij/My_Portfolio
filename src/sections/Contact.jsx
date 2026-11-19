import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-space border-t border-borderColor bg-background">
      <div className="container-app">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            {t("contact.eyebrow")}
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">{t("contact.title")}</h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
            {t("contact.description")}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <a href="mailto:ayoub@example.com" className="card-premium p-6 hover:border-goldBorder">
              <h3 className="text-lg font-semibold text-foreground">{t("contact.cards.email")}</h3>
              <p className="mt-2 text-sm text-muted">ayoubdeblij090@gmail.com</p>
            </a>

            <a
              href="https://github.com/Ayoub-Deblij"
              target="_blank"
              rel="noreferrer"
              className="card-premium p-6 hover:border-goldBorder"
            >
              <h3 className="text-lg font-semibold text-foreground">{t("contact.cards.github")}</h3>
              <p className="mt-2 text-sm text-muted">github.com/Ayoub-Deblij</p>
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="card-premium p-6 hover:border-goldBorder"
            >
              <h3 className="text-lg font-semibold text-foreground">{t("contact.cards.linkedin")}</h3>
              <p className="mt-2 text-sm text-muted">www.linkedin.com/in/ayoub-deblij</p>
            </a>
          </div>

          <div className="mt-12">
            <a
              href="#home"
              className="inline-flex rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primaryText shadow-gold hover:-translate-y-0.5"
            >
              {t("contact.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;