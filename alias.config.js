// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const aliases = {
  "@root": "./",
  "@src": "src",
  "@c": "src/components",
  "@views": "src/views",
  "@assets": "src/assets",
  "@utils": "src/utils",
  "@store": "src/store",
  "@io": "src/io"
};

module.exports = {};

Object.entries(aliases).forEach(([name, alias]) => {
  module.exports[name] = path.resolve(__dirname, alias);
});
