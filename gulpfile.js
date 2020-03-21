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
   gulp.src([src] + 'HTMLandPHPboiler/index.php')
   .pipe(gulp.dest([src] + 'HTMLandPHPboiler'));
});

// pipe all php files
gulp.task('copyPHP', async function () {
    gulp.src([src + 'HTMLandPHPboiler/*.php'])
    .pipe(gulp.dest([dist + 'HTMLandPHPboiler']));
});

// pipe all font files
gulp.task('copyFont', async function () {
    gulp.src([src + 'HTMLandPHPboiler/fonts/*.*'])
    .pipe(gulp.dest([dist + 'HTMLandPHPboiler/fonts']));
});

// watch everything
gulp.task('watch', function () {
  gulp.watch([src + 'sass/**/*.scss'], gulp.series('sass'));
  gulp.watch([src + 'HTMLandPHPboiler/*.php'], gulp.series('copyPHP'));
  gulp.watch([src + 'HTMLandPHPboiler/fonts/*.*'], gulp.series('copyFont'));
 });
 gulp.task('default', gulp.series('sass', 'sass2', 'copyPHP', 'copyFont', 'watch'));
