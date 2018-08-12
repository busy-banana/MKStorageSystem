const webpack = require('webpack');
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
        // publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
            	test: /\.css$/,
                loader: 'style-loader!css-loader'

        	},
        	{
            	test: /\.(png|jpg)$/,
            	loader: 'url-loader'
            },
        ]
    },
    plugins: [
        // new ExtractTextPlugin('[name].css')
    ],
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        contentBase: './src/app'
    }
}