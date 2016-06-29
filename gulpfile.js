var gulp = require('gulp'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    path = require('path');


gulp.task('styles', function() {
  return gulp.src('public/stylesheets/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('public/dist/assets/css'))
    .pipe(minifycss())
    .pipe(gulp.dest('public/dist/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});


gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('public/stylesheets/**/*.less', ['styles']);
});
