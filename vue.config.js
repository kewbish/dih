const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: 'all',
                minSize: 10000,
                maxSize: 250000,
            }
        },
        plugins: [
          new MonacoWebpackPlugin({
            languages: ['css', 'html'],
            features: ['!accessibilityHelp', '!codelens', '!multicursor', '!referenceSearch']
          })
        ]
    }
}
