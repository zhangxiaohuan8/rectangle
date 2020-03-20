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
          src: 'dist/index.html',
          dest: 'dist/index.html'
        }
      },
      cssmin: {
        'dist/rectangle.css': 'rectangle.css'
      },
      uglify: {
        release:{
          files: {
            'dist/bundle.min.js': 'dist/bundle.js',
          }
        }
      },
      useminPrepare: {
        html: 'index.html',
        options: {
          dest: 'dist'
        }
      },
      usemin: {
        html: ['dist/index.html']
      },
      concat: {
        options: {
            separator: ';'
          },
        js: {
          src: ['rectangle.js', 'calc.js'],
          dest: 'dist/bundle.min.js'
        }
      },
      clean: ['dist/bundle.js', '.tmp'],
      copy: {
        html: {
          src: './index.html',
          dest: './dist/index.html'
        }
      }	    
  
    });
  
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-clean');


    grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
    grunt.registerTask('release', ['copy', 'useminPrepare', 'concat', 'uglify', 'usemin', 'cssmin', 'htmlmin', 'clean']);
  };