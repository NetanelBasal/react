var gulp = require('gulp');
var watch = require('gulp-watch');

var config = require('./../gulp-config');

gulp.task('watch', function() {
    gulp.watch(config.js.watch, ['js']),
    gulp.watch(config.sass.watch, ['sass']);
    gulp.watch(config.bower.file, ['bower']),
    gulp.watch(config.live.path, ['live'])
});