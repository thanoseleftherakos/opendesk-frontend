var path = require('path');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: './dist/main.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'react-hot'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
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
