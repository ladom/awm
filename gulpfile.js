
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
	.pipe(gulp.dest('css/'))
	
});

gulp.task('default', ['styles'], function() {
	gulp.watch('sass/style.sass', ['styles']);
});