import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar({ theme, toggleTheme }) {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b border-borderColor bg-background/80 backdrop-blur-xl">
      <div className="container-app flex items-center justify-between py-4">
        <a href="#home" className="text-lg font-semibold tracking-wide text-foreground">
          Ayoub <span className="gold-gradient-text">Deblij</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm text-muted hover:text-gold">{t("nav.home")}</a>
          <a href="#about" className="text-sm text-muted hover:text-gold">{t("nav.about")}</a>
          <a href="#projects" className="text-sm text-muted hover:text-gold">{t("nav.projects")}</a>
          <a href="#skills" className="text-sm text-muted hover:text-gold">{t("nav.skills")}</a>
          <a href="#contact" className="text-sm text-muted hover:text-gold">{t("nav.contact")}</a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}
  
export default Navbar;