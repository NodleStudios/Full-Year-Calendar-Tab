// webpack.mix.js

const mix = require("laravel-mix");

mix
  .js("src/app.js", "dist")
  .postCss("src/app.css", "dist", [
    require("postcss-import"),
    require("tailwindcss"),
  ]);