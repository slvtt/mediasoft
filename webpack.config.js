const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin"); // плагин для копирования папок
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';


const filename = ext => isDev ?
    `[name].${ext}` :
    `[name].[fullhash].${ext}`

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (!isDev) {
        config.minimizer = [
            new TerserPlugin(),
        ]
    }

    return config;
}

module.exports = {
    entry: {
        main: ['@babel/polyfill', './index.js']
    },
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'build'),
        environment: {
            arrowFunction: false,
        },
    },
    mode,
    context: path.resolve(__dirname, 'src'),
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, './src/img/'),
                to: path.resolve(__dirname,'./build/img')
            }]
        }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    ['gifsicle', {
                        interlaced: true
                    }],
                    ['jpegtran', {
                        progressive: true
                    }],
                    ['optipng', {
                        optimizationLevel: 5
                    }],
                    ['svgo', {
                        plugins: [{
                            removeViewBox: false
                        }]
                    }],
                ],
            },
        }),

    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                }, ],

            },

            {
                test: /\.html$/,
                loader: 'html-loader',

            },

        ]
    },
    optimization: optimization(),
    devServer: {
        contentBase: './build',
        port:3000, // порт
        open: true, // открывать браузер при запуске
        hot: true, // при добавлении новых модулей сразу их подключать
        compress: true, // gzip компрессия
        overlay: true, // оверлей при ошибках
        writeToDisk: false, // записывать файлы в папку build
        historyApiFallback: true, // использование history HTML5

    },
    devtool: isDev && 'source-map'
}