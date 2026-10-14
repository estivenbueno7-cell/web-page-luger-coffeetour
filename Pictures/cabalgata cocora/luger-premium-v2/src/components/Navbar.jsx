import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cld, ASSETS } from "../cloudinary";
import { useLanguage } from "../i18n";
import { Languages } from "lucide-react";

const LINKS = [
  { label: "nav.experience", href: "#experiencia" },
  { label: "nav.farm", href: "#finca" },
  { label: "nav.gallery", href: "#galeria" },
  { label: "nav.visit", href: "#visita" },
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <nav className="nav-inner" aria-label={language === "es" ? "Navegación principal" : "Main navigation"}>

        {/* LOGO + MARCA */}
        <a
          className="brand"
          href="#inicio"
          onClick={() => setOpen(false)}
        >
          <img
            className="brand-logo"
            src={cld.image(ASSETS.logo, {
              w: 120,
              h: 120,
              c: "fit",
              f: "auto",
              q: "auto",
            })}
            alt="LUGER Finca & Experiencia"
          />

          <span>
            <strong>LUG.02ER</strong>
            <small>{t("hero.brand")}</small>
          </span>
        </a>

        {/* NAVEGACIÓN DESKTOP */}
        <div className="nav-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {t(link.label)}
            </a>
          ))}
        </div>

        {/* CTA DESKTOP */}
        <a className="nav-cta" href="#visita">
          {t("nav.plan")}
          <ArrowUpRight size={16} />
        </a>

        <button className="language-toggle" onClick={() => setLanguage(language === "es" ? "en" : "es")} aria-label={language === "es" ? "Switch to English" : "Cambiar a español"} title={language === "es" ? "Switch to English" : "Cambiar a español"}>
          <Languages size={16} /><span>{language === "es" ? "EN" : "ES"}</span>
        </button>

        {/* BOTÓN MOBILE */}
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? t("nav.close") : t("nav.open")}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MENÚ MOBILE */}
      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {t(link.label)}
          </a>
        ))}

        <button className="language-toggle language-toggle--mobile" onClick={() => { setLanguage(language === "es" ? "en" : "es"); setOpen(false); }}>
          <Languages size={16} /> {language === "es" ? "English" : "Español"}
        </button>
        <a
          className="mobile-cta"
          href="#visita"
          onClick={() => setOpen(false)}
        >
          {t("nav.plan")}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
}