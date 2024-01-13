/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    require('cssnano')
  ]
}

module.exports = config