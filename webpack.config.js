import { request } from 'http';

module.exports = {
    output: {
        filename: 'bundle.js'
    },

    devtool: 'sourcemap',

    module: {
        loaders: [
            { test: /\.html$/, loader: 'raw' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.js$/, loader: 'babel?stage=1', excludes:[/node_modules/] }
        ]
    },
    stylus: {
        use: [require('jeet')(), require('rupture')()]
    }
};