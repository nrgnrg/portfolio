// eslint-disable-next-line @typescript-eslint/no-var-requires
const aliasConfig = require("./alias.config");

module.exports = {
  pages: {
    index: {
      entry: "src/main.ts",
      title: "Richard Cooke"
    }
  },

  chainWebpack: config => {
    // alias config
    Object.entries(aliasConfig).forEach(([name, alias]) => {
      config.resolve.alias.set(name, alias);
    });
  },

  // Allow testing on mobile
  devServer: {
    disableHostCheck: true
  }
};
