const gulp = require ('gulp');
const sass = require ('gulp-sass');
const through = require ('through2');
const replace = require ('gulp-replace');

gulp.task ('sass', () => {
  gulp
    .src (['./scss/main.scss'])
    .pipe (replace ('@import "~/', '@import "./node_modules/'))
    .pipe (
      sass ({
        outputStyle: 'compressed',
        precision: 10,
      }).on ('error', sass.logError)
    )
    .pipe (gulp.dest ('./public/main2bundle.css'));
});

gulp.task ('sass:watch', () => {
  gulp.watch (['./scss/**/**.scss'], ['sass']);
});

gulp.task ('default', ['sass:watch']);
