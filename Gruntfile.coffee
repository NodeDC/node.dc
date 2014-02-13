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

    cssmin:
      combine:
        options:
          banner: "<%= meta.banner %>"
        files: {
          "public/css/app.min.css": ["public/css/app.css"]
        }

    protractor:
      angular:
        configFile: "protractor.conf.js"

  grunt.loadNpmTasks "grunt-contrib-jshint"
  grunt.loadNpmTasks "grunt-protractor-runner"
  grunt.loadNpmTasks "grunt-contrib-cssmin"
  grunt.loadNpmTasks "grunt-coffeelint"

  grunt.registerTask "default", ["jshint", "protractor"]
