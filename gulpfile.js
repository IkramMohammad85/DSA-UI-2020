var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var browserSync = require('browser-sync');
var cleanCSS = require('gulp-clean-css');




// Paths and directories
var paths = {
	sass: {
		src: './src/sass/**/*.scss',
		dest: './assets/css'
	},

	css: {
		src: './src/css/*.css',
		dest: './assets/css'
	},

	html: {
		src: ['src/pug/**/*.pug','src/pug/**/components/*','src/pug/**/templates/*'],
		dest: './'
	},
	

	watch: {
		pug: ['./src/pug/*.pug', './src/pug/**/*.pug']
	}
};

// Compiles Sass into CSS
gulp.task('sass', function () {
	return gulp
		.src(paths.sass.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest(paths.sass.dest))
});


// Compiles pug file into HTML
gulp.task('pug', function(){
	return gulp
		.src(paths.html.src)
		.pipe(pug({
			// beautify: true
		}))
		.pipe(gulp.dest(paths.html.dest));
});

// Minifies the css
gulp.task('minify-css', function() {
	return gulp
		.src(paths.css.src)
		.pipe(cleanCSS())
		.pipe(gulp.dest(paths.css.dest));
});

// Watches files for change and reloads the browser
gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});
// reload browser
gulp.task('reloadBrowser', function(done){
	browserSync.reload();
	done();
});

// Watches file for changes and runs the task
gulp.task('watch', function () {
    gulp.watch(paths.sass.src, gulp.series('sass'));
    gulp.watch(paths.watch.pug, gulp.series('pug', 'reloadBrowser'));
    gulp.watch(paths.css.src, gulp.series('minify-css', 'reloadBrowser'));
    
});

// Starts the development server
gulp.task('run', gulp.parallel('browser-sync', 'watch'));



