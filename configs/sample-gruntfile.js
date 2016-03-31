module.exports = function(grunt) {

	"use strict";

	grunt.initConfig({
		webServer: {
			rootFolder: "dist/www",
			port: 8080,
			uploadFolder: "dist/uploads/"
		},
		mongoServer: {
			host: "localhost",
			port: 27017,
			dbName: "t4dclass"
		},
		sass: {
			site: {
				files: { "dist/www/css/site.css": "src/www/css/site.scss" }
			}
		},
		cssmin: {
			site: {
				files: { "dist/www/css/site.min.css": "dist/www/css/site.css" }
			}
		},
		copy: {
			main: {
				files: [
					{
						expand: true,
						cwd: "./src",
						src: ["index.html"],
						dest: "./dist"
					}
				]
			}
		},
		babel: {
			options: {
				plugins: ["transform-react-jsx"],
				presets: ["es2015", "react"]
			},
			js: {
				files: [{
					expand: true,
					cwd: "src/www/js",
					src: ["**/*.js","**/*.jsx"],
					dest: "dist/www/js",
					ext: ".js"
				}]
			}
		},
		watch: {
			sass: {
				files: ["src/www/css/site.scss"],
				tasks: ["sass", "cssmin"]
			},
			copy: {
				files: ["src/**/*","!src/www/js/**/*","!src/www/css/**/*"],
				tasks: ["copy"]
			},
			babel: {
				files: ["src/www/js/**"],
				tasks: ["babel"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-babel");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", [
		"sass", "cssmin", "copy", "babel", "watch"
	]);

};
