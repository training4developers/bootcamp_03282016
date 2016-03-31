module.exports = function(grunt) {

	"use strict";

	grunt.initConfig({
		webServer: {
			folder: "dist/www",
			port: 8080
		},
		copy: {
			main: {
				files: [
					{
						expand: true,
						cwd: "./src/www",
						src: ["index.html"],
						dest: "./dist/www"
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
					cwd: "src",
					src: ["**/*.js","**/*.jsx"],
					dest: "dist",
					ext: ".js"
				}]
			}
		},
		watch: {
			copy: {
				files: ["src/www/index.html"],
				tasks: ["copy"]
			},
			babel: {
				files: ["src/**/*.js","src/**/*.jsx"],
				tasks: ["babel"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-babel");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("server", function() {
		let server = require("./dist/server");
		server.default(grunt.config());
		this.async();
	});

	grunt.registerTask("default", [
		"copy", "babel", "watch"
	]);

};
