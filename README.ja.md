# png2jpg

PNG画像をJPEGに変換するシンプルなコマンドラインツールおよびDenoモジュールです。

## 要件

- [Deno](https://deno.land) ランタイム

## 使い方

### コマンドラインインターフェース (CLI)

Webから直接スクリプトを実行できます。これにより、同じディレクトリに`.jpg`拡張子の新しいファイルが作成されます（例: `image.png` → `image.jpg`）。

```sh
deno run -A https://code4fukui.github.io/png2jpg/cli.js image.png
```

オプションでJPEGの品質（0〜100の数値）を指定することもできます。

```sh
deno run -A https://code4fukui.github.io/png2jpg/cli.js image.png 80
```

### Denoモジュールとして

Denoプロジェクト内で使用するには、`png2jpg`関数をインポートします。

```js
import { png2jpg } from "https://code4fukui.github.io/png2jpg/png2jpg.js";

// PNGファイルをUint8Arrayとして読み込む
const pngbin = await Deno.readFile("image.png");

// 品質90でPNGデータをJPEGデータに変換する
const quality = 90;
const jpgbin = png2jpg(pngbin, quality);

// 新しいJPEGファイルを書き込む
await Deno.writeFile("image.jpg", jpgbin);
```

関数のシグネチャは `png2jpg(pngbin: Uint8Array, quality?: number): Uint8Array` です。

## 依存関係

このツールは以下のライブラリを利用して構築されています。

- [PNG.js](https://github.com/taisukef/PNG)
- [JPEG.js](https://github.com/code4fukui/JPEG)

## ライセンス

[MIT](LICENSE)
