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
      },

      mustache_render: {
        json_data: {
          files: [
            {
              expand: true,
              src: 'src/posts/*.json',
              template: 'src/post-layout.mustache',
              dest: 'dist/temp'
            }
          ]
        },
      }
  });

  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('create-post', ['mustache_render']);

};
