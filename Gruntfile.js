module.exports = function(grunt) {

	"use strict";

	grunt.initConfig({
		webServer: {
			folder: "dist/www",
			port: 8080
		},
		mongoServer: {
			host: "localhost",
			port: 27017,
			dbName: "t4dclass"
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
				presets: ["es2015"]
			},
			js: {
				files: [{
					expand: true,
					cwd: "src",
					src: ["**/*.js","!www/**"],
					dest: "dist",
					ext: ".js"
				}]
			}
		},
		webpack: {
			app: {
				entry: "./src/www/js/index.js",
				output: {
					path: "./dist/www/js",
					filename: "index.js"
				},
				module: {
					loaders: [{
						test: /.jsx$/,
						loader: "babel-loader",
						exclude: /node_modules/,
						query: {
							presets: ["es2015", "react"]
						}
					}, {
						test: /\.js$/,
						exclude: /node_modules/,
						loader: "babel-loader",
						query: {
							presets: ["es2015"]
						}
					}]
				}
			}
		},
		watch: {
			copy: {
				files: ["src/www/index.html"],
				tasks: ["copy"]
			},
			babel: {
				files: ["src/**/*.js","!src/www/**"],
				tasks: ["babel"]
			},
			webpack: {
				files: ["src/www/**/*.js","src/www/**/*.jsx"],
				tasks: ["webpack"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-babel");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-webpack");

	grunt.registerTask("server", function() {
		let server = require("./dist/server");
		server.default(grunt.config());
		this.async();
	});

	grunt.registerTask("default", [
		"copy", "babel", "webpack", "watch"
	]);

};
