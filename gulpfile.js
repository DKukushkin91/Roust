'use-strict'

const {src, dest, watch, series}= require('gulp');
const	browserSync = require('browser-sync').create();
const	pug = require('gulp-pug');
const	plumber = require('gulp-plumber');
const	cleanCSS = require('gulp-clean-css');
const	babel = require('gulp-babel');
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer');
const rollup = require('rollup-stream');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const del = require('del');

/* Paths variables */
let basepath = {
	src: 'src/',
	dest: 'htdocs/'
};

let path = {
	build: {
		js: 'htdocs/f/scripts/',
		css: 'htdocs/f/css/',
	},
	src: {
		js: `${basepath.src}scripts/`,
		pug: `${basepath.src}layouts/**/*.pug`,
		styl: `${basepath.src}/styles/*.styl`,
	},
	watch: {
		js: `${basepath.src}scripts/**/*.js`,
		pug: `${basepath.src}**/*.pug`,
		stylus: `${basepath.src}**/*.styl`,
	}
};

/* Overwrite */
const clean = () => del([`${basepath.dest}/f/`, `${basepath.dest}/html/`]);

/* Pug templates */
const pug2html = () => {
	return src(path.src.pug)
		.pipe(plumber())
		.pipe(pug({
			pretty: true
		}))
		.pipe(dest(`${basepath.dest}html`))
}

/* styles */
const styles = () => {
  return src(path.src.styl)
    .pipe(plumber())
		.pipe(stylus({
			compress: true
		}))
		.pipe(concat('main.css'))
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest(path.build.css))
		.pipe(browserSync.stream())
}

/* JS */
const vendorJs = () => {
	return src(`${path.src.js}vendor/*.js`)
		.pipe(concat('vendor.js'))
		.pipe(terser())
		.pipe(dest(`${path.build.js}`))
};

const userJs = () => {
	return rollup({
		input: `${path.src.js}main.js`,
		format: 'es',
	})
	.pipe(source('main.js'))
	.pipe(buffer())
	.pipe(src(`${path.src.js}jquery/*.js`))
	.pipe(babel({
			presets: ['@babel/preset-env']
	}))
	// .pipe(terser()) Отключена минификация на момент разработки
	.pipe(concat('main.js'))
	.pipe(dest(`${path.build.js}`))
	.pipe(browserSync.stream())
};

/* server */
const serv = (cb) => {
	browserSync.init({
		startPath: '/html',
		server: {
			baseDir: basepath.dest,
		},
		notify: false,
	});

	watch(path.watch.pug, series('pug2html'));
	watch(path.watch.stylus, series('styles'));
	watch(path.watch.js, series('userJs'));
	watch("htdocs/*.html").on('change', browserSync.reload);

	cb();
};

/* images */
const images = () => src(`${basepath.src}img/**/*.*`).pipe(dest(`${basepath.dest}f/img`));

/* fonts */
const fonts = () => src(`${basepath.src}fonts/**/*.*`).pipe(dest(`${basepath.dest}f/fonts`));

/* exports */
exports.pug2html = pug2html;
exports.styles = styles;
exports.vendorJs = vendorJs;
exports.userJs = userJs;
exports.serv = serv;

/* default actions */
const build = series(clean, images, fonts, pug2html, styles, vendorJs, userJs);

exports.build = build;
exports.default = series(serv);
