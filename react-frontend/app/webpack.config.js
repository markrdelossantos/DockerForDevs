
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var merge = require("webpack-merge");

const TARGET = process.env.npm_lifecycle_event;

var devDep = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/react-playaround.js",
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
          }
        }
      ]
    },
    output: {
      path: __dirname + "/js",
      filename: "react-playaround.min.js"
    },
    plugins: debug ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};

if (TARGET === "start" || !TARGET) {
    module.exports = merge(devDep, {
      devtool: "cheap-module-source-map",
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            watchOptions: {
                poll: 1000,
                aggregateTimeout: 300
            },

            // display only errors to reduce the amount of output
            stats: "errors-only",

            // parse host and port from env so this is easy
            // to customize
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    }
  )
};