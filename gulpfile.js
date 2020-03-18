var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
var minifycss = require('gulp-uglifycss');
var minifyjs = require('gulp-uglify');



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

	js: {
		src: ['./src/js/dropdown.js','./src/js/accordion.js','./src/js/popup.js','./src/js/tabs.js','./src/js/scripts.js'],
		vendor:['node_modules/@glidejs/glide/dist/glide.min.js','node_modules/list.js/dist/list.min.js','node_modules/scrollreveal/dist/scrollreveal.min.js'],
		dest: './assets/js'
	},

	html: {
		src: ['src/pug/**/*.pug','!src/pug/**/components/*','!src/pug/**/components/**/*','!src/pug/**/_*/'], 
		dest: './'
	},

	img: {
		src: './src/img/**',
		dest: './assets/img'
	},
	

	watch: {
		pug: ['./src/pug/*.pug', './src/pug/**/*.pug']
	}
};

// Compiles Sass into CSS
gulp.task('sass', function () {
	return gulp
		.src(paths.sass.src)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false,
			grid: 'autoplace'
		}))
		//  .pipe(minifycss({
		//  	"maxLineLen": 80,
		//  	"uglyComments": true
		//    }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.sass.dest))
});


// Compiles Sass into CSS
gulp.task('js', function () {
	gulp
		.src(paths.js.src)
		.pipe(concat('scripts.js'))
		// Transpile the JS code using Babel's preset-env.
		.pipe(babel({
			presets: [
			  ['@babel/env', 
			  {
				"modules": false,
				"targets": {
				  "browsers": ["> 1%", "last 2 versions", "ie >= 11"]
				}
			  }
			]
			]
		  }))
		.pipe(minifyjs())
		.pipe(gulp.dest(paths.js.dest))


	return gulp
		.src(paths.js.vendor)
		// Transpile the JS code using Babel's preset-env.
		.pipe(babel({
			presets: [
			  ['@babel/env', 
			  {
				"modules": false,
				"targets": {
				  "browsers": ["> 1%", "last 2 versions", "ie >= 11"]
				}
			  }
			]
			]
		  }))
		.pipe(gulp.dest(paths.js.dest))
});


// Compiles pug file into HTML
gulp.task('pug', function(){
	return gulp
		.src(paths.html.src)
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(paths.html.dest));
});

// Optimizes images
gulp.task('minifyImg', function(){
	return gulp
		.src('src/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets/img'))
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
	gulp.watch(paths.js.src, gulp.series('js'));
	gulp.watch(paths.img.src, gulp.series('minifyImg', 'reloadBrowser'));
    gulp.watch(paths.watch.pug, gulp.series('pug', 'reloadBrowser'));
    
});

// Starts the development server
gulp.task('run', gulp.parallel('browser-sync', 'watch'));



