const gulp = require('gulp'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify');

return gulp.src([
    './src/js/observer.js',
    './src/js/focus.js',
    './src/js/datepicker.js',
])
    .pipe(concat('index.js'))
    .pipe(minify())
    .pipe(gulp.dest('./static/'));