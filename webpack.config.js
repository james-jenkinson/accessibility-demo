const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const config = require('config')

/** @typedef {import('webpack').Configuration} WebpackConfiguration */

const output = 'dist'

/** @type {WebpackConfiguration} */
const webpackConfig = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, output),
    filename: 'app.[chunkhash].js'
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyPlugin({
      patterns: [
        { from: 'src/locales', to: 'locales' }
      ]
    }),
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(config.get('appConfig'))
    })
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    alias: {
      config: path.resolve(__dirname, './src/utils/config')
    },
    extensions: ['.tsx', '.ts', '.js']
  }
}

module.exports = webpackConfig
