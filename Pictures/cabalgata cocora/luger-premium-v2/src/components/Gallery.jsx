import { ArrowUpRight } from "lucide-react";
import { cld, ASSETS } from "../cloudinary";
import { useLanguage } from "../i18n";

const galleryItems = [
  {
    image: ASSETS.horizontals[0],
    title: "gallery.coffee",
    category: "gallery.catCoffee",
    className: "gallery-card gallery-card--main",
  },
  {
    image: ASSETS.horizontals[1],
    title: "gallery.landscape",
    category: "gallery.catLandscape",
    className: "gallery-card gallery-card--small",
  },
  {
    image: ASSETS.horizontals[2],
    title: "gallery.tradition",
    category: "gallery.catFarm",
    className: "gallery-card gallery-card--small",
  },
  {
    image: ASSETS.horizontals[3],
    title: "gallery.flavours",
    category: "gallery.catFood",
    className: "gallery-card gallery-card--medium",
  },
  {
    image: ASSETS.horizontals[4],
    title: "gallery.process",
    category: "gallery.catProcess",
    className: "gallery-card gallery-card--medium",
  },
  {
    image: ASSETS.horizontals[5],
    title: "gallery.nature",
    category: "gallery.catQuindio",
    className: "gallery-card gallery-card--wide",
  },
  {
    image: ASSETS.horizontals[6],
    title: "gallery.authentic",
    category: "gallery.catLuger",
    className: "gallery-card gallery-card--wide",
  },
];

function Gallery() {
  const { t } = useLanguage();
  return (
    <section className="gallery" id="galeria">
      <div className="gallery-container">

        {/* HEADER */}
        <div className="gallery-header">
          <div>
            <span className="gallery-kicker">
              {t("gallery.kicker")}
            </span>

            <h2 className="gallery-title">
              {t("gallery.title1")}<br /><em>{t("gallery.title2")}</em>
            </h2>
          </div>

          <div className="gallery-intro">
            <p>
              {t("gallery.copy")}
            </p>

            <span className="gallery-counter">
              07 MOMENTS
            </span>
          </div>
        </div>

        {/* COLLAGE */}
        <div className="gallery-collage">
          {galleryItems.map((item, index) => (
            <figure
              className={item.className}
              key={`${item.image}-${index}`}
            >
              <img
                src={item.image.startsWith("http") ? item.image : cld.image(item.image, {
                  w: 1800, h: 1400, c: "fill", g: "auto", f: "auto", q: "auto",
                })}
                alt={t(item.title)}
                loading={index === 0 ? "eager" : "lazy"}
              />

              <div className="gallery-card-overlay" />

              <div className="gallery-card-content">
                <span>
                  {String(index + 1).padStart(2, "0")} / 07
                </span>

                <div>
                  <small>{t(item.category)}</small>
                  <h3>{t(item.title)}</h3>
                </div>

                <ArrowUpRight size={19} strokeWidth={1.5} />
              </div>
            </figure>
          ))}
        </div>

        {/* FOOTER */}
        <div className="gallery-footer">
          <span>
            {t("gallery.footer")}
          </span>

          <a href="#visita">
            {t("gallery.link")}
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Gallery;