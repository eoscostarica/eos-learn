const gulp = require('gulp')
var deploy = require('gulp-gh-pages');
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


/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./public/**/*")
    .pipe(deploy())
});

gulp.task('clear-cache', () => $.cache.clearAll())
