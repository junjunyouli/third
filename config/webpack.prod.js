const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
		    },
		    {
		        test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
		      }
		  ]
	},
	  plugins:[
	  	new webpack.DefinePlugin({
	  		"process.env":{
	  			NODE_ENV: '"prod"'
	  		}
	  	}),
	  	new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
	  	 new webpack.optimize.UglifyJsPlugin({
		    compress: {
		      warnings: false,
		      drop_console: false,
		    }
		  }),
	  	 new webpack.optimize.CommonsChunkPlugin({
			    name: 'vendor',
			    filename: 'public/pages/common/[name]-[hash:5].js',
		 }),
	  	 new OptimizeCssAssetsPlugin({
		      assetNameRegExp: /\.css$/g,
		      cssProcessor: require('cssnano'),
		      cssProcessorOptions: { discardComments: { removeAll: true } },
		      canPrint: true
		}),
	  	new LiveReloadPlugin({appendScriptTag: true})
	  ]
};