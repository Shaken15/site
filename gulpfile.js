var gulp = require('gulp'),
		concatCSS = require('gulp-concat-css');
		rename = require('gulp-rename');
		notify = require('gulp-notify');
		minifyCss = require('gulp-minify-css');

gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(concatCSS("bundle.css"))
    .pipe(minifyCss(''))
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('app/css'));
    .pipe(notify('Done!'));

});

gulp.task('watch', function {
	gulp.watch('css/*.css',['default'])
})