/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

const validateOptions = require('schema-utils')
const schema = require('./schema')

class DllReferencePlugin {
    // /**
    //  * @param {DllReferencePluginOptions} options options object
    //  */
    // constructor(options) {
    //     // validateOptions(schema, options, {
    //     //     name: 'Chunk-as-external Plugin'
    //     // })
    //     // this.options = options
    //     // /** @type {WeakMap<Object, {path: string, data: DllReferencePluginOptionsManifest?, error: Error?}>} */
    //     // this._compilationData = new WeakMap()
    // }

    apply(compiler) {
        compiler.hooks.thisCompilation.tap('JsonpTemplatePlugin', (compilation) => {
            console.dir(compilation)
        })
    }
}

module.exports = DllReferencePlugin
