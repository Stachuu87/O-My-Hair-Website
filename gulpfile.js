var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
const imagemin = require('gulp-imagemin');


gulp.task('images', () =>
		  gulp.src('src/images/*')
		  .pipe(imagemin())
		  .pipe(gulp.dest('images'))
		 );

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
		.pipe(livereload());
})

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('scss/**/*.scss', ['sass']);

});
gulp.task('default', ['images','sass', 'watch']);
