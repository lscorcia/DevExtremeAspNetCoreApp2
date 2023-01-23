/// <binding />
"use strict";

const webpack = require('webpack');
const path = require('path');
const globImporter = require('node-sass-glob-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: __dirname,
    entry: {
        layout: './layout.js'
    },
    output: {
        path: path.join(__dirname, 'wwwroot/dist'),
        filename: '[name].bundle.js'
    },
    target: ['web', 'es5'],         // IE11 support
    module: {
        noParse: /devextreme_custom\.bundle\.js/,
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", // Creates `style` nodes from JS strings
                    "css-loader"    // Translates CSS into CommonJS
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                importer: globImporter()
                            }
                        }
                    }
                ]
            },
            {
                test: require.resolve("jquery"),
                use: [{
                    loader: "expose-loader",
                    options: {
                        exposes: ["$", "jQuery"],
                    }
                }],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'layout.css'
        }),

        // Required by bootstrap-italia to avoid import-ing jQuery
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};
