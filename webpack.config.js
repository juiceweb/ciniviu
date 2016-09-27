var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build/js');
var DEV_DIR = path.resolve(__dirname, 'dev/js');

var config = {
	entry: DEV_DIR+'/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'index.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: DEV_DIR,
				loader: 'babel'
			}
		]
	}
};

module.exports = config;
