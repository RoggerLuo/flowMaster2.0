var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'babel-polyfill', 
        // 'webpack-dev-server/client?http://localhost:8080',
        // 'webpack/hot/only-dev-server',
        './entry.js'
    ],
    output: {
        path: __dirname + '/dist',
        // publicPath: "http://localhost:8080/",
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
        // proxy:{
        // '/activiti-rest/service/**': {
        //         target: 'http://activiti.ooad.io/activiti-rest/service',
        //         pathRewrite: {'^/activiti-rest/service' : ''},
        //         secure: false,
        //         changeOrigin: true
        //       }
        // },
    },
    plugins: [

        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]

};
