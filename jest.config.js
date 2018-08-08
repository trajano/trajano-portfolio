const path = require('path')
module.exports = {
    moduleFileExtensions: [
      'js',
      'json',
      'vue'
    ],
    testURL: "https://trajano.net/",
    rootDir: path.resolve(__dirname, './src'),
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)(\\?size=\\d+)?$": "<rootDir>/__mocks__/fileMock.js",
    },
    transform: {
      '^.+\\.js$': 'babel-jest',
      '.*\\.(vue)$': 'vue-jest'
    },
    //snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
    setupFiles: [
      '<rootDir>/icons',
      '<rootDir>/directives'
    ],
    //coverageDirectory: '<rootDir>/test/unit/coverage',
    coverageDirectory: '<rootDir>/../coverage',
    collectCoverageFrom: [
//      '**/*.{js,vue}',
      '**/*.{vue}',
//      "!**/*.spec.ks",
//      '!ld-json.js',
//      '!app.js',
    ],
  }
