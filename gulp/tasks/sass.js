"use strict";

module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('./source/style/*.sass')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .pipe($.gp.csso())
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Sass',
                    message: error.message
                }
            }))
            .pipe($.gp.autoprefixer({
                browsers: [
                    "last 5 versions",
                    "> 1%",
                    "ie 9",
                    "Opera 12.1"
                ]
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('./build/assets/css/'));
    });
};