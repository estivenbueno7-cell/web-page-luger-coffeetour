import { ArrowDownRight, Leaf, Heart } from "lucide-react";
import { useLanguage } from "../i18n";

export default function History() {
  const { t } = useLanguage();
  return (
    <section className="history" id="historia">
      <div className="history-container">

        <div className="history-visual">
          <div className="history-image">
            <img
              src="https://res.cloudinary.com/f1omymbg/image/upload/v1791504535/Captura_de_pantalla_2026-10-08_183836.png"
              alt="Finca Luger, tradición cafetera en el Quindío"
              loading="lazy"
            />

            <div className="history-image-shade" />

            <div className="history-image-caption">
              <span>{t("history.imageLabel")}</span>
              <strong>{t("history.imagePlace")}</strong>
            </div>
          </div>

          <div className="history-side-note">
            <span>{t("history.side")}</span>
          </div>

          <div className="history-stamp">
            <Leaf size={20} strokeWidth={1.2} />
            <span>{t("history.earth")}</span>
            <span>{t("history.familyTradition")}</span>
            <span>{t("history.family")}</span>
          </div>
        </div>

        <div className="history-content">
          <div className="history-eyebrow">
            <span className="history-eyebrow-line" />
            <span>{t("history.eyebrow")}</span>
          </div>

          <h2 className="history-title">
            {t("history.title1")}<br />{t("history.title2")}<br /><em>{t("history.title3")}</em>
          </h2>

          <p className="history-lead">
            {t("history.lead")}
            <br />
            <strong>{t("history.leadStrong")}</strong>
          </p>

          <div className="history-copy">
            <p>
              {t("history.p1")}
            </p>

            <p>
              {t("history.p2")}
            </p>

            <p>
              {t("history.p3")}
            </p>
          </div>

          <div className="history-quote">
            <Heart size={18} strokeWidth={1.3} />
            <p>
              {t("history.quote1")}<br />{t("history.quote2")}
            </p>
          </div>

          <a className="history-link" href="#visita">
            <span>{t("history.link")}</span>
            <ArrowDownRight size={19} strokeWidth={1.5} />
          </a>

          <div className="history-signature">
            <span className="history-signature-name">LUGER</span>
            <span className="history-signature-caption">
              {t("history.signature")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}