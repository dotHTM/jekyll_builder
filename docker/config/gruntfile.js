module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    compass: {
      dev: {
        options: {
          config: '/app/config/config.rb'
        } //options
      } //dev
    }, //compass
    watch: {
      options: { 
        // atBegin: true,
        livereload: true 
      }, //options
      sass: {
        files: ['/app/static_src/_sass/*', 
        '/app/static_src/css/_main.scss', 
        ],
        tasks: ['compass:dev'],
      }, //sass
      cssjekyll: {
        files: ['_site/css/*'],
      }, //cssjekyll
      html: {
        files: ['*.html'],
      }, //html
      web: {
        files: [ '_site/' ],
      }, //web
    }, //watch
  }) //initConfig
  grunt.registerTask('default', ['compass:dev', 'watch']);
} //exports