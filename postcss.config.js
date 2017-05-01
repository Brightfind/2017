module.exports = {
  plugins: [
  	require('autoprefixer')({ browsers: ['> 2%', 'IE 9', 'iOS <= 7']})
    ,require('cssnano')
    ,require('postcss-zindex')
    ,require('stylelint')
    //,require('postcss-reporter')
  ]
}