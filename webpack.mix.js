// webpack.mix.js

const mix = require("laravel-mix");

mix
  .js("src/index.js", "dist")
  .react()
  .postCss("src/app.css", "dist", [
    require("postcss-import"),
    require("tailwindcss"),
  ]);
