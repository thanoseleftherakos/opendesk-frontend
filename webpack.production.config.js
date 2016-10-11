var path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: './dist/main.min.js'
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new WebpackCleanupPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true,
                minimize: true
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.DedupePlugin()
    ],
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
