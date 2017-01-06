'use strict';


var gulp    = require('gulp');
var config  = require('../config');
var helpers = require('../helpers');

var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');

gulp.task('main:markup', function() {
  return gulp.src('src/*.html')
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream:true}));
});
