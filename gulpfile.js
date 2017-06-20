var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
	return gulp.src('scss/*')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded',
			sourceCommenets: 'map'
		}))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'))
})

gulp.task('watch', function () {
	gulp.watch('scss/**/*.scss', ['sass']);
});
gulp.task('default', ['sass', 'watch']);
