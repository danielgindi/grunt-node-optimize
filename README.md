grunt-node-optimize
===================

[![npm Version](https://badge.fury.io/js/grunt-node-optimize.png)](https://npmjs.org/package/grunt-node-optimize)

We all need a tool to optimize a node.js project and create a single `js` file from it, 
Taking care of `require`s and leaving out `node_modules`.

Well I needed one too, and there wasn't one, so I build it!

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-node-optimize --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-node-optimize');
```

## Options

See [https://github.com/danielgindi/node-optimize](https://github.com/danielgindi/node-optimize).

## Usage Examples

```js
grunt.initConfig({
	node_optimize: {
		dist: {
			options: {
				ignore: [
					'config/db.js',
					'private/some-other-file.js',
				]
			},
			files: {
				'dist/main.optimized.js': 'main.js'
			}
		}
	}
});
```

## Contributing

If you have anything to contribute, or functionality that you luck - you are more than welcome to participate in this!
If anyone wishes to contribute unit tests - that also would be great :-)

## Me
* Hi! I am Daniel Cohen Gindi. Or in short- Daniel.
* danielgindi@gmail.com is my email address.
* That's all you need to know.

## Help

If you like what you see here, and want to support the work being done in this repository, you could:
* Actually code, and issue pull requests
* Spread the word
* 
[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=G4DXZS34VMS7A)

## License

All the code here is under MIT license. Which means you could do virtually anything with the code.
I will appreciate it very much if you keep an attribution where appropriate.

    The MIT License (MIT)

    Copyright (c) 2013 Daniel Cohen Gindi (danielgindi@gmail.com)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
