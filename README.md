# png2jpg

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple command-line tool and Deno module to convert PNG images to JPEG.

## Requirements

- [Deno](https://deno.land) runtime

## Usage

### Command-Line Interface (CLI)

Run the script directly from the web. This will create a new file with a `.jpg` extension in the same directory (e.g., `image.png` -> `image.jpg`).

```sh
deno run -A https://code4fukui.github.io/png2jpg/cli.js image.png
```

You can also specify an optional JPEG quality setting (a number from 0 to 100).

```sh
deno run -A https://code4fukui.github.io/png2jpg/cli.js image.png 80
```

### As a Deno Module

Import the `png2jpg` function to use it within your Deno project.

```js
import { png2jpg } from "https://code4fukui.github.io/png2jpg/png2jpg.js";

// Read a PNG file into a Uint8Array
const pngbin = await Deno.readFile("image.png");

// Convert the PNG data to JPEG data with a quality of 90
const quality = 90;
const jpgbin = png2jpg(pngbin, quality);

// Write the new JPEG file
await Deno.writeFile("image.jpg", jpgbin);
```

The function signature is `png2jpg(pngbin: Uint8Array, quality?: number): Uint8Array`.

## Dependencies

This tool is built upon these libraries:

- [PNG.js](https://github.com/taisukef/PNG)
- [JPEG.js](https://github.com/code4fukui/JPEG)

## License

[MIT](LICENSE)