var webpack = require('webpack');
var path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'build/js');
const DEV_DIR = path.resolve(__dirname, 'dev/js');

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
	},
	plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
};

module.exports = config;
