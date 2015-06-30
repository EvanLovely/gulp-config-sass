# Sass gulp configuration

**WORK IN PROGRESS**

Sets up [`gulp-sass`](https://github.com/Snugug/gulp-sass), which uses `libsass` to compile `*.scss` files. Brings in extra tools as well. This isn't a gulp module, it configures them.

# Setup

Install this into your project:

    npm install gulp-config-sass --save

Add this to `gulpfile.js`:

    require('gulp-config-sass')(gulp, config, tasks);

The above line will pull in `index.js` just like it was in your `gulpfile.js` and it'll register and configure all the gulp tasks for you. 

A more complete `gulpfile.js` would look like:

    var config = {
        "scssDir": "scss/",
        "cssDir": "css/",
        "scsslintOptions": {
            'config': '.scss-lint.yml',
            'bundleExec': true
        },
        "autoprefixerOptions": {
            "browsers": [
              'last 2 versions'
            ]
        }
    };
    var tasks = {
      "compile": [],
      "watch": [],
      "validate": []
    };
    
    require('gulp-config-sass')(gulp, config, tasks);
    
    gulp.task('compile', tasks.compile);
    gulp.task('validate', tasks.validate);
    gulp.task('watch', tasks.watch);
