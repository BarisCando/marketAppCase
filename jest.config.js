module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation|react-redux|@react-native-async-storage/async-storage)',
  ],
  setupFiles: ['./setupTests.js'],
};
