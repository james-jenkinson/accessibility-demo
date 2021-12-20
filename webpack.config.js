const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

/** @typedef {import('webpack').Configuration} WebpackConfiguration */

const output = 'dist'

const basename = process.env.PUBLIC_URL

/** @type {WebpackConfiguration} */
const config = {
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
      BASENAME: basename
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
    extensions: ['.tsx', '.ts', '.js']
  }
}

module.exports = config
