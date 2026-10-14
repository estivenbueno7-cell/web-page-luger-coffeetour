
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Tour";
import Gallery from "./components/Gallery";
import Visit from "./components/Hours";
import Footer from "./components/Footer";
import History from "./components/History";
import { LanguageProvider, useLanguage } from "./i18n";

function AppContent() {
  const { t } = useLanguage();
  useEffect(() => {
    const items = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <Hero />

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>
              {t("ticker")}
            </span>

            <span>
              {t("ticker")}
            </span>
          </div>
        </div>

        <Experience />
        <Gallery />
        <History />
        <Visit />
      </main>

      <section className="legal-note section" id="privacidad" aria-labelledby="legal-title">
        <div className="section-kicker">{t("legal.kicker")}</div>
        <h2 className="legal-title" id="legal-title">{t("legal.title")}</h2>
        <p>{t("legal.copy")}</p>
        <h3 id="condiciones">{t("footer.terms")}</h3>
        <p>{t("legal.terms")}</p>
      </section>
      <Footer />
    </div>
  );
}

export default function App() { return <LanguageProvider><AppContent /></LanguageProvider>; }
