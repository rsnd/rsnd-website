// @ts-ignore
const path = require("path");
const withTranspileModules = require("next-transpile-modules");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withImages(
    withTranspileModules({
      webpack(config, options) {
        config.resolve.alias["components"] = path.join(
          __dirname,
          "src/components"
        );
        config.resolve.alias["context"] = path.join(__dirname, "src/context");
        config.resolve.alias["static"] = path.join(__dirname, "static");
        config.resolve.alias["helpers"] = path.join(__dirname, "src/helpers");
        return config;
      },
      transpileModules: ["react-spring", "@babel/runtime"]
    })
  )
);
