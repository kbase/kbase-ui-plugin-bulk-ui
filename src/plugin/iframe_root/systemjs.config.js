/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        meta: {
            '*.html': {
                loader: 'text'
            },
            '*.css': {
                loader: 'text'
            }
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            '@angular2-material': 'npm:@angular2-material',


            // shims
            'es6-shim': 'npm:es6-shim/es6-shim.js',
            'reflect': 'npm:reflect-metadata/Reflect.js',
            'zone': 'npm:zone.js/dist/zone.js',

            'kbase': 'kbase',

            text: 'npm:systemjs-plugin-text/text.js'

        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            kbase: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            '@angular2-material/core': {
                format: 'cjs',
                defaultExtension: 'js',
                main: 'core.umd.js'
            },
            '@angular2-material/checkbox': {
                format: 'cjs',
                defaultExtension: 'js',
                main: 'checkbox.umd.js'
            },
            '@angular2-material/button': {
                format: 'cjs',
                defaultExtension: 'js',
                main: 'button.umd.js'
            },
            '@angular2-material/progress-circle': {
                format: 'cjs',
                defaultExtension: 'js',
                main: 'progress-circle.umd.js'
            },
            '@angular2-material/sidenav': {
                format: 'cjs',
                defaultExtension: 'js',
                main: 'sidenav.umd.js'
            },
            '@angular2-material/progress-bar': {
                format: 'cjs',
                defaultExtension: 'js',
                main: 'progress-bar.umd.js'
            }
        }
    });
})(this);
