var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'babel-polyfill', 
        // 'webpack-dev-server/client?http://localhost:8080',
        // 'webpack/hot/only-dev-server',
        './entry.js'
    ],
    // entry: {app:'./react-src/index.jsx'},
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath:  + './dist/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'jsx-loader?harmony'
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=react,presets[]=es2015']
            }, 
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", 'css-loader?sourceMap!less-loader')
            },
            { 
                test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            {
                test   : /\.woff/,
                loader : 'url'
            }, {
                test   : /\.ttf/,
                loader : 'file'//?name=[name].[ext]
            }, {
                test   : /\.eot/,
                loader : 'file'
            }, {
                test   : /\.svg/,
                loader : 'file'
            },
            {test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png'},
            {test: /\.jpe?g$/, loader: 'url?limit=8192&mimetype=image/jpg'},
            {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
        ],
    },
    // babel: {
    //   presets: ['es2015','react'],
    // },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less']
    },
    devServer: {
        contentBase: './dist',
        hot:true,
    },
    plugins: [
        new webpack.DefinePlugin({  //react redux production config
          'process.env': {
              NODE_ENV: JSON.stringify('production')
          }
        }),

        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //   compress: {
        //     warnings: false
        //   }
        // })

    ]

};
