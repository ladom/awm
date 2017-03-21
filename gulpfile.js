
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');



gulp.task('styles', function() {
	return gulp.src('sass/style.sass')
	.pipe(
		sass({
			outputStyle: 'expanded'
		})
	)
	.pipe(autoprefixer({
		browsers: ["> 0.5%"]})
	)
	.pipe(gulp.dest('css/style.css'))
	
});

gulp.task('default', ['styles'], function() {
	gulp.watch('style.sass', ['styles']);
});