const CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "f1omymbg";

const VIDEO_ID =
  import.meta.env.VITE_CLOUDINARY_VIDEO_ID || "";

const encodeId = (id) =>
  id.split("/").map(encodeURIComponent).join("/");

export const cld = {
  image: (publicId, transforms = {}) => {
    const defaults = {
      f: "auto",
      q: "auto",
    };

    const params = Object.entries({
      ...defaults,
      ...transforms,
    })
      .filter(
        ([, value]) =>
          value !== undefined &&
          value !== null &&
          value !== ""
      )
      .map(([key, value]) => `${key}_${value}`)
      .join(",");

    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${params}/${encodeId(
      publicId
    )}`;
  },

  video: (publicId = VIDEO_ID) =>
    publicId
      ? `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto/${encodeId(
          publicId
        )}`
      : "",
};

export const ASSETS = {
  logo: "Copilot_20261008_100310.png",

  verticals: [
    "Lugar-coffee-tour-Salento-Colombia-patacones-with-tomato-salsa-19-678x1024_1.webp",
    "789325015_1754285452478237_6950985727657321181_n.jpg",
    "images.jpg",
    "833573047_1808058667195372_8997546420150065204_n.jpg",
  ],

  horizontals: [
    "834799654_4540140172941851_828070419355188174_n.jpg",
    "829527055_1411758093838557_1601593589093691199_n.jpg",
    "790315708_1465437998759742_7948224593008606439_n.jpg",
    "caption.jpg",
    "825260203_1109946608161106_3329099943820677195_n_1.jpg",
    "833037950_986271481199649_5496375758737721166_n.jpg",
    "831541887_1804422750798050_6982070444471316273_n.jpg",
    "833197265_1641048441143127_1872054996275573364_n.jpg",
    "836405242_975493285629483_5591764421041536904_n.jpg",
    "838327827_1115202094537935_976312424726439732_n.jpg",
  ],
};