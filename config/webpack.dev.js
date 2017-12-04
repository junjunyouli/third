const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
	  			NODE_ENV: '"dev"'
	  		}
	  	}),
	  	new LiveReloadPlugin({appendScriptTag: true}),
	  	new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
	  	
	  	new webpack.optimize.CommonsChunkPlugin({
			    name: 'vendor',
			    filename: 'public/pages/common/[name]-[hash:5].js',
		 }),
	  	new HtmlWebpackPlugin({  
		      filename: './views/template.html',
		      template: 'src/widget/template.html',
		      inject:false
		}),
		new HtmlWebpackPlugin({  
		      filename: './views/index.html',
		      template: 'src/views/index.js',
		      inject:false,
		       chunks: ['vendor', 'index', 'tags']
		}),
		new HtmlWebpackPlugin({  
		      filename: './widget/index.html',
		      template: 'src/widget/index.html',
		       inject:false,
		})

	  ]
};