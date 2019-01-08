const gulp = require('gulp');
const webpack = require('webpack-stream');
var sass = require('gulp-sass');



gulp.task('default',['webpack:watch']);