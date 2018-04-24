var path = require ('path');
var webpack = require ('webpack');

    module.exports = {
        entry: './src/App.js',
        output: {
            path: path.join(__dirname), // <- change last argument
            filename: 'public/build/bundle.js',
            publicPath: '/public/',
            sourceMapFilename: 'public/build/bundle.map'
        },
        devtool : '#source-map',
        module: {
            rules: [
                {
                    test : /\.js$/,
                    exclude: /node_modules/,
                    loader : 'babel-loader',
                    query : {
                        presets : ["react","es2015"]
                    }
                }
            ]
        }
    };