var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')
var jade = require('gulp-jade')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer');

var icons = require('./icon-list');

gulp.task('browser-sync', function() {
    browserSync.init({
    	server: {
    		baseDir: "./"
    	},
        open: false
    })
})

gulp.task('jade', function() {
    var locals = {
        icons: icons
    }

    return gulp.src('index.jade')
        .pipe(jade({
            locals: locals,
            pretty: true
        }).on('error', console.error.bind(console)))
        .pipe(gulp.dest('.'))
})

gulp.task('sass', function() {
	return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream({match: '**/*.css'}))
})

gulp.task('default', ['browser-sync'], function () {
    gulp.watch(["src/scss/**/*.scss"], ['sass'])
    gulp.watch(["**/*.jade"], ['jade'])
})