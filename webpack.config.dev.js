const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractStyleToCSS = new ExtractTextPlugin('css/stylus.css');
//const extractCSS = new ExtractTextPlugin('css/styles.css');

module.exports = {
    entry: [
        //'react-hot-loader/patch',
        //'webpack-hot-middleware/client',
        './src/main.js',
        './src/styles/style.styl'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.styl$/,
            exclude: /node_modules/,
            include: path.join(__dirname, 'src'),
            use: ['css-hot-loader'].concat(ExtractTextPlugin.extract([ 'css-loader', 'stylus-loader' ]))
            //use: extractStyleToCSS.extract([ 'css-loader', 'stylus-loader' ])
        },
        /*{
            test: /\.css$/,
            exclude: /node_modules/,
            include: path.join(__dirname, 'src'),
            use: extractCSS.extract('css-loader')
        }*/
    ]
},
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        extractStyleToCSS,
        new webpack.DefinePlugin({
            'process.env.BROWSER': JSON.stringify(true)
          }),
        //extractCSS
        
    ],
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
