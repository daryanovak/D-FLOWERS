const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [{
                test: /\.jsx?/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                            camelCase: true,
                            import: true,
                            url: true,
                            localIdentName: '[path][name]__[local]'
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                include: path.resolve(__dirname, "public"),
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                  }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin(['public_html']),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './index.html'
        }),
        new CompressionPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
    ],
}
