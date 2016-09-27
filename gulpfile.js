var gulp = require('gulp');
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var watchPath = require('gulp-watch-path');
var combiner = require('stream-combiner2');
var gutil = require('gulp-util');

/*gulp.task('default', function(){
	gulp.src('src/scripts/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist/script'))
		.src('src/css/*.css')
		.pipe(autoprefixer({
			browsers : ['last 2 versions', 'Android >= 4.0'],
			cascade : true,
			remove : true
		}))
		.pipe(gulp.dest('dist/css'));
});*/
var handleError = function(err){
	var colors = gutil.colors;
	console.log('\n');
	gutil.log(colors.red('Error!'));
	gutil.log('fileName: ' + colors.red(err.fileName));
	gutil.log('lineNumber: ' + colors.red(err.loc.line));
	gutil.log('message: ' + err.message);
	gutil.log('plugin: ' + colors.yellow(err.plugin));
};
gulp.task('default', function(){
	gulp.watch('src/scripts/*.js', function(event){
		var paths = watchPath(event, 'src/scripts/', 'dist/scripts/');
		var combined = combiner.obj([
			gulp.src(paths.srcPath),
			babel(),
			gulp.dest(paths.distDir)
		]);
		combined.on('error', handleError);
	});
	gulp.watch('src/css/*.css', function(event){
		var paths = watchPath(event, 'src/css/', 'dist/css/');
		var combined = combiner.obj([
			gulp.src(paths.srcPath),
			autoprefixer({
				browsers : ['last 2 versions', 'Android >= 4.0'],
				cascade : true,
				remove : true
			}),
			gulp.dest(paths.distDir)
		]);
		combined.on('error', handleError);
	});
});