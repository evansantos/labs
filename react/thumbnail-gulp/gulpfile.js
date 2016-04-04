var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

gulp.task('default', function () {
  return gulp.src('src/**') // Get files [** means all]
    .pipe(react()) // Convert JSX 2 JS
    .pipe(concat('application.js')) // merge all JS files to application.js
    .pipe(gulp.dest('./')); // Save to root 
});
