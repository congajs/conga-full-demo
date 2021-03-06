const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    context: path.resolve(__dirname),

    entry: {
        main: ['./index.js']
    },
    output: {
        filename: '[name].[chunkhash].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "stage-0", "react"],
                    plugins: [
                    //["transform-object-rest-spread"],
                    //["transform-react-display-name"],
                    ],
                },
            },
            { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
            { test: /\.(ttf|eot)$/, loader: 'file-loader' },
        ],
        // rules: [
        //     {
        //         test: /\.css$/,
        //         use: ExtractTextPlugin.extract({
        //             fallback: "style-loader",
        //             use: "css-loader"
        //         })
        //     }
        // ]
    },
    plugins: [

        //new ExtractTextPlugin('[name].[chunkhash].css'),

        // Extract all 3rd party modules into a separate 'vendor' chunk
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: ({ resource }) => /node_modules/.test(resource),
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether",
            // Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
            // Button: "exports-loader?Button!bootstrap/js/dist/button",
            // Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
            // Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
            // Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
            // Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
            // Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
            // Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
            // Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
            // Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            // Util: "exports-loader?Util!bootstrap/js/dist/util",
        })


    ]
}
