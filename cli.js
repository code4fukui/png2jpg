import { png2jpg } from "./png2jpg.js";
import { EXT } from "https://code4fukui.github.io/EXT/EXT.js";

if (Deno.args.length == 0) {
  console.log("png2jpg [png file] (quality)");
  Deno.exit(1);
}
const fn = Deno.args[0];
const q = Deno.args[1];
const jpgfn = EXT.set(fn, "jpg");
const pngbin = await Deno.readFile(fn);
const jpgbin = png2jpg(pngbin, q);
await Deno.writeFile(jpgfn, jpgbin);
