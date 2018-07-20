const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')
const $ = gulpLoadPlugins()

const imageminOpts = [
  $.imagemin.gifsicle({interlaced: true}),
  $.imagemin.jpegtran({progressive: true}),
  $.imagemin.optipng({optimizationLevel: 5}),
  $.imagemin.svgo({plugins: [{removeViewBox: true}]})
]

gulp.task('optimize-images', () => {
  return gulp.src('static-src/img/**/*')
    .pipe($.cache($.imagemin(imageminOpts)))
    .pipe(gulp.dest('static/img'))
})

gulp.task('deploy', () => {
  return gulp.src('./public/**/*')
    .pipe($.ghPages())
})

gulp.task('clear-cache', () => $.cache.clearAll())
