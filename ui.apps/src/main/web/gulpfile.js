var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var clientlibify = require('gulp-clientlibify');
var aemSync = require('gulp-aemsync');

var webpackfile = Object.create(webpackConfig);
webpackfile.devtool = "sourcemap";
webpackfile.debug = true;
var runwebpack = webpack(webpackfile);

//deleting the files inside clientlib js folder
gulp.task('clean', (cb) => {
    return  del(['../content/jcr_root/etc/designs/ng2-aem/clientlib-site/js/*'],{force: true}, cb);
});

  // running webpack
gulp.task("run-webpack" , ['clean'], (callback) => {
	runwebpack.run(function(err, stats) {
        if(err) throw new gutil.PluginError("run-webpack", err);
        gutil.log("[run-webpack]", stats.toString({
            colors: true
        }));
        callback();
    });
});

//sync the files created with webpack to AEM
gulp.task('aemsync', () => {
    return gulp.src('../content/jcr_root/etc/designs/ng2-aem/clientlib-site/js/')
        .pipe(aemSync({
            targets: ['http://admin:admin@localhost:4512']
        }));
});

gulp.task('watch', () => {
    gulp.watch('src/app/**/*.ts', ['run-webpack']);
});

gulp.task("build", ["run-webpack"]);
gulp.task("sync", ["aemsync"]);

//gulp.task("dev", ["clientlibify","watch"])
//gulp.task("dev", ["run-webpack","clientlibify"])
//gulp.task("dev", ["run-webpack","watch","clientlibify"])

/*gulp.task('clientlibify', ['run-webpack'],function() {
    return gulp.src('dist/*')
        .pipe(clientlibify({
            dest: 'dist',
            jsDir: 'dist',

            // set `installPackage` to `true` to deploy to an AEM instance
            installPackage: true,

            categories: ['ng2-aem/test'],
            embed: [],
            dependencies: [],

            // package options
            packageName: 'ng2-aem',
            packageVersion: '0.1',
            packageGroup: 'NG2 AEM',
            packageDescription: 'CRX package installed using the gulp-clientlibify plugin',

            // deploy options
            // Note: these options would likely come from environment vars
            deployScheme: 'http',
            deployHost: 'localhost',
            deployPort: '4512',
            deployUsername: 'admin',
            deployPassword: 'admin'
        }))
        .pipe(gulp.dest('dist'))
});*/
