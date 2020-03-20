module.exports = function (grunt) {
    grunt.initConfig({
      htmlhint: {
        options: {
          htmlhintrc: '.htmlhintrc'
        },
        src: ['*.html']
      },
      csslint: {
        options: {
          csslintrc: '.csslintrc'
        },
        src: ['*.css']
      },
      eslint: {
        options: {
          configFile: '.eslintrc.json'
        },
        target: ['*.js']
      },
      htmlmin: {
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        files: {
          src: './index.html',
          dest: 'dist/index.html'
        }
      },
      cssmin: {
        'dist/rectangle.css': 'rectangle.css'
      },
      uglify: {
        release:{
          files: {
            'dist/rectangle.js': 'rectangle.js',
          }
        }
      }	    
  
    });
  
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
    grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);
  };