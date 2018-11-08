'use strict';
module.exports = function (grunt) {
  [
    'grunt-contrib-watch',
    'grunt-contrib-clean',
    'grunt-contrib-copy',
    'grunt-contrib-less',
    'grunt-contrib-concat',
    'grunt-contrib-uglify',
    'grunt-combine-media-queries',
    'grunt-ng-constant',
    'grunt-contrib-connect',
    'grunt-usemin',
    'grunt-filerev',
    'grunt-ng-annotate',
    'grunt-contrib-htmlmin',
    'grunt-contrib-imagemin',
    'grunt-svgmin',
    'grunt-contrib-cssmin'

  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dev: {
        src: [
          '!assets/less/**.less',
          '!assets/less/lib/*.css',
          'assets/less/*.css'
        ]
      },
      dist: {
        files: [{
          dot: true,
          src: [
            '!assets/less/**.less',
            '!assets/less/lib/*.css',
            'assets/less/*.css',
            '.tmp',
            'dist/{,*/}*',
            '!dist/.git{,*/}*'
          ]
        }]
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/img',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: 'dist/assets/img'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/img',
          src: '{,*/}*.svg',
          dest: 'dist/assets/img'
        }]
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '',
          dest: 'dist',
          src: [
            '*.{ico,png,txt}',
            '*.html',
            '*.xml',
            'favicon/{,*/}*.*',
            'renewable/**/*.*',
            'assets/img/{,*/}*.{webp}',
            'assets/fonts/{,*/}*.*',
            'assets/templates/{,*/}*.*',
            'assets/json/{,*/}*.*',
            'assets/public/{,*/}*.*'
          ]
        }]
      }
    },

    less: {
      development: {
        options: {
          paths: ['assets/less'],
          ieCompat: false
        },
        files: {
          'assets/css/style.css': 'assets/less/styles/style.less',
          'assets/css/style-reversed.css': 'assets/less/styles/style-reversed.less',
          'assets/css/custom-animations.css': 'assets/less/animations.less'
        }
      },
      color: {
        options: {
          paths: ['assets/less'],
          ieCompat: false
        },
        files: {
          'assets/css/style-blue-color.css': 'assets/less/styles/style-blue-color.less',
          'assets/css/style-reversed.css': 'assets/less/styles/style-reversed.less',
          'assets/css/style-pink-color.css': 'assets/less/styles/style-pink-color.less',
          'assets/css/style-green-color.css': 'assets/less/styles/style-green-color.less',
          'assets/css/style-berry-color.css': 'assets/less/styles/style-berry-color.less',
          'assets/css/style-orange-color.css': 'assets/less/styles/style-orange-color.less'
        }
      },
      production: {
        options: {
          compress: true,
          yuicompress: false,
          paths: ['assets/less'],
          ieCompat: false
        },
        files: {
          'assets/css/min/style.min.css': 'assets/less/styles/style.less',
          'assets/css/min/custom-animations.min.css': 'assets/less/animations.less',
          'assets/css/style-reversed.min.css': 'assets/less/styles/style-reversed.less',
          'assets/css/min/style-blue-color.min.css': 'assets/less/styles/style-blue-color.less',
          'assets/css/min/style-pink-color.min.css': 'assets/less/styles/style-pink-color.less',
          'assets/css/min/style-green-color.min.css': 'assets/less/styles/style-green-color.less',
          'assets/css/min/style-berry-color.min.css': 'assets/less/styles/style-berry-color.less',
          'assets/css/min/style-orange-color.min.css': 'assets/less/styles/style-orange-color.less'
        }
      }
    },
    ngconstant: {
      options: {
        space: '  ',
        wrap: '"use strict";\n\n {%= __ngModule %}',
        name: 'config',
        dest: 'assets/js/config.js'
      },
      // Environment targets
      development: {
        constants: {
          ENV: {
            development: true,
            apiEndpoint: 'http://localhost:3000'
          },
          ThirdParties: {
            intercom: {
              appId: "qgdnsb89"
            },
            wufoo: {
              username: "techvisage",
              forms: {
                contact: 'z8kv0cc0ktfm9y',
                pricing: 'm1fs4a3q0krw3pa'
              },
              host: 'wufoo.com'
            }
          }
        }
      },
      staging: {
        constants: {
          ENV: {
            staging: true,
            apiEndpoint: '{{STAGING_VISAGE_API_ENDPOINT}}'
          },
          ThirdParties: {
            intercom: {
              appId: "{{STAGING_INTERCOM_APP_ID}}"
            },
            wufoo: {
              username: "techvisage",
              forms: {
                contact: 'z8kv0cc0ktfm9y',
                pricing: 'm1fs4a3q0krw3pa'
              },
              host: 'wufoo.com'
            }
          }
        }
      },
      production: {
        constants: {
          ENV: {
            production: true,
            apiEndpoint: '{{PROD_VISAGE_API_ENDPOINT}}'
          },
          ThirdParties: {
            intercom: {
              appId: "{{PROD_INTERCOM_APP_ID}}"
            },
            wufoo: {
              username: "techvisage",
              forms: {
                contact: 'z8kv0cc0ktfm9y',
                pricing: 'm1fs4a3q0krw3pa'
              },
              host: 'wufoo.com'
            }
          }
        }
      }
    },

    cmq: {
      default: {
        files: {
          'assets/css/style.css': 'assets/css/style.css'
        }
      },
      colors: {
        files: {
          'assets/css/style-blue-color.css': 'assets/css/style-blue-color.css',
          'assets/css/style-pink-color.css': 'assets/css/style-pink-color.css',
          'assets/css/style-green-color.css': 'assets/css/style-green-color.css',
          'assets/css/style-berry-color.css': 'assets/css/style-berry-color.css',
          'assets/css/style-orange-color.css': 'assets/css/style-orange-color.css'
        }
      }
    },
    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/assets/js',
          src: '*.js',
          dest: '.tmp/concat/assets/js'
        }]
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          'dist/assets/js/{,*/}*.js',
          'dist/assets/css/{,*/}*.css',
          'dist/assets/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
          //FIXME should be versionned too but I don't know why the references in the css-old are not
          // replaced 'dist/assets/fonts/*'
        ]
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true
        },
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['*.html'],
          dest: 'dist'
        }]
      }
    },
    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: ['./index.html'],
      options: {
        blockReplacements: {
          css: function (block) {
            return '<noscript class="deferred-styles"><link rel="stylesheet" href="' + block.dest + '"></noscript>';
          }
        },
        dest: 'dist',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['dist/{,*/}*.html'],
      css: ['dist/assets/css/{,*/}*.css'],
      js: ['dist/assets/js/*.js'],
      options: {
        assetsDirs: [
          'dist',
          'dist/assets',
          'dist/assets/img',
          'dist/assets/css',
          'dist/assets/fonts'
        ],
        patterns: {
          js: [[/(assets\/img\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g,
            'Replacing references to images']]
        }
      }
    },
    // The actual grunt server settings
    connect: {
      options: {
        port: 9005,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35701
      },
      livereload: {
        options: {
          open: true
        }
      }
    },
    watch: {
      less: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: ['assets/**/*.less'],
        tasks: ['less:development']
      },
      html: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: ['./*.html','asset/**/*.html']
      }
    }

  });

  grunt.registerTask('develop',
    ['clean:dev',
      'ngconstant:development',
      'connect:livereload',
      'watch']);

  grunt.registerTask('production',
    ['clean:dist',
      'ngconstant:production',
      'less:development',
      'less:color',
      'less:production',
      'useminPrepare',
      'imagemin',
      'svgmin',
      'concat',
      'ngAnnotate',
      'copy',
      'cssmin',
      'uglify',
      'filerev',
      'usemin',
      'htmlmin',
      'cmq',
      'ngconstant:development']);

  grunt.registerTask('default', ['develop']);
};
