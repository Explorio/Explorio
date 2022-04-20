const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// module.exports = {
//   mode: process.env.NODE_ENV,
//   entry: ['regenerator-runtime/runtime.js', './client/index.js'],
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'build'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         options: {
//           presets: [
//             '@babel/preset-env',
//             '@babel/preset-react',
//           ],
//         },
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'sass-loader',
//         ],
//       },
//       {
//         test: /\.png|jpg|gif$/,
//         use: ["file-loader"],
//       },
//       {
//         test: /\.mp4$/,
//         loader: 'file-loader',
//       },
//     ],
//   },
//   devServer: {
//     historyApiFallback: true,
//     static: {
//       publicPath: 'build',
//       directory: path.resolve(__dirname, 'build'),
//     },
//     proxy: {
//       '/': 'http://localhost:3000',
//     },
//   },
//   plugins: [
//     new HtmlWebpackPlugin({ template: './client/index.html' }),
//   ],
// };

module.exports = {
  entry: ['regenerator-runtime/runtime.js', './client/index.js'],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env", "@babel/react"],
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.png|jpg|gif$/,
        use: ["file-loader"],
      },
      {
        test: /\.mp4$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
    }),
    
  ],
  devServer: {
    historyApiFallback: true,
    // static: {
    //   publicPath: "build",
    //   directory: path.resolve(__dirname, "build"),
    // },
    proxy: {
      "/": "http://localhost:3000",
    },
  },
};
