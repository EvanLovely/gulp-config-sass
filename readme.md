# Sass gulp configuration

**WORK IN PROGRESS**

Sets up [`gulp-sass`](https://github.com/Snugug/gulp-sass), which uses `libsass` to compile `*.scss` files. Brings in extra tools as well. This isn't a gulp module, it configures them.

# Setup

Install this into your project:

    npm install gulp-config-sass --save

Add this to `gulpfile.js`:

    require('gulp-config-sass')(gulp, config, tasks);

The above line will pull in [`index.js`](https://github.com/EvanLovely/gulp-config-sass/blob/master/index.js) just like it was in your `gulpfile.js` and it'll register and configure all the gulp tasks for you. 

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

# Task commands

- `gulp css` - Compile sass and run through autoprefixer. Creates sourcemaps that are inlined into `style.css`.
- `gulp scsslint` - Check your scss for errors and warnings based on the rules you set in `.scss-lint-yml` (get a [sample file here](https://github.com/brigade/scss-lint/blob/master/config/default.yml) and see the [docs here](https://github.com/causes/scss-lint/blob/master/lib/scss_lint/linter/README.md)).
- `gulp watch:css` - Compile Sass, then watch for changes, then compile and run scss lint. 

# Modifying this file and using it as a starting point

Just copy `index.js` out and put it in your repo, rename it to `sass.js` and put it perhaps in a `gulp-tasks/` folder. Then add this to `gulpfile.js`:

    require('gulp-tasks/sass.js')(gulp, config, tasks);

Then just install all the packages listed at the top of that file with the `npm install {name of packages} --save` command. Now you can modify this file any way you want!

