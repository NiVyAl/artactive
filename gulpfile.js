var gulp = require("gulp");
var less = require("gulp-less");
var postHtml = require("gulp-posthtml");
var del = require("del");
var server = require("browser-sync").create();
var csso = require("gulp-csso");

gulp.task("css", function() {
  return gulp.src("source/less/style.less")
    .pipe(less())
    .pipe(csso())
    .pipe(gulp.dest("build"))
    .pipe(server.stream())    // чтоб при изменении в css сервер без перезагрузки страницы отображал изменения
});

gulp.task("html", function() {
  return gulp.src("source/*.html")
    .pipe(postHtml())
    .pipe(gulp.dest("build"));
});

gulp.task("copy", function() {
  return gulp.src(["source/fonts/**", 
    "source/img/**"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
  return del("build");
})

gulp.task("refresh", function(done) { // done - чтоб бесконечно не перезагружалось
  server.reload();
  done();
})

gulp.task("server", function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  
  gulp.watch("source/less/*.less", gulp.series("css"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("build", gulp.series("clean", "html", "css", "copy"));
gulp.task("start", gulp.series("build", "server"));