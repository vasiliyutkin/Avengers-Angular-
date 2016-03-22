var gulp = require('gulp'),
    server = require('gulp-server-livereload');

//running server task
gulp.task('server', function() {
    gulp.src('./')
        .pipe(server({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

gulp.task('default', ['server']);
