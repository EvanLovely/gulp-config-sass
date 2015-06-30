'use strict';
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var scsslint = require('gulp-scss-lint');

module.exports = function (gulp, config, tasks) {
  if (tasks.watch) {
    tasks.watch.push('watch:css');
  }
  if (tasks.compile) {
    tasks.compile.push('css');
  }
  if (tasks.validate) {
    tasks.validate.push('scsslint');
  }
  
  var scssDir = config.scssDir || "scss/";
  var cssDir = config.cssDir || "./css";
  var autoprefixerOptions = config.autoprefixerOptions || {
    "browsers": [
      'last 2 versions'
    ]
  };
  var scsslintOptions = config.scsslintOptions || {
    'config': '.scss-lint.yml',
    'bundleExec': true
  };
  
  gulp.task('css', function () {
    return gulp.src(scssDir + '**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError))
      .pipe(postcss(
        [
          autoprefixer(autoprefixerOptions)
        ]
      ))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(cssDir));
  });

  gulp.task('watch:css', ['css'], function () {
    return gulp.watch(scssDir + '**/*.scss', [
      'css',
      'scsslint'
    ]);
  });

  gulp.task('scsslint', function () {
    return gulp.src(scssDir + '**/*.scss')
      .pipe(scsslint(scsslintOptions));
  });

};
