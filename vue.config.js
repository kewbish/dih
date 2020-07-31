module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: 'all',
                minSize: 10000,
                maxSize: 250000,
            }
        }
    }
}