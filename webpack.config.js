module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.styl$/, loader: 'css!style!stylus' },
      // stage=1 is a query string to pass in loader options
      // in this case, 'stage' allows us to turn features on and off
      // https://babeljs.io/docs/plugins/preset-stage-1/
      // regex exclude node_modules so we don't convert everything in
      // there from es6 to es5.
      { test: /\.js$/, loader: 'babel?stage=1', excludes: [/node_modules/] }
    ]
  },

  stylus: {
    use: [require('jeet')(), require('rupture')()]
  }
};
