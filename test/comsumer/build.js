const webpackConfig = require('./webpack.config')
const webpack = require('webpack')
const fs = require('fs-extra')
const path = require('path')

fs.emptyDirSync(path.join(__dirname, './dist'))

webpack(webpackConfig, (err, stats) => {
    if (err) {
        throw err
    }
    process.stdout.write(`${stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    })}`)
})