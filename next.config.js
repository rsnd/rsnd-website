// @ts-ignore
const path = require("path");
const withTranspileModules = require("next-transpile-modules");

module.exports = withTranspileModules({
  webpack(config, options) {
    config.resolve.alias["components"] = path.join(__dirname, "src/components");
    config.resolve.alias["context"] = path.join(__dirname, "src/context");
    return config;
  },
  transpileModules: ["react-spring", "@babel/runtime"]
});
