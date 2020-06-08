//  Include gulp
var gulp      = require('gulp');
var pug       = require('gulp-pug'); 
var uglifycss = require('gulp-uglifycss');
var prettify  = require('gulp-html-prettify');
var sass      = require('gulp-sass');


gulp.task('sass', function(done) {
    gulp.src("scr/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("scr/css"));

    done();
});

gulp.task('views', function(done) {
    return gulp.src('./views/*.pug')
    .pipe(pug({
        // Your options in here.
    }))
    .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest('./'))

    done();
});

gulp.task('default', gulp.series('sass', 'views'));
