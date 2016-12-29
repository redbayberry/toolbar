var gulp = require('gulp'),
	sass = require('gulp-sass');
//scss任务
gulp.task('sass',function(){
	return gulp.src('css/index.scss')
			.pipe(sass())
			.pipe(gulp.dest('css'));
});
gulp.task('default',['sass','watch1']);
gulp.task('watch1',function(){
	return gulp.watch('css/*.scss',['sass']);
});