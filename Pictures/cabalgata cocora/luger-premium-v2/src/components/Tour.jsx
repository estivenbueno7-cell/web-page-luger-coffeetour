import {
  ArrowUpRight,
  Coffee,
  Leaf,
  MapPin,
  Sprout,
  Sun,
  Waves,
} from "lucide-react";

import { useLanguage } from "../i18n";

const highlights = [
  {
    icon: Leaf,
    number: "01",
    title: "tour.nature",
    text: "tour.natureCopy",
  },
  {
    icon: Coffee,
    number: "02",
    title: "tour.coffee",
    text: "tour.coffeeCopy",
  },
  {
    icon: Sprout,
    number: "03",
    title: "tour.tradition",
    text: "tour.traditionCopy",
  },
];

const details = [
  [MapPin, "tour.detailLocation", "tour.detailLandscape"],
  [Sun, "tour.detailPace", "tour.detailNature"],
  [Waves, "tour.detailSlow", "tour.detailEnjoy"],
];

export default function Experience() {
  const { t } = useLanguage();
  return (
    <>
      <section
        className="intro section scroll-reveal"
        id="experiencia"
      >
        <div className="section-kicker">
          {t("tour.kicker")}
        </div>

        <div className="intro-grid">
          <h2 className="display-title">
            {t("tour.title1")}<br /><em>{t("tour.title2")}</em>
          </h2>

          <div className="intro-copy">
            <p>
              {t("tour.copy")}
            </p>

            <a className="under-link" href="#finca">
              {t("tour.link")}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="highlight-grid">
          {highlights.map(
            ({ icon: Icon, number, title, text }) => (
              <article className="highlight" key={title}>
                <span className="highlight-number">
                  {number}
                </span>

                <div className="icon-box">
                  <Icon size={21} strokeWidth={1.5} />
                </div>

                <div>
                  <h3>{t(title)}</h3>
                  <p>{t(text)}</p>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      <section
        className="story section scroll-reveal"
        id="finca"
      >
        <div className="story-image">
          <img
            src="https://res.cloudinary.com/f1omymbg/image/upload/v1791648658/images.jpg"
            alt="Paisaje de la finca Luger"
            loading="lazy"
          />

          <div className="image-note">
            <span>{t("farm.note")}</span>
            <strong>LUGER</strong>
          </div>
        </div>

        <div className="story-content">
          <div className="section-kicker">
            {t("farm.kicker")}
          </div>

          <h2 className="display-title">
            {t("farm.title1")}<br /><em>{t("farm.title2")}</em>
          </h2>

          <p className="large-copy">
            {t("farm.copy")}
          </p>

          <div className="facts">
            {details.map(([Icon, title, text]) => (
              <div key={title}>
                <Icon size={18} />

                <span>
                  <strong>{t(title)}</strong>
                  <small>{t(text)}</small>
                </span>
              </div>
            ))}
          </div>

          <a
            className="button button--dark"
            href="#visita"
          >
            {t("farm.visit")}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section
        className="manifesto scroll-reveal"
        aria-label="Esencia de Luger"
      >
        <div className="manifesto-inner">
          <span className="quote-mark"></span>

          <p>
        
          </p>

          <span className="manifesto-line">
         
          </span>
        </div>
      </section>
    </>
  );
}