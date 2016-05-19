var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var fileinclude = require('gulp-file-include');
// var imagemin = require('gulp-imagemin');
// var pngquant = require('imagemin-pngquant');

gulp.task('fileinclude', function() {
    // content
    gulp.src('templates/**')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

// gulp.task('imagemin', function() {
//     return gulp.src('img/**')
//            .pipe(imagemin({
//                 progressive: true,
//                 use: [pngquant()]
//            }))
//            .pipe(gulp.dest('img'));
// });

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
    gulp.watch("css/*.css").on("change", reload);
    gulp.watch('templates/**', ['fileinclude']);
    gulp.watch('partials/**', ['fileinclude']);
});


gulp.task('default', function() {
  gulp.start('serve');
});