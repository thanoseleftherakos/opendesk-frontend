var path = require('path');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: './dist/main.min.js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        loaders: [
            
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: ['babel-loader'],
                query: {
                    presets: ['react', 'es2015','stage-1']
                }
            },
            {
              test: /\.s?css$/,
              loaders: ['style','css','sass'],
              include:path.join(__dirname,'src')
            }
        ]
    }
};
