const copyImages = () => {
  console.log('копируем изображение');
  return app.gulp.src('src/images/**/*')
          .pipe(app.gulp.dest('dist/img'))
          .pipe(app.plugins.browserSync.stream())
}

export default copyImages