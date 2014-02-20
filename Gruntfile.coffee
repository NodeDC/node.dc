module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    meta: {
      banner: "/****************************************************************************************\n" +
              " * Node.DC Website - Version <%= pkg.version %>\n" +
              " *\n" +
              " * Copyright <%= grunt.template.today(\"yyyy\") %> Node.DC <@NodeDC>\n" +
              " ****************************************************************************************/"
    }

    jshint:
      files: ["public/ng/*.js", "server.js", "protractor.conf.js"]

    coffeelint:
      options:
        configFile: "coffeelint.json"
      files: ["Gruntfile.coffee"]

    less:
      options:
        paths: ['public/css']
        cleancss: true
      src: 
        expand: true
        cwd:    "public/css"
        src:    "*.less"
        ext:    ".min.css"
        dest: "public/css/"

    cssmin:
      combine:
        options:
          banner: "<%= meta.banner %>"
        minify:
          expand: true,
          cwd: 'public/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'public/css/',
          ext: '.min.css'

    protractor:
      angular:
        configFile: "protractor.conf.js"

  grunt.loadNpmTasks "grunt-contrib-jshint"
  grunt.loadNpmTasks "grunt-protractor-runner"
  grunt.loadNpmTasks "grunt-contrib-less"
  grunt.loadNpmTasks "grunt-contrib-cssmin"
  grunt.loadNpmTasks "grunt-coffeelint"

  grunt.registerTask "default", ["jshint", "less"]
