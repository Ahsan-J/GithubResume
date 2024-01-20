const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

const { parsed } = require('dotenv').config();

/** @type { import('webpack').Configuration } */
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  mode: process.env.NODE_ENV,
  devtool: "inline-source-map",
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
    ]
  },
  optimization: {
    minimize: true
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: process.env.PORT,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: 'public', 
          to: '.',
          globOptions: {
            ignore: ["**/index.html"],
          },
        }
      ]
    }),
    new HtmlWebpackPlugin({ 
      template: "./public/index.html", 
      basePath: parsed?.BASE_PATH || process.env.BASE_PATH || "",
    }),
    new webpack.HotModuleReplacementPlugin(),    
    new webpack.DefinePlugin({
      "process.env.GIT_TOKEN": JSON.stringify(parsed?.GIT_TOKEN || process.env.GIT_TOKEN),
      "process.env.BASE_PATH": JSON.stringify(parsed?.BASE_PATH || process.env.BASE_PATH)
    })
  ]
};
