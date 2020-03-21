// dependencies
var gulp                = require('gulp'),
    sass                = require('gulp-sass'),
    cleanCSS            = require('gulp-clean-css'), // css minifizieren
    autoprefixer        = require('gulp-autoprefixer'),
    rename              = require('gulp-rename'),
    uglify              = require('gulp-uglify'), // js minifizieren
    concat              = require('gulp-concat'), // js dateien zusammenfassen
    sourcemaps          = require('gulp-sourcemaps'),
    browserSync         = require('browser-sync');
// folders
var src                 = './src/',
    dist                = './dist/';

// -------------------------------------

// sass2css (include autoprefix, minify and sourcemaps)
gulp.task('sass', function () {
  return gulp.src([src + 'sass/*.scss'])
    .pipe(sass().on('error', sass.logError)) // error log
    .pipe(sourcemaps.init()) // create sourcemap
    .pipe(sass()) // compile sass 2 css
    .pipe(autoprefixer()) // autoprefix
    .pipe(cleanCSS({compatibility: 'ie8'})) // minify
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest([dist]));
});

// sass2css (include autoprefix, minify and sourcemaps)
gulp.task('sass2', function () {
  return gulp.src([src + 'sass/*.scss'])
    .pipe(sass().on('error', sass.logError)) // error log
    .pipe(sourcemaps.init()) // create sourcemap
    .pipe(sass()) // compile sass 2 css
    .pipe(autoprefixer()) // autoprefix
    .pipe(cleanCSS({compatibility: 'ie8'})) // minify
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest([dist + 'HTMLandPHPboiler/css']));
});

// pipe all html files
// gulp.task('copyHTML', async function () {
//    gulp.src([src + 'HTMLandPHPboiler/*.html'])
//    .pipe(gulp.dest([dist + 'HTMLandPHPboiler']));
// });

gulp.task('copyALL', async function() {
    gulp.src([src] + 'HTMLandPHPboiler/**/*.{html,php,png,xml,ico,txt,jpg,ttf,woff,eof,svg}')
   .pipe(gulp.dest([dist] + 'HTMLandPHPboiler'));
});

// watch everything
gulp.task('watch', function () {
  gulp.watch([src + 'sass/**/*.scss'], gulp.series('sass'));
  gulp.watch([src + 'sass/**/*.scss'], gulp.series('sass2'));
  gulp.watch([src + 'HTMLandPHPboiler/**/*.*'], gulp.series('copyALL'));
 });
 gulp.task('default', gulp.series('sass', 'sass2', 'copyALL', 'watch'));
