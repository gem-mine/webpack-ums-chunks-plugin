const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    devtool: false,
    entry: {
        app: `${__dirname}/src/index.js`,
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle2-[name].js',
    },
    devServer: {
        contentBase: './dist',
        colors: true,
        historyApiFallback: true,
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]
}