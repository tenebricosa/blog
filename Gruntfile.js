module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
      sass: {
          options: {
              sourceMap: false
          },
          dist: {
              files: {
                  'dist/output.css': 'static/styles/main.scss'
              }
          }
      },

      watch: {
        sass: {
            files: ['static/styles/*.scss'],
            tasks: ['sass']
        }
      },

      mustache_render: {
        json_data: {
          options: {template: 'templates/post-layout.mustache'},
          files: [
            {
              'dist/posts/2014-09-18.html': 'templates/posts/2014-09-18.json',
              'dist/posts/2014-09-24.html': 'templates/posts/2014-09-24.json',
              'dist/posts/2014-11-05.html': 'templates/posts/2014-11-05.json',
              'dist/posts/2014-11-10.html': 'templates/posts/2014-11-10.json',
            }
          ]
        },
      },

      clean: ["dist/posts/"]
  });

  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('create-post', ['clean', 'mustache_render']);
  grunt.registerTask('build', ['clean', 'mustache_render', 'sass']);

};
