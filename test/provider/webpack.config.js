// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const path = require('path')

const P = require('../../lib')

module.exports = {
    mode: 'development',
    devtool: false,
    entry: {
        app: `${__dirname}/src/index.js`,
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle-[name].js',
        library: 'xxx',
        libraryTarget: 'umd',
    },
    devServer: {
        contentBase: './dist',
        colors: true,
        historyApiFallback: true,
        inline: true
    },
    plugins: [
        new P()
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'src/index.html')
        // })
    ]
}