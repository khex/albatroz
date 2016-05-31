//  Include gulp
var gulp = require('gulp');
var jade = require('gulp-jade');
var prty = require('gulp-prettify');
var less = require('gulp-less');

gulp.task('templates', function() {
    // do not work
    var YOUR_LOCALS = { pretty: true };

    gulp.src('./partials/index.jade')
        .pipe(jade({ locals: YOUR_LOCALS }))
        .pipe(prty({indent_size: 2}))
        .pipe(gulp.dest(''));
});

gulp.task('less', function () {
    return gulp
    .src('./stylesheets/albatros.less')
    .pipe(less())
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('default', ['templates']);
