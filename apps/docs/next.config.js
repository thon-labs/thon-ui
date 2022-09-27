const withTM = require('next-transpile-modules')(['thon-ui']);
const { withThon } = require('thon/build/next');

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, f) => f(y), x);

module.exports = pipe(
  withTM,
  withThon
)({
  reactStrictMode: true,
});
