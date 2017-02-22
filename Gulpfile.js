const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('styles', () => {
  gulp.src('assets/sass/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('style.css'))
      .pipe(gulp.dest('assets/css/'));
});

gulp.task('default', () => {
  gulp.watch('assets/sass/**/*.scss', ['styles']);
});
