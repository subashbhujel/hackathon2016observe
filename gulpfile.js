var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function() {
    nodemon({
        script: 'app.js',
        ext: 'js html css',
        ignore: ['./node_modules/**']
    }).on('restart', function() {
        console.log('Changes detected. Restarting the server.')
    });
});