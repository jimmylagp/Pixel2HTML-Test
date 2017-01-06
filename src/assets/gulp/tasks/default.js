'use strict';

var gulp    = require('gulp');
var config  = require('../config');
var helpers = require('../helpers');

gulp.task('default', [
  'main:static',
  'main:styles',
  'main:scripts',
  'main:markup', 
  'vendor:styles',
  'vendor:fonts',
  'vendor:scripts',
]);
