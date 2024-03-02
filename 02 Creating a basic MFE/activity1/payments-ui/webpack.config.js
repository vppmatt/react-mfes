const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devServer: {port: 3000,
      historyApiFallback : {
        index : '/index.html'
      }
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
  module: {
      rules: [
        {
            test: /\.(js|jsx|tsx|ts)$/,
            loader: "ts-loader",
            exclude: /node_modules/,
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [ 'style-loader', 'css-loader' ]
        }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
          name: "container",
          remotes : {
                paymentslist: 'paymentslist@http://localhost:3001/remoteEntry.js',
                paymentsadd: 'paymentsadd@http://localhost:3002/remoteEntry.js',
                staticpages: 'staticpages@http://localhost:3003/remoteEntry.js'
          }
        }),
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
      ],
};
