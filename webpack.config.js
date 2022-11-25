const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const hash = process.env.NODE_ENV === 'production' ? '.[contenthash]' : '';

const conf = {
    entry: './src/scripts/index.js',

    output: {
        path: `${ __dirname }/dist`,
        filename: `scripts/[name]${hash}.js`,
        clean: true
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new MiniCssExtractPlugin({ 
            filename: `styles/main${hash}.css`
        }),
        new HtmlWebpackPlugin()
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    minSize: 40,
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const moduleName = module
                            .identifier()
                            .split('/')
                            .reduceRight((item) => item)
                            .replace(/^.*[\\\/]/, '')
                            .match(/(^\w+(?=\.))/)[1]

                        return `${moduleName}`;
                    },
                    filename: `scripts/vendors/[name]${hash}.js`
                }
            }
        }
    },
    
    module: {
        rules: [
            {
                test: /\.s[ac]ss$|\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: [{
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            quality: 70
                        }
                    }
                }],
                generator: {
                    filename: 'images/[contenthash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.mp4$/,
                type: 'asset/resource',
                generator: {
                    filename: 'videos/[contenthash][ext]'
                }
            }
        ]
    }
}

module.exports = conf;
