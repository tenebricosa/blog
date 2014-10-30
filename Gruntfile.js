module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
      sass: {
          options: {
              sourceMap: false
          },
          dist: {
              files: {
                  'static/styles/output.css': 'static/styles/main.scss'
              }
          }
      },

      watch: {
        sass: {
            files: ['static/styles/*.scss'],
            tasks: ['sass']
        }
      }
  });

  grunt.registerTask('default', ['sass', 'watch']);

};