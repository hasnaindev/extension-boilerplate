const path = require('path');
const MiniExtractCssPlugin = require('mini-css-extract-plugin');

module.exports = ({ mode }) => {
  const beforeEntry = [];

  if (mode === 'production') {
    beforeEntry.push('@babel/polyfill');
  }

  return {
    resolve: {
      extensions: ['.js', '.css', '.scss'],
    },

    plugins: [
      new MiniExtractCssPlugin({
        filename: '../styles/[name].css',
      }),
    ],

    module: {
      rules: [
        { test: /.js$/, exclude: /(node_modules)/, loader: 'babel-loader' },
        {
          test: /.s?css$/,
          use: [MiniExtractCssPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },

    entry: {
      background: beforeEntry.concat('./src/background/index.js'),
      content: beforeEntry.concat('./src/content/index.js'),
      popup: beforeEntry.concat('./src/popup/index.js'),
    },

    output: {
      path: path.resolve('addon', 'scripts'),
      filename: '[name].js',
    },

    mode,
  };
};
