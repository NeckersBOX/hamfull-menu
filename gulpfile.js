"use strict";

const gulp = require ('gulp');
const sass = require ('gulp-sass');
const sourcemaps = require ('gulp-sourcemaps');

gulp.task ('sass', () =>
  gulp.src ('sass/hamfull.sass')
    .pipe (sourcemaps.init ())
    .pipe (sass ({
      outputStyle: 'compressed'
    }).on ('error', sass.logError))
    .pipe (sourcemaps.write ())
    .pipe (gulp.dest ('css'))
);

gulp.task ('watch', () => gulp.watch ('sass/hamfull.sass', [ 'sass' ]));
