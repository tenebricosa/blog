module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
      sass: {
          options: {
              sourceMap: false
          },
          dist: {
              files: {
                  'dist/blog.css': 'static/styles/main.scss'
              }
          }
      },

      watch: {
        sass: {
            files: ['static/styles/*.scss'],
            tasks: ['sass']
        },
        templates: {
            files: ['templates/'],
            tasks: ['clean', 'mustache_render']
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

      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['static/scripts/*.js'],
          dest: 'dist/temp/blog.js',
        },
      },

      uglify: {
        my_target: {
          files: {
            'dist/blog.min.js': ['dist/temp/blog.js']
          }
        }
      },

      clean: ['dist/temp/'],
  });

  grunt.registerTask('default', ['mustache_render', 'sass', 'concat', 'uglify', 'clean']);
  grunt.registerTask('create-post', ['mustache_render']);
  grunt.registerTask('watch', ['mustache_render', 'sass', 'concat', 'uglify', 'clean', 'watch']);

};
