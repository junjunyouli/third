const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
	  entry: {
	  	index: [
	  		path.join(__dirname,"../src/public/pages/index.es"),
	  		path.join(__dirname,"../src/public/pages/add.js")
	  	],
	  	tags: [
	  		path.join(__dirname,"../src/public/pages/tags.es")
	  	]
	  },
	  output: {
	    filename: 'public/pages/[name]-[hash:5].js',
	    path: path.resolve(__dirname, '../build/')
	  },
	 module: {
		  rules: [
		    {
		      test: /\.es$/,
		      exclude: /(node_modules|bower_components)/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: ["es2015","stage-0"]
		        }
		      }
		    }
		  ]
	},
	  plugins:[
	  	new webpack.DefinePlugin({
	  		"process.env":{
	  			NODE_ENV: '"dev"'
	  		}
	  	}),
	  	new LiveReloadPlugin({appendScriptTag: true})

	  ]
};