module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['public/ng/*.js', 'server.js', 'Gruntfile.js', 'protractor.conf.js']
    },
    protractor: {
      angular: {
        configFile: "protractor.conf.js"
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.registerTask("default", ["jshint", "protractor"]);

};