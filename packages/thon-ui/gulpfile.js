const gulp = require('gulp');
const gulpUglify = require('gulp-uglify');
const removeEmptyLines = require('gulp-remove-empty-lines');
const through = require('through2');

function removeStylesWhiteSpaces() {
  return gulp
    .src('dist/**/*.styles.js')
    .pipe(
      (() => {
        return through.obj((file, encoding, callback) => {
          if (file.isNull()) {
            return callback(null, file);
          }

          file.contents = Buffer.from(
            (() => {
              return file.contents
                .toString()
                .replace(/(\\r\\n|\\n|\\r)/gm, '')
                .replace(/\s+/g, ' ')
                .replace(/" /g, '"')
                .replace(/ "/g, '"');
            })()
          );

          callback(null, file);
        });
      })()
    )
    .pipe(gulp.dest('dist/'));
}

function uglify() {
  return gulp.src('dist/**/*.js').pipe(gulpUglify()).pipe(gulp.dest('dist/'));
}

exports.postBuild = gulp.series(removeStylesWhiteSpaces, uglify);
