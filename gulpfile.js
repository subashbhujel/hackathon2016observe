var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    open = require('gulp-open'); // open a file in web brower

// Opens the browser
gulp.task('open', function() {
    gulp.src('public/index.html')
        .pipe(open({
            uri: 'http://localhost:4001/'
        }));
});

// Default gulp task
gulp.task('build', function() {
    nodemon({
        script: 'app.js',
        ext: 'js html css',
        ignore: ['./node_modules/**']
    }).on('restart', function() {
        console.log('Changes detected. Restarting the server.')
    });
});

// Default task that will run when 'gulp' is run from git bash
gulp.task('default', ['build', 'open']);