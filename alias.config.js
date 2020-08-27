// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const aliases = {
  "@root": "./",
  "@c": "src/components",
  "@assets": "src/assets",
  "@utils": "src/utils",
  "@views": "src/views",
  "@store": "src/store",
  "@io": "src/io"
};

module.exports = {};

Object.entries(aliases).forEach(([name, alias]) => {
  module.exports[name] = path.resolve(__dirname, alias);
});
