/** @type {import('postcss-load-config').Config} */
if (process.env.NODE_ENV === 'production') {
  module.exports = {
    /* eslint-disable global-require, import/no-extraneous-dependencies */
    plugins: [require('autoprefixer'), require('postcss-nested'), require('cssnano')]
  }
} else {
  module.exports = {
    plugins: [require('postcss-nested')]
    /* eslint-enable global-require, import/no-extraneous-dependencies */
  }
}
