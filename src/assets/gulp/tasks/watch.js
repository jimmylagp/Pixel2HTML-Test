'use strict';

var gulp    = require('gulp');
var config  = require('../config');
var helpers = require('../helpers');

gulp.task('watch', function() {

  gulp.watch('src/assets/gulp/config.js', ['default']);

  //static files
  gulp.watch('src/**/*.html', ['main:markup']);

  gulp.watch('src/assets/images/**/*', ['main:images']);
  gulp.watch('src/assets/fonts/**/*', ['main:fonts']);
  gulp.watch('src/assets/icons/**/*', ['main:icons']);

  //scripts
  gulp.watch('src/assets/js/**/*.js', ['main:scripts']);

  //styles
  gulp.watch([
    'src/assets/styles/**/*.scss',
    '!src/assets/styles/vendor/**/*',
  ], ['main:styles', 'vendor:styles']);

  gulp.watch('src/assets/styles/vendor/**/**.scss', ['vendor:bootstrap:styles']);
  gulp.watch('src/assets/styles/vendor/**/**.js', ['vendor:bootstrap:scripts']);
  gulp.watch('src/assets/styles/vendor/**/fonts/**/*', ['vendor:bootstrap:fonts']);

});
