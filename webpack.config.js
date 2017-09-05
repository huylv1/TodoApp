var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                context: '/', // <- putting this line right under "options" did the trick
                sassLoader: {
                    includePaths: [
                        path.resolve(__dirname, './node_modules/foundation-sites/scss'),
                    ]
                }
            }
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [__dirname, path.resolve('app/components'), 'node_modules', path.resolve('app/api')],
        extensions: ['*', '.js', '.jsx'],
        alias: {
            'applicationStyles': 'app/styles/app.scss'
        }
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            },
            exclude: ['node_modules']
        }]
    },
    devtool: 'cheap-module-source-map'
}