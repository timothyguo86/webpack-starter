/** @type {import('postcss-load-config').Config} */
if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
      require('autoprefixer'),
      require('postcss-nested'),
      require('cssnano')
    ]
  }
} else {
  module.exports = {
    plugins: [require('postcss-nested')]
  }
}
