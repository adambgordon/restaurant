const path = require('path');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        // menu: './src/menu.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'the brunch place',
            favicon: './src/assets/logo.png',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.txt$/i,
                use: 'raw-loader',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.(json5|json)$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: [
                    {
                      loader: 'file-loader',
                    },
                  ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-inline-loader'
                    },
                ],
            },
            {
                test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                    name: '[name].[ext]',
                    outputPath: '../fonts/',  
                    publicPath: '../static/fonts' 
                    }
                }]
            },
            
        ],
    },
};