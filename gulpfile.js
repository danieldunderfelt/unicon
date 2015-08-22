var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer');

gulp.task('browser-sync', function() {
    browserSync.init({
    	server: {
    		baseDir: "./build"
    	},
        open: false
    })
})

gulp.task('sass', function() {
	return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
        .pipe(sourcemaps.write())
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream({match: '**/*.css'}))
})

gulp.task('default', ['browser-sync'], function () {
    gulp.watch(["src/scss/**/*.scss"], ['sass'])
})