let mix = require('laravel-mix');
let path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath(path.join('public', 'assets'));
mix.setResourceRoot('../');
mix.sourceMaps(! mix.inProduction());

/*
 |--------------------------------------------------------------------------
 | Bootstrap SASS & jQuery bundle.
 |--------------------------------------------------------------------------
 |
 | 包含 jQuery 和 Bootstrap 的捆包。
 |
 */

mix.sass('resources/assets/sass/bootstrap.scss', path.join('public', 'assets', 'css'))
   .js('resources/assets/js/bootstrap.js', path.join('public', 'assets', 'js'))


/*
 |--------------------------------------------------------------------------
 | 后台可运行 js 捆
 |--------------------------------------------------------------------------
 |
 | 不包含 jQuery 和 Bootstrap 的 vue 捆包。
 |
 */

mix.js('resources/assets/admin', path.join('public', 'assets', 'js'));
