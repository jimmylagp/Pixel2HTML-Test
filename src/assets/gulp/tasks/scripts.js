'use strict';

var gulp    = require('gulp');
var config  = require('../config');
var helpers = require('../helpers');

var concat  = require('gulp-concat');
var plumber = require('gulp-plumber');
var uglify  = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

gulp.task('main:scripts', function() {
  return gulp.src('src/assets/js/main.js')
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('vendor:scripts', function() {
  return gulp.src(config.vendor.scriptFiles)
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(browserSync.reload({stream:true}));
});
