const path = require('path')
module.exports = {
    moduleFileExtensions: [
      'js',
      'json',
      'vue'
    ],
    rootDir: path.resolve(__dirname, './src'),
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1'
    },
    transform: {
      '^.+\\.js$': 'babel-jest',
      '.*\\.(vue)$': 'vue-jest'
    },
    //snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
    //setupFiles: ['<rootDir>/test/unit/setup'],
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
  