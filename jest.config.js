module.exports = {
    moduleFileExtensions: [
      'js',
      'json',
      'vue'
    ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
      '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
      '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
    //setupFiles: ['<rootDir>/test/unit/setup'],
    coverageDirectory: '<rootDir>/test/unit/coverage',
    collectCoverageFrom: [
      'src/**/*.{js,vue}',
      '!src/icons.js',
      '!src/ld-json.js',
      '!src/app.js',
      '!**/node_modules/**'
    ]
  }
  