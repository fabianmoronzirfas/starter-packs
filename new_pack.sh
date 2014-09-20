#!/bin/bash

  html_str='<!doctype html>\n
<html lang="en">\n
  <head>\n
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n
    <title>a title</title>\n
    <meta name="description" content="something">\n
    <meta name="author" content="'$1'">\n
    <!-- bower:css -->\n
    <!-- endbower -->\n
    <link rel="stylesheet" type="text/css" href="assets/css/styles.css">\n
    <!--[if lt IE 9]>\n
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>\n
    <![endif]-->\n
  </head>\n
  <body>\n
    <!-- bower:js -->\n
    <!-- endbower -->\n
    <script type="text/javascript" src="assets/js/main.js"></script>\n
  </body>\n
</html>'

  json_pkg='{\n
  "name": "'$1'",\n
  "version": "0.1.0",\n
  "description": "a starter pack for '$1'",\n
    "homepage": "",\n
  "main": "index.html",\n
    "repository": {\n
    "type": "git",\n
    "url": ""\n
  },\n
  "scripts": {\n
    "test": "echo \"Error: no test specified\" && exit 1"\n
  },\n
  "author": "'$USER'",\n
  "license": "MIT",\n
  "dependencies": {},\n
  "devDependencies": {\n
    "grunt": "^0.4.5",\n
    "grunt-contrib-concat": "~0.3.0",\n
    "grunt-contrib-jshint": "~0.7.2",\n
    "grunt-contrib-qunit": "~0.3.0",\n
    "grunt-contrib-uglify": "~0.2.7",\n
    "grunt-contrib-watch": "~0.5.3",\n
    "grunt-wiredep": "^1.9.0",\n
    "load-grunt-tasks": "^0.6.0"\n
  }\n
}\n'

  json_bwr='{\n
  "name": "'$1'",\n
  "version": "0.1.0",\n
  "authors": [\n
    "'$USER'"\n
  ],\n
  "description": "a starter pack for '$1'",\n
  "main": "index.html",\n
  "license": "MIT",\n
  "private": true,\n
  "ignore": [\n
    "**/.*",\n
    "node_modules",\n
    "bower_components",\n
    "test",\n
    "tests"\n
  ],\n
  "dependencies": {}\n
}\n
'
json_grnt="/*global module:false*/\n
module.exports = function(grunt) {\n
require('load-grunt-tasks')(grunt);\n
  grunt.initConfig({\n
    pkg: grunt.file.readJSON('package.json'),\n
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today(\"yyyy-mm-dd\") %>\\\n' + '<%= pkg.homepage ? \"* \" + pkg.homepage + \"\\\n\" : \"\" %>' + '* Copyright (c) <%= grunt.template.Today(\"Yyyy\") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, \"type\").join(\", \") %> */\\\n',\n
    wiredep: {\n
      target: {\n
        src: [\n
          'index.html'\n
        ],\n
        cwd: '',\n
        dependencies: true,\n
        devDependencies: false,\n
        exclude: [],\n
        fileTypes: {},\n
        ignorePath: '',\n
        overrides: {}\n
      }\n
    }\n
  });\n
  grunt.registerTask('bower-install', ['wiredep']);\n
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);\n
};\n"

js='$(document).ready(function() {
  $('body').prepend("<div><p>Hello World</p></div>");
});'

main(){
  if [ $# -eq 0 ]
  then
    echo "please provide one name for a new starter pack"
    exit
fi
# make folders
# mkdir $1
mkdir -p $1/assets/css $1/assets/images $1/assets/js
# make files
touch $1/assets/css/styles.css
echo $js > $1/assets/js/main.js
cd $1
  echo $json_pkg > package.json
  echo  $json_grnt > Gruntfile.js
  echo $json_bwr > bower.json
  echo $html_str > index.html
  npm install
  bower install jquery --save && grunt bower-install
}

main $1