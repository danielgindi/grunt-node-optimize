'use strict';

module.exports = function(grunt) {

	grunt.registerMultiTask('node_optimize', 'grunt-node-optimize', function() {

		var that = this;
		var optimizer = require('node-optimize');

		this.files.forEach( function(file) {

			file.src.forEach(function (fileSrc) {

				var merged = new optimizer(that.data.options).merge(fileSrc);

				var dest = file.dest;

				if (grunt.file.isDir(file.dest)) {
					dest = file.dest + (/[/\\]$/.test(file.dest) ? '' : '/') + path.basename(fileSrc);

					grunt.file.mkdir(file.dest);
					grunt.file.write(dest, merged);
				} else {
					grunt.file.write(dest, merged);
				}

				grunt.log.writeln('"' + dest + '" created.');

			});

		});

	});

};
