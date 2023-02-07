const thonUI = require('./plugins/thon-ui');
const thonUIContent = () => 'node_modules/@thonlabs/ui/**/*.{js,ts,jsx,tsx}';

module.exports = { thonUI: () => thonUI, thonUIContent };
