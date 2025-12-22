import { PNG } from "https://taisukef.github.io/PNG/PNG.js";
import { JPEG } from "https://code4fukui.github.io/JPEG/JPEG.js";

export const png2jpg = (pngbin, q = undefined) => {
  const img = PNG.decode(pngbin);
  const jpgbin = JPEG.encode(img, q);
  return jpgbin;
};
