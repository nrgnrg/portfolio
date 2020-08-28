module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest"
  },
  moduleNameMapper: {
    "@root(.*)$": "<rootDir>/$1",
    "@c(.*)$": "<rootDir>/src/components/$1",
    "@assets(.*)$": "<rootDir>/src/assets/$1",
    "@utils(.*)$": "<rootDir>/src/utils/$1",
    "@views(.*)$": "<rootDir>/src/views/$1",
    "@store(.*)$": "<rootDir>/src/store/$1",
    "@io(.*)$": "<rootDir>/src/io/$1"
  }
};
