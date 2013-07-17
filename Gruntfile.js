module.exports = function(grunt) {

  function loadFrom(path, config) {
    var glob = require('glob'),
    object = {};

    glob.sync('*', {cwd: path}).forEach(function(option) {
      var key = option.replace(/\.js$/,'');
      config[key] = require(path + option);
    });
  }

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    env: process.env,
    clean: ['tmp', 'dist']
  };

  loadFrom('./tasks/options/', config);

  grunt.initConfig(config);

  require('matchdep')
  .filterDev('grunt-*')
  .filter(function(name){ return name !== 'grunt-cli'; })
  .forEach(grunt.loadNpmTasks);

  grunt.loadTasks('tasks');

  grunt.registerTask('build', [
    'clean',
    'transpile:main',
    'concat:main',
    'jshint:all',
    'copy:main'
  ]);


  grunt.registerTask('build_test', [
    'build',
    'transpile:test',
    'copy:test',
    'concat:test',
    'jshint:test'
  ]);

  grunt.registerTask('server', ['build_test','connect','watch']);

  grunt.registerTask('test', ['build_test', 'connect', 'qunit:all']);

  grunt.registerTask('default', ['build']);

};
