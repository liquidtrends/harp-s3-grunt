module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		shell: {
      compile: {
        command: 'harp compile'
      }
		},

    s3: {
    			production: {
    				options: {
    					key: 'YOUR_KEY',
    					secret: 'YOUR_BUCKET',
    					bucket: 'BUCKET_NAME',
    					access: 'public-read',
              region: "us-west-2"
    				},
    				sync: [{
    					options: {verify:true},
    					src: 'www/**/*.*',
    					dest: '/',
    					rel: 'www'
    				}]
    			}
        }
  });

	//Load NPM tasks
	grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-s3');

	//Grunt tasks
	grunt.registerTask('compile', ['shell:compile']);
  grunt.registerTask('production', ['s3:production']);
};
