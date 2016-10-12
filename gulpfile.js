var gulp = require('gulp');
var webpack = require('webpack-stream');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var connect = require('gulp-connect');
var copy = require('gulp-copy');

// Run webpack
gulp.task('webpack', function() {
  return gulp.src('src/main.js')
    .pipe(webpack(require('./build/webpack.prod.config.js')))
    .pipe(gulp.dest('public/dist/js/'))
    .pipe(connect.reload());
});

// Run the webserver
gulp.task('watch', function() {
	return gulp.src('src/main.js')
    .pipe(webpack(require('./build/webpack.dev.config.js')))
    .pipe(gulp.dest('public/dist/js/'))
    .pipe(connect.reload());
});

// Copy index.html file
gulp.task('build.index', function(){
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./public'));
});

// Default task
gulp.task('default', ['webpack', 'build.index']);
