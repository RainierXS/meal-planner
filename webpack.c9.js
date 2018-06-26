const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');

// creates js file containing common code across all bundles from entry points
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin({ name: 'common', minChunks: function (module) {
    return module.context && module.context.includes('node_modules');
  }
});

module.exports = {
  entry: {
    bundle: `${SRC_DIR}/index.jsx`,
  },
  output: {
    filename: '[name].js',
    path: DIST_DIR,
  },
  plugins: [
    commonsPlugin,
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8081,
      proxy: 'http://localhost:8080/',
      files: ['./react-client/dist/*.js', './react-client/dist/*.html'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        },
      },
      // puts css in style tag in head of page
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      // end puts css in style tag
      {
        test: /\.(gif|jpg|jpeg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', outputPath: 'assets/images/',
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
