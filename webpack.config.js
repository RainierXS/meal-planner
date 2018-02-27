let path = require('path');

let SRC_DIR = path.join(__dirname, '/react-client/src');
let DIST_DIR = path.join(__dirname, '/react-client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        },
      },

      // creates css files in styles folder in dist, avoid duplicating filenames
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: 'style-loader/url' },
      //     {
      //       loader: 'file-loader',
      //       options: { name: '[name].css', outputPath: 'styles/' }
      //     }
      //   ]
      // }
      // end creates css files

      // puts css in style tag in head of page
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(gif|jpg|jpeg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', outputPath: 'assets/images/',
            }
          },
        ],
      },
      // end puts css in style tag
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};