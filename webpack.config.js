const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: [
      path.resolve(__dirname, 'src/templates/index.pug'),
    ],
    app: [
      path.resolve(__dirname, 'src/app.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(pug|jade)$/,
        include: [
          path.resolve(__dirname, 'src/templates'),
        ],
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'html-loader',
            },
            {
              loader: 'pug-html-loader',
              options: { pretty: true, exports: false },
            },
          ],
        }),
      },
      {
        test: /\.(pug|jade)$/,
        include: [
          path.resolve(__dirname, 'src/components'),
        ],
        use: [
          'html-loader',
          'pug-html-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/*/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }],
          ],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
}
