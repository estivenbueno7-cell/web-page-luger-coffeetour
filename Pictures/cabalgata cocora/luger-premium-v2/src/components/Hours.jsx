
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n";

export default function Hours() {
  const { t } = useLanguage();
  const hours = [
    "9:00 a. m.",
    "10:00 a. m.",
    "11:00 a. m.",
    "12:00 p. m.",
    "1:00 p. m.",
    "2:00 p. m.",
    "3:00 p. m.",
    "4:00 p. m.",
  ];

  return (
    <section className="schedule section" id="visita">
      <div className="schedule-content" id="horarios">
        <span className="section-kicker">
          {t("visit.kicker")}
        </span>

        <h2 className="display-title">
          {t("visit.title1")}<br /><em>{t("visit.title2")}</em>
        </h2>

        <p className="schedule-description">
          {t("visit.copy")}
        </p>

        <div className="schedule-info">
          <div>
            <span>{t("visit.days")}</span>
            <strong>{t("visit.daysValue")}</strong>
          </div>

          <div>
            <span>{t("visit.hours")}</span>
            <strong>{t("visit.hoursValue")}</strong>
          </div>
        </div>

        <p className="transport-note">{t("visit.note")}</p>
        <div className="schedule-hours">
          {hours.map((hour) => (
            <div className="schedule-hour" key={hour}>
              {hour}
            </div>
          ))}
        </div>

        <a
          className="button button--dark"
          href="https://wa.me/573117957481?text=Hola%2C%20quiero%20reservar%20una%20visita%20a%20Finca%20Luger"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("visit.book")}
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
