/* Gulp modules */
const gulp = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cssMin = require('gulp-cssmin');
const gulpIf = require('gulp-if');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const srcMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const util = require('gulp-util');
const babelify = require('babelify');
const browserify = require('browserify');
const watchify = require('watchify');

/* Vinyl modules */
const buffer = require('vinyl-buffer');
const srcStream = require('vinyl-source-stream');

/* Create production and dependencies */
const production = process.env.NODE_ENV === 'production';
const dependencies = [
    'alt',
    'react',
    'react-dom',
    'react-router',
    'underscore'
];

/* Combine all JavaScript libraries into a single file for fewer HTTP requests */
gulp.task('vendor', function() {
    return gulp
        .src([
            'bower_components/jquery/dist/jquery.js',
            'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
            'bower_components/semantic/dist/semantic.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulpIf(production, uglify({
            mangle: false
        })))
        .pipe(gulp.dest('client/js/'));
});

/* Compile third-party dependencies separately for faster performance */
gulp.task('browserify-vendor', function() {
    return browserify()
        .require(dependencies)
        .bundle()
        .pipe(srcStream('vendor.bundle.js'))
        .pipe(buffer())
        .pipe(gulpIf(production, uglify({
            mangle: false
        })))
        .pipe(gulp.dest('client/js/'));
});

/* Compile only project files, excluding all third-party dependencies */
gulp.task('browserify', ['browserify-vendor'], function() {
    return browserify({
            entries: 'app/main.js',
            debug: true
        })
        .external(dependencies)
        .transform(babelify, {
            presets: [
                'es2015',
                'react'
            ]
        })
        .bundle()
        .pipe(srcStream('bundle.js'))
        .pipe(buffer())
        .pipe(srcMaps.init({
            loadMaps: true
        }))
        .pipe(gulpIf(production, uglify({
            mangle: false
        })))
        .pipe(srcMaps.write('.'))
        .pipe(gulp.dest('client/js'));
});

/* Same as browserify task, but will also watch for changes and re-compile */
gulp.task('browserify-watch', ['browserify-vendor'], function() {
    var bundler = watchify(browserify({
            entries: 'app/main.js',
            debug: true
        },
        watchify.args
    ));

    bundler.external(dependencies);
    bundler.transform(babelify, {
        presets: [
            'es2015',
            'react'
        ]
    });
    bundler.on('update', rebundle);
    return rebundle();

    function rebundle() {
        var start = Date.now();

        return bundler
            .bundle()
            .on('error', function(err) {
                util.log(util.colors.red(err.toString()));
            })
            .on('end', function() {
                util.log(util.colors.green('Finished rebundling in', (Date.now() - start) + 'ms.'));
            })
            .pipe(srcStream('bundle.js'))
            .pipe(buffer())
            .pipe(srcMaps.init({
                loadMaps: true
            }))
            .pipe(srcMaps.write('.'))
            .pipe(gulp.dest('client/js/'));
    }
});

/* Compile less stylesheets. */
gulp.task('styles', function() {
    return gulp
        .src('app/less/main.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(autoPrefixer())
        .pipe(gulpIf(production, cssMin()))
        .pipe(gulp.dest('client/css'));
});

/* Watch task */
gulp.task('watch', function() {
    gulp.watch('app/less/**/*.less', ['styles']);
});

/* Default task */
gulp.task('default', [
    'styles',
    'vendor',
    'browserify-watch',
    'watch'
]);

/* Build task */
gulp.task('build', [
    'styles',
    'vendor',
    'browserify'
]);