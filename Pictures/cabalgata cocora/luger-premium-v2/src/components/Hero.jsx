import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { cld, ASSETS } from "../cloudinary";
import { useLanguage } from "../i18n";

const video = cld.video();

const fallback = cld.image(ASSETS.horizontals[0], {
  w: 2400,
  c: "fill",
  g: "auto",
});

const WHATSAPP =
  "https://wa.me/573117957481?text=Hola%20Luger%2C%20quiero%20conocer%20la%20finca%20y%20saber%20sobre%20la%20experiencia";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero" id="inicio">

      <div className="hero-media">
        {video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={fallback}
            preload="metadata"
            aria-hidden="true"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={fallback}
            alt="Paisaje de la finca Luger"
          />
        )}
      </div>

      <div className="hero-overlay" />
      <div className="hero-grain" />

      <div className="hero-content">

        <div className="eyebrow reveal">
          <span />
          {t("hero.eyebrow")}
        </div>

        <h1 className="hero-title reveal delay-1">
          {t("hero.title1")}
          <br />
          <em>{t("hero.title2")}</em>
        </h1>

        <p className="hero-copy reveal delay-2">
          {t("hero.copy")}
        </p>

        <div className="hero-actions reveal delay-3">

          <a
            className="button button--light"
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
          >
            {t("hero.plan")}
            <ArrowUpRight size={18} />
          </a>

          <a className="text-link" href="#galeria">
            <span className="play-icon">
              <Play size={13} fill="currentColor" />
            </span>
            {t("hero.explore")}
          </a>

        </div>
      </div>

      <div className="hero-stamp">
        <span>{t("hero.stamp")}</span>

        <strong>
          LU
          <br />
          GER
        </strong>

        <small>Quindío · Colombia</small>
      </div>

      <div className="hero-bottom">
        <span>{t("hero.bottom")}</span>

        <a
          href="#experiencia"
          aria-label="Bajar a la experiencia"
        >
          <ArrowDown size={20} />
        </a>

        <span>01 / 04</span>
      </div>

    </section>
  );
}