//  Include gulp
var gulp = require('gulp');
var jade = require('gulp-jade');
var uglifycss = require('gulp-uglifycss');
var prty = require('gulp-prettify');
var less = require('gulp-less');

gulp.task('less', function () {
    return gulp
    .src('./stylesheets/albatros.less')
    .pipe(less())
    .pipe(uglifycss({ 'uglyComments': true }))
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('jade', function() {
    // do not work
    var YOUR_LOCALS = { pretty: true };

    gulp.src([
        './templates/index.jade',
        './templates/kafe.jade',
        './templates/hotel.jade',
        './templates/kolyby.jade',
        './templates/stolyky.jade',
        ])
        .pipe(jade({ locals: YOUR_LOCALS }))
        // .pipe(prty({indent_size: 2}))
        .pipe(gulp.dest(''));
});

gulp.task('default', ['less', 'jade']);
