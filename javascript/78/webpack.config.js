
// const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        // new webpack.BannerPlugin(banner),
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'PCS Webpack Page',
            template: './src/index.html'
        })

    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]

            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            }
        ]
    }



};