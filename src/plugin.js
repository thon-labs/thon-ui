const thonUI = require('./plugins/thon-ui');
const thonUIContent = () => 'node_modules/thon-ui/**/*.{js,ts,jsx,tsx}';

module.exports = { thonUI: () => thonUI, thonUIContent };
