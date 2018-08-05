const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');

// creates js file containing common code across all bundles from entry points
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin({ name: 'common' });

const port = Number(process.env.PORT || 3000) // used by browsersync

module.exports = {
  // multiple entry points generates multiple bundles based on paths,
  // using './admin-dist/bundle' as the key causes the bundle to be put
  // in the /admin-dist folder because of the output filename [name]
  entry: { bundle: `${SRC_DIR}/index.jsx` },
  output: {
    filename: '[name].js',
    path: DIST_DIR,
  },
  plugins: [
    new BundleAnalyzerPlugin({analyzerMode: 'static', openAnalyzer: false }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    commonsPlugin,
    // new BrowserSyncPlugin({
    //   host: 'localhost',
    //   port: port+1,
    //   proxy: `http://localhost:${port}/`,
    //   files: ['./react-client/dist/*.js', './react-client/dist/*.html'],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'transform-object-rest-spread'],
        },
      },

      // puts css in style tag in head of page
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              // localIdentName: '[name]__[local]--[hash:base64:8]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
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
      // end puts css in style tag
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
