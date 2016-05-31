module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				,mangle : {}
			}
			/*
			,build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
			*/
			,first_target: {
    				files: [{ 
					src: 'js/*js'
					, dest: 'dist/bootstrap-colorpicker-module.min.js'
				}
				]
			}
		}
		,less: {
                 development: {
                     options: {
                         paths: ["css"]
                     },
                     files: {"css/colorpicker.min.css": "less/colorpicker.less"}
                 },
                 production: {
                     options: {
                         paths: ["css"],
                         cleancss: true
                     },
                     files: {"css/colorpicker.min.css": "less/colorpicker.less"}
                 }
             }

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// Load LESS
	grunt.loadNpmTasks('grunt-contrib-less');

	// Default task(s).
	grunt.registerTask('default', ['less','uglify']);

};
