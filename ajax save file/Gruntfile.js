/*global module:false*/
 module.exports = function(grunt) {
 require('load-grunt-tasks')(grunt);
 grunt.initConfig({
 pkg: grunt.file.readJSON('package.json'),
 banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' + '* Copyright (c) <%= grunt.template.Today("Yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
 wiredep: {
 target: {
 src: [
 'index.html'
 ],
 cwd: '',
 dependencies: true,
 devDependencies: false,
 exclude: [],
 fileTypes: {},
 ignorePath: '',
 overrides: {}
 }
 }
 });
 grunt.registerTask('bower-install', ['wiredep']);
 grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
 };

