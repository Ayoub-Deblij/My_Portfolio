import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language?.startsWith("fr") ? "fr" : "en";

  return (
    <div className="flex items-center gap-2 rounded-full border border-borderColor bg-surface p-1">
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`rounded-full px-3 py-1.5 text-sm font-medium ${
          currentLanguage === "en"
            ? "bg-gold text-stone-950"
            : "text-muted hover:text-foreground"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => i18n.changeLanguage("fr")}
        className={`rounded-full px-3 py-1.5 text-sm font-medium ${
          currentLanguage === "fr"
            ? "bg-gold text-stone-950"
            : "text-muted hover:text-foreground"
        }`}
      >
        FR
      </button>
    </div>
  );
}

export default LanguageSwitcher;