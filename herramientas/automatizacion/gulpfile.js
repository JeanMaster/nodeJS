
//gulp es para automatizar procesos, muy al estilo webpack

const gulp = require('gulp')
const server = require('gulp-server-livereload')

//una funcion probando 

gulp.task('build', function(cb) {
    console.log("construyendo el sitio")
    setTimeout(cb , 1200 )
});

//tarea de abrir un server con gulp live server
gulp.task('serve' , function(cb) {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true,
        }))
})

//crear tareas en serie
gulp.task('default', gulp.series('build' , 'serve'))