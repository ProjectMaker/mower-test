/**
 * Created by thomasmichelet on 02/01/16.
 */
module.exports = function (grunt) {

  // configuration
  grunt.initConfig({
    mochaTest: {
      unit: {
        options: {
          reporter: 'spec'
        },
        src: ['test/unit/**/*.test.js']
      }
    },

    env: {
      coverage: {
        APP_DIR_FOR_CODE_COVERAGE: '../test/coverage/instrument/app/'
      }
    },


    clean: {
      coverage: {
        src: ['test/coverage/']
      }
    },


    instrument: {
      files: 'app/**/*.js',
      options: {
        lazy: true,
        basePath: 'test/coverage/instrument/'
      }
    },


    storeCoverage: {
      options: {
        dir: 'test/coverage/reports'
      }
    },


    makeReport: {
      src: 'test/coverage/reports/**/*.json',
      options: {
        type: 'lcov',
        dir: 'test/coverage/reports',
        print: 'detail'
      }
    }
  });


  // plugins
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-istanbul');
  grunt.loadNpmTasks('grunt-env');

  // tasks
  grunt.registerTask('unit', ['mochaTest:unit']);
  grunt.registerTask('coverage', ['clean', 'env:coverage',
    'instrument', 'mochaTest:unit', 'storeCoverage', 'makeReport']);

};