'use strict';

var gulp    = require('gulp');
var config  = require('../config');
var helpers = require('../helpers');

var del = require('del');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('main:images', function() {
  return gulp.src('src/assets/images/**/*')
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(gulp.dest('dist/assets/images'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('main:icons', function() {
  return gulp.src('src/assets/icons/**/*')
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(gulp.dest('dist/assets/icons'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('main:static', ['main:images', 'main:icons']);
