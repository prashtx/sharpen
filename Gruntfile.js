/*jshint node: true */
'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    harp: {
      dist: {
        source: '.',
        dest: '_build'
      }
    }
  });

  grunt.loadNpmTasks('grunt-harp');

  grunt.registerTask('build', ['harp']);
};
