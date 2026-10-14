
import { useLanguage } from "../i18n";
import {
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Camera,
  Leaf,
} from "lucide-react";

const WHATSAPP =
  "https://wa.me/573117957481?text=Hola%20Luger%2C%20quiero%20informacion%20para%20visitar%20la%20finca";

const INSTAGRAM = "https://instagram.com/coffeetourluger?vrfl=NnZ4bDZ5aXMxbXF3";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer" id="contacto">
      <div className="footer-container">

        {/* Invitación */}
        <div className="footer-invitation">
          <div className="footer-invitation-copy">
            <span className="footer-kicker">
              {t("footer.kicker")}
            </span>

            <h2>
              {t("footer.title1")}<br /><em>{t("footer.title2")}</em>
            </h2>
          </div>

          <a
            className="footer-cta"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{t("footer.plan")}</span>
            <ArrowUpRight size={19} />
          </a>

          <div className="footer-decoration">
            <Leaf size={76} strokeWidth={0.65} />
          </div>
        </div>

        {/* Contenido principal */}
        <div className="footer-main">

          <div className="footer-brand-column">
            <a
              className="footer-brand"
              href="#inicio"
              aria-label="Luger, volver al inicio"
            >
              <span className="footer-brand-symbol">
                <Leaf size={23} strokeWidth={1.2} />
              </span>

              <span className="footer-brand-text">
                <strong>LUGER</strong>
                <small>{t("footer.tagline")}</small>
              </span>
            </a>

            <p className="footer-description">
              {t("footer.description")}
            </p>

            <div className="footer-location">
              <MapPin size={16} strokeWidth={1.5} />

              <span>
                Quindío, Colombia
                <small>{t("footer.locationSub")}</small>
              </span>
            </div>
          </div>

          <div className="footer-column">
            <span className="footer-column-title">
              {t("footer.explore")}
            </span>

            <a href="#inicio">{t("footer.home")}</a>
            <a href="#historia">{t("footer.story")}</a>
            <a href="#galeria">{t("footer.experience")}</a>
            <a href="#horarios">{t("footer.visit")}</a>
          </div>

          <div className="footer-column footer-contact-column">
            <span className="footer-column-title">
              {t("footer.contact")}
            </span>

            <p>
              {t("footer.contactCopy")}
            </p>

            <a
              className="footer-contact-link"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} />
              WhatsApp
              <ArrowUpRight size={15} />
            </a>

            <a
              className="footer-social-link"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Camera size={18} />
              Instagram
              <ArrowUpRight size={14} />
            </a>
          </div>

        </div>

        {/* Franja inferior */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} LUGER.
            {t("footer.rights")}
          </span>

          <span className="footer-bottom-center">
            {t("footer.roots")}
          </span>

          <div className="footer-legal-links"><a href="#privacidad">{t("footer.privacy")}</a><a href="#condiciones">{t("footer.terms")}</a></div>
          <a href="#inicio">{t("footer.top")}</a>
        </div>

      </div>
    </footer>
  );
}