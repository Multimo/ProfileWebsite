var gulp = require('gulp');
var uncss = require('gulp-uncss');
var cssmin = require('gulp-cssmin');

gulp.task('default', function() {
   gulp.src('./css/*.css')
    .pipe(uncss({
        html: ['index.html']
    }))
    .pipe(cssmin())

    .pipe(gulp.dest('./out'));
});