var gulp = require('gulp');
var connect = require('gulp-connect');
var browserSync = require('browser-sync');

var config = require('./../gulp-config');


gulp.task('connect', function() {
  connect.server({
    root: config.server.root,
    livereload: true
  });
});