const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		'block': './src/block.js',
		'front': './src/front.js',
	},
};
