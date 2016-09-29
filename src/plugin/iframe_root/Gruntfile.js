module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ts: {
      default: {
        src: ["**/*.ts", "!node_modules/**"],
        options: {
          outFile: './build/build.js'
        }
      },
      options: {
        compiler: '',
        target: 'es6',
        module: 'system',
        moduleResolution: 'node',
        sourceMap: true,
        comments: false,
        noImplicitAny: false,
        emitDecoratorMetadata: true,
        experimentalDecorators: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-ts');

  grunt.registerTask('default', ['ts']);

};
