module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      browserify: {
        dist: {
          src: ['tool1/app/app.js','tool2/app/app.js','tool3/app/app.js','tool4/app/app.js','example/app/app.js','tool5/app/app.js','tool8/app/app.js'],
          dest: 'dist/bundle.js'
          // Note: The entire `browserify-shim` config is inside `package.json`.
        }
      },
      concat: {
        options: {
          //separator: ';',
        },
        dist: {
          src: ['dist/bundle.js', 'libs/jspdf.min.js', 'libs/rzslider.js','shared/decorator.js','shared/sharedControllers.js','shared/default.js','shared/directives/staticInclude.js','shared/directives/readmore.js'],
          dest: 'dist/bundle.js'
        }
      },
      ngAnnotate: {
            options: {
                // Task-specific options go here.
            },
            dist: {
                files: {
                    'dist/bundle.js': ['dist/bundle.js']
                }
            }
        },
      uglify: {
        options: {
          //banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          //,mangle: false //uglify breaks angular
        },
        dist: {
          src: 'dist/bundle.js',
          dest: 'dist/bundle.min.js'
        }
      },
      copy: {
        dist: {
          files: [
            // includes files within path and its sub-directories 
            {expand: true, src: ['assets/css/**'], dest: 'dist/'},
            
            {expand: true, src: ['assets/fonts/**'], dest: 'dist/'},
            
            {expand: true, src: ['assets/images/**'], dest: 'dist/'},
            
            {expand: true, src: ['tool1/index.html'], dest: 'dist/'},
            
            {expand: true, src: ['tool1/app/views/**'], dest: 'dist/'},
            
            {expand: true, src: ['tool2/index.html'], dest: 'dist/'},
            
            {expand: true, src: ['tool2/app/views/**'], dest: 'dist/'},
            
            {expand: true, src: ['tool3/index.html'], dest: 'dist/'},
            
            {expand: true, src: ['tool3/app/views/**'], dest: 'dist/'},
            
            {expand: true, src: ['tool4/index.html'], dest: 'dist/'},
            
            {expand: true, src: ['tool4/app/views/**'], dest: 'dist/'},
            
            {expand: true, src: ['tool5/index.html'], dest: 'dist/'},
            
            {expand: true, src: ['tool5/app/views/**'], dest: 'dist/'},
            
            {expand: true, src: ['tool8/index.html'], dest: 'dist/'},
            
            {expand: true, src: ['tool8/app/views/**'], dest: 'dist/'},
            
            {expand: true, src: ['example/index.html'], dest: 'dist/'},
            
            {expand: true, src: ['example/app/views/**'], dest: 'dist/'},
            
            {expand: true, src: ['shared/views/**'], dest: 'dist/'}
          ]
        }
      },
      'string-replace': {
        dist: {
          files: {
            'dist/': ['dist/tool1/index.html','dist/tool2/index.html','dist/tool3/index.html','dist/tool4/index.html','dist/tool5/index.html','dist/tool8/index.html','dist/example/index.html']
          },
          options: {
            replacements: [
              // place files inline example
              {
                pattern: '<script src="../dist/bundle.js"></script>',
                replacement: '<script src="../bundle.min.js"></script>'
              },
              {
                pattern: '<script src="../libs/rzslider.js"></script>',
                replacement: ''
              }
            ]
          }
        }
      },
      sass: {
        dist: {
          options: {                       // Target options
            style: 'compressed'
          },
          files: {
            'assets/css/main.css': 'assets/sass/main.scss'
          }
        },
        dev: {
          //options: {                       // Target options
          //  style: 'compressed'
          //},
          files: {
            'assets/css/main.css': 'assets/sass/main.scss'
          }
        }
      },
      watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass:dev']
            }
        }
    });
    
    // Load the plugin that provides the "browserify" task.
    grunt.loadNpmTasks('grunt-browserify');
    
    // Load the plugin that provides the "concat" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    // Load the plugin that provides the "ng-annotate" task.
    grunt.loadNpmTasks('grunt-ng-annotate');
    
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Load the plugin that provides the "copy" task.
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    // Load the plugin that provides the "string-replace" task.
    grunt.loadNpmTasks('grunt-string-replace');
    
    // Load the plugin that provides the "sass" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Default task(s).
    grunt.registerTask('default', ['sass:dist','browserify','concat','ngAnnotate','uglify','copy','string-replace']);
    
    grunt.registerTask('sass-watch', ['watch']);
    
    grunt.registerTask('js', ['browserify','concat','ngAnnotate']);

};