'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
  return gulp.src('./src/sass/styles.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('js', function() {
    return gulp
        .src(['./src/js/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('js:watch', function() {
    gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('default', ['sass:watch', 'sass', 'js', 'js:watch'], function() {});